import Image from "next/image";
import Footer from "@/components/Footer";

export default function page() {


  return (
    <div>
      <div className="bg-primary text-black pt-40 flex flex-col items-center justify-center gap-y-18">
        <section className="flex flex-col lg:flex-row justify-between lg:items-center w-[87vw] gap-y-10">
          <div className="flex flex-col justify-center gap-y-10">
            <h1 className="text-[28px] lg:text-[45px] font-semibold italic w-[380px] lg:w-[700px] leading-tight">
              Privacy Policy
            </h1>
            <p className="text-[14px] lg:text-[18px]">
              Vedara Collective Corp respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard personal information when you visit vedaracollective.ca or contact us.
            </p>
          </div>
        </section>

        <div className="flex flex-col gap-15 w-[87vw] pb-26 text-[14px] lg:text-[18px]">
          <div className="flex flex-col gap-5 w-full">
            <p className="font-semibold text-[18px] lg:text-[24px]">
              Information We Collect
            </p>
            <p>
              We only collect personal information that is necessary for business purposes.
            </p>
            <p className="font-semibold">
              Information you provide to us
            </p>
            <p>
              When you use our contact or inquiry forms, we may collect:
            </p>

            <ul className="flex flex-col list-disc pl-5">
              <li>Name</li>
              <li>Email address</li>
              <li>Any information you choose to include in your message</li>
            </ul>

            <p className="font-semibold">
              Information collected automatically
            </p>
            <p>
              When you visit our website, certain information is collected automatically through analytics tools:
            </p>

            <ul className="flex flex-col list-disc pl-5">
              <li>IP address (in anonymized or aggregated form)</li>
              <li>Browser type and device information</li>
              <li>Pages visited and time spent on the site</li>
              <li>Referring website</li>
            </ul>
            <p>This data does not directly identify you.</p>
          </div>

          <div className="flex flex-col gap-5 w-full">
            <p className="font-semibold text-[18px] lg:text-[24px]">
              How We Use Your Information
            </p>
            <p>
              We use personal information only for the following purposes:
            </p>

            <ul className="flex flex-col list-disc pl-5">
              <li>To respond to inquiries and communicate with you</li>
              <li>To understand how visitors use our website</li>
              <li>To improve website performance, content, and user experience</li>
              <li>To maintain website security and functionality</li>
            </ul>
          </div>

          <div className="flex flex-col gap-5 w-full">
            <p className="font-semibold text-[18px] lg:text-[24px]">
              Cookies and Analytics
            </p>
            <p>
              We use:
            </p>

            <ul className="flex flex-col list-disc pl-5 font-semibold">
              <li>Google Analytics</li>
              <li>Google Tag Manager</li>
            </ul>

            <p>
              These tools use cookies and similar technologies to analyze website usage and trends. You can control or disable cookies through your browser settings. Disabling cookies may affect some website functionality.
            </p>
          </div>

          <div className="flex flex-col gap-5 w-full">
            <p className="font-semibold text-[18px] lg:text-[24px]">
              Consent
            </p>
            <p>
              By submitting information through our website or using the site, you consent to the collection, use, and disclosure of your information as described in this policy.
            </p>

            <p>
              You may withdraw consent at any time, subject to legal or contractual restrictions, by contacting us.
            </p>
          </div>

          <div className="flex flex-col gap-5 w-full">
            <p className="font-semibold text-[18px] lg:text-[24px]">
              Sharing of Information
            </p>
            <p>
              We do not share personal information except:
            </p>

            <ul className="flex flex-col list-disc pl-5">
              <li>With service providers that support website analytics and hosting</li>
              <li>When required by law or legal process</li>
            </ul>

            <p>
              Service providers are only given the information necessary to perform their services and are required to protect it.
            </p>
          </div>

          <div className="flex flex-col gap-5 w-full">
            <p className="font-semibold text-[18px] lg:text-[24px]">
               Data Storage and Transfers
            </p>
            <p>
              Vedara Collective Corp does not intentionally store or process personal information outside Canada.
              Some service providers (such as analytics tools) may process data on servers located outside Canada. In such cases, information may be subject to the laws of those jurisdictions.
            </p>
          </div>

          <div className="flex flex-col gap-5 w-full">
            <p className="font-semibold text-[18px] lg:text-[24px]">
              Data Retention
            </p>
            <p>
              We retain personal information only as long as necessary to fulfill the purposes outlined in this policy or to meet legal requirements. Inquiry-related communications are retained only for reasonable business and record-keeping purposes.
            </p>
          </div>

          <div className="flex flex-col gap-5 w-full">
            <p className="font-semibold text-[18px] lg:text-[24px]">
              Security Safeguards
            </p>
            <p>
              We use reasonable administrative, technical, and organizational safeguards to protect personal information against loss, misuse, unauthorized access, disclosure, or alteration.
            </p>

            <p>
              No method of transmission over the internet is 100% secure, but we take appropriate steps to reduce risk.
            </p>
          </div>

          <div className="flex flex-col gap-5 w-full">
            <p className="font-semibold text-[18px] lg:text-[24px]">
              Your Rights
            </p>
            <p>
              Under Canadian privacy law, you have the right to:
            </p>

            <ul className="flex flex-col list-disc pl-5">
              <li>Request access to your personal information</li>
              <li>Request correction of inaccurate or incomplete information</li>
              <li>Ask questions about our privacy practices</li>
            </ul>

            <p>
              Requests can be made by contacting us using the details below.
            </p>
          </div>

          <div className="flex flex-col gap-5 w-full">
            <p className="font-semibold text-[18px] lg:text-[24px]">
              Changes to This Policy
            </p>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
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