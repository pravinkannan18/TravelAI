import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Sparkles, Plane } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
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

  const preferences = ['Adventure', 'Culture', 'Food', 'Nature', 'Relaxation', 'Shopping', 'Nightlife', 'History'];

  const handlePreferenceToggle = (pref: string) => {
    setSelectedPreferences(prev =>
      prev.includes(pref) ? prev.filter(p => p !== pref) : [...prev, pref]
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
    <div className="min-h-screen">
      <nav className="border-b border-border bg-card/50 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-4">
          <Button variant="ghost" onClick={() => navigate('/dashboard')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Button>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-12 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Sparkles className="w-4 h-4 text-primary animate-glow-pulse" />
            <span className="text-sm text-primary font-medium">AI-Powered Planning</span>
          </div>
          <h1 className="text-5xl font-bold mb-4 text-gradient">Plan Your Trip</h1>
          <p className="text-xl text-muted-foreground">Tell us your dream destination and preferences</p>
        </motion.div>

        <Card className="p-8 bg-card/50 backdrop-blur-sm border-border card-glow">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="destination">Destination</Label>
              <Input
                id="destination"
                placeholder="e.g., Paris, Tokyo, New York"
                value={formData.destination}
                onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="startDate">Start Date</Label>
                <Input
                  id="startDate"
                  type="date"
                  value={formData.startDate}
                  onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="endDate">End Date</Label>
                <Input
                  id="endDate"
                  type="date"
                  value={formData.endDate}
                  onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                  required
                  min={formData.startDate}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="budget">Budget (USD)</Label>
              <Input
                id="budget"
                type="number"
                placeholder="e.g., 1000"
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                required
                min="0"
              />
            </div>

            <div className="space-y-3">
              <Label>Travel Preferences</Label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {preferences.map((pref) => (
                  <div key={pref} className="flex items-center space-x-2">
                    <Checkbox
                      id={pref}
                      checked={selectedPreferences.includes(pref)}
                      onCheckedChange={() => handlePreferenceToggle(pref)}
                    />
                    <Label htmlFor={pref} className="cursor-pointer text-sm">
                      {pref}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="socialLinks">Social Media Links (optional)</Label>
              <textarea
                id="socialLinks"
                className="w-full min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm"
                placeholder="Paste Instagram or X links to places you want to visit (one per line)"
                value={formData.socialLinks}
                onChange={(e) => setFormData({ ...formData, socialLinks: e.target.value })}
              />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="ecoFriendly"
                checked={formData.ecoFriendly}
                onCheckedChange={(checked) => setFormData({ ...formData, ecoFriendly: checked as boolean })}
              />
              <Label htmlFor="ecoFriendly" className="cursor-pointer">
                🌱 Prioritize eco-friendly options
              </Label>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity py-6"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Sparkles className="w-5 h-5 mr-2 animate-spin" />
                  Generating Your Perfect Trip...
                </>
              ) : (
                <>
                  <Plane className="w-5 h-5 mr-2" />
                  Generate Itinerary
                </>
              )}
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default PlanTrip;
