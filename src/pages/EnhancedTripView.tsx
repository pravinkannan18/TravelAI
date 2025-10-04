import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Suspense } from 'react';
import { 
  ArrowLeft, Calendar, DollarSign, MapPin, Clock, Edit, 
  Plane, Hotel, Ticket, Sun, Cloud, CloudRain, Snowflake,
  Star, Gift, Save, Share, Navigation, Coffee, Utensils,
  Camera, TreePine, Heart, Sparkles, Map, Settings,
  Plus, Minus, RotateCcw, Check, X, Award, Download,
  MessageCircle, Eye, Volume2, Palette, Zap, Globe,
  ChevronDown, ChevronUp, Filter, Search, Bell,
  Wifi, Car, Users, Phone, Mail, ExternalLink
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Enhanced3DBackground } from '@/components/Enhanced3DBackground';
import { CustomizationPanel } from '@/components/CustomizationPanel';
import { JourneyProgress } from '@/components/JourneyProgress';

// Sample Paris Itinerary Data (May 1-5, 2026)
const sampleItinerary = {
  trip: {
    id: 'paris-2026',
    destination: 'Paris, France',
    start_date: '2026-05-01',
    end_date: '2026-05-05',
    budget: 2500,
    eco_friendly: true,
    preferences: ['Culture', 'Art', 'Food', 'History', 'Photography']
  },
  activities: [
    // Day 1 - Arrival & Orientation
    {
      id: 1,
      day_number: 1,
      title: 'Arrival at Charles de Gaulle Airport',
      start_time: '10:00',
      end_time: '11:30',
      activity_type: 'transportation',
      location: 'CDG Airport',
      description: 'Flight arrival and transfer to hotel',
      coordinates: { lat: 49.0097, lng: 2.5479 },
      booking_options: {
        transport: { price: 35, eco_price: 30, provider: 'RER B Train' }
      }
    },
    {
      id: 2,
      day_number: 1,
      title: 'Hotel Check-in',
      start_time: '12:00',
      end_time: '13:00',
      activity_type: 'accommodation',
      location: 'Hotel des Grands Boulevards',
      description: 'Eco-friendly hotel in 2nd arrondissement',
      coordinates: { lat: 48.8706, lng: 2.3439 },
      booking_options: {
        hotel: { price: 180, eco_price: 160, provider: 'Green Hotels Paris' }
      }
    },
    {
      id: 3,
      day_number: 1,
      title: 'Walking Tour: Le Marais District',
      start_time: '15:00',
      end_time: '18:00',
      activity_type: 'sightseeing',
      location: 'Le Marais',
      description: 'Historic Jewish quarter with local guide',
      coordinates: { lat: 48.8566, lng: 2.3636 },
      booking_options: {
        tour: { price: 45, eco_price: 40, provider: 'Paris Walking Tours' }
      }
    },
    {
      id: 4,
      day_number: 1,
      title: 'Dinner at L\'As du Fallafel',
      start_time: '19:30',
      end_time: '21:00',
      activity_type: 'food',
      location: 'Rue des Rosiers',
      description: 'Authentic Middle Eastern cuisine',
      coordinates: { lat: 48.8577, lng: 2.3617 }
    },

    // Day 2 - Art & Culture
    {
      id: 5,
      day_number: 2,
      title: 'The Louvre Museum',
      start_time: '09:00',
      end_time: '13:00',
      activity_type: 'culture',
      location: 'Louvre Museum',
      description: 'Skip-the-line access with audio guide. Focus on masterpieces.',
      coordinates: { lat: 48.8606, lng: 2.3376 },
      booking_options: {
        activity: { price: 50, eco_price: 45, provider: 'Louvre Official Tours' }
      }
    },
    {
      id: 6,
      day_number: 2,
      title: 'Lunch at Angelina',
      start_time: '13:30',
      end_time: '15:00',
      activity_type: 'food',
      location: 'Rue de Rivoli',
      description: 'Famous hot chocolate and pastries since 1903',
      coordinates: { lat: 48.8656, lng: 2.3291 }
    },
    {
      id: 7,
      day_number: 2,
      title: 'Seine River Eco-Cruise',
      start_time: '16:00',
      end_time: '18:00',
      activity_type: 'nature',
      location: 'Port de la Bourdonnais',
      description: 'Electric boat cruise with champagne service',
      coordinates: { lat: 48.8584, lng: 2.2945 },
      booking_options: {
        activity: { price: 75, eco_price: 70, provider: 'Green Seine Tours' }
      }
    },
    {
      id: 8,
      day_number: 2,
      title: 'Dinner at Le Comptoir du 7ème',
      start_time: '20:00',
      end_time: '22:00',
      activity_type: 'food',
      location: '7th Arrondissement',
      description: 'Modern French bistro with organic ingredients',
      coordinates: { lat: 48.8535, lng: 2.3058 }
    },

    // Day 3 - Montmartre & Art
    {
      id: 9,
      day_number: 3,
      title: 'Montmartre Hill Hiking',
      start_time: '08:30',
      end_time: '10:30',
      activity_type: 'adventure',
      location: 'Montmartre',
      description: 'Morning hike to Sacré-Cœur with sunrise views',
      coordinates: { lat: 48.8867, lng: 2.3431 }
    },
    {
      id: 10,
      day_number: 3,
      title: 'Sacré-Cœur Basilica Visit',
      start_time: '10:30',
      end_time: '12:00',
      activity_type: 'culture',
      location: 'Sacré-Cœur',
      description: 'Explore the iconic basilica and enjoy panoramic views',
      coordinates: { lat: 48.8867, lng: 2.3431 }
    },
    {
      id: 11,
      day_number: 3,
      title: 'Artist Studios Tour',
      start_time: '14:00',
      end_time: '17:00',
      activity_type: 'culture',
      location: 'Place du Tertre',
      description: 'Meet local artists and watch portrait creation',
      coordinates: { lat: 48.8867, lng: 2.3404 },
      booking_options: {
        activity: { price: 35, eco_price: 30, provider: 'Montmartre Artists Collective' }
      }
    },
    {
      id: 12,
      day_number: 3,
      title: 'Moulin Rouge Show',
      start_time: '21:00',
      end_time: '23:00',
      activity_type: 'entertainment',
      location: 'Moulin Rouge',
      description: 'Iconic cabaret show with champagne',
      coordinates: { lat: 48.8841, lng: 2.3322 },
      booking_options: {
        activity: { price: 150, eco_price: 140, provider: 'Moulin Rouge Official' }
      }
    },

    // Day 4 - Modern Paris & Shopping
    {
      id: 13,
      day_number: 4,
      title: 'Champs-Élysées Shopping',
      start_time: '10:00',
      end_time: '13:00',
      activity_type: 'shopping',
      location: 'Champs-Élysées',
      description: 'Browse flagship stores and sustainable fashion',
      coordinates: { lat: 48.8698, lng: 2.3076 }
    },
    {
      id: 14,
      day_number: 4,
      title: 'Arc de Triomphe Climb',
      start_time: '14:00',
      end_time: '15:30',
      activity_type: 'sightseeing',
      location: 'Arc de Triomphe',
      description: 'Climb to the top for spectacular city views',
      coordinates: { lat: 48.8738, lng: 2.2950 },
      booking_options: {
        activity: { price: 16, eco_price: 14, provider: 'Paris Monuments' }
      }
    },
    {
      id: 15,
      day_number: 4,
      title: 'Eiffel Tower VIP Experience',
      start_time: '17:00',
      end_time: '19:00',
      activity_type: 'sightseeing',
      location: 'Eiffel Tower',
      description: 'Priority access to summit with sunset views',
      coordinates: { lat: 48.8584, lng: 2.2945 },
      booking_options: {
        activity: { price: 120, eco_price: 110, provider: 'Tower Premium Access' }
      }
    },
    {
      id: 16,
      day_number: 4,
      title: 'Seine Dinner Cruise',
      start_time: '20:30',
      end_time: '22:30',
      activity_type: 'food',
      location: 'Seine River',
      description: 'Gourmet dinner cruise with city lights',
      coordinates: { lat: 48.8584, lng: 2.2945 },
      booking_options: {
        activity: { price: 95, eco_price: 85, provider: 'Bateaux Parisiens' }
      }
    },

    // Day 5 - Versailles & Departure
    {
      id: 17,
      day_number: 5,
      title: 'Palace of Versailles Day Trip',
      start_time: '09:00',
      end_time: '16:00',
      activity_type: 'culture',
      location: 'Palace of Versailles',
      description: 'Full day exploring palace, gardens, and Marie Antoinette estate',
      coordinates: { lat: 48.8049, lng: 2.1204 },
      booking_options: {
        activity: { price: 85, eco_price: 75, provider: 'Versailles Tours' }
      }
    },
    {
      id: 18,
      day_number: 5,
      title: 'Airport Transfer & Departure',
      start_time: '18:00',
      end_time: '20:00',
      activity_type: 'transportation',
      location: 'CDG Airport',
      description: 'Hotel to airport transfer for evening flight',
      coordinates: { lat: 49.0097, lng: 2.5479 },
      booking_options: {
        transport: { price: 35, eco_price: 30, provider: 'RER B Train' }
      }
    }
  ],
  weather: {
    daily: [
      { day: 1, temp: 18, condition: 'cloudy', description: 'Partly Cloudy', humidity: 65, wind: 12 },
      { day: 2, temp: 22, condition: 'sunny', description: 'Sunny', humidity: 55, wind: 8 },
      { day: 3, temp: 19, condition: 'rainy', description: 'Light Rain', humidity: 80, wind: 15 },
      { day: 4, temp: 24, condition: 'sunny', description: 'Clear Skies', humidity: 50, wind: 6 },
      { day: 5, temp: 21, condition: 'cloudy', description: 'Mostly Cloudy', humidity: 60, wind: 10 }
    ]
  }
};

