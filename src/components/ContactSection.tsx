import React, { useState } from 'react';
import { Mail, Shield, Zap, CheckCircle, ArrowRight, Check } from 'lucide-react';

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService }) => {
  // Weekly newsletter state
  const [memoEmail, setMemoEmail] = useState('');
  const [memoSubscribed, setMemoSubscribed] = useState(false);

  // Main form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [brief, setBrief] = useState(initialService ? `Inquiring about: ${initialService}. ` : '');
  const [budgetRange, setBudgetRange] = useState('$25k – $50k');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const budgetOptions = [
    { range: '$25k – $50k', label: 'MVP / Discovery' },
    { range: '$50k – $100k', label: 'Product Build' },
    { range: '$100k – $250k', label: 'Core Enterprise' },
    { range: '$250k+', label: 'Strategic Transformation' }
  ];

  const handleMemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!memoEmail) return;
    setMemoSubscribed(true);
    setTimeout(() => {
      setMemoEmail('');
    }, 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#FAF8FE] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Weekly Engineering Memo Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-md mb-20 relative overflow-hidden">
          {/* Subtle gradient glow in top right */}
          <div className="absolute top-0 right-0 w-80 h-full bg-gradient-to-l from-rose-100/40 via-purple-100/20 to-transparent pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-orange-600 uppercase mb-3">
                <Mail className="w-4 h-4 text-orange-500" />
                <span>WEEKLY ENGINEERING MEMO</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
                Stay ahead of production AI breakthroughs
              </h3>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Direct from our team to your inbox every Thursday. Zero marketing fluff, purely code samples, architecture schematics, and benchmark retrospectives.
              </p>
            </div>

            <div className="lg:col-span-5">
              {memoSubscribed ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 text-emerald-800 flex items-center gap-3">
                  <Check className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span className="text-sm font-semibold">You're subscribed! Next issue arrives Thursday.</span>
                </div>
              ) : (
                <form onSubmit={handleMemoSubmit} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    required
                    value={memoEmail}
                    onChange={(e) => setMemoEmail(e.target.value)}
                    placeholder="eng-lead@enterprise.com"
                    className="flex-1 px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-rose-500 to-purple-600 hover:opacity-95 transition-all shadow-md shrink-0"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Main Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Guarantees */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
                Tell us{' '}
                <span className="bg-gradient-to-r from-[#FF5722] via-[#E91E63] to-[#8C3BE2] bg-clip-text text-transparent">
                  what's not working
                </span>
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Whether it's a system that's outgrown itself, a project stuck mid-build, or an idea that needs a team to actually ship it.
              </p>
            </div>

            {/* 3 Guarantee Cards */}
            <div className="space-y-4">
              {/* Guarantee 1 */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600 shrink-0 mt-0.5">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1">
                    NDA protected
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    Your IP & data guarded under strict bilateral confidentiality agreements before any architectural review.
                  </p>
                </div>
              </div>

              {/* Guarantee 2 */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-pink-50 border border-pink-100 flex items-center justify-center text-pink-600 shrink-0 mt-0.5">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1">
                    Response within 1 business day
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    Direct review from a senior solutions architect with zero gatekeeping or junior screeners.
                  </p>
                </div>
              </div>

              {/* Guarantee 3 */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 shrink-0 mt-0.5">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1">
                    No obligation
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    Free 30-min discovery session complete with actionable architecture notes and roadmap takeaways.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-xl relative overflow-hidden">
              {/* Top vibrant gradient border strip */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-orange-500 via-rose-500 to-purple-600" />

              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Start with a conversation
              </h3>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <Check className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900">Message Received</h4>
                  <p className="text-slate-600 max-w-md mx-auto text-sm">
                    Thank you, {name || 'Partner'}. A senior solutions architect is reviewing your brief and will connect within one business day.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setEmail('');
                      setCompany('');
                      setBrief('');
                    }}
                    className="mt-4 px-6 py-2.5 rounded-xl text-xs font-semibold text-purple-700 bg-purple-50 hover:bg-purple-100 border border-purple-200"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        NAME <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        WORK EMAIL <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="sarah@company.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      COMPANY <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Acme Enterprises Inc."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      PROJECT BRIEF <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={brief}
                      onChange={(e) => setBrief(e.target.value)}
                      placeholder="Tell us what's not working, current systems, or key timeline goals..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>

                  {/* Budget Range Selection */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      BUDGET RANGE <span className="text-rose-500">*</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {budgetOptions.map((opt) => {
                        const isSelected = budgetRange === opt.range;
                        return (
                          <button
                            type="button"
                            key={opt.range}
                            onClick={() => setBudgetRange(opt.range)}
                            className={`p-3 rounded-xl text-left border transition-all ${
                              isSelected
                                ? 'border-purple-500 bg-purple-50/50 ring-1 ring-purple-500'
                                : 'border-slate-200 hover:border-slate-300 bg-white'
                            }`}
                          >
                            <div className="font-bold text-slate-900 text-xs sm:text-sm">
                              {opt.range}
                            </div>
                            <div className="text-[11px] text-slate-500">
                              {opt.label}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#FF5722] via-[#E91E63] to-[#8C3BE2] hover:opacity-95 transition-all shadow-lg shadow-purple-500/20 flex items-center justify-center gap-2 active:scale-[0.99]"
                    >
                      <span>{isSubmitting ? 'Submitting...' : 'Submit Now'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
