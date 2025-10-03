import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { Badge } from './ui/badge';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
  badge?: string;
}

export const FeatureCard = ({ icon: Icon, title, description, delay = 0, badge }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 h-full card-glow hover:border-primary/50 transition-all duration-300">
        {badge && (
          <Badge className="absolute -top-2 -right-2 bg-gradient-to-r from-accent to-secondary text-xs">
            {badge}
          </Badge>
        )}
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary p-[2px] mb-4">
          <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
            <Icon className="w-7 h-7 text-primary" />
          </div>
        </div>
        <h3 className="text-xl font-bold mb-3 text-foreground">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};
