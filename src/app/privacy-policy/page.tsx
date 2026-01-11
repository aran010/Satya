export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>

                <div className="prose prose-blue max-w-none space-y-6 text-gray-700">
                    <p className="text-sm text-gray-500">Last Updated: January 11, 2026</p>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Introduction</h2>
                        <p>
                            This Privacy Policy describes how Satya Verify, a Government of India portal operated by the Ministry of Electronics
                            and Information Technology in collaboration with the Election Commission of India, collects, uses, and protects your
                            personal information.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Information We Collect</h2>
                        <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">2.1 Information You Provide</h3>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Content submitted for verification (text, images, URLs)</li>
                            <li>Contact information when you reach out to us</li>
                            <li>Feedback and survey responses</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">2.2 Automatically Collected Information</h3>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Device and browser information</li>
                            <li>IP address and location data</li>
                            <li>Usage statistics and interaction patterns</li>
                            <li>Cookies and similar tracking technologies</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. How We Use Your Information</h2>
                        <p>We use collected information for:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Providing fact-checking and verification services</li>
                            <li>Improving our AI models and detection capabilities</li>
                            <li>Analyzing trends in misinformation spread</li>
                            <li>Communicating with you about service updates</li>
                            <li>Complying with legal obligations</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Data Protection and Security</h2>
                        <p>
                            We implement appropriate technical and organizational measures to protect your personal data against unauthorized
                            access, alteration, disclosure, or destruction. This includes:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Encryption of data in transit and at rest</li>
                            <li>Regular security audits and assessments</li>
                            <li>Access controls and authentication mechanisms</li>
                            <li>Compliance with Government of India IT security guidelines</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Data Storage and Residency</h2>
                        <p>
                            All data collected through this portal is stored on servers located within India, in compliance with data
                            localization requirements and Government of India policies.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Your Rights</h2>
                        <p>You have the right to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Access your personal information</li>
                            <li>Request correction of inaccurate data</li>
                            <li>Request deletion of your data (subject to legal retention requirements)</li>
                            <li>Withdraw consent for data processing</li>
                            <li>File complaints with relevant authorities</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Third-Party Services</h2>
                        <p>
                            We may use third-party services for analytics and service improvement. These services are bound by their own
                            privacy policies and our data protection agreements.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Changes to This Policy</h2>
                        <p>
                            We may update this Privacy Policy from time to time. We will notify users of any material changes by posting
                            the new policy on this page with an updated "Last Updated" date.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. Contact Us</h2>
                        <p>For privacy-related queries, contact:</p>
                        <div className="bg-gray-50 p-4 rounded-none mt-4">
                            <p className="font-semibold">Privacy Officer</p>
                            <p>Ministry of Electronics & Information Technology</p>
                            <p>Email: privacy@satya.gov.in</p>
                            <p>Phone: 1800-XXX-XXXX</p>
                        </div>
                    </section>

                    <section className="mt-12 pt-6 border-t border-gray-200">
                        <p className="text-sm text-gray-600">
                            © 2026 Government of India. All Rights Reserved.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
