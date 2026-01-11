"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Breadcrumb } from "@/components/Breadcrumb";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Form submission logic would go here
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <main className="min-h-screen bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Contact Information */}
                    <div className="space-y-6">
                        <p className="text-gray-700">
                            We welcome your queries, feedback, and suggestions. Please feel free to reach out to us through any
                            of the following channels.
                        </p>

                        {/* Contact Details */}
                        <div className="space-y-4">
                            <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-none">
                                <Mail className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-gray-900">Email</h3>
                                    <p className="text-sm text-gray-700 mt-1">General Inquiries:</p>
                                    <a href="mailto:support@satya.gov.in" className="text-blue-600 hover:underline">
                                        support@satya.gov.in
                                    </a>
                                    <p className="text-sm text-gray-700 mt-2">Technical Support:</p>
                                    <a href="mailto:tech@satya.gov.in" className="text-blue-600 hover:underline">
                                        tech@satya.gov.in
                                    </a>
                                    <p className="text-sm text-gray-700 mt-2">Media Queries:</p>
                                    <a href="mailto:media@satya.gov.in" className="text-blue-600 hover:underline">
                                        media@satya.gov.in
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 bg-green-50 rounded-none">
                                <Phone className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-gray-900">Helpline</h3>
                                    <p className="text-lg font-bold text-gray-900 mt-1">1800-XXX-XXXX</p>
                                    <p className="text-sm text-gray-600">(Toll Free)</p>
                                    <p className="text-sm text-gray-700 mt-2">
                                        <strong>Office Hours:</strong><br />
                                        Monday - Friday: 9:30 AM - 6:00 PM IST<br />
                                        Saturday: 10:00 AM - 2:00 PM IST<br />
                                        Sunday & Holidays: Closed
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-none">
                                <MapPin className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-gray-900">Postal Address</h3>
                                    <address className="text-sm text-gray-700 mt-1 not-italic">
                                        Satya Verify Portal<br />
                                        Ministry of Electronics & Information Technology<br />
                                        Electronics Niketan, 6 CGO Complex<br />
                                        Lodhi Road, New Delhi - 110003<br />
                                        India
                                    </address>
                                </div>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="bg-gray-50 p-6 rounded-none">
                            <h3 className="font-semibold text-gray-900 mb-3">Quick Links</h3>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <a href="/accessibility-statement" className="text-blue-600 hover:underline">
                                        Accessibility Support
                                    </a>
                                </li>
                                <li>
                                    <a href="/rti" className="text-blue-600 hover:underline">
                                        Right to Information (RTI)
                                    </a>
                                </li>
                                <li>
                                    <a href="/privacy-policy" className="text-blue-600 hover:underline">
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="/#help" className="text-blue-600 hover:underline">
                                        Help & FAQ
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-gray-50 p-8 rounded-none border border-gray-200">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send us a Message</h2>

                        {submitted && (
                            <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 text-green-800">
                                Thank you! Your message has been submitted successfully.
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">
                                    Full Name <span className="text-red-600">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Enter your full name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
                                    Email Address <span className="text-red-600">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1">
                                    Phone Number (Optional)
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="+91 XXXXX XXXXX"
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-1">
                                    Subject <span className="text-red-600">*</span>
                                </label>
                                <select
                                    id="subject"
                                    required
                                    value={formData.subject}
                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                >
                                    <option value="">Select a subject</option>
                                    <option value="general">General Inquiry</option>
                                    <option value="technical">Technical Support</option>
                                    <option value="feedback">Feedback</option>
                                    <option value="report">Report Misinformation</option>
                                    <option value="media">Media Query</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">
                                    Message <span className="text-red-600">*</span>
                                </label>
                                <textarea
                                    id="message"
                                    required
                                    rows={5}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Enter your message here..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-3 px-6 rounded-none font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                            >
                                <Send className="w-5 h-5" />
                                Submit Message
                            </button>

                            <p className="text-xs text-gray-600 mt-2">
                                By submitting this form, you agree to our <a href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</a>.
                            </p>
                        </form>
                    </div>
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
