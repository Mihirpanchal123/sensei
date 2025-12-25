import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Trophy,
  Gamepad2,
  Settings,
  BookOpen,
  ShoppingBag,
  ChevronRight,
  Copy,
  Check,
  Zap,
  Sword,
  Shield,
  Target,
  ExternalLink,
  Menu,
  X,
  Brain,
  Sparkles,
  Flame,
  Ghost,
} from "lucide-react";

// --- Sub-components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Trophies", href: "#trophies" },
    { name: "Aura", href: "#aura" },
    { name: "Setup", href: "#setup" },
    { name: "Playbook", href: "#playbook" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/95 backdrop-blur-md border-b border-red-900/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a
              href="#home"
              className="font-sensei text-3xl text-red-600 tracking-widest hover:text-red-500 transition-colors"
            >
              SENSEI
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="font-gaming text-sm text-gray-300 hover:text-red-500 transition-colors uppercase tracking-widest"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white p-2 focus:outline-none bg-zinc-900/50 rounded-md"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-zinc-950 border-b border-red-900/50 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 text-center">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-gaming text-gray-300 hover:text-red-500 uppercase tracking-[0.2em] border-b border-white/5 last:border-0"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const ScrimsTicker = () => {
  return (
    <div className="bg-red-600/10 border-y border-red-600/30 py-2 relative overflow-hidden">
      <div className="flex items-center space-x-4 whitespace-nowrap animate-marquee">
        {[1, 2, 3].map((_, i) => (
          <div key={i} className="flex items-center space-x-8 px-4">
            <span className="flex items-center font-gaming text-xs text-red-500 uppercase tracking-wider">
              <Zap size={14} className="mr-2 fill-current" /> NEXT MATCH: BGIS
              ROUND 3 - TODAY 6 PM IST
            </span>
            <span className="flex items-center font-gaming text-xs text-gray-400 uppercase tracking-wider">
              <Check size={14} className="mr-2" /> LAST SCRIM: 1st PLACE (14
              FINISHES)
            </span>
            <span className="flex items-center font-gaming text-xs text-red-500 uppercase tracking-wider">
              <Zap size={14} className="mr-2 fill-current" /> TOURNAMENT LIVE:
              SKYESPORTS MASTERS
            </span>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-grid"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-6 inline-block"
        >
          <span className="px-4 py-1 border border-red-600 text-red-500 font-gaming text-[10px] tracking-[0.3em] uppercase rounded-full bg-red-600/5">
            Verified Pro Athlete
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-6xl md:text-9xl font-gaming font-black mb-4 tracking-tighter"
        >
          MASTERING THE
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">
            BATTLEGROUNDS
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl font-light leading-relaxed mb-10"
        >
          Official Portfolio of{" "}
          <span className="text-white font-semibold">SENSEI – Deepak Negi</span>
          .<br />
          India's Premier IGL & Esports Athlete defining the meta one rotation
          at a time.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="#aura"
            className="group relative px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-gaming text-sm tracking-widest transition-all duration-300 overflow-hidden block"
          >
            <span className="relative z-10 flex items-center uppercase">
              Check Tactical Aura <Brain size={18} className="ml-2" />
            </span>
            <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 bg-black/20 transition-transform duration-300"></div>
          </a>
          <a
            href="#setup"
            className="group px-8 py-4 border border-white/10 hover:border-red-600/50 text-gray-300 hover:text-white font-gaming text-sm tracking-widest transition-all duration-300 block uppercase"
          >
            Copy Sensitivity Code
          </a>
        </motion.div>

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-20 left-1/2 -translate-x-1/2 opacity-20 hidden lg:block"
        >
          <span className="text-[200px] font-sensei text-white select-none pointer-events-none">
            SENSEI
          </span>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative z-10 neon-border overflow-hidden rounded-lg">
              <img
                src="https://picsum.photos/seed/esports-pro/800/1000"
                alt="Sensei Gaming"
                className="w-full grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black to-transparent">
                <p className="font-sensei text-4xl text-red-600">
                  The Professor
                </p>
              </div>
            </div>
            <div className="absolute -top-10 -left-10 w-40 h-40 border-t-2 border-l-2 border-red-600/30"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 border-b-2 border-r-2 border-red-600/30"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <h2 className="font-gaming text-4xl mb-8 flex items-center text-white">
              <span className="text-red-600 mr-4 tracking-tighter uppercase">
                01.
              </span>{" "}
              THE INTEL
            </h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                <span className="text-white font-bold">
                  Deepak 'SENSEI' Negi
                </span>{" "}
                is a professional Battlegrounds Mobile India (BGMI) esports
                athlete and one of the most respected In-Game Leaders (IGL) in
                the country.
              </p>
              <p>
                Born on August 23, 1999, he rose to fame leading Team XO to
                dominance in 2021-2022 before moving to Revenant Esports and now{" "}
                <span className="text-red-500">Wyld Fangs</span>.
              </p>
              <p>
                Known for his calm composure and strategic zone rotations,
                Sensei has earned over $40,000 in prize earnings and continues
                to compete at the highest tier (A-Tier) of Indian esports.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-12">
              <div className="p-6 bg-white/5 border border-white/10">
                <div className="text-red-500 mb-2">
                  <Sword size={24} />
                </div>
                <div className="text-2xl font-gaming font-bold text-white">
                  $40K+
                </div>
                <div className="text-xs text-gray-500 uppercase tracking-widest">
                  Earnings
                </div>
              </div>
              <div className="p-6 bg-white/5 border border-white/10">
                <div className="text-red-500 mb-2">
                  <Shield size={24} />
                </div>
                <div className="text-2xl font-gaming font-bold text-white">
                  IGL
                </div>
                <div className="text-xs text-gray-500 uppercase tracking-widest">
                  Primary Role
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const TrophyCase = () => {
  const achievements = [
    {
      year: "2024",
      tournament: "The Multiverse Series",
      rank: "Winner (1st)",
      team: "Revenant Esports",
    },
    {
      year: "2024",
      tournament: "ESL Snapdragon Pro Series",
      rank: "6th Place",
      team: "Revenant Esports",
    },
    {
      year: "2023",
      tournament: "Skyesports Championship 5.0",
      rank: "Runner-up (2nd)",
      team: "Revenant Esports",
    },
    {
      year: "2023",
      tournament: "Nodwin BGMI Champions Cup",
      rank: "Runner-up (2nd)",
      team: "Revenant Esports",
    },
    {
      year: "2023",
      tournament: "Battle Adda - New State",
      rank: "Winner (1st)",
      team: "Team XO",
    },
    {
      year: "2022",
      tournament: "Skyesports Grand Slam 2022",
      rank: "Winner (1st)",
      team: "Team XO",
    },
    {
      year: "2021",
      tournament: "TEC - BGMI Invitational S2",
      rank: "Winner (1st)",
      team: "Team XO",
    },
  ];

  return (
    <section id="trophies" className="py-24 bg-zinc-950 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-gaming text-5xl mb-4 text-white uppercase">
            TROPHY CASE
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-6 px-4 font-gaming text-xs text-gray-500 tracking-widest uppercase">
                  Year
                </th>
                <th className="py-6 px-4 font-gaming text-xs text-gray-500 tracking-widest uppercase">
                  Tournament Name
                </th>
                <th className="py-6 px-4 font-gaming text-xs text-gray-500 tracking-widest uppercase">
                  Rank
                </th>
                <th className="py-6 px-4 font-gaming text-xs text-gray-500 tracking-widest uppercase">
                  Team
                </th>
              </tr>
            </thead>
            <tbody>
              {achievements.map((item, idx) => (
                <motion.tr
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="border-b border-white/5 hover:bg-white/5 transition-colors group"
                >
                  <td className="py-6 px-4 font-gaming text-sm text-gray-400">
                    {item.year}
                  </td>
                  <td className="py-6 px-4 text-white font-semibold flex items-center">
                    <Trophy
                      size={16}
                      className={`mr-3 ${
                        item.rank.includes("Winner")
                          ? "text-yellow-500"
                          : "text-gray-400"
                      }`}
                    />
                    {item.tournament}
                  </td>
                  <td className="py-6 px-4">
                    <span
                      className={`text-sm px-3 py-1 rounded-full whitespace-nowrap ${
                        item.rank.includes("Winner")
                          ? "bg-yellow-500/10 text-yellow-500 border border-yellow-500/20"
                          : "bg-red-600/10 text-red-500 border border-red-600/20"
                      }`}
                    >
                      {item.rank}
                    </span>
                  </td>
                  <td className="py-6 px-4 font-gaming text-sm text-gray-400 uppercase tracking-tighter">
                    {item.team}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

const AuraSection = () => {
  const [auraLevel, setAuraLevel] = useState(69);
  const [isHyper, setIsHyper] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAuraLevel((prev) => {
        const next = prev + (Math.random() * 4 - 2);
        return Math.min(Math.max(next, 0), 100);
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const forbiddenWisdom = [
    "I don't just use a 4-finger claw, I use the claws of destiny.",
    "If the zone doesn't come to you, you are already the zone.",
    "Rotating is just running, but with style and high IQ.",
    "A true Sensei doesn't need to aim, the bullets find their own fate.",
    "My iPhone 15 Pro Max is not a phone, it's a tactical neuro-link.",
  ];

  return (
    <section
      id="aura"
      className={`py-24 transition-colors duration-1000 overflow-hidden relative ${
        isHyper ? "bg-red-950" : "bg-black"
      }`}
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Brain
              className={`${
                isHyper ? "animate-ping text-white" : "text-red-600"
              } transition-all`}
              size={32}
            />
            <span className="font-gaming text-red-500 text-xs tracking-[0.4em] uppercase">
              Tactical Neuro-Link
            </span>
          </div>
          <h2 className="font-gaming text-5xl mb-4 text-white uppercase tracking-tighter">
            THE MASTERMIND'S AURA
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-10 bg-zinc-900/50 border border-white/10 rounded-3xl relative overflow-hidden backdrop-blur-xl"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10">
              <Ghost size={120} className={isHyper ? "animate-bounce" : ""} />
            </div>

            <h3 className="font-gaming text-xl mb-8 text-white flex items-center gap-3">
              LIVE BRAIN POWER{" "}
              <span className="text-red-600 text-[10px] animate-pulse">
                ● CALIBRATING
              </span>
            </h3>

            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-gaming text-gray-500 uppercase">
                    Strategic Presence (Aura)
                  </span>
                  <span
                    className={`font-gaming text-lg ${
                      auraLevel > 80 ? "text-red-500" : "text-white"
                    }`}
                  >
                    {auraLevel.toFixed(1)}%
                  </span>
                </div>
                <div className="h-4 bg-white/5 rounded-full overflow-hidden border border-white/5">
                  <motion.div
                    animate={{ width: `${auraLevel}%` }}
                    className="h-full bg-gradient-to-r from-red-800 to-red-500 relative"
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                  </motion.div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: "Rage", icon: <Flame size={16} />, val: "100%" },
                  { label: "Calm", icon: <Sparkles size={16} />, val: "ZEN" },
                  { label: "Clutch", icon: <Target size={16} />, val: "GOD" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="p-4 bg-black/40 border border-white/5 rounded-xl text-center"
                  >
                    <div className="flex justify-center text-red-600 mb-2">
                      {stat.icon}
                    </div>
                    <div className="text-[10px] text-gray-500 font-gaming uppercase mb-1">
                      {stat.label}
                    </div>
                    <div className="text-sm font-bold text-white uppercase">
                      {stat.val}
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setIsHyper(!isHyper)}
                className="w-full py-4 border border-red-600/30 text-red-500 font-gaming text-xs tracking-widest hover:bg-red-600 hover:text-white transition-all rounded-lg uppercase"
              >
                {isHyper
                  ? "TERMINATE HYPER-IGL MODE"
                  : "ACTIVATE HYPER-IGL MODE (DANGER)"}
              </button>
            </div>
          </motion.div>

          <div className="space-y-6">
            <h4 className="font-gaming text-sm text-gray-500 tracking-widest uppercase mb-4">
              FORBIDDEN WISDOM
            </h4>
            {forbiddenWisdom.map((wisdom, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group flex items-start gap-4 p-5 hover:bg-red-600/5 transition-all rounded-2xl border border-transparent hover:border-red-600/20"
              >
                <div className="mt-1 p-2 bg-red-600/10 rounded-lg text-red-600 group-hover:scale-110 transition-transform">
                  <Ghost size={18} />
                </div>
                <p className="text-gray-400 italic font-light leading-relaxed group-hover:text-white transition-colors">
                  "{wisdom}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Cringe Background Visuals */}
      <AnimatePresence>
        {isHyper && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 pointer-events-none overflow-hidden"
          >
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ y: -100, x: Math.random() * window.innerWidth }}
                animate={{ y: window.innerHeight + 100 }}
                transition={{
                  duration: Math.random() * 2 + 1,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute text-red-600 font-gaming text-[10px] whitespace-nowrap opacity-50"
              >
                IQ CALCULATING... IQ CALCULATING... IQ CALCULATING...
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const Setup = () => {
  const [copied, setCopied] = useState(false);
  const [sensCode, setSensCode] = useState("7120-1122-3344-5566-7890");

  const copyToClipboard = () => {
    navigator.clipboard.writeText(sensCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="setup" className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-600/20 rounded-full blur-[200px] -translate-y-1/2 translate-x-1/2"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-1/3">
            <h2 className="font-gaming text-4xl mb-6 text-white uppercase">
              THE SETUP
            </h2>
            <p className="text-gray-400 mb-10 leading-relaxed">
              Precision requires the right tools. Here are the exact settings
              and hardware SENSEI uses to dominate the lobby.
            </p>

            <div className="space-y-4">
              <div className="p-6 bg-zinc-900/50 border border-white/10 rounded-lg">
                <div className="text-gray-500 text-xs font-gaming uppercase mb-2">
                  Sensitivity Code
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-xl text-white tracking-wider truncate">
                    {sensCode}
                  </span>
                  <button
                    onClick={copyToClipboard}
                    className="p-3 bg-red-600 text-white hover:bg-red-700 transition-colors rounded shrink-0"
                    title="Copy Code"
                  >
                    {copied ? <Check size={20} /> : <Copy size={20} />}
                  </button>
                </div>
                {copied && (
                  <p className="text-xs text-green-500 mt-2">
                    Copied to clipboard!
                  </p>
                )}
              </div>

              <div className="p-6 bg-zinc-900/50 border border-white/10 rounded-lg">
                <div className="text-gray-500 text-xs font-gaming uppercase mb-2">
                  Display Settings
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white font-semibold">Graphics</span>
                  <span className="text-red-500 font-gaming text-xs uppercase">
                    Smooth + Extreme
                  </span>
                </div>
                <div className="flex justify-between items-center mt-3">
                  <span className="text-white font-semibold">Frame Rate</span>
                  <span className="text-red-500 font-gaming text-xs uppercase">
                    90 FPS
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group relative bg-zinc-900 border border-white/5 hover:border-red-600/30 p-8 rounded-xl transition-all duration-500">
              <div className="mb-6 bg-red-600/10 w-16 h-16 flex items-center justify-center rounded-lg group-hover:scale-110 transition-transform">
                <Gamepad2 className="text-red-600" size={32} />
              </div>
              <h3 className="text-xl font-gaming font-bold mb-4 text-white uppercase">
                CONTROLS
              </h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span>Layout</span>
                  <span className="text-white">4-Finger Claw</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span>Gyroscope</span>
                  <span className="text-white">Always On (Full)</span>
                </li>
                <li className="flex justify-between pb-2">
                  <span>ADS</span>
                  <span className="text-white">Enabled</span>
                </li>
              </ul>
            </div>

            <div className="group relative bg-zinc-900 border border-white/5 hover:border-red-600/30 p-8 rounded-xl transition-all duration-500">
              <div className="mb-6 bg-red-600/10 w-16 h-16 flex items-center justify-center rounded-lg group-hover:scale-110 transition-transform">
                <Settings className="text-red-600" size={32} />
              </div>
              <h3 className="text-xl font-gaming font-bold mb-4 text-white uppercase">
                HARDWARE
              </h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span>Device</span>
                  <span className="text-white">iPhone 15 Pro Max</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span>Headset</span>
                  <span className="text-white">SteelSeries Arctis</span>
                </li>
                <li className="flex justify-between pb-2">
                  <span>Sleeves</span>
                  <span className="text-white">Pro Finger Sleeves</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Playbook = () => {
  return (
    <section id="playbook" className="py-24 bg-grid relative bg-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="font-gaming text-4xl mb-4 text-white uppercase">
              IGL'S PLAYBOOK
            </h2>
            <div className="w-16 h-1 bg-red-600"></div>
          </div>
          <button className="hidden md:flex items-center text-red-500 hover:text-white transition-colors mt-4 md:mt-0 font-gaming text-xs tracking-widest uppercase">
            VIEW ALL TIPS <ChevronRight size={16} className="ml-2" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            whileHover={{ y: -5 }}
            className="p-8 bg-zinc-900 border border-white/10 rounded-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <BookOpen size={100} />
            </div>
            <div className="flex items-center mb-6">
              <span className="bg-red-600 text-[10px] font-gaming px-3 py-1 rounded tracking-[0.2em] mr-4 text-white uppercase">
                Tip of the Week
              </span>
              <span className="text-gray-500 text-sm">MARCH 15, 2024</span>
            </div>
            <h3 className="text-2xl font-bold mb-6 text-white uppercase">
              How to rotate into Zone 4 in Miramar
            </h3>
            <p className="text-gray-400 mb-8 leading-relaxed text-sm md:text-base">
              Miramar is all about terrain exploitation. In Zone 4, avoid
              center-compounds if you're not there early. Instead, look for
              'dips' and 'ridges' on the outskirts to gate-keep teams rotating
              in late. Use smoking techniques for line-of-sight denial, not just
              for cover.
            </p>
            <div className="flex items-center text-red-500 font-gaming text-xs cursor-pointer group uppercase tracking-widest">
              READ FULL STRATEGY{" "}
              <ChevronRight
                size={14}
                className="ml-1 group-hover:ml-3 transition-all"
              />
            </div>
          </motion.div>

          <div className="space-y-6">
            <h4 className="font-gaming text-sm text-gray-500 tracking-widest uppercase mb-4">
              QUICK DRILLS
            </h4>
            {[
              {
                title: "Peak Positioning",
                desc: "Always maintain high ground in Erangel rotations.",
                icon: <Target size={20} />,
              },
              {
                title: "Team Coordination",
                desc: "Communication is 90% of the game. Keep it precise.",
                icon: <Zap size={20} />,
              },
              {
                title: "Utility Mastery",
                desc: "One perfect nade can flip a match. Practice timing.",
                icon: <Target size={20} />,
              },
            ].map((drill, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-4 hover:bg-white/5 transition-colors rounded-lg border border-transparent hover:border-white/10"
              >
                <div className="mt-1 text-red-600">{drill.icon}</div>
                <div>
                  <h5 className="font-bold text-white mb-1 uppercase tracking-tight text-sm md:text-base">
                    {drill.title}
                  </h5>
                  <p className="text-xs md:text-sm text-gray-400">
                    {drill.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const GearCarousel = () => {
  const gear = [
    {
      name: "iPhone 15 Pro Max",
      category: "Mobile Device",
      price: "$1,199",
      image: "https://picsum.photos/seed/iphone/400/400",
    },
    {
      name: "SteelSeries Arctis Nova",
      category: "Gaming Headset",
      price: "$349",
      image: "https://picsum.photos/seed/headset/400/400",
    },
    {
      name: "Sensei Pro Sleeves",
      category: "Gaming Gear",
      price: "$19",
      image: "https://picsum.photos/seed/sleeves/400/400",
    },
    {
      name: "Redmi Powerbank 20k",
      category: "Accessories",
      price: "$45",
      image: "https://picsum.photos/seed/powerbank/400/400",
    },
  ];

  return (
    <section className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6">
        <h2 className="font-gaming text-3xl mb-12 flex items-center gap-4 text-white uppercase tracking-tighter">
          <ShoppingBag className="text-red-600" /> SENSEI'S ARMORY
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {gear.map((item, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative aspect-square mb-4 overflow-hidden rounded-xl bg-zinc-900 border border-white/5">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="bg-red-600 text-white px-6 py-2 rounded-full font-gaming text-[10px] tracking-widest flex items-center uppercase">
                    SHOP NOW <ExternalLink size={12} className="ml-2" />
                  </button>
                </div>
              </div>
              <h4 className="text-white font-bold uppercase tracking-tight text-sm md:text-base">
                {item.name}
              </h4>
              <div className="flex justify-between items-center mt-1">
                <span className="text-xs text-gray-500 uppercase font-gaming tracking-widest">
                  {item.category}
                </span>
                <span className="text-red-500 font-bold">{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 text-center md:text-left">
          <div className="col-span-1">
            <span className="font-sensei text-4xl text-red-600 tracking-widest mb-6 block">
              SENSEI
            </span>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              Professional BGMI Athlete & IGL representing Wyld Fangs. The
              Professor of the Battlegrounds.
            </p>
          </div>
          <div className="flex flex-col space-y-4">
            <h4 className="font-gaming text-xs text-white tracking-[0.3em] uppercase mb-4">
              Social Intel
            </h4>
            <div className="flex flex-col space-y-3">
              <a
                href="https://www.youtube.com/@SenseiGaming"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-red-600 transition-colors flex items-center justify-center md:justify-start gap-3"
              >
                <Zap size={18} /> @SenseiGaming
              </a>
              <a
                href="https://www.instagram.com/sensei.og/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-red-600 transition-colors flex items-center justify-center md:justify-start gap-3"
              >
                <Ghost size={18} /> @sensei.og
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-red-600 transition-colors flex items-center justify-center md:justify-start gap-3"
              >
                <Target size={18} /> Discord Hub
              </a>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h4 className="font-gaming text-xs text-white tracking-[0.3em] uppercase mb-4">
              Official Contact
            </h4>
            <p className="text-gray-500 text-sm">
              For business & collaboration:
            </p>
            <p className="text-white font-bold">business@sensei-esports.com</p>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p className="text-gray-600 text-[10px] md:text-xs font-gaming uppercase tracking-widest">
            © 2024 SENSEI Esports. All Rights Reserved.
          </p>
          <div className="text-gray-400 text-[10px] md:text-xs font-light">
            Developed with ❤️ by{" "}
            <span className="text-red-500 font-semibold italic">mihir</span> (
            <a
              href="mailto:mihirpanchal555@gmail.com"
              className="hover:underline"
            >
              mihirpanchal555@gmail.com
            </a>
            )
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-600 selection:text-white">
      <Navbar />
      <Hero />
      <ScrimsTicker />
      <About />
      <TrophyCase />
      <AuraSection />
      <Setup />
      <Playbook />
      <GearCarousel />
      <Footer />
    </div>
  );
}
