import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Plane } from 'lucide-react';

export const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border"
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <Plane className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold text-gradient">TravelAI</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-foreground hover:text-primary transition-colors">Features</a>
          <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors">How It Works</a>
          <a href="#pricing" className="text-foreground hover:text-primary transition-colors">Pricing</a>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden sm:inline-flex">Sign In</Button>
          <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
            Get Started
          </Button>
        </div>
      </div>
    </motion.nav>
  );
};
