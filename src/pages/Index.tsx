import { Suspense } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, Globe, Plane, MessageCircle, Leaf, 
  Bitcoin, Camera, Calendar, MapPin, Clock 
} from 'lucide-react';
import { Hero3DScene } from '@/components/Hero3DScene';
import { FeatureCard } from '@/components/FeatureCard';
import { HowItWorksStep } from '@/components/HowItWorksStep';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
        
        <Suspense fallback={<div className="absolute inset-0 bg-background" />}>
          <Hero3DScene />
        </Suspense>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Sparkles className="w-4 h-4 text-primary animate-glow-pulse" />
              <span className="text-sm text-primary font-medium">AI-Powered Travel Planning</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-gradient glow-primary">
              Plan Your Dream
              <br />
              Trip in Seconds
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
              Let AI create personalized travel itineraries with flights, hotels, and activities. 
              Book everything in one place, pay with crypto, and get eco-friendly options.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-lg px-8 py-6">
                <Plane className="w-5 h-5 mr-2" />
                Start Planning Free
              </Button>
              <Button size="lg" variant="outline" className="border-primary/30 hover:border-primary text-lg px-8 py-6">
                <MessageCircle className="w-5 h-5 mr-2" />
                Try AI Chat
              </Button>
            </div>

            <div className="mt-12 flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-primary" />
                <span>200+ Destinations</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-secondary" />
                <span>AI-Powered</span>
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="w-5 h-5 text-accent" />
                <span>Eco-Friendly</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
              Everything You Need
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From AI itineraries to crypto payments, TravelAI has all the features to make your trip unforgettable
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={Sparkles}
              title="AI Trip Planner"
              description="Get custom day-by-day itineraries based on your budget, preferences, and travel style. Add breaks and adjust schedules easily."
              delay={0}
            />
            <FeatureCard
              icon={Calendar}
              title="Book Everything"
              description="Reserve flights, hotels, and activities in one place. Real-time pricing and instant confirmation for seamless planning."
              delay={0.1}
            />
            <FeatureCard
              icon={Camera}
              title="Social Media Inspiration"
              description="Paste Instagram or X links and let AI add those exact places to your trip. Turn inspiration into reality instantly."
              delay={0.2}
            />
            <FeatureCard
              icon={MessageCircle}
              title="24/7 AI Chat"
              description="Ask questions anytime in your language. Get recommendations, adjust plans, and find answers on the go."
              delay={0.3}
            />
            <FeatureCard
              icon={Bitcoin}
              title="Crypto Payments"
              description="Pay with cryptocurrency like USDC for modern, secure transactions. Collect digital NFT souvenirs from your trips."
              delay={0.4}
            />
            <FeatureCard
              icon={Leaf}
              title="Eco-Friendly Options"
              description="Choose sustainable flights and hotels. Offset your carbon footprint and travel responsibly."
              delay={0.5}
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />
        
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Planning your perfect trip is as easy as 1-2-3
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-16">
            <HowItWorksStep
              icon={MapPin}
              step={1}
              title="Tell Us Your Dream Trip"
              description="Enter your destination, dates, budget, and preferences. Want adventure in Paris? Food tours in Tokyo? We've got you covered."
              delay={0}
            />
            <HowItWorksStep
              icon={Sparkles}
              step={2}
              title="AI Creates Your Perfect Plan"
              description="Our AI builds a custom itinerary with flights, hotels, and activities. Add social media inspiration and eco-friendly options."
              delay={0.1}
            />
            <HowItWorksStep
              icon={Calendar}
              step={3}
              title="Book & Go"
              description="Review, adjust, and book everything in one click. Pay with card or crypto, then get ready for an amazing adventure!"
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient glow-primary">
              Ready to Explore the World?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Join thousands of travelers who plan smarter with AI. Your next adventure starts here.
            </p>
            
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-lg px-12 py-7">
              <Plane className="w-6 h-6 mr-2" />
              Start Your Journey Free
            </Button>

            <div className="mt-8 flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-accent" />
                <span>30% Faster Planning</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                <span>AI-Powered</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-secondary" />
                <span>Global Coverage</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Plane className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gradient">TravelAI</span>
            </div>
            
            <p className="text-muted-foreground text-sm">
              © 2025 TravelAI. Making travel planning effortless with AI.
            </p>
            
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
