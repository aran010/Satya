"use client";

import Link from "next/link";
import { Mail, Phone } from "lucide-react";

export function GovFooter() {
    const currentYear = new Date().getFullYear();
    const lastUpdated = new Date().toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <footer className="bg-[#F7F7F7] border-t-2 border-gray-300 mt-20" role="contentinfo">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Website Policies */}
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Website Policies</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/privacy-policy" className="text-[#0066CC] hover:underline">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms-conditions" className="text-[#0066CC] hover:underline">
                                    Terms & Conditions
                                </Link>
                            </li>
                            <li>
                                <Link href="/copyright-policy" className="text-[#0066CC] hover:underline">
                                    Copyright Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/hyperlink-policy" className="text-[#0066CC] hover:underline">
                                    Hyperlink Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/disclaimer" className="text-[#0066CC] hover:underline">
                                    Disclaimer
                                </Link>
                            </li>
                            <li>
                                <Link href="/accessibility-statement" className="text-[#0066CC] hover:underline">
                                    Accessibility Statement
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/about" className="text-[#0066CC] hover:underline">
                                    About This Portal
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-[#0066CC] hover:underline">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/rti" className="text-[#0066CC] hover:underline">
                                    RTI
                                </Link>
                            </li>
                            <li>
                                <Link href="/sitemap" className="text-[#0066CC] hover:underline">
                                    Sitemap
                                </Link>
                            </li>
                            <li>
                                <Link href="/#help" className="text-[#0066CC] hover:underline">
                                    Help & FAQ
                                </Link>
                            </li>
                            <li>
                                <Link href="/#feedback" className="text-[#0066CC] hover:underline">
                                    Feedback
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Contact Us</h3>
                        <div className="space-y-3 text-sm text-gray-700">
                            <div className="flex items-start gap-2">
                                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#0066CC]" />
                                <div>
                                    <div className="font-semibold">Email</div>
                                    <a href="mailto:support@satya.gov.in" className="text-[#0066CC] hover:underline">
                                        support@satya.gov.in
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start gap-2">
                                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#0066CC]" />
                                <div>
                                    <div className="font-semibold">Helpline</div>
                                    <span>1800-XXX-XXXX (Toll Free)</span>
                                </div>
                            </div>
                            <div className="mt-4 text-xs text-gray-600">
                                <strong>Office Hours:</strong><br />
                                Monday - Friday<br />
                                9:30 AM - 6:00 PM IST
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-300 pt-6">
                    {/* Bottom Bar */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
                        <div className="text-center md:text-left">
                            <div className="font-semibold text-gray-900">
                                © {currentYear} Government of India. All Rights Reserved.
                            </div>
                            <div className="text-xs mt-1">
                                Managed by Ministry of Electronics & Information Technology
                            </div>
                        </div>
                        <div className="text-xs text-center md:text-right">
                            <div>
                                <strong>Last Updated:</strong> {lastUpdated}
                            </div>
                            <div className="mt-1">
                                <strong>Version:</strong> 1.0.0
                            </div>
                        </div>
                    </div>

                    {/* Visitor Counter */}
                    <div className="mt-4 text-center text-xs text-gray-500">
                        <span>Visitors Counter: </span>
                        <span className="font-mono font-semibold">15,423</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
