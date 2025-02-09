import React from "react";
import WorkFlow_details from "../../data/Workflow";

const Workflow = () => {
  return (
    <div className="h-screen  w-full flex justify-center ">
      <div className=" w-[90%] relative flex ">
        <div className="sticky h-full top-0 w-1/2 p-4">
          <h1 className="text-6xl font-playfair italic">Our Workflow</h1>
          <p className="mt-5 text-xl font-poppins">
            {" "}
            Here’s how your journey with us progresses.
          </p>
          <p className="text-xl font-poppins">
            If you’re seeking a specific service, rest assured, we’ve got you
            covered
          </p>
        </div>
        <div className="w-1/2 text-white flex flex-col items-end gap-10">
          {WorkFlow_details.map((ele, ind) => {
            return (
              <div className="flex gap-8 text-3xl items-center">
                <h1>{ele.title}</h1>
                <div className="min-w-[50px] min-h-[50px] bg-white text-black flex justify-center items-center rounded-full">
                  {ele.no}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
