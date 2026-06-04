const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background effects */}
      <div className="absolute inset-0 hero-glow pointer-events-none" aria-hidden="true" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 rounded-full px-4 py-1.5 text-sm text-violet-300 mb-8 animate-float">
          <span className="w-2 h-2 bg-violet-400 rounded-full animate-pulse-slow" aria-hidden="true" />
          Now in Public Beta — Try it free today
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
          <span className="text-white">The smarter way to</span>
          <br />
          <span className="gradient-text">build and ship faster</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          testing_product helps modern teams automate workflows, collaborate in real time, and deliver
          results — without the complexity. From idea to production in record time.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#pricing"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-violet-600/30 hover:-translate-y-0.5"
            aria-label="Get started with testing_product"
          >
            Get Started — It's Free
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a
            href="#features"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-200"
            aria-label="Learn more about testing_product features"
          >
            <svg className="w-4 h-4 text-violet-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
            See How It Works
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-900 font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
            aria-label="Book a call with our team"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Book a Call
          </a>
        </div>

        {/* Social proof */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-slate-500">
          <div className="flex -space-x-2">
            {['bg-violet-400', 'bg-indigo-400', 'bg-purple-400', 'bg-pink-400', 'bg-blue-400'].map((color, i) => (
              <div
                key={i}
                className={`w-8 h-8 rounded-full ${color} border-2 border-slate-950 flex items-center justify-center text-xs font-bold text-white`}
                aria-hidden="true"
              >
                {String.fromCharCode(65 + i)}
              </div>
            ))}
          </div>
          <span>Trusted by <strong className="text-slate-300">10,000+</strong> teams worldwide</span>
          <div className="flex items-center gap-1" aria-label="4.9 out of 5 star rating">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="ml-1">4.9/5 rating</span>
          </div>
        </div>

        {/* Dashboard preview placeholder */}
        <div className="mt-16 relative max-w-4xl mx-auto">
          <div className="glass-card rounded-2xl p-1 shadow-2xl shadow-violet-900/20">
            <div className="bg-slate-900 rounded-xl overflow-hidden">
              {/* Fake browser chrome */}
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/60 border-b border-white/5">
                <div className="flex gap-1.5" aria-hidden="true">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
                <div className="flex-1 mx-4 bg-slate-700/50 rounded-md h-6 flex items-center px-3">
                  <span className="text-xs text-slate-500">app.testing_product.io/dashboard</span>
                </div>
              </div>
              {/* Fake dashboard */}
              <div className="p-6 grid grid-cols-3 gap-4 min-h-[200px] sm:min-h-[280px]">
                {[
                  { label: 'Active Projects', value: '24', change: '+12%' },
                  { label: 'Tasks Completed', value: '1,847', change: '+34%' },
                  { label: 'Team Velocity', value: '98%', change: '+8%' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-slate-800/50 rounded-xl p-4 text-left">
                    <p className="text-xs text-slate-500 mb-1">{stat.label}</p>
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                    <p className="text-xs text-emerald-400 mt-1">{stat.change} this month</p>
                  </div>
                ))}
                <div className="col-span-3 bg-slate-800/30 rounded-xl p-4 flex items-center gap-3">
                  <div className="flex-1 space-y-2">
                    {[75, 90, 55, 80].map((w, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-violet-400" aria-hidden="true" />
                        <div className="flex-1 bg-slate-700/50 rounded-full h-2">
                          <div
                            className="h-2 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500"
                            style={{ width: `${w}%` }}
                            aria-hidden="true"
                          />
                        </div>
                        <span className="text-xs text-slate-500">{w}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Glow under dashboard */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-violet-600/20 blur-2xl rounded-full pointer-events-none" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
