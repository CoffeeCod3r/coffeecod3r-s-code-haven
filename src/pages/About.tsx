import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";

const stacks = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "Git"];

const brewingCards = [
  { label: "Learning", value: "Three.js & WebGL" },
  { label: "Building", value: "SpotiSort v2.0" },
  { label: "Reading", value: "You Don't Know JS" },
];

const timeline = [
  { year: "2022", text: "First HTML page. It was ugly. I loved it." },
  { year: "2023", text: "Discovered JavaScript. Broke everything." },
  { year: "2024", text: "Built first full-stack app. Backend clicked." },
  { year: "2025", text: "Technik Programista diploma. Still breaking things." },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const About = () => (
  <PageTransition>
    <section className="pt-28 pb-20 px-6 max-w-6xl mx-auto">
      {/* Bio */}
      <div className="flex flex-col lg:flex-row gap-12 mb-20">
        {/* Photo placeholder */}
        <motion.div {...fadeUp} className="lg:w-[40%] flex-shrink-0">
          <div
            className="w-full aspect-[3/4] max-w-xs mx-auto border-2 border-primary rounded-lg flex items-center justify-center bg-card shadow-[8px_8px_0_hsl(var(--primary)/0.2)]"
            style={{ transform: "rotate(-2deg)" }}
          >
            <span className="font-mono text-primary text-lg">[ photo ]</span>
          </div>
          <div className="flex flex-wrap gap-2 mt-6 justify-center">
            {stacks.map((s) => (
              <span
                key={s}
                className="font-mono text-xs px-3 py-1 border border-primary/40 rounded-full text-primary bg-card"
              >
                {s}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Text */}
        <div className="flex-1">
          <motion.p {...fadeUp} className="font-mono text-terminal-green text-sm mb-3">
            {">"} about_me.txt
          </motion.p>
          <motion.h2 {...fadeUp} transition={{ delay: 0.1 }} className="text-3xl lg:text-4xl text-foreground mb-6">
            Just a kid who got obsessed with coding
          </motion.h2>
          <motion.p {...fadeUp} transition={{ delay: 0.2 }} className="text-muted-foreground leading-relaxed mb-4">
            It started with a YouTube tutorial and a broken calculator app.
            Now I'm building full-stack applications that actually do something useful.
            I'm a high school student (Technik Programista) who treats coding as a hobby
            that got out of hand — and I wouldn't change that for anything.
          </motion.p>
          <motion.p {...fadeUp} transition={{ delay: 0.3 }} className="text-muted-foreground leading-relaxed">
            I love challenges that feel impossible at first.
            The moment something finally works after hours of debugging?
            That's why I do this.
          </motion.p>
        </div>
      </div>

      {/* Currently brewing */}
      <motion.div {...fadeUp} className="mb-20">
        <h3 className="text-2xl text-foreground text-center mb-8">Currently brewing ☕</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {brewingCards.map((card) => (
            <div
              key={card.label}
              className="bg-surface border-t-2 border-primary rounded-lg p-6"
            >
              <p className="font-mono text-xs text-muted-foreground uppercase mb-2">{card.label}</p>
              <p className="text-foreground text-lg">{card.value}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Timeline */}
      <motion.div {...fadeUp}>
        <h3 className="text-2xl text-foreground mb-10">How it started</h3>
        <div className="relative pl-8 border-l border-border/40 space-y-10">
          {timeline.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.4 }}
              className="relative"
            >
              <div className="absolute -left-[calc(1rem+5px)] top-1 w-3 h-3 rounded-full bg-primary animate-pulse-dot" />
              <p className="font-mono text-primary text-sm mb-1">{item.year}</p>
              <p className="text-foreground">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  </PageTransition>
);

export default About;
