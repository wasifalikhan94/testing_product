import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'How does the 14-day free trial work?',
    answer:
      'You get full access to all Pro features for 14 days — no credit card required. At the end of the trial, you can choose to upgrade to a paid plan or continue with the Free tier. We\'ll send you a reminder before your trial ends so you\'re never caught off guard.',
  },
  {
    question: 'Can I change my plan at any time?',
    answer:
      'Absolutely. You can upgrade, downgrade, or cancel your plan at any time from your account settings. If you upgrade mid-cycle, you\'ll only be charged the prorated difference. Downgrades take effect at the start of your next billing cycle.',
  },
  {
    question: 'How does testing_product handle data security and privacy?',
    answer:
      'We take security seriously. All data is encrypted at rest (AES-256) and in transit (TLS 1.3). We are SOC 2 Type II certified, GDPR compliant, and undergo regular third-party security audits. Enterprise plans also include custom data residency options.',
  },
  {
    question: 'What integrations does testing_product support?',
    answer:
      'testing_product integrates with over 200 tools including Slack, GitHub, GitLab, Jira, Figma, Notion, Salesforce, HubSpot, Google Workspace, Microsoft 365, and many more. Pro and Enterprise plans also include access to our REST API and webhooks for custom integrations.',
  },
  {
    question: 'Is there a limit on the number of users?',
    answer:
      'The Free plan supports up to 5 team members. Pro plans support unlimited members — you only pay per seat for active users. Enterprise plans offer custom pricing for large organizations, including volume discounts.',
  },
  {
    question: 'What kind of support do you offer?',
    answer:
      'Free users have access to our comprehensive documentation and community forum. Pro users get priority email support with a 4-hour response SLA. Enterprise customers receive a dedicated customer success manager, 24/7 support, and guaranteed SLAs.',
  },
  {
    question: 'Can I migrate data from another tool?',
    answer:
      'Yes! We offer data migration support from popular tools including Asana, Trello, Monday.com, Linear, and Notion. Our migration wizard handles the heavy lifting, and Pro/Enterprise users get dedicated migration assistance from our team.',
  },
];

const FAQItem = ({ question, answer, isOpen, onClick }: FAQItem & { isOpen: boolean; onClick: () => void }) => (
  <div className="border-b border-white/5 last:border-0">
    <button
      className="w-full flex items-center justify-between py-5 text-left group"
      onClick={onClick}
      aria-expanded={isOpen}
    >
      <span className={`font-medium transition-colors ${isOpen ? 'text-violet-400' : 'text-slate-200 group-hover:text-white'}`}>
        {question}
      </span>
      <span
        className={`ml-4 shrink-0 w-6 h-6 flex items-center justify-center rounded-full transition-all duration-200 ${
          isOpen ? 'bg-violet-500/20 text-violet-400 rotate-180' : 'bg-white/5 text-slate-400'
        }`}
        aria-hidden="true"
      >
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
        </svg>
      </span>
    </button>
    <div
      className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-60 pb-5' : 'max-h-0'}`}
      role="region"
    >
      <p className="text-slate-400 text-sm leading-relaxed">{answer}</p>
    </div>
  </div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 relative" aria-labelledby="faq-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 rounded-full px-4 py-1.5 text-sm text-violet-300 mb-4">
            FAQ
          </div>
          <h2 id="faq-heading" className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Frequently asked{' '}
            <span className="gradient-text">questions</span>
          </h2>
          <p className="text-slate-400">
            Everything you need to know. Can't find the answer you're looking for?{' '}
            <a href="mailto:support@testing_product.io" className="text-violet-400 hover:text-violet-300 underline underline-offset-2">
              Contact our support team.
            </a>
          </p>
        </div>

        <div className="glass-card rounded-2xl px-6 divide-y divide-white/5" role="list">
          {faqs.map((faq, i) => (
            <FAQItem
              key={faq.question}
              {...faq}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
