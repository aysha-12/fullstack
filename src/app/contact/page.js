import Image from 'next/image';
import React from 'react';
import img from '../../assets/pexels-photo-1591062.jpeg'

export const metadata  = {
  title: "contact-NewsWebsite",
  description: "Learn more about NewsSphere, our mission, team, and story.",
};


const page = () => {
    return (
        <div>
            
            <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Banner Section */}
      <section className=" text-white mt-10 px-10 text-center">
       <div>
               <Image className='h-76 md:h-[430px] w-full bg-cover' src={img}  alt='news'></Image>
              </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 px-4 max-w-4xl mx-auto">
        <h2 className="md:text-2xl text-xl font-semibold mb-6 text-center">Send Us a Message</h2>
        <form className="grid grid-cols-1 gap-6">
          <input type="text" placeholder="Full Name" className="p-4 border border-gray-300 rounded-lg" />
          <input type="email" placeholder="Email Address" className="p-4 border border-gray-300 rounded-lg" />
          <textarea rows="5" placeholder="Your Message" className="p-4 border border-gray-300 rounded-lg"></textarea>
          <button type="submit" className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition">Send Message</button>
        </form>
      </section>

      {/* Subscribe Section */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="md:text-2xl text-xl font-semibold mb-4">Subscribe to Our Newsletter</h2>
          <p className="mb-6">Stay updated with the latest news and exclusive offers.</p>
          <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-auto px-4 py-3 border border-gray-300 rounded-lg"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
            
        </div>
    );
};

export default page;