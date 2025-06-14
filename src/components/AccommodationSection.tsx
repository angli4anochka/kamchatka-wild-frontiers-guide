
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const AccommodationSection = () => {
  const accommodations = [
    {
      type: "Budget Hostels",
      price: "From $15",
      description: "Dorm beds in Petropavlovsk-Kamchatsky",
      icon: "🏠",
      features: ["Shared facilities", "Central location", "Backpacker friendly"]
    },
    {
      type: "Eco-Lodges",
      price: "From $80",
      description: "Wilderness lodges near hot springs",
      icon: "🏔️",
      features: ["Nature immersion", "Local guides", "Authentic experience"]
    },
    {
      type: "Traditional Yurts",
      price: "From $45",
      description: "Indigenous-style accommodation",
      icon: "⛺",
      features: ["Cultural experience", "Remote locations", "Unique stays"]
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
          Where to <span className="text-blue-400">Stay</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {accommodations.map((acc, index) => (
            <Card key={index} className="bg-slate-700 border-slate-600 hover:bg-slate-600 transition-all duration-300 transform hover:scale-105">
              <CardHeader className="text-center">
                <div className="text-6xl mb-4">{acc.icon}</div>
                <CardTitle className="text-2xl text-white">{acc.type}</CardTitle>
                <div className="text-3xl font-bold text-green-400">{acc.price}</div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4 text-center">{acc.description}</p>
                <ul className="space-y-2">
                  {acc.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-400 text-sm flex items-center gap-2">
                      <span className="text-green-400">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccommodationSection;
