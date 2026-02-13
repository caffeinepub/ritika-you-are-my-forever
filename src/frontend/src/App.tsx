import { useState, useRef } from 'react';
import HeartsBackground from './components/HeartsBackground';
import HeroSection from './components/HeroSection';
import LoveMessageSection from './components/LoveMessageSection';
import ReasonsSection from './components/ReasonsSection';
import MemoriesSection from './components/MemoriesSection';
import PromiseSection from './components/PromiseSection';
import ProposalSection from './components/ProposalSection';
import CountdownSection from './components/CountdownSection';
import FinalSection from './components/FinalSection';
import Footer from './components/Footer';
import MusicToggle from './components/MusicToggle';
import CelebrationOverlay from './components/CelebrationOverlay';

function App() {
  const [showCelebration, setShowCelebration] = useState(false);
  const loveMessageRef = useRef<HTMLDivElement>(null);

  const scrollToLoveMessage = () => {
    loveMessageRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleProposalAccept = () => {
    setShowCelebration(true);
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <HeartsBackground />
      <MusicToggle />
      
      <main className="relative z-10">
        <HeroSection onCtaClick={scrollToLoveMessage} />
        <div ref={loveMessageRef}>
          <LoveMessageSection />
        </div>
        <ReasonsSection />
        <MemoriesSection />
        <PromiseSection />
        <ProposalSection onAccept={handleProposalAccept} />
        <CountdownSection />
        <FinalSection />
        <Footer />
      </main>

      <CelebrationOverlay 
        isOpen={showCelebration} 
        onClose={() => setShowCelebration(false)} 
      />
    </div>
  );
}

export default App;
