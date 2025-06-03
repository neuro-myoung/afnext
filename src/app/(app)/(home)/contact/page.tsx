import Image from "next/image";
import PriceTable from "../_components/PriceTable/PriceTable";
import { ThumbsDown, ThumbsUp, Laugh } from "lucide-react";
import { ContactForm } from "../_components/ContactForm/ContactForm";

const Commission = () => {
  return (
    <main className="flex flex-col text-[#0e0008] w-screen min-h-screen h-auto justify-center items-center bg-[#f0e6db] px-12 py-64">
      <div className="max-w-[1600px]">
        <h1 className="w-full text-2xl">Connect</h1>
        <div className="relative w-full h-auto before:content-[''] before:absolute before:w-[100%] before:h-[20px] before:l-0 before:t-0 before:border-l-2 before:border-r-2 before:border-t-2 before:border-[#0e0008] after:content-[''] after:absolute after:w-[100%] after:h-[20px] after:r-0 after:b-100 after:border-l-2 after:border-r-2 after:border-b-2 after:border-[#0e0008]">
          <div className="flex flex-col gap-4 py-12 px-8">
            <p className="w-full lg:w-[60%]">
              Feel free to reach out with inquiries or to commission original
              artwork. More information on pet and people portraits can be found
              below. Other types of commissions can be discussed on a case by
              cases basis.
            </p>
            <div className="flex flex-col lg:flex-row w-full gap-6 mb-24 align-center">
              <div className="w-full lg:w-[60%]">
              <ContactForm />
              </div>
              <div className="rounded-md overflow-hidden flex justify-center align-center max-h-[500px] m-auto">
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
            <div className="grid grid-cols-2 gap-12">
              <div className="w-full justify-center flex gap-6">
                <div className="flex flex-col gap-8 max-w-[600px]">
                  <h2 className="text-[2rem] font-semibold">
                    A perfect way to{" "}
                    <span className="text-[#e93e68] font-semibold">
                      commemorate
                    </span>{" "}
                    the pets, people, and places you love
                  </h2>
                  <p className=" md:text-[1.2rem] my-[0.75rem]">
                    I offer colored pencil and graphite pencil portraits and
                    artwork, which come in a number of sizes ranging from small
                    to large. Your choice may depend on the number of subjects
                    in your portrait or the decor of your home. I usually have a
                    waiting list but I will always try to juggle my schedule to
                    fit in a special occasion if you have a deadline. Once the
                    details are agreed on you can secure your spot by submitting
                    a 50% deposit.
                  </p>

                  <p>
                    *Pricing is for a single subject with a white background.
                    Add 20% for each additional subject. 5x7 sizing is only
                    available for single subjects. Pricing for backgrounds are
                    negotiated based on complexity.
                  </p>
                </div>
              </div>
              <div className="h-full w-full flex flex-col justify-center items-center">
                <h2 className="text-[2rem] font-semibold">
                  Choose your medium
                </h2>
                <PriceTable />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-12">
              <div className="w-full h-full flex relative gap-4">
                <div className="flex flex-col items-center">
                  <div className="relative rounded-md w-[150px] h-[150px] md:w-[200px] md:h-[200px] overflow-hidden">
                    <Image
                      src="/assets/images/BadPhoto.jpeg"
                      fill={true}
                      alt="Example of bad photo reference: poor lighting, subject looking away"
                    />
                  </div>
                  <div className="w-full flex-col justify-center items-center text-center mt-6">
                    <ThumbsDown className="w-full text-red-600" size={48} />
                    <p className="w-[20ch]">Bad lighting, Looking away</p>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="relative rounded-md w-[150px] h-[150px] md:w-[200px] md:h-[200px] overflow-hidden">
                    <Image
                      src="/assets/images/GoodPhoto.jpeg"
                      fill={true}
                      alt="Example of good photo reference: natural lighting, subject looking at camera"
                    />
                  </div>
                  <div className="w-full flex-col justify-center items-center text-center mt-6">
                    <ThumbsUp className="w-full text-green-600" size={48} />
                    <p className="w-[20ch]">
                      Natural lighting, Looking at camera, Eye level
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="relative rounded-md w-[150px] h-[150px] md:w-[200px] md:h-[200px] overflow-hidden">
                    <Image
                      src="/assets/images/PhotoVsDrawing.jpg"
                      fill={true}
                      alt="Comparison: photo versus drawing reference quality"
                    />
                  </div>
                  <div className="w-full flex-col justify-center items-center text-center mt-6">
                    <Laugh className="w-full text-green-600" size={48} />
                    <p className="w-[20ch]">
                      Better references help make better portraits!
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-6 w-full max-w-[600px]">
                <h2 className="text-[2rem] font-semibold">
                  <span className="text-[#e93e68] font-semibold">
                    High quality references
                  </span>{" "}
                  help capture the details
                </h2>
                <p className="max-w-[60ch] text-[1.2rem] my-[0.75rem]">
                  The most suitable reference photos for portraiture are taken
                  up close at eye level and lit with natural light. If you
                  can&apos;t decide, I&apos;m happy to give suggestions. You can
                  submit multiple photos that best represent distinct aspects
                  you would like to capture. Photos can be sent by email or by
                  postal mail. Physical photos will be returned to you with the
                  final portrait.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Commission;
