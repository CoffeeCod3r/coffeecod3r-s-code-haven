import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import PageTransition from "@/components/PageTransition";
import CoffeeScene from "@/components/CoffeeScene";
import Ticker from "@/components/Ticker";

const typewriterText = "> hello_world.js";

const Home = () => {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(typewriterText.slice(0, i + 1));
      i++;
      if (i >= typewriterText.length) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <PageTransition>
      <section className="min-h-screen flex items-center pt-20 px-6">
        <div className="max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center gap-12">
          {/* Left */}
          <div className="flex-1 lg:w-[60%]">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-mono text-terminal-green text-sm mb-4"
            >
              {displayed}
              <span className="animate-pulse">|</span>
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-foreground leading-tight"
              style={{ fontSize: "clamp(3rem, 6vw, 6rem)" }}
            >
              Hi, I'm
              <br />
              <span className="text-primary">CoffeeCod3r</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-muted-foreground text-lg mt-6 max-w-lg"
            >
              16 y/o dev. I build things that solve real problems and break my sleep schedule.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="flex gap-4 mt-8"
            >
              <Link
                to="/projects"
                className="px-6 py-3 bg-primary text-primary-foreground font-mono text-sm rounded-md hover:scale-[1.03] transition-transform"
              >
                See my projects →
              </Link>
              <Link
                to="/about"
                className="px-6 py-3 border border-primary text-primary font-mono text-sm rounded-md hover:scale-[1.03] transition-transform"
              >
                About me
              </Link>
            </motion.div>
          </div>

          {/* Right - 3D */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex-1 lg:w-[40%] h-[300px] lg:h-[500px]"
          >
            <CoffeeScene />
          </motion.div>
        </div>
      </section>

      <Ticker />
    </PageTransition>
  );
};

export default Home;
