import { motion } from "framer-motion";

const LoadingScreen = () => (
  <motion.div
    initial={{ opacity: 1 }}
    animate={{ opacity: 0 }}
    transition={{ delay: 1.5, duration: 0.5 }}
    onAnimationComplete={(def: any) => {
      // handled by parent
    }}
    className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center"
  >
    {/* Coffee cup */}
    <div className="relative w-16 h-20 border-2 border-primary rounded-b-xl mb-4 overflow-hidden">
      <div className="brew-fill absolute bottom-0 left-0 right-0 bg-primary/60 rounded-b-lg" />
      {/* Handle */}
      <div className="absolute -right-3 top-2 w-3 h-8 border-2 border-primary rounded-r-full" />
    </div>
    <p className="font-mono text-sm text-primary animate-pulse">brewing...</p>
  </motion.div>
);

export default LoadingScreen;
