import { ArrowForwardOutlined } from "@mui/icons-material"
import Image from "next/image"
import Link from "next/link"

const ImageBgWithText = ({img, bgcolor ="bg-[#AEA797]", txtcolor="text-black", heading, text, explore, exploreLink="/portfolio", number}) => {
  return (
    <div className={`flex flex-col lg:flex-row justify-between gap-6 lg:gap-10 p-10 lg:p-5 w-[300px] lg:w-[900px] ${bgcolor}`}>
      <div className={`flex flex-col gap-6 lg:mt-15 ${txtcolor} lg:pl-10 text-[14px] lg:text-[16px] w-full lg:w-[318px]`}>
        <div className="flex justify-between items-center">
        <p className="uppercase font-medium">{heading}</p>
        <p className="lg:hidden">{number}</p>
        </div>
        <p className="font-light text-[12px] lg:text-[14px]">{text}</p>
        <p className="font-medium text-[16px] lg:text-[20px]">
          <Link href={exploreLink}>
            {explore} <ArrowForwardOutlined/>
          </Link>
        </p>
        <p className="hidden lg:block mt-auto text-[20px]">{number}</p>
      </div>

      <Image alt="img1" width={457} height={455} src={img}/>
    </div>
  )
}

export default ImageBgWithText