import { useEffect, useState } from 'react';

interface Heart {
  id: number;
  left: number;
  animationDuration: number;
  size: number;
  delay: number;
}

export default function HeartsBackground() {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const generatedHearts: Heart[] = [];
    for (let i = 0; i < 20; i++) {
      generatedHearts.push({
        id: i,
        left: Math.random() * 100,
        animationDuration: 8 + Math.random() * 8,
        size: 20 + Math.random() * 30,
        delay: Math.random() * 5,
      });
    }
    setHearts(generatedHearts);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
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
          ❤️
        </div>
      ))}
    </div>
  );
}
