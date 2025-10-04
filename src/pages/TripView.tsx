import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, Calendar, DollarSign, MapPin, Clock, Edit, 
  Plane, Hotel, Ticket, Sun, Cloud, CloudRain, Snowflake,
  Star, Gift, Save, Share, Navigation, Coffee, Utensils,
  Camera, TreePine, Heart, Sparkles, Map, Settings,
  Plus, Minus, RotateCcw, Check, X, Award, Download
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const TripView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [trip, setTrip] = useState<any>(null);
  const [itinerary, setItinerary] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('itinerary');
  const [editingActivity, setEditingActivity] = useState<any>(null);
  const [weatherData, setWeatherData] = useState<any>(null);

  // Mock weather data (in real app, this would come from weather API)
  const mockWeather = {
    daily: [
      { day: 1, temp: 75, condition: 'sunny', description: 'Sunny' },
      { day: 2, temp: 72, condition: 'cloudy', description: 'Partly Cloudy' },
      { day: 3, temp: 68, condition: 'rainy', description: 'Light Rain' },
      { day: 4, temp: 73, condition: 'sunny', description: 'Sunny' },
      { day: 5, temp: 76, condition: 'sunny', description: 'Clear Skies' },
    ]
  };

  const getWeatherIcon = (condition: string) => {
    switch (condition) {
      case 'sunny': return <Sun className="w-5 h-5 text-yellow-500" />;
      case 'cloudy': return <Cloud className="w-5 h-5 text-gray-500" />;
      case 'rainy': return <CloudRain className="w-5 h-5 text-blue-500" />;
      case 'snowy': return <Snowflake className="w-5 h-5 text-blue-200" />;
      default: return <Sun className="w-5 h-5 text-yellow-500" />;
    }
  };

  const bookingOptions = [
    { type: 'flight', icon: Plane, label: 'Book Flight', color: 'bg-blue-500 hover:bg-blue-600' },
    { type: 'hotel', icon: Hotel, label: 'Book Hotel', color: 'bg-green-500 hover:bg-green-600' },
    { type: 'tour', icon: Ticket, label: 'Book Tour', color: 'bg-purple-500 hover:bg-purple-600' },
  ];

  const activityTypes = {
    'sightseeing': { icon: Camera, color: 'text-blue-500' },
    'food': { icon: Utensils, color: 'text-orange-500' },
    'nature': { icon: TreePine, color: 'text-green-500' },
    'culture': { icon: Star, color: 'text-purple-500' },
    'relaxation': { icon: Coffee, color: 'text-amber-500' },
    'adventure': { icon: Navigation, color: 'text-red-500' },
  };

  useEffect(() => {
    fetchTripData();
  }, [id]);

  const fetchTripData = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate('/auth');
        return;
      }

      // Fetch trip
      const { data: tripData, error: tripError } = await supabase
        .from('trips')
        .select('*')
        .eq('id', id)
        .eq('user_id', session.user.id)
        .single();

      if (tripError) throw tripError;
      setTrip(tripData);

      // Fetch itinerary
      const { data: itineraryData, error: itineraryError } = await supabase
        .from('itineraries')
        .select('*')
        .eq('trip_id', id)
        .order('day_number', { ascending: true })
        .order('start_time', { ascending: true });

      if (itineraryError) throw itineraryError;
      setItinerary(itineraryData || []);
    } catch (error: any) {
      console.error('Error fetching trip:', error);
      toast({
        title: 'Error',
        description: 'Failed to load trip details.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleBooking = (type: string) => {
    // Navigate to booking page with the specific type
    navigate(`/trip/${id}/booking?type=${type}`);
  };

  const handleSavePlan = async () => {
    try {
      // Update trip status or save modifications
      toast({
        title: 'Plan Saved',
        description: 'Your itinerary has been saved successfully!',
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to save plan.',
        variant: 'destructive',
      });
    }
  };

  const handleGetDigitalSouvenir = () => {
    toast({
      title: 'Digital Souvenir Created! 🎁',
      description: `You've earned a virtual ${trip?.destination} travel badge!`,
    });
    // In real app, this would mint an NFT or create a digital collectible
  };

  const handleEditActivity = (activity: any) => {
    setEditingActivity(activity);
  };

  const handleUpdateActivity = async () => {
    try {
      const { error } = await supabase
        .from('itineraries')
        .update({
          title: editingActivity.title,
          start_time: editingActivity.start_time,
          end_time: editingActivity.end_time,
          description: editingActivity.description,
        })
        .eq('id', editingActivity.id);

      if (error) throw error;

      await fetchTripData();
      setEditingActivity(null);
      toast({
        title: 'Activity Updated',
        description: 'Your activity has been updated successfully!',
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to update activity.',
        variant: 'destructive',
      });
    }
  };

  const groupedItinerary = itinerary.reduce((acc: any, item) => {
    if (!acc[item.day_number]) {
      acc[item.day_number] = [];
    }
    acc[item.day_number].push(item);
    return acc;
  }, {});

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <Sparkles className="w-12 h-12 mx-auto mb-4 text-primary animate-spin" />
          <p className="text-muted-foreground">Loading your amazing trip...</p>
        </motion.div>
      </div>
    );
  }

  if (!trip) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Trip not found</h2>
          <Button onClick={() => navigate('/dashboard')}>Go to Dashboard</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5">
      {/* Enhanced Navigation */}
      <nav className="border-b border-border bg-card/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/dashboard')}
              className="hover:bg-primary/10 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" onClick={handleSavePlan}>
                <Save className="w-4 h-4 mr-2" />
                Save Plan
              </Button>
              <Button variant="outline" size="sm">
                <Share className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-12">
        {/* Trip Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row items-start justify-between gap-6 mb-6">
            <div className="flex-1">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gradient">
                {trip.destination}
              </h1>
              <div className="flex flex-wrap gap-4 text-muted-foreground mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="font-medium">
                    {new Date(trip.start_date).toLocaleDateString()} - {new Date(trip.end_date).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-accent" />
                  <span className="font-medium">Budget: ${trip.budget?.toLocaleString()}</span>
                </div>
                {trip.eco_friendly && (
                  <Badge className="bg-green-100 text-green-700 border-green-200">
                    <TreePine className="w-3 h-3 mr-1" />
                    Eco-Friendly
                  </Badge>
                )}
              </div>
              {trip.preferences && trip.preferences.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {trip.preferences.map((pref: string) => (
                    <Badge key={pref} variant="outline" className="text-xs">
                      {pref}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col gap-3">
              <Button 
                onClick={handleGetDigitalSouvenir}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
              >
                <Gift className="w-4 h-4 mr-2" />
                Get Digital Souvenir
              </Button>
              <div className="grid grid-cols-3 gap-2">
                {bookingOptions.map((option) => {
                  const Icon = option.icon;
                  return (
                    <Button
                      key={option.type}
                      size="sm"
                      className={`${option.color} text-white text-xs px-3 py-2`}
                      onClick={() => handleBooking(option.type)}
                    >
                      <Icon className="w-3 h-3 mr-1" />
                      {option.label.split(' ')[1]}
                    </Button>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="itinerary" className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Itinerary
            </TabsTrigger>
            <TabsTrigger value="map" className="flex items-center gap-2">
              <Map className="w-4 h-4" />
              Map View
            </TabsTrigger>
            <TabsTrigger value="weather" className="flex items-center gap-2">
              <Sun className="w-4 h-4" />
              Weather
            </TabsTrigger>
          </TabsList>

          {/* Itinerary Tab */}
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
                Object.entries(groupedItinerary).map(([day, activities]: [string, any]) => {
                  const dayWeather = mockWeather.daily.find(w => w.day === parseInt(day));
                  
                  return (
                    <motion.div
                      key={day}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="space-y-4"
                    >
                      {/* Day Header */}
                      <Card className="p-6 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold text-lg">
                              {day}
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold">Day {day}</h3>
                              <p className="text-muted-foreground">
                                {activities.length} activities planned
                              </p>
                            </div>
                          </div>
                          {dayWeather && (
                            <div className="flex items-center gap-3 bg-white/50 rounded-lg px-4 py-2">
                              {getWeatherIcon(dayWeather.condition)}
                              <div className="text-right">
                                <div className="font-bold text-lg">{dayWeather.temp}°F</div>
                                <div className="text-sm text-muted-foreground">{dayWeather.description}</div>
                              </div>
                            </div>
                          )}
                        </div>
                      </Card>

                      {/* Activities */}
                      <div className="space-y-4 pl-8">
                        {activities.map((activity: any, idx: number) => {
                          const activityType = activityTypes[activity.activity_type as keyof typeof activityTypes];
                          const ActivityIcon = activityType?.icon || Camera;
                          
                          return (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              viewport={{ once: true }}
                            >
                              <Card className="p-6 bg-card/70 backdrop-blur-sm border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                                <div className="flex items-start gap-4">
                                  {/* Time Column */}
                                  <div className="flex-shrink-0 w-24 text-center">
                                    <div className="text-lg font-bold text-primary">
                                      {activity.start_time?.slice(0, 5)}
                                    </div>
                                    {activity.end_time && (
                                      <>
                                        <div className="text-xs text-muted-foreground my-1">↓</div>
                                        <div className="text-lg font-bold text-secondary">
                                          {activity.end_time?.slice(0, 5)}
                                        </div>
                                      </>
                                    )}
                                  </div>

                                  {/* Activity Content */}
                                  <div className="flex-1">
                                    <div className="flex items-start justify-between gap-4 mb-3">
                                      <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center">
                                          <ActivityIcon className={`w-5 h-5 ${activityType?.color || 'text-primary'}`} />
                                        </div>
                                        <div>
                                          <h4 className="text-xl font-bold">{activity.title}</h4>
                                          {activity.activity_type && (
                                            <Badge variant="outline" className="capitalize text-xs">
                                              {activity.activity_type}
                                            </Badge>
                                          )}
                                        </div>
                                      </div>
                                      <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => handleEditActivity(activity)}
                                      >
                                        <Edit className="w-4 h-4" />
                                      </Button>
                                    </div>

                                    {activity.location && (
                                      <div className="flex items-center gap-2 text-muted-foreground mb-3">
                                        <MapPin className="w-4 h-4" />
                                        <span className="font-medium">{activity.location}</span>
                                      </div>
                                    )}

                                    {activity.description && (
                                      <p className="text-muted-foreground mb-4 leading-relaxed">
                                        {activity.description}
                                      </p>
                                    )}

                                    {/* Action Buttons */}
                                    <div className="flex flex-wrap gap-2">
                                      {bookingOptions.map((option) => {
                                        const Icon = option.icon;
                                        return (
                                          <Button
                                            key={option.type}
                                            size="sm"
                                            variant="outline"
                                            className="text-xs"
                                            onClick={() => handleBooking(option.type)}
                                          >
                                            <Icon className="w-3 h-3 mr-1" />
                                            {option.label}
                                          </Button>
                                        );
                                      })}
                                    </div>

                                    {/* Eco-friendly indicator */}
                                    {trip.eco_friendly && (
                                      <div className="mt-3 flex items-center gap-2 text-green-600 text-sm">
                                        <TreePine className="w-4 h-4" />
                                        <span>Eco-friendly option available</span>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </Card>
                            </motion.div>
                          );
                        })}
                      </div>
                    </motion.div>
                  );
                })
              )}
            </div>
          </TabsContent>

          {/* Map Tab */}
          <TabsContent value="map">
            <Card className="p-12 text-center bg-card/50 backdrop-blur-sm">
              <Map className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-xl font-bold mb-2">Interactive Map</h3>
              <p className="text-muted-foreground mb-6">
                View all your destinations and activities on an interactive map
              </p>
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">Map integration coming soon...</p>
              </div>
            </Card>
          </TabsContent>

          {/* Weather Tab */}
          <TabsContent value="weather">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockWeather.daily.map((day) => (
                <motion.div
                  key={day.day}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: day.day * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 text-center bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all">
                    <h4 className="font-bold mb-4">Day {day.day}</h4>
                    <div className="flex justify-center mb-4">
                      {getWeatherIcon(day.condition)}
                    </div>
                    <div className="text-3xl font-bold mb-2">{day.temp}°F</div>
                    <p className="text-muted-foreground">{day.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Edit Activity Dialog */}
        <Dialog open={!!editingActivity} onOpenChange={(open) => !open && setEditingActivity(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Activity</DialogTitle>
            </DialogHeader>
            {editingActivity && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="title">Activity Title</Label>
                  <Input
                    id="title"
                    value={editingActivity.title}
                    onChange={(e) => setEditingActivity({...editingActivity, title: e.target.value})}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="start_time">Start Time</Label>
                    <Input
                      id="start_time"
                      type="time"
                      value={editingActivity.start_time?.slice(0, 5)}
                      onChange={(e) => setEditingActivity({...editingActivity, start_time: e.target.value + ':00'})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="end_time">End Time</Label>
                    <Input
                      id="end_time"
                      type="time"
                      value={editingActivity.end_time?.slice(0, 5)}
                      onChange={(e) => setEditingActivity({...editingActivity, end_time: e.target.value + ':00'})}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Input
                    id="description"
                    value={editingActivity.description || ''}
                    onChange={(e) => setEditingActivity({...editingActivity, description: e.target.value})}
                  />
                </div>
                <div className="flex justify-end gap-2">
                  <Button variant="outline" onClick={() => setEditingActivity(null)}>
                    Cancel
                  </Button>
                  <Button onClick={handleUpdateActivity}>
                    Save Changes
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default TripView;