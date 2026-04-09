import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import PageTransition from "@/components/PageTransition";

const contactLinks = [
  {
    icon: "✉",
    label: "Email",
    value: "coffee.cod3r.business@gmail.com",
    action: "copy",
  },
  {
    icon: "⌥",
    label: "GitHub",
    value: "github.com/coffeecod3r",
    href: "https://github.com/coffeecod3r",
  },
  {
    icon: "in",
    label: "LinkedIn",
    value: "/in/coffeecod3r",
    href: "https://linkedin.com/in/coffeecod3r",
  },
];

const Contact = () => {
  const [amberFlash, setAmberFlash] = useState(false);
  const [buffer, setBuffer] = useState("");

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const next = (buffer + e.key).slice(-6);
      setBuffer(next);
      if (next === "coffee") {
        setAmberFlash(true);
        toast("☕ Good taste. You passed the vibe check.");
        setTimeout(() => setAmberFlash(false), 600);
        setBuffer("");
      } else if (next.endsWith("debug")) {
        toast("console.log('help') — classic.");
        setBuffer("");
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [buffer]);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast("Copied! ☕");
  };

  return (
    <PageTransition>
      <div
        className="transition-colors duration-500"
        style={{
          backgroundColor: amberFlash ? "hsl(25, 52%, 15%)" : "transparent",
        }}
      >
        <section className="pt-28 pb-20 px-6 max-w-xl mx-auto min-h-screen">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-5xl text-foreground text-center mb-3"
          >
            Got a cool idea?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-center mb-12"
          >
            Or just want to talk about code, cats, or coffee. I respond.
            Eventually.
          </motion.p>

          <div className="space-y-4">
            {contactLinks.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                {link.action === "copy" ? (
                  <button
                    onClick={() => handleCopy(link.value)}
                    className="w-full text-left bg-card border-l-4 border-primary rounded-lg p-5 flex items-center gap-4 hover:bg-primary/10 transition-colors group"
                  >
                    <span className="text-xl w-8">{link.icon}</span>
                    <div>
                      <p className="font-mono text-sm text-muted-foreground">
                        {link.label}
                      </p>
                      <p className="font-mono text-foreground group-hover:text-primary transition-colors">
                        {link.value}
                      </p>
                    </div>
                  </button>
                ) : (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-card border-l-4 border-primary rounded-lg p-5 flex items-center gap-4 hover:bg-primary/10 transition-colors group"
                  >
                    <span className="text-xl w-8 font-mono font-bold">
                      {link.icon}
                    </span>
                    <div>
                      <p className="font-mono text-sm text-muted-foreground">
                        {link.label}
                      </p>
                      <p className="font-mono text-foreground group-hover:text-primary transition-colors">
                        {link.value}
                      </p>
                    </div>
                  </a>
                )}
              </motion.div>
            ))}
          </div>

          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex items-center justify-center gap-2 mt-10"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-terminal-green animate-pulse" />
            <span className="font-mono text-sm text-foreground">
              Open to interesting projects & collaborations
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-muted-foreground text-center text-sm mt-8 font-mono"
          >
            19 y/o dev, not an agency. INF.03 ✓ INF.04 ✓ · Response: 2hrs–2days.
          </motion.p>
        </section>
      </div>
    </PageTransition>
  );
};

export default Contact;
