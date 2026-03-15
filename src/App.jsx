import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, ChevronRight, Activity, Cpu, Hexagon, Crosshair, Network, FileText, ArrowUpRight, Menu, X } from 'lucide-react';

function App() {
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
        {/* Hero Image Parallax - Bounded to prevent excessive zoom */}
        <div 
           className="w-full h-full max-w-[120rem] opacity-35 mix-blend-luminosity grayscale transition-transform duration-1000 ease-out z-10"
           style={{ 
             backgroundImage: 'url(/hero-bg.jpg)',
             backgroundPosition: 'center 30%', 
             backgroundSize: 'cover',
             transform: `scale(${1 + scrollY * 0.0002})`
           }}
        ></div>
        
        {/* Deep Gradients for Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/90 via-brand-black/95 to-brand-black z-20"></div>
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

        {/* Forensic Matrix: Abstract Calculating Nodes */}
        <div className="absolute inset-0 z-[25] overflow-hidden pointer-events-none hidden md:block">
           <motion.div 
             className="absolute top-[18%] left-[8%] text-brand-gold/30 font-mono text-[9px] tracking-[0.3em] font-bold"
             animate={{ opacity: [0, 0.8, 0] }}
             transition={{ duration: 8, ease: "easeInOut", repeat: Infinity, delay: 1 }}
           >
              [AUTH.NODE.77]
           </motion.div>
           <motion.div 
             className="absolute top-[65%] right-[10%] text-brand-steel/30 font-mono text-[9px] tracking-[0.3em] font-bold"
             animate={{ opacity: [0, 0.5, 0] }}
             transition={{ duration: 12, ease: "easeInOut", repeat: Infinity, delay: 4 }}
           >
              [SYNC_VALIDATED]
           </motion.div>
           <motion.div 
             className="absolute bottom-[25%] left-[20%] text-brand-gold/20 font-mono text-[9px] tracking-[0.3em] font-bold"
             animate={{ opacity: [0, 0.6, 0] }}
             transition={{ duration: 10, ease: "easeInOut", repeat: Infinity, delay: 2 }}
           >
              [COORD.99.301]
           </motion.div>
        </div>
      </div>

      <nav className="fixed top-0 left-0 right-0 z-50 flex flex-wrap justify-between items-center px-6 md:px-8 py-6 md:py-8 max-w-[90rem] mx-auto w-full bg-brand-black/50 backdrop-blur-md border-b border-brand-steel/10 transition-all duration-300">
        <div 
          className="text-xl md:text-2xl font-bold tracking-[0.2em] text-white cursor-pointer flex items-center gap-3 uppercase z-50"
          onClick={() => handleNavClick('landing')}
        >
          <div className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center border border-brand-gold/50 bg-brand-gold/10 overflow-hidden relative group">
            <div className="absolute inset-0 bg-brand-gold/10 group-hover:bg-brand-gold/20 transition-colors"></div>
            <span className="text-brand-gold font-mono font-black text-[10px] md:text-xs">TA</span>
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
          <button onClick={() => handleNavClick('buyers')} className="nav-link">Buy-Side Engine</button>
          <button onClick={() => handleNavClick('sellers')} className="nav-link">Sell-Side Engine</button>
          <button onClick={() => handleNavClick('faq')} className="nav-link">Intelligence</button>
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
                Buy-Side Engine
              </button>
              <button 
                onClick={() => handleNavClick('sellers')} 
                className="w-full py-4 text-center uppercase tracking-[0.2em] font-bold text-sm border-b border-brand-steel/20 text-white hover:text-brand-gold transition-colors"
              >
                Sell-Side Engine
              </button>
              <button 
                onClick={() => handleNavClick('faq')} 
                className="w-full py-4 text-center uppercase tracking-[0.2em] font-bold text-sm border-b border-brand-steel/20 text-white hover:text-brand-gold transition-colors"
              >
                Intelligence
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
        
        <section id="buyers">
           <BuyersKey />
        </section>

        <section id="sellers">
           <SellersKey />
        </section>

        <section id="faq">
           <FaqKey />
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
      <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 border border-brand-gold/30 bg-brand-gold/5 text-brand-gold text-[8px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] mb-6 md:mb-12 font-bold">
        <Activity size={12} />
        Intelligence Engine Active
      </div>
      
      <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] font-black text-white mb-6 md:mb-10 leading-[0.9] tracking-tighter uppercase px-2 w-full">
        Institutionalize<br className="hidden md:block"/> 
        <span className="text-transparent bg-clip-text bg-gradient-to-br from-brand-gold via-brand-light_steel to-white glow-text">
          Succession
        </span>
      </h1>
      
      <p className="text-brand-steel text-base sm:text-xl md:text-2xl max-w-4xl mx-auto mb-10 md:mb-16 leading-relaxed font-light px-4">
        The forensic market intelligence engine for SBIR M&A. Fusing frontier technology with federal context to secure non-competitive, <strong className="text-white font-medium">unlimited-value sole-source funding.</strong>
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
          className="w-full sm:flex-1 px-8 py-4 border border-brand-steel/40 text-brand-light_steel bg-brand-graphite/50 backdrop-blur-sm font-bold uppercase tracking-[0.2em] text-sm hover:bg-brand-steel/10 transition-colors flex items-center justify-center gap-3 group"
        >
          Sell-Side <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
  </motion.div>
);

