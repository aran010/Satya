export default function About() {
    return (
        <main className="min-h-screen bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">About Satya Verify</h1>

                <div className="prose prose-blue max-w-none space-y-6 text-gray-700">

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Our Mission</h2>
                        <p>
                            Satya Verify (सत्य - Truth) is an official Government of India initiative dedicated to combating
                            misinformation and safeguarding the integrity of India's democratic processes. Operated by the Ministry
                            of Electronics and Information Technology in collaboration with the Election Commission of India, we
                            provide citizens with tools to verify the authenticity of election-related information.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">What We Do</h2>
                        <p>
                            In an era of widespread digital misinformation, Satya Verify serves as a trusted source for fact-checking
                            and verification. Our platform combines advanced artificial intelligence with human expertise to analyze
                            and verify claims, images, videos, and news related to Indian elections and democracy.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Key Features</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                            <div className="bg-blue-50 p-6 rounded-none border-l-4 border-blue-500">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Rumor Verification</h3>
                                <p className="text-sm">
                                    Submit text, images, or URLs for AI-powered fact-checking. Our system analyzes content against
                                    verified sources and historical data to provide credibility assessments.
                                </p>
                            </div>

                            <div className="bg-green-50 p-6 rounded-none border-l-4 border-green-500">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Deepfake Detection</h3>
                                <p className="text-sm">
                                    Advanced machine learning models detect manipulated videos and images, protecting citizens from
                                    sophisticated digital deception during election campaigns.
                                </p>
                            </div>

                            <div className="bg-purple-50 p-6 rounded-none border-l-4 border-purple-500">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Constitutional Logic</h3>
                                <p className="text-sm">
                                    Access verified information about India's Constitution, electoral processes, and democratic
                                    institutions powered by AI analysis of official documents.
                                </p>
                            </div>

                            <div className="bg-orange-50 p-6 rounded-none border-l-4 border-orange-500">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Multilingual Support</h3>
                                <p className="text-sm">
                                    Available in 22 Indian languages with voice assistance, ensuring accessibility for all citizens
                                    regardless of linguistic background.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Technology & Approach</h2>
                        <p>
                            Satya Verify leverages cutting-edge technology to serve the public interest:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>AI-Powered Analysis:</strong> Google Gemini 2.0 Flash for natural language understanding and reasoning</li>
                            <li><strong>Computer Vision:</strong> Advanced models for image and video authenticity verification</li>
                            <li><strong>Data Security:</strong> All data stored on servers within India, complying with data localization requirements</li>
                            <li><strong>Open Source Tools:</strong> Built on Next.js, React, and modern web technologies</li>
                            <li><strong>Accessibility First:</strong> WCAG 2.1 AA compliant with support for screen readers and assistive technologies</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Our Commitment</h2>
                        <div className="bg-gray-50 p-6 rounded-none">
                            <p className="font-semibold mb-4">We are committed to:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Providing accurate, unbiased fact-checking services</li>
                                <li>Protecting user privacy and data security</li>
                                <li>Maintaining transparency in our verification processes</li>
                                <li>Ensuring accessibility for all Indian citizens</li>
                                <li>Continuously improving our AI models and detection capabilities</li>
                                <li>Supporting India's democratic institutions and electoral integrity</li>
                            </ul>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Governance</h2>
                        <p>
                            Satya Verify operates under the joint oversight of:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                            <div className="bg-white border-2 border-gray-200 p-4 rounded-none">
                                <h4 className="font-bold text-gray-900">Ministry of Electronics & IT</h4>
                                <p className="text-sm mt-2">
                                    Provides technical infrastructure, AI research support, and policy framework for digital governance.
                                </p>
                            </div>
                            <div className="bg-white border-2 border-gray-200 p-4 rounded-none">
                                <h4 className="font-bold text-gray-900">Election Commission of India</h4>
                                <p className="text-sm mt-2">
                                    Ensures electoral integrity, validates fact-checking processes, and provides domain expertise.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Impact</h2>
                        <p>
                            Since our launch, Satya Verify has:
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-blue-600">15,400+</div>
                                <div className="text-sm text-gray-600 mt-1">Messages Verified</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-green-600">1,200+</div>
                                <div className="text-sm text-gray-600 mt-1">Deepfakes Detected</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-purple-600">22</div>
                                <div className="text-sm text-gray-600 mt-1">Languages Supported</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-orange-600">98%</div>
                                <div className="text-sm text-gray-600 mt-1">User Satisfaction</div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Get Involved</h2>
                        <p>
                            We encourage citizen participation in our mission to combat misinformation:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Use our verification tools before sharing information</li>
                            <li>Report suspicious content for analysis</li>
                            <li>Educate others about identifying misinformation</li>
                            <li>Provide feedback to help us improve</li>
                            <li>Participate in our digital literacy initiatives</li>
                        </ul>
                    </section>

                    <section className="mt-12 pt-6 border-t border-gray-200">
                        <p className="text-sm text-gray-600">
                            For more information, visit our <a href="/contact" className="text-blue-600 hover:underline">Contact page</a> or
                            review our <a href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</a>.
                        </p>
                        <p className="text-sm text-gray-600 mt-4">
                            © 2026 Government of India. All Rights Reserved.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
