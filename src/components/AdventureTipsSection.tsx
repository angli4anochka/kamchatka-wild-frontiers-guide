
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const AdventureTipsSection = () => {
  const tips = [
    {
      icon: "🎒",
      title: "Essential Gear",
      items: [
        "Waterproof boots (mandatory)",
        "Thermal base layers",
        "High-capacity power bank",
        "Waterproof camera gear",
        "Emergency whistle"
      ]
    },
    {
      icon: "📅",
      title: "Planning Tips",
      items: [
        "Book tours before arrival",
        "Most experiences require guides",
        "Weather can change rapidly",
        "Limited ATMs - bring cash",
        "Learn basic Russian phrases"
      ]
    },
    {
      icon: "⚠️",
      title: "Safety First",
      items: [
        "Never approach wildlife",
        "Volcanic areas can be unstable",
        "Always inform someone of plans",
        "Carry emergency supplies",
        "Respect indigenous customs"
      ]
    }
  ];

  return (
    <section className="py-20 px-4 bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-white">
          Adventure <span className="text-green-400">Tips</span>
        </h2>
        
        <div className="text-center mb-16">
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Kamchatka is remote, wild, and logistically challenging — but that's precisely its beauty. 
            Proper preparation ensures an unforgettable experience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {tips.map((category, index) => (
            <Card key={index} className="bg-slate-700 border-slate-600 hover:bg-slate-600 transition-all duration-300">
              <CardHeader className="text-center">
                <div className="text-6xl mb-4">{category.icon}</div>
                <CardTitle className="text-2xl text-white">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="text-gray-300 text-sm flex items-start gap-3">
                      <span className="text-green-400 text-lg">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 border border-red-500/30 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-red-400 mb-4">⚡ Reality Check</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Most volcano interior tours are expensive ($200-500+) but absolutely essential — 
              there's no safe DIY option for the dramatic crater experiences. The investment 
              is worth every penny for once-in-a-lifetime volcanic encounters.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdventureTipsSection;
