import { useSEO } from '../utils/seo';

export default function TermsOfServicePage() {
  useSEO({
    title: 'Terms of Service | Revival Family Chiropractic',
    description: 'Terms of Service for Revival Family Chiropractic. Review the terms and conditions for using our services and website.',
    canonical: 'https://revivalfamilychiropractic.com/terms-of-service',
  });

  return (
    <main className="pt-24 pb-20 px-4 bg-gradient-to-br from-green-50 to-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">Terms of Service</h1>

        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
          <section>
            <p className="text-gray-600 mb-4">
              <strong>Effective Date:</strong> {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
            <p className="text-gray-700 leading-relaxed">
              Welcome to Revival Family Chiropractic. These Terms of Service ("Terms") govern your use of our website and services. By accessing or using our services, you agree to be bound by these Terms. If you do not agree with these Terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Services Provided</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Revival Family Chiropractic provides chiropractic care, functional nutrition counseling, and related wellness services. Our services are provided by licensed healthcare professionals and are intended to support your health and wellness goals.
            </p>
            <p className="text-gray-700 leading-relaxed">
              All services are subject to evaluation and acceptance by our practitioners. We reserve the right to decline service to any individual if we determine that our services are not appropriate for their needs.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Patient Responsibilities</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              As a patient or potential patient, you agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Provide accurate and complete health information</li>
              <li>Inform us of any changes to your health status or medications</li>
              <li>Follow treatment recommendations and care plans</li>
              <li>Attend scheduled appointments or provide at least 24 hours notice for cancellations</li>
              <li>Pay for services rendered according to our payment policies</li>
              <li>Treat our staff and other patients with respect</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Appointments and Cancellations</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Scheduling:</strong> Appointments can be scheduled by phone, email, or through our website. Appointment availability is subject to provider schedules.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Cancellations:</strong> We require at least 24 hours notice for appointment cancellations or rescheduling. Late cancellations or no-shows may result in a cancellation fee.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Late Arrivals:</strong> If you arrive more than 15 minutes late for your appointment, we may need to reschedule your visit to avoid impacting other patients.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Fees and Payment</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Payment for services is due at the time of service unless other arrangements have been made in advance. We accept various forms of payment including cash, credit cards, and insurance (where applicable).
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Insurance:</strong> While we may accept insurance, you are ultimately responsible for all charges incurred. We will assist in filing insurance claims, but payment is your responsibility if your insurance does not cover services.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Refunds:</strong> Refund requests will be considered on a case-by-case basis. Services already rendered are generally non-refundable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Medical Disclaimer</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The information provided on our website and during consultations is for educational purposes and should not be considered a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Chiropractic care, like all forms of healthcare, has potential risks and benefits. We will discuss these with you before beginning treatment. Your continued use of our services constitutes informed consent to treatment.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Privacy and Confidentiality</h2>
            <p className="text-gray-700 leading-relaxed">
              We are committed to protecting your privacy and maintaining the confidentiality of your health information in accordance with HIPAA regulations. Please refer to our <a href="/privacy-policy" className="text-green-700 hover:underline font-semibold">Privacy Policy</a> for detailed information about how we collect, use, and protect your personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Website Use</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              By using our website, you agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Use the website only for lawful purposes</li>
              <li>Not attempt to gain unauthorized access to any part of the website</li>
              <li>Not transmit any malicious code, viruses, or harmful content</li>
              <li>Not collect or harvest information about other users</li>
              <li>Not use the website in any way that could damage, disable, or impair our services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed">
              All content on our website, including text, graphics, logos, images, and software, is the property of Revival Family Chiropractic or its content suppliers and is protected by copyright and intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed">
              To the fullest extent permitted by law, Revival Family Chiropractic shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of our services or website. Our total liability shall not exceed the amount paid by you for the services in question.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Testimonials and Reviews</h2>
            <p className="text-gray-700 leading-relaxed">
              Patient testimonials and reviews displayed on our website are genuine experiences from real patients. However, individual results may vary, and testimonials do not guarantee specific outcomes for your treatment.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Third-Party Links</h2>
            <p className="text-gray-700 leading-relaxed">
              Our website may contain links to third-party websites. We are not responsible for the content, accuracy, or practices of external websites. Your use of third-party websites is at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Termination</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to terminate or suspend your access to our services at any time, without prior notice, for conduct that we believe violates these Terms or is harmful to other patients, our staff, or our business interests.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Governing Law</h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of the State of North Carolina, without regard to its conflict of law provisions. Any disputes arising from these Terms or your use of our services shall be resolved in the courts of Mecklenburg County, North Carolina.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Changes to These Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify these Terms at any time. We will notify you of any material changes by posting the updated Terms on our website with a new effective date. Your continued use of our services after changes are posted constitutes your acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-700">
              <p className="text-gray-800 font-semibold mb-2">Revival Family Chiropractic</p>
              <p className="text-gray-700">5527 Monroe Rd</p>
              <p className="text-gray-700">Charlotte, NC 28212</p>
              <p className="text-gray-700 mt-2">Phone: <a href="tel:704-568-2447" className="text-green-700 hover:underline">(704) 568-2447</a></p>
              <p className="text-gray-700">Email: <a href="mailto:admin@chirobryan.com" className="text-green-700 hover:underline">admin@chirobryan.com</a></p>
            </div>
          </section>

          <section className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-700">
            <p className="text-gray-800 font-semibold mb-2">Acknowledgment</p>
            <p className="text-gray-700">
              By using our services or website, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
