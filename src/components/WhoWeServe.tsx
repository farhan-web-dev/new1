import { Baby, Users, Heart, Activity } from 'lucide-react';

const audiences = [
  {
    icon: Baby,
    title: 'Kids & Infants',
    description: 'Supporting healthy development from birth through childhood with gentle, specialized care.',
    color: 'bg-blue-100 text-blue-700'
  },
  {
    icon: Users,
    title: 'Families',
    description: 'Whole-family wellness plans that bring everyone into alignment and vitality.',
    color: 'bg-green-100 text-green-700'
  },
  {
    icon: Heart,
    title: 'Expectant Moms',
    description: 'Prenatal care that supports comfort, alignment, and a healthy pregnancy journey.',
    color: 'bg-pink-100 text-pink-700'
  },
  {
    icon: Activity,
    title: 'Adults',
    description: 'Helping you overcome pain, regain energy, and restore the health you deserve.',
    color: 'bg-amber-100 text-amber-700'
  }
];

export default function WhoWeServe() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Who We Serve
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From newborns to grandparents, we provide holistic care for every stage of life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="group p-8 bg-white rounded-2xl border-2 border-gray-100 hover:border-green-700 transition-all hover:shadow-xl"
            >
              <div className={`w-16 h-16 ${audience.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <audience.icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {audience.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
