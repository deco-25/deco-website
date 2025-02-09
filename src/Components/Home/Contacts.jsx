import React from "react";

const Contacts = () => {
  return (
    <div className="h-screen w-screen flex px-10 justify-between">
      <div className="w-[47.5%] flex justify-center items-center">
        <div className="w-full h-full flex flex-col gap-10 justify-center items-center">
          <div className="text-8xl font-playfair">
            <h1>
              <span className="italic text-rose-500">Unlock</span> all the
              insights
            </h1>
          </div>
          <div className="text-4xl font-poppins w-full">
            <p>
              We’re here to make your vision a{" "}
              <span className="text-rose-500">reality</span>
            </p>
          </div>
        </div>
      </div>
      <div className="w-[47.5%] flex justify-center items-center">
        <div className="w-[90%] h-[60%] rounded-xl bg-gray-200 flex flex-col gap-5 justify-center items-center px-10">
          <div className="w-full text-center text-3xl  font-playfair font-semibold ">
            <p>Still have questions? No problem!</p>
            <p>Give us a call, and we’ll clear everything up!</p>
          </div>
          <div className="w-full font-poppins flex flex-col gap-4">
            <div className="w-full">
              <h1>Name*</h1>
              <input type="text" className="w-full rounded-md" />
            </div>
            <div className="w-full">
              <h1>Mobile Number*</h1>
              <input type="tel" className="w-full rounded-md" />
            </div>
            <div className="w-full">
              <h1>Email id*</h1>
              <input type="email" className="w-full rounded-md" />
            </div>
            <div className="w-full">
              <h1>Message*</h1>
              <input type="text" className="w-full rounded-md" />
            </div>
            <button className="w-full text-center bg-rose-500 text-white py-2 rounded-full font-semibold mt-5">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
