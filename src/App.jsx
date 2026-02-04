import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, ChevronRight, Search, Activity, Briefcase, Mail, HelpCircle, FileText, Check, Zap, Layers } from 'lucide-react';

const SECTIONS = {
    LANDING: 'LANDING',
    BUYERS: 'BUYERS',
    SELLERS: 'SELLERS',
    FAQ: 'FAQ',
    CONTACT: 'CONTACT'
};

function App() {
    const [activeSection, setActiveSection] = useState(SECTIONS.LANDING);

    return (
        <div className="min-h-screen flex flex-col relative overflow-hidden">
            {/* Background Particles/Effect */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(17,34,64,0.7),rgba(10,25,47,1))]"></div>
            </div>

            <nav className="relative z-50 flex flex-wrap justify-between items-center px-8 py-6 max-w-7xl mx-auto w-full">
                <div
                    className="text-2xl font-bold font-mono text-[#64ffda] cursor-pointer tracking-tighter flex items-center gap-2"
                    onClick={() => setActiveSection(SECTIONS.LANDING)}
                >
                    <Shield size={24} /> transactivate.ai
                </div>
                <div className="hidden md:flex gap-6 font-mono text-sm items-center">
                    <button
                        onClick={() => setActiveSection(SECTIONS.BUYERS)}
                        className={`nav-link ${activeSection === SECTIONS.BUYERS ? 'text-[#64ffda]' : ''}`}
                    >
                        For Buyers
                    </button>
                    <button
                        onClick={() => setActiveSection(SECTIONS.SELLERS)}
                        className={`nav-link ${activeSection === SECTIONS.SELLERS ? 'text-[#64ffda]' : ''}`}
                    >
                        For Sellers
                    </button>
                    <button
                        onClick={() => setActiveSection(SECTIONS.FAQ)}
                        className={`nav-link ${activeSection === SECTIONS.FAQ ? 'text-[#64ffda]' : ''}`}
                    >
                        FAQ
                    </button>
                    <button
                        onClick={() => setActiveSection(SECTIONS.CONTACT)}
                        className={`nav-link ${activeSection === SECTIONS.CONTACT ? 'text-[#64ffda]' : ''}`}
                    >
                        Contact
                    </button>
                </div>
            </nav>

            <main className="flex-grow relative z-10 container mx-auto px-4 md:px-8 flex items-center justify-center py-10">
                <AnimatePresence mode='wait'>
                    {activeSection === SECTIONS.LANDING && <LandingKey key="landing" onNavigate={setActiveSection} />}
                    {activeSection === SECTIONS.BUYERS && <BuyersKey key="buyers" />}
                    {activeSection === SECTIONS.SELLERS && <SellersKey key="sellers" />}
                    {activeSection === SECTIONS.FAQ && <FaqKey key="faq" />}
                    {activeSection === SECTIONS.CONTACT && <ContactKey key="contact" />}
                </AnimatePresence>
            </main>

            <footer className="relative z-50 py-6 text-center text-slate-500 font-mono text-xs">
                &copy; 2026 TRANSACTIVATE. ALL RIGHTS RESERVED.
            </footer>
        </div>
    );
}

// -- SECTIONS --

const LandingKey = ({ onNavigate }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-4xl"
    >
        <div className="text-[#64ffda] font-mono mb-4 text-sm tracking-widest">ESTABLISHED 2026</div>
        <h1 className="text-5xl md:text-7xl font-bold text-slate-200 mb-6 leading-tight">
            The Marketplace for <br />
            <span className="text-[#64ffda] glow-text">Sole Source Authority.</span>
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-12">
            We facilitate the secure transfer of SBIR Data Rights, unlocking speed to contract for Buyers and liquidity for Sellers through verified Successor-in-Interest transactions.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button onClick={() => onNavigate(SECTIONS.BUYERS)} className="btn-primary flex items-center gap-2 justify-center">
                Enter Buy-Side Engine <ChevronRight size={16} />
            </button>
            <button onClick={() => onNavigate(SECTIONS.SELLERS)} className="px-6 py-3 border border-slate-700 text-slate-300 rounded hover:bg-[#112240] transition-colors font-mono uppercase tracking-wider text-sm font-semibold">
                Explore Sell-Side
            </button>
        </div>
    </motion.div>
);

