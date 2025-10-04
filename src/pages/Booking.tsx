import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, Plane, Hotel, Ticket, Star, Shield, 
  Leaf, CreditCard, Bitcoin, DollarSign, Check, 
  Gift, Award, Clock, MapPin, Users, Calendar,
  Sparkles, Heart, TreePine, Zap, Crown, Globe,
  ShoppingCart, Plus, Minus, X, CheckCircle,
  Wallet, Coins, Image, Download, Share2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { JourneyProgress } from '@/components/JourneyProgress';

const Booking = () => {
  const { id } = useParams(); // trip ID
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const bookingType = searchParams.get('type') || 'all'; // all, flight, hotel, activity
  const [selectedItems, setSelectedItems] = useState<any[]>([]);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [showPaymentDialog, setShowPaymentDialog] = useState(false);
  const [showNFTDialog, setShowNFTDialog] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [trip, setTrip] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('all');
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [earnedNFTs, setEarnedNFTs] = useState<any[]>([]);

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
        title: 'Eco Hotel near Louvre',
        subtitle: '0.5 miles from Louvre',
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
        subtitle: 'Heart of Paris shopping',
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
        title: 'Louvre Museum Tour',
        subtitle: 'Skip-the-line with expert guide',
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
    { 
      id: 'card', 
      label: 'Credit/Debit Card', 
      icon: CreditCard, 
      description: 'Visa, Mastercard, Amex',
      fees: 'No fees'
    },
    { 
      id: 'crypto', 
      label: 'Cryptocurrency', 
      icon: Bitcoin, 
      description: 'USDC, ETH, BTC',
      fees: 'Lower fees'
    },
    { 
      id: 'usd', 
      label: 'Digital USD (USDC)', 
      icon: Coins, 
      description: 'USDC Stablecoin',
      fees: 'Minimal fees'
    }
  ];

  // Enhanced NFT/Digital Souvenirs
  const nftCollection = [
    {
      id: 'eco-warrior',
      name: 'Eco Warrior Badge',
      description: 'Earned for choosing 3+ eco-friendly options',
      image: '🌱',
      rarity: 'Common',
      requirements: 'Book 3 eco-friendly options'
    },
    {
      id: 'paris-explorer',
      name: 'Paris Explorer',
      description: 'Complete Paris trip booking',
      image: '🗼',
      rarity: 'Rare',
      requirements: 'Book flight + hotel + activity'
    },
    {
      id: 'sustainable-traveler',
      name: 'Sustainable Traveler',
      description: 'Carbon-neutral trip achievement',
      image: '♻️',
      rarity: 'Epic',
      requirements: 'Book only eco-friendly options'
    }
  ];

  const addToCart = (option: any) => {
    const existingItem = cartItems.find(item => item.id === option.id);
    if (existingItem) {
      setCartItems(cartItems.map(item => 
        item.id === option.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCartItems([...cartItems, { ...option, quantity: 1 }]);
    }
    
    toast({
      title: 'Added to Cart! 🛒',
      description: `${option.title} has been added to your booking cart.`,
    });
  };

  const removeFromCart = (optionId: string) => {
    setCartItems(cartItems.filter(item => item.id !== optionId));
  };

  const updateCartQuantity = (optionId: string, newQuantity: number) => {
    if (newQuantity === 0) {
      removeFromCart(optionId);
      return;
    }
    
    setCartItems(cartItems.map(item => 
      item.id === optionId 
        ? { ...item, quantity: newQuantity }
        : item
    ));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = paymentMethod === 'crypto' ? item.cryptoPrice : item.price;
      return total + (price * item.quantity);
    }, 0);
  };

  const getEcoFriendlyCount = () => {
    return cartItems.filter(item => item.ecoFriendly).length;
  };

  const handleBookNow = (option: any) => {
    addToCart(option);
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast({
        title: 'Cart is Empty',
        description: 'Please add items to your cart before checkout.',
        variant: 'destructive',
      });
      return;
    }
    setShowPaymentDialog(true);
  };

  const checkNFTEligibility = () => {
    const ecoCount = getEcoFriendlyCount();
    const newNFTs = [];

    if (ecoCount >= 3) {
      newNFTs.push(nftCollection.find(nft => nft.id === 'eco-warrior'));
    }
    
    if (cartItems.length >= 3) {
      newNFTs.push(nftCollection.find(nft => nft.id === 'paris-explorer'));
    }
    
    if (ecoCount === cartItems.length && cartItems.length > 0) {
      newNFTs.push(nftCollection.find(nft => nft.id === 'sustainable-traveler'));
    }

    return newNFTs.filter(Boolean);
  };

  const handleConfirmBooking = async () => {
    setIsProcessing(true);

    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Check for NFT eligibility
      const eligibleNFTs = checkNFTEligibility();
      if (eligibleNFTs.length > 0) {
        setEarnedNFTs(eligibleNFTs);
      }

      // Show success message
      toast({
        title: 'Booking Confirmed! 🎉',
        description: `${cartItems.length} item(s) booked successfully. Total: $${calculateTotal()}`,
      });

      setShowPaymentDialog(false);
      
      // Show NFT dialog if earned any
      if (eligibleNFTs.length > 0) {
        setTimeout(() => {
          setShowNFTDialog(true);
        }, 1000);
      }

      // Clear cart
      setCartItems([]);

      // Navigate back to home page
      setTimeout(() => {
        navigate('/');
      }, 3000);

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
      <div className="container mx-auto px-4 md:px-6 py-6 md:py-8 pt-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 md:mb-12"
        >
          <h1 className="heading-1 text-gradient mb-3 md:mb-4">
            Complete Your Paris Trip
          </h1>
          <p className="body-large text-muted-foreground mb-4 md:mb-6">
            Book flights, hotels, and activities
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 text-xs md:text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <TreePine className="w-3 h-3 md:w-4 md:h-4 text-green-500" />
              <span className="hidden sm:inline">Eco-friendly options</span>
              <span className="sm:hidden">Eco options</span>
            </div>
            <div className="flex items-center gap-1">
              <Coins className="w-3 h-3 md:w-4 md:h-4 text-blue-500" />
              <span className="hidden sm:inline">Crypto payments</span>
              <span className="sm:hidden">Crypto</span>
            </div>
            <div className="flex items-center gap-1">
              <Gift className="w-3 h-3 md:w-4 md:h-4 text-purple-500" />
              <span className="hidden sm:inline">Digital souvenirs</span>
              <span className="sm:hidden">NFTs</span>
            </div>
          </div>
        </motion.div>

        {/* Journey Progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8 md:mb-12"
        >
          <JourneyProgress currentStep="booking" className="max-w-4xl mx-auto" />
        </motion.div>

        {/* Booking Categories */}
        <div className="max-w-6xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6 md:mb-8">
            <TabsList className="grid grid-cols-4 w-full max-w-md mx-auto text-sm">
              <TabsTrigger value="all" className="text-xs md:text-sm">All</TabsTrigger>
              <TabsTrigger value="flight" className="text-xs md:text-sm">Flights</TabsTrigger>
              <TabsTrigger value="hotel" className="text-xs md:text-sm">Hotels</TabsTrigger>
              <TabsTrigger value="activity" className="text-xs md:text-sm">Activities</TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <div className="space-y-8">
                {Object.entries(mockBookingOptions).map(([category, options]) => (
                  <div key={category}>
                    <h2 className="text-2xl font-bold mb-4 capitalize flex items-center gap-2">
                      {React.createElement(getTypeIcon(category), { className: "w-6 h-6" })}
                      {category === 'activity' ? 'Activities' : category}s
                    </h2>
                    <div className="grid gap-4">
                      {options.map((option, index) => (
                        <BookingCard 
                          key={option.id}
                          option={option} 
                          index={index}
                          onBook={handleBookNow}
                          onAddToCart={addToCart}
                          isInCart={cartItems.some(item => item.id === option.id)}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            {(['flight', 'hotel', 'activity'] as const).map(category => (
              <TabsContent key={category} value={category}>
                <div className="grid gap-4">
                  {mockBookingOptions[category].map((option, index) => (
                    <BookingCard 
                      key={option.id}
                      option={option} 
                      index={index}
                      onBook={handleBookNow}
                      onAddToCart={addToCart}
                      isInCart={cartItems.some(item => item.id === option.id)}
                    />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Cart Summary (if items exist) */}
        <AnimatePresence>
          {cartItems.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="fixed bottom-6 left-4 right-4 md:left-auto md:right-6 md:w-96 z-40"
            >
              <Card className="p-4 bg-card/95 backdrop-blur-xl border-primary/20 shadow-2xl">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold flex items-center gap-2">
                    <ShoppingCart className="w-5 h-5" />
                    Cart ({cartItems.length})
                  </h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setCartItems([])}
                    className="text-muted-foreground hover:text-destructive"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
                
                <div className="space-y-2 max-h-32 overflow-y-auto mb-3">
                  {cartItems.map(item => (
                    <div key={item.id} className="flex items-center justify-between text-sm">
                      <span className="flex-1 truncate pr-2">{item.title}</span>
                      <div className="flex items-center gap-1 flex-shrink-0">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-6 w-6 p-0"
                          onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="w-3 h-3" />
                        </Button>
                        <span className="w-6 text-center text-xs">{item.quantity}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-6 w-6 p-0"
                          onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="w-3 h-3" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-6 w-6 p-0 ml-1 text-destructive"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <X className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                <Separator className="my-3" />
                
                <div className="flex items-center justify-between mb-3">
                  <span className="font-semibold">Total:</span>
                  <div className="text-right">
                    <div className="font-bold text-lg">${calculateTotal()}</div>
                    <div className="text-xs text-muted-foreground">
                      ≈ ${Math.round(calculateTotal() * 0.95)} USDC
                    </div>
                  </div>
                </div>

                {getEcoFriendlyCount() > 0 && (
                  <div className="text-xs text-green-600 mb-3 flex items-center gap-1">
                    <TreePine className="w-3 h-3" />
                    {getEcoFriendlyCount()} eco-friendly choice(s)
                    <Badge className="bg-green-100 text-green-700 ml-1 text-xs">
                      5% crypto discount applied
                    </Badge>
                  </div>
                )}

                <Button 
                  onClick={handleCheckout}
                  className="w-full bg-gradient-to-r from-primary to-secondary text-sm"
                  size="sm"
                >
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Checkout
                </Button>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Payment Dialog */}
        <Dialog open={showPaymentDialog} onOpenChange={setShowPaymentDialog}>
          <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <CreditCard className="w-5 h-5" />
                Complete Your Booking
              </DialogTitle>
              <DialogDescription>
                Review your order and choose your preferred payment method
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-6">
              {/* Booking Summary */}
              <div className="space-y-3">
                <h4 className="font-semibold">Order Summary</h4>
                <div className="space-y-2">
                  {cartItems.map(item => (
                    <div key={item.id} className="flex justify-between items-center p-3 bg-primary/5 rounded-lg">
                      <div className="flex-1">
                        <p className="font-medium">{item.title}</p>
                        <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline" className="text-xs">
                            Qty: {item.quantity}
                          </Badge>
                          {item.ecoFriendly && (
                            <Badge className="bg-green-100 text-green-700 border-green-200 text-xs">
                              <TreePine className="w-3 h-3 mr-1" />
                              Eco
                            </Badge>
                          )}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold">
                          ${paymentMethod === 'crypto' 
                            ? (item.cryptoPrice * item.quantity)
                            : (item.price * item.quantity)}
                        </div>
                        {paymentMethod === 'crypto' && (
                          <Badge variant="outline" className="text-xs">USDC</Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                
                <Separator />
                
                <div className="flex justify-between items-center text-lg font-bold">
                  <span>Total:</span>
                  <div className="text-right">
                    <div>${calculateTotal()}</div>
                    {paymentMethod === 'crypto' && (
                      <Badge variant="outline" className="mt-1">USDC</Badge>
                    )}
                  </div>
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
                          <p className="text-xs text-green-600">{method.fees}</p>
                        </div>
                      </div>
                    );
                  })}
                </RadioGroup>
              </div>

              {/* NFT Preview */}
              {checkNFTEligibility().length > 0 && (
                <div className="p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Gift className="w-5 h-5 text-purple-500" />
                    <span className="font-semibold text-purple-700">Digital Souvenirs Unlocked!</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    You'll receive {checkNFTEligibility().length} exclusive NFT(s) after booking:
                  </p>
                  <div className="flex gap-2">
                    {checkNFTEligibility().map(nft => (
                      <Badge key={nft?.id} className="bg-purple-100 text-purple-700">
                        {nft?.image} {nft?.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

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
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Confirm Booking (${calculateTotal()})
                    </>
                  )}
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* NFT/Digital Souvenir Dialog */}
        <Dialog open={showNFTDialog} onOpenChange={setShowNFTDialog}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <Gift className="w-5 h-5 text-purple-500" />
                Digital Souvenirs Earned!
              </DialogTitle>
              <DialogDescription>
                Congratulations! You've unlocked exclusive travel NFTs
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4">
              {earnedNFTs.map(nft => (
                <div key={nft?.id} className="p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-200">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-2xl">{nft?.image}</div>
                    <div>
                      <h4 className="font-semibold">{nft?.name}</h4>
                      <Badge className="text-xs">{nft?.rarity}</Badge>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{nft?.description}</p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Download className="w-3 h-3 mr-1" />
                      Download
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Share2 className="w-3 h-3 mr-1" />
                      Share
                    </Button>
                  </div>
                </div>
              ))}
              
              <Button 
                onClick={() => setShowNFTDialog(false)}
                className="w-full"
              >
                Continue to Trip
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

// Booking Card Component
const BookingCard = ({ option, index, onBook, onAddToCart, isInCart }: {
  option: any;
  index: number;
  onBook: (option: any) => void;
  onAddToCart: (option: any) => void;
  isInCart: boolean;
}) => {
  const IconComponent = option.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className="p-4 md:p-6 bg-card/70 backdrop-blur-sm border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
          {/* Left Section - Details */}
          <div className="flex-1">
            <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
              <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg ${option.color} flex items-center justify-center flex-shrink-0`}>
                <IconComponent className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h3 className="text-lg md:text-xl font-bold truncate">{option.title}</h3>
                  {option.badge && (
                    <Badge className="text-xs shrink-0">{option.badge}</Badge>
                  )}
                  {option.ecoFriendly && (
                    <Badge className="bg-green-100 text-green-700 border-green-200 shrink-0">
                      <TreePine className="w-3 h-3 mr-1" />
                      <span className="hidden sm:inline">Eco-Friendly</span>
                      <span className="sm:hidden">Eco</span>
                    </Badge>
                  )}
                </div>
                <p className="text-muted-foreground mb-2 text-sm md:text-base">{option.subtitle}</p>
                <div className="flex flex-wrap items-center gap-2 md:gap-4 text-xs md:text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3 md:w-4 md:h-4" />
                    {option.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 md:w-4 md:h-4 text-yellow-500" />
                    {option.rating}
                  </div>
                  {option.provider && (
                    <div className="flex items-center gap-1 hidden sm:flex">
                      <Shield className="w-3 h-3 md:w-4 md:h-4" />
                      <span className="truncate max-w-32">{option.provider}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-1 md:gap-2 mb-3 md:mb-4">
              {option.features.slice(0, 3).map((feature: string, idx: number) => (
                <Badge key={idx} variant="outline" className="text-xs">
                  {feature}
                </Badge>
              ))}
              {option.features.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{option.features.length - 3} more
                </Badge>
              )}
            </div>
          </div>

          {/* Right Section - Pricing & Booking */}
          <div className="lg:w-64 flex flex-row lg:flex-col justify-between lg:justify-start gap-4">
            {/* Pricing */}
            <div className="flex-1 lg:text-center lg:mb-4">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                ${option.price}
              </div>
              <div className="text-xs md:text-sm text-muted-foreground mb-1 md:mb-2">
                {option.duration.includes('night') ? 'per night' : 
                 option.duration.includes('hour') ? 'per person' : ''}
              </div>
              <div className="text-xs md:text-sm text-accent flex items-center gap-1 lg:justify-center">
                <Coins className="w-3 h-3" />
                ${option.cryptoPrice} USDC
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-2 min-w-32 lg:min-w-full">
              <Button
                onClick={() => onBook(option)}
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-sm"
                size="sm"
              >
                <Zap className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                Book Now
              </Button>
              
              <Button
                onClick={() => onAddToCart(option)}
                variant="outline"
                size="sm"
                className="text-sm"
                disabled={isInCart}
              >
                {isInCart ? (
                  <>
                    <CheckCircle className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2 text-green-500" />
                    <span className="hidden sm:inline">In Cart</span>
                    <span className="sm:hidden">✓</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                    <span className="hidden sm:inline">Add to Cart</span>
                    <span className="sm:hidden">Add</span>
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default Booking;