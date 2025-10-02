import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Send, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

const Chat = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      navigate('/auth');
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const chatUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/ai-travel-chat`;
      const response = await fetch(chatUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({
          messages: [...messages, userMessage],
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const reader = response.body?.getReader();
      if (!reader) throw new Error('No reader available');

      const decoder = new TextDecoder();
      let assistantMessage = '';
      let buffer = '';

      setMessages(prev => [...prev, { role: 'assistant', content: '' }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() || '';

        for (let line of lines) {
          if (line.endsWith('\r')) line = line.slice(0, -1);
          if (line.startsWith(':') || line.trim() === '') continue;
          if (!line.startsWith('data: ')) continue;

          const jsonStr = line.slice(6).trim();
          if (jsonStr === '[DONE]') continue;

          try {
            const parsed = JSON.parse(jsonStr);
            const content = parsed.choices?.[0]?.delta?.content;
            if (content) {
              assistantMessage += content;
              setMessages(prev => {
                const newMessages = [...prev];
                newMessages[newMessages.length - 1] = {
                  role: 'assistant',
                  content: assistantMessage,
                };
                return newMessages;
              });
            }
          } catch (e) {
            // Ignore parsing errors for partial JSON
          }
        }
      }
    } catch (error: any) {
      console.error('Chat error:', error);
      toast({
        title: 'Error',
        description: 'Failed to send message. Please try again.',
        variant: 'destructive',
      });
      setMessages(prev => prev.slice(0, -1));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen flex flex-col">
      <nav className="border-b border-border bg-card/50 backdrop-blur-xl flex-shrink-0">
        <div className="container mx-auto px-6 py-4">
          <Button variant="ghost" onClick={() => navigate('/dashboard')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Button>
        </div>
      </nav>

      <div className="flex-1 overflow-hidden flex flex-col">
        <div className="container mx-auto px-6 py-6 flex-1 flex flex-col max-w-4xl">
          <div className="mb-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-3">
              <Sparkles className="w-4 h-4 text-primary animate-glow-pulse" />
              <span className="text-sm text-primary font-medium">24/7 AI Travel Assistant</span>
            </div>
            <h1 className="text-3xl font-bold text-gradient">Chat with TravelAI</h1>
            <p className="text-muted-foreground mt-2">Ask me anything about your trips!</p>
          </div>

          <div className="flex-1 overflow-y-auto space-y-4 mb-6">
            {messages.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground mb-6">Start a conversation! Ask me about:</p>
                <div className="grid md:grid-cols-2 gap-3 max-w-2xl mx-auto">
                  {[
                    'Best time to visit Paris',
                    'Budget-friendly activities in Tokyo',
                    'Eco-friendly hotels in Bali',
                    'Hidden gems in New York',
                  ].map((example) => (
                    <Card
                      key={example}
                      className="p-4 cursor-pointer hover:border-primary/50 transition-all text-sm"
                      onClick={() => setInput(example)}
                    >
                      {example}
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {messages.map((msg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <Card
                  className={`max-w-[80%] p-4 ${
                    msg.role === 'user'
                      ? 'bg-gradient-to-r from-primary to-secondary text-white'
                      : 'bg-card/50 backdrop-blur-sm border-border'
                  }`}
                >
                  <p className="whitespace-pre-wrap">{msg.content}</p>
                </Card>
              </motion.div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <Card className="p-4 bg-card/50 backdrop-blur-sm">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </Card>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="flex gap-3 items-end">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Ask me anything about travel..."
              className="flex-1"
              disabled={loading}
            />
            <Button
              onClick={sendMessage}
              disabled={loading || !input.trim()}
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
