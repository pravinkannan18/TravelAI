"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

function FloatingPaths({ position }: { position: number }) {
    const paths = Array.from({ length: 28 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
            380 - i * 5 * position
        } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
            152 - i * 5 * position
        } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
            684 - i * 5 * position
        } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        width: 0.8 + i * 0.05,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none">
            <svg
                className="w-full h-full"
                viewBox="0 0 696 316"
                fill="none"
            >
                <title>TravelAI Background Paths</title>
                {paths.map((path, index) => {
                    // Dimmed TravelAI theme colors for reduced brightness
                    const colorClasses = [
                        "text-primary/35",      // dimmed primary blue
                        "text-secondary/30",    // dimmed secondary purple
                        "text-accent/32",       // dimmed accent teal
                        "text-primary/28",      // low primary
                        "text-secondary/25",    // low secondary
                        "text-cyan-400/30",     // dimmed cyan
                        "text-blue-400/28",     // dimmed blue
                        "text-purple-400/30",   // dimmed purple
                    ];
                    const colorClass = colorClasses[index % colorClasses.length];
                    
                    return (
                        <motion.path
                            key={path.id}
                            d={path.d}
                            stroke="currentColor"
                            strokeWidth={path.width}
                            strokeOpacity={0.2 + path.id * 0.02}
                            className={colorClass}
                            initial={{ pathLength: 0.4, opacity: 0.5 }}
                            animate={{
                                pathLength: [0.4, 1, 0.4],
                                opacity: [0.3, 0.6, 0.3],
                                pathOffset: [0, 1, 0],
                            }}
                            transition={{
                                duration: 15 + Math.random() * 8,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                                delay: Math.random() * 3,
                            }}
                        />
                    );
                })}
            </svg>
        </div>
    );
}

export function BackgroundPaths({
    title = "Background Paths",
}: {
    title?: string;
}) {
    const words = title.split(" ");

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-[hsl(220_30%_6%)] via-[hsl(220_30%_8%)] to-[hsl(220_30%_10%)]">
            <div className="absolute inset-0">
                <FloatingPaths position={1} />
                <FloatingPaths position={-1} />
                <FloatingPaths position={0.5} />
                <FloatingPaths position={-0.5} />
            </div>
            
            {/* Additional glow effects for better visibility */}
            <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-secondary/10 opacity-60"></div>
            <div className="absolute inset-0 bg-gradient-conic from-accent/5 via-transparent to-primary/5 opacity-40"></div>

            {title && (
                <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2 }}
                        className="max-w-4xl mx-auto"
                    >
                        <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-8 tracking-tighter">
                            {words.map((word, wordIndex) => (
                                <span
                                    key={wordIndex}
                                    className="inline-block mr-4 last:mr-0"
                                >
                                    {word.split("").map((letter, letterIndex) => (
                                        <motion.span
                                            key={`${wordIndex}-${letterIndex}`}
                                            initial={{ y: 100, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{
                                                delay:
                                                    wordIndex * 0.1 +
                                                    letterIndex * 0.03,
                                                type: "spring",
                                                stiffness: 150,
                                                damping: 25,
                                            }}
                                            className="inline-block text-gradient"
                                        >
                                            {letter}
                                        </motion.span>
                                    ))}
                                </span>
                            ))}
                        </h1>
                    </motion.div>
                </div>
            )}
        </div>
    );
}