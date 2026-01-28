export function InvestorForm({onClose}) {
  return (
    <form className="w-full text-black p-10">
      <h2 className="text-[28px] lg:mb-10">Request Private Investor Access</h2>

      <div className="lg:grid grid-cols-2 space-y-8 gap-x-8 gap-y-6">
        <Input label="Full Name*" />
        <Input label="Official Email Address*" />
        <Input label="Preferred Investment Range*" />
        <Input label="Sectors / Categories of Interest*" />
        <Input label="LinkedIn Profile (Optional)" />
        <Input label="Accreditation & Verification Details*" />
      </div>

      <label className="flex items-center gap-2 lg:mt-8 text-sm">
        <input type="checkbox" />
        I agree to the Private Access Terms
      </label>

      <div className="flex items-center lg:mt-8 gap-4">
        <button
          type="submit"
          className="px-10 py-3 font-editorial rounded-full border border-black"
        >
          Submit
        </button>

        <button
          type="button"
          onClick={onClose}
          className="px-10 py-3 font-editorial rounded-full border border-black"
        >
          Close
        </button>
      </div>
    </form>
  );
}

export function VisionForm({onClose}) {
  return (
    <form className="w-full text-black p-10">
      <h2 className="text-[28px] lg:mb-10">Submit Your Vision for Curation</h2>

      <div className="lg:grid grid-cols-2 space-y-4 gap-x-8 gap-y-6">
        <Input label="Full Name*" />
        <Input label="Official Email Address*" />
        <Input label="Country of Operation*" />
        <Input label="Venture / Company Name*" />
        <Input label="Industry Category*" />
        <Input label="Funding Requirement (Amount Seeking)" />
      </div>

      <Input marginTop="lg:mt-8" label="Project Overview (Concise Summary)"/>
      <Input marginTop="lg:mt-8" label="Upload Dossier / Pitch Deck"/>

      <label className="flex items-center gap-2 mt-4 lg:mt-8 text-sm">
        <input type="checkbox" />
        I acknowledge the NDA & confidential review process
      </label>

      <div className="flex items-center mt-8 gap-4">
        <button
          type="submit"
          className="px-10 py-3 font-editorial rounded-full border border-black"
        >
          Submit
        </button>

        <button
          type="button"
          onClick={onClose}
          className="px-10 py-3 font-editorial rounded-full border border-black"
        >
          Close
        </button>
      </div>
    </form>
  );
}

function Input({ label, marginTop }) {
  return (
    <div className={`flex flex-col gap-1 ${marginTop}`}>
      <label className="text-sm opacity-70">{label}</label>
      <input
        className="bg-transparent border-b border-black outline-none py-1"
        type="text"
      />
    </div>
  );
}
