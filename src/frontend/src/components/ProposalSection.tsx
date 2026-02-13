import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';

interface ProposalSectionProps {
  onAccept: () => void;
}

export default function ProposalSection({ onAccept }: ProposalSectionProps) {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [noButtonVisible, setNoButtonVisible] = useState(true);
  const noButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (noButtonRef.current) {
      const rect = noButtonRef.current.getBoundingClientRect();
      setNoButtonPosition({ x: rect.left, y: rect.top });
    }
  }, []);

  const handleNoHover = () => {
    const newX = Math.random() * (window.innerWidth - 200);
    const newY = Math.random() * 300 - 150;
    setNoButtonPosition({ x: newX, y: newY });
    
    setTimeout(() => {
      setNoButtonVisible(false);
    }, 2000);
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto text-center fade-in-up">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-romantic-primary glow-text">
          Ritika, Will You Be My Valentine? 💝
        </h2>
        <div className="relative min-h-[300px] flex flex-col items-center justify-center gap-6">
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              onClick={onAccept}
              size="lg"
              className="proposal-button text-xl px-10 py-6 rounded-full"
            >
              Yes 💖
            </Button>
            <Button
              onClick={onAccept}
              size="lg"
              className="proposal-button text-xl px-10 py-6 rounded-full"
            >
              Of Course Yes 😘
            </Button>
          </div>
          
          {noButtonVisible && (
            <button
              ref={noButtonRef}
              onMouseEnter={handleNoHover}
              onTouchStart={handleNoHover}
              className="no-button absolute transition-all duration-300 px-8 py-3 rounded-full text-lg"
              style={{
                left: noButtonPosition.x > 0 ? `${noButtonPosition.x}px` : 'auto',
                top: noButtonPosition.y > 0 ? `${noButtonPosition.y}px` : 'auto',
              }}
            >
              No
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
