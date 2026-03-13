import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, ChevronRight, Activity, Cpu, Hexagon, Crosshair, Network, FileText, ArrowUpRight } from 'lucide-react';

const SECTIONS = {
  LANDING: 'LANDING',
  BUYERS: 'BUYERS',
  SELLERS: 'SELLERS',
  FAQ: 'FAQ',
  CONTACT: 'CONTACT'
};

function App() {
  const [activeSection, setActiveSection] = useState(SECTIONS.LANDING);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-brand-black text-brand-steel font-sans selection:bg-brand-gold selection:text-brand-black">
      {/* Background Layer Group */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* CSS Aurora / Spotlight Effect (Moves slowly across the background) */}
        <div className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%] bg-spotlight-gradient opacity-30 animate-slow-drift z-0 mix-blend-screen"></div>

        {/* Hero Image Parallax */}
        <div 
           className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity grayscale transition-transform duration-1000 ease-out z-10"
           style={{ 
             backgroundImage: 'url(/hero-bg.jpg)',
             transform: `scale(${1 + scrollY * 0.0002})`
           }}
        ></div>
        
        {/* Deep Gradients for Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/70 via-brand-black/95 to-brand-black z-20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(184,153,71,0.08),transparent_60%)] z-30"></div>
      </div>

      <nav className="relative z-50 flex flex-wrap justify-between items-center px-8 py-8 max-w-[90rem] mx-auto w-full border-b border-brand-steel/10">
        <div 
          className="text-2xl font-bold tracking-[0.2em] text-white cursor-pointer flex items-center gap-3 uppercase"
          onClick={() => setActiveSection(SECTIONS.LANDING)}
        >
          <div className="w-8 h-8 flex items-center justify-center border border-brand-gold/50 bg-brand-gold/10">
            <Hexagon size={18} className="text-brand-gold" />
          </div>
          transactivate
        </div>
        <div className="hidden md:flex gap-10 text-xs items-center tracking-widest font-semibold uppercase">
          <button 
            onClick={() => setActiveSection(SECTIONS.BUYERS)} 
            className={`nav-link ${activeSection === SECTIONS.BUYERS ? 'text-white border-b border-brand-gold pb-1' : ''}`}
          >
            Buy-Side Engine
          </button>
          <button 
            onClick={() => setActiveSection(SECTIONS.SELLERS)} 
            className={`nav-link ${activeSection === SECTIONS.SELLERS ? 'text-white border-b border-brand-gold pb-1' : ''}`}
          >
            Sell-Side Engine
          </button>
          <button 
            onClick={() => setActiveSection(SECTIONS.FAQ)} 
            className={`nav-link ${activeSection === SECTIONS.FAQ ? 'text-white border-b border-brand-gold pb-1' : ''}`}
          >
            Intelligence
          </button>
          <button 
            onClick={() => setActiveSection(SECTIONS.CONTACT)} 
            className={`px-6 py-2 border border-brand-steel/30 text-brand-light_steel hover:bg-brand-gold hover:text-brand-black hover:border-brand-gold transition-all duration-300`}
          >
            Initiate Contact
          </button>
        </div>
      </nav>

      <main className="flex-grow relative z-10 container mx-auto px-4 md:px-8 flex items-center justify-center py-20 min-h-[80vh]">
        <AnimatePresence mode='wait'>
          {activeSection === SECTIONS.LANDING && <LandingKey key="landing" onNavigate={setActiveSection} />}
          {activeSection === SECTIONS.BUYERS && <BuyersKey key="buyers" />}
          {activeSection === SECTIONS.SELLERS && <SellersKey key="sellers" />}
          {activeSection === SECTIONS.FAQ && <FaqKey key="faq" />}
          {activeSection === SECTIONS.CONTACT && <ContactKey key="contact" />}
        </AnimatePresence>
      </main>

      <footer className="relative z-50 py-8 border-t border-brand-steel/10 text-center flex flex-col items-center gap-4">
        <div className="flex gap-2 text-brand-gold">
           <div className="w-1 h-1 bg-brand-gold rounded-full"></div>
           <div className="w-1 h-1 bg-brand-gold/50 rounded-full"></div>
           <div className="w-1 h-1 bg-brand-gold/20 rounded-full"></div>
        </div>
        <p className="text-brand-steel/50 uppercase tracking-[0.3em] text-[10px] font-bold">
          &copy; 2026 TRANSACTIVATE. DOMAIN-AWARE INTELLIGENCE.
        </p>
      </footer>
    </div>
  );
}

// -- SECTIONS --

const LandingKey = ({ onNavigate }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.98 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="w-full max-w-6xl mx-auto grid lg:grid-cols-12 gap-16 items-center"
  >
    <div className="lg:col-span-12 text-center flex flex-col items-center">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-brand-gold/30 bg-brand-gold/5 text-brand-gold text-[10px] uppercase tracking-[0.3em] mb-8 font-bold">
        <Activity size={12} />
        Forensic Market Intelligence Engine
      </div>
      
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-[1.1] tracking-tighter uppercase">
        Institutionalizing <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-brand-light_steel to-white glow-text">
          Successor-in-Interest
        </span>
      </h1>
      
      <p className="text-brand-steel text-lg md:text-xl max-w-4xl mx-auto mb-14 leading-relaxed font-light">
        Ideated, architected, and engineered a one-of-a-kind, context- and domain-aware forensic market intelligence engine that uses Generative AI and advanced data waterfalls to synthesize and automate the full lifecycle and ecosystem of SBIR M&A. 
        <br/><br/>
        By fusing frontier technology with deep federal context, transactivate identifies, validates, and institutionalizes the path to non-competitive, <strong className="text-white font-medium">unlimited-value "successor-in-interest" funding.</strong>
      </p>
      
      <div className="flex flex-col sm:flex-row gap-6 justify-center w-full max-w-2xl">
        <button 
          onClick={() => onNavigate(SECTIONS.BUYERS)} 
          className="flex-1 btn-primary flex items-center justify-center gap-3 group"
        >
          Buy-Side <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </button>
        <button 
          onClick={() => onNavigate(SECTIONS.SELLERS)} 
          className="flex-1 px-8 py-4 border border-brand-steel/40 text-brand-light_steel bg-brand-graphite/50 backdrop-blur-sm font-bold uppercase tracking-[0.2em] text-sm hover:bg-brand-steel/10 transition-colors flex items-center justify-center gap-3 group"
        >
          Sell-Side <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  </motion.div>
);

const BuyersKey = () => (
  <motion.div 
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    transition={{ duration: 0.6 }}
    className="w-full max-w-7xl mx-auto"
  >
    <div className="flex flex-col items-center mb-16 text-center">
      <div className="w-16 h-px bg-brand-gold mb-6"></div>
      <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">Buy-Side Engine</h2>
      <p className="text-brand-gold tracking-[0.2em] text-sm uppercase font-semibold">Surgical Path To Unlimited Sole-Source Funding</p>
    </div>

    <div className="max-w-4xl mx-auto text-center mb-16">
      <p className="text-xl text-brand-light_steel font-light leading-relaxed">
        Algorithmically identifies and ranks the massive universe of SBIRs based on capability and mission overlap, desired customer, SBIR Phase III program intent, and a high-fidelity evaluation of remaining data rights (20-year forensic look-back).
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      <div className="glass-card flex flex-col items-start text-left">
        <Crosshair className="text-brand-gold mb-6" size={40} strokeWidth={1} />
        <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">Algorithmic Ranking</h3>
        <p className="text-brand-steel font-light text-sm leading-relaxed mb-6 flex-grow">
          We process the massive universe of SBIRs, ranking them surgically based on precision capability mapping and agency mission overlap.
        </p>
        <div className="w-full h-px bg-brand-steel/20 mb-4"></div>
        <span className="text-[10px] text-brand-gold uppercase tracking-[0.2em] font-bold">Mission Alignment</span>
      </div>

      <div className="glass-card flex flex-col items-start text-left relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full blur-3xl -mr-10 -mt-10"></div>
        <Network className="text-brand-gold mb-6 relative z-10" size={40} strokeWidth={1} />
        <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wider relative z-10">Program Intent</h3>
        <p className="text-brand-steel font-light text-sm leading-relaxed mb-6 flex-grow relative z-10">
          Evaluates the structural potential of the asset against your desired customer and the specific intent for SBIR Phase III transition.
        </p>
        <div className="w-full h-px bg-brand-steel/20 mb-4 relative z-10"></div>
        <span className="text-[10px] text-brand-gold uppercase tracking-[0.2em] font-bold relative z-10">Transition Mapping</span>
      </div>

      <div className="glass-card flex flex-col items-start text-left">
        <Cpu className="text-brand-gold mb-6" size={40} strokeWidth={1} />
        <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">Forensic Look-Back</h3>
        <p className="text-brand-steel font-light text-sm leading-relaxed mb-6 flex-grow">
          High-fidelity evaluation of remaining data rights, utilizing a rigourous 20-year forensic look-back to ensure legal viability and sole-source authority.
        </p>
        <div className="w-full h-px bg-brand-steel/20 mb-4"></div>
        <span className="text-[10px] text-brand-gold uppercase tracking-[0.2em] font-bold">Data Rights Validation</span>
      </div>
    </div>
  </motion.div>
);

const SellersKey = () => (
  <motion.div 
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    transition={{ duration: 0.6 }}
    className="w-full max-w-7xl mx-auto"
  >
    <div className="flex flex-col items-center mb-16 text-center">
      <div className="w-16 h-px bg-brand-gold mb-6"></div>
      <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">Sell-Side Engine</h2>
      <p className="text-brand-gold tracking-[0.2em] text-sm uppercase font-semibold">Strategic Liquidity For Asset Holders</p>
    </div>

    <div className="max-w-4xl mx-auto text-center mb-16">
      <p className="text-xl text-brand-light_steel font-light leading-relaxed">
        Merges and synthesizes disparate datasets to forensically discover companies that have successfully acquired SBIRs and turned them into multi-million-dollar Phase III programs, and Primes facing ongoing or imminent material procurement challenges for which a sole-source SBIR Phase III could be the best solution.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-8">
      <div className="glass-card">
        <div className="flex items-center gap-4 mb-8">
           <div className="w-12 h-12 flex items-center justify-center border border-brand-gold/30 bg-brand-gold/5">
             <span className="text-brand-gold font-mono font-bold">01</span>
           </div>
           <h3 className="text-2xl font-bold text-white uppercase tracking-wider">Dataset Synthesis</h3>
        </div>
        <p className="text-brand-steel leading-relaxed font-light">
          We ingest and merge vast, disparate federal datasets. Our intelligence engine forensically uncovers organizations with a proven track record of acquiring SBIR assets and successfully scaling them into massive Phase III programs. We know who buys, and how they scale.
        </p>
      </div>

      <div className="glass-card">
        <div className="flex items-center gap-4 mb-8">
           <div className="w-12 h-12 flex items-center justify-center border border-brand-gold/30 bg-brand-gold/5">
             <span className="text-brand-gold font-mono font-bold">02</span>
           </div>
           <h3 className="text-2xl font-bold text-white uppercase tracking-wider">Procurement Challenge Modeling</h3>
        </div>
        <p className="text-brand-steel leading-relaxed font-light">
          We identify massive Prime contractors who are currently facing, or are about to face, material procurement challenges (e.g., expiring contracts, protests, ceiling breaches). For these Primes, your sole-source SBIR Phase III authority acts as the ultimate strategic rescue mechanism.
        </p>
      </div>
    </div>
  </motion.div>
);

const FaqKey = () => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.6 }}
    className="w-full max-w-4xl mx-auto"
  >
    <div className="text-center mb-16">
      <div className="flex justify-center mb-6">
         <FileText className="text-brand-gold" size={48} strokeWidth={1} />
      </div>
      <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-4">Intelligence & Authority</h2>
      <p className="text-brand-steel uppercase tracking-[0.2em] text-xs font-bold">Statutory Citations & Verification</p>
    </div>

    <div className="space-y-4">
      <FaqItem 
        question="Is it legal to transfer 'successor-in-interest' rights?"
        answer="Yes. The Federal Register explicitly confirms that a firm may be considered a full successor-in-interest if it secures the transfer of the assets involved in performing the award. This allows the new owner to receive Phase III awards without a novation if the original performance is complete."
        citations={['85 FR 50062', 'SBIR Policy Directive § 6(a)(5)']}
      />
      
      <FaqItem 
        question="Does this justify a Sole-Source award?"
        answer="Absolutely. Phase III awards are statutorily authorized to be made on a sole-source basis. The competition requirement is considered satisfied by the original Phase I/II competition. No further J&A (Justification and Approval) is typically needed beyond citing the statute."
        citations={['15 U.S.C. § 638(r)(4)', 'FAR 6.302-5']}
      />

      <FaqItem 
        question="Is there a dollar limit on Phase III awards?"
        answer="No. Unlike Phase I and II awards, which have caps, Phase III awards have no statutory dollar limit. They are intended for commercialization and full-scale deployment."
        citations={['SBIR Policy Directive § 4(c)(5)']}
      />
    </div>
  </motion.div>
);

const FaqItem = ({ question, answer, citations }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`glass-card p-0 overflow-hidden cursor-pointer transition-colors duration-300 ${isOpen ? 'border-brand-gold/50 bg-brand-graphite' : ''}`} onClick={() => setIsOpen(!isOpen)}>
      <div className="p-6 md:p-8 flex justify-between items-center">
        <h3 className={`font-bold uppercase tracking-wider transition-colors ${isOpen ? 'text-brand-gold' : 'text-white'}`}>{question}</h3>
        <ChevronRight className={`text-brand-steel transition-transform duration-300 ${isOpen ? 'rotate-90 text-brand-gold' : ''}`} size={20} />
      </div>
      <AnimatePresence>
        {isOpen && (
           <motion.div 
             initial={{ height: 0, opacity: 0 }}
             animate={{ height: 'auto', opacity: 1 }}
             exit={{ height: 0, opacity: 0 }}
             className="px-6 md:px-8 pb-8"
           >
             <div className="w-12 h-px bg-brand-gold/50 mb-6"></div>
             <p className="text-brand-light_steel text-sm leading-relaxed mb-6 font-light">
               {answer}
             </p>
             <div className="flex gap-3 flex-wrap">
                {citations.map((cite, i) => (
                  <span key={i} className="px-3 py-1.5 border border-brand-steel/20 text-brand-steel text-[10px] uppercase font-bold tracking-[0.2em] bg-black/50">
                    {cite}
                  </span>
                ))}
             </div>
           </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ContactKey = () => (
   <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.95 }}
    transition={{ duration: 0.5 }}
    className="w-full max-w-2xl mx-auto text-center"
  >
    <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-brand-gold/30 bg-brand-gold/5 text-brand-gold text-[10px] uppercase tracking-[0.3em] mb-8 font-bold">
        Status: Online
    </div>
    
    <h2 className="text-5xl font-black text-white uppercase tracking-tighter mb-6">
      Initiate Protocol
    </h2>
    <p className="text-brand-steel mb-12 font-light text-lg">
      By connecting the right buyer and seller to the right asset at the right time, transactivate provides a surgical, streamlined path.
    </p>

    <div className="glass-card p-12 max-w-md mx-auto flex flex-col items-center relative overflow-hidden group">
      <div className="absolute inset-0 bg-brand-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="w-20 h-20 border border-brand-gold/30 flex items-center justify-center mb-8 relative z-10 bg-brand-black">
        <Shield className="text-brand-gold" size={32} strokeWidth={1} />
      </div>
      
      <h3 className="text-2xl font-black text-white uppercase tracking-widest mb-2 relative z-10">Direct Comms</h3>
      <p className="text-brand-steel/60 text-xs uppercase tracking-[0.2em] font-bold mb-10 relative z-10">Founder Line</p>

      <a 
        href="mailto:founder@transactivate.ai" 
        className="w-full btn-primary flex justify-center items-center gap-3 relative z-10"
      >
        founder@transactivate.ai <ArrowUpRight size={16} />
      </a>
    </div>
  </motion.div>
);

export default App;
