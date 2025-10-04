import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Plus, Plane, LogOut, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { User } from '@supabase/supabase-js';

const Dashboard = () => {
  const [user, setUser] = useState<User | null>(null);
  const [trips, setTrips] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      navigate('/');
      return;
    }
    setUser(session.user);
    fetchTrips(session.user.id);
  };

  const fetchTrips = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('trips')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setTrips(data || []);
    } catch (error) {
      console.error('Error fetching trips:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  const getTripStatus = (status: string) => {
    const statusColors = {
      draft: 'bg-muted text-muted-foreground',
      planned: 'bg-primary/20 text-primary',
      booked: 'bg-accent/20 text-accent',
      completed: 'bg-secondary/20 text-secondary',
    };
    return statusColors[status as keyof typeof statusColors] || statusColors.draft;
  };

  return (
    <div className="min-h-screen">
      <nav className="border-b border-border bg-card/50 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Plane className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gradient">TravelAI</span>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" onClick={() => navigate('/chat')}>
              <MessageCircle className="w-4 h-4 mr-2" />
              AI Chat
            </Button>
            <Button variant="ghost" onClick={handleSignOut}>
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2 text-gradient">My Trips</h1>
            <p className="text-muted-foreground">Plan and manage your adventures</p>
          </div>
          <Button
            onClick={() => navigate('/plan-trip')}
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90"
          >
            <Plus className="w-5 h-5 mr-2" />
            Plan New Trip
          </Button>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Loading your trips...</p>
          </div>
        ) : trips.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <Plane className="w-20 h-20 mx-auto mb-6 text-primary opacity-50" />
            <h2 className="text-2xl font-bold mb-4">No trips yet</h2>
            <p className="text-muted-foreground mb-8">Start planning your first adventure!</p>
            <Button
              onClick={() => navigate('/plan-trip')}
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90"
            >
              <Plus className="w-5 h-5 mr-2" />
              Plan Your First Trip
            </Button>
          </motion.div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trips.map((trip, index) => (
              <motion.div
                key={trip.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all cursor-pointer card-glow"
                  onClick={() => navigate(`/trip/${trip.id}`)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold">{trip.destination}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTripStatus(trip.status)}`}>
                      {trip.status}
                    </span>
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>📅 {new Date(trip.start_date).toLocaleDateString()} - {new Date(trip.end_date).toLocaleDateString()}</p>
                    <p>💰 Budget: ${trip.budget?.toLocaleString() || 'Not set'}</p>
                    {trip.preferences && trip.preferences.length > 0 && (
                      <p>✨ {trip.preferences.slice(0, 2).join(', ')}</p>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
