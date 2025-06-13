import React from "react";

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('/images/slide1.jpg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />
      <div className="relative z-20 flex flex-col justify-center h-full pl-16 text-white">
        <h1 className="text-5xl font-bold mb-4">Design that Speaks.</h1>
        <p className="text-lg mb-6 max-w-xl">
          We bring life to spaces – Interior. Exterior. Signage. All in one.
        </p>
        <div className="flex gap-4">
          <button className="bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition">Explore Services</button>
          <button className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
