"use client";

import * as React from "react";
import { FaPlane, FaUmbrellaBeach } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { GiMountainRoad, GiJapan } from "react-icons/gi";
import { BackgroundPaths } from "@/components/ui/background-paths";
import { PromptInputBox } from "@/components/ui/ai-prompt-box";

const Hero1 = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSend = (message: string, files?: File[]) => {
    setIsLoading(true);
    // Simulate AI processing
    setTimeout(() => {
      alert(`�‍♂️ TripGenie: ${message}\n${files && files.length > 0 ? `\nWith ${files.length} file(s) attached` : ''}\n\nYour magical travel assistant is working on creating the perfect itinerary for you!`);
      setIsLoading(false);
    }, 2000);
  };

  const handleSuggestionClick = (suggestion: string) => {
    handleSend(suggestion);
  };

  return (
    <div className="min-h-screen text-white flex flex-col relative overflow-hidden">
      {/* AI Chat with 3D Background Paths Animation */}
      <div className="absolute inset-0">
        <BackgroundPaths title="" />
      </div>
      
      {/* Subtle overlay for better contrast with chat interface */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/2 via-transparent to-secondary/2 z-[5]"></div>
      
      {/* Header */}
      <header className="flex justify-between items-center p-8 backdrop-blur-sm relative z-10">{" "}
        <div className="flex items-center gap-3 group">
          <img 
            src="/tripgenie.png" 
            alt="TripGenie" 
            className="h-10 w-auto group-hover:scale-110 transition-all duration-300"
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-6">


          {/* Advanced AI Prompt Box */}
          <div className="relative max-w-2xl mx-auto w-full">
            <PromptInputBox
              onSend={handleSend}
              isLoading={isLoading}
              placeholder="Ask about destinations, activities, or travel plans..."
              className="w-full"
            />
          </div>

          {/* Suggestion pills */}
          <div className="flex flex-wrap justify-center gap-3 mt-16 max-w-2xl mx-auto">
            <button 
              className="group bg-gradient-to-r from-[#1c1528]/90 to-[#2a1f3d]/90 hover:from-purple-600/20 hover:to-pink-600/20 border border-purple-500/30 hover:border-purple-400/60 rounded-2xl px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 card-glow backdrop-blur-xl"
              onClick={() => handleSuggestionClick("Paris romantic trip")}
            >
              <span className="flex items-center gap-2">
                <MdLocationOn className="w-4 h-4 text-purple-400" /> <span className="text-gradient group-hover:glow-accent">Paris</span>
              </span>
            </button>
            <button 
              className="group bg-gradient-to-r from-[#1c1528]/90 to-[#2a1f3d]/90 hover:from-green-600/20 hover:to-teal-600/20 border border-green-500/30 hover:border-green-400/60 rounded-2xl px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 card-glow backdrop-blur-xl"
              onClick={() => handleSuggestionClick("Adventure in New Zealand")}
            >
              <span className="flex items-center gap-2">
                <GiMountainRoad className="w-4 h-4 text-green-400" /> <span className="text-gradient group-hover:glow-accent">Adventure</span>
              </span>
            </button>
            <button 
              className="group bg-gradient-to-r from-[#1c1528]/90 to-[#2a1f3d]/90 hover:from-pink-600/20 hover:to-red-600/20 border border-pink-500/30 hover:border-pink-400/60 rounded-2xl px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 card-glow backdrop-blur-xl"
              onClick={() => handleSuggestionClick("Japan culture tour")}
            >
              <span className="flex items-center gap-2">
                <GiJapan className="w-4 h-4 text-pink-400" /> <span className="text-gradient group-hover:glow-accent">Japan</span>
              </span>
            </button>
            <button 
              className="group bg-gradient-to-r from-[#1c1528]/90 to-[#2a1f3d]/90 hover:from-cyan-600/20 hover:to-blue-600/20 border border-cyan-500/30 hover:border-cyan-400/60 rounded-2xl px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 card-glow backdrop-blur-xl"
              onClick={() => handleSuggestionClick("Maldives beach vacation")}
            >
              <span className="flex items-center gap-2">
                <FaUmbrellaBeach className="w-4 h-4 text-cyan-400" /> <span className="text-gradient group-hover:glow-accent">Maldives</span>
              </span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export { Hero1 };