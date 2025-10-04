import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, Settings, MapPin, Calendar, DollarSign, Heart, Star,
  Plus, Edit, Trash2, Eye, Download, Share, Trophy, Badge,
  Plane, Camera, Mountain, Utensils, Coffee, Music, Palette,
  Sun, Snowflake, Waves, TreePine, Building, Compass,
  Gift, Sparkles, Crown, Award, Medal, Gem, ChevronRight,
  Clock, Globe, Users, ShoppingBag, BookOpen, TrendingUp,
  Target, Map, Zap, Bell, Filter, Search, MoreHorizontal,
  ExternalLink, MessageSquare, ThumbsUp, Copy, Check
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge as UIBadge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { JourneyProgress } from '@/components/JourneyProgress';

const Profile = () => {
  const { toast } = useToast();
  const [isPreferencesOpen, setIsPreferencesOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [showAchievements, setShowAchievements] = useState(false);
  const [copiedSouvenir, setCopiedSouvenir] = useState<string | null>(null);

  // Mock user data
  const [userProfile, setUserProfile] = useState({
    name: 'Alex Johnson',
    email: 'alex.johnson@email.com',
    avatar: '/api/placeholder/150/150',
    memberSince: 'March 2024',
    totalTrips: 8,
    countriesVisited: 12,
    carbonSaved: 450,
    totalDistance: 45280, // km
    favoriteDestination: 'Paris, France',
    averageTripRating: 4.8,
    monthsActive: 8,
    referralCode: 'ALEX2024',
    level: 'Explorer',
    experiencePoints: 2840,
    nextLevelPoints: 3500
  });

  const [preferences, setPreferences] = useState({
    interests: ['adventure', 'culture', 'foodie', 'photography', 'nature'],
    budget: '$1000-2500',
    travelStyle: 'mid-range',
    accommodationType: 'hotels',
    groupSize: 'couple',
    seasonPreference: 'spring'
  });

  const [savedTrips, setSavedTrips] = useState([
    {
      id: '1',
      destination: 'Paris, France',
      dates: 'May 15-22, 2026',
      status: 'planned',
      image: '/api/placeholder/400/250',
      budget: '$2,400',
      duration: '7 days',
      highlights: ['Eiffel Tower', 'Louvre Museum', 'Seine River Cruise'],
      completionPercentage: 85
    },
    {
      id: '2',
      destination: 'Tokyo, Japan',
      dates: 'March 10-20, 2026',
      status: 'planning',
      image: '/api/placeholder/400/250',
      budget: '$3,200',
      duration: '10 days',
      highlights: ['Cherry Blossoms', 'Shibuya Crossing', 'Mount Fuji'],
      completionPercentage: 60
    },
    {
      id: '3',
      destination: 'Santorini, Greece',
      dates: 'September 5-12, 2025',
      status: 'completed',
      image: '/api/placeholder/400/250',
      budget: '$1,800',
      duration: '7 days',
      highlights: ['Sunset at Oia', 'Blue Domes', 'Wine Tasting'],
      completionPercentage: 100
    }
  ]);

  const [achievements, setAchievements] = useState([
    {
      id: '1',
      name: 'First Steps',
      description: 'Complete your first trip',
      icon: Plane,
      unlocked: true,
      unlockedDate: 'September 2025',
      rarity: 'common'
    },
    {
      id: '2',
      name: 'Globe Trotter',
      description: 'Visit 10 different countries',
      icon: Globe,
      unlocked: true,
      unlockedDate: 'October 2025',
      rarity: 'rare'
    },
    {
      id: '3',
      name: 'Eco Warrior',
      description: 'Save 500kg of CO₂',
      icon: TreePine,
      unlocked: false,
      progress: 90,
      rarity: 'epic'
    },
    {
      id: '4',
      name: 'Cultural Explorer',
      description: 'Visit 15 UNESCO sites',
      icon: Building,
      unlocked: false,
      progress: 33,
      rarity: 'legendary'
    }
  ]);

  const [travelInsights, setTravelInsights] = useState({
    mostVisitedSeason: 'Spring',
    favoriteActivityType: 'Cultural',
    averageTripDuration: 7.2,
    budgetEfficiency: 85,
    sustainabilityScore: 92,
    planningAdvanceTime: 45 // days
  });

  const [digitalSouvenirs, setDigitalSouvenirs] = useState([
    {
      id: '1',
      name: 'Eiffel Tower Explorer',
      type: 'NFT Badge',
      image: '/api/placeholder/120/120',
      description: 'Visited the Eiffel Tower',
      rarity: 'common',
      earned: 'September 2025'
    },
    {
      id: '2',
      name: 'Santorini Sunset Collector',
      type: 'NFT Photo',
      image: '/api/placeholder/120/120',
      description: 'Captured sunset in Oia',
      rarity: 'rare',
      earned: 'September 2025'
    },
    {
      id: '3',
      name: 'Carbon Saver Champion',
      type: 'Achievement',
      image: '/api/placeholder/120/120',
      description: 'Saved 500kg CO2 eco-friendly travel',
      rarity: 'epic',
      earned: 'October 2025'
    },
    {
      id: '4',
      name: 'Cultural Explorer',
      type: 'NFT Badge',
      image: '/api/placeholder/120/120',
      description: 'Visited 5 UNESCO sites',
      rarity: 'legendary',
      earned: 'August 2025'
    }
  ]);

  const interestOptions = [
    { value: 'adventure', label: 'Adventure', icon: Mountain },
    { value: 'culture', label: 'Culture', icon: Building },
    { value: 'foodie', label: 'Foodie', icon: Utensils },
    { value: 'photography', label: 'Photography', icon: Camera },
    { value: 'nature', label: 'Nature', icon: TreePine },
    { value: 'beach', label: 'Beach', icon: Waves },
    { value: 'city', label: 'City Life', icon: Building },
    { value: 'art', label: 'Art & Museums', icon: Palette },
    { value: 'music', label: 'Music & Festivals', icon: Music },
    { value: 'wellness', label: 'Wellness', icon: Heart },
    { value: 'shopping', label: 'Shopping', icon: ShoppingBag },
    { value: 'history', label: 'History', icon: BookOpen }
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'bg-gray-500';
      case 'rare': return 'bg-blue-500';
      case 'epic': return 'bg-indigo-500';
      case 'legendary': return 'bg-gradient-to-r from-yellow-400 to-orange-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-emerald-500';
      case 'planned': return 'bg-blue-500';
      case 'planning': return 'bg-orange-500';
      default: return 'bg-gray-500';
    }
  };

  const handleUpdatePreferences = () => {
    toast({
      title: "Preferences Updated",
      description: "Preferences updated successfully.",
    });
    setIsPreferencesOpen(false);
  };

  const handleStartNewPlan = () => {
    window.location.href = '/plan-trip';
  };

  const handleViewTrip = (tripId: string) => {
    window.location.href = `/trip/${tripId}/enhanced`;
  };

  const handleDeleteTrip = (tripId: string) => {
    setSavedTrips(prev => prev.filter(trip => trip.id !== tripId));
    toast({
      title: "Trip Deleted",
      description: "Trip removed from saved plans.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5 pt-20 pb-12 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 -left-20 w-60 h-60 bg-secondary/8 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-20 right-1/3 w-40 h-40 bg-accent/8 rounded-full blur-2xl animate-pulse delay-2000" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          {/* Journey Progress */}
          <div className="mb-8">
            <JourneyProgress currentStep="complete" className="max-w-4xl mx-auto" />
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <Avatar className="w-20 h-20 ring-4 ring-primary/50">
                <AvatarImage src={userProfile.avatar} alt={userProfile.name} />
                <AvatarFallback className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary text-white">
                  {userProfile.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div>
                <h1 className="heading-3 text-gradient">{userProfile.name}</h1>
                <p className="text-lg text-muted-foreground">{userProfile.email}</p>
                <p className="text-sm text-muted-foreground">Member since {userProfile.memberSince}</p>
              </div>
            </div>
            <div className="flex space-x-3 mt-4 md:mt-0">
              <Button
                onClick={handleStartNewPlan}
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white border-0 shadow-lg hover:shadow-primary/25 hover:scale-105 transition-all duration-300"
              >
                <Plus className="w-4 h-4 mr-2" />
                Start New Plan
              </Button>
              <Dialog open={isPreferencesOpen} onOpenChange={setIsPreferencesOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-card/60 backdrop-blur-sm border border-border text-foreground hover:bg-card/80 hover:border-primary/50 hover:scale-105 transition-all duration-300">
                    <Settings className="w-4 h-4 mr-2" />
                    Manage Preferences
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Update Travel Preferences</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-6 py-4">
                    <div>
                      <Label className="text-base font-semibold">Travel Interests</Label>
                      <div className="grid grid-cols-3 gap-3 mt-3">
                        {interestOptions.map((interest) => {
                          const IconComponent = interest.icon;
                          const isSelected = preferences.interests.includes(interest.value);
                          return (
                            <Button
                              key={interest.value}
                              variant={isSelected ? "default" : "outline"}
                              size="sm"
                              className={`justify-start ${isSelected ? 'bg-primary text-white' : ''}`}
                              onClick={() => {
                                setPreferences(prev => ({
                                  ...prev,
                                  interests: isSelected 
                                    ? prev.interests.filter(i => i !== interest.value)
                                    : [...prev.interests, interest.value]
                                }));
                              }}
                            >
                              <IconComponent className="w-4 h-4 mr-2" />
                              {interest.label}
                            </Button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label>Budget Range</Label>
                        <Select value={preferences.budget} onValueChange={(value) => setPreferences(prev => ({ ...prev, budget: value }))}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="$500-1000">$500 - $1,000</SelectItem>
                            <SelectItem value="$1000-2500">$1,000 - $2,500</SelectItem>
                            <SelectItem value="$2500-5000">$2,500 - $5,000</SelectItem>
                            <SelectItem value="$5000+">$5,000+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label>Travel Style</Label>
                        <Select value={preferences.travelStyle} onValueChange={(value) => setPreferences(prev => ({ ...prev, travelStyle: value }))}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="budget">Budget</SelectItem>
                            <SelectItem value="mid-range">Mid-range</SelectItem>
                            <SelectItem value="luxury">Luxury</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label>Group Size</Label>
                        <Select value={preferences.groupSize} onValueChange={(value) => setPreferences(prev => ({ ...prev, groupSize: value }))}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="solo">Solo</SelectItem>
                            <SelectItem value="couple">Couple</SelectItem>
                            <SelectItem value="family">Family</SelectItem>
                            <SelectItem value="group">Group</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label>Season Preference</Label>
                        <Select value={preferences.seasonPreference} onValueChange={(value) => setPreferences(prev => ({ ...prev, seasonPreference: value }))}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="spring">Spring</SelectItem>
                            <SelectItem value="summer">Summer</SelectItem>
                            <SelectItem value="fall">Fall</SelectItem>
                            <SelectItem value="winter">Winter</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="flex justify-end space-x-3 pt-4">
                      <Button variant="outline" onClick={() => setIsPreferencesOpen(false)}>
                        Cancel
                      </Button>
                      <Button onClick={handleUpdatePreferences}>
                        Save Changes
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          {/* Enhanced Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <Card className="bg-card/60 backdrop-blur-md border border-border shadow-xl hover:shadow-primary/10 transition-all duration-300">
                <CardContent className="p-4 text-center">
                  <div className="flex items-center justify-center w-12 h-12 mx-auto mb-2 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full backdrop-blur-sm">
                    <Plane className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">{userProfile.totalTrips}</div>
                  <div className="text-sm text-muted-foreground">Total Trips</div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <Card className="bg-card/60 backdrop-blur-md border border-border shadow-xl hover:shadow-secondary/10 transition-all duration-300">
                <CardContent className="p-4 text-center">
                  <div className="flex items-center justify-center w-12 h-12 mx-auto mb-2 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-full backdrop-blur-sm">
                    <Globe className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">{userProfile.countriesVisited}</div>
                  <div className="text-sm text-muted-foreground">Countries</div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <Card className="bg-card/60 backdrop-blur-md border border-border shadow-xl hover:shadow-accent/10 transition-all duration-300">
                <CardContent className="p-4 text-center">
                  <div className="flex items-center justify-center w-12 h-12 mx-auto mb-2 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-full backdrop-blur-sm">
                    <Trophy className="w-6 h-6 text-accent" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">{digitalSouvenirs.length}</div>
                  <div className="text-sm text-muted-foreground">Souvenirs</div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <Card className="bg-card/60 backdrop-blur-md border border-border shadow-xl hover:shadow-green-400/10 transition-all duration-300">
                <CardContent className="p-4 text-center">
                  <div className="flex items-center justify-center w-12 h-12 mx-auto mb-2 bg-gradient-to-br from-green-400/20 to-emerald-500/20 rounded-full backdrop-blur-sm">
                    <TreePine className="w-6 h-6 text-green-500" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">{userProfile.carbonSaved}</div>
                  <div className="text-sm text-muted-foreground">kg CO₂ Saved</div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <Card className="bg-card/60 backdrop-blur-md border border-border shadow-xl hover:shadow-accent/10 transition-all duration-300">
                <CardContent className="p-4 text-center">
                  <div className="flex items-center justify-center w-12 h-12 mx-auto mb-2 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full backdrop-blur-sm">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">{(userProfile.totalDistance / 1000).toFixed(0)}k</div>
                  <div className="text-sm text-muted-foreground">km Traveled</div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <Card className="bg-card/60 backdrop-blur-md border border-border shadow-xl hover:shadow-yellow-400/10 transition-all duration-300">
                <CardContent className="p-4 text-center">
                  <div className="flex items-center justify-center w-12 h-12 mx-auto mb-2 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full backdrop-blur-sm">
                    <Star className="w-6 h-6 text-yellow-500" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">{userProfile.averageTripRating}</div>
                  <div className="text-sm text-muted-foreground">Avg Rating</div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Level Progress */}
          <Card className="bg-card/60 backdrop-blur-md border border-border shadow-xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full text-white font-bold shadow-lg">
                    {userProfile.level.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{userProfile.level}</h3>
                    <p className="text-sm text-muted-foreground">{userProfile.experiencePoints} / {userProfile.nextLevelPoints} XP</p>
                  </div>
                </div>
                <Button 
                  className="bg-card/60 backdrop-blur-sm border border-border text-foreground hover:bg-card/80 hover:border-primary/50 transition-all duration-300"
                  size="sm"
                  onClick={() => setShowAchievements(!showAchievements)}
                >
                  <Trophy className="w-4 h-4 mr-2" />
                  Achievements
                </Button>
              </div>
              <div className="w-full bg-secondary rounded-full h-3">
                <motion.div 
                  className="bg-gradient-to-r from-primary to-primary/80 h-3 rounded-full shadow-lg"
                  initial={{ width: 0 }}
                  animate={{ width: `${(userProfile.experiencePoints / userProfile.nextLevelPoints) * 100}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </div>
              <p className="text-xs text-muted-foreground mt-2">{userProfile.nextLevelPoints - userProfile.experiencePoints} XP to next level</p>
            </CardContent>
          </Card>

          {/* Achievements Panel */}
          <AnimatePresence>
            {showAchievements && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle>Achievements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {achievements.map((achievement) => {
                        const IconComponent = achievement.icon;
                        return (
                          <div 
                            key={achievement.id}
                            className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                              achievement.unlocked 
                                ? 'bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-300' 
                                : 'bg-gray-50 border-gray-200'
                            }`}
                          >
                            <div className={`flex items-center justify-center w-12 h-12 mx-auto mb-3 rounded-full ${
                              achievement.unlocked 
                                ? `${getRarityColor(achievement.rarity)} text-white` 
                                : 'bg-gray-300 text-gray-500'
                            }`}>
                              <IconComponent className="w-6 h-6" />
                            </div>
                            <h4 className={`text-center font-semibold mb-1 ${
                              achievement.unlocked ? 'text-gray-900' : 'text-gray-500'
                            }`}>
                              {achievement.name}
                            </h4>
                            <p className={`text-xs text-center mb-2 ${
                              achievement.unlocked ? 'text-gray-600' : 'text-gray-400'
                            }`}>
                              {achievement.description}
                            </p>
                            {achievement.unlocked ? (
                              <div className="text-center">
                                <UIBadge className={`${getRarityColor(achievement.rarity)} text-white text-xs`}>
                                  {achievement.rarity}
                                </UIBadge>
                                <p className="text-xs text-gray-500 mt-1">{achievement.unlockedDate}</p>
                              </div>
                            ) : (
                              <div className="text-center">
                                <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
                                  <div 
                                    className="bg-primary h-2 rounded-full transition-all duration-300"
                                    style={{ width: `${achievement.progress || 0}%` }}
                                  />
                                </div>
                                <p className="text-xs text-gray-400">{achievement.progress || 0}% complete</p>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 lg:max-w-2xl mx-auto bg-card/60 backdrop-blur-md border border-border">
            <TabsTrigger value="overview" className="flex items-center space-x-2 data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
              <TrendingUp className="w-4 h-4" />
              <span className="hidden sm:inline">Overview</span>
            </TabsTrigger>
            <TabsTrigger value="trips" className="flex items-center space-x-2 data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
              <MapPin className="w-4 h-4" />
              <span className="hidden sm:inline">Trips</span>
            </TabsTrigger>
            <TabsTrigger value="souvenirs" className="flex items-center space-x-2 data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
              <Trophy className="w-4 h-4" />
              <span className="hidden sm:inline">Souvenirs</span>
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center space-x-2 data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
              <Target className="w-4 h-4" />
              <span className="hidden sm:inline">Analytics</span>
            </TabsTrigger>
            <TabsTrigger value="preferences" className="flex items-center space-x-2 data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
              <Settings className="w-4 h-4" />
              <span className="hidden sm:inline">Settings</span>
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="grid lg:grid-cols-3 gap-6">
                {/* Recent Trips */}
                <Card className="lg:col-span-2">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>Recent Trips</span>
                      <Button variant="ghost" size="sm" onClick={() => setActiveTab('trips')}>
                        View All <ChevronRight className="w-4 h-4 ml-1" />
                      </Button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {savedTrips.slice(0, 3).map((trip) => (
                      <motion.div 
                        key={trip.id} 
                        className="flex items-center space-x-4 p-4 rounded-lg bg-card hover:bg-primary/5 transition-all duration-300 cursor-pointer border hover:border-primary/20"
                        whileHover={{ scale: 1.02 }}
                        onClick={() => handleViewTrip(trip.id)}
                      >
                        <img
                          src={trip.image}
                          alt={trip.destination}
                          className="w-20 h-16 object-cover rounded-lg shadow-md"
                        />
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1">{trip.destination}</h4>
                          <p className="text-sm text-muted-foreground mb-2">{trip.dates}</p>
                          <div className="flex items-center space-x-2">
                            <UIBadge className={`${getStatusColor(trip.status)} text-white text-xs`}>
                              {trip.status}
                            </UIBadge>
                            <span className="text-xs text-muted-foreground">{trip.duration}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-primary">{trip.budget}</p>
                          {trip.status !== 'completed' && (
                            <p className="text-xs text-muted-foreground">{trip.completionPercentage}% planned</p>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>

                {/* Quick Stats & Insights */}
                <div className="space-y-6">
                  {/* Latest Souvenirs */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span>Latest Souvenirs</span>
                        <Button variant="ghost" size="sm" onClick={() => setActiveTab('souvenirs')}>
                          <ChevronRight className="w-4 h-4" />
                        </Button>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {digitalSouvenirs.slice(0, 3).map((souvenir) => (
                        <div key={souvenir.id} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-primary/5 transition-colors">
                          <div className="relative">
                            <img
                              src={souvenir.image}
                              alt={souvenir.name}
                              className="w-10 h-10 object-cover rounded-lg"
                            />
                            <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full ${getRarityColor(souvenir.rarity)}`} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-sm truncate">{souvenir.name}</h4>
                            <p className="text-xs text-muted-foreground">{souvenir.type}</p>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  {/* Travel Insights */}
                  <Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
                    <CardHeader>
                      <CardTitle className="text-lg">Travel Insights</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Favorite Season</span>
                        <span className="font-semibold text-primary">{travelInsights.mostVisitedSeason}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Avg Trip Length</span>
                        <span className="font-semibold text-primary">{travelInsights.averageTripDuration} days</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Planning Time</span>
                        <span className="font-semibold text-primary">{travelInsights.planningAdvanceTime} days</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Eco Score</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-12 bg-secondary rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-green-400 to-emerald-500 h-2 rounded-full"
                              style={{ width: `${travelInsights.sustainabilityScore}%` }}
                            />
                          </div>
                          <span className="font-semibold text-green-400 text-sm">{travelInsights.sustainabilityScore}%</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </motion.div>
          </TabsContent>

          {/* Trips Tab */}
          <TabsContent value="trips" className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {/* Search and Filter Bar */}
              <Card>
                <CardContent className="p-4">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1 relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                      <Input
                        placeholder="Search trips by destination..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                    <Select value={filterStatus} onValueChange={setFilterStatus}>
                      <SelectTrigger className="w-full sm:w-40">
                        <Filter className="w-4 h-4 mr-2" />
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Trips</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                        <SelectItem value="planned">Planned</SelectItem>
                        <SelectItem value="planning">Planning</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              <div className="grid gap-6">
                {savedTrips
                  .filter(trip => 
                    (filterStatus === 'all' || trip.status === filterStatus) &&
                    trip.destination.toLowerCase().includes(searchQuery.toLowerCase())
                  )
                  .map((trip) => (
                    <Card key={trip.id} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img
                        src={trip.image}
                        alt={trip.destination}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{trip.destination}</h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {trip.dates}
                            </div>
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {trip.duration}
                            </div>
                            <div className="flex items-center">
                              <DollarSign className="w-4 h-4 mr-1" />
                              {trip.budget}
                            </div>
                          </div>
                          <UIBadge className={`${getStatusColor(trip.status)} text-white mb-3`}>
                            {trip.status}
                          </UIBadge>
                        </div>
                        <div className="flex space-x-2">
                          <Button
                            size="sm"
                            onClick={() => handleViewTrip(trip.id)}
                            className="bg-primary hover:bg-primary/90"
                          >
                            <Eye className="w-4 h-4 mr-1" />
                            View Plan
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleDeleteTrip(trip.id)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Highlights</h4>
                        <div className="flex flex-wrap gap-2">
                          {trip.highlights.map((highlight, index) => (
                            <UIBadge key={index} variant="secondary">
                              {highlight}
                            </UIBadge>
                          ))}
                        </div>
                      </div>

                      {trip.status !== 'completed' && (
                        <div className="mb-4">
                          <div className="flex items-center justify-between text-sm text-gray-600 mb-1">
                            <span>Planning Progress</span>
                            <span>{trip.completionPercentage}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-300"
                              style={{ width: `${trip.completionPercentage}%` }}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
                  ))}
              </div>
            </motion.div>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="grid lg:grid-cols-2 gap-6">
                {/* Travel Pattern Analysis */}
                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <TrendingUp className="w-5 h-5 mr-2" />
                      Travel Patterns
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-600">Budget Efficiency</span>
                        <span className="text-sm font-bold text-green-600">{travelInsights.budgetEfficiency}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className="bg-gradient-to-r from-green-400 to-green-600 h-3 rounded-full"
                          style={{ width: `${travelInsights.budgetEfficiency}%` }}
                        />
                      </div>
                      <p className="text-xs text-gray-500 mt-1">You typically stay within budget</p>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-600">Sustainability Score</span>
                        <span className="text-sm font-bold text-green-600">{travelInsights.sustainabilityScore}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className="bg-gradient-to-r from-green-400 to-emerald-600 h-3 rounded-full"
                          style={{ width: `${travelInsights.sustainabilityScore}%` }}
                        />
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Excellent eco-friendly choices</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary mb-1">{travelInsights.averageTripDuration}</div>
                        <div className="text-xs text-gray-600">Avg Days per Trip</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-secondary mb-1">{travelInsights.planningAdvanceTime}</div>
                        <div className="text-xs text-gray-600">Days Advance Planning</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Destination Preferences */}
                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Map className="w-5 h-5 mr-2" />
                      Destination Insights
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg">
                      <MapPin className="w-12 h-12 text-primary mx-auto mb-3" />
                      <h3 className="font-bold text-gray-900 mb-1">Favorite Destination</h3>
                      <p className="text-lg font-semibold text-primary">{userProfile.favoriteDestination}</p>
                      <p className="text-sm text-gray-600">Based on ratings and revisits</p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Preferred Activity</span>
                        <span className="font-semibold text-gray-900">{travelInsights.favoriteActivityType}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Most Visited Season</span>
                        <span className="font-semibold text-gray-900">{travelInsights.mostVisitedSeason}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Total Distance</span>
                        <span className="font-semibold text-gray-900">{userProfile.totalDistance.toLocaleString()} km</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Monthly Activity */}
                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg lg:col-span-2">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Calendar className="w-5 h-5 mr-2" />
                      Travel Timeline
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-12 gap-2">
                      {Array.from({ length: 12 }, (_, i) => {
                        const isActive = i < userProfile.monthsActive;
                        const hasTrip = savedTrips.some(trip => {
                          const month = new Date(trip.dates.split(' ')[0]).getMonth();
                          return month === i;
                        });
                        return (
                          <div key={i} className="text-center">
                            <div 
                              className={`h-8 rounded mb-1 flex items-center justify-center ${
                                hasTrip 
                                  ? 'bg-gradient-to-t from-primary to-secondary text-white' 
                                  : isActive 
                                    ? 'bg-gray-200' 
                                    : 'bg-gray-100'
                              }`}
                            >
                              {hasTrip && <Plane className="w-3 h-3" />}
                            </div>
                            <div className="text-xs text-gray-600">
                              {new Date(2025, i).toLocaleDateString('en', { month: 'short' })}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <p className="text-xs text-gray-500 mt-4 text-center">
                      Your travel activity over the past year • Blue months indicate trips
                    </p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </TabsContent>

          {/* Souvenirs Tab */}
          <TabsContent value="souvenirs" className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {digitalSouvenirs.map((souvenir) => (
                  <Card key={souvenir.id} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg overflow-hidden hover:scale-105 transition-all duration-300">
                    <div className="relative">
                      <img
                        src={souvenir.image}
                        alt={souvenir.name}
                        className="w-full h-40 object-cover"
                      />
                      <div className={`absolute top-2 right-2 w-6 h-6 rounded-full ${getRarityColor(souvenir.rarity)} flex items-center justify-center`}>
                        {souvenir.rarity === 'legendary' && <Crown className="w-4 h-4 text-white" />}
                        {souvenir.rarity === 'epic' && <Gem className="w-4 h-4 text-white" />}
                        {souvenir.rarity === 'rare' && <Star className="w-4 h-4 text-white" />}
                        {souvenir.rarity === 'common' && <Badge className="w-4 h-4 text-white" />}
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h4 className="font-bold text-gray-900 mb-1">{souvenir.name}</h4>
                      <p className="text-sm text-gray-600 mb-2">{souvenir.type}</p>
                      <p className="text-xs text-gray-500 mb-3">{souvenir.description}</p>
                      <div className="flex items-center justify-between">
                        <UIBadge className={`${getRarityColor(souvenir.rarity)} text-white text-xs`}>
                          {souvenir.rarity}
                        </UIBadge>
                        <div className="flex space-x-1">
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => {
                              toast({
                                title: "Downloaded!",
                                description: `${souvenir.name} saved to your device.`,
                              });
                            }}
                          >
                            <Download className="w-3 h-3" />
                          </Button>
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => {
                              setCopiedSouvenir(souvenir.id);
                              setTimeout(() => setCopiedSouvenir(null), 2000);
                              toast({
                                title: "Link Copied!",
                                description: "Share this souvenir with friends.",
                              });
                            }}
                          >
                            {copiedSouvenir === souvenir.id ? (
                              <Check className="w-3 h-3 text-green-600" />
                            ) : (
                              <Copy className="w-3 h-3" />
                            )}
                          </Button>
                          <Button size="sm" variant="outline">
                            <MoreHorizontal className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                      <p className="text-xs text-gray-400 mt-2">Earned {souvenir.earned}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          </TabsContent>

          {/* Preferences Tab */}
          <TabsContent value="preferences" className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Travel Preferences</span>
                    <Button onClick={() => setIsPreferencesOpen(true)}>
                      <Edit className="w-4 h-4 mr-2" />
                      Edit Preferences
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Travel Interests</h4>
                    <div className="flex flex-wrap gap-2">
                      {preferences.interests.map((interest) => {
                        const interestOption = interestOptions.find(opt => opt.value === interest);
                        const IconComponent = interestOption?.icon || Heart;
                        return (
                          <UIBadge key={interest} className="bg-primary text-white">
                            <IconComponent className="w-3 h-3 mr-1" />
                            {interestOption?.label || interest}
                          </UIBadge>
                        );
                      })}
                    </div>
                  </div>

                  <Separator />

                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Budget Range</h4>
                      <div className="flex items-center text-gray-600">
                        <DollarSign className="w-4 h-4 mr-2" />
                        {preferences.budget}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Travel Style</h4>
                      <div className="flex items-center text-gray-600">
                        <Star className="w-4 h-4 mr-2" />
                        {preferences.travelStyle}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Group Size</h4>
                      <div className="flex items-center text-gray-600">
                        <Users className="w-4 h-4 mr-2" />
                        {preferences.groupSize}
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Accommodation</h4>
                      <div className="flex items-center text-gray-600">
                        <Building className="w-4 h-4 mr-2" />
                        {preferences.accommodationType}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Season Preference</h4>
                      <div className="flex items-center text-gray-600">
                        {preferences.seasonPreference === 'spring' && <Sun className="w-4 h-4 mr-2" />}
                        {preferences.seasonPreference === 'summer' && <Sun className="w-4 h-4 mr-2" />}
                        {preferences.seasonPreference === 'fall' && <TreePine className="w-4 h-4 mr-2" />}
                        {preferences.seasonPreference === 'winter' && <Snowflake className="w-4 h-4 mr-2" />}
                        {preferences.seasonPreference}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;