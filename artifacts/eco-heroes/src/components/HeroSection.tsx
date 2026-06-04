import { NiheBadge } from "./NiheBadge";

export function HeroSection() {
  return (
    <section className="relative pb-6 md:pb-10 overflow-hidden">
      <NiheBadge />
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full mix-blend-multiply filter blur-2xl animate-float"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-secondary rounded-full mix-blend-multiply filter blur-2xl animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute -bottom-10 left-1/2 w-64 h-64 bg-accent rounded-full mix-blend-multiply filter blur-2xl animate-float" style={{ animationDelay: "4s" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* 1. Dark "Your Mission" card */}
          <div className="mb-5 bg-foreground text-background rounded-2xl px-4 md:px-6 py-4 block w-full max-w-sm mx-auto border-4 border-foreground comic-shadow animate-in slide-in-from-bottom-8 duration-700">
            <p className="text-xs md:text-base font-bold tracking-wide uppercase text-background/70 mb-1 text-balance">
              🎖️ Your Mission, If You Choose To Accept It...
            </p>
            <p className="text-xl md:text-3xl font-black uppercase tracking-wide text-secondary whitespace-nowrap">
              Our Eco-Hero Competition
            </p>
            <p className="text-xs md:text-sm font-bold text-red-400 mt-2 animate-pulse tracking-wide uppercase whitespace-nowrap">
              ⚠️ This message will self-destruct<br /><span className="whitespace-nowrap">by Thurs 16 June ⚠️</span>
            </p>
          </div>

          {/* 2. Mission Statement Competition text */}
          <div className="mt-6 mb-2 animate-in fade-in duration-700">
            <h2 className="text-3xl md:text-5xl font-black font-display text-primary uppercase tracking-wide drop-shadow-[2px_2px_0_hsl(var(--foreground))]">
              Our Mission Statement<br />Competition
            </h2>
            <p className="mt-3 text-lg md:text-xl font-bold text-foreground/70 italic">
              Tell us about your school — we'll point you in the right direction!
            </p>
          </div>

          {/* 3. Age group tiles */}
          <div className="mt-8 animate-in fade-in duration-700">
            <p className="text-2xl md:text-3xl font-black uppercase tracking-wide text-foreground mb-4">
              🎯 What age group are you?
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl mx-auto">
              {[
                { id: "5-7",           emoji: "⭐", label: "Ages 5–7",      sub: "Foundation & KS1", color: "bg-yellow-100 border-yellow-400 hover:bg-yellow-200" },
                { id: "8-11",          emoji: "🚀", label: "Ages 8–11",     sub: "Key Stage 2",      color: "bg-green-100 border-green-500 hover:bg-green-200" },
                { id: "12-14",         emoji: "🔬", label: "Ages 12–14",    sub: "Key Stage 3",      color: "bg-blue-100 border-blue-500 hover:bg-blue-200" },
                { id: "all-abilities", emoji: "♿", label: "All Abilities", sub: "All learners",     color: "bg-purple-100 border-purple-400 hover:bg-purple-200" },
              ].map(({ id, emoji, label, sub, color }) => (
                <button
                  key={id}
                  onClick={() => {
                    sessionStorage.setItem("preselectedAge", id);
                    document.getElementById("mission")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`${color} border-4 rounded-2xl p-4 comic-shadow text-center transition-transform hover:scale-105 active:scale-95 cursor-pointer`}
                >
                  <div className="text-4xl mb-1">{emoji}</div>
                  <div className="font-black text-foreground text-base uppercase leading-tight">{label}</div>
                  <div className="text-xs font-bold text-foreground/60 mt-1">{sub}</div>
                </button>
              ))}
            </div>
            <p className="mt-3 text-sm font-bold text-foreground/50">Tap your age group to jump straight to the Mission Builder ↓</p>
          </div>

          {/* 4. Our School Eco-Heroes blurb */}
          <div className="mt-10 animate-in slide-in-from-bottom-8 duration-700">
            <h1 className="text-5xl md:text-7xl font-black text-primary drop-shadow-[0_4px_0_hsl(var(--foreground))]">
              Our School<br /><span className="text-secondary">Eco-Heroes</span>
            </h1>
            <p className="mt-3 text-lg font-bold text-foreground/60">
              Led by <span className="text-primary font-black">Max</span> — and the Eco-Heroes Committee
            </p>
            <p className="mt-4 text-xl md:text-2xl font-bold text-foreground/80 italic">
              Bring Down Energy!
            </p>
          </div>

          {/* 5. Poem box */}
          <div className="relative mt-8 animate-in zoom-in-95 duration-1000">
            <div className="absolute -inset-2 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl opacity-50 blur-lg"></div>
            <div className="relative bg-white border-4 border-foreground rounded-3xl p-5 md:p-8 comic-shadow transform rotate-1">
              <h2 className="text-2xl font-display font-black text-accent mb-4 uppercase tracking-wider">
                The Eco-Hero Mission
              </h2>
              <div className="space-y-3 text-lg md:text-xl font-bold text-foreground leading-relaxed">
                <p>We switch off the lights when we leave the room, ✋</p>
                <p>We turn down the heat to stop the planet's doom, 🧥</p>
                <p>We unplug our chargers at the end of the day, ⚡</p>
                <p>We choose green energy every single way, ☀️</p>
                <p className="text-2xl md:text-3xl text-primary mt-6 uppercase">
                  Together we heroes keep waste away! 💪🌍
                </p>
              </div>
              <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full border-4 border-foreground comic-shadow bg-white overflow-hidden animate-wiggle">
                <img
                  src={`${import.meta.env.BASE_URL}eco-heroes-export/images/niseeap-logo.jpg`}
                  alt="NI Schools Energy Efficiency Awareness Programme"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* 6. Winning heroes image + WE'RE BACK */}
          <div className="mt-10 animate-in fade-in duration-1000">
            <img
              src={`${import.meta.env.BASE_URL}eco-heroes-export/images/winning-heroes.png`}
              alt="The Eco-Heroes Squad"
              className="w-full max-w-xl mx-auto rounded-2xl border-4 border-foreground comic-shadow object-contain"
            />
            <div className="text-center mt-6">
              <p className="text-6xl md:text-8xl font-black font-display text-accent drop-shadow-[4px_4px_0_hsl(var(--foreground))] animate-bounce">
                WE'RE BACK!!
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
