import React from "react";
import { PlayCircle } from "lucide-react";
import ".";

const aboutUsGraphic =
  "https://placehold.co/600x400/1a1a1a/cccccc?text=ABOUT+US+GRAPHIC";
const appexTriangleLogo =
  "https://placehold.co/150x100/FF4500/FFFFFF?text=APEX+LOGO"; // Small triangle logo for video

const AboutIntroSection = () => {
  return (
    <header>
      <section className='hero-section'>
        {/* Background shapes - similar to hero section */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* What is Apex Games - Text and Image/Graphic */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
                What is{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">
                  Apex Games
                </span>
                ?
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Apex Games is a pioneering force in the gaming industry,
                introducing a groundbreaking business model that merges gaming
                with smart chain technology. We are building a new era of
                interactive entertainment where players truly own their in-game
                assets and participate in dynamic, player-driven economies.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Our vision goes beyond traditional gaming, fostering a
                decentralized ecosystem where creativity thrives, communities
                are empowered, and innovation is rewarded. We're committed to
                delivering unparalleled gaming experiences alongside real-world
                utility and value through blockchain integration.
              </p>
            </div>
            <div className="flex justify-center items-center">
              {/* Placeholder for a relevant graphic or illustration */}
              <img
                src={aboutUsGraphic}
                alt="Apex Games Concept Graphic"
                className="rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Video Player Section */}
          <div className="relative aspect-video w-full max-w-4xl mx-auto rounded-3xl shadow-2xl overflow-hidden border-4 border-yellow-500 transform hover:scale-[1.01] transition-transform duration-500">
            {/* This would ideally be an embedded YouTube/Vimeo player */}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75">
              <PlayCircle className="w-24 h-24 text-red-600 cursor-pointer hover:text-red-500 transition-colors duration-300" />
              <span className="absolute top-4 left-6 text-xl font-bold text-white z-10">
                APEX GAMES VIDEO
              </span>
              <img
                src={appexTriangleLogo}
                alt="Apex Triangle Logo"
                className="absolute bottom-4 right-6 h-16 opacity-50"
              />
            </div>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/your-video-id"
              title="Apex Games Official Trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0"
            ></iframe>
          </div>
        </div>
      </section>
    </header>
  );
};

export default AboutIntroSection;
