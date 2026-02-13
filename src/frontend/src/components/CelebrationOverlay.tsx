import { Dialog, DialogContent } from '@/components/ui/dialog';
import { useEffect, useState } from 'react';

interface CelebrationOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CelebrationHeart {
  id: number;
  left: number;
  animationDuration: number;
  size: number;
  delay: number;
}

export default function CelebrationOverlay({ isOpen, onClose }: CelebrationOverlayProps) {
  const [hearts, setHearts] = useState<CelebrationHeart[]>([]);

  useEffect(() => {
    if (isOpen) {
      const generatedHearts: CelebrationHeart[] = [];
      for (let i = 0; i < 50; i++) {
        generatedHearts.push({
          id: i,
          left: Math.random() * 100,
          animationDuration: 3 + Math.random() * 4,
          size: 20 + Math.random() * 40,
          delay: Math.random() * 2,
        });
      }
      setHearts(generatedHearts);
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="celebration-overlay max-w-4xl border-0 bg-transparent shadow-none">
        <div className="relative z-20 text-center py-12 px-6">
          <div className="celebration-message space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-romantic-primary glow-text-strong mb-8">
              You Just Made Me The Happiest Person Alive ❤️
            </h2>
            <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-romantic-accent glow-text-strong">
              I Love You Ritika ♾️ Forever & Always
            </p>
          </div>
        </div>
        
        <div className="celebration-hearts absolute inset-0 overflow-hidden pointer-events-none">
          {hearts.map((heart) => (
            <div
              key={heart.id}
              className="heart-float absolute"
              style={{
                left: `${heart.left}%`,
                fontSize: `${heart.size}px`,
                animationDuration: `${heart.animationDuration}s`,
                animationDelay: `${heart.delay}s`,
              }}
            >
              💖
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
