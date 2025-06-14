
import React from 'react';

const VideoSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-white">
          Experience <span className="text-red-400">Kamchatka</span>
        </h2>
        
        <div className="text-center mb-12">
          <p className="text-xl text-gray-300">
            Feel Kamchatka through the eyes of a traveler
          </p>
        </div>
        
        <div className="relative bg-black rounded-2xl shadow-2xl overflow-hidden">
          <div className="aspect-video">
            <iframe
              src="https://www.youtube.com/embed/mSiLs5YzwdU"
              title="Kamchatka Peninsula Travel Experience"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-slate-700 rounded-lg p-6 max-w-2xl mx-auto">
            <p className="text-gray-300 italic">
              "This video captures the raw essence of Kamchatka — from helicopter rides over active volcanoes 
              to encounters with wildlife in pristine wilderness. Every frame tells the story of adventure."
            </p>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl transform hover:scale-105 transition-all duration-300">
              Book a Volcano Trek
            </button>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl transform hover:scale-105 transition-all duration-300">
              Meet Indigenous Guides
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