const EnhancedTripView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // State management
  const [trip, setTrip] = useState(sampleItinerary.trip);
  const [itinerary, setItinerary] = useState(sampleItinerary.activities);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('itinerary');
  const [editingActivity, setEditingActivity] = useState(null);
  const [showCustomization, setShowCustomization] = useState(false);
  const [expandedDay, setExpandedDay] = useState(null);
  const [filterType, setFilterType] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // 3D customization settings
  const [customSettings, setCustomSettings] = useState({
    animationSpeed: 1,
    parallaxIntensity: 0.5,
    backgroundOpacity: 0.3,
    particleCount: 1000,
    enableSounds: false,
    enableParallax: true,
    enableAnimations: true,
    colorTheme: 'blue'
  });

  const activityTypes = {
    'sightseeing': { icon: Camera, color: 'text-blue-500', bgColor: 'bg-blue-500' },
    'food': { icon: Utensils, color: 'text-orange-500', bgColor: 'bg-orange-500' },
    'nature': { icon: TreePine, color: 'text-green-500', bgColor: 'bg-green-500' },
    'culture': { icon: Star, color: 'text-purple-500', bgColor: 'bg-purple-500' },
    'relaxation': { icon: Coffee, color: 'text-amber-500', bgColor: 'bg-amber-500' },
    'adventure': { icon: Navigation, color: 'text-red-500', bgColor: 'bg-red-500' },
    'transportation': { icon: Car, color: 'text-gray-500', bgColor: 'bg-gray-500' },
    'accommodation': { icon: Hotel, color: 'text-indigo-500', bgColor: 'bg-indigo-500' },
    'entertainment': { icon: Star, color: 'text-pink-500', bgColor: 'bg-pink-500' },
    'shopping': { icon: Gift, color: 'text-cyan-500', bgColor: 'bg-cyan-500' }
  };

  const getWeatherIcon = (condition) => {
    switch (condition) {
      case 'sunny': return <Sun className="w-5 h-5 text-yellow-500" />;
      case 'cloudy': return <Cloud className="w-5 h-5 text-gray-500" />;
      case 'rainy': return <CloudRain className="w-5 h-5 text-blue-500" />;
      case 'snowy': return <Snowflake className="w-5 h-5 text-blue-200" />;
      default: return <Sun className="w-5 h-5 text-yellow-500" />;
    }
  };

  const groupedItinerary = itinerary.reduce((acc, item) => {
    if (!acc[item.day_number]) {
      acc[item.day_number] = [];
    }
    acc[item.day_number].push(item);
    return acc;
  }, {});

  const filteredActivities = (activities) => {
    return activities.filter(activity => {
      const matchesFilter = filterType === 'all' || activity.activity_type === filterType;
      const matchesSearch = activity.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           activity.location.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  };

  const handleBooking = (type) => {
    navigate(`/trip/${id}/booking?type=${type}`);
  };

  const handleSavePlan = async () => {
    toast({
      title: 'Plan Saved',
      description: 'Your enhanced itinerary has been saved successfully!',
    });
  };

  const handleGetDigitalSouvenir = () => {
    toast({
      title: 'Digital Souvenir Created! 🎁',
      description: `You've earned a virtual ${trip?.destination} travel badge with NFT certificate!`,
    });
  };

  const handleShareTrip = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: 'Trip Shared! 📋',
      description: 'Trip link copied to clipboard. Share with friends!',
    });
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Enhanced 3D Background */}
      {customSettings.enableAnimations && (
        <Suspense fallback={<div />}>
          <div style={{ opacity: customSettings.backgroundOpacity }}>
            <Enhanced3DBackground />
          </div>
        </Suspense>
      )}

      {/* Customization Panel */}
      <CustomizationPanel
        isOpen={showCustomization}
        onToggle={() => setShowCustomization(!showCustomization)}
        settings={customSettings}
        onSettingsChange={setCustomSettings}
      />

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12 relative z-10 pt-20">
        {/* Journey Progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <JourneyProgress currentStep="itinerary" className="max-w-4xl mx-auto" />
        </motion.div>

        {/* Enhanced Trip Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row items-start justify-between gap-6 mb-6">
            <div className="flex-1">
              <motion.h1 
                className="text-5xl md:text-7xl font-bold mb-4 text-gradient"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                {trip.destination}
              </motion.h1>
              
              <div className="flex flex-wrap gap-4 text-muted-foreground mb-6">
                <motion.div 
                  className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="font-medium">
                    {new Date(trip.start_date).toLocaleDateString()} - {new Date(trip.end_date).toLocaleDateString()}
                  </span>
                </motion.div>
                
                <motion.div 
                  className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <DollarSign className="w-5 h-5 text-accent" />
                  <span className="font-medium">Budget: ${trip.budget?.toLocaleString()}</span>
                </motion.div>
                
                {trip.eco_friendly && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Badge className="bg-green-100 text-green-700 border-green-200 px-4 py-2">
                      <TreePine className="w-4 h-4 mr-2" />
                      Eco-Certified Trip
                    </Badge>
                  </motion.div>
                )}
              </div>

              {trip.preferences && trip.preferences.length > 0 && (
                <motion.div 
                  className="flex flex-wrap gap-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  {trip.preferences.map((pref, index) => (
                    <Badge key={pref} variant="outline" className="text-xs px-3 py-1">
                      {pref}
                    </Badge>
                  ))}
                </motion.div>
              )}
            </div>
            
            {/* Enhanced Action Buttons */}
            <motion.div 
              className="flex flex-col gap-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
            >
              <Button 
                onClick={handleGetDigitalSouvenir}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg"
                size="lg"
              >
                <Gift className="w-5 h-5 mr-2" />
                Get Digital Souvenir
              </Button>
              
              <div className="grid grid-cols-3 gap-2">
                {[
                  { type: 'flight', icon: Plane, label: 'Flight', color: 'bg-blue-500 hover:bg-blue-600' },
                  { type: 'hotel', icon: Hotel, label: 'Hotel', color: 'bg-green-500 hover:bg-green-600' },
                  { type: 'activity', icon: Ticket, label: 'Tours', color: 'bg-purple-500 hover:bg-purple-600' }
                ].map((option) => {
                  const Icon = option.icon;
                  return (
                    <Button
                      key={option.type}
                      size="sm"
                      className={`${option.color} text-white text-xs px-3 py-2 shadow-md`}
                      onClick={() => handleBooking(option.type)}
                    >
                      <Icon className="w-3 h-3 mr-1" />
                      {option.label}
                    </Button>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Enhanced Tabs with Search and Filter */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
            <TabsList className="grid w-full md:w-auto grid-cols-3">
              <TabsTrigger value="itinerary" className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Itinerary
              </TabsTrigger>
              <TabsTrigger value="map" className="flex items-center gap-2">
                <Map className="w-4 h-4" />
                Interactive Map
              </TabsTrigger>
              <TabsTrigger value="weather" className="flex items-center gap-2">
                <Sun className="w-4 h-4" />
                Weather Forecast
              </TabsTrigger>
            </TabsList>

            {activeTab === 'itinerary' && (
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Search activities..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 w-64"
                  />
                </div>
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="px-3 py-2 border border-border rounded-md bg-card text-sm"
                >
                  <option value="all">All Activities</option>
                  <option value="sightseeing">Sightseeing</option>
                  <option value="food">Food & Dining</option>
                  <option value="culture">Culture</option>
                  <option value="nature">Nature</option>
                  <option value="adventure">Adventure</option>
                </select>
              </div>
            )}
          </div>

          {/* Enhanced Itinerary Tab */}
          <TabsContent value="itinerary">
            <div className="space-y-8">
              {Object.keys(groupedItinerary).length === 0 ? (
                <Card className="p-12 text-center bg-card/50 backdrop-blur-sm border-border">
                  <Sparkles className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-xl font-bold mb-2">No itinerary generated yet</h3>
                  <p className="text-muted-foreground mb-6">Start planning your amazing trip!</p>
                  <Button onClick={() => navigate('/chat')} className="bg-gradient-to-r from-primary to-secondary">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Chat with AI to Plan Activities
                  </Button>
                </Card>
              ) : (
                Object.entries(groupedItinerary).map(([day, activities]) => {
                  const dayWeather = sampleItinerary.weather.daily.find(w => w.day === parseInt(day));
                  const filteredDayActivities = filteredActivities(activities);
                  
                  if (filteredDayActivities.length === 0 && (filterType !== 'all' || searchQuery)) {
                    return null;
                  }
                  
                  return (
                    <motion.div
                      key={day}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="space-y-4"
                    >
                      {/* Enhanced Day Header */}
                      <Card className="p-6 bg-gradient-to-r from-primary/20 via-secondary/15 to-accent/20 border-primary/30 backdrop-blur-sm">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <motion.div 
                              className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold text-xl shadow-lg"
                              whileHover={{ scale: 1.1 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              {day}
                            </motion.div>
                            <div>
                              <h3 className="text-3xl font-bold mb-1">
                                Day {day}
                                <span className="text-lg font-normal text-muted-foreground ml-2">
                                  {new Date(new Date(trip.start_date).getTime() + (day - 1) * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                                </span>
                              </h3>
                              <p className="text-muted-foreground">
                                {filteredDayActivities.length} activities planned
                              </p>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-4">
                            {dayWeather && (
                              <motion.div 
                                className="flex items-center gap-3 bg-white/80 dark:bg-gray-800/80 rounded-lg px-4 py-3 shadow-lg"
                                whileHover={{ scale: 1.05 }}
                              >
                                {getWeatherIcon(dayWeather.condition)}
                                <div className="text-right">
                                  <div className="font-bold text-xl">{dayWeather.temp}°C</div>
                                  <div className="text-sm text-muted-foreground">{dayWeather.description}</div>
                                  <div className="text-xs text-muted-foreground">
                                    💨 {dayWeather.wind}km/h | 💧 {dayWeather.humidity}%
                                  </div>
                                </div>
                              </motion.div>
                            )}
                            
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => setExpandedDay(expandedDay === day ? null : day)}
                            >
                              {expandedDay === day ? 
                                <ChevronUp className="w-4 h-4" /> : 
                                <ChevronDown className="w-4 h-4" />
                              }
                            </Button>
                          </div>
                        </div>
                      </Card>

                      {/* Enhanced Activities List */}
                      <AnimatePresence>
                        {(expandedDay === day || expandedDay === null) && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="space-y-4 pl-8"
                          >
                            {filteredDayActivities.map((activity, idx) => {
                              const activityType = activityTypes[activity.activity_type] || activityTypes.sightseeing;
                              const ActivityIcon = activityType.icon;
                              
                              return (
                                <motion.div
                                  key={activity.id}
                                  initial={{ opacity: 0, x: -20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{ delay: idx * 0.1 }}
                                  viewport={{ once: true }}
                                  whileHover={{ scale: 1.02 }}
                                >
                                  <Card className="p-6 bg-card/80 backdrop-blur-sm border-border hover:border-primary/40 transition-all duration-300 hover:shadow-xl group">
                                    <div className="flex items-start gap-6">
                                      {/* Enhanced Time Column */}
                                      <div className="flex-shrink-0 w-28 text-center">
                                        <div className="text-lg font-bold text-primary bg-primary/10 rounded-lg px-3 py-2 mb-2">
                                          {activity.start_time}
                                        </div>
                                        {activity.end_time && (
                                          <>
                                            <div className="text-xs text-muted-foreground my-2 flex items-center justify-center">
                                              <div className="w-px h-6 bg-border"></div>
                                            </div>
                                            <div className="text-lg font-bold text-secondary bg-secondary/10 rounded-lg px-3 py-2">
                                              {activity.end_time}
                                            </div>
                                          </>
                                        )}
                                        <div className="text-xs text-muted-foreground mt-2">
                                          {activity.start_time && activity.end_time && 
                                            `${Math.round((new Date(`2000-01-01 ${activity.end_time}`) - new Date(`2000-01-01 ${activity.start_time}`)) / (1000 * 60))} min`
                                          }
                                        </div>
                                      </div>

                                      {/* Enhanced Activity Content */}
                                      <div className="flex-1">
                                        <div className="flex items-start justify-between gap-4 mb-4">
                                          <div className="flex items-center gap-4">
                                            <motion.div 
                                              className={`w-12 h-12 rounded-xl ${activityType.bgColor} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}
                                              whileHover={{ rotate: 360 }}
                                              transition={{ duration: 0.5 }}
                                            >
                                              <ActivityIcon className="w-6 h-6 text-white" />
                                            </motion.div>
                                            <div>
                                              <h4 className="text-xl font-bold mb-1">{activity.title}</h4>
                                              <Badge variant="outline" className="capitalize text-xs">
                                                {activity.activity_type.replace('_', ' ')}
                                              </Badge>
                                            </div>
                                          </div>
                                          
                                          <div className="flex items-center gap-2">
                                            <Button variant="ghost" size="sm">
                                              <Edit className="w-4 h-4" />
                                            </Button>
                                            {activity.coordinates && (
                                              <Button variant="ghost" size="sm">
                                                <ExternalLink className="w-4 h-4" />
                                              </Button>
                                            )}
                                          </div>
                                        </div>

                                        {activity.location && (
                                          <div className="flex items-center gap-2 text-muted-foreground mb-3">
                                            <MapPin className="w-4 h-4" />
                                            <span className="font-medium">{activity.location}</span>
                                            {activity.coordinates && (
                                              <Badge variant="outline" className="text-xs ml-2">
                                                📍 {activity.coordinates.lat.toFixed(4)}, {activity.coordinates.lng.toFixed(4)}
                                              </Badge>
                                            )}
                                          </div>
                                        )}

                                        {activity.description && (
                                          <p className="text-muted-foreground mb-4 leading-relaxed">
                                            {activity.description}
                                          </p>
                                        )}

                                        {/* Enhanced Booking Options */}
                                        {activity.booking_options && (
                                          <div className="bg-primary/5 rounded-lg p-4 mb-4">
                                            <h5 className="font-semibold mb-3 flex items-center gap-2">
                                              <Ticket className="w-4 h-4" />
                                              Booking Options
                                            </h5>
                                            <div className="grid md:grid-cols-2 gap-3">
                                              {Object.entries(activity.booking_options).map(([type, option]) => (
                                                <div key={type} className="flex items-center justify-between p-3 bg-card rounded-lg border">
                                                  <div>
                                                    <div className="font-medium capitalize">{type}</div>
                                                    <div className="text-sm text-muted-foreground">{option.provider}</div>
                                                  </div>
                                                  <div className="text-right">
                                                    <div className="font-bold">${option.price}</div>
                                                    {option.eco_price && (
                                                      <div className="text-sm text-green-600">${option.eco_price} eco</div>
                                                    )}
                                                  </div>
                                                </div>
                                              ))}
                                            </div>
                                          </div>
                                        )}

                                        {/* Action Buttons */}
                                        <div className="flex flex-wrap gap-2">
                                          <Button size="sm" variant="outline" onClick={() => handleBooking('activity')}>
                                            <Ticket className="w-3 h-3 mr-1" />
                                            Book Now
                                          </Button>
                                          <Button size="sm" variant="outline">
                                            <Heart className="w-3 h-3 mr-1" />
                                            Save
                                          </Button>
                                          <Button size="sm" variant="outline">
                                            <Share className="w-3 h-3 mr-1" />
                                            Share
                                          </Button>
                                        </div>

                                        {/* Eco-friendly indicator */}
                                        {trip.eco_friendly && (
                                          <div className="mt-3 flex items-center gap-2 text-green-600 text-sm">
                                            <TreePine className="w-4 h-4" />
                                            <span>Eco-friendly options available</span>
                                            <Badge className="bg-green-100 text-green-700 border-green-200 text-xs">
                                              -5% Carbon Offset
                                            </Badge>
                                          </div>
                                        )}
                                      </div>
                                    </div>
                                  </Card>
                                </motion.div>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })
              )}
            </div>
          </TabsContent>

          {/* Enhanced Map Tab */}
          <TabsContent value="map">
            <Card className="p-8 text-center bg-card/50 backdrop-blur-sm min-h-[600px] flex flex-col items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-md"
              >
                <Map className="w-20 h-20 mx-auto mb-6 text-muted-foreground" />
                <h3 className="text-2xl font-bold mb-4">Interactive Map Coming Soon</h3>
                <p className="text-muted-foreground mb-6">
                  View all your destinations and activities on an immersive 3D map with:
                </p>
                <div className="text-left space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-green-500" />
                    Real-time location tracking
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-green-500" />
                    3D landmark visualization
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-green-500" />
                    AR navigation assistance
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-green-500" />
                    Weather overlay
                  </div>
                </div>
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center border-2 border-dashed border-primary/30">
                  <p className="text-muted-foreground">Interactive 3D Map Placeholder</p>
                </div>
              </motion.div>
            </Card>
          </TabsContent>

          {/* Enhanced Weather Tab */}
          <TabsContent value="weather">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sampleItinerary.weather.daily.map((day, index) => (
                <motion.div
                  key={day.day}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="p-6 text-center bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all shadow-lg">
                    <h4 className="font-bold mb-4 text-lg">
                      Day {day.day}
                      <div className="text-sm text-muted-foreground font-normal">
                        {new Date(new Date(trip.start_date).getTime() + (day.day - 1) * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
                      </div>
                    </h4>
                    
                    <div className="flex justify-center mb-4">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {getWeatherIcon(day.condition)}
                      </motion.div>
                    </div>
                    
                    <div className="text-4xl font-bold mb-2 text-gradient">{day.temp}°C</div>
                    <p className="text-muted-foreground mb-4">{day.description}</p>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Humidity:</span>
                        <span className="font-medium">{day.humidity}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Wind:</span>
                        <span className="font-medium">{day.wind} km/h</span>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <Card className="p-6 bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-950 dark:to-green-950">
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  <Bell className="w-5 h-5" />
                  Weather Recommendations
                </h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold mb-2">What to Pack:</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Light jacket for Day 3 (rain expected)</li>
                      <li>• Sunglasses for Days 2 & 4 (sunny)</li>
                      <li>• Comfortable walking shoes</li>
                      <li>• Umbrella or raincoat</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Activity Tips:</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Perfect weather for Eiffel Tower visit (Day 4)</li>
                      <li>• Indoor activities recommended for Day 3</li>
                      <li>• Great conditions for Seine cruise (Day 2)</li>
                      <li>• Outdoor dining weather on Days 2 & 4</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default EnhancedTripView;