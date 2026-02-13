import { Card, CardContent } from '@/components/ui/card';

const reasons = [
  { id: 1, text: 'Your smile lights up my world', emoji: '😊' },
  { id: 2, text: 'You understand me like no one else', emoji: '🤝' },
  { id: 3, text: 'You make ordinary days magical', emoji: '✨' },
  { id: 4, text: 'Your laugh is my favorite sound', emoji: '😄' },
  { id: 5, text: 'You are my comfort and my adventure', emoji: '🌟' },
  { id: 6, text: 'You support my dreams', emoji: '🚀' },
  { id: 7, text: 'You make me a better person', emoji: '💪' },
  { id: 8, text: 'You care so deeply', emoji: '🤗' },
  { id: 9, text: 'You are my safe place', emoji: '🏡' },
  { id: 10, text: 'You are my forever', emoji: '♾️' },
];

export default function ReasonsSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16 text-romantic-primary glow-text">
          10 Reasons Why I Love You ❤️
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <Card
              key={reason.id}
              className="reason-card romantic-card hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">{reason.emoji}</div>
                <p className="text-lg md:text-xl text-romantic-text font-medium">
                  {reason.text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
