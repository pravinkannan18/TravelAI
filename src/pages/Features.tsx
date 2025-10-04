import { motion } from 'framer-motion';
import { 
  Sparkles, Calendar, Camera, MessageCircle, Bitcoin, Leaf,
  Languages, Shield, Smartphone, ArrowRight, CheckCircle,
  Globe, Users, Star, Zap, Heart, Award, MapPin, Clock,
  Plane, Coffee, Mountain, TreePine, Waves, Music, ShoppingBag
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FeatureCard } from '@/components/FeatureCard';

const Features = () => {
  const coreFeatures = [
    {
      icon: Sparkles,
      title: "AI Trip Planner",
      description: "Custom day-by-day itineraries based on your budget and preferences.",
      badge: "Smart AI",
      features: [
        "Personalized recommendations",
        "Budget optimization",
        "Weather-aware planning",
        "Real-time adjustments"
      ]
    },
    {
      icon: Calendar,
      title: "Book Everything",
      description: "Reserve flights, hotels, and activities in one place with instant confirmation.",
      badge: "All-in-One",
      features: [
        "Flight booking with best prices",
        "Hotel reservations with reviews",
        "Activity tickets and tours",
        "Instant confirmation"
      ]
    },
    {
      icon: Camera,
      title: "Social Media Inspiration",
      description: "Paste Instagram, TikTok, or X links and let AI add those places to your trip.",
      badge: "Social Integration",
      features: [
        "Instagram post location extraction",
        "TikTok video place identification",
        "Twitter/X location link processing",
        "Automatic itinerary integration",
        "Photo-based location recognition",
        "Influencer travel route recreation"
      ]
    },
    {
      icon: MessageCircle,
      title: "24/7 AI Chat",
      description: "Ask questions anytime in your language. Get expert travel recommendations instantly.",
      badge: "Always Available",
      features: [
        "Multi-language support (25+ languages)",
        "Instant responses with travel expertise",
        "Real-time plan modifications",
        "Local recommendations and tips",
        "Emergency assistance and support",
        "Cultural insights and etiquette guidance"
      ]
    },
    {
      icon: Bitcoin,
      title: "Crypto Payments",
      description: "Pay with cryptocurrency like USDC. Collect unique digital NFT souvenirs.",
      badge: "Web3 Ready",
      features: [
        "USDC and major crypto payments",
        "Unique NFT travel souvenirs",
        "Blockchain-verified transactions",
        "Decentralized payment security",
        "Travel milestone NFT rewards",
        "Crypto loyalty program benefits"
      ]
    },
    {
      icon: Leaf,
      title: "Eco-Friendly Options",
      description: "Choose sustainable flights and hotels. Offset your carbon footprint automatically.",
      badge: "Sustainable",
      features: [
        "Automatic carbon footprint offsetting",
        "Eco-certified hotel partnerships",
        "Sustainable transportation options",
        "Green activity recommendations",
        "Environmental impact tracking",
        "Verified sustainability certifications"
      ]
    }
  ];

  const additionalFeatures = [
    {
      icon: Languages,
      title: "Multi-Language Support",
      description: "Chat and plan in 25+ languages with real-time translation and cultural adaptation.",
      features: ["25+ languages", "Real-time translation", "Cultural adaptation", "Local insights"]
    },
    {
      icon: Shield,
      title: "Visa & Document Help",
      description: "Get visa requirements, travel document checklists, and local guide connections.",
      features: ["Visa requirements", "Document checklists", "Local guides", "Embassy contacts"]
    },
    {
      icon: Smartphone,
      title: "Real-Time Updates",
      description: "Live weather, flight delays, and local events with instant notifications.",
      features: ["Weather updates", "Flight notifications", "Local events", "Emergency alerts"]
    }
  ];

  const stats = [
    { icon: Globe, number: "200+", label: "Destinations Covered" },
    { icon: Users, number: "50K+", label: "Happy Travelers" },
    { icon: Star, number: "98%", label: "Satisfaction Rate" },
    { icon: Zap, number: "50%", label: "Faster Planning" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 mb-8"
            >
              <Sparkles className="w-5 h-5 text-primary animate-bounce" />
              <span className="text-sm font-semibold text-primary">Complete Feature Overview</span>
            </motion.div>
            
            <motion.h1 
              className="display-text mb-8 text-gradient leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Powerful Features for
              <br />
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Smart Travel</span>
            </motion.h1>
            
            <motion.p 
              className="body-large text-muted-foreground mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Discover how TripGenie's AI-powered features revolutionize the way you plan, book, and experience travel. 
              From intelligent itineraries to crypto payments, we've built everything you need for the perfect journey.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button 
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-all duration-300 px-8 py-4"
                onClick={() => window.location.href = '/plan-trip'}
              >
                <Plane className="w-5 h-5 mr-2" />
                Try Features Now
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-primary/30 hover:border-primary px-8 py-4"
                onClick={() => window.location.href = '/dashboard'}
              >
                Get Started Free
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Icon className="w-8 h-8 mx-auto mb-4 text-primary" />
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
              Core Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The essential tools that make TripGenie the most advanced travel planning platform
            </p>
          </motion.div>

          <div className="space-y-20">
            {coreFeatures.map((feature, index) => {
              const Icon = feature.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}
                >
                  <div className={`space-y-6 ${!isEven ? 'lg:col-start-2' : ''}`}>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary p-[3px]">
                        <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
                          <Icon className="w-8 h-8 text-primary" />
                        </div>
                      </div>
                      <Badge className="bg-gradient-to-r from-primary to-secondary text-white">
                        {feature.badge}
                      </Badge>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-gradient">{feature.title}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">{feature.description}</p>
                    
                    <div className="space-y-3">
                      {feature.features.map((item, itemIndex) => (
                        <motion.div
                          key={itemIndex}
                          className="flex items-center gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: itemIndex * 0.1, duration: 0.5 }}
                          viewport={{ once: true }}
                        >
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-foreground">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  <motion.div
                    className={`${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="p-8 bg-gradient-to-br from-card/70 to-card/30 backdrop-blur-lg border-2 border-primary/20 shadow-2xl">
                      <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center">
                        <Icon className="w-24 h-24 text-primary/60" />
                      </div>
                    </Card>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
              Additional Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              More powerful tools to enhance your travel experience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                features={feature.features}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/15 to-accent/20" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8 text-gradient">
              Ready to Experience
              <br />
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">These Features?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Join thousands of travelers who are already using TripGenie's advanced features to plan better trips faster.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-primary via-secondary to-accent hover:scale-110 transition-all duration-300 text-lg px-12 py-6"
                onClick={() => window.location.href = '/plan-trip'}
              >
                <Sparkles className="w-6 h-6 mr-3" />
                Start Planning Now
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-primary/50 hover:border-primary text-lg px-12 py-6"
                onClick={() => window.location.href = '/'}
              >
                <ArrowRight className="w-6 h-6 mr-3" />
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Features;