const BuyersKey = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8 }}
    className="w-full container mx-auto px-6 md:px-8 py-24 md:py-32 border-t border-brand-steel/10"
  >
    <div className="grid lg:grid-cols-12 gap-16 lg:gap-8">
      <div className="lg:col-span-6 flex flex-col items-start pr-0 lg:pr-12">
        <div className="w-16 h-px bg-brand-gold mb-8"></div>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter mb-4 leading-[0.9]">Buy-Side<br/><span className="text-brand-steel">Engine</span></h2>
        <p className="text-brand-gold tracking-[0.2em] text-xs uppercase font-bold mb-8">Surgical Path To Sole-Source</p>
        <p className="text-xl md:text-2xl text-brand-light_steel font-light leading-relaxed mb-8">
          Algorithmic identification and ranking of the massive SBIR universe. We map capabilities to desired customers and intent.
        </p>
      </div>
      
      <div className="lg:col-span-6 flex flex-col justify-center gap-12 sm:pl-8 lg:pl-16 lg:border-l border-brand-steel/10">
        <div className="group border-l border-brand-steel/30 pl-6 hover:border-brand-gold transition-colors duration-500">
           <span className="text-brand-gold font-mono text-xs font-bold mb-2 block tracking-widest">01 / ALGORITHM</span>
           <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-wider mb-2">Precision Ranking</h3>
           <p className="text-brand-steel font-light text-lg">We process and rank the entire SBIR universe based on capability and agency mission overlap.</p>
        </div>
        <div className="group border-l border-brand-steel/30 pl-6 hover:border-brand-gold transition-colors duration-500">
           <span className="text-brand-gold font-mono text-xs font-bold mb-2 block tracking-widest">02 / MAP</span>
           <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-wider mb-2">Transition Intent</h3>
           <p className="text-brand-steel font-light text-lg">Evaluate structural potential against your target customer and Phase III transition intent.</p>
        </div>
        <div className="group border-l border-brand-steel/30 pl-6 hover:border-brand-gold transition-colors duration-500">
           <span className="text-brand-gold font-mono text-xs font-bold mb-2 block tracking-widest">03 / VERIFY</span>
           <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-wider mb-2">Forensic Review</h3>
           <p className="text-brand-steel font-light text-lg">Rigorous 20-year evaluation of remaining data rights ensuring unassailable sole-source authority.</p>
        </div>
      </div>
    </div>
  </motion.div>
);

const SellersKey = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8 }}
    className="w-full container mx-auto px-6 md:px-8 py-24 md:py-32 border-t border-brand-steel/10"
  >
    <div className="grid lg:grid-cols-12 gap-16 lg:gap-8 flex-col-reverse lg:flex-row">
      
      {/* Mobile Title (shows first on small screens) */}
      <div className="lg:hidden col-span-12 flex flex-col items-start pr-0">
        <div className="w-16 h-px bg-brand-gold mb-8"></div>
        <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4 leading-[0.9]">Sell-Side<br/><span className="text-brand-steel">Engine</span></h2>
        <p className="text-brand-gold tracking-[0.2em] text-xs uppercase font-bold mb-8">Strategic Liquidity</p>
        <p className="text-xl md:text-2xl text-brand-light_steel font-light leading-relaxed">
          We find the Primes facing revenue cliffs. Your dormant Phase III asset is their solution.
        </p>
      </div>

      <div className="lg:col-span-6 flex flex-col justify-center gap-12 sm:pr-8 lg:pr-16 lg:border-r border-brand-steel/10 relative">
        <div className="group">
           <span className="text-brand-gold font-mono text-[10px] md:text-xs font-bold mb-3 block tracking-widest border border-brand-gold/30 px-3 py-1 inline-block">A / DATA SYNTHESIS</span>
           <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-wider mb-4">Federal Data Ingestion</h3>
           <p className="text-brand-steel font-light text-lg leading-relaxed">
             We ingest and merge vast federal datasets, forensically uncovering organizations with a proven track record of acquiring SBIR assets and scaling them into massive Phase III programs. We know exactly who buys and how they scale.
           </p>
        </div>
        <div className="w-1/4 h-px bg-brand-steel/30"></div>
        <div className="group">
           <span className="text-brand-gold font-mono text-[10px] md:text-xs font-bold mb-3 block tracking-widest border border-brand-gold/30 px-3 py-1 inline-block">B / RESCUE</span>
           <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-wider mb-4">Challenge Modeling</h3>
           <p className="text-brand-steel font-light text-lg leading-relaxed">
             We identify Prime contractors facing imminent, material procurement vulnerabilities (expiring contracts, protests). Your Phase III authority is injected as the ultimate strategic rescue mechanism.
           </p>
        </div>
      </div>
      
      {/* Desktop Title (right aligned) */}
      <div className="hidden lg:flex lg:col-span-6 flex-col items-end text-right pl-0 lg:pl-12">
        <div className="w-16 h-px bg-brand-gold mb-8 ml-auto"></div>
        <h2 className="text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter mb-4 leading-[0.9]">Sell-Side<br/><span className="text-brand-steel">Engine</span></h2>
        <p className="text-brand-gold tracking-[0.2em] text-xs uppercase font-bold mb-8">Strategic Liquidity</p>
        <p className="text-2xl text-brand-light_steel font-light leading-relaxed text-right">
          We find the Primes facing revenue cliffs. Your dormant Phase III asset is their solution.
        </p>
      </div>

    </div>
  </motion.div>
);

