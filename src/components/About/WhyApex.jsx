import React from "react";
// import cubeBg from "../../assets/apex-cube-bg.png";

const WhyApex = () => {
  return (
    <section className="why-apex section relative py-20 bg-[#0f0f0f]">
      <div className="container text-white max-w-3xl text-center relative z-10">
        <h2 className="text-3xl font-bold mb-6">
          Why <span className="text-orange-500">Apex Games</span>
        </h2>
        <p className="text-sm leading-6">
          Apex Games will be an industry leader with this innovative concept
          introducing fresh ideas into both gaming and fintech. Our creative
          model offers new revenue paths for players and new utility for crypto
          tokens. We are building more than games—we are crafting an economy.
        </p>
      </div>
      {/* <img
        src={cubeBg}
        alt="Futuristic background"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      /> */}
    </section>
  );
};

export default WhyApex;
