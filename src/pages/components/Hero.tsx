import Navbar from "./Navbar";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-black text-white min-h-screen flex items-center justify-center px-4 md:px-8 relative">
      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-10">
        <Navbar />
      </div>

      {/* Hero Content */}
      <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 lg:space-x-16 mt-20 md:mt-24">
        {/* Image Section */}
        <div className="flex-shrink-0">
          <div className="rounded-full overflow-hidden w-64 h-64 md:w-96 md:h-96 lg:w-[470px] lg:h-[470px]">
            <Image
              src="/pick.png"
              alt="pick"
              width={470}
              height={470}
              className="object-cover"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="text-center md:text-left">
          <p className="text-4xl md:text-9xl font-bold leading-tight hover:text-yellow-600">
            I'm
          </p>
          <p className="text-4xl md:text-9xl font-bold leading-tight hover:text-yellow-600 mt-5">
            SHANZA
          </p>
          <p className="text-4xl md:text-9xl font-bold leading-tight hover:text-yellow-600 mt-5">
            KHAN
          </p>
        </div>
      </div>
    </section>
  );
}


