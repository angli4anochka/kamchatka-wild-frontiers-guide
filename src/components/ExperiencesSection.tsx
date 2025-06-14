
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const ExperiencesSection = () => {
  const experiences = [
    {
      title: "Volcano Treks",
      icon: "🌋",
      items: [
        { name: "Tolbachik", description: "5-day expedition through active volcanic zone", price: "~$450" },
        { name: "Mutnovsky", description: "Nearest volcano, full of geysers and fumaroles", price: "~$90" },
        { name: "Avachinsky", description: "Self-guided hike possible, epic views, curious foxes", price: "Free" }
      ]
    },
    {
      title: "Coastal Adventures",
      icon: "🌊",
      items: [
        { name: "Three Brothers Rocks", description: "Sea tour to Pacific Bay with crab tasting", price: "~$35" },
        { name: "Khalaktyrsky Beach", description: "Black volcanic sand surfing beach", price: "Bus + hitchhike" },
        { name: "Pacific Wildlife", description: "Whale watching and sea bird colonies", price: "~$60" }
      ]
    },
    {
      title: "Thermal Springs",
      icon: "♨️",
      items: [
        { name: "Paratunka Springs", description: "Hot pools under snow or rain", price: "~$5" },
        { name: "Esso Village Springs", description: "Traditional hot springs in indigenous village", price: "~$8" },
        { name: "Wild Hot Springs", description: "Remote natural thermal pools", price: "Guided tour req." }
      ]
    },
    {
      title: "Indigenous Culture",
      icon: "🏛️",
      items: [
        { name: "Esso Village", description: "Koryak traditions, museums, bearskin dining", price: "~$25" },
        { name: "Bystrinsky Museum", description: "Indigenous artifacts and cultural exhibits", price: "~$3" },
        { name: "Traditional Crafts", description: "Workshops with local artisans", price: "~$15" }
      ]
    }
  ];

  return (
    <section className="py-20 px-4 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
          Top Experiences in <span className="text-red-400">Kamchatka</span>
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {experiences.map((category, index) => (
            <Card key={index} className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center gap-3">
                  <span className="text-4xl">{category.icon}</span>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.items.map((item, idx) => (
                    <div key={idx} className="bg-slate-700 rounded-lg p-4 hover:bg-slate-600 transition-colors duration-300">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-semibold text-orange-400">{item.name}</h4>
                        <span className="text-green-400 font-bold text-sm bg-green-400/10 px-2 py-1 rounded">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-gray-300 text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;
