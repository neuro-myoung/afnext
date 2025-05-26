import React from 'react'
import Image from 'next/image'


const About = () => {
  return (
    <main className="flex justify-center items-center text-[#0e0008] w-screen min-h-screen bg-[#f2f2f2]">
        <div className="max-w-[1600px] px-2 py-12">
        <h1 className="w-full text-2xl">About Me</h1>
        <div className="relative before:content-[''] before:absolute before:w-[100%] before:h-[20px]  before:border-l-2 before:border-r-2 before:border-t-2 before:border-[#0e0008] after:content-[''] after:absolute after:w-[100%] after:h-[20px] before:left-0 before:top-0 after:right-0 after:bottom-0 after:border-l-2 after:border-r-2 after:border-b-2 after:border-[#0e0008]">
          <div className="flex flex-col md:flex-row h-full justify-center items-center py-12 px-8 gap-8">
            <div className="flex flex-col order-last md:order-first w-full max-w-[600px] items-center gap-8 text-[1.2rem] md:px-4">
              <p>
                I’m Alix, a professional portrait and wildlife artist based in Medford, MA. Right after earning my Bachelor of Fine Arts at UNC Greensboro, I fell in love with colored pencils and decided to start my own business specializing in realistic drawings.
              </p>
              <p>
                Using your own photographs and the highest quality materials, I create realistic hand drawn portraits of your beloved pets and family members. These are personal keepsakes that can be cherished for many years to come. I like to work very closely with my clients and I am not happy until you are 100% satisfied with your portrait.
              </p>
              <p>
                Feel free to view some examples of my portraits, wildlife art, and more in my gallery. If you would like to commission your very own unique drawing then please get in touch.
              </p>
            </div>
            <div className="px-8 ">
              <div className="rounded-md overflow-hidden">
                <Image
                  src="/assets/images/alix_drawing.jpg"
                  width={500}
                  height={500}
                  className="object-contain"
                  sizes="(max-width: 736px) 50vw, 500px"
                  alt="Image of Alix Fuerst drawing a portrait."
                />
              </div>
            </div>
          </div>
        </div>
        </div>
    </main>
  )
}

export default About