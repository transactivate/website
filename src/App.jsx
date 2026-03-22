import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, ChevronRight, Activity, Hexagon, Crosshair, Network, FileText, ArrowUpRight, ArrowRight, Menu, X, Building2, Clock, History, AlertTriangle, Zap, Database } from 'lucide-react';
import IntelligenceBriefPDF from './IntelligenceBriefPDF';

function App() {
  const [currentPath] = useState(window.location.pathname);

  if (currentPath === '/playbook-pdf') {
    return <IntelligenceBriefPDF />;
  }

  const [scrollY, setScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState('landing');

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

  // Handle Intersection Observer for Active Nav State
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            window.history.replaceState(null, '', `#${entry.target.id}`);
          }
        });
      },
      { rootMargin: '-20% 0px -80% 0px' }
    );

    const sections = ['landing', 'solution', 'faq', 'whitepapers', 'contact'];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${id}`);
      setActiveSection(id);
    } else if (id === 'landing') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.pushState(null, '', '#landing');
      setActiveSection('landing');
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
          <button onClick={() => handleNavClick('solution')} className={`nav-link ${activeSection === 'solution' ? '!text-brand-gold' : ''}`}>Solution</button>
          <button onClick={() => handleNavClick('faq')} className={`nav-link ${activeSection === 'faq' ? '!text-brand-gold' : ''}`}>FAQ</button>
          <button onClick={() => handleNavClick('whitepapers')} className={`nav-link ${activeSection === 'whitepapers' ? '!text-brand-gold' : ''}`}>White Paper</button>
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
                onClick={() => handleNavClick('solution')} 
                className={`w-full py-4 text-center uppercase tracking-[0.2em] font-bold text-sm border-b border-brand-steel/20 transition-colors ${activeSection === 'solution' ? 'text-brand-gold' : 'text-white hover:text-brand-gold'}`}
              >
                Solution
              </button>
              <button 
                onClick={() => handleNavClick('faq')} 
                className={`w-full py-4 text-center uppercase tracking-[0.2em] font-bold text-sm border-b border-brand-steel/20 transition-colors ${activeSection === 'faq' ? 'text-brand-gold' : 'text-white hover:text-brand-gold'}`}
              >
                FAQ
              </button>
              <button 
                onClick={() => handleNavClick('whitepapers')} 
                className={`w-full py-4 text-center uppercase tracking-[0.2em] font-bold text-sm border-b border-brand-steel/20 transition-colors ${activeSection === 'whitepapers' ? 'text-brand-gold' : 'text-white hover:text-brand-gold'}`}
              >
                White Paper
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

        <section id="faq" className="scroll-mt-32">
           <FaqKey />
        </section>

        <section id="whitepapers" className="scroll-mt-32">
           <WhitepapersKey />
        </section>

        <section id="contact" className="scroll-mt-32">
           <ContactKey />
        </section>
      </main>

      <footer className="relative z-50 py-12 md:py-24 border-t border-brand-steel/10 text-center flex flex-col items-center gap-6 md:gap-8">
        <p className="text-brand-steel/40 uppercase tracking-[0.4em] text-[8px] md:text-[10px] font-bold">
          &copy; 2026 TRANSACTIVATE. <br className="md:hidden" /> High-Fidelity, Timely SBIR Intelligence
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
      <div className="flex justify-center mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10">
          <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-pulse shadow-[0_0_8px_rgba(212,175,55,0.6)]"></div>
          <span className="text-[#d4af37] text-[10px] sm:text-xs font-mono uppercase tracking-widest font-bold">High-Fidelity, Timely SBIR Intelligence</span>
        </div>
      </div>
      
      <h1 className="sr-only">Transactivate</h1>
      
      {/* V2 Header Sizing Adjustment - Bulletproof mobile wrapping */}
      <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-black text-white mb-6 md:mb-10 leading-[1.1] md:leading-[1] tracking-tight uppercase px-2 w-full max-w-7xl md:whitespace-nowrap break-words sm:break-normal">
        Sole-Source <span className="text-transparent bg-clip-text bg-gradient-to-br from-brand-gold via-brand-light_steel to-white glow-text">SBIR M&A.</span>
      </h2>
      
      <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto mb-10 md:mb-16 leading-relaxed font-normal px-4">
        Powered by Generative AI, <span className="font-bold lowercase">transactivate</span> helps sellers commercialize and monetize their SBIRs and buyers acquire the Phase III rights required to bypass competition and secure unlimited, sole-source Phase III funding.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center w-full max-w-xl mx-auto px-4">
        <a href="#solution" className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold tracking-[0.2em] text-black uppercase transition-all duration-300 bg-[#d4af37] border border-[#d4af37] rounded-none hover:bg-transparent hover:text-[#d4af37] shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]">
          Explore the Solution
        </a>
      </div>
  </motion.div>
);

const MethodologyKey = () => (
  <section id="solution" className="scroll-mt-24 py-32 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
    <h2 className="text-3xl md:text-4xl font-light text-white tracking-[0.2em] uppercase mb-12 text-center">transactivate's Solution</h2>

    {/* PHASE 01: UNIFIED CONTEXT */}
    <div className="w-full max-w-4xl bg-black/50 border border-slate-800 rounded-none p-8 lg:p-10 mb-0 relative overflow-hidden group transition-all duration-300 hover:border-[#d4af37]/50 hover:bg-[#d4af37]/5">
      <div className="font-mono text-[11px] tracking-[0.2em] text-slate-500 group-hover:text-[#d4af37] transition-colors duration-300 uppercase mb-4 flex items-center gap-3">
        <Database className="w-4 h-4" /> 01 // Foundation
      </div>
      <h3 className="text-xl font-medium text-white mb-4">Federal Context & Transaction Experience</h3>
      <p className="text-slate-400 text-lg leading-relaxed">
        We leverage deep federal domain expertise and specialized SBIR transaction experience to navigate the deluge of open-source data and determine what data matter and why.
      </p>
    </div>

    {/* THE DATA SPINE */}
    <div className="w-[2px] h-16 bg-gradient-to-b from-[#d4af37]/80 via-slate-500 to-transparent my-4"></div>

    {/* PHASE 02: AI-DRIVEN SYNTHESIS */}
    <div className="w-full max-w-5xl text-center mb-12 mt-8">
      <h3 className="text-2xl font-light text-white mb-4">02 // AI-Driven Data Synthesis</h3>
      <p className="text-slate-400 text-lg max-w-3xl mx-auto">
        We then use Generative AI to synthesize myriad structured and unstructured federal data sources to architect an optimized origination strategy based on the following vectors:
      </p>
    </div>

    {/* THE BIFURCATION GRID */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 w-full max-w-6xl relative mb-8">
      <div className="hidden lg:block absolute inset-y-0 left-1/2 w-px bg-slate-800/50"></div>

      {/* LEFT COLUMN (BUY-SIDE) */}
      <div id="buyers" className="scroll-mt-32 flex flex-col h-full gap-5 lg:pr-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1.5 h-1.5 bg-[#d4af37] animate-pulse shadow-[0_0_8px_rgba(212,175,55,0.6)]"></div>
          <h4 className="font-mono text-xs md:text-sm tracking-[0.2em] text-[#d4af37] uppercase font-bold drop-shadow-[0_0_8px_rgba(212,175,55,0.8)]">[ TARGET PATH: BUY-SIDE ]</h4>
        </div>

        <motion.div 
          whileHover={{ scale: 1.02, backgroundColor: "rgba(15, 23, 42, 0.8)", borderColor: "#d4af37" }} 
          className="flex-1 p-6 rounded-none border border-slate-800 bg-black/40 transition-all duration-300 group cursor-default flex flex-col sm:flex-row"
        >
          <Building2 className="w-6 h-6 text-slate-500 mb-3 sm:mb-0 sm:mr-5 mt-1 shrink-0 group-hover:text-[#d4af37] transition-colors" />
          <div className="flex flex-col justify-center">
            <h5 className="text-white font-medium mb-1 tracking-wide">Desired Agency</h5>
            <p className="text-sm text-slate-400 leading-relaxed">Filtering the SBIR universe by your chosen customer.</p>
          </div>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.02, backgroundColor: "rgba(15, 23, 42, 0.8)", borderColor: "#d4af37" }} 
          className="flex-1 p-6 rounded-none border border-slate-800 bg-black/40 transition-all duration-300 group cursor-default flex flex-col sm:flex-row"
        >
          <Crosshair className="w-6 h-6 text-slate-500 mb-3 sm:mb-0 sm:mr-5 mt-1 shrink-0 group-hover:text-[#d4af37] transition-colors" />
          <div className="flex flex-col justify-center">
            <h5 className="text-white font-medium mb-1 tracking-wide">Common Mission</h5>
            <p className="text-sm text-slate-400 leading-relaxed">Ranking fit to validate your derivation or extension claim.</p>
          </div>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.02, backgroundColor: "rgba(15, 23, 42, 0.8)", borderColor: "#d4af37" }} 
          className="flex-1 p-6 rounded-none border border-slate-800 bg-black/40 transition-all duration-300 group cursor-default flex flex-col sm:flex-row"
        >
          <Clock className="w-6 h-6 text-slate-500 mb-3 sm:mb-0 sm:mr-5 mt-1 shrink-0 group-hover:text-[#d4af37] transition-colors" />
          <div className="flex flex-col justify-center">
            <h5 className="text-white font-medium mb-1 tracking-wide">Long Runway</h5>
            <p className="text-sm text-slate-400 leading-relaxed">Ensuring you have a long, protected Phase III runway.</p>
          </div>
        </motion.div>
      </div>

      {/* RIGHT COLUMN (SELL-SIDE) */}
      <div id="sellers" className="scroll-mt-32 flex flex-col h-full gap-5 lg:pl-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1.5 h-1.5 bg-[#d4af37] animate-pulse shadow-[0_0_8px_rgba(212,175,55,0.6)]"></div>
          <h4 className="font-mono text-xs md:text-sm tracking-[0.2em] text-[#d4af37] uppercase font-bold drop-shadow-[0_0_8px_rgba(212,175,55,0.8)]">[ TARGET PATH: SELL-SIDE ]</h4>
        </div>

        <motion.div 
          whileHover={{ scale: 1.02, backgroundColor: "rgba(15, 23, 42, 0.8)", borderColor: "#d4af37" }} 
          className="flex-1 p-6 rounded-none border border-slate-800 bg-black/40 transition-all duration-300 group cursor-default flex flex-col sm:flex-row"
        >
          <History className="w-6 h-6 text-slate-500 mb-3 sm:mb-0 sm:mr-5 mt-1 shrink-0 group-hover:text-[#d4af37] transition-colors" />
          <div className="flex flex-col justify-center">
            <h5 className="text-white font-medium mb-1 tracking-wide">Previous Successful Buyers</h5>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mt-3 mb-4 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10">
              <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-pulse shrink-0 shadow-[0_0_8px_rgba(212,175,55,0.6)]"></div>
              <span className="text-[#d4af37] text-[9px] sm:text-[10px] font-mono uppercase tracking-widest leading-snug text-left">been there, done that... likely to do it again</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">Discovering companies that have acquired SBIRs and successfully turned them into multi-million-dollar Phase IIIs.</p>
          </div>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.02, backgroundColor: "rgba(15, 23, 42, 0.8)", borderColor: "#d4af37" }} 
          className="flex-1 p-6 rounded-none border border-slate-800 bg-black/40 transition-all duration-300 group cursor-default flex flex-col sm:flex-row"
        >
          <AlertTriangle className="w-6 h-6 text-slate-500 mb-3 sm:mb-0 sm:mr-5 mt-1 shrink-0 group-hover:text-[#d4af37] transition-colors" />
          <div className="flex flex-col justify-center">
            <h5 className="text-white font-medium mb-1 tracking-wide">Pressing Procurement Situations</h5>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mt-3 mb-4 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10">
              <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-pulse shrink-0 shadow-[0_0_8px_rgba(212,175,55,0.6)]"></div>
              <span className="text-[#d4af37] text-[9px] sm:text-[10px] font-mono uppercase tracking-widest leading-snug text-left">Facing a contracting problem a SBIR could solve</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">Pinpointing prime contractors facing relevant procurement challenges: contract protests, bridges, extensions, etc.</p>
          </div>
        </motion.div>
      </div>
    </div>

    {/* THE DATA SPINE */}
    <div className="w-[2px] h-16 bg-gradient-to-t from-[#d4af37]/80 via-slate-500 to-transparent my-4"></div>

    {/* PHASE 03: UNIFIED EXECUTION */}
    <div className="w-full max-w-4xl bg-black/50 border border-slate-800 rounded-none p-8 lg:p-10 mb-0 relative overflow-hidden group transition-all duration-300 hover:border-[#d4af37]/50 hover:bg-[#d4af37]/5 mt-8">
      <div className="font-mono text-[11px] tracking-[0.2em] text-slate-500 group-hover:text-[#d4af37] transition-colors duration-300 uppercase mb-4 flex items-center gap-3">
        <Zap className="w-4 h-4" /> 03 // The Strike
      </div>
      <h3 className="text-xl font-medium text-white mb-4">Customized Execution</h3>
      <p className="text-slate-400 text-lg leading-relaxed">
        We operationalize our intelligence via customized, timely outreach to key decision-makers. The right buyer, the right seller, and the right asset, at the exact right time.
      </p>
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
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter mb-4 leading-[1] md:leading-[0.9] break-words">[ Statutory Authority ]</h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-center mt-4 mb-12">
          The federal statutes, FAR directives, and policy precedents that explicitly authorize Prime Contractors to bypass traditional competition and secure non-competitive, unlimited-value awards.
        </p>
      </div>

      <div className="border-t border-brand-steel/20">
        <FaqItem 
          question="Can Phase III rights be acquired without a novation?"
          answer={
            <>
              The Federal Register explicitly confirms that a firm may be considered a full successor-in-interest if it secures the transfer of the assets involved in performing the Phase I/II award. This allows the new owner to receive Phase III awards without a novation if the original performance is complete.
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
          question="Does a sole-source Phase III require a J&A?"
          answer={
            <>
              Phase III awards are statutorily authorized to be made on a sole-source basis. The competition requirement is considered satisfied by the original Phase I/II competition. Therefore, no further J&A (Justification and Approval) is typically needed beyond citing the statute.
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
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter mb-4 leading-[1] md:leading-[0.9] break-words">White Paper</h2>
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
      Initiate Contact
    </h2>
    <p className="text-brand-steel mb-8 md:mb-12 font-light text-base sm:text-lg md:text-2xl max-w-2xl mx-auto tracking-wide px-4">
      Connecting the right buyer, the right seller, and the right asset, at the exact right time.
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
