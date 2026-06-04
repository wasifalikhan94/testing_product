import { useState } from 'react';

interface PlanFeature {
  text: string;
  included: boolean;
}

interface Plan {
  name: string;
  description: string;
  monthlyPrice: number | null;
  yearlyPrice: number | null;
  badge?: string;
  features: PlanFeature[];
  cta: string;
  highlighted: boolean;
}

const plans: Plan[] = [
  {
    name: 'Free',
    description: 'Perfect for individuals and small projects',
    monthlyPrice: 0,
    yearlyPrice: 0,
    features: [
      { text: 'Up to 3 projects', included: true },
      { text: '5 team members', included: true },
      { text: '5GB storage', included: true },
      { text: 'Basic analytics', included: true },
      { text: 'Community support', included: true },
      { text: 'AI automation', included: false },
      { text: 'Custom integrations', included: false },
      { text: 'SSO & advanced security', included: false },
    ],
    cta: 'Start for Free',
    highlighted: false,
  },
  {
    name: 'Pro',
    description: 'For growing teams that need more power',
    monthlyPrice: 29,
    yearlyPrice: 24,
    badge: 'Most Popular',
    features: [
      { text: 'Unlimited projects', included: true },
      { text: 'Unlimited members', included: true },
      { text: '50GB storage', included: true },
      { text: 'Advanced analytics', included: true },
      { text: 'Priority support', included: true },
      { text: 'AI automation', included: true },
      { text: '200+ integrations', included: true },
      { text: 'SSO & advanced security', included: false },
    ],
    cta: 'Start Pro Trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    description: 'For large organizations with custom needs',
    monthlyPrice: null,
    yearlyPrice: null,
    features: [
      { text: 'Unlimited everything', included: true },
      { text: 'Unlimited members', included: true },
      { text: 'Unlimited storage', included: true },
      { text: 'Custom analytics & reports', included: true },
      { text: 'Dedicated success manager', included: true },
      { text: 'Advanced AI automation', included: true },
      { text: 'Custom integrations & API', included: true },
      { text: 'SSO, SAML & advanced security', included: true },
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
];

const CheckIcon = ({ included }: { included: boolean }) => (
  <svg
    className={`w-4 h-4 shrink-0 ${included ? 'text-violet-400' : 'text-slate-600'}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    {included ? (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    ) : (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    )}
  </svg>
);

const Pricing = () => {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="py-24 relative" aria-labelledby="pricing-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 rounded-full px-4 py-1.5 text-sm text-violet-300 mb-4">
            Pricing
          </div>
          <h2 id="pricing-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Simple, transparent{' '}
            <span className="gradient-text">pricing</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto mb-8">
            Start free, scale as you grow. No hidden fees, no surprises.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 bg-slate-800/60 rounded-full p-1" role="group" aria-label="Billing cycle">
            <button
              onClick={() => setYearly(false)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                !yearly ? 'bg-white text-slate-900' : 'text-slate-400 hover:text-white'
              }`}
              aria-pressed={!yearly}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                yearly ? 'bg-white text-slate-900' : 'text-slate-400 hover:text-white'
              }`}
              aria-pressed={yearly}
            >
              Yearly
              <span className="ml-1.5 bg-emerald-500 text-white text-xs px-1.5 py-0.5 rounded-full">-17%</span>
            </button>
          </div>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-6 flex flex-col ${
                plan.highlighted
                  ? 'bg-violet-600/10 border-2 border-violet-500/50 shadow-xl shadow-violet-900/20'
                  : 'glass-card'
              }`}
              aria-label={`${plan.name} plan`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-violet-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                <p className="text-slate-400 text-sm">{plan.description}</p>
              </div>

              <div className="mb-6">
                {plan.monthlyPrice !== null ? (
                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-bold text-white">
                      ${yearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-slate-400 text-sm mb-1">/mo</span>
                  </div>
                ) : (
                  <div className="text-2xl font-bold text-white">Custom pricing</div>
                )}
                {yearly && plan.monthlyPrice !== null && plan.monthlyPrice > 0 && (
                  <p className="text-emerald-400 text-xs mt-1">
                    Save ${((plan.monthlyPrice - (plan.yearlyPrice ?? 0)) * 12)} per year
                  </p>
                )}
              </div>

              <ul className="space-y-3 mb-8 flex-1" role="list" aria-label={`${plan.name} features`}>
                {plan.features.map((feature) => (
                  <li key={feature.text} className="flex items-center gap-2.5">
                    <CheckIcon included={feature.included} />
                    <span className={`text-sm ${feature.included ? 'text-slate-300' : 'text-slate-600'}`}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`block text-center py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
                  plan.highlighted
                    ? 'bg-violet-600 hover:bg-violet-500 text-white shadow-lg shadow-violet-900/30 hover:-translate-y-0.5'
                    : 'bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white'
                }`}
                aria-label={`${plan.cta} - ${plan.name} plan`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-slate-500 text-sm mt-8">
          All plans include a 14-day free trial. No credit card required.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
