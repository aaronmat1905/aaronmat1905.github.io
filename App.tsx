import React, { useState, useEffect } from 'react';
import {
  GithubIcon,
  TwitterIcon,
  LinkedinIcon,
  InstagramIcon,
  FacebookIcon,
  LinkIcon,
  ArrowRightIcon,
  MapPinIcon,
  MailIcon,
  CodeIcon,
  TerminalIcon,
  BriefcaseIcon,
  FeatherIcon,
  HeadphonesIcon,
  BookOpenIcon,
  CameraIcon,
  PlayIcon,
  PauseIcon,
  YoutubeIcon,
  SubstackIcon,
  SunIcon,
  MoonIcon
} from './components/Icons';
import { ProfileData, SocialLink, NavCard, Platform } from './types';

// Utility to get the correct icon component
const getIcon = (platform: Platform, className?: string) => {
  switch (platform) {
    case 'Github': return <GithubIcon className={className} />;
    case 'X': return <TwitterIcon className={className} />;
    case 'LinkedIn': return <LinkedinIcon className={className} />;
    case 'Instagram': return <InstagramIcon className={className} />;
    case 'Facebook': return <FacebookIcon className={className} />;
    case 'YouTube': return <YoutubeIcon className={className} />;
    case 'Substack': return <SubstackIcon className={className} />;
    default: return <LinkIcon className={className} />;
  }
};

const getNavIcon = (id: string, className?: string) => {
  switch (id) {
    case 'tech': return <TerminalIcon className={className} />;
    case 'blog': return <FeatherIcon className={className} />;
    case 'business': return <BriefcaseIcon className={className} />;
    case 'music': return <HeadphonesIcon className={className} />;
    case 'faith': return <BookOpenIcon className={className} />;
    case 'hobbies': return <CameraIcon className={className} />;
    default: return <LinkIcon className={className} />;
  }
};

