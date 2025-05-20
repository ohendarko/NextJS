export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Terms and Conditions</h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">Effective Date: May 20, 2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6 max-w-3xl mx-auto">
          <div className="prose prose-blue max-w-none">
            <p>
              Welcome to PharmaBridge Consulting ("Company," "we," "our," or "us"). These Terms and Conditions govern
              your use of our website, services, and all associated content. By accessing our website or using our
              services, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our
              website or services.
            </p>

            <h2>1. Services Offered</h2>
            <p>
              PharmaBridge Consulting provides advisory and coaching services for internationally trained pharmacists
              seeking U.S. licensure. Services include, but are not limited to:
            </p>
            <ul>
              <li>Credential evaluation guidance</li>
              <li>FPGEE exam preparation support</li>
              <li>TOEFL-iBT coaching</li>
              <li>Internship placement strategies</li>
              <li>Licensure application assistance</li>
              <li>Travel, accommodation, and hosting aid</li>
            </ul>
            <p>
              We do not guarantee licensure, immigration approval, or employment outcomes. Our role is to guide and
              support based on available information and experience.
            </p>

            <h2>2. Client Responsibilities</h2>
            <p>By engaging with PharmaBridge Consulting, you agree to:</p>
            <ul>
              <li>Provide accurate, complete, and current personal information.</li>
              <li>
                Be responsible for submitting all required documentation to third-party agencies (e.g., NABP, ECE,
                TOEFL, State Boards).
              </li>
              <li>
                Understand that your success depends on your personal effort, academic ability, and compliance with
                regulatory requirements.
              </li>
              <li>Accept that our services are advisory and not legal representation or immigration consultancy.</li>
            </ul>

            <h2>3. Payments and Refund Policy</h2>
            <ul>
              <li>All service fees must be paid upfront unless otherwise agreed.</li>
              <li>
                Payments are non-refundable once consulting sessions, document reviews, or coaching services have begun.
              </li>
              <li>
                Customized packages and travel/hosting assistance fees are also non-refundable due to third-party
                commitments.
              </li>
            </ul>

            <h2>4. Confidentiality</h2>
            <p>We respect your privacy and handle your personal information responsibly.</p>
            <ul>
              <li>We will not sell, rent, or disclose your information to unaffiliated third parties.</li>
              <li>
                We may share necessary information with third-party service providers only with your consent to
                facilitate credential evaluations, exam registrations, or travel bookings.
              </li>
            </ul>
            <p>Please review our Privacy Policy for full details.</p>

            <h2>5. Intellectual Property</h2>
            <p>
              All content on the PharmaBridge Consulting website, including text, logos, graphics, and downloadable
              materials, are the exclusive property of PharmaBridge Consulting unless otherwise credited. You may not
              copy, modify, distribute, or republish any material without our prior written consent.
            </p>

            <h2>6. Disclaimers</h2>
            <ul>
              <li>
                PharmaBridge Consulting does not guarantee specific outcomes, including exam passes, licensure approval,
                or employment placement.
              </li>
              <li>
                We are not responsible for changes in regulatory agency policies, visa rules, or licensing procedures.
              </li>
              <li>
                Clients are solely responsible for compliance with applicable laws and requirements in their
                jurisdiction.
              </li>
            </ul>

            <h2>7. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, PharmaBridge Consulting shall not be liable for any direct,
              indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use
              of our website or services.
            </p>

            <h2>8. Modifications to Terms</h2>
            <p>
              We reserve the right to modify or update these Terms and Conditions at any time without prior notice.
              Changes will become effective immediately upon posting on our website.
            </p>

            <h2>9. Governing Law</h2>
            <p>
              These Terms and Conditions are governed by and construed in accordance with the laws of the State of New
              Jersey, without regard to conflict of law principles.
            </p>

            <h2>10. Contact Us</h2>
            <p>For questions or concerns regarding these Terms and Conditions, please contact:</p>
            <p>
              PharmaBridge Consulting
              <br />
              Email: info@pharmabridgeconsulting.com
              <br />
              Website: www.pharmabridgeconsulting.com
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