const BuyersKey = () => (
    <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        className="w-full max-w-6xl"
    >
        <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-1 bg-[#64ffda]"></div>
            <h2 className="text-3xl font-bold text-slate-200">Buy-Side Engine</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card">
                <Zap className="text-[#64ffda] mb-4" size={32} />
                <h3 className="text-xl font-bold text-slate-200 mb-2">Rapid Acquisition</h3>
                <p className="text-slate-400 mb-4">
                    Bypass typical procurement lead times. Phase III awards allow for immediate sole-source contracting without further competition.
                </p>
                <ul className="text-sm text-slate-500 font-mono space-y-2">
                    <li>+ NO J&A REQUIRED</li>
                    <li>+ 30-DAY EXECUTION</li>
                    <li>+ AGENCY-WIDE SCOPE</li>
                </ul>
            </div>

            <div className="glass-card">
                <Search className="text-[#64ffda] mb-4" size={32} />
                <h3 className="text-xl font-bold text-slate-200 mb-2">Strategic Search</h3>
                <p className="text-slate-400 mb-4">
                    Identify assets that perfectly map to your agency's requirements. We scan verified SBIR awards to find technology that can be transitioned immediately via Phase III.
                </p>
                <ul className="text-sm text-slate-500 font-mono space-y-2">
                    <li>+ AUTOMATED TECH MATCHING</li>
                    <li>+ AGENCY MISSION ALIGNMENT</li>
                    <li>+ CAPABILITY MAPPING</li>
                </ul>
            </div>

            <div className="glass-card">
                <Check className="text-[#64ffda] mb-4" size={32} />
                <h3 className="text-xl font-bold text-slate-200 mb-2">Forensic Verification</h3>
                <p className="text-slate-400 mb-4">
                    Every transaction is backed by a rigorous forensic audit of the "Chain of Custody". We ensure the Assignor is the valid holder of title.
                </p>
                <ul className="text-sm text-slate-500 font-mono space-y-2">
                    <li>+ IDENTITY GUARD PROTOCOLS</li>
                    <li>+ LEGAL SUCCESSION AUDIT</li>
                    <li>+ UEI & CAGE VALIDATION</li>
                </ul>
            </div>
        </div>
    </motion.div>
);

const SellersKey = () => (
    <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        className="w-full max-w-6xl"
    >
        <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-1 bg-[#64ffda]"></div>
            <h2 className="text-3xl font-bold text-slate-200">Sell-Side Engine</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-card">
                <Layers className="text-[#64ffda] mb-4" size={32} />
                <h3 className="text-xl font-bold text-slate-200 mb-2">Portfolio Audit</h3>
                <p className="text-slate-400 mb-6">
                    Uncover hidden value in your IP portfolio. We audit your historical SBIR/STTR awards to identify dormant data rights that can be monetized.
                </p>
                <div className="p-3 bg-[#020c1b] rounded border border-slate-700 font-mono text-xs text-slate-400">
           > SCANNING PAST AWARDS...<br />
           > IDENTIFIED: 3 TRANSFERABLE ASSETS
                </div>
            </div>

            <div className="glass-card">
                <Activity className="text-[#64ffda] mb-4" size={32} />
                <h3 className="text-xl font-bold text-slate-200 mb-2">Trojan Horse Match</h3>
                <p className="text-slate-400 mb-6">
                    We identify large Prime contractors facing "Revenue Cliffs" who need your Sole Source authority to bridge the gap. Turn your IP into immediate liquidity.
                </p>
                <div className="p-3 bg-[#020c1b] rounded border border-slate-700 font-mono text-xs text-slate-400">
          > MATCHING: [YOUR_ASSET] -> [PRIME]<br />
          > STATUS: MATCH FOUND (95%)
                </div>
            </div>

            <div className="glass-card">
                <Briefcase className="text-[#64ffda] mb-4" size={32} />
                <h3 className="text-xl font-bold text-slate-200 mb-2">Liquidity Events</h3>
                <p className="text-slate-400 mb-4">
                    Flexible structure options for your exit.
                </p>
                <ul className="space-y-4 text-slate-400 text-sm">
                    <li className="flex gap-2">
                        <span className="text-[#64ffda]">01.</span>
                        <span>Asset Sale (Simple Assignment)</span>
                    </li>
                    <li className="flex gap-2">
                        <span className="text-[#64ffda]">02.</span>
                        <span>Royalty Stream</span>
                    </li>
                    <li className="flex gap-2">
                        <span className="text-[#64ffda]">03.</span>
                        <span>Strategic Alliance</span>
                    </li>
                </ul>
            </div>
        </div>
    </motion.div>
);

const FaqKey = () => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        className="w-full max-w-3xl"
    >
        <div className="text-center mb-10">
            <div className="flex justify-center mb-4">
                <FileText className="text-[#64ffda]" size={40} />
            </div>
            <h2 className="text-3xl font-bold text-slate-200 mb-2">FAQ</h2>
            <p className="text-slate-400 text-sm">Direct citations from Federal Law & Acquisition Regulations</p>
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

            <FaqItem
                question="Which rights are actually transferred?"
                answer="You are acquiring the 'SBIR Data Rights' and the status of 'successor-in-interest'. This includes the right to receive non-competitive government contracts derived from the original innovation's lineage."
                citations={['FAR 52.227-20', 'DFARS 252.227-7018']}
            />
        </div>
    </motion.div>
);

const FaqItem = ({ question, answer, citations }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="glass-card hover:translate-y-0 p-0 overflow-hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            <div className="p-6 flex justify-between items-center">
                <h3 className="font-semibold text-slate-200">{question}</h3>
                <ChevronRight className={`text-[#64ffda] transition-transform ${isOpen ? 'rotate-90' : ''}`} />
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="px-6 pb-6"
                    >
                        <p className="text-slate-300 text-sm leading-relaxed mb-4">
                            {answer}
                        </p>
                        <div className="flex gap-2 flex-wrap">
                            {citations.map((cite, i) => (
                                <span key={i} className="px-2 py-1 rounded bg-[#64ffda]/10 border border-[#64ffda]/30 text-[#64ffda] text-[10px] font-mono tracking-wider">
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
        className="w-full max-w-2xl text-center"
    >
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#64ffda] to-slate-200 mb-6">
            Get in Touch
        </h2>
        <p className="text-slate-400 mb-12">
            Interested in buying or selling SBIRs? Reach out to us directly.
        </p>

        <div className="glass-card p-12 max-w-md mx-auto flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#112240] flex items-center justify-center border border-[#64ffda]/20 mb-6">
                <Mail className="text-[#64ffda]" size={32} />
            </div>

            <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
            <p className="text-slate-500 text-sm mb-8">Direct line to the founder</p>

            <a
                href="mailto:founder@transactivate.ai"
                className="w-full py-4 bg-[#64ffda] text-[#0a192f] font-bold rounded hover:bg-[#64ffda]/90 transition-colors flex items-center justify-center gap-2"
            >
                founder@transactivate.ai <ChevronRight size={16} />
            </a>
        </div>
    </motion.div>
);

export default App;
