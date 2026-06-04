interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "testing_product completely transformed how our engineering team operates. We cut our release cycle in half within the first month. The automation features alone saved us dozens of hours weekly.",
    author: 'Sarah Chen',
    role: 'VP of Engineering',
    company: 'NexaCloud',
    avatar: 'SC',
    rating: 5,
  },
  {
    quote:
      "I've tried every project management tool out there. testing_product is the first one that actually gets out of your way and lets you work. The AI features are genuinely useful, not just gimmicks.",
    author: 'Marcus Johnson',
    role: 'Product Lead',
    company: 'Stratum Labs',
    avatar: 'MJ',
    rating: 5,
  },
  {
    quote:
      "Our distributed team is spread across 8 time zones, and testing_product keeps us completely in sync. The real-time collaboration is flawless. We wouldn't ship without it.",
    author: 'Priya Sharma',
    role: 'CTO',
    company: 'Veloxa',
    avatar: 'PS',
    rating: 5,
  },
];

const avatarColors = ['bg-violet-500', 'bg-indigo-500', 'bg-purple-500'];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 relative" aria-labelledby="testimonials-heading">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 rounded-full px-4 py-1.5 text-sm text-violet-300 mb-4">
            Testimonials
          </div>
          <h2 id="testimonials-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Loved by teams{' '}
            <span className="gradient-text">everywhere</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Don't take our word for it. Here's what real teams are saying about testing_product.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <blockquote
              key={t.author}
              className="glass-card rounded-2xl p-6 hover:border-violet-500/20 transition-all duration-300 hover:shadow-lg hover:shadow-violet-900/10 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4" aria-label={`${t.rating} out of 5 stars`}>
                {[...Array(t.rating)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-300 text-sm leading-relaxed flex-1 mb-6">"{t.quote}"</p>

              {/* Author */}
              <footer className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full ${avatarColors[idx]} flex items-center justify-center text-sm font-bold text-white shrink-0`}
                  aria-hidden="true"
                >
                  {t.avatar}
                </div>
                <div>
                  <cite className="not-italic font-semibold text-white text-sm">{t.author}</cite>
                  <p className="text-slate-500 text-xs">
                    {t.role}, {t.company}
                  </p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '10K+', label: 'Active teams' },
            { value: '99.9%', label: 'Uptime SLA' },
            { value: '4.9★', label: 'Average rating' },
            { value: '150M+', label: 'Tasks completed' },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 glass-card rounded-xl">
              <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
