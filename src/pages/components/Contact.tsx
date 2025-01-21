import React from 'react'

function contact() {
  return (

    <div className='container px-1 py-10  max-auto'>
    <div className='flex flex-col text-center w-full  '>
      <h1 className="text-6xl font-bold title-font mb-10 text-yellow-500 underline hover:text-sky-500 " data-aos="flip-right"  style={{marginTop:'150px'}}   >Contact Us
      </h1>
    </div>
  <div id='contact' className="  container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative border-2 border-yellow-500">
      <iframe width="100%" height="100%" title="map" className="absolute inset-0" frameBorder="0" margin-height="0" margin-width="0" scrolling="yes" src=" https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d924247.1893116032!2d66.49460186151113!3d25.191734380985693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1731097454642!5m2!1sen!2s  " >

      </iframe>
      
      
    </div>
    <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 " >
      <h2 className="text-white text-lg mb-1 font-medium title-font">Contact us</h2>
      <p className="leading-relaxed mb-5"> Contact us to learn more about our services                                                             </p>
      <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-gray-400">Name</label>
        <input type="text" id="name" name="name" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-400">Email</label>
        <input type="email" id="email" name="email" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-gray-400">Message</label>
        <textarea id="message" name="message" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
      <p className="text-xs text-gray-400 text-opacity-90 mt-3">Your privacy is our priority. All inquiries and messages are kept confidential and secure</p>
    </div>
  </div>
       






















      </div>
  


    
    
    













                           








        
   
  )
}

export default contact
