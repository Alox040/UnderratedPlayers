import React from 'react';
import { 
  Users, 
  Eye, 
  TrendingUp, 
  Globe, 
  Search, 
  Target, 
  ChevronRight, 
  ChevronLeft,
  Instagram,
  Twitter,
  Youtube,
  ArrowRight
} from 'lucide-react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

// --- Colors ---
const COLORS = {
  bg: '#05080f',
  card: '#0a101a',
  border: '#1f2937',
  green: '#9bf11c',
  blue: '#2589ff',
  textBody: '#9ca3af',
  textMuted: '#6b7280'
};

// --- Images ---
const IMAGES = {
  heroBg: "https://images.unsplash.com/photo-1730652128205-f5e98e542786?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBwbGF5ZXIlMjBzaWxob3VldHRlJTIwc3RhZGl1bSUyMG5pZ2h0fGVufDF8fHx8MTc3NjYzMTYxMXww&ixlib=rb-4.1.0&q=80&w=1080",
  globeBg: "https://images.unsplash.com/photo-1769921824640-66df07145143?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG93aW5nJTIwZ3JlZW4lMjBlYXJ0aCUyMHNwYWNlfGVufDF8fHx8MTc3NjYzMTYxMXww&ixlib=rb-4.1.0&q=80&w=1080",
  players: [
    "https://images.unsplash.com/photo-1746811988723-acb90540aa49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBwbGF5ZXIlMjBwb3J0cmFpdCUyMGdyZWVufGVufDF8fHx8MTc3NjYzMTYxMXww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1620779040904-b39694c620dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHNvY2NlciUyMHBsYXllciUyMGhlYWRzaG90JTIwZGFyayUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzc2NjMxNjExfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1746811988723-acb90540aa49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBwbGF5ZXIlMjBwb3J0cmFpdCUyMGdyZWVufGVufDF8fHx8MTc3NjYzMTYxMXww&ixlib=rb-4.1.0&q=80&w=1080" // reusing first for the third
  ]
};

// --- SVG Logo Component ---
function Logo() {
  return (
    <div className="flex items-center gap-2 cursor-pointer">
      <div className="relative w-10 h-10 flex-shrink-0">
        <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
          {/* U shape (Blue) */}
          <path 
            d="M 20 20 L 20 60 C 20 85 60 85 60 60 L 60 40" 
            fill="none" 
            stroke={COLORS.blue} 
            strokeWidth="16" 
            strokeLinecap="round" 
          />
          {/* Arrow extending up (Green) */}
          <path 
            d="M 60 45 L 60 10" 
            fill="none" 
            stroke={COLORS.green} 
            strokeWidth="16" 
            strokeLinecap="round" 
          />
          {/* Arrow Head (Green) */}
          <polygon points="40,25 60,0 80,25" fill={COLORS.green} />
          {/* Soccer Ball Center (White/Black approximation) */}
          <circle cx="40" cy="40" r="10" fill="white" />
          <path d="M 40 30 L 45 35 L 40 45 L 35 35 Z" fill="black" />
          <circle cx="48" cy="42" r="2" fill="black" />
          <circle cx="32" cy="42" r="2" fill="black" />
          <circle cx="40" cy="48" r="2" fill="black" />
        </svg>
      </div>
      <div className="flex flex-col justify-center leading-none">
        <span className="font-black text-sm tracking-wider" style={{ color: COLORS.blue }}>UNDERRATED</span>
        <span className="font-black text-sm tracking-wider" style={{ color: COLORS.green }}>PLAYERS</span>
      </div>
    </div>
  );
}

// --- Components ---

