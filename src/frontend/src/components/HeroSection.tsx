import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  onCtaClick: () => void;
}

export default function HeroSection({ onCtaClick }: HeroSectionProps) {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="text-center max-w-4xl mx-auto hero-entrance">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-romantic-primary glow-text">
          Happy Valentine's Day, My Love Ritika 💖
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl mb-12 text-romantic-secondary font-light">
          From the moment you came into my life, everything became more beautiful.
        </p>
        <Button
          onClick={onCtaClick}
          size="lg"
          className="heart-button text-lg md:text-xl px-8 py-6 rounded-full"
        >
          Click to See My Heart 💓
        </Button>
      </div>
    </section>
  );
}
