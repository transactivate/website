import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, ChevronRight, Activity, Hexagon, Crosshair, Network, FileText, ArrowUpRight, ArrowRight, Menu, X } from 'lucide-react';
import IntelligenceBriefPDF from './IntelligenceBriefPDF';

function App() {
  const [currentPath] = useState(window.location.pathname);

  if (currentPath === '/playbook-pdf') {
    return <IntelligenceBriefPDF />;
  }

  const [scrollY, setScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Handle scroll parallax and monitoring
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track cursor for the responsive background aura
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    
    // Only track mouse movement on non-touch devices for performance
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
       window.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMobileMenuOpen]);

  const handleNavClick = (id) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (id === 'landing') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-brand-black text-brand-steel font-sans selection:bg-brand-gold selection:text-brand-black">
      {/* Background Layer Group */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-brand-black flex items-center justify-center">
        {/* Hero Image Parallax - Contained to prevent ANY cropping */}
        <div 
           className="w-full h-full opacity-60 mix-blend-luminosity transition-transform duration-1000 ease-out z-10"
           style={{ 
             backgroundImage: 'url(/hero-bg.png)',
             backgroundPosition: 'center center', 
             backgroundSize: 'contain',
             backgroundRepeat: 'no-repeat',
             transform: `scale(${1 + scrollY * 0.0002})`
           }}
        ></div>
        
        {/* Deep Gradients for Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/60 via-brand-black/95 to-brand-black z-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent z-20 h-32 bottom-0"></div>

        {/* Forensic Matrix: Architectural Grid Overlay */}
        <div 
          className="absolute inset-0 z-20 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, #888C8D 1px, transparent 1px), linear-gradient(to bottom, #888C8D 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        ></div>

        {/* Dynamic Mouse-Responsive Aura */}
        <motion.div 
          className="absolute inset-0 z-[22] opacity-80 pointer-events-none mix-blend-screen transition-opacity duration-1000 hidden md:block"
          animate={{
            background: `radial-gradient(1000px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(184,153,71,0.3), transparent 60%)`
          }}
          transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
        />

        {/* Mobile Static Fallback */}
        <div 
          className="absolute -inset-[50%] z-[22] opacity-50 pointer-events-none mix-blend-screen md:hidden"
          style={{
             background: 'radial-gradient(ellipse at center, rgba(184,153,71,0.25) 0%, transparent 50%)'
          }}
        />
      </div>

      <nav className="fixed top-0 left-0 right-0 z-50 flex flex-wrap justify-between items-center px-6 md:px-8 py-6 md:py-8 max-w-[90rem] mx-auto w-full bg-brand-black/50 backdrop-blur-md border-b border-brand-steel/10 transition-all duration-300">
        <div 
          className="text-xl md:text-2xl font-bold tracking-[0.2em] text-white cursor-pointer flex items-center gap-4 uppercase z-50"
          onClick={() => handleNavClick('landing')}
        >
          {/* Custom V3 Logo: Abstract 'T' Crosshair/Shield */}
          <div className="w-8 h-8 md:w-10 md:h-10 relative group">
            {/* Outer Target Box */}
            <div className="absolute inset-0 border-[1.5px] border-brand-gold/30 group-hover:border-brand-gold transition-colors duration-500"></div>
            {/* Corner Bracket Accents */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t-[1.5px] border-l-[1.5px] border-brand-gold"></div>
            <div className="absolute top-0 right-0 w-2 h-2 border-t-[1.5px] border-r-[1.5px] border-brand-gold"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b-[1.5px] border-l-[1.5px] border-brand-gold"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-[1.5px] border-r-[1.5px] border-brand-gold"></div>
            
            {/* Inner Geometric 'T' */}
            <div className="absolute top-2 left-2 right-2 h-[1.5px] bg-white group-hover:bg-brand-gold transition-colors duration-500"></div>
            <div className="absolute top-2 bottom-3 left-1/2 -translate-x-1/2 w-[1.5px] bg-white group-hover:bg-brand-gold transition-colors duration-500"></div>
          </div>
          transactivate
        </div>
        
        {/* Mobile Menu Toggle Button */}
        <button 
          className="md:hidden text-white z-50 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-10 text-xs items-center tracking-widest font-semibold uppercase">
          <button onClick={() => handleNavClick('buyers')} className="nav-link">Buy-Side</button>
          <button onClick={() => handleNavClick('sellers')} className="nav-link">Sell-Side</button>
          <button onClick={() => handleNavClick('faq')} className="nav-link">FAQ</button>
          <button onClick={() => handleNavClick('whitepapers')} className="nav-link"><span className="lowercase">transactivate</span> white paper</button>
          <button 
            onClick={() => handleNavClick('contact')} 
            className="px-6 py-2 border border-brand-steel/30 text-brand-light_steel hover:bg-brand-gold hover:text-brand-black hover:border-brand-gold transition-all duration-300"
          >
            Initiate Contact
          </button>
        </div>
      </nav>

      {/* Mobile Full-Screen Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-brand-black/95 backdrop-blur-md flex flex-col items-center justify-center pt-20 pb-10 px-6 overflow-y-auto"
          >
            <div className="flex flex-col items-center gap-8 w-full max-w-sm">
              <button 
                onClick={() => handleNavClick('buyers')} 
                className="w-full py-4 text-center uppercase tracking-[0.2em] font-bold text-sm border-b border-brand-steel/20 text-white hover:text-brand-gold transition-colors"
              >
                Buy-Side
              </button>
              <button 
                onClick={() => handleNavClick('sellers')} 
                className="w-full py-4 text-center uppercase tracking-[0.2em] font-bold text-sm border-b border-brand-steel/20 text-white hover:text-brand-gold transition-colors"
              >
                Sell-Side
              </button>
              <button 
                onClick={() => handleNavClick('faq')} 
                className="w-full py-4 text-center uppercase tracking-[0.2em] font-bold text-sm border-b border-brand-steel/20 text-white hover:text-brand-gold transition-colors"
              >
                FAQ
              </button>
              <button 
                onClick={() => handleNavClick('whitepapers')} 
                className="w-full py-4 text-center uppercase tracking-[0.2em] font-bold text-sm border-b border-brand-steel/20 text-white hover:text-brand-gold transition-colors"
              >
                <span className="lowercase">transactivate</span> white paper
              </button>
              <button 
                onClick={() => handleNavClick('contact')} 
                className="w-full mt-4 py-4 border border-brand-gold text-brand-gold uppercase tracking-[0.2em] font-bold text-sm bg-brand-gold/5"
              >
                Initiate Contact
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative z-10 w-full pt-32">
        <section id="landing">
           <LandingKey onNavigate={handleNavClick} />
        </section>
        
        <MethodologyKey />

        <section id="faq">
           <FaqKey />
        </section>

        <section id="whitepapers">
           <WhitepapersKey />
        </section>

        <section id="contact">
           <ContactKey />
        </section>
      </main>

      <footer className="relative z-50 py-12 md:py-24 border-t border-brand-steel/10 text-center flex flex-col items-center gap-6 md:gap-8">
        <div className="flex gap-2 text-brand-gold mb-4">
           <div className="w-1 h-1 bg-brand-gold rounded-full"></div>
           <div className="w-1 h-1 bg-brand-gold/50 rounded-full"></div>
           <div className="w-1 h-1 bg-brand-gold/20 rounded-full"></div>
        </div>
        <Hexagon size={24} className="text-brand-steel/20" />
        <p className="text-brand-steel/40 uppercase tracking-[0.4em] text-[8px] md:text-[10px] font-bold">
          &copy; 2026 TRANSACTIVATE. <br className="md:hidden" /> FORENSIC MARKET INTELLIGENCE.
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
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center min-h-[90vh] px-6 md:px-8 text-center pb-20"
  >
      <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 border border-brand-gold/30 bg-brand-gold/5 text-brand-gold text-[8px] md:text-[10px] uppercase tracking-[0.15em] md:tracking-[0.3em] mb-6 md:mb-12 font-bold max-w-full text-center whitespace-normal">
        <Activity size={12} className="flex-shrink-0" />
        <span className="break-words">High-Fidelity, Timely Intelligence</span>
      </div>
      
      <h1 className="sr-only">Transactivate</h1>
      
      {/* V2 Header Sizing Adjustment - Bulletproof mobile wrapping */}
      <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 md:mb-10 leading-[1.1] md:leading-[1] tracking-tighter uppercase px-2 w-full max-w-6xl break-words sm:break-normal">
        Sole-Source <br className="hidden md:block"/> 
        <span className="text-transparent bg-clip-text bg-gradient-to-br from-brand-gold via-brand-light_steel to-white glow-text whitespace-nowrap md:whitespace-normal">
          Authority
        </span>
      </h2>
      
      <p className="text-brand-steel text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-10 md:mb-16 leading-relaxed font-light px-4">
        The forensic market intelligence engine for SBIR M&A. Leveraging deep federal context and domain experience, we build Generative AI-based custom solutions to secure non-competitive, <strong className="text-white font-medium">unlimited-value sole-source funding.</strong>
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center w-full max-w-xl mx-auto px-4">
        <button 
          onClick={() => onNavigate('buyers')} 
          className="w-full sm:flex-1 btn-primary flex items-center justify-center gap-3 group"
        >
          Buy-Side <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </button>
        <button 
          onClick={() => onNavigate('sellers')} 
          className="w-full sm:flex-1 px-4 sm:px-8 py-3 sm:py-4 border border-brand-steel/40 text-brand-light_steel bg-brand-graphite/50 backdrop-blur-sm font-bold uppercase tracking-[0.2em] text-xs sm:text-sm hover:bg-brand-steel/10 transition-colors flex items-center justify-center gap-2 group"
        >
          Sell-Side <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
  </motion.div>
);

const MethodologyKey = () => (
  <section className="py-24 relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-brand-steel/10">
    <h2 className="text-3xl md:text-4xl font-light text-white tracking-[0.15em] uppercase mb-8 text-center text-brand-steel">
      <span className="lowercase">transactivate</span>'s Role
    </h2>
    <p className="text-slate-400 text-center max-w-3xl mx-auto text-lg mb-16 leading-relaxed">
      Executing SBIR M&A requires exact timing and precision. <span className="lowercase">transactivate</span> fuses deep federal context and domain experience with advanced data forensics to create non-competitive, unlimited-value, sole-source outcomes through a three-step process:
    </p>

    {/* The Industrial Ledger (The Main Container) */}
    <div className="w-full border border-slate-800 bg-black shadow-2xl flex flex-col">
      
      {/* ROW 01: UNIFIED CONTEXT */}
      <div className="p-8 lg:p-12 border-b border-slate-800">
        <div className="font-mono text-[10px] tracking-[0.2em] text-slate-500 uppercase mb-4">/// Phase 01 : Foundation</div>
        <h3 className="text-2xl font-light text-white mb-4">Federal Context & Transaction Experience</h3>
        <p className="text-slate-400 text-lg leading-relaxed max-w-4xl">
          We leverage deep federal domain expertise and specialized SBIR transaction experience to navigate the deluge of open-source data and determine what data matters, why it matters, and how it matters.
        </p>
      </div>

      {/* ROW 02: SYNTHESIS (The Engine & Bifurcation) */}
      <div className="flex flex-col border-b border-slate-800">
        {/* The Shared Header Area */}
        <div className="p-8 lg:p-12 border-b border-slate-800 bg-slate-900/20">
          <div className="font-mono text-[10px] tracking-[0.2em] text-slate-500 uppercase mb-4">/// Phase 02 : The Engine</div>
          <h3 className="text-2xl font-light text-white mb-4">AI-Driven Data Synthesis</h3>
          <p className="text-slate-400 text-lg leading-relaxed max-w-4xl">
            We continuously ingest, analyze, and synthesize the data to create Generative AI-based custom solutions that:
          </p>
        </div>

        {/* The Bifurcation (Split Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-slate-800">
          {/* Left Column (Buy-Side) */}
          <div id="buyers" className="p-8 lg:p-12 scroll-mt-32 bg-black hover:bg-slate-900/40 transition-colors duration-500 group">
            <div className="inline-block border border-slate-700 bg-slate-950 px-3 py-1.5 mb-6 group-hover:border-slate-500 transition-colors">
              <span className="font-mono text-[10px] tracking-[0.2em] text-white uppercase">[ TARGET: BUY-SIDE ]</span>
            </div>
            <p className="text-slate-400 leading-relaxed text-[15px]">
              ...mathematically rank the entire "dormant" SBIR universe (i.e., those that did not advance to Phase III and that are therefore still actionable) based on agency, Phase III technology / capability / mission intent (for your derivation / extension / completion claim), and time-relevance (to ensure you have a long runway of data rights to secure and monetize your Phase III).
            </p>
          </div>

          {/* Right Column (Sell-Side) */}
          <div id="sellers" className="p-8 lg:p-12 scroll-mt-32 bg-black hover:bg-slate-900/40 transition-colors duration-500 group">
            <div className="inline-block border border-slate-700 bg-slate-950 px-3 py-1.5 mb-6 group-hover:border-slate-500 transition-colors">
              <span className="font-mono text-[10px] tracking-[0.2em] text-white uppercase">[ TARGET: SELL-SIDE ]</span>
            </div>
            <p className="text-slate-400 leading-relaxed text-[15px]">
              ...track companies that have acquired SBIRs and successfully turned them into multi-million-dollar Phase IIIs (i.e., been there, done that, likely to do it again), and pinpoint Primes facing immediate procurement challenges (e.g., active protests, ongoing bridge contracts, expiring vehicles).
            </p>
          </div>
        </div>
      </div>

      {/* ROW 03: UNIFIED EXECUTION */}
      <div className="p-8 lg:p-12">
        <div className="font-mono text-[10px] tracking-[0.2em] text-slate-500 uppercase mb-4">/// Phase 03 : The Strike</div>
        <h3 className="text-2xl font-light text-white mb-4">Customized Execution</h3>
        <p className="text-slate-400 text-lg leading-relaxed max-w-4xl">
          We operationalize our intelligence through customized, timely outreach directly to executive decision-makers. The result is absolute alignment: the right buyer, the right seller, and the right asset, at the exact right time.
        </p>
      </div>
      
    </div>
  </section>
);



const FaqKey = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8 }}
    className="w-full xl:container mx-auto px-6 md:px-8 py-16 md:py-32 border-t border-brand-steel/10 relative"
  >
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-10 md:mb-16">
        <div className="mx-auto w-12 h-12 md:w-16 md:h-16 border border-brand-gold/30 flex items-center justify-center mb-6 md:mb-8 relative z-10 bg-brand-black rotate-45 group hover:bg-brand-gold/10 transition-colors">
          <FileText className="text-brand-gold -rotate-45 block md:hidden" size={20} strokeWidth={1} />
          <FileText className="text-brand-gold -rotate-45 hidden md:block" size={24} strokeWidth={1} />
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter mb-4 leading-[1] md:leading-[0.9] break-words">FAQ</h2>
        <p className="text-brand-steel uppercase tracking-[0.15em] md:tracking-[0.3em] text-[9px] sm:text-[10px] md:text-xs font-bold break-words whitespace-normal">Statutory Authority</p>
      </div>

      <div className="border-t border-brand-steel/20">
        <FaqItem 
          question="Successor-in-Interest Precedents"
          answer={
            <>
              The Federal Register explicitly confirms that a firm may be considered a full successor-in-interest if it secures the transfer of the assets involved in performing the award. This allows the new owner to receive Phase III awards without a novation if the original performance is complete.
            </>
          }
          citations={
            <div className="mt-4 flex flex-wrap gap-4">
              <a href="https://www.federalregister.gov/documents/2020/08/17/2020-17815/small-business-innovation-research-program-and-small-business-technology-transfer-program-policy" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-slate-400 hover:text-white transition-colors underline decoration-slate-600 hover:decoration-slate-400 underline-offset-4 text-sm font-medium">85 FR 50062</a>
              <a href="https://www.sbir.gov/sites/default/files/SBA%20SBIR_STTR_POLICY_DIRECTIVE_May2023.pdf" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-slate-400 hover:text-white transition-colors underline decoration-slate-600 hover:decoration-slate-400 underline-offset-4 text-sm font-medium">SBIR Policy Directive § 6(a)(5)</a>
            </div>
          }
        />
        
        <FaqItem 
          question="Statutory Authority Exceptions"
          answer={
            <>
              Phase III awards are statutorily authorized to be made on a sole-source basis. The competition requirement is considered satisfied by the original Phase I/II competition. No further J&A (Justification and Approval) is typically needed beyond citing the statute.
            </>
          }
          citations={
            <div className="mt-4 flex flex-wrap gap-4">
              <a href="https://www.law.cornell.edu/uscode/text/15/638" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-slate-400 hover:text-white transition-colors underline decoration-slate-600 hover:decoration-slate-400 underline-offset-4 text-sm font-medium">15 U.S.C. § 638(r)(4)</a>
              <a href="https://www.acquisition.gov/far/6.302-5" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-slate-400 hover:text-white transition-colors underline decoration-slate-600 hover:decoration-slate-400 underline-offset-4 text-sm font-medium">FAR 6.302-5</a>
            </div>
          }
        />

        <FaqItem 
          question="Is there a dollar limit on Phase III awards?"
          answer={
            <>
              Unlike Phase I and II awards, which have caps, Phase III awards have no statutory dollar limit. They are intended for commercialization and full-scale deployment.
            </>
          }
          citations={
            <div className="mt-4 flex flex-wrap gap-4">
              <a href="https://www.sbir.gov/sites/default/files/SBA%20SBIR_STTR_POLICY_DIRECTIVE_May2023.pdf" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-slate-400 hover:text-white transition-colors underline decoration-slate-600 hover:decoration-slate-400 underline-offset-4 text-sm font-medium">SBIR Policy Directive § 4(c)(5)</a>
            </div>
          }
        />
      </div>
    </div>
  </motion.div>
);

