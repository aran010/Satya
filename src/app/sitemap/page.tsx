import Link from "next/link";
import { FileText, Shield, Scale, Headphones, Globe, Accessibility, Users, BookOpen } from "lucide-react";
import { Breadcrumb } from "@/components/Breadcrumb";

export default function Sitemap() {
    return (
        <main className="min-h-screen bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">Sitemap</h1>
                <p className="text-gray-700 mb-8">
                    Navigate through all pages and features available on the Satya Verify portal.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Main Pages */}
                    <div className="bg-blue-50 p-6 rounded-none border-l-4 border-blue-500">
                        <div className="flex items-center gap-2 mb-4">
                            <Shield className="w-6 h-6 text-blue-600" />
                            <h2 className="text-xl font-semibold text-gray-900">Main Portal</h2>
                        </div>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-blue-600 hover:underline">
                                    Home / Rumor Verification
                                </Link>
                            </li>
                            <li>
                                <Link href="/#logic" className="text-blue-600 hover:underline">
                                    Constitutional Logic
                                </Link>
                            </li>
                            <li>
                                <Link href="/#deepfake" className="text-blue-600 hover:underline">
                                    Deepfake Detection
                                </Link>
                            </li>
                            <li>
                                <Link href="/#voice" className="text-blue-600 hover:underline">
                                    Voice Assistant
                                </Link>
                            </li>
                            <li>
                                <Link href="/#accessibility" className="text-blue-600 hover:underline">
                                    Accessibility & Voting Rights
                                </Link>
                            </li>
                            <li>
                                <Link href="/#game" className="text-blue-600 hover:underline">
                                    Constitutional Architect (Game)
                                </Link>
                            </li>
                            <li>
                                <Link href="/#dividend" className="text-blue-600 hover:underline">
                                    Democracy Dividend
                                </Link>
                            </li>
                            <li>
                                <Link href="/#news" className="text-blue-600 hover:underline">
                                    Election News Aggregator
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Information Pages */}
                    <div className="bg-green-50 p-6 rounded-none border-l-4 border-green-500">
                        <div className="flex items-center gap-2 mb-4">
                            <BookOpen className="w-6 h-6 text-green-600" />
                            <h2 className="text-xl font-semibold text-gray-900">Information</h2>
                        </div>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about" className="text-green-600 hover:underline">
                                    About This Portal
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-green-600 hover:underline">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/rti" className="text-green-600 hover:underline">
                                    Right to Information (RTI)
                                </Link>
                            </li>
                            <li>
                                <Link href="/sitemap" className="text-green-600 hover:underline">
                                    Sitemap (This Page)
                                </Link>
                            </li>
                            <li>
                                <Link href="/#help" className="text-green-600 hover:underline">
                                    Help & FAQ
                                </Link>
                            </li>
                            <li>
                                <Link href="/#guidelines" className="text-green-600 hover:underline">
                                    Guidelines
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal & Policies */}
                    <div className="bg-purple-50 p-6 rounded-none border-l-4 border-purple-500">
                        <div className="flex items-center gap-2 mb-4">
                            <Scale className="w-6 h-6 text-purple-600" />
                            <h2 className="text-xl font-semibold text-gray-900">Legal & Policies</h2>
                        </div>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/privacy-policy" className="text-purple-600 hover:underline">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms-conditions" className="text-purple-600 hover:underline">
                                    Terms & Conditions
                                </Link>
                            </li>
                            <li>
                                <Link href="/copyright-policy" className="text-purple-600 hover:underline">
                                    Copyright Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/hyperlink-policy" className="text-purple-600 hover:underline">
                                    Hyperlink Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/disclaimer" className="text-purple-600 hover:underline">
                                    Disclaimer
                                </Link>
                            </li>
                            <li>
                                <Link href="/accessibility-statement" className="text-purple-600 hover:underline">
                                    Accessibility Statement
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Verification Features */}
                    <div className="bg-orange-50 p-6 rounded-none border-l-4 border-orange-500">
                        <div className="flex items-center gap-2 mb-4">
                            <FileText className="w-6 h-6 text-orange-600" />
                            <h2 className="text-xl font-semibold text-gray-900">Verification Tools</h2>
                        </div>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/#rumor-text" className="text-orange-600 hover:underline">
                                    Text Verification
                                </Link>
                            </li>
                            <li>
                                <Link href="/#rumor-image" className="text-orange-600 hover:underline">
                                    Image/Screenshot Verification
                                </Link>
                            </li>
                            <li>
                                <Link href="/#rumor-url" className="text-orange-600 hover:underline">
                                    URL Verification
                                </Link>
                            </li>
                            <li>
                                <Link href="/#deepfake-video" className="text-orange-600 hover:underline">
                                    Video Deepfake Detection
                                </Link>
                            </li>
                            <li>
                                <Link href="/#deepfake-youtube" className="text-orange-600 hover:underline">
                                    YouTube URL Analysis
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Accessibility Features */}
                    <div className="bg-pink-50 p-6 rounded-none border-l-4 border-pink-500">
                        <div className="flex items-center gap-2 mb-4">
                            <Accessibility className="w-6 h-6 text-pink-600" />
                            <h2 className="text-xl font-semibold text-gray-900">Accessibility</h2>
                        </div>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/accessibility-statement" className="text-pink-600 hover:underline">
                                    Accessibility Statement
                                </Link>
                            </li>
                            <li>
                                <span className="text-pink-600">Font Size Controls (Top Right)</span>
                            </li>
                            <li>
                                <span className="text-pink-600">High Contrast Mode (Top Right)</span>
                            </li>
                            <li>
                                <span className="text-pink-600">Keyboard Navigation Support</span>
                            </li>
                            <li>
                                <span className="text-pink-600">Screen Reader Compatible</span>
                            </li>
                            <li>
                                <Link href="/#accessibility-disability" className="text-pink-600 hover:underline">
                                    Disability Rights Information
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Language & Support */}
                    <div className="bg-yellow-50 p-6 rounded-none border-l-4 border-yellow-500">
                        <div className="flex items-center gap-2 mb-4">
                            <Globe className="w-6 h-6 text-yellow-600" />
                            <h2 className="text-xl font-semibold text-gray-900">Language & Support</h2>
                        </div>
                        <ul className="space-y-2">
                            <li>
                                <span className="text-yellow-600">22 Indian Languages Available</span>
                            </li>
                            <li>
                                <Link href="/#voice" className="text-yellow-600 hover:underline">
                                    Voice Assistant (Multilingual)
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-yellow-600 hover:underline">
                                    Contact Support
                                </Link>
                            </li>
                            <li>
                                <span className="text-yellow-600">Helpline: 1800-XXX-XXXX</span>
                            </li>
                            <li>
                                <span className="text-yellow-600">Email: support@satya.gov.in</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Quick Statistics */}
                <div className="mt-12 bg-gray-50 p-8 rounded-none border border-gray-200">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                        <Users className="w-6 h-6" />
                        Portal Statistics
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-blue-600">15+</div>
                            <div className="text-sm text-gray-600 mt-1">Total Pages</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-green-600">8</div>
                            <div className="text-sm text-gray-600 mt-1">Main Features</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-purple-600">6</div>
                            <div className="text-sm text-gray-600 mt-1">Legal Pages</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-orange-600">22</div>
                            <div className="text-sm text-gray-600 mt-1">Languages</div>
                        </div>
                    </div>
                </div>

                <section className="mt-12 pt-6 border-t border-gray-200">
                    <p className="text-sm text-gray-600">
                        Can't find what you're looking for? <Link href="/contact" className="text-blue-600 hover:underline">Contact us</Link> for assistance.
                    </p>
                    <p className="text-sm text-gray-600 mt-4">
                        © 2026 Government of India. All Rights Reserved.
                    </p>
                </section>
            </div>
        </main>
    );
}
