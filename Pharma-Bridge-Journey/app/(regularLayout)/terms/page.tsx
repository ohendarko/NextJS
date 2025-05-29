'use client';
import React from 'react';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Terms = () => {
  const effectiveDate = "May 22, 2025";

	const router = useRouter();
  
  const handleDownload = () => {
    // Create the text content for the PDF
    const content = document.getElementById('terms-content')?.innerText;
    
    // Create a Blob with the content
    const blob = new Blob([content || ''], { type: 'text/plain' });
    
    // Create a download link
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `PharmaBridge_Terms_${effectiveDate.replace(/\s/g, '_')}.txt`;
    
    // Append to body, click and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Clean up the URL object
    URL.revokeObjectURL(url);
    
    // Show toast notification
    toast({
      title: "Download started",
      description: "Your Terms & Conditions document is downloading",
    });
  };

  return (
    <div className="min-h-screen flex flex-col mt-5">
      
      <div className="container mx-auto px-4 py-24 flex-1">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-pharma-blue mb-6">Terms and Conditions</h1>
          
          <div className="flex items-center justify-between mb-8">
            <p className="text-gray-600">Last updated: {effectiveDate}</p>
            <div className="flex items-center gap-3">
              <Button 
                variant="outline" 
                className="flex items-center gap-2"
                onClick={handleDownload}
              >
                <Download size={16} />
                Download Terms
              </Button>
              <Button variant="secondary" onClick={() => router.back()}>
								Back
							</Button>
            </div>
          </div>
          
          <div id="terms-content" className="prose prose-blue max-w-none space-y-6">
            <p>
              <strong>Effective Date:</strong> {effectiveDate}
            </p>
            
            <p>
              Welcome to PharmaBridge Consulting ("Company," "we," "our," or "us").
              These Terms and Conditions govern your use of our website, services, and all associated content.
            </p>
            
            <p>
              By accessing our website or using our services, you agree to be bound by these Terms and Conditions. 
              If you do not agree, please do not use our website or services.
            </p>
            
            <section>
              <h2 className="text-2xl font-semibold text-pharma-navy">1. Services Offered</h2>
              <p>
                PharmaBridge Consulting provides advisory and coaching services for internationally trained pharmacists 
                seeking U.S. licensure. Services include, but are not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Credential evaluation guidance</li>
                <li>FPGEE exam preparation support</li>
                <li>TOEFL-iBT coaching</li>
                <li>Internship placement strategies</li>
                <li>Licensure application assistance</li>
                <li>Travel, accommodation, and hosting aid</li>
              </ul>
              <p>
                We do not guarantee licensure, immigration approval, or employment outcomes. 
                Our role is to guide and support based on available information and experience.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-pharma-navy">2. Client Responsibilities</h2>
              <p>By engaging with PharmaBridge Consulting, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate, complete, and current personal information.</li>
                <li>Be responsible for submitting all required documentation to third-party agencies (e.g., NABP, ECE, TOEFL, State Boards).</li>
                <li>Understand that your success depends on your personal effort, academic ability, and compliance with regulatory requirements.</li>
                <li>Accept that our services are advisory and not legal representation or immigration consultancy.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-pharma-navy">3. Payments and Refund Policy</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>All service fees must be paid upfront unless otherwise agreed.</li>
                <li>Payments are non-refundable once consulting sessions, document reviews, or coaching services have begun.</li>
                <li>Customized packages and travel/hosting assistance fees are also non-refundable due to third-party commitments.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-pharma-navy">4. Confidentiality</h2>
              <p>We respect your privacy and handle your personal information responsibly.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>We will not sell, rent, or disclose your information to unaffiliated third parties.</li>
                <li>We may share necessary information with third-party service providers only with your consent to facilitate credential evaluations, exam registrations, or travel bookings.</li>
              </ul>
              <p>Please review our [Privacy Policy] for full details.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-pharma-navy">5. Intellectual Property</h2>
              <p>
                All content on the PharmaBridge Consulting website, including text, logos, graphics, and downloadable materials, 
                are the exclusive property of PharmaBridge Consulting unless otherwise credited.
              </p>
              <p>
                You may not copy, modify, distribute, or republish any material without our prior written consent.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-pharma-navy">6. Disclaimers</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>PharmaBridge Consulting does not guarantee specific outcomes, including exam passes, licensure approval, or employment placement.</li>
                <li>We are not responsible for changes in regulatory agency policies, visa rules, or licensing procedures.</li>
                <li>Clients are solely responsible for compliance with applicable laws and requirements in their jurisdiction.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-pharma-navy">7. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, PharmaBridge Consulting shall not be liable for any direct, indirect, incidental, 
                special, consequential, or punitive damages arising out of or relating to your use of our website or services.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-pharma-navy">8. Modifications to Terms</h2>
              <p>
                We reserve the right to modify or update these Terms and Conditions at any time without prior notice.
                Changes will become effective immediately upon posting on our website.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-pharma-navy">9. Governing Law</h2>
              <p>
                These Terms and Conditions are governed by and construed in accordance with the laws of the State of California, 
                without regard to conflict of law principles.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-pharma-navy">10. Contact Us</h2>
              <p>For questions or concerns regarding these Terms and Conditions, please contact:</p>
              <p>PharmaBridge Consulting</p>
              <p>Email: support@pharmabridgeconsulting.com</p>
              <p>Website: www.pharmabridgeconsulting.com</p>
            </section>
          </div>
          
          <div className="mt-10 text-center">
            <Link href="/">
              <Button className="mx-auto">Back to Home</Button>
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Terms;
