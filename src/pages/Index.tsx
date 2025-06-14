
import React from 'react';
import HeroSection from '../components/HeroSection';
import IntroSection from '../components/IntroSection';
import GettingThereSection from '../components/GettingThereSection';
import AccommodationSection from '../components/AccommodationSection';
import ExperiencesSection from '../components/ExperiencesSection';
import CulturalSection from '../components/CulturalSection';
import AdventureTipsSection from '../components/AdventureTipsSection';
import VideoSection from '../components/VideoSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <HeroSection />
      <IntroSection />
      <GettingThereSection />
      <AccommodationSection />
      <ExperiencesSection />
      <CulturalSection />
      <AdventureTipsSection />
      <VideoSection />
    </div>
  );
};

export default Index;
