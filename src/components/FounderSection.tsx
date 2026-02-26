import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import founderImg from "@/assets/founder.jpg";

const FounderSection = () => {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section id="founder" className="py-20 md:py-28 bg-secondary/30 border-y border-border/50">
            <div ref={ref} className="container mx-auto px-4 max-w-6xl">
                <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
                    <span className="text-accent text-xs tracking-[0.4em] uppercase font-body block mb-3">創設者 · The Founder</span>
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                        About Me
                    </h2>
                    <div className="w-16 h-0.5 bg-accent mx-auto" />
                </div>

                <div className="flex flex-col lg:flex-row gap-12 items-start justify-between">

                    {/* Text Content */}
                    <div className={`lg:w-3/5 space-y-8 transition-all duration-700 delay-200 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>

                        {/* Intro */}
                        <div className="space-y-4">
                            <h3 className="font-heading text-2xl font-semibold text-foreground flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-accent" />
                                Who I Am
                            </h3>
                            <p className="text-muted-foreground text-base leading-relaxed font-body">
                                My name is <strong className="text-foreground">Yash Gupta</strong>, and I am currently pursuing my Bachelor's degree in Computer Science in India. I am deeply focused on building my academic career in Artificial Intelligence and Machine Learning Systems, with a long-term goal of pursuing higher studies in Japan under the MEXT Scholarship.
                            </p>
                            <p className="text-muted-foreground text-base leading-relaxed font-body">
                                Over the past few years, I have thoroughly studied the MEXT scholarship system—including the embassy route, university route, application documents, research proposal structure, interview preparation, laboratory selection strategy, and placement process. I have analyzed timelines, common mistakes, selection patterns, and the technical expectations from candidates in detail.
                            </p>
                            <p className="text-muted-foreground text-base leading-relaxed font-body">
                                While preparing for my own MEXT journey, I realized that many capable students lose their opportunity not because they lack intelligence, but because they lack clarity, structure, and a disciplined preparation environment.
                            </p>
                            <p className="text-muted-foreground text-base leading-relaxed font-body italic text-foreground/80 border-l-2 border-accent/50 pl-4 py-1">
                                This initiative is built from that understanding.
                            </p>
                        </div>

                        {/* Why I Started This */}
                        <div className="space-y-4 pt-4 border-t border-border/50">
                            <h3 className="font-heading text-2xl font-semibold text-foreground flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-accent" />
                                Why I Created This Residency
                            </h3>
                            <ul className="space-y-2 text-foreground font-medium text-sm">
                                <li className="flex items-start gap-2"><span className="text-accent">✗</span> This program is not a business.</li>
                                <li className="flex items-start gap-2"><span className="text-accent">✗</span> I am not an agency.</li>
                                <li className="flex items-start gap-2"><span className="text-accent">✗</span> I am not affiliated with the Japanese Embassy or any university.</li>
                            </ul>
                            <p className="text-muted-foreground text-base leading-relaxed font-body">
                                I created this residency to build a focused academic environment for serious MEXT aspirants who are willing to work hard and prepare strategically.
                            </p>
                            <div className="bg-background border border-border/50 rounded-md p-4">
                                <p className="text-sm font-semibold text-foreground mb-3">The MEXT scholarship is competitive and requires:</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
                                    <span className="flex items-center gap-2"><span className="text-accent text-xs">◆</span> Clear research vision</span>
                                    <span className="flex items-center gap-2"><span className="text-accent text-xs">◆</span> Strong documentation</span>
                                    <span className="flex items-center gap-2"><span className="text-accent text-xs">◆</span> Strategic professor selection</span>
                                    <span className="flex items-center gap-2"><span className="text-accent text-xs">◆</span> Proper interview preparation</span>
                                    <span className="flex items-center gap-2 sm:col-span-2"><span className="text-accent text-xs">◆</span> Consistent academic discipline</span>
                                </div>
                            </div>
                            <p className="text-muted-foreground text-base leading-relaxed font-body">
                                Many students prepare alone and struggle with confusion and lack of direction. My goal is to create a space where motivated students can prepare together with accountability and structure.
                            </p>
                        </div>

                        {/* My Vision */}
                        <div className="space-y-4 pt-4 border-t border-border/50">
                            <h3 className="font-heading text-2xl font-semibold text-foreground flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-accent" />
                                My Vision
                            </h3>
                            <p className="text-muted-foreground text-base leading-relaxed font-body">
                                I want to build a disciplined preparation ecosystem specifically for MEXT aspirants. This residency is based on three core values:
                            </p>
                            <div className="grid sm:grid-cols-3 gap-4 pt-2">
                                <div className="bg-card border border-border/50 p-4 rounded-md text-center">
                                    <span className="block text-accent font-bold text-lg mb-1">1</span>
                                    <span className="text-sm font-semibold text-foreground">Discipline<br /><span className="text-muted-foreground font-normal text-xs uppercase tracking-widest mt-1 block">Over Shortcuts</span></span>
                                </div>
                                <div className="bg-card border border-border/50 p-4 rounded-md text-center">
                                    <span className="block text-accent font-bold text-lg mb-1">2</span>
                                    <span className="text-sm font-semibold text-foreground">Clarity<br /><span className="text-muted-foreground font-normal text-xs uppercase tracking-widest mt-1 block">Over Confusion</span></span>
                                </div>
                                <div className="bg-card border border-border/50 p-4 rounded-md text-center">
                                    <span className="block text-accent font-bold text-lg mb-1">3</span>
                                    <span className="text-sm font-semibold text-foreground">Consistency<br /><span className="text-muted-foreground font-normal text-xs uppercase tracking-widest mt-1 block">Over Motivation</span></span>
                                </div>
                            </div>
                            <p className="text-foreground font-medium text-base leading-relaxed font-heading text-center mt-6">
                                If you are serious about pursuing higher studies in Japan and are willing to put in the work, <span className="text-accent">this environment is designed to support that journey.</span>
                            </p>
                        </div>

                    </div>

                    {/* Photo Placeholder */}
                    <div className={`w-full lg:w-2/5 flex flex-col items-center justify-center lg:items-end transition-all duration-700 delay-500 ${isVisible ? 'animate-fade-in' : 'opacity-0'} mt-8 lg:mt-0`}>
                        <div className="relative w-full max-w-[400px] aspect-[3/4] rounded-lg border border-border/80 bg-card overflow-hidden group shadow-xl">
                            {/* Decorative Frame */}
                            <div className="absolute inset-2 border border-accent/20 rounded-md z-10 pointer-events-none" />
                            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-accent transition-all duration-500 group-hover:w-full group-hover:h-full z-10 pointer-events-none opacity-50" />
                            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-accent transition-all duration-500 group-hover:w-full group-hover:h-full z-10 pointer-events-none opacity-50" />

                            {/* Founder Image */}
                            <img
                                src={founderImg}
                                alt="Yash Gupta - Founder"
                                className="absolute inset-0 w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none"
                            />
                        </div>
                        <div className="mt-6 text-center lg:text-right w-full max-w-[400px]">
                            <p className="font-heading text-2xl font-bold text-foreground">Yash Gupta</p>
                            <p className="font-body text-sm text-accent uppercase tracking-[0.2em] mt-1">Founder</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default FounderSection;