const App: React.FC = () => {
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [socials, setSocials] = useState<SocialLink[]>([]);
  const [navigation, setNavigation] = useState<NavCard[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const loadData = async () => {
      try {
        const [profileRes, socialsRes, navRes] = await Promise.all([
          fetch('./public/data/profile.json'),
          fetch('./public/data/socials.json'),
          fetch('./public/data/navigation.json')
        ]);

        if (!profileRes.ok) throw new Error(`Failed to load profile.json: ${profileRes.statusText}`);
        if (!socialsRes.ok) throw new Error(`Failed to load socials.json: ${socialsRes.statusText}`);
        if (!navRes.ok) throw new Error(`Failed to load navigation.json: ${navRes.statusText}`);

        setProfile(await profileRes.json());
        setSocials(await socialsRes.json());
        setNavigation(await navRes.json());
      } catch (err: any) {
        console.error("Data loading error:", err);
        setError(err.message || "Failed to load portfolio data.");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  // Theme Toggler
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(newTheme);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background bg-dot-pattern flex items-center justify-center font-serif">
        <div className="flex flex-col items-center gap-4 animate-pulse">
           <div className="w-16 h-16 border-2 border-border border-t-accent rounded-full animate-spin"></div>
           <div className="text-secondary font-mono text-sm">INITIALIZING...</div>
        </div>
      </div>
    );
  }

  if (error || !profile) {
    return (
      <div className="min-h-screen bg-background bg-dot-pattern flex flex-col items-center justify-center p-6 text-center font-serif">
        <div className="bg-surface border border-red-900/50 p-6 rounded-lg max-w-md">
           <h2 className="text-red-400 text-lg font-mono font-bold mb-2">SYSTEM ERROR</h2>
           <p className="text-secondary">{error}</p>
        </div>
      </div>
    );
  }

  // Find specific nav items
  const techNav = navigation.find(n => n.id === 'tech');
  const businessNav = navigation.find(n => n.id === 'business');
  const musicNav = navigation.find(n => n.id === 'music');
  const faithNav = navigation.find(n => n.id === 'faith');
  const knownIds = ['tech', 'business', 'music', 'faith'];
  const otherNavs = navigation.filter(n => !knownIds.includes(n.id));

  return (
    <div className="min-h-screen bg-background bg-dot-pattern text-primary font-serif p-4 md:p-8 flex items-center justify-center relative transition-colors duration-300">
      
      {/* Theme Toggle Button */}
      <button 
        onClick={toggleTheme}
        className="absolute top-4 right-4 md:top-8 md:right-8 p-3 rounded-full bg-surface border border-border text-primary hover:bg-surfaceHighlight transition-all z-50 shadow-lg"
        title="Toggle Theme"
      >
        {theme === 'dark' ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
      </button>

      {/* Main Grid Container (Bento Box) */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-min">
        
        {/* 1. Profile Hero - Spans 2x2 */}
        <div className="col-span-1 md:col-span-2 row-span-2 bg-surface/80 backdrop-blur-xl border border-border p-8 rounded-3xl flex flex-col justify-between group hover:border-secondary transition-all duration-300">
          <div className="flex items-start justify-between">
            <div className="relative">
              <div className="absolute inset-0 bg-accent rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <img 
                src={profile.avatarUrl} 
                alt={profile.name} 
                className="relative w-24 h-24 rounded-2xl object-cover border-2 border-surfaceHighlight shadow-lg"
              />
            </div>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-surfaceHighlight rounded-full text-xs font-mono text-emerald-500 border border-emerald-500/20 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                ONLINE
              </span>
            </div>
          </div>
          
          <div className="mt-8 space-y-2">
            {/* NAME - Uses Archivo Black (font-display) */}
            <h1 className="text-4xl lg:text-5xl font-display text-primary tracking-tight">{profile.name}</h1>
            <p className="text-accent font-mono text-sm uppercase tracking-wider">{profile.tagline}</p>
          </div>

          <div className="mt-6 flex flex-col gap-2 font-mono text-xs text-secondary">
             {profile.location && (
               <div className="flex items-center gap-2">
                  <MapPinIcon className="w-4 h-4" />
                  <span>{profile.location}</span>
               </div>
             )}
             {profile.email && (
               <a href={`mailto:${profile.email}`} className="flex items-center gap-2 hover:text-primary transition-colors w-fit">
                  <MailIcon className="w-4 h-4" />
                  <span>{profile.email}</span>
               </a>
             )}
          </div>
        </div>

        {/* 2. Bio & Intro - Spans 2x2 - Promoted to top level */}
        <div className="col-span-1 md:col-span-2 row-span-2 bg-surface/60 backdrop-blur-md border border-border p-8 rounded-3xl flex flex-col group hover:border-secondary transition-colors relative overflow-hidden">
          <div className="absolute top-0 right-0 p-16 bg-accent opacity-5 blur-3xl rounded-full translate-x-12 -translate-y-12"></div>
          
          <div className="flex items-center gap-2 mb-6 relative z-10">
            <div className="w-2 h-2 rounded-full bg-accent"></div>
            <h2 className="text-sm font-mono text-secondary uppercase tracking-widest">Bio & Intro</h2>
          </div>
          
          <div className="space-y-4 text-base leading-relaxed text-primary/80 font-serif flex-grow overflow-y-auto hide-scrollbar relative z-10 italic">
             {profile.about?.map((paragraph, idx) => (
               <p key={idx}>{paragraph}</p>
             ))}
          </div>
        </div>

        {/* 3. Socials Bar - Full width under big cards */}
        <div className="col-span-1 md:col-span-4 bg-surfaceHighlight/50 border border-border p-4 rounded-3xl flex items-center justify-between overflow-x-auto h-[72px]">
           <span className="text-xs font-mono text-secondary hidden md:block pl-2">SOCIAL_LINKS //</span>
           <div className="flex gap-2 mx-auto md:mx-0">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-surface rounded-xl text-secondary hover:text-primary hover:bg-surfaceHighlight hover:scale-110 transition-all duration-200 border border-transparent hover:border-border"
                title={social.username}
              >
                {getIcon(social.platform, "w-5 h-5")}
              </a>
            ))}
           </div>
        </div>

        {/* 4. Tech Card (1x1) */}
        {techNav && (
          <a 
            href={techNav.url}
            target={techNav.isExternal ? "_blank" : "_self"}
            className="col-span-1 bg-surface/50 border border-border p-6 rounded-3xl flex flex-col justify-between group hover:border-blue-500/50 hover:bg-blue-500/5 transition-all duration-300 h-48"
          >
             <div className="flex justify-between items-start">
               <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500">
                 {getNavIcon(techNav.id, "w-6 h-6")}
               </div>
               <ArrowRightIcon className="w-5 h-5 text-secondary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
             </div>
             <div>
               <h3 className="text-lg font-display text-primary">{techNav.title}</h3>
               <p className="text-xs text-secondary mt-1 line-clamp-1 italic font-serif">{techNav.description}</p>
             </div>
          </a>
        )}

        {/* 5. Faith Card (1x1) - Emphasized Writing */}
        {faithNav && (
          <div className="col-span-1 bg-surface/50 border border-border p-6 rounded-3xl flex flex-col justify-between group hover:border-orange-400/50 hover:bg-orange-500/5 transition-all duration-300 h-48">
             <div className="flex justify-between items-start">
               <div className="p-3 bg-orange-500/10 rounded-xl text-orange-500">
                 {getNavIcon(faithNav.id, "w-6 h-6")}
               </div>
               <a href={faithNav.url} target="_blank" rel="noreferrer" className="text-secondary hover:text-orange-500">
                  <ArrowRightIcon className="w-5 h-5 -rotate-45" />
               </a>
             </div>
             
             <div>
               <h3 className="text-base font-display text-primary leading-tight">{faithNav.title}</h3>
               <div className="flex gap-2 mt-2">
                 {faithNav.socials?.map((link, idx) => (
                   <a key={idx} href={link.url} target="_blank" rel="noreferrer" className="text-secondary hover:text-orange-500 transition-colors" title={link.username}>
                     {getIcon(link.platform, "w-4 h-4")}
                   </a>
                 ))}
               </div>
             </div>
          </div>
        )}

        {/* 6. Lectify (1x1) - Compact */}
        {businessNav && (
          <a 
            href={businessNav.url}
            target={businessNav.isExternal ? "_blank" : "_self"}
            className="col-span-1 bg-gradient-to-br from-surface to-surfaceHighlight border border-border p-6 rounded-3xl flex flex-col justify-between group hover:shadow-lg hover:border-emerald-500/50 transition-all duration-300 h-48 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-16 bg-emerald-500/10 blur-2xl rounded-full translate-x-8 -translate-y-8"></div>
            <div className="flex justify-between items-start relative z-10">
              <div className="p-3 bg-surface rounded-xl text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                {getNavIcon(businessNav.id, "w-6 h-6")}
              </div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-lg font-display text-primary mb-1">{businessNav.title}</h3>
              <p className="text-xs text-secondary line-clamp-1 group-hover:text-emerald-500/80 transition-colors italic font-serif">Business</p>
            </div>
          </a>
        )}

        {/* 7. Music (1x1) - Mini Player */}
        {musicNav && (
          <div className="col-span-1 bg-surface/50 border border-border p-6 rounded-3xl flex flex-col justify-between group hover:border-pink-500/50 hover:bg-pink-500/5 transition-all duration-300 h-48 relative overflow-hidden">
             
             <div className="flex justify-between items-start z-10">
                <div className="p-3 bg-pink-500/10 rounded-xl text-pink-500">
                   <HeadphonesIcon className="w-6 h-6" />
                </div>
                {/* Visualizer bars (decorative) */}
                <div className="flex gap-1 items-end h-6">
                    {[1,2,3,4].map(i => (
                        <div 
                          key={i} 
                          className={`w-1 bg-pink-500/50 rounded-full transition-all duration-500 ${isPlaying ? 'animate-pulse h-full' : 'h-2'}`}
                          style={isPlaying ? { animationDelay: `${i * 0.1}s` } : {}}
                        ></div>
                    ))}
                </div>
             </div>

             <div className="z-10">
                <h3 className="text-lg font-display text-primary">{musicNav.title}</h3>
                <div className="flex items-center justify-between mt-2">
                   <div className="flex gap-2">
                      {musicNav.socials?.map((link, idx) => (
                        <a key={idx} href={link.url} target="_blank" rel="noreferrer" className="text-secondary hover:text-pink-500">
                          {getIcon(link.platform, "w-4 h-4")}
                        </a>
                      ))}
                   </div>
                   <a 
                     href={musicNav.url}
                     target="_blank"
                     rel="noreferrer"
                     className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-surface hover:scale-110 transition-transform"
                     onMouseEnter={() => setIsPlaying(true)}
                     onMouseLeave={() => setIsPlaying(false)}
                   >
                     <PlayIcon className="w-3 h-3 ml-0.5" />
                   </a>
                </div>
             </div>
          </div>
        )}

        {/* Other Navs */}
        {otherNavs.map((nav, idx) => (
          <a 
            key={idx}
            href={nav.url}
            target={nav.isExternal ? "_blank" : "_self"}
            className="col-span-1 bg-surface/50 border border-border p-6 rounded-3xl flex flex-col justify-center items-center text-center group hover:border-primary transition-all h-48"
          >
            <h3 className="font-display font-bold text-primary">{nav.title}</h3>
          </a>
        ))}

      </div>
    </div>
  );
};

export default App;