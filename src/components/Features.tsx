interface Feature {
  icon: string;
  title: string;
  description: string;
  color: string;
}

const features: Feature[] = [
  {
    icon: '⚡',
    title: 'Lightning Fast',
    description: 'Optimized performance that keeps your team moving. Zero lag, instant responses, and real-time sync across all devices.',
    color: 'from-yellow-500/20 to-orange-500/20 border-yellow-500/20',
  },
  {
    icon: '🔒',
    title: 'Enterprise Security',
    description: 'Bank-grade encryption, SSO support, and SOC2 compliance built in. Your data is always protected and private.',
    color: 'from-green-500/20 to-emerald-500/20 border-green-500/20',
  },
  {
    icon: '🤝',
    title: 'Team Collaboration',
    description: 'Real-time collaboration tools that bring remote teams together. Comments, mentions, and live cursors included.',
    color: 'from-blue-500/20 to-cyan-500/20 border-blue-500/20',
  },
  {
    icon: '📊',
    title: 'Advanced Analytics',
    description: 'Powerful insights and dashboards to track team performance, project health, and business outcomes at a glance.',
    color: 'from-violet-500/20 to-purple-500/20 border-violet-500/20',
  },
  {
    icon: '🔗',
    title: '200+ Integrations',
    description: 'Connect with your existing tools — Slack, GitHub, Jira, Figma, and hundreds more. Your workflow, supercharged.',
    color: 'from-pink-500/20 to-rose-500/20 border-pink-500/20',
  },
  {
    icon: '🤖',
    title: 'AI-Powered Automation',
    description: 'Automate repetitive tasks with intelligent workflows. Let AI handle the busywork so your team can focus on what matters.',
    color: 'from-indigo-500/20 to-blue-500/20 border-indigo-500/20',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 relative" aria-labelledby="features-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 rounded-full px-4 py-1.5 text-sm text-violet-300 mb-4">
            Features
          </div>
          <h2 id="features-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Everything you need to{' '}
            <span className="gradient-text">move faster</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Powerful features designed for modern teams. No steep learning curve — just results from day one.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
          {features.map((feature) => (
            <article
              key={feature.title}
              role="listitem"
              className={`glass-card rounded-2xl p-6 bg-gradient-to-br ${feature.color} hover:scale-[1.02] transition-all duration-300 group cursor-default`}
            >
              <div className="text-4xl mb-4" aria-hidden="true">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-violet-300 transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-400 mb-4">Ready to see all features in action?</p>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 font-medium transition-colors"
            aria-label="Start free trial"
          >
            Start your free trial
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