const FaqKey = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8 }}
    className="w-full container mx-auto px-6 md:px-8 py-24 md:py-32 border-t border-brand-steel/10 relative"
  >
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16 md:mb-24">
        <div className="mx-auto w-16 h-16 border border-brand-gold/30 flex items-center justify-center mb-8 relative z-10 bg-brand-black rotate-45 group hover:bg-brand-gold/10 transition-colors">
          <FileText className="text-brand-gold -rotate-45" size={24} strokeWidth={1} />
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4">Intelligence</h2>
        <p className="text-brand-steel uppercase tracking-[0.3em] text-xs font-bold">Statutory Authority</p>
      </div>

      <div className="border-t border-brand-steel/20">
        <FaqItem 
          question="Is it legal to transfer 'successor-in-interest' rights?"
          answer="The Federal Register explicitly confirms that a firm may be considered a full successor-in-interest if it secures the transfer of the assets involved in performing the award. This allows the new owner to receive Phase III awards without a novation if the original performance is complete."
          citations={['85 FR 50062', 'SBIR Policy Directive § 6(a)(5)']}
        />
        
        <FaqItem 
          question="Does this justify a Sole-Source award?"
          answer="Phase III awards are statutorily authorized to be made on a sole-source basis. The competition requirement is considered satisfied by the original Phase I/II competition. No further J&A (Justification and Approval) is typically needed beyond citing the statute."
          citations={['15 U.S.C. § 638(r)(4)', 'FAR 6.302-5']}
        />

        <FaqItem 
          question="Is there a dollar limit on Phase III awards?"
          answer="Unlike Phase I and II awards, which have caps, Phase III awards have no statutory dollar limit. They are intended for commercialization and full-scale deployment."
          citations={['SBIR Policy Directive § 4(c)(5)']}
        />
      </div>
    </div>
  </motion.div>
);

const FaqItem = ({ question, answer, citations }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-brand-steel/20 overflow-hidden cursor-pointer group" onClick={() => setIsOpen(!isOpen)}>
      <div className="py-6 md:py-8 flex justify-between items-center pr-4">
        <h3 className={`text-lg md:text-2xl font-black uppercase tracking-wider transition-colors ${isOpen ? 'text-brand-gold' : 'text-white group-hover:text-brand-light_steel'}`}>{question}</h3>
        <ChevronRight className={`text-brand-steel transition-transform duration-300 flex-shrink-0 ml-4 ${isOpen ? 'rotate-90 text-brand-gold' : ''}`} size={24} />
      </div>
      <AnimatePresence>
        {isOpen && (
           <motion.div 
             initial={{ height: 0, opacity: 0 }}
             animate={{ height: 'auto', opacity: 1 }}
             exit={{ height: 0, opacity: 0 }}
             className="pb-8"
           >
             <p className="text-brand-steel text-base md:text-lg leading-relaxed mb-6 font-light max-w-3xl border-l border-brand-gold/50 pl-6 lg:pl-8">
               {answer}
             </p>
             <div className="flex gap-3 flex-wrap pl-6 lg:pl-8 mt-4">
                {citations.map((cite, i) => (
                  <span key={i} className="px-3 py-1 border border-brand-steel/30 text-brand-steel/80 text-[9px] uppercase font-bold tracking-[0.2em] bg-white/5">
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
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8 }}
    className="w-full container mx-auto px-6 md:px-8 py-32 md:py-48 border-t border-brand-steel/10 text-center"
  >
    <Crosshair className="text-brand-gold mx-auto mb-8" size={40} strokeWidth={1} />
    <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter mb-6">
      Initiate Protocol
    </h2>
    <p className="text-brand-steel mb-12 font-light text-lg md:text-2xl max-w-2xl mx-auto tracking-wide">
      Connect the right buyer, <br className="hidden md:block"/>to the right asset, at the exact right moment.
    </p>

    <a 
      href="mailto:founder@transactivate.ai" 
      className="inline-flex btn-primary items-center justify-center gap-4 text-base md:text-lg px-8 py-5 md:px-12 md:py-6 relative group border border-brand-gold hover:border-white transition-colors"
    >
      <span className="relative z-10 uppercase tracking-[0.2em] font-black">founder@transactivate.ai</span>
      <ArrowUpRight size={20} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
    </a>
  </motion.div>
);

export default App;
