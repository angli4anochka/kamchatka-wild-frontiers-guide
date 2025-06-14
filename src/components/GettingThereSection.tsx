
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const GettingThereSection = () => {
  return (
    <section className="py-20 px-4 bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
          Getting to <span className="text-orange-400">Kamchatka</span>
        </h2>
        
        <div className="text-center mb-12">
          <p className="text-xl text-gray-300 mb-8">
            Air travel is the only practical option to reach this remote wilderness.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="bg-slate-700 border-slate-600 hover:bg-slate-600 transition-all duration-300 transform hover:scale-105">
            <CardHeader>
              <CardTitle className="text-2xl text-orange-400 flex items-center gap-3">
                <span className="text-3xl">🛫</span>
                From Moscow
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-white">
                <p className="text-3xl font-bold mb-2">$250-400</p>
                <p className="text-gray-400">One way flight</p>
                <p className="text-sm text-gray-500 mt-2">~8 hours flight time</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-700 border-slate-600 hover:bg-slate-600 transition-all duration-300 transform hover:scale-105">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-400 flex items-center gap-3">
                <span className="text-3xl">✈️</span>
                From Vladivostok
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-white">
                <p className="text-3xl font-bold mb-2">~$150</p>
                <p className="text-gray-400">One way flight</p>
                <p className="text-sm text-gray-500 mt-2">~2 hours flight time</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 border border-red-500/30 rounded-lg p-6 max-w-2xl mx-auto">
            <p className="text-yellow-400 font-semibold text-lg">💡 Pro Tip</p>
            <p className="text-gray-300 mt-2">
              Book early to save — peak season flights can reach $600 USD. Summer months (June-September) are most expensive.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GettingThereSection;
