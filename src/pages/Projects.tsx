import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";

const projects = [
  {
    emoji: "🎵",
    title: "SpotiSort",
    tags: ["Spotify API", "React", "Node.js"],
    problem: "You have 47 playlists and zero idea what's in them.",
    description:
      "A web app that connects to your Spotify account and lets you sort, filter, merge and organize your playlists. Drag & drop interface, smart deduplication, mood-based sorting.",
    demo: "#",
    github: "#",
    dimmed: false,
  },
  {
    emoji: "🐱",
    title: "CatBreedDetector",
    tags: ["Cat API", "React", "Machine Learning API"],
    problem: "What breed is my cat? Now you can find out in 3 seconds.",
    description:
      "Upload a photo of any cat and the app identifies the breed using an image recognition API. Shows breed info, temperament, fun facts. Built because I was genuinely curious what breed my cat is.",
    demo: "#",
    github: "#",
    dimmed: false,
  },
  {
    emoji: "☕",
    title: "???",
    tags: ["in progress"],
    problem: "Something is being built... ☕",
    description: "",
    demo: "",
    github: "",
    dimmed: true,
  },
];

const Projects = () => (
  <PageTransition>
    <section className="pt-28 pb-20 px-6 max-w-4xl mx-auto">
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

      <div className="space-y-8">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className={`bg-card border-l-4 border-primary rounded-lg p-8 transition-transform hover:-translate-y-1 ${
              p.dimmed ? "opacity-50" : ""
            }`}
          >
            <div className="flex flex-wrap gap-2 mb-4">
              {p.tags.map((t) => (
                <span key={t} className="font-mono text-xs px-3 py-1 bg-surface text-muted-foreground rounded-full">
                  {t}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">{p.emoji}</span>
              <h3 className="text-2xl text-foreground">{p.title}</h3>
            </div>
            <p className="font-display italic text-primary text-lg mb-3">{p.problem}</p>
            {p.description && <p className="text-muted-foreground mb-6">{p.description}</p>}
            {!p.dimmed && (
              <div className="flex gap-4">
                <a href={p.demo} className="font-mono text-sm text-primary border border-primary/40 px-4 py-2 rounded-md hover:scale-[1.03] transition-transform">
                  Live demo →
                </a>
                <a href={p.github} className="font-mono text-sm text-muted-foreground border border-border px-4 py-2 rounded-md hover:scale-[1.03] transition-transform">
                  GitHub →
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
