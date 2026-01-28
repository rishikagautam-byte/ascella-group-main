'use client'

import Footer from '@/components/Footer';
import {useState}  from 'react'
import toast, { Toaster } from 'react-hot-toast'

function Input({ label, ...props }) {
  return (
    <div className="flex flex-col gap-2 text-black">
      <label className="text-[14px] lg:text-[18px] font-medium">{label}</label>
      <input
        {...props}
        className="h-[38px] bg-[#FFFFFF]/17 rounded-[5px] px-3 text-[12px] lg:text-[14px] outline-none"
      />
    </div>
  );
}

function Textarea({ label, dotted = false, ...props }) {
  return (
    <div className="flex flex-col gap-2 text-black">
      <label className="text-[14px] lg:text-[18px] font-medium">{label}</label>
      <textarea
        {...props}
        rows={4}
        className={`bg-[#FFFFFF]/17 px-3 py-2 text-[12px] lg:text-[14px] resize-none outline-none rounded-[5px] ${
          dotted ? "border-b border-dotted border-[#6B6B6B]" : ""
        }`}
      />
    </div>
  );
}

const page = () => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    industry: "",
    movement: "",
    methodology: "",
    success: "",
    architect:"",
    commitment: "",
    investment: "",
    budget: "",
    culture: "",
    referral: "",
  });

  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxh3gDjGy6d0eR_p_iLcysIZuBvBNRFe8hvpnGFUhgLkos3bzE36CMGq1S9ZUirSCuZTw/exec"

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function updateField(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    for (const key in form) {
      if (!form[key] || form[key].trim() === "") {
        toast.error("All fields are mandatory");
        return;
      }
    }

    if (!isValidEmail(form.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    try {
      const params = new URLSearchParams({
        name: form.name,
        email: form.email,
        industry: form.industry,
        movement: form.movement,
        methodology: form.methodology,
        success: form.success,
        architect: form.architect,
        commitment: form.commitment,
        investment: form.investment,
        budget: form.budget,
        culture: form.culture,
        referral: form.referral,
      });

      const res = await fetch(SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded", },
        body: params
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Form submitted successfully");
        setForm({
          name: "",
          email: "",
          industry: "",
          movement: "",
          methodology: "",
          success: "",
          architect: "",
          commitment: "",
          investment: "",
          budget: "",
          culture: "",
          referral: "",
        });
      } else {
        toast.error(data.message || "Submission failed");
      }
    } catch (error) {
      toast.error("Network error. Please try again.");
    }
  }

  return (
    <div className='relative w-full overflow-x-clip'>
      <Toaster position='top-right'/>
      <div className='flex flex-col items-center justify-center gap-y-7 py-51'>
        <div className="absolute inset-0 w-full h-full -z-1">
          <img
            src="/rovineArt.png"
            alt="bg overlay"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <h1 className="w-[380px] lg:w-[840px] text-[45px] lg:text-[64px] text-center italic leading-tight">
          Together, we architect <br /> cultural immortality.
        </h1>
        <p className='text-center w-[300px] lg:w-[570px] text-[12px] lg:text-[14px]'>
          Are you ready to transcend competition and birth a movement that commands reverence? Initiate your sovereignty.
        </p>

        <section className="min-h-screen w-[400px] lg:w-[612px] rounded-2xl flex justify-center items-start bg-primary  py-20">
          <form
            onSubmit={handleSubmit}
            className="w-full px-13 lg:px-10 flex flex-col gap-6 text-black"
          >
            {/* Header */}
            <div className="flex flex-col gap-4 w-[340px] lg:w-[456px]">
              <p className="text-[16px] lg:text-[20px] font-medium">
                The Cultural Sovereignty Assessment™
              </p>
              <p className="text-[12px] lg:text-[14px] w-[300px] lg:w-[500px] leading-tight font-light">
                We serve 12 cultural empire builders each quarter, not from
                artificial limitation, but from our covenant to provide the
                generational thinking and territorial precision that dynasty
                creation demands.
              </p>
            </div>

            {/* Inputs */}
            <Input
              label="Name"
              name="name"
              value={form.name}
              onChange={updateField}
              required
            />

            <Input
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={updateField}
              required
            />

            <Input
              label="Industry"
              name="industry"
              value={form.industry}
              onChange={updateField}
              required
            />

            <Textarea
              label="Describe the cultural movement you're building, not just the business you're running."
              name="movement"
              value={form.movement}
              onChange={updateField}
              required
            />

            <Textarea
              label="What wisdom, methodology, or perspective do you possess that no competitor can authentically replicate."
              name="methodology"
              value={form.methodology}
              onChange={updateField}
              dotted
              required
            />

            <Textarea
              label="How do you define success in terms of cultural impact rather than financial metrics?"
              name="success"
              value={form.success}
              onChange={updateField}
              required
            />

            <Textarea
              label="If you could architect your legacy without constraints, what would your brand be known for in 100 years?"
              name="architect"
              value={form.architect}
              onChange={updateField}
              required
            />

            <Textarea
              label="What would have to be true for you to commit the next 12–24 months to building something that lasts 100 years?"
              name="commitment"
              value={form.commitment}
              onChange={updateField}
              required
            />

            <Input
              label="Investment commitment"
              name="investment"
              value={form.investment}
              onChange={updateField}
              required
            />

            <Textarea
              label="What investment commitment aligns with the scale of legacy you’re building?"
              name="budget"
              value={form.budget}
              onChange={updateField}
              required
            />

            <Textarea
              label="What would achieving cultural sovereignty be worth to you over the next decade?(Not what you’d pay — what would it mean.)"
              name="culture"
              value={form.culture}
              onChange={updateField}
              required
            />

            <Input
              label="How did you hear about us?"
              name="referral"
              value={form.referral}
              onChange={updateField}
              required
            />

            {/* Submit */}
            <button
              type="submit"
              onClick={handleSubmit}
              className="mt-4 h-11 w-full bg-[#2A2927] rounded-[5px] text-[#F3F2EE] text-[14px] tracking-wide hover:opacity-90 transition hover:cursor-pointer"
            >
              Submit
            </button>
          </form>
        </section>
      </div>

      <Footer/>
    </div>
  )
}

export default page