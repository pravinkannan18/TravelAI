import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, DollarSign, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const TripView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [trip, setTrip] = useState<any>(null);
  const [itinerary, setItinerary] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

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
        <p className="text-muted-foreground">Loading trip details...</p>
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
    <div className="min-h-screen">
      <nav className="border-b border-border bg-card/50 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-4">
          <Button variant="ghost" onClick={() => navigate('/dashboard')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Button>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-5xl font-bold mb-4 text-gradient">{trip.destination}</h1>
          <div className="flex flex-wrap gap-4 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              <span>{new Date(trip.start_date).toLocaleDateString()} - {new Date(trip.end_date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-accent" />
              <span>Budget: ${trip.budget?.toLocaleString()}</span>
            </div>
            {trip.eco_friendly && (
              <Badge className="bg-accent/20 text-accent border-accent/30">🌱 Eco-Friendly</Badge>
            )}
          </div>
          {trip.preferences && trip.preferences.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {trip.preferences.map((pref: string) => (
                <Badge key={pref} variant="outline">{pref}</Badge>
              ))}
            </div>
          )}
        </motion.div>

        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Your Itinerary</h2>

          {Object.keys(groupedItinerary).length === 0 ? (
            <Card className="p-12 text-center bg-card/50 backdrop-blur-sm border-border">
              <p className="text-muted-foreground mb-4">No itinerary generated yet</p>
              <Button onClick={() => navigate('/chat')}>
                Chat with AI to plan activities
              </Button>
            </Card>
          ) : (
            Object.entries(groupedItinerary).map(([day, activities]: [string, any]) => (
              <motion.div
                key={day}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-4">Day {day}</h3>
                <div className="space-y-4">
                  {activities.map((activity: any, idx: number) => (
                    <Card key={idx} className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/30 transition-all">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-20 text-center">
                          <div className="text-sm font-medium text-primary">{activity.start_time?.slice(0, 5)}</div>
                          {activity.end_time && (
                            <>
                              <div className="text-xs text-muted-foreground my-1">↓</div>
                              <div className="text-sm font-medium text-secondary">{activity.end_time?.slice(0, 5)}</div>
                            </>
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-4 mb-2">
                            <h4 className="text-lg font-semibold">{activity.title}</h4>
                            {activity.activity_type && (
                              <Badge variant="outline" className="capitalize">{activity.activity_type}</Badge>
                            )}
                          </div>
                          {activity.location && (
                            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                              <MapPin className="w-4 h-4" />
                              <span>{activity.location}</span>
                            </div>
                          )}
                          {activity.description && (
                            <p className="text-muted-foreground">{activity.description}</p>
                          )}
                          {activity.notes && (
                            <p className="text-sm text-muted-foreground mt-2 italic">{activity.notes}</p>
                          )}
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default TripView;
