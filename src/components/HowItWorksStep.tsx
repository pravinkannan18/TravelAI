import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface HowItWorksStepProps {
  icon: LucideIcon;
  step: number;
  title: string;
  description: string;
  delay?: number;
}

export const HowItWorksStep = ({ icon: Icon, step, title, description, delay = 0 }: HowItWorksStepProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="flex gap-6 items-start"
    >
      <div className="relative flex-shrink-0">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary p-[2px]">
          <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center">
            <Icon className="w-8 h-8 text-primary" />
          </div>
        </div>
        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shadow-lg">
          {step}
        </div>
      </div>
      <div className="flex-1 pt-2">
        <h3 className="text-2xl font-bold mb-2 text-foreground">{title}</h3>
        <p className="text-muted-foreground leading-relaxed text-lg">{description}</p>
      </div>
    </motion.div>
  );
};
