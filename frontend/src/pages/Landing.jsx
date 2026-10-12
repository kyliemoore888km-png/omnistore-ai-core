import { ArrowRight, BarChart3, CheckCircle, CreditCard, Lock, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: '/month',
    description: 'Perfect for getting started',
    features: ['1 user', '1 storefront', 'Basic analytics', 'Email support'],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    name: 'Starter',
    price: '$49',
    period: '/month',
    description: 'For small teams',
    features: ['5 users', '2 storefronts', 'Advanced analytics', 'Priority support'],
    cta: 'Start Free Trial',
    highlighted: false,
  },
  {
    name: 'Professional',
    price: '$199',
    period: '/month',
    description: 'For growth-stage brands',
    features: ['25 users', '10 storefronts', 'AI insights', 'SSO & advanced security'],
    cta: 'Start Free Trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For global operations',
    features: ['Unlimited users', 'Unlimited storefronts', 'Dedicated support', 'Custom integrations'],
    cta: 'Contact Sales',
    highlighted: false,
  },
];

export default function Landing() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent" />
        <div className="mx-auto max-w-7xl px-4 py-20 sm:py-28">
          <div className="text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              <Zap size={14} />
              OmniStore AI
            </div>
            <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight text-white sm:text-6xl">
              Commerce operations for teams that want to move faster.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-slate-300">
              Unify storefronts, inventory, teams, and analytics in one premium operating platform built for scale.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Link to="/signup" className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400">
                Start Free Trial <ArrowRight size={18} />
              </Link>
              <Link to="/login" className="rounded-xl border border-slate-700 bg-slate-900 px-6 py-3 font-semibold text-slate-200 transition hover:border-slate-500">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20">
        <h2 className="mb-12 text-center text-4xl font-bold text-white">Everything your operations team needs</h2>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            { icon: Zap, title: 'Automation', desc: 'Cut manual work with workflows across inventory, orders, and customer service.' },
            { icon: BarChart3, title: 'Analytics', desc: 'Track revenue, conversion, and growth in one real-time dashboard.' },
            { icon: Users, title: 'Collaboration', desc: 'Keep teams in sync on orders, operations, and performance goals.' },
            { icon: Lock, title: 'Security', desc: 'Enterprise-grade controls, audit logs, and compliance-first design.' },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <div className="mb-4 inline-flex rounded-xl bg-cyan-500/10 p-3 text-cyan-400">
                <Icon size={22} />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">{title}</h3>
              <p className="text-slate-400">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20">
        <h2 className="mb-12 text-center text-4xl font-bold text-white">Simple pricing</h2>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan) => (
            <div key={plan.name} className={`rounded-2xl border p-6 ${plan.highlighted ? 'border-cyan-500 bg-cyan-500/10 ring-2 ring-cyan-500/60' : 'border-slate-800 bg-slate-900'}`}>
              <div className="mb-4">
                {plan.highlighted && <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">Most Popular</div>}
                <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                <p className="mt-2 text-sm text-slate-400">{plan.description}</p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-slate-400">{plan.period}</span>
              </div>

              <button className={`mb-6 w-full rounded-lg px-4 py-2 font-semibold ${plan.highlighted ? 'bg-cyan-500 text-slate-950 hover:bg-cyan-400' : 'border border-slate-600 bg-slate-800 text-slate-100 hover:border-slate-500'}`}>
                {plan.cta}
              </button>

              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle size={18} className="text-emerald-400" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-20 text-center">
        <h2 className="text-4xl font-bold text-white">Ready to build your next competitive advantage?</h2>
        <p className="mt-4 text-xl text-slate-300">Launch faster with a platform designed to scale with your operations.</p>
        <Link to="/signup" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-8 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400">
          Start Now <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
}
