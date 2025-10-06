import { motion } from 'framer-motion';
import { 
  Home, 
  MapPin, 
  Calendar, 
  ShoppingCart, 
  Users, 
  Trophy,
  Check,
  Circle
} from 'lucide-react';
import { Card } from '@/components/ui/card';

interface JourneyProgressProps {
  currentStep: 'home' | 'planning' | 'itinerary' | 'booking' | 'guides' | 'complete';
  className?: string;
}

export function JourneyProgress({ currentStep, className = '' }: JourneyProgressProps) {
  const steps = [
    {
      id: 'home',
      name: 'Start',
      icon: Home,
      description: 'Welcome & Inspiration',
      completed: ['planning', 'itinerary', 'booking', 'guides', 'complete'].includes(currentStep)
    },
    {
      id: 'planning',
      name: 'Plan',
      icon: MapPin,
      description: 'Trip Details & Preferences',
      completed: ['itinerary', 'booking', 'guides', 'complete'].includes(currentStep)
    },
    {
      id: 'itinerary',
      name: 'Itinerary',
      icon: Calendar,
      description: 'Day-by-day Schedule',
      completed: ['booking', 'guides', 'complete'].includes(currentStep)
    },
    {
      id: 'booking',
      name: 'Book',
      icon: ShoppingCart,
      description: 'Flights & Hotels',
      completed: ['guides', 'complete'].includes(currentStep)
    },
    {
      id: 'guides',
      name: 'Guides',
      icon: Users,
      description: 'Local Experts & Visas',
      completed: ['complete'].includes(currentStep)
    },
    {
      id: 'complete',
      name: 'Ready',
      icon: Trophy,
      description: 'Trip Complete!',
      completed: currentStep === 'complete'
    }
  ];

  return (
    <Card className={`bg-white/10 dark:bg-gray-900/50 backdrop-blur-sm border border-white/20 dark:border-gray-700/50 shadow-lg p-4 ${className}`}>
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Your Journey Progress</h3>
        <span className="text-xs text-gray-500 dark:text-gray-400">
          Step {steps.findIndex(step => step.id === currentStep) + 1} of {steps.length}
        </span>
      </div>
      
      <div className="flex items-center space-x-2 overflow-x-auto pb-2">
        {steps.map((step, index) => {
          const IconComponent = step.icon;
          const isActive = step.id === currentStep;
          const isCompleted = step.completed;
          const isConnected = index < steps.length - 1;

          return (
            <div key={step.id} className="flex items-center space-x-2 flex-shrink-0">
              <motion.div
                className={`
                  relative flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300
                  ${isActive 
                    ? 'bg-primary border-primary text-white scale-110 shadow-lg shadow-primary/50' 
                    : isCompleted 
                      ? 'bg-green-500 border-green-500 text-white shadow-md' 
                      : 'bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-400 dark:text-gray-500'
                  }
                `}
                whileHover={{ scale: 1.1 }}
                animate={isActive ? { 
                  boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
                  scale: 1.1 
                } : {}}
              >
                {isCompleted && !isActive ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <IconComponent className="w-5 h-5" />
                )}
                
                {isActive && (
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-primary"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}
              </motion.div>

              {isConnected && (
                <div 
                  className={`
                    w-8 h-0.5 transition-colors duration-300
                    ${isCompleted ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-600'}
                  `} 
                />
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-3">
        <div className="text-sm font-medium text-gray-900 dark:text-white">
          {steps.find(step => step.id === currentStep)?.name}
        </div>
        <div className="text-xs text-gray-600 dark:text-gray-400">
          {steps.find(step => step.id === currentStep)?.description}
        </div>
      </div>
    </Card>
  );
}