import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";

const projects = [
  {
    emoji: "🎵",
    title: "SpotiSort",
    tags: ["Spotify API", "React", "Node.js", "Express"],
    problem: "You have 47 playlists and zero idea what's in them.",
    description:
      "Connect your Spotify, sort/filter/merge playlists, drag & drop reorder, smart deduplication, mood-based grouping.",
    demo: "#",
    github: "https://github.com/CoffeeCod3r",
    dimmed: false,
  },
  // {
  //   emoji: "🐱",
  //   title: "CatBreedDetector",
  //   tags: ["Cat API", "React", "ML Image API"],
  //   problem: "What breed is my cat? Took me 3 days to find out. Now it takes 3 seconds.",
  //   description:
  //     "Upload any cat photo → AI identifies breed, shows temperament, fun facts, care tips.",
  //   demo: "#",
  //   github: "#",
  //   dimmed: false,
  // },
  // {
  //   emoji: "📱",
  //   title: "Mobile App",
  //   tags: ["React Native", "Expo", "in progress"],
  //   problem: "Something that needed to exist on your phone.",
  //   description:
  //     "A mobile app currently in development. React Native. Details coming soon.",
  //   demo: "",
  //   github: "",
  //   dimmed: false,
  //   opacity: 0.7,
  // },
  {
    emoji: "☕",
    title: "???",
    tags: ["cooking..."],
    problem: "The idea is good. The code is almost there.",
    description: "",
    demo: "",
    github: "https://github.com/CoffeeCod3r",
    dimmed: true,
  },
];

const Projects = () => (
  <PageTransition>
    <section className="pt-28 pb-20 px-6 max-w-5xl mx-auto">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-mono text-terminal-green text-sm mb-3"
      >
        {">"} projects.json
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-4xl lg:text-5xl text-foreground mb-3"
      >
        Things I actually built
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-muted-foreground mb-12"
      >
        Real problems. Real code. Real coffee consumed.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            className="bg-card border-l-4 border-primary rounded-lg p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_8px_30px_hsl(var(--primary)/0.15)]"
            //style={{ opacity: p.opacity ?? (p.dimmed ? 0.5 : 1) }}
          >
            <div className="flex flex-wrap gap-2 mb-4">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="font-mono text-xs px-3 py-1 border border-primary/30 text-muted-foreground rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">{p.emoji}</span>
              <h3 className="text-2xl text-foreground">{p.title}</h3>
            </div>
            <p className="font-display italic text-primary text-lg mb-3">
              {p.problem}
            </p>
            {p.description && (
              <p className="text-muted-foreground mb-6">{p.description}</p>
            )}
            {!p.dimmed && p.demo !== "" && (
              <div className="flex gap-4">
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm bg-primary text-primary-foreground px-4 py-2 rounded-md hover:scale-[1.03] transition-transform"
                >
                  Live Demo ↗
                </a>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm text-muted-foreground border border-border px-4 py-2 rounded-md hover:scale-[1.03] transition-transform"
                >
                  GitHub ↗
                </a>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  </PageTransition>
);

export default Projects;
