export default function AccessibilityStatement() {
    return (
        <main className="min-h-screen bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">Accessibility Statement</h1>

                <div className="prose prose-blue max-w-none space-y-6 text-gray-700">
                    <p className="text-sm text-gray-500">Last Updated: January 11, 2026</p>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Our Commitment to Accessibility</h2>
                        <p>
                            The Government of India is committed to ensuring digital accessibility for all citizens, including persons
                            with disabilities. We strive to continuously improve the accessibility of our Satya Verify portal in accordance
                            with the Rights of Persons with Disabilities Act, 2016.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Conformance Status</h2>
                        <p>
                            This portal aims to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards.
                            These guidelines ensure that content is accessible to a wider range of people with disabilities.
                        </p>
                        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
                            <p className="font-semibold text-blue-900">Current Compliance Level: WCAG 2.1 Level AA (In Progress)</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Accessibility Features</h2>
                        <p>Our portal includes the following accessibility features:</p>

                        <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">Keyboard Navigation</h3>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>All interactive elements are accessible via keyboard</li>
                            <li>Tab key navigation through all clickable elements</li>
                            <li>"Skip to main content" link for easy navigation</li>
                            <li>Logical tab order throughout the site</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">Screen Reader Compatibility</h3>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>ARIA labels on all interactive components</li>
                            <li>Semantic HTML structure</li>
                            <li>Alternative text for images</li>
                            <li>Properly labeled form fields</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">Visual Accessibility</h3>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>High contrast color schemes</li>
                            <li>Clear focus indicators</li>
                            <li>Readable font sizes</li>
                            <li>Responsive design for different screen sizes</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">Multilingual Support</h3>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Content available in 22 Indian languages</li>
                            <li>Voice-based assistance in multiple languages</li>
                            <li>Unicode (UTF-8) encoding for Indic scripts</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Known Limitations</h2>
                        <p>Despite our efforts, some limitations may exist:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Some third-party embedded content may not be fully accessible</li>
                            <li>Complex visualizations may require alternative text descriptions</li>
                            <li>Certain interactive features may have limited mobile accessibility</li>
                        </ul>
                        <p className="mt-4">We are actively working to address these limitations in ongoing updates.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Assistive Technologies</h2>
                        <p>This portal has been tested with the following assistive technologies:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>JAWS (Job Access With Speech)</li>
                            <li>NVDA (NonVisual Desktop Access)</li>
                            <li>VoiceOver (macOS and iOS)</li>
                            <li>TalkBack (Android)</li>
                            <li>Keyboard-only navigation</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Feedback and Contact</h2>
                        <p>
                            We welcome your feedback on the accessibility of Satya Verify. If you encounter any accessibility barriers or
                            have suggestions for improvement, please contact us:
                        </p>
                        <div className="bg-gray-50 p-4 rounded-none mt-4">
                            <p className="font-semibold">Accessibility Coordinator</p>
                            <p>Email: accessibility@satya.gov.in</p>
                            <p>Phone: 1800-XXX-XXXX (Toll Free)</p>
                            <p className="mt-2 text-sm">We aim to respond to accessibility feedback within 5 business days.</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Formal Complaints</h2>
                        <p>
                            If you are not satisfied with our response to your accessibility concerns, you may file a formal complaint with:
                        </p>
                        <div className="bg-gray-50 p-4 rounded-none mt-4">
                            <p className="font-semibold">Chief Commissioner for Persons with Disabilities</p>
                            <p>Department of Empowerment of Persons with Disabilities</p>
                            <p>Ministry of Social Justice and Empowerment</p>
                            <p>Government of India</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Continuous Improvement</h2>
                        <p>
                            We continuously evaluate and update our portal to ensure compliance with evolving accessibility standards.
                            This accessibility statement will be reviewed and updated regularly to reflect our current status.
                        </p>
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
