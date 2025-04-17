import React from 'react';

const Contact = () => {
  return (
    <div id='contact' className="bg-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-8">Need Assistance?</h1>
      
      <div className="w-full max-w-4xl flex flex-col md:flex-row">
        <div className="bg-red-600 text-white p-6 rounded-lg md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">Contact Us!</h2>
          
          <form className="space-y-4">
            <div>
              <input 
                type="text" 
                placeholder="Full Name" 
                className="w-full p-3 rounded bg-white text-black"
              />
            </div>
            
            <div>
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full p-3 rounded bg-white text-black"
              />
            </div>
            
            <div>
              <input 
                type="tel" 
                placeholder="Phone Number" 
                className="w-full p-3 rounded bg-white text-black"
              />
            </div>
            
            <div>
              <textarea 
                placeholder="Message" 
                rows="5"
                className="w-full p-3 rounded bg-white text-black resize-none"
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-black text-white p-3 rounded font-medium"
            >
              Submit
            </button>
          </form>
        </div>
        
        <div className="md:w-1/2 flex items-center justify-center p-4">
          <img 
            src="/car.webp" 
            alt="Vehicle scanning illustration with car" 
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;