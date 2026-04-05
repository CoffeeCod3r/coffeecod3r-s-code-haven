import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import PageTransition from "@/components/PageTransition";

const contactLinks = [
  {
    icon: "✉",
    label: "Email",
    value: "coffeecod3r@example.com",
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
        toast("☕ Good taste.");
        setTimeout(() => setAmberFlash(false), 600);
        setBuffer("");
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [buffer]);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast("Copied to clipboard!");
  };

  return (
    <PageTransition>
      <div
        className="transition-colors duration-500"
        style={{ backgroundColor: amberFlash ? "hsl(25, 52%, 15%)" : "transparent" }}
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
            Or just want to talk about code, cats, or coffee.
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
                      <p className="font-mono text-sm text-muted-foreground">{link.label}</p>
                      <p className="font-mono text-foreground group-hover:text-primary transition-colors">{link.value}</p>
                    </div>
                  </button>
                ) : (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-card border-l-4 border-primary rounded-lg p-5 flex items-center gap-4 hover:bg-primary/10 transition-colors group"
                  >
                    <span className="text-xl w-8 font-mono font-bold">{link.icon}</span>
                    <div>
                      <p className="font-mono text-sm text-muted-foreground">{link.label}</p>
                      <p className="font-mono text-foreground group-hover:text-primary transition-colors">{link.value}</p>
                    </div>
                  </a>
                )}
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-muted-foreground text-center text-sm mt-12 font-mono"
          >
            I'm a student, not an agency. Response time: somewhere between 2 hours and 2 days.
          </motion.p>
        </section>
      </div>
    </PageTransition>
  );
};

export default Contact;
