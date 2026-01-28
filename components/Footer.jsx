"use client";

import { ArrowForwardIosOutlined } from '@mui/icons-material';
import Link from 'next/link';
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  const isNotVisibleRoute = pathname.startsWith("/capital") || pathname === "/contact" || pathname.startsWith("/insights");
  return (
    <div className='w-screen relative h-auto'>
      {(!isNotVisibleRoute) && (
        <div className="w-screen h-[763px] lg:h-screen lg:p-23 flex flex-col justify-center items-center gap-y-8 bg-[url('/footerBG1.png')] bg-cover bg-center">
          <h2 className="italic w-90 lg:w-full text-center text-[28px] md:text-[28px] lg:text-[45px]">Designing presence that moves brands forward.</h2>
          <div className='h-[133px] border'/>
          <p className="text-[14px] lg:text-[16px] font-medium w-70 lg:w-[414px] text-center">If you’re ready to build a distinctive brand identity, digital experience, or marketing presence, Vedara Studio is here to bring your vision to life.</p>
          <Link href="/contact">
            <button className="bg-primary/36 rounded-full py-[7px] lg:py-3 px-3 lg:px-5 flex justify-between items-center gap-2 text-[12px] lg:text-[14px] tracking-wide hover:cursor-pointer">
              Start Your Project
              <ArrowForwardIosOutlined className='h-[11px] lg:h-[17px]'/>
            </button>
          </Link>
        </div>
      )}
      
      <div className="w-screen relative flex flex-col justify-center items-center gap-y-13 lg:h-[446px] h-[692px]">

        <img src="/footerBG2.png" alt="footer background" className="absolute inset-0 w-full h-full -z-1 object-cover" />

        <div className="flex flex-col-reverse lg:flex-row justify-between items-center lg:items-start gap-y-16 w-screen lg:px-22 relative">
          <div className="flex flex-col items-center lg:items-start gap-y-1 text-left font-light lg:font-normal">
            <Link href="/">Home</Link>
            <Link href="/capital">Vedara Capital</Link>
            <Link href="/atelier">Vedara Atelier</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/insights">Insights</Link>
            <Link href="/contact">Contact</Link>
          </div>

          <div className="flex flex-col justify-center text-center w-[305px] lg:w-[514px]">
            <p className='font-light'>Vedara Collective Corp.</p>
            <h2 className='text-[24px] lg:text-[36px]'>This Is <span className="italic">Not For Everyone</span>.</h2>
            <p className="font-light text-[14px] lg:text-[16px]">
              For the few building beyond their lifetime, we should speak.
            </p>
          </div>

          <div className="hidden lg:flex flex-col justify-center items-end gap-y-1 text-right">
            <Link href="https://www.linkedin.com/company/vedaracollective/">LinkedIn</Link>
            <Link href="https://www.instagram.com/vedara_collective">Instagram</Link>
          </div>
        </div>

        <div className="hidden lg:flex justify-between items-center w-screen px-22 relative font-extralight text-[12px] lg:text-[14px]">
          <p className="w-40">
            H.O : 20 Bay Street 11th Floor, Toronto, Canada
          </p>
          <p className=''>
            © Vedara — Building Brands Worth Inheriting.
          </p>
          <div className="flex flex-col">
            <Link href={`/privacy-policy`}>Privacy Policy</Link>
            <Link href={`/terms`}>Terms</Link>
          </div>
        </div>

        <div className="lg:hidden flex flex-col justify-center items-center gap-y-4">
          <div className="flex items-center gap-2">
            <Link href="https://www.instagram.com/vedara_collective">Instagram</Link>
            <div className='border h-4'/>
            <Link href="https://www.linkedin.com/company/vedaracollective/">LinkedIn</Link>
            <div className='border h-4'/>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <div className='border h-4'/>
            <Link href="/terms">Terms</Link>
          </div>
          <p className='font-extralight text-[12px] mt-[18px]'>
            H.O : 20 Bay Street 11th Floor, Toronto, Canada
          </p>
          <p className='font-extralight text-[10px] mt-[9px]'>
            © Vedara — Building Brands Worth Inheriting.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer