import { Breadcrumb } from "@/components/Breadcrumb";

export default function RTI() {
    return (
        <main className="min-h-screen bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">Right to Information (RTI)</h1>

                <div className="prose prose-blue max-w-none space-y-6 text-gray-700">

                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                        <p className="font-semibold text-blue-900">
                            The Right to Information Act, 2005 empowers citizens to seek information from public authorities,
                            promoting transparency and accountability in government functioning.
                        </p>
                    </div>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">About RTI</h2>
                        <p>
                            The Right to Information (RTI) Act, 2005 is a landmark legislation that establishes the right of
                            citizens to access information under the control of public authorities. Under this Act, any citizen
                            can request information from a "public authority" (a body of Government or "instrumentality of State")
                            which is required to reply expeditiously or within thirty days.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Filing an RTI Application</h2>

                        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Step 1: Prepare Your Application</h3>
                        <p>Your RTI application should include:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Name and contact details of the applicant</li>
                            <li>Details of the information sought (be specific)</li>
                            <li>Period of information required</li>
                            <li>Preferred mode of receiving information</li>
                            <li>Application fee (as applicable)</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Step 2: Identify the Public Authority</h3>
                        <p>
                            For information related to Satya Verify portal, the Public Authority is:
                        </p>
                        <div className="bg-gray-50 p-4 rounded-none my-4">
                            <p className="font-semibold">Ministry of Electronics & Information Technology</p>
                            <p className="text-sm mt-2">Government of India</p>
                        </div>

                        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Step 3: Submit Your Application</h3>
                        <p>You can submit your RTI application through:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Online:</strong> Via RTI Online Portal (rtionline.gov.in)</li>
                            <li><strong>By Post:</strong> Send to the Public Information Officer (PIO) address below</li>
                            <li><strong>In Person:</strong> Submit at the designated RTI counter</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">RTI Officers</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white border-2 border-gray-200 p-6 rounded-none">
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">Public Information Officer (PIO)</h3>
                                <div className="text-sm space-y-2">
                                    <p>
                                        <strong>Name:</strong> [To be appointed]
                                    </p>
                                    <p>
                                        <strong>Email:</strong> pio-satya@meity.gov.in
                                    </p>
                                    <p>
                                        <strong>Address:</strong><br />
                                        Public Information Officer<br />
                                        Satya Verify Division<br />
                                        Ministry of Electronics & IT<br />
                                        Electronics Niketan, 6 CGO Complex<br />
                                        Lodhi Road, New Delhi - 110003
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white border-2 border-gray-200 p-6 rounded-none">
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">Appellate Authority</h3>
                                <div className="text-sm space-y-2">
                                    <p>
                                        <strong>Name:</strong> [To be appointed]
                                    </p>
                                    <p>
                                        <strong>Email:</strong> appellate-satya@meity.gov.in
                                    </p>
                                    <p>
                                        <strong>Address:</strong><br />
                                        First Appellate Authority<br />
                                        Ministry of Electronics & IT<br />
                                        Electronics Niketan, 6 CGO Complex<br />
                                        Lodhi Road, New Delhi - 110003
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Application Fee</h2>
                        <p>The fee structure for RTI applications is:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Application Fee:</strong> ₹10 (for Central Government departments)</li>
                            <li><strong>Additional Fee:</strong> ₹2 per page for photocopies</li>
                            <li><strong>Actual Cost:</strong> For inspection of records or samples</li>
                        </ul>
                        <p className="mt-4 text-sm bg-yellow-50 p-3 rounded-none border-l-4 border-yellow-500">
                            <strong>Note:</strong> BPL (Below Poverty Line) cardholders are exempt from paying application fees.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Timeline for Response</h2>
                        <div className="bg-gray-50 p-6 rounded-none">
                            <ul className="space-y-3 text-sm">
                                <li className="flex items-start gap-3">
                                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                                        30
                                    </div>
                                    <div>
                                        <strong>Normal Response Time:</strong> 30 days from the date of receipt of RTI application
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                                        48
                                    </div>
                                    <div>
                                        <strong>Urgent Response:</strong> 48 hours for matters concerning life or liberty
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Appeal Process</h2>
                        <p>If you are not satisfied with the response or do not receive a reply, you can:</p>

                        <div className="space-y-4 my-4">
                            <div className="bg-blue-50 p-4 rounded-none border-l-4 border-blue-500">
                                <h4 className="font-semibold">First Appeal</h4>
                                <p className="text-sm mt-2">
                                    File within 30 days to the First Appellate Authority if you don't receive information within the
                                    stipulated time or are not satisfied with the information provided.
                                </p>
                            </div>

                            <div className="bg-purple-50 p-4 rounded-none border-l-4 border-purple-500">
                                <h4 className="font-semibold">Second Appeal</h4>
                                <p className="text-sm mt-2">
                                    File within 90 days to the Central Information Commission (CIC) if the First Appeal is rejected
                                    or no response is received.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Exemptions</h2>
                        <p>Certain categories of information are exempt from disclosure under Section 8 and 9 of the RTI Act:</p>
                        <ul className="list-disc pl-6 space-y-2 text-sm">
                            <li>Information affecting sovereignty, integrity, and security of India</li>
                            <li>Information prohibited by court order or law</li>
                            <li>Information that would cause breach of privilege of Parliament/Legislature</li>
                            <li>Commercial confidence, trade secrets, or intellectual property</li>
                            <li>Information available to a person in fiduciary relationship</li>
                            <li>Information received in confidence from foreign governments</li>
                            <li>Information that would endanger life or physical safety</li>
                            <li>Information that would impede investigation or prosecution processes</li>
                            <li>Cabinet papers (except after decision is made and reasons are recorded)</li>
                            <li>Personal information (unless public interest overrides privacy)</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Sample RTI Application</h2>
                        <div className="bg-gray-50 p-6 rounded-none border border-gray-300">
                            <pre className="text-sm whitespace-pre-wrap">
                                To,
                                The Public Information Officer
                                Satya Verify Division
                                Ministry of Electronics & Information Technology
                                Electronics Niketan, 6 CGO Complex
                                Lodhi Road, New Delhi - 110003

                                Subject: Application under Right to Information Act, 2005

                                Respected Sir/Madam,

                                Under the Right to Information Act, 2005, I request the following information:

                                1. [Specify the information you seek]
                                2. [Be as specific as possible]
                                3. [Mention the time period if applicable]

                                I request that the information be provided:
                                [ ] In person
                                [ ] By post
                                [ ] By email

                                I enclose herewith an IPO/DD/Cash of Rs. 10/- as application fee.

                                Applicant's Details:
                                Name: [Your Name]
                                Address: [Your Complete Address]
                                Phone: [Your Contact Number]
                                Email: [Your Email]

                                Date: [DD/MM/YYYY]
                                Signature: [Your Signature]
                            </pre>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Useful Links</h2>
                        <ul className="space-y-2">
                            <li>
                                <a href="https://rtionline.gov.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                    RTI Online Portal (rtionline.gov.in)
                                </a>
                            </li>
                            <li>
                                <a href="https://cic.gov.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                    Central Information Commission (cic.gov.in)
                                </a>
                            </li>
                            <li>
                                <a href="https://meity.gov.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                    Ministry of Electronics & IT (meity.gov.in)
                                </a>
                            </li>
                        </ul>
                    </section>

                    <section className="mt-12 pt-6 border-t border-gray-200">
                        <p className="text-sm text-gray-600">
                            For more information about RTI, please visit <a href="https://rtionline.gov.in" className="text-blue-600 hover:underline">rtionline.gov.in</a>
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
