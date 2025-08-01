import Image from 'next/image';
import React from 'react';



  export const metadata  = {
  title: "About Us - NewsSphere",
  description: "Learn more about NewsSphere, our mission, team, and story.",
};

const page = () => {
    return (
        <div>
             <main className="px-4 py-12 max-w-5xl mx-auto">
       <h1 className="text-xl md:text-2xl font-bold mb-4">Global News</h1>
        <p className="text-gray-600 text-lg">
          Bringing you the latest news with clarity, integrity, and speed.
        </p>

      <section className="mb-12">
        <h2 className="text-xl md:text-2xl font-semibold mb-2">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed">
          At NewsSphere, we strive to deliver factual, up-to-date, and unbiased news from around the world. We believe in journalistic integrity and the power of informed citizens.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-xl md:text-2xl font-semibold mb-2">Our Story</h2>
        <p className="text-gray-700 leading-relaxed">
          Founded in 2020 by a group of passionate journalists and technologists, NewsSphere was created to challenge misinformation and present trustworthy reporting in the digital age.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">Meet the Team</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            { name: "Alex Johnson", role: "Editor-in-Chief", img: "/team1.jpg" },
            { name: "Maria Chen", role: "Lead Reporter", img: "/team2.jpg" },
            { name: "David Kim", role: "Tech & Design", img: "/team3.jpg" },
          ].map((member,i) => (
            <div
              key={i}
              className="bg-neutral-200 shadow-2xl rounded-xl  p-4 text-center"
            >
              <Image
                src={member.img}
                alt={member.name}
                width={100}
                height={100}
                className="mx-auto rounded-full"
              />
              <h3 className="mt-4 text-lg font-medium">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="md:text-2xl text-xl font-semibold mb-2">Contact Us</h2>
        <p className="text-gray-700">
          Email: <a href="mailto:contact@newssphere.com" className="text-blue-600 underline">contact@newssphere.com</a><br />
          Address: 123 Media Street, News City, NY 10001
        </p>
      </section>
    </main>
            
        </div>
    );
};

export default page;