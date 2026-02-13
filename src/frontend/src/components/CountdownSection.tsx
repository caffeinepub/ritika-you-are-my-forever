import { useValentinesCountdown } from '../hooks/useValentinesCountdown';

export default function CountdownSection() {
  const countdown = useValentinesCountdown();

  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto text-center fade-in-up">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-romantic-primary glow-text">
          Next Valentine's Day With You ❤️
        </h2>
        <div className="romantic-card p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="countdown-item">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-romantic-accent glow-text">
                {countdown.days}
              </div>
              <div className="text-lg md:text-xl text-romantic-secondary mt-2">Days</div>
            </div>
            <div className="countdown-item">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-romantic-accent glow-text">
                {countdown.hours}
              </div>
              <div className="text-lg md:text-xl text-romantic-secondary mt-2">Hours</div>
            </div>
            <div className="countdown-item">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-romantic-accent glow-text">
                {countdown.minutes}
              </div>
              <div className="text-lg md:text-xl text-romantic-secondary mt-2">Minutes</div>
            </div>
            <div className="countdown-item">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-romantic-accent glow-text">
                {countdown.seconds}
              </div>
              <div className="text-lg md:text-xl text-romantic-secondary mt-2">Seconds</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
