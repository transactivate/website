import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, ChevronRight, Search, Activity, Briefcase, Mail } from 'lucide-react';

const SECTIONS = {
    LANDING: 'LANDING',
    BUYERS: 'BUYERS',
    SELLERS: 'SELLERS',
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

            <nav className="relative z-50 flex justify-between items-center px-8 py-6 max-w-7xl mx-auto w-full">
                <div
                    className="text-2xl font-bold font-mono text-[#64ffda] cursor-pointer tracking-tighter"
                    onClick={() => setActiveSection(SECTIONS.LANDING)}
                >
                    transactivate_
                </div>
                <div className="hidden md:flex gap-8 font-mono text-sm">
                    <button
                        onClick={() => setActiveSection(SECTIONS.BUYERS)}
                        className={`nav-link ${activeSection === SECTIONS.BUYERS ? 'text-[#64ffda]' : ''}`}
                    >
                        01. For Buyers
                    </button>
                    <button
                        onClick={() => setActiveSection(SECTIONS.SELLERS)}
                        className={`nav-link ${activeSection === SECTIONS.SELLERS ? 'text-[#64ffda]' : ''}`}
                    >
                        02. For Sellers
                    </button>
                    <button
                        onClick={() => setActiveSection(SECTIONS.CONTACT)}
                        className={`nav-link ${activeSection === SECTIONS.CONTACT ? 'text-[#64ffda]' : ''}`}
                    >
                        03. Contact
                    </button>
                </div>
            </nav>

            <main className="flex-grow relative z-10 container mx-auto px-4 md:px-8 flex items-center justify-center">
                <AnimatePresence mode='wait'>
                    {activeSection === SECTIONS.LANDING && <LandingKey key="landing" onNavigate={setActiveSection} />}
                    {activeSection === SECTIONS.BUYERS && <BuyersKey key="buyers" />}
                    {activeSection === SECTIONS.SELLERS && <SellersKey key="sellers" />}
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
        className="w-full max-w-5xl"
    >
        <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-1 bg-[#64ffda]"></div>
            <h2 className="text-3xl font-bold text-slate-200">Buy-Side Engine</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card">
                <Search className="text-[#64ffda] mb-4" size={32} />
                <h3 className="text-xl font-bold text-slate-200 mb-2">Strategic Search</h3>
                <p className="text-slate-400 mb-4">
                    Identify assets that perfectly map to your agency's requirements. We scan the "Ledger" of verified SBIR awards to find technology that can be transitioned immediately via Phase III.
                </p>
                <ul className="text-sm text-slate-500 font-mono space-y-2">
                    <li>+ AUTOMATED TECH MATCHING</li>
                    <li>+ AGENCY MISSION ALIGNMENT</li>
                    <li>+ 20-YEAR DATA RIGHTS CHECK</li>
                </ul>
            </div>

            <div className="glass-card">
                <Shield className="text-[#64ffda] mb-4" size={32} />
                <h3 className="text-xl font-bold text-slate-200 mb-2">Forensic Verification</h3>
                <p className="text-slate-400 mb-4">
                    Every transaction is backed by a rigorous forensic audit of the "Chain of Custody". We ensure the Assignor is the valid holder of title and that all "Successor-in-Interest" clauses are satisfied.
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
        className="w-full max-w-5xl"
    >
        <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-1 bg-[#64ffda]"></div>
            <h2 className="text-3xl font-bold text-slate-200">Sell-Side Engine</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-card md:col-span-2">
                <Activity className="text-[#64ffda] mb-4" size={32} />
                <h3 className="text-xl font-bold text-slate-200 mb-2">Trojan Horse Asset Rescue</h3>
                <p className="text-slate-400 mb-6">
                    Do you hold dormant SBIR assets? We identify large Prime contractors facing "Revenue Cliffs" (e.g., expiring contracts, protests) who need your Sole Source authority to bridge the gap. Turn your IP into immediate liquidity.
                </p>
                <div className="p-4 bg-[#020c1b] rounded border border-slate-700 font-mono text-xs text-slate-400">
          > DETECTING REVENUE CLIFFS...<br />
          > MATCHING: [YOUR_ASSET] -> [PRIME_CONTRACT_RISK]<br />
          > STATUS: MATCH FOUND (95% CONFIDENCE)
                </div>
            </div>

            <div className="glass-card">
                <Briefcase className="text-[#64ffda] mb-4" size={32} />
                <h3 className="text-xl font-bold text-slate-200 mb-2">Liquidity Types</h3>
                <ul className="space-y-4 text-slate-400">
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

const ContactKey = () => (
    <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="w-full max-w-2xl"
    >
        <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-200 mb-4">Execute Transaction</h2>
            <p className="text-slate-400">
                Ready to engage? Initiate a secure channel below.
            </p>
        </div>

        <form className="glass-card space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-xs font-mono text-[#64ffda] uppercase">Entity Name</label>
                    <input type="text" className="w-full bg-[#0a192f] border border-slate-700 rounded p-3 text-slate-200 focus:border-[#64ffda] focus:outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-mono text-[#64ffda] uppercase">Contact Email</label>
                    <input type="email" className="w-full bg-[#0a192f] border border-slate-700 rounded p-3 text-slate-200 focus:border-[#64ffda] focus:outline-none transition-colors" />
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-xs font-mono text-[#64ffda] uppercase">Intent (Buy/Sell)</label>
                <select className="w-full bg-[#0a192f] border border-slate-700 rounded p-3 text-slate-200 focus:border-[#64ffda] focus:outline-none transition-colors">
                    <option>Buy-Side (Acquire Authority)</option>
                    <option>Sell-Side (Liquidity Event)</option>
                    <option>General Inquiry</option>
                </select>
            </div>

            <div className="space-y-2">
                <label className="text-xs font-mono text-[#64ffda] uppercase">Message / UEI Reference</label>
                <textarea rows="4" className="w-full bg-[#0a192f] border border-slate-700 rounded p-3 text-slate-200 focus:border-[#64ffda] focus:outline-none transition-colors"></textarea>
            </div>

            <button className="btn-primary w-full flex justify-center items-center gap-2">
                <Mail size={16} /> Transmit Inquiry
            </button>
        </form>
    </motion.div>
);

export default App;
