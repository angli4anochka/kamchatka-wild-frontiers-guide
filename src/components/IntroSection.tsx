
import React from 'react';

const IntroSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-4xl mx-auto text-center">
        <div className="prose prose-xl prose-invert mx-auto">
          <p className="text-xl md:text-2xl leading-relaxed text-gray-300 font-light">
            Kamchatka is the edge of the <span className="text-orange-400 font-medium">Russian Far East</span> — or, as locals say, where Russia truly begins. This is a place where nature dominates, access is limited, and experiences are unforgettable.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-gray-400 mt-6">
            No roads lead here. Travel is expensive. But those who come never forget it.
          </p>
          <p className="text-xl md:text-2xl leading-relaxed text-red-400 font-medium mt-8 italic">
            After Kamchatka, one question remains: Did this all really happen to me?
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
