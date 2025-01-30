import React from 'react'
import Link from 'next/link';

export default function Project() {
  const projects = [
    {
      id: 1,
      title: "Furniture Website",
      image: "/furniro-website.png",
      link: "https://onlinewebsite-six.vercel.app/",
    },
    {
      id: 2,
      title: "Pizza Website",
      image: "/pizzawebsite.png",
      link: "https://pizza-website-teal-iota.vercel.app/ ",
    },
    {
      id: 3,
      title: "Blog Website",
      image: "/blogwebsite.jpeg",
      link: "https://blog-sanity-brown-two.vercel.app/",
    },
  ];

  return (
    <section  id='project' className="text-center my-40">
      <h2 className="text-5xl font-bold text-yellow-300 hover:text-cyan-300">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-7 mt-20"data-aos="flip-right">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-700 rounded-lg overflow-hidden shadow-[0_0_1rem_#f5f9fa,0_0_2rem_rgb(39,193,240)] transition-transform transform hover:scale-105 hover:rotate-[360deg] hover:rounded-full w-full max-w-[370px] mx-auto"
          >
            <Link href={project.link} target="_blank">
              <div className="relative p-4 text-center">
                <div
                  className="h-72 bg-cover bg-center opacity-80 rounded-xl"
                  style={{ backgroundImage: `url(${project.image})` }}
                ></div>
                <h3 className="mt-5 text-xl font-bold text-black">{project.title}</h3>
                <h4 className="mt-2 text-sm text-[#1c8a41] font-bold underline hover:text-purple-500">
                  Click On MY Project And visit My Work
                </h4>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
