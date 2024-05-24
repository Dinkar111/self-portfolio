import { MaxWidthWrapper } from "@/components/wrapper";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-4xl md:text-5xl lg:text-6xl">
                <span className="text-primary">Dinkar</span> Maharjan
              </h1>
              <h2 className="relative w-fit tracking-tight text-balance mt-13 font-bold !leading-tight text-2xl md:text-3xl lg:text-4xl">
                Software <span className="text-primary">Developer</span>
              </h2>
              <div className="relative flex gap-4 pt-8 pl-2 ">
                <Link href={"https://github.com/Dinkar111"}>
                  <FaGithub className="h-5 w-5 hover:text-gray-500" />
                </Link>
                <Link href={"https://www.linkedin.com/in/dinkar-maharjan/"}>
                  <FaLinkedin className="h-5 w-5 hover:text-gray-500" />
                </Link>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
