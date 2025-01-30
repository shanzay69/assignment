import Navbar from "./Navbar";
import Image from "next/image";
export default function Hero() {
  return (

<section id="hero" className="text-white min-h-screen flex items-center justify-center px-4 md:px-8 relative">
  <div className="absolute top-0 left-0 w-full z-10">
    <Navbar />
  </div>
  <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 lg:space-x-16 mt-20 md:mt-24 ">
    <div className="relative flex-shrink-0">
      <div className="relative w-64 h-64 md:w-90 md:h-90 lg:w-[500px] lg:h-[500px]">
        <Image
          src="/pick.png"
          alt="pick"
          width={500}
          height={500}
  className="object-cover "
        
        />
      </div>
    </div>
    <div className="text-center md:text-left ">
      <p className="text-4xl md:text-9xl font-bold leading-tight transition duration-300 hover:scale-110 hover:text-cyan-400 ">
        I'm
      </p>
      <p className="text-4xl md:text-9xl font-bold leading-tight mt-5 transition duration-300 hover:scale-110 hover:text-cyan-400 ">
        SHANZA
      </p>
      <p className="text-4xl md:text-9xl font-bold leading-tight mt-5 transition duration-300 hover:scale-110 hover:text-cyan-400">
        KHAN
      </p>
    </div>
  </div>
</section>
  );
};
