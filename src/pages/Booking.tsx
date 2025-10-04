import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, Plane, Hotel, Ticket, Star, Shield, 
  Leaf, CreditCard, Bitcoin, DollarSign, Check, 
  Gift, Award, Clock, MapPin, Users, Calendar,
  Sparkles, Heart, TreePine, Zap, Crown, Globe
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useToast } from '@/hooks/use-toast';

const Booking = () => {
  const { id } = useParams(); // trip ID
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const bookingType = searchParams.get('type') || 'flight'; // flight, hotel, activity
  const [selectedOption, setSelectedOption] = useState<any>(null);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [showPaymentDialog, setShowPaymentDialog] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [trip, setTrip] = useState<any>(null);

  // Mock booking data - in real app, this would come from APIs
  const mockBookingOptions = {
    flight: [
      {
        id: 'f1',
        title: 'Economy Flight to Paris',
        subtitle: 'New York (JFK) → Paris (CDG)',
        price: 400,
        cryptoPrice: 380,
        duration: '8h 15m',
        airline: 'Air France',
        ecoFriendly: true,
        rating: 4.5,
        features: ['Free WiFi', 'Meal Included', 'Low-emission aircraft'],
        badge: 'Best Value',
        icon: Plane,
        color: 'bg-blue-500'
      },
      {
        id: 'f2',
        title: 'Premium Economy Flight',
        subtitle: 'New York (JFK) → Paris (CDG)',
        price: 650,
        cryptoPrice: 620,
        duration: '7h 45m',
        airline: 'Delta Airlines',
        ecoFriendly: false,
        rating: 4.7,
        features: ['Extra Legroom', 'Priority Boarding', 'Premium Meal'],
        badge: 'Popular',
        icon: Plane,
        color: 'bg-blue-600'
      },
      {
        id: 'f3',
        title: 'Sustainable Flight Option',
        subtitle: 'New York (JFK) → Paris (CDG)',
        price: 425,
        cryptoPrice: 400,
        duration: '8h 30m',
        airline: 'KLM Royal Dutch',
        ecoFriendly: true,
        rating: 4.6,
        features: ['Carbon Neutral', 'Sustainable Fuel', 'Eco Meal Options'],
        badge: 'Eco Choice',
        icon: TreePine,
        color: 'bg-green-500'
      }
    ],
    hotel: [
      {
        id: 'h1',
        title: 'Eco-Friendly Hotel near Louvre',
        subtitle: '0.5 miles from Louvre Museum',
        price: 100,
        cryptoPrice: 95,
        duration: 'per night',
        provider: 'Green Hotels Paris',
        ecoFriendly: true,
        rating: 4.8,
        features: ['Solar Powered', 'Organic Breakfast', 'Bike Rental'],
        badge: 'Eco Certified',
        icon: TreePine,
        color: 'bg-green-500'
      },
      {
        id: 'h2',
        title: 'Luxury Hotel Champs-Élysées',
        subtitle: 'Heart of Paris shopping district',
        price: 180,
        cryptoPrice: 170,
        duration: 'per night',
        provider: 'Le Grand Hotel',
        ecoFriendly: false,
        rating: 4.9,
        features: ['Spa Access', 'Michelin Restaurant', 'Concierge Service'],
        badge: 'Luxury',
        icon: Crown,
        color: 'bg-purple-500'
      },
      {
        id: 'h3',
        title: 'Boutique Hotel Montmartre',
        subtitle: 'Artistic district with city views',
        price: 130,
        cryptoPrice: 125,
        duration: 'per night',
        provider: 'Montmartre Collection',
        ecoFriendly: true,
        rating: 4.6,
        features: ['Rooftop Terrace', 'Local Art Gallery', 'Green Certified'],
        badge: 'Unique',
        icon: Heart,
        color: 'bg-pink-500'
      }
    ],
    activity: [
      {
        id: 'a1',
        title: 'Louvre Museum Guided Tour',
        subtitle: 'Skip-the-line access with expert guide',
        price: 50,
        cryptoPrice: 48,
        duration: '3 hours',
        provider: 'Paris Museum Tours',
        ecoFriendly: true,
        rating: 4.7,
        features: ['Small Group', 'Audio Headsets', 'Digital Souvenir'],
        badge: 'Best Seller',
        icon: Star,
        color: 'bg-yellow-500'
      },
      {
        id: 'a2',
        title: 'Seine River Eco Cruise',
        subtitle: 'Electric boat tour with dinner',
        price: 75,
        cryptoPrice: 72,
        duration: '2.5 hours',
        provider: 'Green Seine Tours',
        ecoFriendly: true,
        rating: 4.8,
        features: ['Electric Boat', 'Organic Dinner', 'Sunset Views'],
        badge: 'Eco Premium',
        icon: TreePine,
        color: 'bg-green-500'
      },
      {
        id: 'a3',
        title: 'Eiffel Tower VIP Experience',
        subtitle: 'Priority access to summit',
        price: 120,
        cryptoPrice: 115,
        duration: '2 hours',
        provider: 'Tower Premium Access',
        ecoFriendly: false,
        rating: 4.9,
        features: ['Skip All Lines', 'Summit Access', 'Champagne Service'],
        badge: 'VIP',
        icon: Crown,
        color: 'bg-purple-500'
      }
    ]
  };

  const currentOptions = mockBookingOptions[bookingType as keyof typeof mockBookingOptions] || [];

  const paymentMethods = [
    { id: 'card', label: 'Credit/Debit Card', icon: CreditCard, description: 'Visa, Mastercard, Amex' },
    { id: 'crypto', label: 'Cryptocurrency', icon: Bitcoin, description: 'USDC, ETH, BTC (Test Mode)' },
    { id: 'usd', label: 'Digital USD', icon: DollarSign, description: 'USDC Stablecoin' }
  ];

  const handleBookNow = (option: any) => {
    setSelectedOption(option);
    setShowPaymentDialog(true);
  };

  const handleConfirmBooking = async () => {
    setIsProcessing(true);

    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Show success message
      toast({
        title: 'Booking Confirmed! 🎉',
        description: `Your ${bookingType} has been booked successfully. Confirmation details sent to your email.`,
      });

      // Optionally generate digital souvenir
      if (selectedOption.ecoFriendly) {
        setTimeout(() => {
          toast({
            title: 'Digital Souvenir Earned! 🌱',
            description: `You've earned an eco-travel badge for choosing sustainable options!`,
          });
        }, 1000);
      }

      setShowPaymentDialog(false);
      setSelectedOption(null);

      // Navigate back to trip view
      setTimeout(() => {
        navigate(`/trip/${id}`);
      }, 2000);

    } catch (error) {
      toast({
        title: 'Booking Failed',
        description: 'There was an error processing your booking. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'flight': return Plane;
      case 'hotel': return Hotel;
      case 'activity': return Ticket;
      default: return Star;
    }
  };

  const getTypeTitle = (type: string) => {
    switch (type) {
      case 'flight': return 'Flight Options';
      case 'hotel': return 'Hotel Options';
      case 'activity': return 'Activity Options';
      default: return 'Booking Options';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5">
      {/* Navigation */}
      <nav className="border-b border-border bg-card/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => navigate(`/trip/${id}`)}
              className="hover:bg-primary/10 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Itinerary
            </Button>
            <div className="flex items-center gap-2">
              <img 
                src="/tripgenie.png" 
                alt="TripGenie"
                className="h-8 w-auto"
              />
              <span className="font-bold text-lg">Booking</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            {React.createElement(getTypeIcon(bookingType), { 
              className: "w-8 h-8 text-primary" 
            })}
            <h1 className="text-4xl md:text-5xl font-bold text-gradient">
              {getTypeTitle(bookingType)}
            </h1>
          </div>
          <p className="text-xl text-muted-foreground">
            Choose from our curated selection of {bookingType === 'activity' ? 'activities' : bookingType}s
          </p>
        </motion.div>

        {/* Booking Options */}
        <div className="grid gap-6 max-w-4xl mx-auto">
          {currentOptions.map((option, index) => {
            const IconComponent = option.icon;
            
            return (
              <motion.div
                key={option.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 bg-card/70 backdrop-blur-sm border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Left Section - Details */}
                    <div className="flex-1">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`w-12 h-12 rounded-lg ${option.color} flex items-center justify-center`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-xl font-bold">{option.title}</h3>
                            {option.badge && (
                              <Badge className="text-xs">{option.badge}</Badge>
                            )}
                            {option.ecoFriendly && (
                              <Badge className="bg-green-100 text-green-700 border-green-200">
                                <TreePine className="w-3 h-3 mr-1" />
                                Eco-Friendly
                              </Badge>
                            )}
                          </div>
                          <p className="text-muted-foreground mb-2">{option.subtitle}</p>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {option.duration}
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 text-yellow-500" />
                              {option.rating}
                            </div>
                            {option.provider && (
                              <div className="flex items-center gap-1">
                                <Shield className="w-4 h-4" />
                                {option.provider}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {option.features.map((feature: string, idx: number) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Right Section - Pricing & Booking */}
                    <div className="md:w-64 flex flex-col justify-between">
                      <div className="text-center mb-4">
                        <div className="text-3xl font-bold text-primary mb-1">
                          ${option.price}
                        </div>
                        <div className="text-sm text-muted-foreground mb-2">
                          {option.duration.includes('night') ? 'per night' : 
                           option.duration.includes('hour') ? 'per person' : ''}
                        </div>
                        <div className="text-sm text-accent">
                          💰 ${option.cryptoPrice} USDC
                        </div>
                      </div>

                      <Button
                        onClick={() => handleBookNow(option)}
                        className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                        size="lg"
                      >
                        <Zap className="w-4 h-4 mr-2" />
                        Book Now
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Payment Dialog */}
        <Dialog open={showPaymentDialog} onOpenChange={setShowPaymentDialog}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <CreditCard className="w-5 h-5" />
                Complete Your Booking
              </DialogTitle>
            </DialogHeader>

            {selectedOption && (
              <div className="space-y-6">
                {/* Booking Summary */}
                <div className="p-4 bg-primary/5 rounded-lg">
                  <h4 className="font-semibold mb-2">{selectedOption.title}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{selectedOption.subtitle}</p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-lg">
                      ${paymentMethod === 'crypto' ? selectedOption.cryptoPrice : selectedOption.price}
                    </span>
                    {paymentMethod === 'crypto' && (
                      <Badge variant="outline">USDC</Badge>
                    )}
                  </div>
                </div>

                {/* Payment Method Selection */}
                <div>
                  <Label className="text-base font-semibold mb-3 block">Payment Method</Label>
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                    {paymentMethods.map((method) => {
                      const Icon = method.icon;
                      return (
                        <div key={method.id} className="flex items-center space-x-3 p-3 border border-border rounded-lg hover:bg-primary/5 transition-colors">
                          <RadioGroupItem value={method.id} id={method.id} />
                          <Icon className="w-5 h-5 text-primary" />
                          <div className="flex-1">
                            <Label htmlFor={method.id} className="font-medium cursor-pointer">
                              {method.label}
                            </Label>
                            <p className="text-sm text-muted-foreground">{method.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </RadioGroup>
                </div>

                {/* Test Mode Notice */}
                <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <div className="flex items-center gap-2 text-yellow-800">
                    <Shield className="w-4 h-4" />
                    <span className="text-sm font-medium">Test Mode</span>
                  </div>
                  <p className="text-sm text-yellow-700 mt-1">
                    This is a demo booking. No actual payment will be processed.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    onClick={() => setShowPaymentDialog(false)}
                    className="flex-1"
                    disabled={isProcessing}
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handleConfirmBooking}
                    disabled={isProcessing}
                    className="flex-1 bg-gradient-to-r from-primary to-secondary"
                  >
                    {isProcessing ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Processing...
                      </>
                    ) : (
                      <>
                        <Check className="w-4 h-4 mr-2" />
                        Confirm Booking
                      </>
                    )}
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

export default Booking;