"use client";

import { Globe } from "lucide-react";
import { LanguageSelector } from "./LanguageSelector";
import Link from "next/link";
import Image from "next/image";

export function GovHeader() {
    return (
        <>
            {/* Skip to Content Link - Accessibility */}
            <a
                href="#main-content"
                className="skip-to-content absolute left-0 top-0 bg-[#0066CC] text-white px-4 py-2 -translate-x-full focus:translate-x-0 transition-transform z-[100]"
            >
                Skip to main content
            </a>

            <header className="sticky top-0 z-50 bg-white border-b-2 border-gray-200">
                {/* Top Government Bar */}
                <div className="bg-[#F7F7F7] border-b border-gray-300">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center text-xs">
                        <div className="flex items-center gap-4 text-gray-600">
                            <span>भारत सरकार | Government of India</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <LanguageSelector />
                            <button className="px-3 py-1 text-xs font-semibold text-[#0066CC] border border-[#0066CC] rounded-none hover:bg-[#0066CC] hover:text-white transition-colors">
                                Official Login
                            </button>
                        </div>
                    </div>
                </div>

                {/* Main Header */}
                <div className="bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                        <div className="flex items-center justify-between">
                            {/* Left: Emblem + Identity */}
                            <div className="flex items-center gap-4">
                                {/* Emblem of India */}
                                <div className="flex-shrink-0">
                                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 via-white to-green-600 rounded-full flex items-center justify-center border-2 border-gray-300">
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-[#FF9933]">⚖</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Portal Identity */}
                                <div>
                                    <div className="text-sm text-gray-600 font-medium">
                                        Ministry of Electronics & Information Technology
                                    </div>
                                    <div className="text-sm text-gray-600">
                                        Election Commission of India
                                    </div>
                                    <h1 className="text-xl md:text-2xl font-bold text-[#13316c] mt-1">
                                        सत्य Verify - Government Fact Check Portal
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navigation Bar */}
                <div className="bg-[#13316c] text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <nav className="flex items-center gap-6 text-sm" role="navigation" aria-label="Primary navigation">
                            <Link href="/about" className="py-3 hover:bg-white/10 px-3 transition-colors">
                                About
                            </Link>
                            <Link href="/#guidelines" className="py-3 hover:bg-white/10 px-3 transition-colors">
                                Guidelines
                            </Link>
                            <Link href="/contact" className="py-3 hover:bg-white/10 px-3 transition-colors">
                                Contact
                            </Link>
                            <Link href="/help" className="py-3 hover:bg-white/10 px-3 transition-colors">
                                Help
                            </Link>
                            <Link href="/rti" className="py-3 hover:bg-white/10 px-3 transition-colors">
                                RTI
                            </Link>
                            <Link href="/sitemap" className="py-3 hover:bg-white/10 px-3 transition-colors">
                                Sitemap
                            </Link>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
}
