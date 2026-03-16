import React from 'react';

const IntelligenceBriefPDF = () => {
  return (
    <div className="min-h-screen print:min-h-0 bg-brand-black print:bg-white text-brand-steel font-sans print:text-slate-900">
      
      {/* Web UI: A simple header with a Print Button (hidden on print) */}
      <div className="print:hidden max-w-4xl mx-auto px-8 py-8 flex justify-between items-center border-b border-brand-steel/10 mb-12">
        <div className="text-white hover:text-brand-gold cursor-pointer uppercase tracking-widest text-xs font-bold transition-colors" onClick={() => window.location.href = '/'}>
          ← Return to Main
        </div>
        <button 
          onClick={() => window.print()}
          className="px-6 py-2 border border-brand-gold text-brand-gold bg-brand-gold/5 hover:bg-brand-gold hover:text-brand-black transition-colors uppercase tracking-[0.2em] font-bold text-xs"
        >
          Print to PDF
        </button>
      </div>

      {/* Main Document Content */}
      <article className="max-w-4xl mx-auto px-8 py-12 md:py-16 print:max-w-none print:px-0 print:py-0 print:mx-0">
        
        {/* Cover Page */}
        <div className="print:h-[10in] flex flex-col justify-center print:break-after-page mb-24 print:mb-0">
          
          {/* Logo / Branding Header */}
          <div className="mb-20 print:mb-32 flex items-center gap-4 text-2xl font-bold tracking-[0.2em] uppercase text-white print:text-slate-900">
            <div className="w-10 h-10 relative">
              <div className="absolute inset-0 border-[1.5px] border-brand-gold print:border-slate-800"></div>
              <div className="absolute top-0 left-0 w-2 h-2 border-t-[1.5px] border-l-[1.5px] border-brand-gold print:border-slate-800"></div>
              <div className="absolute top-0 right-0 w-2 h-2 border-t-[1.5px] border-r-[1.5px] border-brand-gold print:border-slate-800"></div>
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b-[1.5px] border-l-[1.5px] border-brand-gold print:border-slate-800"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b-[1.5px] border-r-[1.5px] border-brand-gold print:border-slate-800"></div>
              <div className="absolute top-2 left-2 right-2 h-[1.5px] bg-white print:bg-slate-800"></div>
              <div className="absolute top-2 bottom-3 left-1/2 -translate-x-1/2 w-[1.5px] bg-white print:bg-slate-800"></div>
            </div>
            transactivate
          </div>

          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-black text-white print:text-slate-900 tracking-tighter uppercase leading-[1.1] mb-8">
              The M&A-Driven Capture Playbook:<br/>
              <span className="text-brand-steel print:text-slate-500 text-3xl md:text-4xl block mt-6">Bypassing Competition via Phase III Authority</span>
            </h1>
            
            <div className="w-16 h-[2px] bg-brand-gold mb-12 print:bg-slate-800"></div>

            <div className="space-y-2">
              <p className="text-brand-steel print:text-slate-600 uppercase tracking-widest text-xs md:text-sm font-bold">
                Published: March 2026
              </p>
              <p className="text-brand-steel print:text-slate-600 uppercase tracking-widest text-xs md:text-sm font-bold">
                Prepared By: transactivate — GovCon M&A and Strategic Capture Advisory
              </p>
            </div>
          </div>
        </div>

        {/* --- Content Sections --- */}
        <div className="max-w-none">
          
          {/* Section 1 */}
          <section className="mb-16 print:mb-12 break-inside-avoid">
            <h2 className="text-2xl font-black uppercase tracking-widest text-white print:text-slate-900 mb-6 flex items-center gap-4 border-b border-brand-steel/10 print:border-slate-200 pb-4">
              <span className="text-brand-gold print:text-slate-400">01.</span> Executive Summary
            </h2>
            <div className="text-base md:text-lg leading-relaxed text-brand-light_steel print:text-slate-700 space-y-6 font-light">
              <p>
                In the modern Federal Government Contracting (GovCon) landscape, traditional capture methodologies have reached a point of mathematical inefficiency. Extended procurement cycles, escalating Bid and Proposal (B&P) costs, and the near-certainty of Government Accountability Office (GAO) bid protests have degraded the return on investment for organic growth strategies.
              </p>
              <p>
                For top-tier Federal Primes, the most efficient mechanism for securing major program ceilings is no longer competitive bidding, but strategic M&A-Driven Capture. By executing targeted asset acquisitions of Small Business Innovation Research (SBIR) Phase III data rights, Primes can legally assume the status of a 'Successor-in-Interest.' This status grants the acquiring firm the statutory authority to bypass full and open competition, enabling the direct, sole-source capture of targeted agency requirements. This intelligence brief details the legal mechanics, strategic application, and execution parameters of the Phase III asset acquisition model.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-16 print:mb-12 break-inside-avoid print:mt-12">
            <h2 className="text-2xl font-black uppercase tracking-widest text-white print:text-slate-900 mb-6 flex items-center gap-4 border-b border-brand-steel/10 print:border-slate-200 pb-4">
              <span className="text-brand-gold print:text-slate-400">02.</span> The Capture Dilemma
            </h2>
            <div className="text-base md:text-lg leading-relaxed text-brand-light_steel print:text-slate-700 space-y-6 font-light">
              <p>
                The fundamental mechanics of traditional federal capture expose major contractors to unacceptable levels of operational and financial risk. As of 2026, the standard timeline from draft Request for Proposal (RFP) to final award frequently exceeds 18 to 24 months. During this period, Primes allocate extensive B&P budgets—often scaling into the millions for Tier 1 programs—with no guarantee of capital recovery.
              </p>
              <p>
                Furthermore, the post-award environment is defined by systemic friction. Competitor protests filed with the GAO have become a standard defensive maneuver, resulting in automatic stays of performance, protracted litigation, and the frequent issuance of corrective actions that reset the procurement cycle. When a Prime is defending an incumbent recompete or pursuing a critical new vehicle, this volatility jeopardizes revenue continuity and delays the deployment of essential capabilities to the federal customer. The requirement for a deterministic, statutorily protected capture mechanism is absolute.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-16 print:mb-12 break-inside-avoid print:mt-12">
            <h2 className="text-2xl font-black uppercase tracking-widest text-white print:text-slate-900 mb-6 flex items-center gap-4 border-b border-brand-steel/10 print:border-slate-200 pb-4">
              <span className="text-brand-gold print:text-slate-400">03.</span> The Phase III Statutory Exception
            </h2>
            <div className="text-base md:text-lg leading-relaxed text-brand-light_steel print:text-slate-700 space-y-6 font-light">
              <p>
                The legal foundation of M&A-Driven Capture rests upon federal statute and the Federal Acquisition Regulation (FAR), which provide an explicit, non-discretionary pathway for sole-source awards based on prior SBIR investments.
              </p>
              <p>
                Under 15 U.S.C. § 638(r)(4), the federal government is legally mandated to issue Phase III awards to the firm that developed the underlying technology—or its Successor-in-Interest—to the greatest extent practicable. The statute specifically dictates that agencies shall issue Phase III awards without further competition, as the foundational competition requirement was satisfied during Phase I or Phase II of the SBIR program.
              </p>
              <p>
                This statutory mandate is operationalized within the FAR under FAR 6.302-5(b)(6), which establishes the exception to full and open competition when 'authorized or required by statute.' Because the Small Business Act explicitly authorizes sole-source Phase III awards, Contracting Officers are provided complete legal cover to execute these contracts. This is not a discretionary preference; it is a codified statutory directive designed to transition mature intellectual property into the federal enterprise.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-16 print:mb-12 break-inside-avoid print:mt-12">
            <h2 className="text-2xl font-black uppercase tracking-widest text-white print:text-slate-900 mb-6 flex items-center gap-4 border-b border-brand-steel/10 print:border-slate-200 pb-4">
              <span className="text-brand-gold print:text-slate-400">04.</span> The M&A Bypass (Successor-in-Interest)
            </h2>
            <div className="text-base md:text-lg leading-relaxed text-brand-light_steel print:text-slate-700 space-y-6 font-light">
              <p>
                The strategic realization for Federal Primes is that this sole-source authority is an asset that can be acquired. It is not permanently tethered to the original small business innovator.
              </p>
              <p>
                Crucially, executing this strategy does not require a full corporate acquisition or a complex 'novation' process—the latter of which implies petitioning the government for discretionary approval to assume an active contract. Instead, the optimal maneuver is a targeted Successor-in-Interest Asset Acquisition.
              </p>
              <p>
                By executing an M&A transaction focused strictly on the purchase of the specific SBIR data rights, intellectual property, and associated technical baseline, the acquiring Prime legally inherits the 'Successor-in-Interest' designation. Upon the execution of the asset purchase agreement, the Prime assumes the full statutory protections of 15 U.S.C. § 638(r)(4).
              </p>
              <p>
                The application is direct: A Prime facing an expiring contract, an imminent recompete, or a highly contested new requirement acquires the relevant Phase III data rights. The Prime then approaches the Contracting Officer with a transition-ready, FAR-compliant sole-source vehicle. The agency secures its requirement without the delays of a multi-year procurement or the risk of a GAO protest, while the Prime secures the revenue ceiling.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section className="mb-16 print:mb-12 break-inside-avoid print:mt-12">
            <h2 className="text-2xl font-black uppercase tracking-widest text-white print:text-slate-900 mb-6 flex items-center gap-4 border-b border-brand-steel/10 print:border-slate-200 pb-4">
              <span className="text-brand-gold print:text-slate-400">05.</span> transactivate's Role
            </h2>
            <div className="text-base md:text-lg leading-relaxed text-brand-light_steel print:text-slate-700 space-y-6 font-light mb-6">
              <p>
                Executing SBIR M&A requires exact timing and precision. transactivate fuses deep federal context and domain experience with advanced data forensics to create non-competitive, unlimited-value, sole-source outcomes through a three-step process:
              </p>
            </div>
            
            <ol className="text-base md:text-lg leading-relaxed text-brand-light_steel print:text-slate-700 space-y-6 font-light list-decimal pl-6 print:pl-8">
              <li className="pl-2">
                <span className="font-bold text-white print:text-slate-900">Federal Context & Transaction Experience:</span> We leverage deep federal domain expertise and specialized SBIR transaction experience to navigate the deluge of open-source data and determine what data matters, why it matters, and how it matters.
              </li>
              <li className="pl-2">
                <span className="font-bold text-white print:text-slate-900">AI-Driven Data Synthesis:</span> We continuously ingest, analyze, and synthesize the data to create Generative AI-based custom solutions that track companies that have acquired SBIRs and successfully turned them into multi-million-dollar Phase IIIs (i.e., been there, done that, likely to do it again), pinpoint Primes facing immediate procurement challenges (e.g., active protests, ongoing bridge contracts, expiring vehicles), and (for buyers) mathematically rank the entire "dormant" SBIR universe (i.e., those that did not advance to Phase III and that are therefore still actionable) based on agency, Phase III technology / capability / mission intent (for your derivation / extension / completion claim), and time-relevance (to ensure you have a long runway of data rights to secure and monetize your Phase III).
              </li>
              <li className="pl-2">
                <span className="font-bold text-white print:text-slate-900">Customized Execution:</span> We operationalize our intelligence through customized, timely outreach directly to executive decision-makers. The result is absolute alignment: the right buyer, the right seller, and the right asset, at the exact right time.
              </li>
            </ol>
          </section>

        </div>
      </article>
    </div>
  );
};

export default IntelligenceBriefPDF;
