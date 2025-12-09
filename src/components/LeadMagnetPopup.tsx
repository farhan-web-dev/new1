import { X, Stethoscope, Leaf, Baby } from 'lucide-react';
import { useState } from 'react';
import { captureLead } from '../lib/supabase';

interface LeadMagnetPopupProps {
  show: boolean;
  onClose: () => void;
}

type JourneyType = 'chiropractic' | 'holistic' | 'pediatric' | null;

export default function LeadMagnetPopup({ show, onClose }: LeadMagnetPopupProps) {
  const [step, setStep] = useState<'journey' | 'form' | 'success'>('journey');
  const [selectedJourney, setSelectedJourney] = useState<JourneyType>(null);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  if (!show) return null;

  const journeys = [
    {
      type: 'chiropractic' as const,
      icon: Stethoscope,
      title: 'Chiropractic Care',
      description: 'Personal injury, pain relief, and spinal health',
      color: 'from-blue-600 to-blue-700',
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-700',
    },
    {
      type: 'holistic' as const,
      icon: Leaf,
      title: 'Holistic Wellness',
      description: 'Functional nutrition and nervous system balance',
      color: 'from-green-600 to-emerald-600',
      bgColor: 'bg-green-100',
      textColor: 'text-green-700',
    },
    {
      type: 'pediatric' as const,
      icon: Baby,
      title: 'Pediatric Care',
      description: 'Gentle care for infants, children, and families',
      color: 'from-pink-600 to-rose-600',
      bgColor: 'bg-pink-100',
      textColor: 'text-pink-700',
    },
  ];

  const handleJourneySelect = (journey: JourneyType) => {
    setSelectedJourney(journey);
    setStep('form');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedJourney) return;

    setSubmitting(true);
    setError('');

    try {
      await captureLead({
        email,
        journey_type: selectedJourney,
        name: name || undefined,
      });
      setStep('success');
      setTimeout(() => {
        handleClose();
      }, 3000);
    } catch (err) {
      console.error('Error capturing lead:', err);
      setError('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setStep('journey');
      setSelectedJourney(null);
      setEmail('');
      setName('');
      setError('');
    }, 300);
  };

  const handleBack = () => {
    setStep('journey');
    setSelectedJourney(null);
    setError('');
  };

  const selectedJourneyData = journeys.find(j => j.type === selectedJourney);

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-8 relative shadow-2xl">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
        >
          <X size={20} />
        </button>

        {step === 'journey' && (
          <>
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                Choose Your Journey
              </h3>
              <p className="text-gray-600">
                Tell us what brings you here today
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {journeys.map((journey) => {
                const Icon = journey.icon;
                return (
                  <button
                    key={journey.type}
                    onClick={() => handleJourneySelect(journey.type)}
                    className="group p-6 border-2 border-gray-200 rounded-2xl hover:border-gray-300 transition-all hover:shadow-lg"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-br ${journey.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="text-white" size={32} />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">
                      {journey.title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {journey.description}
                    </p>
                  </button>
                );
              })}
            </div>
          </>
        )}

        {step === 'form' && selectedJourneyData && (
          <>
            <button
              onClick={handleBack}
              className="mb-6 text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
            >
              ← Back to journey selection
            </button>

            <div className="text-center mb-6">
              <div className={`w-16 h-16 bg-gradient-to-br ${selectedJourneyData.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                <selectedJourneyData.icon className="text-white" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                Start Your {selectedJourneyData.title} Journey
              </h3>
              <p className="text-gray-600">
                Get our free wellness guide plus personalized tips delivered to your inbox
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name (Optional)
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-700 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-700 focus:outline-none transition-colors"
                />
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-green-700 text-white py-3 rounded-xl hover:bg-green-800 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? 'Sending...' : 'Get Your Free Guide'}
              </button>
            </form>

            <p className="text-xs text-gray-500 text-center mt-4">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </>
        )}

        {step === 'success' && selectedJourneyData && (
          <div className="text-center py-8">
            <div className={`w-20 h-20 ${selectedJourneyData.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
              <span className={`text-4xl ${selectedJourneyData.textColor}`}>✓</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Welcome to Your Journey!</h3>
            <p className="text-gray-600 mb-4">
              Check your email for your personalized {selectedJourneyData.title.toLowerCase()} wellness guide.
            </p>
            <p className="text-sm text-gray-500">
              We'll be sending you helpful tips tailored to your wellness goals.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
