import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { BackgroundPaths } from '@/components/ui/background-paths';

const Chat = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSend = (msg?: string) => {
    const textToSend = msg || message;
    if (!textToSend.trim()) return;
    
    setIsLoading(true);
    setMessage('');
    
    // Simulate AI processing
    setTimeout(() => {
      alert(`🧞‍♂️ TripGenie: ${textToSend}\n\nYour magical travel assistant is working on creating the perfect itinerary for you!`);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-background via-background/95 to-primary/5">
      <BackgroundPaths />
      <div className="absolute inset-0 bg-background/2 z-10" />
      
      <div className="relative z-20 flex flex-col min-h-screen">
        <motion.div 
          className="flex items-center justify-between p-6 border-b border-border/10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Button
            variant="ghost"
            size="sm"
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
          
          <div className="flex items-center gap-2">
            <img 
              src="/tripgenie.png" 
              alt="TripGenie"
              className="h-8 w-auto"
            />
          </div>
        </motion.div>

        <div className="flex-1 flex flex-col items-center justify-center p-6">
          <motion.div
            className="text-center space-y-6 max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
              Chat with TripGenie ✨
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Your AI travel companion is ready to help plan your perfect adventure
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl w-full mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {[
              { text: "Plan a 7-day European adventure", color: "text-blue-500" },
              { text: "Find the perfect beach getaway", color: "text-cyan-500" },
              { text: "Discover hidden gems in Tokyo", color: "text-red-500" },
              { text: "Mountain hiking expedition", color: "text-green-500" }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="p-4 bg-card/50 backdrop-blur-sm border border-border rounded-lg cursor-pointer hover:border-primary/30 transition-all"
                onClick={() => handleSend(item.text)}
              >
                <p className={`font-medium ${item.color}`}>{item.text}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="w-full max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex gap-2 p-4 bg-card/50 backdrop-blur-sm border border-border rounded-lg">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ask TripGenie anything about your travel plans..."
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                disabled={isLoading}
                className="flex-1"
              />
              <Button
                onClick={() => handleSend()}
                disabled={isLoading || !message.trim()}
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Chat;