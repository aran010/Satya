"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, Search } from "lucide-react";

export default function Help() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [searchQuery, setSearchQuery] = useState("");

    const faqs = [
        {
            category: "Getting Started",
            questions: [
                {
                    q: "What is Satya Verify?",
                    a: "Satya Verify is an official Government of India portal for fact-checking and verifying election-related information. It uses AI technology to detect misinformation, deepfakes, and provide accurate information about India's democratic processes."
                },
                {
                    q: "Is Satya Verify free to use?",
                    a: "Yes, Satya Verify is completely free for all Indian citizens. There are no charges for using any of our verification services."
                },
                {
                    q: "How do I submit content for verification?",
                    a: "Navigate to the home page and choose your verification method: Text (paste text), Image (upload screenshot), or URL (paste link). Click 'Verify' and our AI will analyze the content within seconds."
                }
            ]
        },
        {
            category: "Verification Services",
            questions: [
                {
                    q: "How accurate is the verification?",
                    a: "Our AI models have been trained on extensive datasets and achieve high accuracy rates. However, results should be considered probabilistic assessments. We recommend cross-referencing with official sources for critical decisions."
                },
                {
                    q: "What types of content can I verify?",
                    a: "You can verify: (1) Text messages and claims, (2) Images and screenshots, (3) Website URLs, (4) Videos for deepfake detection, (5) YouTube videos. We support multiple Indian languages."
                },
                {
                    q: "How long does verification take?",
                    a: "Most verifications complete within 5-10 seconds. Complex deepfake analysis may take up to 30 seconds depending on video length."
                },
                {
                    q: "Can I verify content in regional languages?",
                    a: "Yes! Satya Verify supports all 22 scheduled Indian languages. Our AI can analyze and provide results in your preferred language."
                }
            ]
        },
        {
            category: "Deepfake Detection",
            questions: [
                {
                    q: "What is a deepfake?",
                    a: "A deepfake is a manipulated video or image created using AI to make it appear that someone said or did something they didn't. These are increasingly used to spread misinformation during elections."
                },
                {
                    q: "How does deepfake detection work?",
                    a: "Our advanced machine learning models analyze facial movements, audio-visual synchronization, lighting inconsistencies, and other telltale signs of manipulation to detect deepfakes."
                },
                {
                    q: "Can all deepfakes be detected?",
                    a: "While our technology is highly advanced, extremely sophisticated deepfakes may evade detection. We continuously update our models to stay ahead of manipulation techniques."
                }
            ]
        },
        {
            category: "Privacy & Security",
            questions: [
                {
                    q: "Is my data safe?",
                    a: "Yes. All data is encrypted and stored on servers within India. We comply with Government of India data protection guidelines. See our Privacy Policy for details."
                },
                {
                    q: "Do you store the content I submit?",
                    a: "Content submitted for verification is used only for analysis and may be retained for improving our AI models. Personal information is not shared with third parties."
                },
                {
                    q: "Can I delete my submitted content?",
                    a: "Yes. Contact us at privacy@satya.gov.in with your request. We'll process deletion requests within 30 days, subject to legal retention requirements."
                }
            ]
        },
        {
            category: "Accessibility",
            questions: [
                {
                    q: "Is Satya Verify accessible to people with disabilities?",
                    a: "Yes. We're committed to WCAG 2.1 Level AA compliance. Features include screen reader support, keyboard navigation, font size controls, and high contrast mode."
                },
                {
                    q: "How do I adjust font size?",
                    a: "Click the 'Accessibility' button in the top-right corner. Choose from Small, Medium, Large, or Extra Large text sizes. Your preference is saved automatically."
                },
                {
                    q: "What is high contrast mode?",
                    a: "High contrast mode inverts colors (black background, white text, yellow links) for better visibility. Enable it from the Accessibility controls in the top-right corner."
                }
            ]
        },
        {
            category: "Technical Issues",
            questions: [
                {
                    q: "The site isn't loading. What should I do?",
                    a: "Try: (1) Refresh the page, (2) Clear browser cache, (3) Try a different browser, (4) Check your internet connection. If issues persist, email tech@satya.gov.in"
                },
                {
                    q: "My verification is stuck. What's wrong?",
                    a: "Large files or complex videos may take longer. Wait up to 60 seconds. If still stuck, refresh the page and try again. Contact support if the problem continues."
                },
                {
                    q: "Which browsers are supported?",
                    a: "Satya Verify works on all modern browsers: Chrome, Firefox, Safari, Edge, and Opera. Mobile browsers are also supported."
                }
            ]
        },
        {
            category: "Legal & Compliance",
            questions: [
                {
                    q: "Is Satya Verify an official government portal?",
                    a: "Yes. Satya Verify is operated by the Ministry of Electronics & IT in collaboration with the Election Commission of India."
                },
                {
                    q: "Can I use Satya Verify's analysis in legal proceedings?",
                    a: "Our analysis provides probabilistic assessments, not conclusive legal evidence. Consult legal experts and official sources for matters requiring legal proof."
                },
                {
                    q: "How do I report a bug or suggest improvements?",
                    a: "Use our Contact page or email support@satya.gov.in with detailed information. We appreciate citizen feedback!"
                }
            ]
        }
    ];

    const filteredFaqs = faqs.map(category => ({
        ...category,
        questions: category.questions.filter(
            faq =>
                faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
                faq.a.toLowerCase().includes(searchQuery.toLowerCase())
        )
    })).filter(category => category.questions.length > 0);

    return (
        <main className="min-h-screen bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                {/* Header */}
                <div className="text-center mb-12">
                    <div className="flex justify-center mb-4">
                        <HelpCircle className="w-16 h-16 text-blue-600" />
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">Help & Frequently Asked Questions</h1>
                    <p className="text-gray-700 max-w-2xl mx-auto">
                        Find answers to common questions about Satya Verify. Can't find what you're looking for?
                        <a href="/contact" className="text-blue-600 hover:underline ml-1">Contact us</a>.
                    </p>
                </div>

                {/* Search */}
                <div className="mb-8">
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search FAQs..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                </div>

                {/* FAQs */}
                <div className="space-y-8">
                    {filteredFaqs.map((category, catIndex) => (
                        <div key={catIndex}>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-blue-500">
                                {category.category}
                            </h2>
                            <div className="space-y-3">
                                {category.questions.map((faq, faqIndex) => {
                                    const globalIndex = catIndex * 100 + faqIndex;
                                    const isOpen = openFaq === globalIndex;

                                    return (
                                        <div
                                            key={faqIndex}
                                            className="border border-gray-200 rounded-none overflow-hidden"
                                        >
                                            <button
                                                onClick={() => setOpenFaq(isOpen ? null : globalIndex)}
                                                className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                                            >
                                                <span className="font-semibold text-gray-900 pr-4">{faq.q}</span>
                                                <ChevronDown
                                                    className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''
                                                        }`}
                                                />
                                            </button>
                                            {isOpen && (
                                                <div className="px-4 pb-4 text-gray-700 bg-gray-50">
                                                    {faq.a}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>

                {/* No results */}
                {searchQuery && filteredFaqs.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-600 mb-4">No FAQs match your search.</p>
                        <button
                            onClick={() => setSearchQuery('')}
                            className="text-blue-600 hover:underline"
                        >
                            Clear search
                        </button>
                    </div>
                )}

                {/* Quick Links */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <a
                        href="/contact"
                        className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded-none hover:bg-blue-100 transition-colors"
                    >
                        <h3 className="font-semibold text-gray-900 mb-1">Contact Support</h3>
                        <p className="text-sm text-gray-600">Email: support@satya.gov.in</p>
                    </a>
                    <a
                        href="/accessibility-statement"
                        className="p-4 bg-green-50 border-l-4 border-green-500 rounded-none hover:bg-green-100 transition-colors"
                    >
                        <h3 className="font-semibold text-gray-900 mb-1">Accessibility</h3>
                        <p className="text-sm text-gray-600">Learn about our accessibility features</p>
                    </a>
                    <a
                        href="/about"
                        className="p-4 bg-purple-50 border-l-4 border-purple-500 rounded-none hover:bg-purple-100 transition-colors"
                    >
                        <h3 className="font-semibold text-gray-900 mb-1">About Satya</h3>
                        <p className="text-sm text-gray-600">Learn more about this portal</p>
                    </a>
                </div>

                <section className="mt-12 pt-6 border-t border-gray-200">
                    <p className="text-sm text-gray-600">
                        © 2026 Government of India. All Rights Reserved.
                    </p>
                </section>
            </div>
        </main>
    );
}