function Navbar() {
  return (
    <nav className="fixed w-full top-0 z-50 bg-[#05080f]/90 backdrop-blur-md border-b border-white/5 px-6 lg:px-12 py-4 flex justify-between items-center">
      <Logo />
      
      {/* Desktop Links */}
      <div className="hidden lg:flex gap-8 text-[11px] font-bold tracking-widest text-white">
        <a href="#" className="text-white border-b-2 pb-1 transition-colors" style={{ borderColor: COLORS.green }}>HOME</a>
        <a href="#" className="hover:text-white/70 pb-1 border-b-2 border-transparent transition-colors">PLAYERS</a>
        <a href="#" className="hover:text-white/70 pb-1 border-b-2 border-transparent transition-colors">TEAMS</a>
        <a href="#" className="hover:text-white/70 pb-1 border-b-2 border-transparent transition-colors">SCOUTING</a>
        <a href="#" className="hover:text-white/70 pb-1 border-b-2 border-transparent transition-colors">BLOG</a>
        <a href="#" className="hover:text-white/70 pb-1 border-b-2 border-transparent transition-colors">ABOUT US</a>
      </div>

      <div className="hidden lg:flex gap-4">
        <button className="px-6 py-2 border border-white/20 text-white text-xs font-bold tracking-widest uppercase hover:bg-white/5 transition-colors">
          Login
        </button>
        <button 
          className="px-6 py-2 text-black text-xs font-bold tracking-widest uppercase transition-opacity hover:opacity-90"
          style={{ backgroundColor: COLORS.blue, backgroundImage: `linear-gradient(to right, ${COLORS.blue}, ${COLORS.green})` }}
        >
          Sign Up
        </button>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="relative w-full min-h-[90vh] pt-32 pb-20 flex items-center overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={IMAGES.heroBg} 
          alt="Stadium Night" 
          className="w-full h-full object-cover object-center opacity-60 mix-blend-screen"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, #05080f 40%, transparent 100%)' }}></div>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #05080f 0%, transparent 30%)' }}></div>
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="max-w-xl">
          <h1 className="text-6xl sm:text-7xl font-black tracking-tighter leading-[1.05] mb-6">
            <span className="block text-white">DISCOVER.</span>
            <span className="block" style={{ color: COLORS.blue }}>ANALYZE.</span>
            <span className="block" style={{ color: COLORS.green }}>EMPOWER.</span>
          </h1>
          <p className="text-sm sm:text-base mb-10 leading-relaxed font-medium" style={{ color: COLORS.textBody }}>
            Underrated Players shines a light on the hidden talents of football and gives them the recognition they deserve.
          </p>
          <div className="flex flex-wrap gap-4">
            <button 
              className="px-6 py-3 text-black text-[11px] sm:text-xs font-bold tracking-widest uppercase flex items-center gap-2 transition-opacity hover:opacity-90"
              style={{ backgroundColor: COLORS.green }}
            >
              Discover Players <ArrowRight size={16} />
            </button>
            <button className="px-6 py-3 border border-white/30 text-white text-[11px] sm:text-xs font-bold tracking-widest uppercase flex items-center gap-2 hover:bg-white/5 transition-colors">
              Learn More <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Right Graphic/Text */}
        <div className="hidden lg:flex flex-col items-center justify-center text-center mt-20 lg:mt-0">
          {/* Giant 'U' Graphic representation */}
          <div className="relative w-64 h-64 mb-8">
            <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible drop-shadow-2xl">
              <path d="M 20 20 L 20 60 C 20 85 60 85 60 60 L 60 40" fill="none" stroke={COLORS.blue} strokeWidth="18" strokeLinecap="round" />
              <path d="M 60 45 L 60 -10" fill="none" stroke={COLORS.green} strokeWidth="18" strokeLinecap="round" />
              <polygon points="35,10 60,-25 85,10" fill={COLORS.green} />
              <circle cx="40" cy="40" r="14" fill="white" />
              <path d="M 40 26 L 47 33 L 40 47 L 33 33 Z" fill="black" />
            </svg>
          </div>
          <h2 className="text-3xl font-black text-white tracking-widest uppercase mb-2">
            For
          </h2>
          <h2 className="text-5xl font-black tracking-tighter uppercase leading-none mb-4">
            <span className="block text-white drop-shadow-md">Underrated</span>
            <span className="block drop-shadow-md" style={{ color: COLORS.green }}>Players</span>
          </h2>
          <p className="text-sm font-bold tracking-widest uppercase" style={{ color: COLORS.textBody }}>
            From <span style={{ color: COLORS.blue }}>Unseen</span> To Signed
          </p>
        </div>
      </div>
    </section>
  );
}

