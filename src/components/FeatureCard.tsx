import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { ArrowRight, Star } from 'lucide-react';
import { useState } from 'react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
  badge?: string;
  features?: string[];
  color?: string;
}

export const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  delay = 0, 
  badge, 
  features = [],
  color = "primary"
}: FeatureCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const colorClasses = {
    primary: {
      gradient: "from-primary to-secondary",
      text: "text-primary",
      border: "border-primary/20 hover:border-primary/50",
      glow: "group-hover:shadow-primary/20"
    },
    secondary: {
      gradient: "from-secondary to-accent",
      text: "text-secondary",
      border: "border-secondary/20 hover:border-secondary/50",
      glow: "group-hover:shadow-secondary/20"
    },
    accent: {
      gradient: "from-accent to-primary",
      text: "text-accent",
      border: "border-accent/20 hover:border-accent/50",
      glow: "group-hover:shadow-accent/20"
    }
  };
  
  const currentColor = colorClasses[color as keyof typeof colorClasses] || colorClasses.primary;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateX: 10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ 
        duration: 0.8, 
        delay,
        ease: "easeOut"
      }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.05, 
        y: -10,
        rotateX: -2,
        transition: { duration: 0.3 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group perspective-1000"
    >
      {/* Glow Effect */}
      <div className={`absolute inset-0 bg-gradient-to-br ${currentColor.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-500 scale-105`} />
      
      {/* Background Particles Effect */}
      <div className="absolute inset-0 overflow-hidden rounded-3xl">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            initial={{ 
              x: Math.random() * 300, 
              y: Math.random() * 300,
              opacity: 0
            }}
            animate={isHovered ? {
              x: Math.random() * 300,
              y: Math.random() * 300,
              opacity: [0, 1, 0]
            } : {}}
            transition={{
              duration: 2 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.2
            }}
          />
        ))}
      </div>
      
      <Card className={`relative bg-card/70 backdrop-blur-lg border-2 ${currentColor.border} rounded-3xl p-8 h-full transition-all duration-500 ${currentColor.glow} group-hover:shadow-2xl overflow-hidden`}>
        {/* Badge */}
        {badge && (
          <motion.div
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: delay + 0.3, duration: 0.5 }}
          >
            <Badge className={`absolute -top-3 -right-3 bg-gradient-to-r ${currentColor.gradient} text-white text-xs px-3 py-1 shadow-lg`}>
              <Star className="w-3 h-3 mr-1" />
              {badge}
            </Badge>
          </motion.div>
        )}
        
        {/* Icon */}
        <motion.div 
          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${currentColor.gradient} p-[3px] mb-6 group-hover:scale-110 transition-transform duration-300`}
          whileHover={{ rotate: [0, -10, 10, 0] }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
            <Icon className={`w-8 h-8 ${currentColor.text} group-hover:scale-110 transition-transform duration-300`} />
          </div>
        </motion.div>
        
        {/* Content */}
        <div className="space-y-4">
          <motion.h3 
            className="text-2xl font-bold text-foreground group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-foreground group-hover:to-primary transition-all duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: delay + 0.2 }}
          >
            {title}
          </motion.h3>
          
          <motion.p 
            className="text-muted-foreground leading-relaxed text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: delay + 0.4 }}
          >
            {description}
          </motion.p>
          
          {/* Feature List */}
          {features.length > 0 && (
            <motion.div 
              className="space-y-2 pt-2"
              initial={{ opacity: 0, height: 0 }}
              animate={isHovered ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                  initial={{ x: -20, opacity: 0 }}
                  animate={isHovered ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${currentColor.gradient}`} />
                  {feature}
                </motion.div>
              ))}
            </motion.div>
          )}
          
          {/* Learn More Link */}
          <motion.div 
            className="pt-4"
            initial={{ opacity: 0 }}
            animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className={`inline-flex items-center gap-2 text-sm font-medium ${currentColor.text} cursor-pointer group-hover:gap-3 transition-all duration-300`}>
              Learn More
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </motion.div>
        </div>
      </Card>
    </motion.div>
  );
};
