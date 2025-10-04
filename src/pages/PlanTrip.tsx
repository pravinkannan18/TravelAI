import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, Sparkles, Plane, MapPin, Calendar, 
  DollarSign, Heart, Camera, Leaf, Users, Clock,
  Star, Globe, Coffee, Mountain, Utensils, ShoppingBag,
  Music, Camera as Photo, TreePine, Waves
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const PlanTrip = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    destination: '',
    startDate: '',
    endDate: '',
    budget: '',
    socialLinks: '',
    ecoFriendly: false,
  });
  
  const [selectedPreferences, setSelectedPreferences] = useState<string[]>([]);

  const preferences = [
    { name: 'Adventure', icon: Mountain, color: 'text-orange-500' },
    { name: 'Culture', icon: Star, color: 'text-purple-500' },
    { name: 'Food', icon: Utensils, color: 'text-red-500' },
    { name: 'Nature', icon: TreePine, color: 'text-green-500' },
    { name: 'Relaxation', icon: Waves, color: 'text-blue-500' },
    { name: 'Shopping', icon: ShoppingBag, color: 'text-pink-500' },
    { name: 'Nightlife', icon: Music, color: 'text-indigo-500' },
    { name: 'History', icon: Globe, color: 'text-amber-500' }
  ];

  const budgetRanges = [
    { label: 'Budget ($500-1500)', value: '1000', icon: Coffee },
    { label: 'Moderate ($1500-3000)', value: '2000', icon: Heart },
    { label: 'Luxury ($3000+)', value: '5000', icon: Star }
  ];

  const handlePreferenceToggle = (prefName: string) => {
    setSelectedPreferences(prev =>
      prev.includes(prefName) ? prev.filter(p => p !== prefName) : [...prev, prefName]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate('/auth');
        return;
      }

      // Create trip in database
      const { data: trip, error: tripError } = await supabase
        .from('trips')
        .insert({
          user_id: session.user.id,
          destination: formData.destination,
          start_date: formData.startDate,
          end_date: formData.endDate,
          budget: parseFloat(formData.budget),
          preferences: selectedPreferences,
          eco_friendly: formData.ecoFriendly,
          status: 'draft',
        })
        .select()
        .single();

      if (tripError) throw tripError;

      toast({
        title: 'Trip created!',
        description: 'Generating your personalized itinerary...',
      });

      // Generate itinerary using AI
      const { data: itineraryData, error: itineraryError } = await supabase.functions.invoke(
        'generate-itinerary',
        {
          body: {
            destination: formData.destination,
            startDate: formData.startDate,
            endDate: formData.endDate,
            budget: formData.budget,
            preferences: selectedPreferences,
            ecoFriendly: formData.ecoFriendly,
            socialLinks: formData.socialLinks ? formData.socialLinks.split('\n').filter(Boolean) : [],
          },
        }
      );

      if (itineraryError) {
        console.error('Itinerary generation error:', itineraryError);
        toast({
          title: 'Warning',
          description: 'Trip created but itinerary generation failed. You can add activities manually.',
          variant: 'destructive',
        });
        navigate(`/trip/${trip.id}`);
        return;
      }

      // Save generated itinerary
      if (itineraryData.itinerary) {
        const itineraryItems = itineraryData.itinerary.flatMap((day: any) =>
          day.activities.map((activity: any) => ({
            trip_id: trip.id,
            day_number: day.day_number,
            title: activity.title,
            description: activity.description,
            start_time: activity.start_time,
            end_time: activity.end_time,
            location: activity.location,
            activity_type: activity.activity_type,
          }))
        );

        const { error: insertError } = await supabase
          .from('itineraries')
          .insert(itineraryItems);

        if (insertError) {
          console.error('Error saving itinerary:', insertError);
        }
      }

      toast({
        title: 'Success!',
        description: 'Your trip itinerary is ready!',
      });

      navigate(`/trip/${trip.id}`);
    } catch (error: any) {
      console.error('Error creating trip:', error);
      toast({
        title: 'Error',
        description: error.message || 'Failed to create trip. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <Card className="p-8 md:p-12 bg-card/70 backdrop-blur-lg border-2 border-primary/10 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-10">
              {/* Step 1: Destination */}
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1, duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold text-sm">
                    1
                  </div>
                  <h3 className="text-xl font-semibold text-gradient">Where to?</h3>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="destination" className="text-base font-medium flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    Destination
                  </Label>
                  <Input
                    id="destination"
                    placeholder="e.g., Paris, Tokyo, New York, Bali"
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    required
                    className="h-12 text-base border-2 border-border focus:border-primary transition-colors"
                  />
                </div>
              </motion.div>

              {/* Step 2: Dates */}
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.3, duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-secondary to-accent flex items-center justify-center text-white font-bold text-sm">
                    2
                  </div>
                  <h3 className="text-xl font-semibold text-gradient">When?</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="startDate" className="text-base font-medium flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-secondary" />
                      Start Date
                    </Label>
                    <Input
                      id="startDate"
                      type="date"
                      value={formData.startDate}
                      onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                      required
                      className="h-12 text-base border-2 border-border focus:border-secondary transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="endDate" className="text-base font-medium flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-secondary" />
                      End Date
                    </Label>
                    <Input
                      id="endDate"
                      type="date"
                      value={formData.endDate}
                      onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                      required
                      min={formData.startDate}
                      className="h-12 text-base border-2 border-border focus:border-secondary transition-colors"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Step 3: Budget */}
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5, duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-accent to-primary flex items-center justify-center text-white font-bold text-sm">
                    3
                  </div>
                  <h3 className="text-xl font-semibold text-gradient">What's your budget?</h3>
                </div>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-3 gap-4">
                    {budgetRanges.map((range) => {
                      const Icon = range.icon;
                      return (
                        <motion.div
                          key={range.value}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Card 
                            className={`p-4 cursor-pointer transition-all duration-300 border-2 ${
                              formData.budget === range.value 
                                ? 'border-accent bg-accent/10' 
                                : 'border-border hover:border-accent/50'
                            }`}
                            onClick={() => setFormData({ ...formData, budget: range.value })}
                          >
                            <div className="text-center">
                              <Icon className="w-6 h-6 mx-auto mb-2 text-accent" />
                              <div className="font-medium">{range.label}</div>
                            </div>
                          </Card>
                        </motion.div>
                      );
                    })}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="budget" className="text-base font-medium flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-accent" />
                      Custom Budget (USD)
                    </Label>
                    <Input
                      id="budget"
                      type="number"
                      placeholder="Enter your budget"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      required
                      min="0"
                      className="h-12 text-base border-2 border-border focus:border-accent transition-colors"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Step 4: Preferences */}
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.7, duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold text-sm">
                    4
                  </div>
                  <h3 className="text-xl font-semibold text-gradient">What do you love?</h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {preferences.map((pref) => {
                    const Icon = pref.icon;
                    const isSelected = selectedPreferences.includes(pref.name);
                    return (
                      <motion.div
                        key={pref.name}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Card 
                          className={`p-4 cursor-pointer transition-all duration-300 border-2 ${
                            isSelected 
                              ? 'border-primary bg-primary/10 shadow-lg' 
                              : 'border-border hover:border-primary/50 hover:bg-primary/5'
                          }`}
                          onClick={() => handlePreferenceToggle(pref.name)}
                        >
                          <div className="text-center">
                            <Icon className={`w-6 h-6 mx-auto mb-2 ${pref.color}`} />
                            <div className={`font-medium text-sm ${
                              isSelected ? 'text-primary' : 'text-muted-foreground'
                            }`}>
                              {pref.name}
                            </div>
                            {isSelected && (
                              <Badge className="mt-2 bg-primary/20 text-primary border-primary/30">
                                Selected
                              </Badge>
                            )}
                          </div>
                        </Card>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Step 5: Social Links */}
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.9, duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-secondary to-accent flex items-center justify-center text-white font-bold text-sm">
                    5
                  </div>
                  <h3 className="text-xl font-semibold text-gradient">Inspiration from social media?</h3>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="socialLinks" className="text-base font-medium flex items-center gap-2">
                    <Photo className="w-4 h-4 text-secondary" />
                    Social Media Links (Optional)
                  </Label>
                  <textarea
                    id="socialLinks"
                    className="w-full min-h-[120px] rounded-lg border-2 border-border focus:border-secondary bg-background px-4 py-3 text-base transition-colors resize-none"
                    placeholder="Paste Instagram, TikTok, or X links to places you want to visit (one per line)&#10;&#10;Example:&#10;https://instagram.com/p/example1&#10;https://twitter.com/user/status/example2"
                    value={formData.socialLinks}
                    onChange={(e) => setFormData({ ...formData, socialLinks: e.target.value })}
                  />
                  <p className="text-sm text-muted-foreground">
                    💡 Our AI will analyze these posts and add similar places to your itinerary!
                  </p>
                </div>
              </motion.div>

              {/* Step 6: Eco-Friendly */}
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2.1, duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-white font-bold text-sm">
                    6
                  </div>
                  <h3 className="text-xl font-semibold text-gradient">Care about the planet?</h3>
                </div>
                <Card 
                  className={`p-6 cursor-pointer transition-all duration-300 border-2 ${
                    formData.ecoFriendly 
                      ? 'border-green-500 bg-green-50 dark:bg-green-950/20' 
                      : 'border-border hover:border-green-400'
                  }`}
                  onClick={() => setFormData({ ...formData, ecoFriendly: !formData.ecoFriendly })}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      formData.ecoFriendly ? 'bg-green-500' : 'bg-gray-300'
                    } transition-colors`}>
                      <Leaf className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-lg mb-1">
                        🌱 Prioritize eco-friendly options
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Choose sustainable transportation, accommodations, and activities that minimize environmental impact
                      </p>
                    </div>
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      formData.ecoFriendly 
                        ? 'border-green-500 bg-green-500' 
                        : 'border-gray-300'
                    } transition-colors`}>
                      {formData.ecoFriendly && (
                        <div className="w-3 h-3 bg-white rounded-full" />
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.3, duration: 0.6 }}
                className="pt-6"
              >
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary via-secondary to-accent hover:scale-105 hover:shadow-2xl hover:shadow-primary/25 transition-all duration-300 py-6 text-lg font-semibold relative overflow-hidden group"
                  disabled={loading}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {loading ? (
                    <>
                      <Sparkles className="w-6 h-6 mr-3 animate-spin" />
                      <span className="animate-pulse">Generating Your Perfect Trip...</span>
                    </>
                  ) : (
                    <>
                      <Plane className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                      Generate My Dream Itinerary
                    </>
                  )}
                </Button>
                
                {loading && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-4 text-center"
                  >
                    <p className="text-sm text-muted-foreground animate-pulse">
                      ✨ Our AI is crafting the perfect adventure just for you...
                    </p>
                  </motion.div>
                )}
              </motion.div>
            </form>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default PlanTrip;