function StatsStrip() {
  const stats = [
    { icon: <Users size={28} style={{ color: COLORS.green }} />, value: "250+", label: "Players Analyzed" },
    { icon: <Eye size={28} style={{ color: COLORS.blue }} />, value: "50K+", label: "Profiles Viewed" },
    { icon: <TrendingUp size={28} style={{ color: COLORS.green }} />, value: "120+", label: "Talents Tracked" },
    { icon: <Globe size={28} style={{ color: COLORS.blue }} />, value: "20+", label: "Countries Covered" },
  ];

  return (
    <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 mb-20 relative z-20 -mt-10 lg:mt-0">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 bg-[#0a101a] border border-white/5 rounded-lg py-8 px-4 md:divide-x divide-white/10 shadow-2xl">
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left px-4">
            <div className="p-3 bg-white/5 rounded-full">
              {stat.icon}
            </div>
            <div>
              <div className="text-2xl lg:text-3xl font-black tracking-tight" style={{ color: COLORS.green }}>{stat.value}</div>
              <div className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-white mt-1">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MainContent() {
  const players = [
    { name: "ARDA GÜLER", age: 20, country: "TURKEY", pos: "CAM", rating: 87, img: IMAGES.players[0], desc: "Creative attacking midfielder with an exceptional vision of the game." },
    { name: "ELY E WAHI", age: 21, country: "FRANCE", pos: "ST", rating: 85, img: IMAGES.players[1], desc: "Fast, powerful striker with great depth and excellent finishing." },
    { name: "JAMAL MUSIALA", age: 20, country: "GERMANY", pos: "CM", rating: 90, img: IMAGES.players[2], desc: "Technical and intelligent midfielder, already decisive at the highest level." },
  ];

  return (
    <section className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 pb-24 text-white">
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-12">
        
        {/* Latest Talents */}
        <div className="xl:col-span-8">
          <div className="flex justify-between items-end mb-8 border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-1 h-5" style={{ backgroundColor: COLORS.green }}></div>
              <h3 className="text-xl font-black tracking-widest uppercase">Latest Talents</h3>
            </div>
            <a href="#" className="text-[11px] font-bold tracking-widest uppercase hover:underline flex items-center gap-1" style={{ color: COLORS.green }}>
              View All Players <ChevronRight size={14} />
            </a>
          </div>

          <div className="relative">
            {/* Nav arrows (visual only) */}
            <div className="absolute top-1/3 -left-4 w-8 h-8 rounded-full bg-[#1f2937] flex items-center justify-center z-10 cursor-pointer hover:bg-white/20 transition-colors">
              <ChevronLeft size={16} />
            </div>
            <div className="absolute top-1/3 -right-4 w-8 h-8 rounded-full bg-[#1f2937] flex items-center justify-center z-10 cursor-pointer hover:bg-white/20 transition-colors">
              <ChevronRight size={16} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {players.map((p, i) => (
                <div key={i} className="bg-[#0a101a] border border-white/5 rounded-xl overflow-hidden group hover:border-white/15 transition-all">
                  {/* Top Stats */}
                  <div className="relative aspect-square overflow-hidden bg-gradient-to-b from-[#152132] to-[#0a101a]">
                    <div className="absolute top-4 left-4 z-20">
                      <span className="px-2 py-1 text-[10px] font-black text-black rounded-sm" style={{ backgroundColor: COLORS.green }}>
                        {p.pos}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 z-20 text-right leading-none">
                      <div className="text-3xl font-black drop-shadow-md" style={{ color: COLORS.green }}>{p.rating}</div>
                      <div className="text-[8px] font-bold tracking-widest text-white/70 uppercase">Potential</div>
                    </div>
                    
                    <img 
                      src={p.img} 
                      alt={p.name} 
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[85%] object-contain mix-blend-luminosity opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a101a] via-transparent to-transparent z-10"></div>
                  </div>

                  {/* Info */}
                  <div className="p-6">
                    <h4 className="text-lg font-black tracking-wide uppercase mb-1">{p.name}</h4>
                    <div className="flex items-center gap-2 text-[10px] font-bold tracking-wider text-white/50 uppercase mb-4">
                      {p.age} YEARS &bull; {p.country}
                    </div>
                    <p className="text-xs leading-relaxed text-white/60 mb-6 min-h-[48px]">
                      {p.desc}
                    </p>
                    <a href="#" className="text-[11px] font-bold tracking-widest uppercase flex items-center gap-2 hover:underline" style={{ color: COLORS.green }}>
                      View Profile <ChevronRight size={14} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Our Mission */}
        <div className="xl:col-span-4">
          <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
            <div className="w-1 h-5" style={{ backgroundColor: COLORS.blue }}></div>
            <h3 className="text-xl font-black tracking-widest uppercase">Our Mission</h3>
          </div>

          <div className="bg-[#0a101a] border border-white/5 rounded-xl p-8 h-[calc(100%-4rem)]">
            <p className="text-sm text-white/80 leading-relaxed mb-8">
              We believe talent has no limits. Our mission is to identify, analyze and promote underrated players who deserve more recognition.
            </p>

            <ul className="space-y-8 mb-10">
              <li className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Search size={24} style={{ color: COLORS.green }} />
                </div>
                <div>
                  <h5 className="font-bold text-sm uppercase tracking-wide mb-1">In-Depth Analysis</h5>
                  <p className="text-xs text-white/50 leading-relaxed">Detailed reports based on data and advanced scouting.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Users size={24} style={{ color: COLORS.blue }} />
                </div>
                <div>
                  <h5 className="font-bold text-sm uppercase tracking-wide mb-1">Passionate Community</h5>
                  <p className="text-xs text-white/50 leading-relaxed">Join thousands of football fans who share the same vision.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Target size={24} style={{ color: COLORS.green }} />
                </div>
                <div>
                  <h5 className="font-bold text-sm uppercase tracking-wide mb-1">Real Opportunities</h5>
                  <p className="text-xs text-white/50 leading-relaxed">Connecting talents with the right opportunities for their future.</p>
                </div>
              </li>
            </ul>

            <a href="#" className="text-[11px] font-bold tracking-widest uppercase flex items-center gap-2 hover:underline" style={{ color: COLORS.green }}>
              Learn More <ChevronRight size={14} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 pb-24">
      <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 bg-[#0a101a] flex flex-col md:flex-row items-center">
        {/* Abstract Background/Globe */}
        <div className="absolute left-0 top-0 bottom-0 w-1/2 md:w-1/3 opacity-40 mix-blend-screen overflow-hidden">
          <img 
            src={IMAGES.globeBg} 
            alt="Glowing Earth" 
            className="w-full h-full object-cover object-left"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0a101a]"></div>
        </div>

        <div className="relative z-10 p-12 md:p-20 flex-1 md:ml-[10%] xl:ml-[25%] text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="max-w-lg">
            <h2 className="text-3xl lg:text-4xl font-black tracking-tight uppercase mb-4 leading-tight">
              <span className="block text-white">Football Has No Borders.</span>
              <span className="block" style={{ color: COLORS.green }}>Let's Take Talent Further.</span>
            </h2>
            <p className="text-sm font-medium text-white/70 leading-relaxed">
              Join the Underrated Players community<br className="hidden md:block"/> and help shape the future of football.
            </p>
          </div>
          <div>
            <button 
              className="px-8 py-4 text-black text-xs font-bold tracking-widest uppercase flex items-center gap-2 transition-opacity hover:opacity-90 flex-shrink-0"
              style={{ backgroundColor: COLORS.green, backgroundImage: `linear-gradient(to right, ${COLORS.green}, #4ADE80)` }}
            >
              Join The Community <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="w-full bg-[#05080f] border-t border-white/10 pt-16 pb-8">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
        
        {/* Brand & Socials */}
        <div className="lg:col-span-2">
          <div className="mb-6 scale-90 origin-left">
            <Logo />
          </div>
          <div className="flex gap-4 mb-6 text-white/50">
            <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
            {/* Simple TikTok SVG icon */}
            <a href="#" className="hover:text-white transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
              </svg>
            </a>
            <a href="#" className="hover:text-white transition-colors"><Youtube size={20} /></a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-[10px] font-bold tracking-widest text-white/40 uppercase mb-6">Platform</h4>
          <ul className="space-y-3 text-xs text-white/70 font-medium">
            <li><a href="#" className="hover:text-white transition-colors">Players</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Teams</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Scouting</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-[10px] font-bold tracking-widest text-white/40 uppercase mb-6">Company</h4>
          <ul className="space-y-3 text-xs text-white/70 font-medium">
            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-[10px] font-bold tracking-widest text-white/40 uppercase mb-6">Support</h4>
          <ul className="space-y-3 text-xs text-white/70 font-medium">
            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="lg:col-span-2 lg:col-start-4 lg:row-start-1 mt-8 lg:mt-0">
          <h4 className="text-[10px] font-bold tracking-widest text-white uppercase mb-2">Stay Updated</h4>
          <p className="text-xs text-white/50 mb-4">Subscribe to our newsletter<br/>for the latest updates.</p>
          <div className="flex border border-white/20 rounded-md overflow-hidden bg-white/5">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-transparent border-none outline-none text-xs text-white px-4 py-3 flex-1"
            />
            <button className="px-4 bg-[#2589ff] hover:bg-[#1a73e8] transition-colors flex items-center justify-center">
              <ArrowRight size={16} className="text-white" />
            </button>
          </div>
        </div>

      </div>
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold">
          © {new Date().getFullYear()} Underrated Players. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-[#9bf11c] selection:text-black overflow-x-hidden" style={{ backgroundColor: COLORS.bg }}>
      <Navbar />
      <main>
        <HeroSection />
        <StatsStrip />
        <MainContent />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
