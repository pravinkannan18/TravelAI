import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, MapPin, Star, Clock, Users, 
  Shield, Globe, FileText, CheckCircle, AlertCircle,
  Heart, Save, MessageCircle, Phone, Mail, Camera,
  TreePine, Award, Filter, Map, User, Calendar,
  Languages, Bookmark, Share, ExternalLink
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';
import { JourneyProgress } from '@/components/JourneyProgress';

const LocalGuides = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [activeTab, setActiveTab] = useState('guides');
  const [selectedGuide, setSelectedGuide] = useState(null);
  const [visaFrom, setVisaFrom] = useState('');
  const [visaTo, setVisaTo] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  const [priceFilter, setPriceFilter] = useState('all');
  const [showBookingModal, setShowBookingModal] = useState(false);

  // Mock data for local guides
  const mockGuides = [
    {
      id: 1,
      name: 'Marie Dubois',
      location: 'Paris, France',
      specialty: 'Art & History Tours',
      rating: 4.9,
      reviews: 127,
      hourlyRate: 60,
      duration: '2-3 hours',
      languages: ['French', 'English', 'Spanish'],
      isEcoFriendly: true,
      verified: true,
      photo: '/api/placeholder/150/150',
      description: 'Art historian offering tours of Parisian museums and hidden gems.',
      highlights: ['Louvre expert', 'Local artist connections', 'Skip-the-line access'],
      availability: 'Available today',
      coordinates: { lat: 48.8566, lng: 2.3522 }
    },
    {
      id: 2,
      name: 'Giovanni Romano',
      location: 'Rome, Italy',
      specialty: 'Food & Culture',
      rating: 4.8,
      reviews: 203,
      hourlyRate: 45,
      duration: '3-4 hours',
      languages: ['Italian', 'English'],
      isEcoFriendly: true,
      verified: true,
      photo: '/api/placeholder/150/150',
      description: 'Local chef sharing authentic Roman culinary traditions.',
      highlights: ['Family recipes', 'Market tours', 'Cooking classes'],
      availability: 'Available tomorrow',
      coordinates: { lat: 41.9028, lng: 12.4964 }
    },
    {
      id: 3,
      name: 'Yuki Tanaka',
      location: 'Tokyo, Japan',
      specialty: 'Modern Culture & Tech',
      rating: 4.9,
      reviews: 89,
      hourlyRate: 75,
      duration: '4-5 hours',
      languages: ['Japanese', 'English'],
      isEcoFriendly: false,
      verified: true,
      photo: '/api/placeholder/150/150',
      description: 'Tech professional showcasing modern Tokyo and traditional culture.',
      highlights: ['Startup scene', 'Traditional temples', 'Tech districts'],
      availability: 'Available this week',
      coordinates: { lat: 35.6762, lng: 139.6503 }
    },
    {
      id: 4,
      name: 'Sofia Martinez',
      location: 'Barcelona, Spain',
      specialty: 'Architecture & Design',
      rating: 4.7,
      reviews: 156,
      hourlyRate: 55,
      duration: '2-3 hours',
      languages: ['Spanish', 'English', 'Catalan'],
      isEcoFriendly: true,
      verified: true,
      photo: '/api/placeholder/150/150',
      description: 'Architecture student with deep knowledge of Gaudí and modernist Barcelona.',
      highlights: ['Gaudí expert', 'Hidden gems', 'Photo spots'],
      availability: 'Available today',
      coordinates: { lat: 41.3851, lng: 2.1734 }
    },
    {
      id: 5,
      name: 'Ahmed Hassan',
      location: 'Cairo, Egypt',
      specialty: 'History & Archaeology',
      rating: 4.8,
      reviews: 174,
      hourlyRate: 40,
      duration: '3-4 hours',
      languages: ['Arabic', 'English', 'French'],
      isEcoFriendly: true,
      verified: true,
      photo: '/api/placeholder/150/150',
      description: 'Egyptologist offering expert tours of pyramids and ancient sites.',
      highlights: ['Pyramid access', 'Historical insights', 'Archaeological sites'],
      availability: 'Available this week',
      coordinates: { lat: 30.0444, lng: 31.2357 }
    },
    {
      id: 6,
      name: 'Emma Thompson',
      location: 'London, UK',
      specialty: 'Royal History & Pubs',
      rating: 4.6,
      reviews: 98,
      hourlyRate: 65,
      duration: '2-3 hours',
      languages: ['English'],
      isEcoFriendly: false,
      verified: true,
      photo: '/api/placeholder/150/150',
      description: 'Royal history enthusiast and pub culture expert with theatrical flair.',
      highlights: ['Royal palaces', 'Historic pubs', 'Crown jewels'],
      availability: 'Available tomorrow',
      coordinates: { lat: 51.5074, lng: -0.1278 }
    }
  ];

  // Mock visa requirements data
  const visaRequirements = {
    'US-France': {
      required: false,
      duration: '90 days',
      type: 'Tourist',
      requirements: ['Valid passport', 'Return ticket'],
      processing: 'Not required',
      cost: 'Free',
      notes: 'Visa-free for tourism up to 90 days within 180-day period'
    },
    'US-Japan': {
      required: false,
      duration: '90 days',
      type: 'Tourist',
      requirements: ['Valid passport', 'Return ticket', 'Proof of funds'],
      processing: 'Not required',
      cost: 'Free',
      notes: 'Visa-free for tourism, business meetings up to 90 days'
    },
    'US-China': {
      required: true,
      duration: '30 days',
      type: 'Tourist Visa',
      requirements: ['Valid passport', 'Visa application', 'Photo', 'Hotel bookings'],
      processing: '4-6 business days',
      cost: '$140',
      notes: 'Tourist visa required for all US citizens'
    },
    'UK-US': {
      required: true,
      duration: '90 days',
      type: 'ESTA',
      requirements: ['Valid passport', 'ESTA authorization'],
      processing: '72 hours',
      cost: '$21',
      notes: 'ESTA authorization required under Visa Waiver Program'
    }
  };

  const countries = [
    'United States', 'United Kingdom', 'France', 'Germany', 'Italy', 
    'Spain', 'Japan', 'China', 'Australia', 'Canada', 'India', 'Brazil'
  ];

  const destinations = [
    'France', 'Italy', 'Spain', 'Japan', 'China', 'United States',
    'United Kingdom', 'Germany', 'Australia', 'Thailand', 'Egypt', 'Greece'
  ];

  const handleConnectGuide = (guide) => {
    setSelectedGuide(guide);
    setShowBookingModal(true);
  };

  const handleBookGuide = () => {
    toast({
      title: 'Guide Booking Request Sent! 📧',
      description: `Your request to connect with ${selectedGuide?.name} has been sent. They'll respond within 24 hours.`,
    });
    setShowBookingModal(false);
    setSelectedGuide(null);
  };

  const handleSaveGuide = (guide) => {
    toast({
      title: 'Guide Saved! 💾',
      description: `${guide.name} has been saved to your travel plan.`,
    });
  };

  const checkVisaRequirements = () => {
    if (!visaFrom || !visaTo) {
      toast({
        title: 'Please select both countries',
        description: 'Select your nationality and destination to check visa requirements.',
      });
      return;
    }

    const key = `${visaFrom.replace(' ', '')}-${visaTo.replace(' ', '')}`;
    const result = visaRequirements[key];
    
    if (result) {
      toast({
        title: result.required ? 'Visa Required ⚠️' : 'No Visa Required ✅',
        description: result.notes,
      });
    } else {
      toast({
        title: 'Visa Information',
        description: 'Please check with the embassy for specific requirements.',
      });
    }
  };

  const handleSaveVisaInfo = () => {
    if (!visaFrom || !visaTo) {
      toast({
        title: 'Please select countries first',
        description: 'Select your nationality and destination to save visa information.',
      });
      return;
    }

    toast({
      title: 'Visa Info Saved! 📋',
      description: 'Visa requirements have been saved to your travel plan.',
    });
  };

  const filteredGuides = mockGuides.filter(guide => {
    const locationMatch = !searchLocation || 
      guide.location.toLowerCase().includes(searchLocation.toLowerCase()) ||
      guide.specialty.toLowerCase().includes(searchLocation.toLowerCase());
    
    const priceMatch = priceFilter === 'all' || 
      (priceFilter === 'budget' && guide.hourlyRate < 50) ||
      (priceFilter === 'mid' && guide.hourlyRate >= 50 && guide.hourlyRate < 70) ||
      (priceFilter === 'premium' && guide.hourlyRate >= 70);
    
    return locationMatch && priceMatch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5">
      <div className="container mx-auto px-4 md:px-6 py-6 md:py-8 pt-20">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
            Connect with Local Experts
          </h1>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Discover authentic experiences with verified local guides and get instant visa requirements for your destination
          </p>
        </motion.div>

        {/* Journey Progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <JourneyProgress currentStep="guides" className="max-w-4xl mx-auto" />
        </motion.div>

        {/* Main Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid grid-cols-2 max-w-md mx-auto">
            <TabsTrigger value="guides" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Local Guides
            </TabsTrigger>
            <TabsTrigger value="visa" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Visa Check
            </TabsTrigger>
          </TabsList>

          {/* Local Guides Tab */}
          <TabsContent value="guides" className="space-y-6">
            {/* Search and Filters */}
            <Card className="p-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <Label htmlFor="search">Search by location or specialty</Label>
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="search"
                      placeholder="e.g., Paris, Food tours, Art..."
                      value={searchLocation}
                      onChange={(e) => setSearchLocation(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <div className="w-full md:w-48">
                  <Label htmlFor="price-filter">Price Range</Label>
                  <Select value={priceFilter} onValueChange={setPriceFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="All prices" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Prices</SelectItem>
                      <SelectItem value="budget">Budget (Under $50/hr)</SelectItem>
                      <SelectItem value="mid">Mid-range ($50-70/hr)</SelectItem>
                      <SelectItem value="premium">Premium ($70+/hr)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-end">
                  <Button variant="outline" size="sm">
                    <Map className="w-4 h-4 mr-2" />
                    Map View
                  </Button>
                </div>
              </div>
            </Card>

            {/* Guides Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredGuides.map((guide, index) => (
                <motion.div
                  key={guide.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 h-full">
                    {/* Guide Photo */}
                    <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <User className="w-20 h-20 text-primary/40" />
                      </div>
                      
                      {/* Badges */}
                      <div className="absolute top-3 left-3 flex flex-col gap-2">
                        {guide.verified && (
                          <Badge className="bg-blue-100 text-blue-700 border-blue-200">
                            <Shield className="w-3 h-3 mr-1" />
                            Verified
                          </Badge>
                        )}
                        {guide.isEcoFriendly && (
                          <Badge className="bg-green-100 text-green-700 border-green-200">
                            <TreePine className="w-3 h-3 mr-1" />
                            Eco-Friendly
                          </Badge>
                        )}
                      </div>

                      {/* Availability */}
                      <div className="absolute top-3 right-3">
                        <Badge variant="outline" className="bg-white/90">
                          <CheckCircle className="w-3 h-3 mr-1 text-green-600" />
                          {guide.availability}
                        </Badge>
                      </div>
                    </div>

                    {/* Guide Details */}
                    <div className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-lg">{guide.name}</h3>
                          <p className="text-sm text-muted-foreground flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {guide.location}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-lg">${guide.hourlyRate}/hr</div>
                          <div className="text-xs text-muted-foreground">{guide.duration}</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">{guide.rating}</span>
                          <span className="text-sm text-muted-foreground">({guide.reviews})</span>
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                        {guide.description}
                      </p>

                      <div className="mb-3">
                        <div className="text-sm font-medium mb-1">Specialty:</div>
                        <Badge variant="outline" className="text-xs">
                          {guide.specialty}
                        </Badge>
                      </div>

                      <div className="mb-3">
                        <div className="text-sm font-medium mb-1">Languages:</div>
                        <div className="flex flex-wrap gap-1">
                          {guide.languages.map((lang) => (
                            <Badge key={lang} variant="outline" className="text-xs">
                              <Languages className="w-3 h-3 mr-1" />
                              {lang}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="text-sm font-medium mb-1">Highlights:</div>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          {guide.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-center gap-1">
                              <CheckCircle className="w-3 h-3 text-green-600" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2">
                        <Button 
                          onClick={() => handleConnectGuide(guide)}
                          className="flex-1"
                          size="sm"
                        >
                          <MessageCircle className="w-4 h-4 mr-1" />
                          Connect
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleSaveGuide(guide)}
                        >
                          <Bookmark className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* No Results */}
            {filteredGuides.length === 0 && (
              <div className="text-center py-12">
                <Users className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold mb-2">No guides found</h3>
                <p className="text-muted-foreground">Try adjusting your search or filters</p>
              </div>
            )}
          </TabsContent>

          {/* Visa Check Tab */}
          <TabsContent value="visa" className="space-y-6">
            <Card className="p-6">
              <div className="text-center mb-6">
                <FileText className="w-16 h-16 mx-auto text-primary mb-4" />
                <h2 className="text-2xl font-bold mb-2">Visa Requirements Checker</h2>
                <p className="text-muted-foreground">
                  Get instant information about visa requirements for your trip
                </p>
              </div>

              <div className="max-w-md mx-auto space-y-4">
                <div>
                  <Label htmlFor="nationality">Your Nationality</Label>
                  <Select value={visaFrom} onValueChange={setVisaFrom}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your country" />
                    </SelectTrigger>
                    <SelectContent>
                      {countries.map((country) => (
                        <SelectItem key={country} value={country}>
                          {country}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="destination">Destination</Label>
                  <Select value={visaTo} onValueChange={setVisaTo}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select destination" />
                    </SelectTrigger>
                    <SelectContent>
                      {destinations.map((destination) => (
                        <SelectItem key={destination} value={destination}>
                          {destination}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex gap-3">
                  <Button onClick={checkVisaRequirements} className="flex-1">
                    <Globe className="w-4 h-4 mr-2" />
                    Check Requirements
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={handleSaveVisaInfo}
                    disabled={!visaFrom || !visaTo}
                  >
                    <Save className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Sample Visa Information */}
              {visaFrom && visaTo && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-8 p-4 border rounded-lg bg-muted/30"
                >
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <Globe className="w-5 h-5 text-primary" />
                    Visa Information: {visaFrom} → {visaTo}
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-medium mb-1">Visa Required:</div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>No visa required for 90 days</span>
                      </div>
                    </div>
                    <div>
                      <div className="font-medium mb-1">Requirements:</div>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Valid passport (6+ months)</li>
                        <li>• Return/onward ticket</li>
                        <li>• Proof of accommodation</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}
            </Card>

            {/* Visa Tips */}
            <Card className="p-6 bg-blue-50 border-blue-200">
              <h3 className="font-semibold mb-3 flex items-center gap-2 text-blue-800">
                <AlertCircle className="w-5 h-5" />
                Travel Tips
              </h3>
              <ul className="space-y-2 text-sm text-blue-700">
                <li>• Always check requirements 2-3 months before travel</li>
                <li>• Some countries require passport validity of 6+ months</li>
                <li>• Consider travel insurance for international trips</li>
                <li>• Keep digital copies of important documents</li>
                <li>• Check if your destination requires specific vaccinations</li>
              </ul>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Guide Booking Modal */}
        <Dialog open={showBookingModal} onOpenChange={setShowBookingModal}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Connect with {selectedGuide?.name}</DialogTitle>
            </DialogHeader>
            
            {selectedGuide && (
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                    <User className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{selectedGuide.name}</h3>
                    <p className="text-sm text-muted-foreground">{selectedGuide.location}</p>
                    <p className="text-sm text-muted-foreground">{selectedGuide.specialty}</p>
                  </div>
                </div>

                <Separator />

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Hourly Rate:</span>
                    <span className="font-semibold">${selectedGuide.hourlyRate}/hour</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Typical Duration:</span>
                    <span>{selectedGuide.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Rating:</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>{selectedGuide.rating} ({selectedGuide.reviews} reviews)</span>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-3">
                  <Label htmlFor="tour-date">Preferred Date</Label>
                  <Input type="date" id="tour-date" />
                  
                  <Label htmlFor="tour-time">Preferred Time</Label>
                  <Input type="time" id="tour-time" />
                  
                  <Label htmlFor="group-size">Group Size</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select group size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 person</SelectItem>
                      <SelectItem value="2">2 people</SelectItem>
                      <SelectItem value="3-4">3-4 people</SelectItem>
                      <SelectItem value="5+">5+ people</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex gap-3">
                  <Button onClick={handleBookGuide} className="flex-1">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Send Request
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => setShowBookingModal(false)}
                  >
                    Cancel
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

export default LocalGuides;