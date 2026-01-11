export default function HyperlinkPolicy() {
    return (
        <main className="min-h-screen bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">Hyperlink Policy</h1>

                <div className="prose prose-blue max-w-none space-y-6 text-gray-700">
                    <p className="text-sm text-gray-500">Last Updated: January 12, 2026</p>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Purpose</h2>
                        <p>
                            This policy governs the creation of hyperlinks to and from the Satya Verify portal, ensuring compliance
                            with Government of India guidelines and maintaining the integrity of official information.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Links FROM This Portal</h2>

                        <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">2.1 External Links Policy</h3>
                        <p>
                            This portal may provide links to external websites for user convenience and information purposes. These links:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Are provided for information purposes only</li>
                            <li>Do not constitute endorsement of the linked sites</li>
                            <li>May be to government, educational, or reputable fact-checking organizations</li>
                            <li>Are reviewed periodically but may change without notice</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">2.2 Disclaimer for External Links</h3>
                        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                            <p className="font-semibold text-yellow-900">Important Notice:</p>
                            <p className="mt-2">
                                The Government of India is not responsible for the content, accuracy, or opinions expressed on external
                                websites. Users access external links at their own risk.
                            </p>
                        </div>

                        <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">2.3 Link Selection Criteria</h3>
                        <p>External links on this portal are selected based on:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Relevance to fact-checking and election information</li>
                            <li>Reliability and credibility of the source</li>
                            <li>Compliance with Government of India policies</li>
                            <li>No commercial or promotional intent</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Links TO This Portal</h2>

                        <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">3.1 Permission to Link</h3>
                        <p>
                            Websites may link to Satya Verify portal pages without prior permission, provided the following conditions
                            are met:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>The link is to the homepage or specific content pages (not files)</li>
                            <li>The link opens in a new browser window or clearly indicates departure from linking site</li>
                            <li>The link does not misrepresent our content or services</li>
                            <li>The linking site does not contain objectionable content</li>
                            <li>No suggestion of Government endorsement of the linking site</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">3.2 Prohibited Linking Practices</h3>
                        <p>The following linking practices are strictly prohibited:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Framing:</strong> Embedding our pages within frames of another website</li>
                            <li><strong>Deep linking:</strong> Linking directly to internal pages bypassing the homepage (requires permission)</li>
                            <li><strong>Misleading links:</strong> Using link text that misrepresents our content</li>
                            <li><strong>Commercial exploitation:</strong> Using links for commercial gain without authorization</li>
                            <li><strong>Automated scraping:</strong> Using bots to extract content via links</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">3.3 Preferred Linking Format</h3>
                        <div className="bg-gray-50 p-4 rounded-none">
                            <p className="font-semibold mb-2">Recommended HTML:</p>
                            <code className="block bg-white p-3 rounded-none border text-sm font-mono">
                                &lt;a href="https://satya.gov.in" target="_blank" rel="noopener"&gt;<br />
                                &nbsp;&nbsp;Satya Verify - Government Fact Check Portal<br />
                                &lt;/a&gt;
                            </code>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Links to Government Websites</h2>
                        <p>
                            This portal links to various Government of India websites and official sources. These include:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Election Commission of India (eci.gov.in)</li>
                            <li>Ministry of Electronics & IT (meity.gov.in)</li>
                            <li>India.gov.in (National Portal)</li>
                            <li>PIB (Press Information Bureau)</li>
                            <li>Other government fact-checking initiatives</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Broken Links</h2>
                        <p>
                            If you encounter broken links on this portal, please report them to:
                        </p>
                        <div className="bg-gray-50 p-4 rounded-none mt-4">
                            <p>Email: webmaster@satya.gov.in</p>
                            <p>Subject: Broken Link Report</p>
                            <p className="mt-2 text-sm">Please include the page URL and the broken link location.</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Social Media Links</h2>
                        <p>
                            Official social media accounts are linked from this portal. Users should verify authenticity through
                            the blue verification badge on social platforms.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Link Removal Requests</h2>
                        <p>
                            The Government of India reserves the right to request removal of any link to this portal if the linking
                            site violates these guidelines or is deemed inappropriate. Link removal requests can be sent to
                            copyright@satya.gov.in.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Contact for Linking Queries</h2>
                        <div className="bg-gray-50 p-4 rounded-none">
                            <p className="font-semibold">For linking-related queries:</p>
                            <p>Email: webmaster@satya.gov.in</p>
                            <p>Subject: Hyperlink Policy Query</p>
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
