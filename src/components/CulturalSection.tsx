
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const CulturalSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
          Indigenous Life & <span className="text-yellow-400">Mythology</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div 
              className="h-96 bg-cover bg-center rounded-lg shadow-2xl"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?q=80&w=4368&auto=format&fit=crop')",
              }}
            >
              <div className="h-full bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-orange-400 mb-4">Three Indigenous Peoples</h3>
              <div className="space-y-4">
                <div className="bg-slate-700 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-white">Koryaks</h4>
                  <p className="text-gray-300 text-sm">Master reindeer herders and fishermen</p>
                </div>
                <div className="bg-slate-700 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-white">Itelmens</h4>
                  <p className="text-gray-300 text-sm">Original inhabitants, "people of the land"</p>
                </div>
                <div className="bg-slate-700 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-white">Evens</h4>
                  <p className="text-gray-300 text-sm">Nomadic reindeer herders from Siberia</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Traditional Culture</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-3">
                  <span className="text-yellow-400">🏠</span>
                  <span><strong>Yaranga:</strong> Traditional circular dwellings</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-red-400">🍲</span>
                  <span><strong>Reindeer Shurpa:</strong> Hearty traditional soup</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-purple-400">👘</span>
                  <span><strong>Traditional Dress:</strong> Fur-lined ceremonial clothing</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-400">🎭</span>
                  <span><strong>Shamanic Rituals:</strong> Ancient spiritual practices</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 border border-yellow-500/30 rounded-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">Cultural Experiences</h3>
            <p className="text-gray-300 mb-6">
              Join traditional festivals, learn ancient crafts, and share meals with indigenous families. 
              These authentic cultural exchanges provide deep insights into Kamchatka's rich heritage.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-yellow-500/20 text-yellow-300 px-4 py-2 rounded-full text-sm">Traditional Festivals</span>
              <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm">Craft Workshops</span>
              <span className="bg-red-500/20 text-red-300 px-4 py-2 rounded-full text-sm">Storytelling Sessions</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CulturalSection;
