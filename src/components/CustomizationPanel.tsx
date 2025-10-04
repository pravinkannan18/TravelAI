import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Settings, Palette, Eye, Volume2, Zap, Globe,
  Sun, Moon, Sliders, X, Check, RefreshCw
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';

interface CustomizationPanelProps {
  isOpen: boolean;
  onToggle: () => void;
  settings: {
    animationSpeed: number;
    parallaxIntensity: number;
    backgroundOpacity: number;
    particleCount: number;
    enableSounds: boolean;
    enableParallax: boolean;
    enableAnimations: boolean;
    colorTheme: string;
  };
  onSettingsChange: (newSettings: any) => void;
}

export const CustomizationPanel: React.FC<CustomizationPanelProps> = ({
  isOpen,
  onToggle,
  settings,
  onSettingsChange
}) => {
  const [activeTab, setActiveTab] = useState('visual');

  const colorThemes = [
    { id: 'blue', name: 'Ocean Blue', colors: ['#1E90FF', '#87CEEB', '#4169E1'] },
    { id: 'sunset', name: 'Sunset', colors: ['#FF6B6B', '#FFE66D', '#FF8E53'] },
    { id: 'forest', name: 'Forest', colors: ['#52B788', '#74C69D', '#95D5B2'] },
    { id: 'purple', name: 'Royal Purple', colors: ['#7209B7', '#A663CC', '#C77DFF'] },
    { id: 'gold', name: 'Golden', colors: ['#FFD60A', '#FFC300', '#FFBA08'] }
  ];

  const updateSetting = (key: string, value: any) => {
    onSettingsChange({ ...settings, [key]: value });
  };

  const resetToDefaults = () => {
    onSettingsChange({
      animationSpeed: 1,
      parallaxIntensity: 0.5,
      backgroundOpacity: 0.3,
      particleCount: 1000,
      enableSounds: false,
      enableParallax: true,
      enableAnimations: true,
      colorTheme: 'blue'
    });
  };

  return (
    <>
      {/* Toggle Button */}
      <motion.div
        className="fixed top-24 right-6 z-50"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        <Button
          onClick={onToggle}
          className="bg-card/90 backdrop-blur-md border border-border hover:bg-card/100 text-foreground shadow-lg"
          size="sm"
        >
          <Settings className="w-4 h-4" />
        </Button>
      </motion.div>

      {/* Customization Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onToggle}
            />

            {/* Panel */}
            <motion.div
              className="fixed top-0 right-0 h-full w-80 bg-card/95 backdrop-blur-xl border-l border-border z-50 overflow-y-auto"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 20 }}
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gradient">Customize Experience</h2>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={onToggle}
                    className="hover:bg-muted"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>

                {/* Tabs */}
                <div className="flex gap-2 mb-6">
                  {[
                    { id: 'visual', label: 'Visual', icon: Eye },
                    { id: 'effects', label: 'Effects', icon: Zap },
                    { id: 'theme', label: 'Theme', icon: Palette }
                  ].map((tab) => {
                    const Icon = tab.icon;
                    return (
                      <Button
                        key={tab.id}
                        variant={activeTab === tab.id ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setActiveTab(tab.id)}
                        className="flex-1"
                      >
                        <Icon className="w-3 h-3 mr-1" />
                        {tab.label}
                      </Button>
                    );
                  })}
                </div>

                {/* Visual Tab */}
                {activeTab === 'visual' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-6"
                  >
                    <Card className="p-4">
                      <h3 className="font-semibold mb-3 flex items-center gap-2">
                        <Globe className="w-4 h-4" />
                        3D Animation Settings
                      </h3>
                      
                      <div className="space-y-4">
                        <div>
                          <label className="text-sm font-medium mb-2 block">
                            Animation Speed: {settings.animationSpeed}x
                          </label>
                          <Slider
                            value={[settings.animationSpeed]}
                            onValueChange={(value) => updateSetting('animationSpeed', value[0])}
                            min={0.1}
                            max={3}
                            step={0.1}
                            className="w-full"
                          />
                        </div>

                        <div>
                          <label className="text-sm font-medium mb-2 block">
                            Background Opacity: {Math.round(settings.backgroundOpacity * 100)}%
                          </label>
                          <Slider
                            value={[settings.backgroundOpacity]}
                            onValueChange={(value) => updateSetting('backgroundOpacity', value[0])}
                            min={0.1}
                            max={1}
                            step={0.1}
                            className="w-full"
                          />
                        </div>

                        <div>
                          <label className="text-sm font-medium mb-2 block">
                            Particle Count: {settings.particleCount}
                          </label>
                          <Slider
                            value={[settings.particleCount]}
                            onValueChange={(value) => updateSetting('particleCount', value[0])}
                            min={100}
                            max={5000}
                            step={100}
                            className="w-full"
                          />
                        </div>
                      </div>
                    </Card>

                    <Card className="p-4">
                      <h3 className="font-semibold mb-3">Performance Options</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <label className="text-sm font-medium">Enable Animations</label>
                          <Switch
                            checked={settings.enableAnimations}
                            onCheckedChange={(checked) => updateSetting('enableAnimations', checked)}
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <label className="text-sm font-medium">Parallax Effects</label>
                          <Switch
                            checked={settings.enableParallax}
                            onCheckedChange={(checked) => updateSetting('enableParallax', checked)}
                          />
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                )}

                {/* Effects Tab */}
                {activeTab === 'effects' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-6"
                  >
                    <Card className="p-4">
                      <h3 className="font-semibold mb-3 flex items-center gap-2">
                        <Zap className="w-4 h-4" />
                        Interactive Effects
                      </h3>
                      
                      <div className="space-y-4">
                        <div>
                          <label className="text-sm font-medium mb-2 block">
                            Parallax Intensity: {Math.round(settings.parallaxIntensity * 100)}%
                          </label>
                          <Slider
                            value={[settings.parallaxIntensity]}
                            onValueChange={(value) => updateSetting('parallaxIntensity', value[0])}
                            min={0}
                            max={2}
                            step={0.1}
                            className="w-full"
                            disabled={!settings.enableParallax}
                          />
                        </div>
                      </div>
                    </Card>

                    <Card className="p-4">
                      <h3 className="font-semibold mb-3 flex items-center gap-2">
                        <Volume2 className="w-4 h-4" />
                        Audio Settings
                      </h3>
                      <div className="flex items-center justify-between">
                        <label className="text-sm font-medium">Background Sounds</label>
                        <Switch
                          checked={settings.enableSounds}
                          onCheckedChange={(checked) => updateSetting('enableSounds', checked)}
                        />
                      </div>
                      {settings.enableSounds && (
                        <p className="text-xs text-muted-foreground mt-2">
                          Ambient travel sounds will play
                        </p>
                      )}
                    </Card>
                  </motion.div>
                )}

                {/* Theme Tab */}
                {activeTab === 'theme' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-6"
                  >
                    <Card className="p-4">
                      <h3 className="font-semibold mb-3 flex items-center gap-2">
                        <Palette className="w-4 h-4" />
                        Color Themes
                      </h3>
                      <div className="grid grid-cols-1 gap-3">
                        {colorThemes.map((theme) => (
                          <div
                            key={theme.id}
                            className={`p-3 rounded-lg border cursor-pointer transition-all ${
                              settings.colorTheme === theme.id
                                ? 'border-primary bg-primary/10'
                                : 'border-border hover:border-primary/50'
                            }`}
                            onClick={() => updateSetting('colorTheme', theme.id)}
                          >
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-medium">{theme.name}</span>
                              {settings.colorTheme === theme.id && (
                                <Check className="w-4 h-4 text-primary" />
                              )}
                            </div>
                            <div className="flex gap-1">
                              {theme.colors.map((color, idx) => (
                                <div
                                  key={idx}
                                  className="w-6 h-6 rounded"
                                  style={{ backgroundColor: color }}
                                />
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </Card>
                  </motion.div>
                )}

                {/* Footer */}
                <div className="mt-8 pt-6 border-t border-border">
                  <Button
                    variant="outline"
                    onClick={resetToDefaults}
                    className="w-full"
                  >
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Reset to Defaults
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};