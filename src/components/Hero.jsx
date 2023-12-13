import React from "react";
import Car from "../assets/car.svg";
import Button from "../components/Button"


function Hero() {
  return (
    <div className="w-screen  bg-[url('./assets/home.svg')] bg-cover bg-no-repeat ] ">
      <div className="w-full mx-auto flex flex-wrap px-4 sm:px-6 md:px-10 lg:px-24 py-10 lg:py-20 align-middle">
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center gap-4">
          <span className="bg-red-600/10 px-2 py-1 rounded-md w-fit">100% trusted car rental platform in Odisha</span>
          <div className="text-3xl sm:text-5xl md:text-4xl lg:text-6xl  font-bold capitalize">
            <h1 className="text-center md:text-left">Find your best </h1><h1 className="text-red-600 text-center md:text-left">dream car for rental</h1>
          </div>
          <p className="text-center md:text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem totam voluptates a asperiores, tenetur maiores similique deleniti accusamus! Nemo saepe facilis vel at sunt dolorum assumenda quibusdam obcaecati quae accusantium!</p>
          {/* <a href="#" className="px-6 py-3 rounded-sm w-fit lg:w-1/3 text-center text-white font-semibold uppercase bg-red-600">Book Car</a> */}
          <Button btnText="Book Car"/>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img src={Car} alt="" className="w-full sm:w-2/3 md:w-full" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
