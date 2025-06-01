import Image from "next/image";
import { marcellus } from '../../../layout'

const HeroContent = () => {
    return(
        < div className="grid grid-cols-1 lg:grid-cols-2 max-w-[1600px] px-8 lg:pt-0 ">
            <div className='relative justify-center mx-auto text-center lg:text-left flex flex-col items-center lg:items-start w-full h-full'>
                <h1 className={`relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-white text-5xl md:text-6xl lg:text-7xl ${marcellus.className}`}>
                    Vibrant and Realistic Colored Pencil <span className="px-2 text-[#FFC300] font-extrabold">ART</span>
                </h1>
                <p className='text-[#d2d2d2] mt-8 text-[1.2rem] md:text-xl lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap leading-7 w-[98%]'>
                    <span>I specialize in highly detailed and realistic wildlife, pet, and people portraits. Visit my shop for original drawings, high-quality prints, greeting cards, and other ways to</span>
                    <span className="font-bold text-[#e93e68]"> bring art into your home </span>
                    <span>or connect with me to request a custom commission.</span>
                </p>

                <div className='w-[65ch] flex flex-col lg:flex-row items-center lg:items-start pb-10 gap-8 lg:gap-16 pt-8 lg:pt-16 font-semibold'>

                </div>
            </div>
            <div className='relative flex w-full h-full justify-end items-end'>
                <div className='relative w-full h-[70vh] flex '>
                <Image
                    src="/assets/images/shorthairedpointer.png"
                    fill={true}
                    priority={true}
                    className="opacity-90"
                    style={{ objectFit: "contain" }}
                    alt="Colored pencil drawing of a short-haired pointer."
                    sizes="(max-width:768px) 300px, 500px"
                />
                </div>
            </div>
    </div >
    )
}

export default HeroContent