const FaqItem = ({ question, answer, citations }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-brand-steel/20 overflow-hidden group">
      <div 
        className="py-5 md:py-8 flex justify-between items-center pr-2 md:pr-4 cursor-pointer" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className={`text-base sm:text-lg md:text-2xl font-black uppercase tracking-wider transition-colors ${isOpen ? 'text-brand-gold' : 'text-white group-hover:text-brand-light_steel'}`}>{question}</h3>
        <ChevronRight className={`text-brand-steel transition-transform duration-300 flex-shrink-0 ml-2 md:ml-4 ${isOpen ? 'rotate-90 text-brand-gold' : ''}`} size={20} />
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
           <motion.div 
             key="content"
             initial="collapsed"
             animate="open"
             exit="collapsed"
             variants={{
               open: { opacity: 1, height: "auto" },
               collapsed: { opacity: 0, height: 0 }
             }}
             transition={{ duration: 0.4, ease: "easeInOut" }}
             className="pb-6 md:pb-8 overflow-hidden"
           >
             <div className="text-brand-steel text-sm sm:text-base md:text-lg leading-relaxed mb-6 font-light max-w-3xl border-l border-brand-gold/50 pl-4 lg:pl-8 faq-answer-block">
               {answer}
             </div>
             <div className="pl-4 lg:pl-8">
               {citations}
             </div>
           </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const WhitepapersKey = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8 }}
    className="w-full xl:container mx-auto px-6 md:px-8 py-16 md:py-32 border-t border-brand-steel/10 relative print:hidden"
  >
    <div className="max-w-5xl mx-auto">
      <div className="mb-12 md:mb-16">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter mb-4 leading-[1] md:leading-[0.9] break-words"><span className="lowercase">transactivate</span> white paper</h2>
      </div>

      <div className="border border-brand-steel/20 bg-brand-black/50 p-6 sm:p-8 md:p-12 hover:border-brand-gold/50 transition-colors duration-500 group flex flex-col lg:flex-row gap-8 lg:gap-12 justify-between items-start lg:items-center relative overflow-hidden">
        {/* Subtle background glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
        
        <div className="flex-1 relative z-10">
          <span className="text-brand-steel uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-xs font-bold mb-4 md:mb-6 block border border-brand-steel/30 px-2 py-1 max-w-max">WHITE PAPER</span>
          <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-white uppercase tracking-wider mb-4 leading-snug">
            The M&A-Driven Capture Playbook:<br/>
            <span className="text-brand-steel text-lg lg:text-xl block mt-2 whitespace-normal">Bypassing Competition via Phase III Authority</span>
          </h3>
          <p className="text-brand-steel font-light text-sm md:text-lg leading-relaxed max-w-2xl">
            A strategic and legal framework for executing Phase III asset acquisitions to establish statutory sole-source authority (15 U.S.C. § 638).
          </p>
        </div>
        
        <a 
          href="mailto:founder@transactivate.ai?subject=Requesting Access: M&A-Driven Capture White Paper"
          className="relative z-10 flex-shrink-0 px-6 md:px-8 py-3 md:py-4 border border-brand-steel/40 text-brand-gold bg-brand-gold/5 uppercase tracking-[0.2em] text-xs font-bold hover:bg-brand-gold hover:text-brand-black transition-all duration-300 flex items-center gap-3 group-hover:border-brand-gold w-full lg:w-auto justify-center"
        >
          Request Access <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  </motion.div>
);

const ContactKey = () => (
   <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8 }}
    className="w-full container mx-auto px-6 md:px-8 py-16 md:py-32 border-t border-brand-steel/10 text-center"
  >
    <Crosshair className="text-brand-gold mx-auto mb-6 md:mb-8" size={32} strokeWidth={1} />
    <h2 className="text-4xl sm:text-5xl md:text-8xl font-black text-white uppercase tracking-tighter mb-4 md:mb-6">
      Initiate Protocol
    </h2>
    <p className="text-brand-steel mb-8 md:mb-12 font-light text-base sm:text-lg md:text-2xl max-w-2xl mx-auto tracking-wide px-4">
      Connect the right buyer, <br className="hidden md:block"/>to the right asset, at the exact right moment.
    </p>

    <a 
      href="mailto:founder@transactivate.ai" 
      className="inline-flex btn-primary items-center justify-center gap-3 md:gap-4 text-xs sm:text-sm md:text-lg px-6 py-4 md:px-12 md:py-6 relative group border border-brand-gold hover:border-white transition-colors"
    >
      <span className="relative z-10 uppercase tracking-[0.15em] md:tracking-[0.2em] font-black">founder@transactivate.ai</span>
      <ArrowUpRight size={16} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
    </a>
  </motion.div>
);

export default App;
