import { Suspense } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, Globe, Plane, MessageCircle, Leaf, 
  Bitcoin, Camera, Calendar, MapPin, Clock,
  Star, Users, CheckCircle, Zap, Shield,
  Smartphone, Languages, Heart, Award, Hotel,
  ShoppingCart
} from 'lucide-react';
import { Hero3DScene } from '@/components/Hero3DScene';
import { FeatureCard } from '@/components/FeatureCard';
import { HowItWorksStep } from '@/components/HowItWorksStep';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Remove the existing Navbar component since we now have TubelightNavbar */}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-secondary/10 to-accent/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        
        <Suspense fallback={<div className="absolute inset-0 bg-background" />}>
          <Hero3DScene />
        </Suspense>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Hero Logo with enhanced styling */}
            <motion.div 
              className="flex justify-center mb-8"
              initial={{ opacity: 0, scale: 0.8, rotateY: -10 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            >
              <div className="relative">
                <img 
                  src="/tripgenie.png" 
                  alt="TripGenie" 
                  className="h-44 w-auto filter drop-shadow-2xl transform hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-xl opacity-60 animate-pulse" />
              </div>
            </motion.div>
            
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-sm border border-primary/30 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Sparkles className="w-4 h-4 text-primary animate-bounce" />
              <span className="text-sm text-primary font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">AI-Powered Travel Assistant</span>
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            </motion.div>
            
            <motion.h1 
              className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient glow-primary leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Your Perfect Trip
              <br />
              <span className="bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent">Starts Here</span>
            </motion.h1>
            
            <motion.p 
              className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <span className="text-primary font-semibold">Smart AI planning</span> • <span className="text-secondary font-semibold">Instant bookings</span> • <span className="text-accent font-semibold">Magical experiences</span>
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
            >
              <Button 
                size="default" 
                className="bg-gradient-to-r from-primary via-secondary to-accent hover:scale-105 hover:shadow-2xl hover:shadow-primary/25 transition-all duration-300 text-base px-6 py-3 font-semibold relative overflow-hidden group"
                onClick={() => window.location.href = '/auth'}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Plane className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                Start Planning Free
              </Button>
              <Button 
                size="default" 
                variant="outline" 
                className="border-2 border-primary/40 hover:border-primary hover:bg-primary/10 hover:scale-105 transition-all duration-300 text-base px-6 py-3 font-semibold backdrop-blur-sm"
                onClick={() => window.location.href = '/chat'}
              >
                <MessageCircle className="w-4 h-4 mr-2 group-hover:bounce transition-all duration-300" />
                Try AI Chat
              </Button>
              <Button 
                size="default" 
                variant="outline" 
                className="border-2 border-green-500/40 hover:border-green-500 hover:bg-green-500/10 hover:scale-105 transition-all duration-300 text-base px-6 py-3 font-semibold backdrop-blur-sm"
                onClick={() => window.location.href = '/trip/demo/booking?type=flight'}
              >
                <ShoppingCart className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                Try Booking Demo
              </Button>
            </motion.div>

            <motion.div 
              className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.8 }}
            >
              <motion.div 
                className="text-center p-4 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105"
                whileHover={{ y: -5 }}
              >
                <div className="text-xl md:text-2xl font-bold text-primary mb-2 flex items-center justify-center gap-2">
                  <Globe className="w-5 h-5 text-primary" />
                  200+
                </div>
                <div className="text-xs font-medium text-muted-foreground">Destinations</div>
              </motion.div>
              <motion.div 
                className="text-center p-4 rounded-xl bg-gradient-to-br from-secondary/10 to-secondary/5 backdrop-blur-sm border border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover:scale-105"
                whileHover={{ y: -5 }}
              >
                <div className="text-xl md:text-2xl font-bold text-secondary mb-2 flex items-center justify-center gap-2">
                  <Zap className="w-5 h-5 text-secondary" />
                  50%
                </div>
                <div className="text-xs font-medium text-muted-foreground">Faster Planning</div>
              </motion.div>
              <motion.div 
                className="text-center p-4 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 backdrop-blur-sm border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:scale-105"
                whileHover={{ y: -5 }}
              >
                <div className="text-xl md:text-2xl font-bold text-accent mb-2 flex items-center justify-center gap-2">
                  <Languages className="w-5 h-5 text-accent" />
                  25+
                </div>
                <div className="text-xs font-medium text-muted-foreground">Languages</div>
              </motion.div>
              <motion.div 
                className="text-center p-4 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105"
                whileHover={{ y: -5 }}
              >
                <div className="text-xl md:text-2xl font-bold text-primary mb-2 flex items-center justify-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  24/7
                </div>
                <div className="text-xs font-medium text-muted-foreground">AI Support</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 mb-6"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Powerful Features</span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-gradient leading-tight">
              Everything You Need
              <br />
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">In One Place</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed">
              From <span className="text-primary font-semibold">AI-powered itineraries</span> to <span className="text-secondary font-semibold">crypto payments</span>, TripGenie has every feature to make your journey <span className="text-accent font-semibold">extraordinary</span>
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <FeatureCard
              icon={Sparkles}
              title="AI Trip Planner"
              description="Get custom day-by-day itineraries based on your budget, preferences, and travel style. Add breaks and adjust schedules easily."
              delay={0}
              badge="Smart AI"
              features={[
                "Personalized recommendations",
                "Budget optimization",
                "Schedule flexibility",
                "Real-time adjustments"
              ]}
            />
            <FeatureCard
              icon={Calendar}
              title="Book Everything"
              description="Reserve flights, hotels, and activities in one place. Real-time pricing and instant confirmation for seamless planning."
              delay={0.1}
              badge="All-in-One"
              features={[
                "Flight booking",
                "Hotel reservations",
                "Activity tickets",
                "Instant confirmation"
              ]}
            />
            <FeatureCard
              icon={Camera}
              title="Social Media Inspiration"
              description="Paste Instagram or X links and let AI add those exact places to your trip. Turn inspiration into reality instantly."
              delay={0.2}
              badge="Social Integration"
              features={[
                "Instagram integration",
                "TikTok support",
                "Location extraction",
                "Automatic scheduling"
              ]}
            />
            <FeatureCard
              icon={MessageCircle}
              title="24/7 AI Chat"
              description="Ask questions anytime in your language. Get recommendations, adjust plans, and find answers on the go."
              delay={0.3}
              badge="Always Available"
              features={[
                "Multi-language support",
                "Instant responses",
                "Travel expertise",
                "24/7 availability"
              ]}
            />
            <FeatureCard
              icon={Bitcoin}
              title="Crypto Payments"
              description="Pay with cryptocurrency like USDC for modern, secure transactions. Collect digital NFT souvenirs from your trips."
              delay={0.4}
              badge="Web3 Ready"
              features={[
                "USDC payments",
                "NFT souvenirs",
                "Secure transactions",
                "Blockchain verified"
              ]}
            />
            <FeatureCard
              icon={Leaf}
              title="Eco-Friendly Options"
              description="Choose sustainable flights and hotels. Offset your carbon footprint and travel responsibly."
              delay={0.5}
              badge="Sustainable"
              features={[
                "Carbon offsetting",
                "Eco-certified hotels",
                "Sustainable transport",
                "Green activities"
              ]}
            />
            <FeatureCard
              icon={Languages}
              title="Multi-Language Support"
              description="Chat and plan in 25+ languages including English, French, Spanish, Japanese, and more."
              delay={0.6}
              badge="Global"
              features={[
                "25+ languages",
                "Real-time translation",
                "Cultural adaptation",
                "Local insights"
              ]}
            />
            <FeatureCard
              icon={Shield}
              title="Visa & Document Help"
              description="Get visa requirements, travel document checklists, and local guide connections for worry-free travel."
              delay={0.7}
              badge="Travel Ready"
              features={[
                "Visa requirements",
                "Document checklists",
                "Local guides",
                "Embassy contacts"
              ]}
            />
            <FeatureCard
              icon={Smartphone}
              title="Real-Time Updates"
              description="Live weather, flight delays, and local events. Stay informed with instant notifications and updates."
              delay={0.8}
              badge="Live Data"
              features={[
                "Weather updates",
                "Flight notifications",
                "Local events",
                "Emergency alerts"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Booking Demo Section */}
      <section className="py-20 relative bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-gradient-to-r from-primary to-secondary text-white">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Try Booking Demo
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              Experience Seamless Booking
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Test our comprehensive booking system with flights, hotels, and activities. 
              Choose eco-friendly options and pay with crypto or traditional methods.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Flight Booking",
                description: "Browse flights with eco-friendly options and dual pricing",
                icon: Plane,
                color: "bg-blue-500",
                price: "$400",
                cryptoPrice: "$380 USDC",
                url: "/trip/demo/booking?type=flight",
                features: ["Low-emission aircraft", "Free WiFi", "Meal included"]
              },
              {
                title: "Hotel Booking", 
                description: "Eco-certified hotels with sustainable practices",
                icon: Hotel,
                color: "bg-green-500",
                price: "$100",
                cryptoPrice: "$95 USDC",
                url: "/trip/demo/booking?type=hotel",
                features: ["Solar powered", "Organic breakfast", "Green certified"]
              },
              {
                title: "Activity Booking",
                description: "Curated experiences with digital souvenirs",
                icon: Star,
                color: "bg-purple-500", 
                price: "$50",
                cryptoPrice: "$48 USDC",
                url: "/trip/demo/booking?type=activity",
                features: ["Skip-the-line", "Expert guide", "Digital souvenir"]
              }
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card className="p-6 bg-card/70 backdrop-blur-sm border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl group">
                    <div className="text-center mb-6">
                      <div className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>

                    <div className="text-center mb-4">
                      <div className="text-2xl font-bold text-primary mb-1">{item.price}</div>
                      <div className="text-sm text-accent">{item.cryptoPrice}</div>
                    </div>

                    <div className="space-y-2 mb-6">
                      {item.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <Button 
                      className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                      onClick={() => window.location.href = item.url}
                    >
                      <Zap className="w-4 h-4 mr-2" />
                      Try Demo Booking
                    </Button>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
              <Shield className="w-4 h-4" />
              Demo Mode - No real payments processed
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />
        
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gradient">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Planning your perfect trip is as easy as 1-2-3
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-12">
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

      {/* Testimonials Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
        
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
              Loved by Travelers
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See what our users say about their TravelAI experience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 card-glow">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "TravelAI planned my entire Tokyo trip in 5 minutes. The Instagram integration found that exact ramen shop I saw online!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary" />
                  <div>
                    <div className="font-medium">Sarah Chen</div>
                    <div className="text-sm text-muted-foreground">Travel Blogger</div>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-secondary/20 card-glow">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Paid with crypto, got eco-friendly options, and the 24/7 chat helped me when my flight got delayed. Amazing!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-accent" />
                  <div>
                    <div className="font-medium">Marcus Rodriguez</div>
                    <div className="text-sm text-muted-foreground">Tech Entrepreneur</div>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-accent/20 card-glow">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "The Paris itinerary was perfect for my family. Real-time weather updates and break scheduling made it stress-free."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-primary" />
                  <div>
                    <div className="font-medium">Emma Thompson</div>
                    <div className="text-sm text-muted-foreground">Family Traveler</div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gradient">
              Simple Pricing
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Start free, upgrade when you need more. No hidden fees, just transparent pricing.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 bg-card/50 backdrop-blur-sm border-border relative">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2">Explorer</h3>
                  <div className="text-3xl font-bold text-gradient mb-2">Free</div>
                  <p className="text-sm text-muted-foreground">Perfect for trying TravelAI</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span className="text-sm">3 AI trip plans per month</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span className="text-sm">Basic chat support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span className="text-sm">Social media integration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span className="text-sm">Standard booking</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline">
                  Get Started Free
                </Button>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/50 relative card-glow">
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-secondary">
                  Most Popular
                </Badge>
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2">Wanderer</h3>
                  <div className="text-3xl font-bold text-gradient mb-2">$19</div>
                  <p className="text-muted-foreground">Per month</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>Unlimited AI trip plans</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>24/7 priority chat</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>Crypto payment options</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>Eco-friendly preferences</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>NFT travel souvenirs</span>
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-primary to-secondary">
                  Start Free Trial
                </Button>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 bg-card/50 backdrop-blur-sm border-border relative">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2">Globetrotter</h3>
                  <div className="text-3xl font-bold text-gradient mb-2">$49</div>
                  <p className="text-muted-foreground">Per month</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>Everything in Wanderer</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>Local guide connections</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>Visa assistance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>Concierge booking service</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>Premium NFT collections</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline">
                  Choose Globetrotter
                </Button>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />
        
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
              Trusted by Travelers Worldwide
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">50K+</div>
              <div className="text-muted-foreground">Trips Planned</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-2xl md:text-3xl font-bold text-secondary mb-2">98%</div>
              <div className="text-muted-foreground">Happy Travelers</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-2xl md:text-3xl font-bold text-accent mb-2">200+</div>
              <div className="text-muted-foreground">Countries</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">$2M+</div>
              <div className="text-muted-foreground">Saved on Bookings</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/25 via-secondary/20 to-accent/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-background/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-accent/20 to-primary/20 border border-accent/30 mb-8"
            >
              <Star className="w-4 h-4 text-accent animate-spin" />
              <span className="text-sm font-bold text-accent">Join 50K+ Happy Travelers</span>
            </motion.div>
            
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-gradient glow-primary leading-tight">
              Ready to Explore
              <br />
              <span className="bg-gradient-to-r from-accent via-secondary to-primary bg-clip-text text-transparent">the World?</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed font-medium">
              Join thousands of travelers who plan smarter with AI. Your next <span className="text-primary font-bold">extraordinary adventure</span> starts here.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary via-secondary to-accent hover:scale-110 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 text-xl px-16 py-8 font-bold relative overflow-hidden group"
                onClick={() => window.location.href = '/auth'}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Plane className="w-7 h-7 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                Start Your Journey Free
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-primary/50 hover:border-primary hover:bg-primary/10 hover:scale-110 transition-all duration-300 text-xl px-16 py-8 font-bold backdrop-blur-sm"
                onClick={() => window.location.href = '/chat'}
              >
                <MessageCircle className="w-7 h-7 mr-3 group-hover:bounce transition-all duration-300" />
                Try AI Chat
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-accent" />
                <span>30% Faster Planning</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-primary" />
                <span>98% Satisfaction Rate</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-secondary" />
                <span>Award-Winning AI</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-accent" />
                <span>50K+ Happy Travelers</span>
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
