import { useSEO } from '../utils/seo';

export default function PrivacyPolicyPage() {
  useSEO({
    title: 'Privacy Policy | Revival Family Chiropractic',
    description: 'Privacy Policy for Revival Family Chiropractic. Learn how we protect and handle your personal information.',
    canonical: 'https://revivalfamilychiropractic.com/privacy-policy',
  });

  return (
    <main className="pt-24 pb-20 px-4 bg-gradient-to-br from-green-50 to-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
          <section>
            <p className="text-gray-600 mb-4">
              <strong>Effective Date:</strong> {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
            <p className="text-gray-700 leading-relaxed">
              Revival Family Chiropractic ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Personal Information</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may collect personal information that you voluntarily provide to us, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Name, email address, phone number</li>
              <li>Mailing address</li>
              <li>Health information and medical history (protected under HIPAA)</li>
              <li>Insurance information</li>
              <li>Payment information (processed securely through third-party payment processors)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Automatically Collected Information</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you visit our website, we may automatically collect certain information about your device, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website addresses</li>
              <li>Device information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Provide, operate, and maintain our chiropractic services</li>
              <li>Process appointments and communicate with you about your care</li>
              <li>Process payments and maintain financial records</li>
              <li>Send you appointment reminders and health-related information</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations, including HIPAA regulations</li>
              <li>Send you marketing communications (with your consent)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">HIPAA Compliance</h2>
            <p className="text-gray-700 leading-relaxed">
              As a healthcare provider, we comply with the Health Insurance Portability and Accountability Act (HIPAA). Your protected health information (PHI) is kept strictly confidential and is only used and disclosed as permitted or required by law. We maintain appropriate administrative, technical, and physical safeguards to protect your PHI.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Disclosure of Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may share your information in the following situations:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Healthcare Operations:</strong> With other healthcare providers involved in your care</li>
              <li><strong>Legal Compliance:</strong> When required by law or legal process</li>
              <li><strong>Business Partners:</strong> With trusted service providers who assist in our operations (e.g., payment processors, email services)</li>
              <li><strong>Emergency Situations:</strong> To protect your vital interests or the interests of others</li>
              <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
            <p className="text-gray-700 leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking Technologies</h2>
            <p className="text-gray-700 leading-relaxed">
              Our website may use cookies and similar tracking technologies to enhance your browsing experience. You can control cookies through your browser settings, though disabling cookies may affect website functionality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Privacy Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Depending on your location, you may have certain rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Access and review your personal information</li>
              <li>Request corrections to inaccurate information</li>
              <li>Request deletion of your information (subject to legal and regulatory requirements)</li>
              <li>Opt-out of marketing communications</li>
              <li>Receive a copy of your protected health information (under HIPAA)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              While we provide pediatric chiropractic services, our website is not directed to children under 13. We do not knowingly collect personal information from children under 13 through our website without parental consent. If you believe we have collected information from a child under 13, please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Links</h2>
            <p className="text-gray-700 leading-relaxed">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any third-party websites you visit.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Effective Date" at the top. Your continued use of our services after changes are posted constitutes your acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have questions or concerns about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-700">
              <p className="text-gray-800 font-semibold mb-2">Revival Family Chiropractic</p>
              <p className="text-gray-700">5527 Monroe Rd</p>
              <p className="text-gray-700">Charlotte, NC 28212</p>
              <p className="text-gray-700 mt-2">Phone: <a href="tel:704-568-2447" className="text-green-700 hover:underline">(704) 568-2447</a></p>
              <p className="text-gray-700">Email: <a href="mailto:admin@chirobryan.com" className="text-green-700 hover:underline">admin@chirobryan.com</a></p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
