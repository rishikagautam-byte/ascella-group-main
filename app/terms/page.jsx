import Image from "next/image";
import Footer from "@/components/Footer";

export default function page() {


  return (
    <div>
      <div className="bg-primary text-black pt-40 flex flex-col items-center justify-center gap-y-18">
        <section className="flex flex-col lg:flex-row justify-between lg:items-center w-[87vw] gap-y-10">
          <div className="flex flex-col justify-center gap-y-10">
            <h1 className="text-[28px] lg:text-[45px] font-semibold italic w-[380px] lg:w-[700px] leading-tight">
              Terms & Conditions
            </h1>
            <p className="text-[14px] lg:text-[18px]">
              These Terms & Conditions (“Terms”) govern your use of the website vedaracollective.ca (the “Website”), operated by Vedara Collective Corp (“Vedara Collective,” “we,” “our,” or “us”). <br /> By accessing or using this Website, you agree to be bound by these Terms. If you do not agree, please do not use the Website.
            </p>
          </div>
        </section>

        <div className="flex flex-col gap-15 w-[87vw] pb-26 text-[14px] lg:text-[18px]">
          <div className="flex flex-col gap-5 w-full">
            <p className="font-semibold text-[18px] lg:text-[24px]">
              Use of the Website
            </p>
            <p>
              You may use this Website for lawful purposes only. You agree not to:
            </p>

            <ul className="flex flex-col list-disc pl-5">
              <li>Use the Website in a way that violates any applicable laws or regulations</li>
              <li>Attempt to gain unauthorized access to the Website or its systems</li>
              <li>Interfere with the security or performance of the Website</li>
              <li>Use the Website to transmit malicious code or harmful material</li>
            </ul>
          </div>

          <div className="flex flex-col gap-5 w-full">
            <p className="font-semibold text-[18px] lg:text-[24px]">
              Intellectual Property
            </p>
            <p>
              All content on this Website, including text, graphics, logos, branding, layout, and design, is the property of <span className="font-bold">Vedara Collective Corp</span> or its licensors and is protected by applicable intellectual property laws.
            </p>
            <p>
              You may not copy, reproduce, modify, distribute, or exploit any content without prior written permission, except for personal, non-commercial use
            </p>
          </div>

          <div className="flex flex-col gap-5 w-full">
            <p className="font-semibold text-[18px] lg:text-[24px]">
              Information Accuracy
            </p>
            <p>
              The content on this Website is provided for general informational purposes only. While we aim to keep information accurate and up to date, we make no warranties or guarantees regarding completeness, accuracy, or reliability.
            </p>
          </div>

          <div className="flex flex-col gap-5 w-full">
            <p className="font-semibold text-[18px] lg:text-[24px]">
              No Professional Advice
            </p>
            <p>
              Nothing on this Website constitutes professional, legal, financial, or business advice. Any reliance on information provided on the Website is at your own risk.
            </p>
          </div>

          <div className="flex flex-col gap-5 w-full">
            <p className="font-semibold text-[18px] lg:text-[24px]">
              Third-Party Links
            </p>
            <p>
              This Website may contain links to third-party websites or services. Vedara Collective Corp does not control and is not responsible for the content, policies, or practices of any third-party websites.
            </p>

            <p>
              Accessing third-party links is at your own discretion.
            </p>
          </div>

          <div className="flex flex-col gap-5 w-full">
            <p className="font-semibold text-[18px] lg:text-[24px]">
              Limitation of Liability
            </p>
            <p>
              To the fullest extent permitted by law, Vedara Collective Corp shall not be liable for any direct, indirect, incidental, consequential, or special damages arising out of or related to:
            </p>

            <ul className="flex flex-col list-disc pl-5">
              <li>Use or inability to use the Website</li>
              <li>Errors, omissions, or inaccuracies in content</li>
              <li>Website interruptions, security breaches, or viruses</li>
            </ul>
          </div>

          <div className="flex flex-col gap-5 w-full">
            <p className="font-semibold text-[18px] lg:text-[24px]">
              Indemnification
            </p>
            <p>
              You agree to indemnify and hold harmless Vedara Collective Corp from any claims, damages, losses, or expenses arising from:
            </p>
            <ul className="flex flex-col list-disc pl-5">
              <li>Your use of the Website</li>
              <li>Your violation of these Terms</li>
              <li>Your infringement of any rights of a third party</li>
            </ul>
          </div>

          <div className="flex flex-col gap-5 w-full">
            <p className="font-semibold text-[18px] lg:text-[24px]">
              Availability of the Website
            </p>
            <p>
              We do not guarantee that the Website will be available at all times or without interruption. We may modify, suspend, or discontinue any part of the Website at any time without notice.
            </p>
          </div>

          <div className="flex flex-col gap-5 w-full">
            <p className="font-semibold text-[18px] lg:text-[24px]">
              Governing Law
            </p>
            <p>
              These Terms are governed by and construed in accordance with the laws of Canada, without regard to conflict of law principles.
            </p>
          </div>

          <div className="flex flex-col gap-5 w-full">
            <p className="font-semibold text-[18px] lg:text-[24px]">
              Changes to These Terms
            </p>
            <p>
              We may update these Terms from time to time. Any changes will be effective when posted on this page. Continued use of the Website after changes are posted constitutes acceptance of the updated Terms.
            </p>
          </div>

          <div className="flex flex-col gap-5 w-full">
            <p className="font-semibold text-[18px] lg:text-[24px]">
              Contact Us
            </p>
            <p>
              If you have questions, requests, or concerns about this Privacy Policy or how we handle personal information, contact:
            </p>

            <p className="font-bold">
              Vedara Collective Corp <br />
              legacy@vedaracollective.ca
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}