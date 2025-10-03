import React, { useState } from 'react';import React, { useState } from 'react';import React, { useState } from 'react';

import { motion } from 'framer-motion';

import { ArrowLeft, Sparkles } from 'lucide-react';import { motion } from 'framer-motion';import { motion } from 'framer-motion';

import { FaPlane, FaUmbrellaBeach } from 'react-icons/fa';

import { MdLocationOn } from 'react-icons/md';import { ArrowLeft, Sparkles } from 'lucide-react';import { ArrowLeft, Sparkles, FaPlane, FaUmbrellaBeach } from 'lucide-react';

import { GiMountainRoad } from 'react-icons/gi';

import { Button } from '@/components/ui/button';import { FaPlane, FaUmbrellaBeach } from 'react-icons/fa';import { FaPlane as FaPlaneIcon, FaUmbrellaBeach as FaBeach } from 'react-icons/fa';

import { BackgroundPaths } from '@/components/ui/background-paths';

import { PromptInputBox } from '@/components/ui/ai-prompt-box';import { MdLocationOn } from 'react-icons/md';import { MdLocationOn, MdTravelExplore } from 'react-icons/md';



const Chat = () => {import { GiMountainRoad } from 'react-icons/gi';import { GiMountainRoad, GiJapan } from 'react-icons/gi';

  const [isLoading, setIsLoading] = useState(false);

import { Button } from '@/components/ui/button';import { Button } from '@/components/ui/button';

  const handleSend = (message: string, files?: File[]) => {

    setIsLoading(true);import { BackgroundPaths } from '@/components/ui/background-paths';import { BackgroundPaths } from '@/components/ui/background-paths';

    setTimeout(() => {

      alert(`🧞‍♂️ TripGenie: ${message}\n${files && files.length > 0 ? `\nWith ${files.length} file(s) attached` : ''}\n\nYour magical travel assistant is working on creating the perfect itinerary for you!`);import { PromptInputBox } from '@/components/ui/ai-prompt-box';import { PromptInputBox } from '@/components/ui/ai-prompt-box';

      setIsLoading(false);

    }, 2000);

  };

const Chat = () => {const Chat = () => {

  return (

    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-background via-background/95 to-primary/5">  const [isLoading, setIsLoading] = useState(false);  const [isLoading, setIsLoading] = useState(false);

      <BackgroundPaths />

      <div className="absolute inset-0 bg-background/2 z-10" />

      

      <div className="relative z-20 flex flex-col min-h-screen">  const handleSend = (message: string, files?: File[]) => {  const handleSend = (message: string, files?: File[]) => {

        <motion.div 

          className="flex items-center justify-between p-6 border-b border-border/10"    setIsLoading(true);    setIsLoading(true);

          initial={{ opacity: 0, y: -20 }}

          animate={{ opacity: 1, y: 0 }}    // Simulate AI processing    // Simulate AI processing

          transition={{ duration: 0.6 }}

        >    setTimeout(() => {    setTimeout(() => {

          <Button

            variant="ghost"      alert(`🧞‍♂️ TripGenie: ${message}\n${files && files.length > 0 ? `\nWith ${files.length} file(s) attached` : ''}\n\nYour magical travel assistant is working on creating the perfect itinerary for you!`);      alert(`🧞‍♂️ TripGenie: ${message}\n${files && files.length > 0 ? `\nWith ${files.length} file(s) attached` : ''}\n\nYour magical travel assistant is working on creating the perfect itinerary for you!`);

            size="sm"

            onClick={() => window.history.back()}      setIsLoading(false);      setIsLoading(false);

            className="flex items-center gap-2 text-muted-foreground hover:text-foreground"

          >    }, 2000);    }, 2000);

            <ArrowLeft className="w-4 h-4" />

            Back  };  };

          </Button>

          

          <div className="flex items-center gap-2">

            <img   return (  return (

              src="/tripgenie.png" 

              alt="TripGenie"     <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-background via-background/95 to-primary/5">    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-background via-background/95 to-primary/5">

              className="h-8 w-auto"

            />      {/* 3D Background Animation */}      {/* 3D Background Animation */}

          </div>

        </motion.div>      <BackgroundPaths />      <BackgroundPaths />



        <div className="flex-1 flex flex-col items-center justify-center p-6 space-y-8">            

          <motion.div 

            className="text-center space-y-6 max-w-2xl"      {/* Dark overlay for better text readability */}      {/* Dark overlay for better text readability */}

            initial={{ opacity: 0, y: 30 }}

            animate={{ opacity: 1, y: 0 }}      <div className="absolute inset-0 bg-background/2 z-10" />      <div className="absolute inset-0 bg-background/2 z-10" />

            transition={{ duration: 0.8, delay: 0.2 }}

          >            

            <div className="flex justify-center mb-4">

              <div className="relative">      {/* Content */}      {/* Content */}

                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" />

                <div className="relative w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">      <div className="relative z-20 flex flex-col min-h-screen">      <div className="relative z-20 flex flex-col min-h-screen">

                  <Sparkles className="w-8 h-8 text-white animate-glow-pulse" />

                </div>        {/* Header */}        {/* Header */}

              </div>

            </div>        <motion.div         <motion.div 

            

            <h1 className="text-3xl md:text-4xl font-bold text-gradient mb-4">          className="flex items-center justify-between p-6 border-b border-border/10"          className="flex items-center justify-between p-6 border-b border-border/10"

              Your AI Travel Genie

            </h1>          initial={{ opacity: 0, y: -20 }}          initial={{ opacity: 0, y: -20 }}

            

            <p className="text-lg text-muted-foreground">          animate={{ opacity: 1, y: 0 }}          animate={{ opacity: 1, y: 0 }}

              Tell me about your dream destination and I'll create magical travel experiences just for you!

            </p>          transition={{ duration: 0.6 }}          transition={{ duration: 0.6 }}

          </motion.div>

        >        >

          <motion.div 

            className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl w-full mb-8"          <Button          <Button

            initial={{ opacity: 0, y: 20 }}

            animate={{ opacity: 1, y: 0 }}            variant="ghost"            variant="ghost"

            transition={{ duration: 0.8, delay: 0.4 }}

          >            size="sm"            size="sm"

            {[

              { icon: FaPlane, text: "Plan a 7-day European adventure", color: "text-blue-500" },            onClick={() => window.history.back()}            onClick={() => window.history.back()}

              { icon: FaUmbrellaBeach, text: "Find the perfect beach getaway", color: "text-cyan-500" },

              { icon: MdLocationOn, text: "Discover hidden gems in Tokyo", color: "text-red-500" },            className="flex items-center gap-2 text-muted-foreground hover:text-foreground"            className="flex items-center gap-2 text-muted-foreground hover:text-foreground"

              { icon: GiMountainRoad, text: "Mountain hiking expedition", color: "text-green-500" }

            ].map((item, index) => (          >          >

              <motion.div

                key={index}            <ArrowLeft className="w-4 h-4" />            <ArrowLeft className="w-4 h-4" />

                className="p-4 bg-card/50 backdrop-blur-sm rounded-lg border border-border/20 hover:border-primary/30 cursor-pointer transition-all duration-200 hover:bg-card/70"

                whileHover={{ scale: 1.02 }}            Back            Back

                onClick={() => handleSend(item.text)}

              >          </Button>          </Button>

                <div className="flex items-center gap-3">

                  <item.icon className={`w-5 h-5 ${item.color}`} />                    

                  <span className="text-sm text-foreground/80">{item.text}</span>

                </div>          <div className="flex items-center gap-2">          <div className="flex items-center gap-2">

              </motion.div>

            ))}            <img             <img 

          </motion.div>

              src="/tripgenie.png"               src="/tripgenie.png" 

          <motion.div 

            className="w-full max-w-4xl"              alt="TripGenie"               alt="TripGenie" 

            initial={{ opacity: 0, y: 20 }}

            animate={{ opacity: 1, y: 0 }}              className="h-8 w-auto"              className="h-8 w-auto"

            transition={{ duration: 0.8, delay: 0.6 }}

          >            />            />

            <PromptInputBox 

              onSend={handleSend}          </div>          </div>

              placeholder="Describe your perfect trip... (e.g., 'Romantic getaway to Paris for 5 days')"

              isLoading={isLoading}        </motion.div>        </motion.div>

            />

          </motion.div>

        </div>

      </div>        {/* Main Chat Area */}        {/* Main Chat Area */}

    </div>

  );        <div className="flex-1 flex flex-col items-center justify-center p-6 space-y-8">        <div className="flex-1 flex flex-col items-center justify-center p-6 space-y-8">

};

          {/* Welcome Section */}          {/* Welcome Section */}

export default Chat;
          <motion.div           <motion.div 

            className="text-center space-y-6 max-w-2xl"            className="text-center space-y-6 max-w-2xl"

            initial={{ opacity: 0, y: 30 }}            initial={{ opacity: 0, y: 30 }}

            animate={{ opacity: 1, y: 0 }}            animate={{ opacity: 1, y: 0 }}

            transition={{ duration: 0.8, delay: 0.2 }}            transition={{ duration: 0.8, delay: 0.2 }}

          >          >

            <div className="flex justify-center mb-4">            <div className="flex justify-center mb-4">

              <div className="relative">              <div className="relative">

                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" />                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" />

                <div className="relative w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">                <div className="relative w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">

                  <Sparkles className="w-8 h-8 text-white animate-glow-pulse" />                  <Sparkles className="w-8 h-8 text-white animate-glow-pulse" />

                </div>                </div>

              </div>              </div>

            </div>            </div>

                        

            <h1 className="text-3xl md:text-4xl font-bold text-gradient mb-4">            <h1 className="text-3xl md:text-4xl font-bold text-gradient mb-4">

              Your AI Travel Genie              Your AI Travel Genie

            </h1>            </h1>

                        

            <p className="text-lg text-muted-foreground">            <p className="text-lg text-muted-foreground">

              Tell me about your dream destination and I'll create magical travel experiences just for you!              Tell me about your dream destination and I'll create magical travel experiences just for you!

            </p>            </p>

          </motion.div>          </motion.div>



          {/* Example Prompts */}          {/* Example Prompts */}

          <motion.div           <motion.div 

            className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl w-full mb-8"            className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl w-full mb-8"

            initial={{ opacity: 0, y: 20 }}            initial={{ opacity: 0, y: 20 }}

            animate={{ opacity: 1, y: 0 }}            animate={{ opacity: 1, y: 0 }}

            transition={{ duration: 0.8, delay: 0.4 }}            transition={{ duration: 0.8, delay: 0.4 }}

          >          >

            {[            {[

              { icon: FaPlane, text: "Plan a 7-day European adventure", color: "text-blue-500" },              { icon: FaPlaneIcon, text: "Plan a 7-day European adventure", color: "text-blue-500" },

              { icon: FaUmbrellaBeach, text: "Find the perfect beach getaway", color: "text-cyan-500" },              { icon: FaBeach, text: "Find the perfect beach getaway", color: "text-cyan-500" },

              { icon: MdLocationOn, text: "Discover hidden gems in Tokyo", color: "text-red-500" },              { icon: MdLocationOn, text: "Discover hidden gems in Tokyo", color: "text-red-500" },

              { icon: GiMountainRoad, text: "Mountain hiking expedition", color: "text-green-500" }              { icon: GiMountainRoad, text: "Mountain hiking expedition", color: "text-green-500" }

            ].map((item, index) => (            ].map((item, index) => (

              <motion.div              <motion.div

                key={index}                key={index}

                className="p-4 bg-card/50 backdrop-blur-sm rounded-lg border border-border/20 hover:border-primary/30 cursor-pointer transition-all duration-200 hover:bg-card/70"                className="p-4 bg-card/50 backdrop-blur-sm rounded-lg border border-border/20 hover:border-primary/30 cursor-pointer transition-all duration-200 hover:bg-card/70"

                whileHover={{ scale: 1.02 }}                whileHover={{ scale: 1.02 }}

                onClick={() => handleSend(item.text)}                onClick={() => handleSend(item.text)}

              >              >

                <div className="flex items-center gap-3">                <div className="flex items-center gap-3">

                  <item.icon className={`w-5 h-5 ${item.color}`} />                  <item.icon className={`w-5 h-5 ${item.color}`} />

                  <span className="text-sm text-foreground/80">{item.text}</span>                  <span className="text-sm text-foreground/80">{item.text}</span>

                </div>                </div>

              </motion.div>              </motion.div>

            ))}            ))}

          </motion.div>          </motion.div>



          {/* AI Prompt Input */}          {/* AI Prompt Input */}

          <motion.div           <motion.div 

            className="w-full max-w-4xl"            className="w-full max-w-4xl"

            initial={{ opacity: 0, y: 20 }}            initial={{ opacity: 0, y: 20 }}

            animate={{ opacity: 1, y: 0 }}            animate={{ opacity: 1, y: 0 }}

            transition={{ duration: 0.8, delay: 0.6 }}            transition={{ duration: 0.8, delay: 0.6 }}

          >          >

            <PromptInputBox             <PromptInputBox 

              onSend={handleSend}              onSend={handleSend}

              placeholder="Describe your perfect trip... (e.g., 'Romantic getaway to Paris for 5 days')"              placeholder="Describe your perfect trip... (e.g., 'Romantic getaway to Paris for 5 days')"

              isLoading={isLoading}              isLoading={isLoading}

            />            />

          </motion.div>          </motion.div>

        </div>        </div>

      </div>      </div>

    </div>    </div>

  );  );

};};



export default Chat;export default Chat;

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
