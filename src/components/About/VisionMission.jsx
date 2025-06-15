import React from "react";

const VisionMission = () => {
  return (
    <section className="vision-mission section bg-black py-16">
      <div className="container grid md:grid-cols-2 gap-10 text-white">
        <div className="bg-gradient-to-br from-gray-900 to-black p-6 border border-orange-500 rounded-xl">
          <h3 className="text-2xl font-bold text-orange-400 mb-4">Our Vision</h3>
          <p className="text-sm">
            Apex Games is a game development studio that wants to change the
            world. Our proprietary cryptocurrency (APEX) will not rely on
            artificial scarcity. Instead, we’ll create entertainment apps and
            games where users can earn and spend APEX, forming a unique digital
            economy.
          </p>
        </div>
        <div className="bg-gradient-to-br from-gray-900 to-black p-6 border border-orange-500 rounded-xl">
          <h3 className="text-2xl font-bold text-orange-400 mb-4">Our Mission</h3>
          <ul className="text-sm list-disc pl-5 space-y-2">
            <li>Develop a proprietary premium cryptocurrency.</li>
            <li>
              Deliver fun, engaging games that reward players through APEX.
            </li>
            <li>
              Launch a merchandise e-shop fully integrated with APEX economy.
            </li>
            <li>
              Empower players to generate value outside the game ecosystem.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
