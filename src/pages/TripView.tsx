import React from 'react';import React, { useState } from 'react';import React, { useState } from 'react';import React, { useState } from 'react';import React, { useState } from 'react';import React, { useState } from 'react';import { useState, useEffect } from 'react';import { useState, useEffect } from 'react';import { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';import { useNavigate } from 'react-router-dom';

import { Card } from '@/components/ui/card';

import { ArrowLeft } from 'lucide-react';import { motion } from 'framer-motion';import { useNavigate } from 'react-router-dom';



export default function TripView() {import { ArrowLeft, Calendar, DollarSign, MapPin, Edit, Star, Gift, Save, Share, Coffee, Utensils, Camera, TreePine, Heart, Sparkles, Plus, Check, MessageCircle, CheckSquare, Square, Footprints, Leaf, MapIcon, Thermometer, Umbrella, CreditCard, Activity, Sliders } from 'lucide-react';

  const navigate = useNavigate();

import { Button } from '@/components/ui/button';import { motion } from 'framer-motion';import { useNavigate } from 'react-router-dom';

  return (

    <div className="min-h-screen p-6">import { Card } from '@/components/ui/card';

      <div className="max-w-4xl mx-auto">

        <div className="flex items-center justify-between mb-8">import { Badge } from '@/components/ui/badge';import { ArrowLeft, Calendar, DollarSign, MapPin, Edit, Star, Gift, Save, Share, Coffee, Utensils, Camera, TreePine, Heart, Sparkles, Plus, Check, MessageCircle, CheckSquare, Square, Footprints, Leaf, MapIcon, Thermometer, Umbrella, CreditCard, Activity, Sliders } from 'lucide-react';

          <Button 

            variant="ghost" import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

            onClick={() => navigate('/')}

          >import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';import { Button } from '@/components/ui/button';import { motion } from 'framer-motion';import { useNavigate } from 'react-router-dom';

            <ArrowLeft className="w-4 h-4 mr-2" />

            Back to Homeimport { Input } from '@/components/ui/input';

          </Button>

          <h1 className="text-3xl font-bold">Your Paris Adventure</h1>import { Label } from '@/components/ui/label';import { Card } from '@/components/ui/card';

        </div>

import { Slider } from '@/components/ui/slider';

        <Card className="p-6 mb-6">

          <h2 className="text-xl font-bold mb-4">Day 1 - October 15, 2025</h2>import { Separator } from '@/components/ui/separator';import { Badge } from '@/components/ui/badge';import { 

          

          <div className="space-y-4">import { useToast } from '@/hooks/use-toast';

            <div className="border-l-4 border-primary pl-4">

              <div className="font-bold text-primary">9:00 AM</div>import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

              <h3 className="text-lg font-semibold">Hike in Montmartre</h3>

              <p className="text-muted-foreground">Explore the artistic neighborhood and enjoy panoramic views of Paris</p>export default function TripView() {

              <p className="text-sm text-muted-foreground">📍 Montmartre, Paris</p>

            </div>  const navigate = useNavigate();import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';  ArrowLeft, Calendar, DollarSign, MapPin, Edit, import { motion } from 'framer-motion';import { useParams, useNavigate } from 'react-router-dom';



            <div className="border-l-4 border-primary pl-4">  const { toast } = useToast();

              <div className="font-bold text-primary">12:00 PM</div>

              <h3 className="text-lg font-semibold">Lunch at Café de Flore</h3>  const [activeTab, setActiveTab] = useState('itinerary');import { Input } from '@/components/ui/input';

              <p className="text-muted-foreground">Historic café known for its literary clientele and French classics</p>

              <p className="text-sm text-muted-foreground">📍 172 Boulevard Saint-Germain</p>

              <p className="font-bold">$45</p>

            </div>  return (import { Label } from '@/components/ui/label';  Plane, Hotel, Ticket, Sun, Cloud, Star, Gift, 



            <div className="border-l-4 border-primary pl-4">    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5">

              <div className="font-bold text-primary">2:00 PM</div>

              <h3 className="text-lg font-semibold">Book Louvre tour</h3>      <div className="border-b border-border bg-card/80 backdrop-blur-xl sticky top-0 z-50">import { Slider } from '@/components/ui/slider';

              <p className="text-muted-foreground">Skip-the-line access with expert guide to see Mona Lisa and masterpieces</p>

              <p className="text-sm text-muted-foreground">📍 Louvre Museum</p>        <div className="container mx-auto px-4 md:px-6 py-3 md:py-4">

              <p className="font-bold">$65</p>

            </div>          <div className="flex items-center justify-between">import { Separator } from '@/components/ui/separator';  Save, Share, Coffee, Utensils, Camera, TreePine, import { 



            <div className="border-l-4 border-primary pl-4">            <Button 

              <div className="font-bold text-primary">4:30 PM</div>

              <h3 className="text-lg font-semibold">30-minute break</h3>              variant="ghost" import { useToast } from '@/hooks/use-toast';

              <p className="text-muted-foreground">Relax and recharge at Tuileries Garden</p>

              <p className="text-sm text-muted-foreground">📍 Tuileries Garden</p>              onClick={() => navigate('/')}

            </div>

              className="hover:bg-primary/10 transition-colors"  Heart, Sparkles, Plus, Check, MessageCircle, 

            <div className="border-l-4 border-primary pl-4">

              <div className="font-bold text-primary">7:00 PM</div>            >

              <h3 className="text-lg font-semibold">Dinner at Le Consulat (eco-friendly)</h3>

              <p className="text-muted-foreground">Traditional French bistro in Montmartre with sustainable practices</p>              <ArrowLeft className="w-4 h-4 mr-2" />const TripView = () => {

              <p className="text-sm text-muted-foreground">📍 18 Rue Norvins, Montmartre</p>

              <p className="font-bold">$85</p>              Back to Home

            </div>

          </div>            </Button>  const navigate = useNavigate();  CheckSquare, Square, Mail, FileText, Footprints,   ArrowLeft, Calendar, DollarSign, MapPin, Edit, import { motion } from 'framer-motion';import { useParams, useNavigate } from 'react-router-dom';

        </Card>

            

        <div className="text-center">

          <p className="text-muted-foreground">This is your detailed itinerary with timeline format showing:</p>            <div className="flex items-center gap-2">  const { toast } = useToast();

          <p className="text-muted-foreground">

            Day 1: 9:00 AM: Hike in Montmartre; 12:00 PM: Lunch at Café de Flore;               <img 

            2:00 PM: Book Louvre tour; 4:30 PM: 30-minute break; 

            7:00 PM: Dinner at Le Consulat (eco-friendly)                src="/tripgenie.png"   const [activeTab, setActiveTab] = useState('itinerary');  Leaf, BookOpen, MapIcon, Thermometer, Umbrella,

          </p>

        </div>                alt="TripGenie"

      </div>

    </div>                className="h-6 md:h-8 w-auto"  const [bufferTime, setBufferTime] = useState(30);

  );

}              />

              <span className="font-bold text-lg">Your Paris Adventure</span>  const [showCustomize, setShowCustomize] = useState(false);  CreditCard, Activity, Sliders, Instagram  Plane, Hotel, Ticket, Sun, Cloud, Star, Gift, 

            </div>



            <div className="flex items-center gap-2">

              <Button variant="outline" size="sm">  const mockTrip = {} from 'lucide-react';

                <Save className="w-4 h-4 mr-1" />

                Save    destination: 'Paris, France',

              </Button>

              <Button variant="outline" size="sm">    duration: '5 days',import { Button } from '@/components/ui/button';  Save, Share, Coffee, Utensils, Camera, TreePine, import { 

                <Share className="w-4 h-4 mr-1" />

                Share    budget: 2500,

              </Button>

            </div>    carbonSavings: 20import { Card } from '@/components/ui/card';

          </div>

        </div>  };

      </div>

import { Badge } from '@/components/ui/badge';  Heart, Sparkles, Plus, Check, MessageCircle, 

      <div className="container mx-auto px-4 md:px-6 py-6 md:py-8">

        <motion.div  const mockItinerary = [

          initial={{ opacity: 0, y: 30 }}

          animate={{ opacity: 1, y: 0 }}    {import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

          className="mb-8"

        >      day: 1,

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">

            Paris, France      date: '2025-10-15',import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';  CheckSquare, Square, Mail, FileText, Footprints,   ArrowLeft, Calendar, DollarSign, MapPin, Edit, import { motion, AnimatePresence } from 'framer-motion';import { useParams, useNavigate } from 'react-router-dom';import { useParams, useNavigate } from 'react-router-dom';

          </h1>

                weather: { temp: 75, condition: 'sunny', description: 'Sunny' },

          <div className="flex flex-wrap gap-4 text-sm md:text-base text-muted-foreground mb-4">

            <div className="flex items-center gap-2">      activities: [import { Input } from '@/components/ui/input';

              <Calendar className="w-4 h-4 text-primary" />

              <span>5 days • Oct 15-20, 2025</span>        {

            </div>

            <div className="flex items-center gap-2">          id: '1',import { Label } from '@/components/ui/label';  Leaf, BookOpen, MapIcon, Thermometer, Umbrella,

              <DollarSign className="w-4 h-4 text-accent" />

              <span>Budget: $2500</span>          time: '9:00 AM',

            </div>

            <div className="flex items-center gap-2">          title: 'Hike in Montmartre',import { Slider } from '@/components/ui/slider';

              <Footprints className="w-4 h-4 text-green-500" />

              <span>Saves 20% emissions</span>          description: 'Explore the artistic neighborhood and enjoy panoramic views of Paris',

            </div>

          </div>          location: 'Montmartre, Paris',import { Textarea } from '@/components/ui/textarea';  CreditCard, Activity, Sliders, Instagram  Plane, Hotel, Ticket, Sun, Cloud, CloudRain,



          <div className="flex flex-wrap gap-2 mb-4">          price: 0,

            <Badge className="bg-green-100 text-green-700 border-green-200">

              <TreePine className="w-3 h-3 mr-1" />          ecoFriendly: true,import { Separator } from '@/components/ui/separator';

              Eco-Friendly Trip

            </Badge>          icon: Camera

            <Badge variant="outline">

              <Activity className="w-3 h-3 mr-1" />        },import { useToast } from '@/hooks/use-toast';} from 'lucide-react';

              5 Activities

            </Badge>        {

            <Badge variant="outline">

              <Star className="w-3 h-3 mr-1" />          id: '2',

              Personalized

            </Badge>          time: '12:00 PM',

          </div>

        </motion.div>          title: 'Lunch at Café de Flore',const TripView = () => {import { Button } from '@/components/ui/button';  Star, Gift, Save, Share, Coffee, Utensils,import { 



        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">          description: 'Historic café known for its literary clientele and French classics',

          <TabsList className="grid grid-cols-4 max-w-md mx-auto">

            <TabsTrigger value="itinerary">Itinerary</TabsTrigger>          location: '172 Boulevard Saint-Germain',  const navigate = useNavigate();

            <TabsTrigger value="map">Map</TabsTrigger>

            <TabsTrigger value="weather">Weather</TabsTrigger>          price: 45,

            <TabsTrigger value="checklist">Checklist</TabsTrigger>

          </TabsList>          ecoFriendly: false,  const { toast } = useToast();import { Card } from '@/components/ui/card';



          <TabsContent value="itinerary" className="space-y-6">          icon: Coffee

            <Card className="overflow-hidden">

              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-4 border-b">        },  

                <div className="flex items-center justify-between">

                  <div>        {

                    <h2 className="text-xl font-bold">Day 1</h2>

                    <p className="text-muted-foreground">2025-10-15</p>          id: '3',  const [activeTab, setActiveTab] = useState('itinerary');import { Badge } from '@/components/ui/badge';  Camera, TreePine, Heart, Sparkles,

                  </div>

                  <Badge variant="outline">5 activities</Badge>          time: '2:00 PM',

                </div>

              </div>          title: 'Book Louvre tour',  const [bufferTime, setBufferTime] = useState(30);



              <div className="p-4">          description: 'Skip-the-line access with expert guide to see Mona Lisa and masterpieces',

                <div className="space-y-4">

                  <div className="flex gap-4 p-4 rounded-lg border">          location: 'Louvre Museum',  const [showCustomize, setShowCustomize] = useState(false);import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

                    <div className="flex flex-col items-center">

                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">          price: 65,

                        <Camera className="w-5 h-5 text-primary" />

                      </div>          ecoFriendly: true,

                      <div className="w-0.5 h-8 bg-border mt-2"></div>

                    </div>          icon: Star

                    <div className="flex-1">

                      <div className="flex justify-between items-start mb-2">        },  // Mock itinerary data with exact timeline format requestedimport { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';  Plus, Check, MessageCircle, CheckSquare, Square, Mail,  ArrowLeft, Calendar, DollarSign, MapPin, Clock, Edit, import { motion, AnimatePresence } from 'framer-motion';import { motion, AnimatePresence } from 'framer-motion';

                        <div className="flex-1">

                          <span className="font-bold text-primary text-lg">9:00 AM</span>        {

                          <h3 className="font-semibold text-lg mb-1">Hike in Montmartre</h3>

                          <p className="text-muted-foreground text-sm mb-2">          id: '4',  const mockTrip = {

                            Explore the artistic neighborhood and enjoy panoramic views of Paris

                          </p>          time: '4:30 PM',

                          <div className="flex items-center gap-2 text-xs text-muted-foreground">

                            <MapPin className="w-3 h-3" />          title: '30-minute break',    destination: 'Paris, France',import { Input } from '@/components/ui/input';

                            Montmartre, Paris

                          </div>          description: 'Relax and recharge at Tuileries Garden',

                        </div>

                        <div className="flex flex-col items-end gap-2">          location: 'Tuileries Garden',    duration: '5 days',

                          <Badge className="bg-green-100 text-green-700 border-green-200 text-xs">

                            <TreePine className="w-3 h-3 mr-1" />          price: 0,

                            Eco

                          </Badge>          ecoFriendly: true,    budget: 2500,import { Label } from '@/components/ui/label';  FileText, Footprints, Leaf, BookOpen,

                        </div>

                      </div>          icon: TreePine

                    </div>

                  </div>        },    carbonSavings: 20



                  <div className="flex gap-4 p-4 rounded-lg border">        {

                    <div className="flex flex-col items-center">

                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">          id: '5',  };import { Slider } from '@/components/ui/slider';

                        <Coffee className="w-5 h-5 text-primary" />

                      </div>          time: '7:00 PM',

                      <div className="w-0.5 h-8 bg-border mt-2"></div>

                    </div>          title: 'Dinner at Le Consulat (eco-friendly)',

                    <div className="flex-1">

                      <div className="flex justify-between items-start mb-2">          description: 'Traditional French bistro in Montmartre with sustainable practices',

                        <div className="flex-1">

                          <span className="font-bold text-primary text-lg">12:00 PM</span>          location: '18 Rue Norvins, Montmartre',  const mockItinerary = [import { Textarea } from '@/components/ui/textarea';  MapIcon, Thermometer, Umbrella,  Plane, Hotel, Ticket, Sun, Cloud, CloudRain, Snowflake,

                          <h3 className="font-semibold text-lg mb-1">Lunch at Café de Flore</h3>

                          <p className="text-muted-foreground text-sm mb-2">          price: 85,

                            Historic café known for its literary clientele and French classics

                          </p>          ecoFriendly: true,    {

                          <div className="flex items-center gap-2 text-xs text-muted-foreground">

                            <MapPin className="w-3 h-3" />          icon: Utensils

                            172 Boulevard Saint-Germain

                          </div>        }      day: 1,import { Separator } from '@/components/ui/separator';

                        </div>

                        <div className="flex flex-col items-end gap-2">      ]

                          <span className="font-bold text-lg">$45</span>

                          <Button size="sm" className="text-xs px-3">    }      date: '2025-10-15',

                            <CreditCard className="w-3 h-3 mr-1" />

                            Book  ];

                          </Button>

                        </div>      weather: { temp: 75, condition: 'sunny', description: 'Sunny' },import { useToast } from '@/hooks/use-toast';  CreditCard, Activity, Sliders, Instagram

                      </div>

                    </div>  const mockChecklist = [

                  </div>

    { id: 1, task: 'Pack passport', completed: false, category: 'documents' },      activities: [

                  <div className="flex gap-4 p-4 rounded-lg border">

                    <div className="flex flex-col items-center">    { id: 2, task: 'Book airport transfer', completed: true, category: 'transport' },

                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">

                        <Star className="w-5 h-5 text-primary" />    { id: 3, task: 'Pack comfortable walking shoes', completed: false, category: 'clothing' },        {

                      </div>

                      <div className="w-0.5 h-8 bg-border mt-2"></div>    { id: 4, task: 'Download offline maps', completed: false, category: 'apps' }

                    </div>

                    <div className="flex-1">  ];          id: '1',

                      <div className="flex justify-between items-start mb-2">

                        <div className="flex-1">

                          <span className="font-bold text-primary text-lg">2:00 PM</span>

                          <h3 className="font-semibold text-lg mb-1">Book Louvre tour</h3>  const [checklistItems, setChecklistItems] = useState(mockChecklist);          time: '9:00 AM',const TripView = () => {} from 'lucide-react';  Star, Gift, Save, Share, Navigation, Coffee, Utensils,import { import { 

                          <p className="text-muted-foreground text-sm mb-2">

                            Skip-the-line access with expert guide to see Mona Lisa and masterpieces

                          </p>

                          <div className="flex items-center gap-2 text-xs text-muted-foreground">  const handleSavePlan = () => {          title: 'Hike in Montmartre',

                            <MapPin className="w-3 h-3" />

                            Louvre Museum    toast({

                          </div>

                        </div>      title: 'Plan Saved! 💾',          description: 'Explore the artistic neighborhood and enjoy panoramic views of Paris',  const navigate = useNavigate();

                        <div className="flex flex-col items-end gap-2">

                          <span className="font-bold text-lg">$65</span>      description: 'Your itinerary has been saved successfully.',

                          <div className="flex items-center gap-2">

                            <Badge className="bg-green-100 text-green-700 border-green-200 text-xs">    });          location: 'Montmartre, Paris',

                              <TreePine className="w-3 h-3 mr-1" />

                              Eco  };

                            </Badge>

                            <Button size="sm" className="text-xs px-3">          price: 0,  const { toast } = useToast();import { Button } from '@/components/ui/button';

                              <CreditCard className="w-3 h-3 mr-1" />

                              Book  const handleGetNFT = () => {

                            </Button>

                          </div>    toast({          ecoFriendly: true,

                        </div>

                      </div>      title: 'Digital Souvenir Earned! 🎁',

                    </div>

                  </div>      description: 'You have received an exclusive Eiffel Tower NFT badge!',          icon: Camera  



                  <div className="flex gap-4 p-4 rounded-lg border">    });

                    <div className="flex flex-col items-center">

                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">  };        },

                        <TreePine className="w-5 h-5 text-primary" />

                      </div>

                      <div className="w-0.5 h-8 bg-border mt-2"></div>

                    </div>  const toggleChecklistItem = (itemId: number) => {        {  const [activeTab, setActiveTab] = useState('itinerary');import { Card } from '@/components/ui/card';  Camera, TreePine, Heart, Sparkles, Map, Settings,

                    <div className="flex-1">

                      <div className="flex justify-between items-start mb-2">    setChecklistItems(items =>

                        <div className="flex-1">

                          <span className="font-bold text-primary text-lg">4:30 PM</span>      items.map(item =>          id: '2',

                          <h3 className="font-semibold text-lg mb-1">30-minute break</h3>

                          <p className="text-muted-foreground text-sm mb-2">        item.id === itemId ? { ...item, completed: !item.completed } : item

                            Relax and recharge at Tuileries Garden

                          </p>      )          time: '12:00 PM',  const [bufferTime, setBufferTime] = useState(30);

                          <div className="flex items-center gap-2 text-xs text-muted-foreground">

                            <MapPin className="w-3 h-3" />    );

                            Tuileries Garden

                          </div>  };          title: 'Lunch at Café de Flore',

                        </div>

                        <div className="flex flex-col items-end gap-2">

                          <Badge className="bg-green-100 text-green-700 border-green-200 text-xs">

                            <TreePine className="w-3 h-3 mr-1" />  return (          description: 'Historic café known for its literary clientele and French classics',  const [showCustomize, setShowCustomize] = useState(false);import { Badge } from '@/components/ui/badge';

                            Eco

                          </Badge>    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5">

                        </div>

                      </div>      <div className="border-b border-border bg-card/80 backdrop-blur-xl sticky top-0 z-50">          location: '172 Boulevard Saint-Germain',

                    </div>

                  </div>        <div className="container mx-auto px-4 md:px-6 py-3 md:py-4">



                  <div className="flex gap-4 p-4 rounded-lg border">          <div className="flex items-center justify-between">          price: 45,

                    <div className="flex flex-col items-center">

                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">            <Button 

                        <Utensils className="w-5 h-5 text-primary" />

                      </div>              variant="ghost"           ecoFriendly: false,

                    </div>

                    <div className="flex-1">              onClick={() => navigate('/')}

                      <div className="flex justify-between items-start mb-2">

                        <div className="flex-1">              className="hover:bg-primary/10 transition-colors"          icon: Coffee  // Mock itinerary data with timeline format as requestedimport { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';  Plus, Minus, RotateCcw, Check, X, Award, Download,  ArrowLeft, Calendar, DollarSign, MapPin, Clock, Edit,   ArrowLeft, Calendar, DollarSign, MapPin, Clock, Edit, 

                          <span className="font-bold text-primary text-lg">7:00 PM</span>

                          <h3 className="font-semibold text-lg mb-1">Dinner at Le Consulat (eco-friendly)</h3>            >

                          <p className="text-muted-foreground text-sm mb-2">

                            Traditional French bistro in Montmartre with sustainable practices              <ArrowLeft className="w-4 h-4 mr-2" />        },

                          </p>

                          <div className="flex items-center gap-2 text-xs text-muted-foreground">              Back to Home

                            <MapPin className="w-3 h-3" />

                            18 Rue Norvins, Montmartre            </Button>        {  const mockTrip = {

                          </div>

                        </div>            

                        <div className="flex flex-col items-end gap-2">

                          <span className="font-bold text-lg">$85</span>            <div className="flex items-center gap-2">          id: '3',

                          <div className="flex items-center gap-2">

                            <Badge className="bg-green-100 text-green-700 border-green-200 text-xs">              <img 

                              <TreePine className="w-3 h-3 mr-1" />

                              Eco                src="/tripgenie.png"           time: '2:00 PM',    destination: 'Paris, France',import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from '@/components/ui/dialog';

                            </Badge>

                            <Button size="sm" className="text-xs px-3">                alt="TripGenie"

                              <CreditCard className="w-3 h-3 mr-1" />

                              Book                className="h-6 md:h-8 w-auto"          title: 'Book Louvre tour',

                            </Button>

                          </div>              />

                        </div>

                      </div>              <span className="font-bold text-lg">Your Paris Adventure</span>          description: 'Skip-the-line access with expert guide to see Mona Lisa and masterpieces',    duration: '5 days',

                    </div>

                  </div>            </div>

                </div>

              </div>          location: 'Louvre Museum',

            </Card>

          </TabsContent>            <div className="flex items-center gap-2">



          <TabsContent value="map">              <Button variant="outline" size="sm" onClick={handleSavePlan}>          price: 65,    budget: 2500,import { Input } from '@/components/ui/input';  Sliders, MessageCircle, CheckSquare, Square, Mail,

            <Card className="p-6">

              <div className="text-center">                <Save className="w-4 h-4 mr-1" />

                <MapIcon className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />

                <h3 className="text-xl font-semibold mb-2">Interactive Map</h3>                Save          ecoFriendly: true,

                <p className="text-muted-foreground mb-4">

                  View all your destinations and activities on an interactive map              </Button>

                </p>

              </div>              <Button variant="outline" size="sm">          icon: Star    carbonSavings: 20

            </Card>

          </TabsContent>                <Share className="w-4 h-4 mr-1" />



          <TabsContent value="weather">                Share        },

            <Card className="p-6">

              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">              </Button>

                <Thermometer className="w-5 h-5 text-primary" />

                Weather Forecast            </div>        {  };import { Label } from '@/components/ui/label';

              </h3>

            </Card>          </div>

          </TabsContent>

        </div>          id: '4',

          <TabsContent value="checklist">

            <Card className="p-6">      </div>

              <div className="flex items-center justify-between mb-6">

                <h3 className="text-xl font-semibold flex items-center gap-2">          time: '4:30 PM',

                  <CheckSquare className="w-5 h-5 text-primary" />

                  Travel Checklist      <div className="container mx-auto px-4 md:px-6 py-6 md:py-8">

                </h3>

                <div className="text-sm text-muted-foreground">        <motion.div          title: '30-minute break',

                  1 of 4 completed

                </div>          initial={{ opacity: 0, y: 30 }}

              </div>

          animate={{ opacity: 1, y: 0 }}          description: 'Relax and recharge at Tuileries Garden',  const mockItinerary = [import { Slider } from '@/components/ui/slider';  FileText, Footprints, Wind, Move, Timer, Users,  Plane, Hotel, Ticket, Sun, Cloud, CloudRain, Snowflake,  Plane, Hotel, Ticket, Sun, Cloud, CloudRain, Snowflake,

              <div className="space-y-3">

                <div className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors">          className="mb-8"

                  <Square className="w-5 h-5 text-muted-foreground" />

                  <span className="flex-1">Pack passport</span>        >          location: 'Tuileries Garden',

                  <Badge variant="outline" className="text-xs">documents</Badge>

                </div>          <div className="flex flex-col lg:flex-row gap-6 mb-6">

                

                <div className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors">            <div className="flex-1">          price: 0,    {

                  <CheckSquare className="w-5 h-5 text-green-600" />

                  <span className="flex-1 line-through text-muted-foreground">Book airport transfer</span>              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">

                  <Badge variant="outline" className="text-xs">transport</Badge>

                </div>                {mockTrip.destination}          ecoFriendly: true,

                

                <div className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors">              </h1>

                  <Square className="w-5 h-5 text-muted-foreground" />

                  <span className="flex-1">Pack comfortable walking shoes</span>                        icon: TreePine      day: 1,import { Textarea } from '@/components/ui/textarea';

                  <Badge variant="outline" className="text-xs">clothing</Badge>

                </div>              <div className="flex flex-wrap gap-4 text-sm md:text-base text-muted-foreground mb-4">

                

                <div className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors">                <div className="flex items-center gap-2">        },

                  <Square className="w-5 h-5 text-muted-foreground" />

                  <span className="flex-1">Download offline maps</span>                  <Calendar className="w-4 h-4 text-primary" />

                  <Badge variant="outline" className="text-xs">apps</Badge>

                </div>                  <span>{mockTrip.duration} • Oct 15-20, 2025</span>        {      date: '2025-10-15',

              </div>

                </div>

              <Button className="w-full mt-4" variant="outline">

                <Plus className="w-4 h-4 mr-2" />                <div className="flex items-center gap-2">          id: '5',

                Add Custom Item

              </Button>                  <DollarSign className="w-4 h-4 text-accent" />

            </Card>

          </TabsContent>                  <span>Budget: ${mockTrip.budget}</span>          time: '7:00 PM',      weather: { temp: 75, condition: 'sunny', description: 'Sunny' },import { Separator } from '@/components/ui/separator';  Instagram, TrendingUp, Leaf, BookOpen,

        </Tabs>

      </div>                </div>

    </div>

  );                <div className="flex items-center gap-2">          title: 'Dinner at Le Consulat (eco-friendly)',

}
                  <Footprints className="w-4 h-4 text-green-500" />

                  <span>Saves {mockTrip.carbonSavings}% emissions</span>          description: 'Traditional French bistro in Montmartre with sustainable practices',      activities: [

                </div>

              </div>          location: '18 Rue Norvins, Montmartre',



              <div className="flex flex-wrap gap-2 mb-4">          price: 85,        {import { useToast } from '@/hooks/use-toast';

                <Badge className="bg-green-100 text-green-700 border-green-200">

                  <TreePine className="w-3 h-3 mr-1" />          ecoFriendly: true,

                  Eco-Friendly Trip

                </Badge>          icon: Utensils          id: '1',

                <Badge variant="outline">

                  <Activity className="w-3 h-3 mr-1" />        }

                  5 Activities

                </Badge>      ]          time: '9:00 AM',  Play, Pause, MapIcon, Thermometer, Umbrella,  Star, Gift, Save, Share, Navigation, Coffee, Utensils,  Star, Gift, Save, Share, Navigation, Coffee, Utensils,

                <Badge variant="outline">

                  <Star className="w-3 h-3 mr-1" />    }

                  Personalized

                </Badge>  ];          title: 'Hike in Montmartre',

              </div>

            </div>



            <div className="lg:w-80">  const mockChecklist = [          description: 'Explore the artistic neighborhood and enjoy panoramic views of Paris',const TripView = () => {

              <Card className="p-4 bg-gradient-to-br from-primary/10 to-secondary/10">

                <h3 className="font-semibold mb-4 flex items-center gap-2">    { id: 1, task: 'Pack passport', completed: false, category: 'documents' },

                  <Sparkles className="w-5 h-5 text-primary" />

                  Quick Actions    { id: 2, task: 'Book airport transfer', completed: true, category: 'transport' },          location: 'Montmartre, Paris',

                </h3>

                    { id: 3, task: 'Pack comfortable walking shoes', completed: false, category: 'clothing' },

                <div className="space-y-3">

                  <Separator />    { id: 4, task: 'Download offline maps', completed: false, category: 'apps' }          price: 0,  const { id } = useParams();  Coins, CreditCard, Wallet2, Activity, Route



                  <Button  ];

                    onClick={handleGetNFT}

                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"          ecoFriendly: true,

                  >

                    <Gift className="w-4 h-4 mr-2" />  const [checklistItems, setChecklistItems] = useState(mockChecklist);

                    Get Digital Souvenir

                  </Button>          icon: Camera  const navigate = useNavigate();



                  <Button  // Weather icon helper

                    variant="outline"

                    className="w-full"  const getWeatherIcon = (condition: string) => {        },

                  >

                    <MessageCircle className="w-4 h-4 mr-2" />    if (condition === 'sunny') return <Sun className="w-5 h-5 text-yellow-500" />;

                    Chat for Help

                  </Button>    if (condition === 'cloudy') return <Cloud className="w-5 h-5 text-gray-500" />;        {  const { toast } = useToast();} from 'lucide-react';  Camera, TreePine, Heart, Sparkles, Map, Settings,  Camera, TreePine, Heart, Sparkles, Map, Settings,

                </div>

              </Card>    return <Sun className="w-5 h-5 text-yellow-500" />;

            </div>

          </div>  };          id: '2',

        </motion.div>



        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">

          <TabsList className="grid grid-cols-4 max-w-md mx-auto">  // Event handlers          time: '12:00 PM',  

            <TabsTrigger value="itinerary">Itinerary</TabsTrigger>

            <TabsTrigger value="map">Map</TabsTrigger>  const handleSavePlan = () => {

            <TabsTrigger value="weather">Weather</TabsTrigger>

            <TabsTrigger value="checklist">Checklist</TabsTrigger>    toast({          title: 'Lunch at Café de Flore',

          </TabsList>

      title: 'Plan Saved! 💾',

          <TabsContent value="itinerary" className="space-y-6">

            <div className="flex flex-wrap gap-3 mb-6">      description: 'Your itinerary has been saved successfully.',          description: 'Historic café known for its literary clientele and French classics',  // State managementimport { Button } from '@/components/ui/button';

              <Button

                variant="outline"    });

                size="sm"

                onClick={() => setShowCustomize(true)}  };          location: '172 Boulevard Saint-Germain',

              >

                <Sliders className="w-4 h-4 mr-2" />

                Customize

              </Button>  const handleGetNFT = () => {          price: 45,  const [activeTab, setActiveTab] = useState('itinerary');

              <Button variant="outline" size="sm">

                <Edit className="w-4 h-4 mr-2" />    toast({

                Edit Plan

              </Button>      title: 'Digital Souvenir Earned! 🎁',          ecoFriendly: false,

              <Button variant="outline" size="sm">

                <Plus className="w-4 h-4 mr-2" />      description: 'You\'ve received an exclusive Eiffel Tower NFT badge!',

                Add Activity

              </Button>    });          icon: Coffee  const [editingActivity, setEditingActivity] = useState<any>(null);import { Card } from '@/components/ui/card';  Plus, Minus, RotateCcw, Check, X, Award, Download,  Plus, Minus, RotateCcw, Check, X, Award, Download,

            </div>

  };

            <div className="space-y-8">

              {mockItinerary.map((day, dayIndex) => (        },

                <motion.div

                  key={day.day}  const toggleChecklistItem = (itemId: number) => {

                  initial={{ opacity: 0, y: 30 }}

                  animate={{ opacity: 1, y: 0 }}    setChecklistItems(items =>        {  const [bufferTime, setBufferTime] = useState(30);

                  transition={{ delay: dayIndex * 0.1 }}

                >      items.map(item =>

                  <Card className="overflow-hidden">

                    <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-4 border-b">        item.id === itemId ? { ...item, completed: !item.completed } : item          id: '3',

                      <div className="flex items-center justify-between">

                        <div>      )

                          <h2 className="text-xl font-bold">Day {day.day}</h2>

                          <p className="text-muted-foreground">{day.date}</p>    );          time: '2:00 PM',  const [showCustomize, setShowCustomize] = useState(false);import { Badge } from '@/components/ui/badge';

                        </div>

                        <div className="flex items-center gap-4">  };

                          <Badge variant="outline">

                            {day.activities.length} activities          title: 'Book Louvre tour',

                          </Badge>

                        </div>  return (

                      </div>

                    </div>    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5">          description: 'Skip-the-line access with expert guide to see Mona Lisa and masterpieces',  const [showChat, setShowChat] = useState(false);



                    <div className="p-4">      {/* Header Navigation */}

                      <div className="space-y-4">

                        {day.activities.map((activity, activityIndex) => {      <div className="border-b border-border bg-card/80 backdrop-blur-xl sticky top-0 z-50">          location: 'Louvre Museum',

                          const IconComponent = activity.icon;

                                  <div className="container mx-auto px-4 md:px-6 py-3 md:py-4">

                          return (

                            <motion.div          <div className="flex items-center justify-between">          price: 65,import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';  Sliders, MessageCircle, CheckSquare, Square, Mail,  Sliders, MessageCircle, CheckSquare, Square, Mail,

                              key={activity.id}

                              initial={{ opacity: 0, x: -20 }}            <Button 

                              animate={{ opacity: 1, x: 0 }}

                              transition={{ delay: activityIndex * 0.1 }}              variant="ghost"           ecoFriendly: true,

                              className="flex gap-4 p-4 rounded-lg border hover:shadow-md transition-all duration-200"

                            >              onClick={() => navigate('/')}

                              <div className="flex flex-col items-center">

                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">              className="hover:bg-primary/10 transition-colors"          icon: Star  // Mock trip data

                                  <IconComponent className="w-5 h-5 text-primary" />

                                </div>            >

                                {activityIndex < day.activities.length - 1 && (

                                  <div className="w-0.5 h-8 bg-border mt-2"></div>              <ArrowLeft className="w-4 h-4 mr-2" />        },

                                )}

                              </div>              Back to Home



                              <div className="flex-1">            </Button>        {  const mockTrip = {import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from '@/components/ui/dialog';

                                <div className="flex justify-between items-start mb-2">

                                  <div className="flex-1">            

                                    <div className="flex items-center gap-2 mb-1">

                                      <span className="font-bold text-primary text-lg">            <div className="flex items-center gap-2">          id: '4',

                                        {activity.time}

                                      </span>              <img 

                                    </div>

                                    <h3 className="font-semibold text-lg mb-1">                src="/tripgenie.png"           time: '4:30 PM',    id: '1',

                                      {activity.title}

                                    </h3>                alt="TripGenie"

                                    <p className="text-muted-foreground text-sm mb-2">

                                      {activity.description}                className="h-6 md:h-8 w-auto"          title: '30-minute break',

                                    </p>

                                    <div className="flex items-center gap-2 text-xs text-muted-foreground">              />

                                      <MapPin className="w-3 h-3" />

                                      {activity.location}              <span className="font-bold text-lg">Your Paris Adventure</span>          description: 'Relax and recharge at Tuileries Garden',    destination: 'Paris, France',import { Input } from '@/components/ui/input';  FileText, Footprints, Wind, Move, Timer, Users,  FileText, Footprints, Wind, Move, Timer, Users,

                                    </div>

                                  </div>            </div>



                                  <div className="flex flex-col items-end gap-2">          location: 'Tuileries Garden',

                                    <div className="flex items-center gap-2">

                                      {activity.price > 0 && (            <div className="flex items-center gap-2">

                                        <span className="font-bold text-lg">

                                          ${activity.price}              <Button variant="outline" size="sm" onClick={handleSavePlan}>          price: 0,    duration: '5 days',

                                        </span>

                                      )}                <Save className="w-4 h-4 mr-1" />

                                      {activity.ecoFriendly && (

                                        <Badge className="bg-green-100 text-green-700 border-green-200 text-xs">                Save          ecoFriendly: true,

                                          <TreePine className="w-3 h-3 mr-1" />

                                          Eco              </Button>

                                        </Badge>

                                      )}              <Button variant="outline" size="sm">          icon: TreePine    startDate: '2025-10-15',import { Label } from '@/components/ui/label';

                                    </div>

                                                    <Share className="w-4 h-4 mr-1" />

                                    <div className="flex gap-1">

                                      {activity.price > 0 && (                Share        },

                                        <Button size="sm" className="text-xs px-3">

                                          <CreditCard className="w-3 h-3 mr-1" />              </Button>

                                          Book

                                        </Button>            </div>        {    endDate: '2025-10-20',

                                      )}

                                      <Button          </div>

                                        variant="outline"

                                        size="sm"        </div>          id: '5',

                                        className="text-xs px-3"

                                      >      </div>

                                        <Edit className="w-3 h-3" />

                                      </Button>          time: '7:00 PM',    budget: 2500,import { Slider } from '@/components/ui/slider';  Instagram, TrendingUp, Leaf, BookOpen,  Instagram, TrendingUp, Leaf, Hiking, BookOpen,

                                    </div>

                                  </div>      <div className="container mx-auto px-4 md:px-6 py-6 md:py-8">

                                </div>

                              </div>        {/* Trip Overview */}          title: 'Dinner at Le Consulat (eco-friendly)',

                            </motion.div>

                          );        <motion.div

                        })}

                      </div>          initial={{ opacity: 0, y: 30 }}          description: 'Traditional French bistro in Montmartre with sustainable practices',    carbonSavings: 20,

                    </div>

                  </Card>          animate={{ opacity: 1, y: 0 }}

                </motion.div>

              ))}          className="mb-8"          location: '18 Rue Norvins, Montmartre',

            </div>

          </TabsContent>        >



          <TabsContent value="map">          <div className="flex flex-col lg:flex-row gap-6 mb-6">          price: 85,    ecoFriendly: true,import { Textarea } from '@/components/ui/textarea';

            <Card className="p-6">

              <div className="text-center">            <div className="flex-1">

                <MapIcon className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />

                <h3 className="text-xl font-semibold mb-2">Interactive Map</h3>              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">          ecoFriendly: true,

                <p className="text-muted-foreground mb-4">

                  View all your destinations and activities on an interactive map                {mockTrip.destination}

                </p>

              </div>              </h1>          icon: Utensils    totalActivities: 18

            </Card>

          </TabsContent>              



          <TabsContent value="weather">              <div className="flex flex-wrap gap-4 text-sm md:text-base text-muted-foreground mb-4">        }

            <Card className="p-6">

              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">                <div className="flex items-center gap-2">

                <Thermometer className="w-5 h-5 text-primary" />

                Weather Forecast                  <Calendar className="w-4 h-4 text-primary" />      ]  };import { Separator } from '@/components/ui/separator';  Play, Pause, MapIcon, Thermometer, Umbrella,  Play, Pause, MapIcon, Thermometer, Umbrella,

              </h3>

            </Card>                  <span>{mockTrip.duration} • Oct 15-20, 2025</span>

          </TabsContent>

                </div>    }

          <TabsContent value="checklist">

            <Card className="p-6">                <div className="flex items-center gap-2">

              <div className="flex items-center justify-between mb-6">

                <h3 className="text-xl font-semibold flex items-center gap-2">                  <DollarSign className="w-4 h-4 text-accent" />  ];

                  <CheckSquare className="w-5 h-5 text-primary" />

                  Travel Checklist                  <span>Budget: ${mockTrip.budget}</span>

                </h3>

                <div className="text-sm text-muted-foreground">                </div>

                  {checklistItems.filter(item => item.completed).length} of {checklistItems.length} completed

                </div>                <div className="flex items-center gap-2">

              </div>

                  <Footprints className="w-4 h-4 text-green-500" />  const mockChecklist = [  // Mock itinerary with timeline formatimport { useToast } from '@/hooks/use-toast';

              <div className="space-y-3">

                {checklistItems.map(item => (                  <span>Saves {mockTrip.carbonSavings}% emissions</span>

                  <div

                    key={item.id}                </div>    { id: 1, task: 'Pack passport', completed: false, category: 'documents' },

                    className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors"

                  >              </div>

                    <button

                      onClick={() => toggleChecklistItem(item.id)}    { id: 2, task: 'Book airport transfer', completed: true, category: 'transport' },  const mockItinerary = [

                      className="flex-shrink-0"

                    >              <div className="flex flex-wrap gap-2 mb-4">

                      {item.completed ? (

                        <CheckSquare className="w-5 h-5 text-green-600" />                <Badge className="bg-green-100 text-green-700 border-green-200">    { id: 3, task: 'Pack comfortable walking shoes', completed: false, category: 'clothing' },

                      ) : (

                        <Square className="w-5 h-5 text-muted-foreground" />                  <TreePine className="w-3 h-3 mr-1" />

                      )}

                    </button>                  Eco-Friendly Trip    { id: 4, task: 'Download offline maps', completed: false, category: 'apps' }    {  Coins, CreditCard, Wallet2, Activity, Route  Coins, CreditCard, Wallet2, Activity, Route

                    <span

                      className={`flex-1 ${                </Badge>

                        item.completed

                          ? 'line-through text-muted-foreground'                <Badge variant="outline">  ];

                          : 'text-foreground'

                      }`}                  <Activity className="w-3 h-3 mr-1" />

                    >

                      {item.task}                  5 Activities      day: 1,

                    </span>

                    <Badge variant="outline" className="text-xs">                </Badge>

                      {item.category}

                    </Badge>                <Badge variant="outline">  const [checklistItems, setChecklistItems] = useState(mockChecklist);

                  </div>

                ))}                  <Star className="w-3 h-3 mr-1" />

              </div>

                  Personalized      date: '2025-10-15',const TripView = () => {

              <Button className="w-full mt-4" variant="outline">

                <Plus className="w-4 h-4 mr-2" />                </Badge>

                Add Custom Item

              </Button>              </div>  // Weather icon helper

            </Card>

          </TabsContent>            </div>

        </Tabs>

  const getWeatherIcon = (condition: string) => {      weather: { temp: 75, condition: 'sunny', description: 'Sunny' },

        <Dialog open={showCustomize} onOpenChange={setShowCustomize}>

          <DialogContent>            {/* Quick Actions Card */}

            <DialogHeader>

              <DialogTitle>Customize Your Trip</DialogTitle>            <div className="lg:w-80">    if (condition === 'sunny') return <Sun className="w-5 h-5 text-yellow-500" />;

            </DialogHeader>

            <div className="space-y-6">              <Card className="p-4 bg-gradient-to-br from-primary/10 to-secondary/10">

              <div>

                <Label className="text-base font-semibold">Buffer Time Between Activities</Label>                <h3 className="font-semibold mb-4 flex items-center gap-2">    if (condition === 'cloudy') return <Cloud className="w-5 h-5 text-gray-500" />;      activities: [  const { id } = useParams();} from 'lucide-react';} from 'lucide-react';

                <p className="text-sm text-muted-foreground mb-3">

                  Add extra time between activities for a more relaxed pace                  <Sparkles className="w-5 h-5 text-primary" />

                </p>

                <div className="space-y-2">                  Quick Actions    return <Sun className="w-5 h-5 text-yellow-500" />;

                  <Slider

                    value={[bufferTime]}                </h3>

                    onValueChange={(value) => setBufferTime(value[0])}

                    max={60}                  };        {

                    min={0}

                    step={15}                <div className="space-y-3">

                    className="w-full"

                  />                  <Button

                  <div className="flex justify-between text-sm text-muted-foreground">

                    <span>0 min</span>                    onClick={() => navigate('/booking')}

                    <span className="font-medium">{bufferTime} minutes</span>

                    <span>60 min</span>                    className="w-full justify-between bg-white hover:bg-gray-50 text-black border"  // Event handlers          id: '1',  const navigate = useNavigate();

                  </div>

                </div>                    size="sm"

              </div>

                                >  const handleSavePlan = () => {

              <Button className="w-full">

                <Check className="w-4 h-4 mr-2" />                    <div className="flex items-center gap-2">

                Apply Changes

              </Button>                      <Plane className="w-4 h-4" />    toast({          time: '9:00 AM',

            </div>

          </DialogContent>                      <span>Book Flight</span>

        </Dialog>

      </div>                    </div>      title: 'Plan Saved! 💾',

    </div>

  );                    <span className="font-bold">$400</span>

};

                  </Button>      description: 'Your itinerary has been saved successfully.',          endTime: '11:00 AM',  const { toast } = useToast();import { Button } from '@/components/ui/button';import { Button } from '@/components/ui/button';

export default TripView;


                  <Button    });

                    onClick={() => navigate('/booking')}

                    className="w-full justify-between bg-white hover:bg-gray-50 text-black border"  };          title: 'Hike in Montmartre',

                    size="sm"

                  >

                    <div className="flex items-center gap-2">

                      <Hotel className="w-4 h-4" />  const handleGetNFT = () => {          description: 'Explore the artistic neighborhood and enjoy panoramic views of Paris',  

                      <span>Book Hotel</span>

                    </div>    toast({

                    <span className="font-bold">$120</span>

                  </Button>      title: 'Digital Souvenir Earned! 🎁',          type: 'nature',



                  <Separator />      description: 'You\'ve received an exclusive Eiffel Tower NFT badge!',



                  <Button    });          location: 'Montmartre, Paris',  // State managementimport { Card } from '@/components/ui/card';import { Card } from '@/components/ui/card';

                    onClick={handleGetNFT}

                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"  };

                  >

                    <Gift className="w-4 h-4 mr-2" />          source: 'Instagram recommendation',

                    Get Digital Souvenir

                  </Button>  const toggleChecklistItem = (itemId: number) => {



                  <Button    setChecklistItems(items =>          price: 0,  const [activeTab, setActiveTab] = useState('itinerary');

                    variant="outline"

                    className="w-full"      items.map(item =>

                  >

                    <MessageCircle className="w-4 h-4 mr-2" />        item.id === itemId ? { ...item, completed: !item.completed } : item          duration: '2 hours',

                    Chat for Help

                  </Button>      )

                </div>

              </Card>    );          ecoFriendly: true,  const [editingActivity, setEditingActivity] = useState<any>(null);import { Badge } from '@/components/ui/badge';import { Badge } from '@/components/ui/badge';

            </div>

          </div>  };

        </motion.div>

          bookable: false,

        {/* Main Content Tabs */}

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">  return (

          <TabsList className="grid grid-cols-4 max-w-md mx-auto">

            <TabsTrigger value="itinerary">Itinerary</TabsTrigger>    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5">          icon: Camera  const [bufferTime, setBufferTime] = useState(30);

            <TabsTrigger value="map">Map</TabsTrigger>

            <TabsTrigger value="weather">Weather</TabsTrigger>      {/* Header Navigation */}

            <TabsTrigger value="checklist">Checklist</TabsTrigger>

          </TabsList>      <div className="border-b border-border bg-card/80 backdrop-blur-xl sticky top-0 z-50">        },



          {/* Itinerary Tab with Timeline Format */}        <div className="container mx-auto px-4 md:px-6 py-3 md:py-4">

          <TabsContent value="itinerary" className="space-y-6">

            <div className="flex flex-wrap gap-3 mb-6">          <div className="flex items-center justify-between">        {  const [checklist, setChecklist] = useState<any[]>([]);import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

              <Button

                variant="outline"            <Button 

                size="sm"

                onClick={() => setShowCustomize(true)}              variant="ghost"           id: '2',

              >

                <Sliders className="w-4 h-4 mr-2" />              onClick={() => navigate('/')}

                Customize

              </Button>              className="hover:bg-primary/10 transition-colors"          time: '12:00 PM',  const [showMap, setShowMap] = useState(false);

              <Button variant="outline" size="sm">

                <Edit className="w-4 h-4 mr-2" />            >

                Edit Plan

              </Button>              <ArrowLeft className="w-4 h-4 mr-2" />          endTime: '1:30 PM',

              <Button variant="outline" size="sm">

                <Plus className="w-4 h-4 mr-2" />              Back to Home

                Add Activity

              </Button>            </Button>          title: 'Lunch at Café de Flore',  const [showCustomize, setShowCustomize] = useState(false);import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from '@/components/ui/dialog';import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from '@/components/ui/dialog';

            </div>

            

            {/* Day-by-Day Timeline */}

            <div className="space-y-8">            <div className="flex items-center gap-2">          description: 'Historic café known for its literary clientele and French classics',

              {mockItinerary.map((day, dayIndex) => (

                <motion.div              <img 

                  key={day.day}

                  initial={{ opacity: 0, y: 30 }}                src="/tripgenie.png"           type: 'food',  const [showChat, setShowChat] = useState(false);

                  animate={{ opacity: 1, y: 0 }}

                  transition={{ delay: dayIndex * 0.1 }}                alt="TripGenie"

                >

                  <Card className="overflow-hidden">                className="h-6 md:h-8 w-auto"          location: '172 Boulevard Saint-Germain',

                    {/* Day Header */}

                    <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-4 border-b">              />

                      <div className="flex items-center justify-between">

                        <div>              <span className="font-bold text-lg">Your Paris Adventure</span>          price: 45,import { Input } from '@/components/ui/input';import { Input } from '@/components/ui/input';

                          <h2 className="text-xl font-bold">Day {day.day}</h2>

                          <p className="text-muted-foreground">{day.date}</p>            </div>

                        </div>

                        <div className="flex items-center gap-4">          duration: '1.5 hours',

                          <div className="flex items-center gap-2">

                            {getWeatherIcon(day.weather.condition)}            <div className="flex items-center gap-2">

                            <span className="font-medium">{day.weather.temp}°F</span>

                            <span className="text-sm text-muted-foreground">              <Button variant="outline" size="sm" onClick={handleSavePlan}>          ecoFriendly: false,  // Mock comprehensive itinerary data

                              {day.weather.description}

                            </span>                <Save className="w-4 h-4 mr-1" />

                          </div>

                          <Badge variant="outline">                Save          bookable: true,

                            {day.activities.length} activities

                          </Badge>              </Button>

                        </div>

                      </div>              <Button variant="outline" size="sm">          icon: Coffee  const mockTrip = {import { Label } from '@/components/ui/label';import { Label } from '@/components/ui/label';

                    </div>

                <Share className="w-4 h-4 mr-1" />

                    {/* Activities Timeline - This shows the exact format requested */}

                    <div className="p-4">                Share        },

                      <div className="space-y-4">

                        {day.activities.map((activity, activityIndex) => {              </Button>

                          const IconComponent = activity.icon;

                                      </div>        {    id: '1',

                          return (

                            <motion.div          </div>

                              key={activity.id}

                              initial={{ opacity: 0, x: -20 }}        </div>          id: '3',

                              animate={{ opacity: 1, x: 0 }}

                              transition={{ delay: activityIndex * 0.1 }}      </div>

                              className="flex gap-4 p-4 rounded-lg border hover:shadow-md transition-all duration-200"

                            >          time: '2:00 PM',    destination: 'Paris, France',import { Slider } from '@/components/ui/slider';import { Slider } from '@/components/ui/slider';

                              {/* Timeline Icon */}

                              <div className="flex flex-col items-center">      <div className="container mx-auto px-4 md:px-6 py-6 md:py-8">

                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">

                                  <IconComponent className="w-5 h-5 text-primary" />        {/* Trip Overview */}          endTime: '5:00 PM',

                                </div>

                                {activityIndex < day.activities.length - 1 && (        <motion.div

                                  <div className="w-0.5 h-8 bg-border mt-2"></div>

                                )}          initial={{ opacity: 0, y: 30 }}          title: 'Book Louvre tour',    duration: '5 days',

                              </div>

          animate={{ opacity: 1, y: 0 }}

                              {/* Activity Details - Timeline Format as requested */}

                              <div className="flex-1">          className="mb-8"          description: 'Skip-the-line access with expert guide to see Mona Lisa and masterpieces',

                                <div className="flex justify-between items-start mb-2">

                                  <div className="flex-1">        >

                                    <div className="flex items-center gap-2 mb-1">

                                      <span className="font-bold text-primary text-lg">          <div className="flex flex-col lg:flex-row gap-6 mb-6">          type: 'culture',    startDate: '2025-10-15',import { Textarea } from '@/components/ui/textarea';import { Textarea } from '@/components/ui/textarea';

                                        {activity.time}

                                      </span>            <div className="flex-1">

                                    </div>

                                    <h3 className="font-semibold text-lg mb-1">              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">          location: 'Louvre Museum',

                                      {activity.title}

                                    </h3>                {mockTrip.destination}

                                    <p className="text-muted-foreground text-sm mb-2">

                                      {activity.description}              </h1>          price: 65,    endDate: '2025-10-20',

                                    </p>

                                    <div className="flex items-center gap-2 text-xs text-muted-foreground">              

                                      <MapPin className="w-3 h-3" />

                                      {activity.location}              <div className="flex flex-wrap gap-4 text-sm md:text-base text-muted-foreground mb-4">          duration: '3 hours',

                                    </div>

                                  </div>                <div className="flex items-center gap-2">



                                  <div className="flex flex-col items-end gap-2">                  <Calendar className="w-4 h-4 text-primary" />          ecoFriendly: true,    budget: 2500,import { Separator } from '@/components/ui/separator';import { Separator } from '@/components/ui/separator';

                                    <div className="flex items-center gap-2">

                                      {activity.price > 0 && (                  <span>{mockTrip.duration} • Oct 15-20, 2025</span>

                                        <span className="font-bold text-lg">

                                          ${activity.price}                </div>          bookable: true,

                                        </span>

                                      )}                <div className="flex items-center gap-2">

                                      {activity.ecoFriendly && (

                                        <Badge className="bg-green-100 text-green-700 border-green-200 text-xs">                  <DollarSign className="w-4 h-4 text-accent" />          icon: Star    carbonSavings: 20,

                                          <TreePine className="w-3 h-3 mr-1" />

                                          Eco                  <span>Budget: ${mockTrip.budget}</span>

                                        </Badge>

                                      )}                </div>        },

                                    </div>

                                                    <div className="flex items-center gap-2">

                                    <div className="flex gap-1">

                                      {activity.price > 0 && (                  <Footprints className="w-4 h-4 text-green-500" />        {    ecoFriendly: true,import { useToast } from '@/hooks/use-toast';import { useToast } from '@/hooks/use-toast';

                                        <Button size="sm" className="text-xs px-3">

                                          <CreditCard className="w-3 h-3 mr-1" />                  <span>Saves {mockTrip.carbonSavings}% emissions</span>

                                          Book

                                        </Button>                </div>          id: '4',

                                      )}

                                      <Button              </div>

                                        variant="outline"

                                        size="sm"          time: '4:30 PM',    totalActivities: 18

                                        className="text-xs px-3"

                                      >              <div className="flex flex-wrap gap-2 mb-4">

                                        <Edit className="w-3 h-3" />

                                      </Button>                <Badge className="bg-green-100 text-green-700 border-green-200">          endTime: '5:00 PM',

                                    </div>

                                  </div>                  <TreePine className="w-3 h-3 mr-1" />

                                </div>

                              </div>                  Eco-Friendly Trip          title: '30-minute break',  };

                            </motion.div>

                          );                </Badge>

                        })}

                      </div>                <Badge variant="outline">          description: 'Relax and recharge at Tuileries Garden',

                    </div>

                  </Card>                  <Activity className="w-3 h-3 mr-1" />

                </motion.div>

              ))}                  5 Activities          type: 'relaxation',

            </div>

          </TabsContent>                </Badge>



          {/* Map Tab */}                <Badge variant="outline">          location: 'Tuileries Garden',

          <TabsContent value="map">

            <Card className="p-6">                  <Star className="w-3 h-3 mr-1" />

              <div className="text-center">

                <MapIcon className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />                  Personalized          price: 0,  const mockItinerary = [const TripView = () => {import { useState, useEffect } from 'react';

                <h3 className="text-xl font-semibold mb-2">Interactive Map</h3>

                <p className="text-muted-foreground mb-4">                </Badge>

                  View all your destinations and activities on an interactive map

                </p>              </div>          duration: '30 minutes',

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">

                  {mockItinerary[0].activities.map(activity => (            </div>

                    <div key={activity.id} className="flex items-center gap-3 p-3 border rounded-lg">

                      <div className="w-3 h-3 bg-primary rounded-full"></div>          ecoFriendly: true,    {

                      <div>

                        <p className="font-medium">{activity.title}</p>            {/* Quick Actions Card */}

                        <p className="text-sm text-muted-foreground">{activity.location}</p>

                      </div>            <div className="lg:w-80">          bookable: false,

                    </div>

                  ))}              <Card className="p-4 bg-gradient-to-br from-primary/10 to-secondary/10">

                </div>

              </div>                <h3 className="font-semibold mb-4 flex items-center gap-2">          icon: TreePine      day: 1,  const { id } = useParams();import { useParams, useNavigate } from 'react-router-dom';

            </Card>

          </TabsContent>                  <Sparkles className="w-5 h-5 text-primary" />



          {/* Weather Tab */}                  Quick Actions        },

          <TabsContent value="weather">

            <Card className="p-6">                </h3>

              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">

                <Thermometer className="w-5 h-5 text-primary" />                        {      date: '2025-10-15',

                Weather Forecast

              </h3>                <div className="space-y-3">

              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">

                <div className="text-center p-4 border rounded-lg">                  <Button          id: '5',

                  <p className="font-semibold">Day 1</p>

                  <p className="text-sm text-muted-foreground mb-2">Mon</p>                    onClick={() => navigate('/booking')}

                  <div className="flex justify-center mb-2">

                    <Sun className="w-8 h-8 text-yellow-500" />                    className="w-full justify-between bg-white hover:bg-gray-50 text-black border"          time: '7:00 PM',      weather: { temp: 75, condition: 'sunny', description: 'Sunny' },  const navigate = useNavigate();import { motion, AnimatePresence } from 'framer-motion';

                  </div>

                  <p className="font-bold text-lg">75°F</p>                    size="sm"

                  <p className="text-sm text-muted-foreground">Sunny</p>

                </div>                  >          endTime: '9:00 PM',

              </div>

                                  <div className="flex items-center gap-2">

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">

                <div className="flex items-center gap-2 mb-2">                      <Plane className="w-4 h-4" />          title: 'Dinner at Le Consulat (eco-friendly)',      activities: [

                  <Umbrella className="w-5 h-5 text-blue-600" />

                  <span className="font-semibold text-blue-800">Weather Tips</span>                      <span>Book Flight</span>

                </div>

                <ul className="text-sm text-blue-700 space-y-1">                    </div>          description: 'Traditional French bistro in Montmartre with sustainable practices',

                  <li>• Pack layers for changing temperatures</li>

                  <li>• Perfect weather for outdoor activities</li>                    <span className="font-bold">$400</span>

                </ul>

              </div>                  </Button>          type: 'food',        {  const { toast } = useToast();import { 

            </Card>

          </TabsContent>



          {/* Checklist Tab */}                  <Button          location: '18 Rue Norvins, Montmartre',

          <TabsContent value="checklist">

            <Card className="p-6">                    onClick={() => navigate('/booking')}

              <div className="flex items-center justify-between mb-6">

                <h3 className="text-xl font-semibold flex items-center gap-2">                    className="w-full justify-between bg-white hover:bg-gray-50 text-black border"          price: 85,          id: '1',

                  <CheckSquare className="w-5 h-5 text-primary" />

                  Travel Checklist                    size="sm"

                </h3>

                <div className="text-sm text-muted-foreground">                  >          duration: '2 hours',

                  {checklistItems.filter(item => item.completed).length} of {checklistItems.length} completed

                </div>                    <div className="flex items-center gap-2">

              </div>

                      <Hotel className="w-4 h-4" />          ecoFriendly: true,          time: '9:00 AM',    ArrowLeft, Calendar, DollarSign, MapPin, Clock, Edit, 

              <div className="space-y-3">

                {checklistItems.map(item => (                      <span>Book Hotel</span>

                  <div

                    key={item.id}                    </div>          bookable: true,

                    className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors"

                  >                    <span className="font-bold">$120</span>

                    <button

                      onClick={() => toggleChecklistItem(item.id)}                  </Button>          icon: Utensils          endTime: '11:00 AM',

                      className="flex-shrink-0"

                    >

                      {item.completed ? (

                        <CheckSquare className="w-5 h-5 text-green-600" />                  <Separator />        }

                      ) : (

                        <Square className="w-5 h-5 text-muted-foreground" />

                      )}

                    </button>                  <Button      ]          title: 'Hike in Montmartre',  // State management  Plane, Hotel, Ticket, Sun, Cloud, CloudRain, Snowflake,

                    <span

                      className={`flex-1 ${                    onClick={handleGetNFT}

                        item.completed

                          ? 'line-through text-muted-foreground'                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"    },

                          : 'text-foreground'

                      }`}                  >

                    >

                      {item.task}                    <Gift className="w-4 h-4 mr-2" />    {          description: 'Explore the artistic neighborhood and enjoy panoramic views of Paris',

                    </span>

                    <Badge variant="outline" className="text-xs">                    Get Digital Souvenir

                      {item.category}

                    </Badge>                  </Button>      day: 2,

                  </div>

                ))}

              </div>

                  <Button      date: '2025-10-16',          type: 'nature',  const [activeTab, setActiveTab] = useState('itinerary');  Star, Gift, Save, Share, Navigation, Coffee, Utensils,

              <Button className="w-full mt-4" variant="outline">

                <Plus className="w-4 h-4 mr-2" />                    variant="outline"

                Add Custom Item

              </Button>                    className="w-full"      weather: { temp: 72, condition: 'cloudy', description: 'Partly Cloudy' },

            </Card>

          </TabsContent>                  >

        </Tabs>

                    <MessageCircle className="w-4 h-4 mr-2" />      activities: [          location: 'Montmartre, Paris',

        {/* Customization Dialog */}

        <Dialog open={showCustomize} onOpenChange={setShowCustomize}>                    Chat for Help

          <DialogContent>

            <DialogHeader>                  </Button>        {

              <DialogTitle>Customize Your Trip</DialogTitle>

            </DialogHeader>                </div>

            <div className="space-y-6">

              <div>              </Card>          id: '6',          source: 'Instagram recommendation',  const [editingActivity, setEditingActivity] = useState<any>(null);  Camera, TreePine, Heart, Sparkles, Map, Settings,

                <Label className="text-base font-semibold">Buffer Time Between Activities</Label>

                <p className="text-sm text-muted-foreground mb-3">            </div>

                  Add extra time between activities for a more relaxed pace

                </p>          </div>          time: '10:00 AM',

                <div className="space-y-2">

                  <Slider        </motion.div>

                    value={[bufferTime]}

                    onValueChange={(value) => setBufferTime(value[0])}          endTime: '1:00 PM',          price: 0,

                    max={60}

                    min={0}        {/* Main Content Tabs */}

                    step={15}

                    className="w-full"        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">          title: 'Eco-friendly Bike Tour',

                  />

                  <div className="flex justify-between text-sm text-muted-foreground">          <TabsList className="grid grid-cols-4 max-w-md mx-auto">

                    <span>0 min</span>

                    <span className="font-medium">{bufferTime} minutes</span>            <TabsTrigger value="itinerary">Itinerary</TabsTrigger>          description: 'Electric bike tour along the Seine with sustainable tourism focus',          duration: '2 hours',  const [bufferTime, setBufferTime] = useState(30);  Plus, Minus, RotateCcw, Check, X, Award, Download,

                    <span>60 min</span>

                  </div>            <TabsTrigger value="map">Map</TabsTrigger>

                </div>

              </div>            <TabsTrigger value="weather">Weather</TabsTrigger>          type: 'adventure',

              

              <Button className="w-full">            <TabsTrigger value="checklist">Checklist</TabsTrigger>

                <Check className="w-4 h-4 mr-2" />

                Apply Changes          </TabsList>          location: 'Starting at Pont Neuf',          ecoFriendly: true,

              </Button>

            </div>

          </DialogContent>

        </Dialog>          {/* Itinerary Tab with Timeline Format */}          price: 55,

      </div>

    </div>          <TabsContent value="itinerary" className="space-y-6">

  );

};            <div className="flex flex-wrap gap-3 mb-6">          duration: '3 hours',          bookable: false,  const [checklist, setChecklist] = useState<any[]>([]);  Sliders, MessageCircle, CheckSquare, Square, Mail,



export default TripView;              <Button

                variant="outline"          ecoFriendly: true,

                size="sm"

                onClick={() => setShowCustomize(true)}          bookable: true,          icon: Camera,

              >

                <Sliders className="w-4 h-4 mr-2" />          icon: Activity

                Customize

              </Button>        },          coordinates: { lat: 48.8867, lng: 2.3431 }  const [showMap, setShowMap] = useState(false);  FileText, Footprints, Wind, Move, Timer, Users,

              <Button variant="outline" size="sm">

                <Edit className="w-4 h-4 mr-2" />        {

                Edit Plan

              </Button>          id: '7',        },

              <Button variant="outline" size="sm">

                <Plus className="w-4 h-4 mr-2" />          time: '1:00 PM',

                Add Activity

              </Button>          endTime: '3:00 PM',        {  const [showCustomize, setShowCustomize] = useState(false);  Instagram, TrendingUp, Leaf, BookOpen,

            </div>

          title: 'Notre-Dame Visit',

            {/* Day-by-Day Timeline */}

            <div className="space-y-8">          description: 'Explore the iconic cathedral and surrounding area',          id: '2',

              {mockItinerary.map((day, dayIndex) => (

                <motion.div          type: 'culture',

                  key={day.day}

                  initial={{ opacity: 0, y: 30 }}          location: 'Notre-Dame Cathedral',          time: '12:00 PM',  const [showChat, setShowChat] = useState(false);  Play, Pause, MapIcon, Thermometer, Umbrella,

                  animate={{ opacity: 1, y: 0 }}

                  transition={{ delay: dayIndex * 0.1 }}          price: 0,

                >

                  <Card className="overflow-hidden">          duration: '2 hours',          endTime: '1:30 PM',

                    {/* Day Header */}

                    <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-4 border-b">          ecoFriendly: false,

                      <div className="flex items-center justify-between">

                        <div>          bookable: false,          title: 'Lunch at Café de Flore',  Coins, CreditCard, Wallet2, Activity, Route

                          <h2 className="text-xl font-bold">Day {day.day}</h2>

                          <p className="text-muted-foreground">{day.date}</p>          icon: BookOpen

                        </div>

                        <div className="flex items-center gap-4">        },          description: 'Historic café known for its literary clientele and French classics',

                          <div className="flex items-center gap-2">

                            {getWeatherIcon(day.weather.condition)}        {

                            <span className="font-medium">{day.weather.temp}°F</span>

                            <span className="text-sm text-muted-foreground">          id: '8',          type: 'food',  // Mock comprehensive itinerary data} from 'lucide-react';

                              {day.weather.description}

                            </span>          time: '7:00 PM',

                          </div>

                          <Badge variant="outline">          endTime: '10:00 PM',          location: '172 Boulevard Saint-Germain',

                            {day.activities.length} activities

                          </Badge>          title: 'Free Evening',

                        </div>

                      </div>          description: 'Explore local markets or relax at your hotel',          price: 45,  const mockTrip = {import { Button } from '@/components/ui/button';

                    </div>

          type: 'relaxation',

                    {/* Activities Timeline */}

                    <div className="p-4">          location: 'Various',          duration: '1.5 hours',

                      <div className="space-y-4">

                        {day.activities.map((activity, activityIndex) => {          price: 0,

                          const IconComponent = activity.icon;

                                    duration: '3 hours',          ecoFriendly: false,    id: '1',import { Card } from '@/components/ui/card';

                          return (

                            <motion.div          ecoFriendly: true,

                              key={activity.id}

                              initial={{ opacity: 0, x: -20 }}          bookable: false,          bookable: true,

                              animate={{ opacity: 1, x: 0 }}

                              transition={{ delay: activityIndex * 0.1 }}          icon: Heart

                              className="flex gap-4 p-4 rounded-lg border hover:shadow-md transition-all duration-200"

                            >        }          icon: Coffee,    destination: 'Paris, France',import { Badge } from '@/components/ui/badge';

                              {/* Timeline Icon */}

                              <div className="flex flex-col items-center">      ]

                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">

                                  <IconComponent className="w-5 h-5 text-primary" />    }          coordinates: { lat: 48.8542, lng: 2.3320 }

                                </div>

                                {activityIndex < day.activities.length - 1 && (  ];

                                  <div className="w-0.5 h-8 bg-border mt-2"></div>

                                )}        },    duration: '5 days',import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

                              </div>

  const mockBookingOptions = [

                              {/* Activity Details */}

                              <div className="flex-1">    {        {

                                <div className="flex justify-between items-start mb-2">

                                  <div className="flex-1">      type: 'flight',

                                    <div className="flex items-center gap-2 mb-1">

                                      <span className="font-bold text-primary text-lg">      title: 'New York to Paris',          id: '3',    startDate: '2025-10-15',import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from '@/components/ui/dialog';

                                        {activity.time}

                                      </span>      price: 400,

                                    </div>

                                    <h3 className="font-semibold text-lg mb-1">      description: 'Low-carbon direct flight',          time: '2:00 PM',

                                      {activity.title}

                                    </h3>      ecoFriendly: true,

                                    <p className="text-muted-foreground text-sm mb-2">

                                      {activity.description}      savings: '15% emissions'          endTime: '5:00 PM',    endDate: '2025-10-20',import { Input } from '@/components/ui/input';

                                    </p>

                                    <div className="flex items-center gap-2 text-xs text-muted-foreground">    },

                                      <MapPin className="w-3 h-3" />

                                      {activity.location}    {          title: 'Louvre Museum Tour',

                                    </div>

                                  </div>      type: 'hotel',



                                  <div className="flex flex-col items-end gap-2">      title: 'Eco Hotel near Louvre',          description: 'Skip-the-line access with expert guide to see Mona Lisa and masterpieces',    budget: 2500,import { Label } from '@/components/ui/label';

                                    <div className="flex items-center gap-2">

                                      {activity.price > 0 && (      price: 120,

                                        <span className="font-bold text-lg">

                                          ${activity.price}      description: 'Sustainable accommodation',          type: 'culture',

                                        </span>

                                      )}      ecoFriendly: true,

                                      {activity.ecoFriendly && (

                                        <Badge className="bg-green-100 text-green-700 border-green-200 text-xs">      savings: '30% water usage'          location: 'Louvre Museum',    carbonSavings: 20,import { Slider } from '@/components/ui/slider';

                                          <TreePine className="w-3 h-3 mr-1" />

                                          Eco    },

                                        </Badge>

                                      )}    {          price: 65,

                                    </div>

                                          type: 'tour',

                                    <div className="flex gap-1">

                                      {activity.price > 0 && (      title: 'Paris Museum Pass',          duration: '3 hours',    ecoFriendly: true,import { Textarea } from '@/components/ui/textarea';

                                        <Button size="sm" className="text-xs px-3">

                                          <CreditCard className="w-3 h-3 mr-1" />      price: 85,

                                          Book

                                        </Button>      description: 'Skip-the-line access to 60+ museums',          ecoFriendly: true,

                                      )}

                                      <Button      ecoFriendly: false,

                                        variant="outline"

                                        size="sm"      savings: null          bookable: true,    totalActivities: 18import { Separator } from '@/components/ui/separator';

                                        className="text-xs px-3"

                                      >    }

                                        <Edit className="w-3 h-3" />

                                      </Button>  ];          icon: Star,

                                    </div>

                                  </div>

                                </div>

                              </div>  const mockChecklist = [          coordinates: { lat: 48.8606, lng: 2.3376 }  };import { useToast } from '@/hooks/use-toast';

                            </motion.div>

                          );    { id: 1, task: 'Pack passport', completed: false, category: 'documents' },

                        })}

                      </div>    { id: 2, task: 'Book airport transfer', completed: true, category: 'transport' },        },

                    </div>

                  </Card>    { id: 3, task: 'Pack comfortable walking shoes', completed: false, category: 'clothing' },

                </motion.div>

              ))}    { id: 4, task: 'Download offline maps', completed: false, category: 'apps' },        {

            </div>

          </TabsContent>    { id: 5, task: 'Notify bank of travel', completed: true, category: 'finance' },



          {/* Map Tab */}    { id: 6, task: 'Pack portable charger', completed: false, category: 'electronics' },          id: '4',

          <TabsContent value="map">

            <Card className="p-6">  ];

              <div className="text-center">

                <MapIcon className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />          time: '4:30 PM',  const mockItinerary = [const TripView = () => {

                <h3 className="text-xl font-semibold mb-2">Interactive Map</h3>

                <p className="text-muted-foreground mb-4">  const [checklistItems, setChecklistItems] = useState(mockChecklist);

                  View all your destinations and activities on an interactive map

                </p>          endTime: '5:00 PM',

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">

                  {mockItinerary[0].activities.map(activity => (  // Activity type configurations

                    <div key={activity.id} className="flex items-center gap-3 p-3 border rounded-lg">

                      <div className="w-3 h-3 bg-primary rounded-full"></div>  const activityTypes = {          title: '30-minute break',    {  const { id } = useParams();

                      <div>

                        <p className="font-medium">{activity.title}</p>    'sightseeing': { icon: Camera, color: 'text-blue-500', bg: 'bg-blue-100' },

                        <p className="text-sm text-muted-foreground">{activity.location}</p>

                      </div>    'food': { icon: Utensils, color: 'text-orange-500', bg: 'bg-orange-100' },          description: 'Relax and recharge at Tuileries Garden',

                    </div>

                  ))}    'nature': { icon: TreePine, color: 'text-green-500', bg: 'bg-green-100' },

                </div>

              </div>    'culture': { icon: Star, color: 'text-purple-500', bg: 'bg-purple-100' },          type: 'relaxation',      day: 1,  const navigate = useNavigate();

            </Card>

          </TabsContent>    'relaxation': { icon: Coffee, color: 'text-amber-500', bg: 'bg-amber-100' },



          {/* Weather Tab */}    'adventure': { icon: Activity, color: 'text-red-500', bg: 'bg-red-100' },          location: 'Tuileries Garden',

          <TabsContent value="weather">

            <Card className="p-6">  };

              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">

                <Thermometer className="w-5 h-5 text-primary" />          price: 0,      date: '2025-10-15',  const { toast } = useToast();

                Weather Forecast

              </h3>  // Weather icon helper

              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">

                <div className="text-center p-4 border rounded-lg">  const getWeatherIcon = (condition: string) => {          duration: '30 minutes',

                  <p className="font-semibold">Day 1</p>

                  <p className="text-sm text-muted-foreground mb-2">Mon</p>    switch (condition) {

                  <div className="flex justify-center mb-2">

                    <Sun className="w-8 h-8 text-yellow-500" />      case 'sunny': return <Sun className="w-5 h-5 text-yellow-500" />;          ecoFriendly: true,      weather: { temp: 75, condition: 'sunny', description: 'Sunny' },  

                  </div>

                  <p className="font-bold text-lg">75°F</p>      case 'cloudy': return <Cloud className="w-5 h-5 text-gray-500" />;

                  <p className="text-sm text-muted-foreground">Sunny</p>

                </div>      case 'rainy': return <CloudRain className="w-5 h-5 text-blue-500" />;          bookable: false,

              </div>

                    default: return <Sun className="w-5 h-5 text-yellow-500" />;

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">

                <div className="flex items-center gap-2 mb-2">    }          icon: TreePine,      activities: [  // State management

                  <Umbrella className="w-5 h-5 text-blue-600" />

                  <span className="font-semibold text-blue-800">Weather Tips</span>  };

                </div>

                <ul className="text-sm text-blue-700 space-y-1">          coordinates: { lat: 48.8634, lng: 2.3275 }

                  <li>• Pack layers for changing temperatures</li>

                  <li>• Perfect weather for outdoor activities</li>  // Event handlers

                </ul>

              </div>  const handleBooking = (type: string) => {        },        {  const [activeTab, setActiveTab] = useState('itinerary');

            </Card>

          </TabsContent>    navigate(`/booking?type=${type}`);



          {/* Checklist Tab */}  };        {

          <TabsContent value="checklist">

            <Card className="p-6">

              <div className="flex items-center justify-between mb-6">

                <h3 className="text-xl font-semibold flex items-center gap-2">  const handleSavePlan = () => {          id: '5',          id: '1',  const [editingActivity, setEditingActivity] = useState<any>(null);

                  <CheckSquare className="w-5 h-5 text-primary" />

                  Travel Checklist    toast({

                </h3>

                <div className="text-sm text-muted-foreground">      title: 'Plan Saved! 💾',          time: '7:00 PM',

                  {checklistItems.filter(item => item.completed).length} of {checklistItems.length} completed

                </div>      description: 'Your itinerary has been saved successfully.',

              </div>

    });          endTime: '9:00 PM',          time: '9:00 AM',  const [bufferTime, setBufferTime] = useState(30);

              <div className="space-y-3">

                {checklistItems.map(item => (  };

                  <div

                    key={item.id}          title: 'Dinner at Le Consulat',

                    className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors"

                  >  const handleSharePlan = (method: 'email' | 'pdf') => {

                    <button

                      onClick={() => toggleChecklistItem(item.id)}    if (method === 'email') {          description: 'Traditional French bistro in Montmartre with sustainable practices',          endTime: '11:00 AM',  const [checklist, setChecklist] = useState<any[]>([]);

                      className="flex-shrink-0"

                    >      toast({

                      {item.completed ? (

                        <CheckSquare className="w-5 h-5 text-green-600" />        title: 'Email Sent! 📧',          type: 'food',

                      ) : (

                        <Square className="w-5 h-5 text-muted-foreground" />        description: 'Your itinerary has been sent to your email.',

                      )}

                    </button>      });          location: '18 Rue Norvins, Montmartre',          title: 'Hike in Montmartre',  const [showMap, setShowMap] = useState(false);

                    <span

                      className={`flex-1 ${    } else {

                        item.completed

                          ? 'line-through text-muted-foreground'      toast({          price: 85,

                          : 'text-foreground'

                      }`}        title: 'PDF Downloaded! 📄',

                    >

                      {item.task}        description: 'Your itinerary PDF has been downloaded.',          duration: '2 hours',          description: 'Explore the artistic neighborhood and enjoy panoramic views of Paris',  const [showCustomize, setShowCustomize] = useState(false);

                    </span>

                    <Badge variant="outline" className="text-xs">      });

                      {item.category}

                    </Badge>    }          ecoFriendly: true,

                  </div>

                ))}  };

              </div>

          bookable: true,          type: 'nature',  const [showChat, setShowChat] = useState(false);

              <Button className="w-full mt-4" variant="outline">

                <Plus className="w-4 h-4 mr-2" />  const handleGetNFT = () => {

                Add Custom Item

              </Button>    toast({          icon: Utensils,

            </Card>

          </TabsContent>      title: 'Digital Souvenir Earned! 🎁',

        </Tabs>

      description: 'You\'ve received an exclusive Eiffel Tower NFT badge!',          coordinates: { lat: 48.8867, lng: 2.3399 }          location: 'Montmartre, Paris',

        {/* Customization Dialog */}

        <Dialog open={showCustomize} onOpenChange={setShowCustomize}>    });

          <DialogContent>

            <DialogHeader>  };        }

              <DialogTitle>Customize Your Trip</DialogTitle>

            </DialogHeader>

            <div className="space-y-6">

              <div>  const handleChatHelp = () => {      ]          source: 'Instagram recommendation',  // Mock comprehensive itinerary data

                <Label className="text-base font-semibold">Buffer Time Between Activities</Label>

                <p className="text-sm text-muted-foreground mb-3">    setShowChat(true);

                  Add extra time between activities for a more relaxed pace

                </p>  };    },

                <div className="space-y-2">

                  <Slider

                    value={[bufferTime]}

                    onValueChange={(value) => setBufferTime(value[0])}  const toggleChecklistItem = (itemId: number) => {    {          price: 0,  const mockTrip = {

                    max={60}

                    min={0}    setChecklistItems(items =>

                    step={15}

                    className="w-full"      items.map(item =>      day: 2,

                  />

                  <div className="flex justify-between text-sm text-muted-foreground">        item.id === itemId ? { ...item, completed: !item.completed } : item

                    <span>0 min</span>

                    <span className="font-medium">{bufferTime} minutes</span>      )      date: '2025-10-16',          duration: '2 hours',    id: '1',

                    <span>60 min</span>

                  </div>    );

                </div>

              </div>  };      weather: { temp: 72, condition: 'cloudy', description: 'Partly Cloudy' },

              

              <Button className="w-full">

                <Check className="w-4 h-4 mr-2" />

                Apply Changes  const handleEditActivity = (activity: any) => {      activities: [          ecoFriendly: true,    destination: 'Paris, France',

              </Button>

            </div>    setEditingActivity(activity);

          </DialogContent>

        </Dialog>  };        {

      </div>

    </div>

  );

};  const handleUpdateActivity = () => {          id: '6',          bookable: false,    duration: '5 days',



export default TripView;    toast({

      title: 'Activity Updated! ✏️',          time: '10:00 AM',

      description: 'Your changes have been saved.',

    });          endTime: '1:00 PM',          icon: Camera,    startDate: '2025-10-15',

    setEditingActivity(null);

  };          title: 'Eco-friendly Bike Tour',



  return (          description: 'Electric bike tour along the Seine with sustainable tourism focus',          coordinates: { lat: 48.8867, lng: 2.3431 }    endDate: '2025-10-20',

    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5">

      {/* Header Navigation */}          type: 'adventure',

      <div className="border-b border-border bg-card/80 backdrop-blur-xl sticky top-0 z-50">

        <div className="container mx-auto px-4 md:px-6 py-3 md:py-4">          location: 'Starting at Pont Neuf',        },    budget: 2500,

          <div className="flex items-center justify-between">

            <Button           price: 55,

              variant="ghost" 

              onClick={() => navigate('/')}          duration: '3 hours',        {    carbonSavings: 20,

              className="hover:bg-primary/10 transition-colors"

            >          ecoFriendly: true,

              <ArrowLeft className="w-4 h-4 mr-2" />

              Back to Home          bookable: true,          id: '2',    ecoFriendly: true,

            </Button>

                      icon: Activity,

            <div className="flex items-center gap-2">

              <img           coordinates: { lat: 48.8566, lng: 2.3422 }          time: '12:00 PM',    totalActivities: 18

                src="/tripgenie.png" 

                alt="TripGenie"        },

                className="h-6 md:h-8 w-auto"

              />        {          endTime: '1:30 PM',  };

              <span className="font-bold text-lg">Your Paris Adventure</span>

            </div>          id: '7',



            <div className="flex items-center gap-2">          time: '1:00 PM',          title: 'Lunch at Café de Flore',

              <Button variant="outline" size="sm" onClick={handleSavePlan}>

                <Save className="w-4 h-4 mr-1 md:mr-2" />          endTime: '3:00 PM',

                <span className="hidden sm:inline">Save</span>

              </Button>          title: 'Notre-Dame Visit',          description: 'Historic café known for its literary clientele and French classics',  const mockItinerary = [

              <Dialog>

                <DialogTrigger asChild>          description: 'Explore the iconic cathedral and surrounding area',

                  <Button variant="outline" size="sm">

                    <Share className="w-4 h-4 mr-1 md:mr-2" />          type: 'culture',          type: 'food',    {

                    <span className="hidden sm:inline">Share</span>

                  </Button>          location: 'Notre-Dame Cathedral',

                </DialogTrigger>

                <DialogContent>          price: 0,          location: '172 Boulevard Saint-Germain',      day: 1,

                  <DialogHeader>

                    <DialogTitle>Share Your Itinerary</DialogTitle>          duration: '2 hours',

                    <DialogDescription>

                      Share your travel plan with friends or save it for later          ecoFriendly: false,          price: 45,      date: '2025-10-15',

                    </DialogDescription>

                  </DialogHeader>          bookable: false,

                  <div className="space-y-3">

                    <Button           icon: BookOpen,          duration: '1.5 hours',      weather: { temp: 75, condition: 'sunny', description: 'Sunny' },

                      onClick={() => handleSharePlan('email')}

                      className="w-full"          coordinates: { lat: 48.8530, lng: 2.3499 }

                    >

                      <Mail className="w-4 h-4 mr-2" />        },          ecoFriendly: false,      activities: [

                      Send via Email

                    </Button>        {

                    <Button 

                      onClick={() => handleSharePlan('pdf')}          id: '8',          bookable: true,        {

                      variant="outline"

                      className="w-full"          time: '7:00 PM',

                    >

                      <FileText className="w-4 h-4 mr-2" />          endTime: '10:00 PM',          icon: Coffee,          id: '1',

                      Download PDF

                    </Button>          title: 'Free Evening',

                  </div>

                </DialogContent>          description: 'Explore local markets or relax at your hotel',          coordinates: { lat: 48.8542, lng: 2.3320 }          time: '9:00 AM',

              </Dialog>

            </div>          type: 'relaxation',

          </div>

        </div>          location: 'Various',        },          endTime: '11:00 AM',

      </div>

          price: 0,

      <div className="container mx-auto px-4 md:px-6 py-6 md:py-8">

        {/* Trip Overview Header */}          duration: '3 hours',        {          title: 'Hike in Montmartre',

        <motion.div

          initial={{ opacity: 0, y: 30 }}          ecoFriendly: true,

          animate={{ opacity: 1, y: 0 }}

          className="mb-8"          bookable: false,          id: '3',          description: 'Explore the artistic neighborhood and enjoy panoramic views of Paris',

        >

          <div className="flex flex-col lg:flex-row gap-6 mb-6">          icon: Heart,

            {/* Left Section - Trip Info */}

            <div className="flex-1">          coordinates: { lat: 48.8566, lng: 2.3522 }          time: '2:00 PM',          type: 'nature',

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">

                {mockTrip.destination}        }

              </h1>

                    ]          endTime: '5:00 PM',          location: 'Montmartre, Paris',

              <div className="flex flex-wrap gap-4 text-sm md:text-base text-muted-foreground mb-4">

                <div className="flex items-center gap-2">    }

                  <Calendar className="w-4 h-4 md:w-5 md:h-5 text-primary" />

                  <span>{mockTrip.duration} • Oct 15-20, 2025</span>  ];          title: 'Louvre Museum Tour',          source: 'Instagram recommendation',

                </div>

                <div className="flex items-center gap-2">

                  <DollarSign className="w-4 h-4 md:w-5 md:h-5 text-accent" />

                  <span>Budget: ${mockTrip.budget}</span>  const mockBookingOptions = [          description: 'Skip-the-line access with expert guide to see Mona Lisa and masterpieces',          price: 0,

                </div>

                <div className="flex items-center gap-2">    {

                  <Footprints className="w-4 h-4 md:w-5 md:h-5 text-green-500" />

                  <span>Saves {mockTrip.carbonSavings}% emissions</span>      type: 'flight',          type: 'culture',          duration: '2 hours',

                </div>

              </div>      title: 'New York to Paris',



              <div className="flex flex-wrap gap-2 mb-4">      price: 400,          location: 'Louvre Museum',          ecoFriendly: true,

                <Badge className="bg-green-100 text-green-700 border-green-200">

                  <TreePine className="w-3 h-3 mr-1" />      description: 'Low-carbon direct flight',

                  Eco-Friendly Trip

                </Badge>      ecoFriendly: true,          price: 65,          bookable: false,

                <Badge variant="outline">

                  <Activity className="w-3 h-3 mr-1" />      savings: '15% emissions',

                  {mockTrip.totalActivities} Activities

                </Badge>      available: true          duration: '3 hours',          icon: Camera,

                <Badge variant="outline">

                  <Star className="w-3 h-3 mr-1" />    },

                  Personalized

                </Badge>    {          ecoFriendly: true,          coordinates: { lat: 48.8867, lng: 2.3431 }

              </div>

      type: 'hotel',

              {/* Carbon Impact Card */}

              <Card className="p-4 bg-green-50 border-green-200 mb-4">      title: 'Eco Hotel near Louvre',          bookable: true,        },

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-2">      price: 120,

                    <Leaf className="w-5 h-5 text-green-600" />

                    <div>      description: 'Sustainable accommodation',          icon: Star,        {

                      <p className="font-semibold text-green-800">

                        Saves {mockTrip.carbonSavings}% emissions      ecoFriendly: true,

                      </p>

                      <p className="text-sm text-green-600">      savings: '30% water usage',          coordinates: { lat: 48.8606, lng: 2.3376 }          id: '2',

                        vs. traditional travel options

                      </p>      available: true

                    </div>

                  </div>    },        },          time: '12:00 PM',

                  <Button size="sm" variant="outline" className="border-green-300">

                    <Leaf className="w-4 h-4 mr-1" />    {

                    Offset

                  </Button>      type: 'tour',        {          endTime: '1:30 PM',

                </div>

              </Card>      title: 'Paris Museum Pass',

            </div>

      price: 85,          id: '4',          title: 'Lunch at Café de Flore',

            {/* Right Section - Quick Actions */}

            <div className="lg:w-80">      description: 'Skip-the-line access to 60+ museums',

              <Card className="p-4 bg-gradient-to-br from-primary/10 to-secondary/10">

                <h3 className="font-semibold mb-4 flex items-center gap-2">      ecoFriendly: false,          time: '4:30 PM',          description: 'Historic café known for its literary clientele and French classics',

                  <Sparkles className="w-5 h-5 text-primary" />

                  Quick Actions      savings: null,

                </h3>

                      available: true          endTime: '5:00 PM',          type: 'food',

                <div className="space-y-3">

                  {/* Booking Options */}    }

                  <div className="space-y-2">

                    {mockBookingOptions.map((option) => (  ];          title: '30-minute break',          location: '172 Boulevard Saint-Germain',

                      <Button

                        key={option.type}

                        onClick={() => handleBooking(option.type)}

                        className="w-full justify-between bg-white hover:bg-gray-50 text-black border"  const mockChecklist = [          description: 'Relax and recharge at Tuileries Garden',          price: 45,

                        size="sm"

                      >    { id: 1, task: 'Pack passport', completed: false, category: 'documents' },

                        <div className="flex items-center gap-2">

                          {option.type === 'flight' && <Plane className="w-4 h-4" />}    { id: 2, task: 'Book airport transfer', completed: true, category: 'transport' },          type: 'relaxation',          duration: '1.5 hours',

                          {option.type === 'hotel' && <Hotel className="w-4 h-4" />}

                          {option.type === 'tour' && <Ticket className="w-4 h-4" />}    { id: 3, task: 'Pack comfortable walking shoes', completed: false, category: 'clothing' },

                          <div className="text-left">

                            <div className="font-medium text-sm">{option.title}</div>    { id: 4, task: 'Download offline maps', completed: false, category: 'apps' },          location: 'Tuileries Garden',          ecoFriendly: false,

                            <div className="text-xs text-muted-foreground">{option.description}</div>

                          </div>    { id: 5, task: 'Notify bank of travel', completed: true, category: 'finance' },

                        </div>

                        <div className="text-right">    { id: 6, task: 'Pack portable charger', completed: false, category: 'electronics' },          price: 0,          bookable: true,

                          <div className="font-bold text-sm">${option.price}</div>

                          {option.ecoFriendly && (  ];

                            <div className="text-xs text-green-600">{option.savings}</div>

                          )}          duration: '30 minutes',          icon: Coffee,

                        </div>

                      </Button>  const [checklistItems, setChecklistItems] = useState(mockChecklist);

                    ))}

                  </div>          ecoFriendly: true,          coordinates: { lat: 48.8542, lng: 2.3320 }



                  <Separator />  // Activity type configurations



                  {/* Digital Souvenir */}  const activityTypes = {          bookable: false,        },

                  <Button

                    onClick={handleGetNFT}    'sightseeing': { icon: Camera, color: 'text-blue-500', bg: 'bg-blue-100' },

                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"

                  >    'food': { icon: Utensils, color: 'text-orange-500', bg: 'bg-orange-100' },          icon: TreePine,        {

                    <Gift className="w-4 h-4 mr-2" />

                    Get Digital Souvenir    'nature': { icon: TreePine, color: 'text-green-500', bg: 'bg-green-100' },

                  </Button>

    'culture': { icon: Star, color: 'text-purple-500', bg: 'bg-purple-100' },          coordinates: { lat: 48.8634, lng: 2.3275 }          id: '3',

                  {/* Chat for Help */}

                  <Button    'relaxation': { icon: Coffee, color: 'text-amber-500', bg: 'bg-amber-100' },

                    onClick={handleChatHelp}

                    variant="outline"    'adventure': { icon: Navigation, color: 'text-red-500', bg: 'bg-red-100' },        },          time: '2:00 PM',

                    className="w-full"

                  >  };

                    <MessageCircle className="w-4 h-4 mr-2" />

                    Chat for Help        {          endTime: '5:00 PM',

                  </Button>

                </div>  // Weather icon helper

              </Card>

            </div>  const getWeatherIcon = (condition: string) => {          id: '5',          title: 'Louvre Museum Tour',

          </div>

        </motion.div>    switch (condition) {



        {/* Main Content Tabs */}      case 'sunny': return <Sun className="w-5 h-5 text-yellow-500" />;          time: '7:00 PM',          description: 'Skip-the-line access with expert guide to see Mona Lisa and masterpieces',

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">

          <TabsList className="grid grid-cols-4 max-w-md mx-auto">      case 'cloudy': return <Cloud className="w-5 h-5 text-gray-500" />;

            <TabsTrigger value="itinerary" className="text-xs md:text-sm">Itinerary</TabsTrigger>

            <TabsTrigger value="map" className="text-xs md:text-sm">Map</TabsTrigger>      case 'rainy': return <CloudRain className="w-5 h-5 text-blue-500" />;          endTime: '9:00 PM',          type: 'culture',

            <TabsTrigger value="weather" className="text-xs md:text-sm">Weather</TabsTrigger>

            <TabsTrigger value="checklist" className="text-xs md:text-sm">Checklist</TabsTrigger>      case 'snowy': return <Snowflake className="w-5 h-5 text-blue-200" />;

          </TabsList>

      default: return <Sun className="w-5 h-5 text-yellow-500" />;          title: 'Dinner at Le Consulat',          location: 'Louvre Museum',

          {/* Itinerary Tab */}

          <TabsContent value="itinerary" className="space-y-6">    }

            <div className="flex flex-wrap gap-3 mb-6">

              <Button  };          description: 'Traditional French bistro in Montmartre with sustainable practices',          price: 65,

                variant="outline"

                size="sm"

                onClick={() => setShowCustomize(true)}

              >  // Event handlers          type: 'food',          duration: '3 hours',

                <Sliders className="w-4 h-4 mr-2" />

                Customize  const handleBooking = (type: string) => {

              </Button>

              <Button variant="outline" size="sm">    navigate(`/trip/${id}/booking?type=${type}`);          location: '18 Rue Norvins, Montmartre',          ecoFriendly: true,

                <Edit className="w-4 h-4 mr-2" />

                Edit Plan  };

              </Button>

              <Button variant="outline" size="sm">          price: 85,          bookable: true,

                <Plus className="w-4 h-4 mr-2" />

                Add Activity  const handleSavePlan = () => {

              </Button>

            </div>    toast({          duration: '2 hours',          icon: Star,



            {/* Day-by-Day Itinerary Timeline */}      title: 'Plan Saved! 💾',

            <div className="space-y-8">

              {mockItinerary.map((day, dayIndex) => (      description: 'Your itinerary has been saved successfully.',          ecoFriendly: true,          coordinates: { lat: 48.8606, lng: 2.3376 }

                <motion.div

                  key={day.day}    });

                  initial={{ opacity: 0, y: 30 }}

                  animate={{ opacity: 1, y: 0 }}  };          bookable: true,        },

                  transition={{ delay: dayIndex * 0.1 }}

                >

                  <Card className="overflow-hidden">

                    {/* Day Header */}  const handleSharePlan = (method: 'email' | 'pdf') => {          icon: Utensils,        {

                    <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-4 border-b">

                      <div className="flex items-center justify-between">    if (method === 'email') {

                        <div>

                          <h2 className="text-xl font-bold">Day {day.day}</h2>      toast({          coordinates: { lat: 48.8867, lng: 2.3399 }          id: '4',

                          <p className="text-muted-foreground">{day.date}</p>

                        </div>        title: 'Email Sent! 📧',

                        <div className="flex items-center gap-4">

                          <div className="flex items-center gap-2">        description: 'Your itinerary has been sent to your email.',        }          time: '4:30 PM',

                            {getWeatherIcon(day.weather.condition)}

                            <span className="font-medium">{day.weather.temp}°F</span>      });

                            <span className="text-sm text-muted-foreground">

                              {day.weather.description}    } else {      ]          endTime: '5:00 PM',

                            </span>

                          </div>      toast({

                          <Badge variant="outline">

                            {day.activities.length} activities        title: 'PDF Downloaded! 📄',    },          title: '30-minute break',

                          </Badge>

                        </div>        description: 'Your itinerary PDF has been downloaded.',

                      </div>

                    </div>      });    {          description: 'Relax and recharge at Tuileries Garden',



                    {/* Activities Timeline */}    }

                    <div className="p-4">

                      <div className="space-y-4">  };      day: 2,          type: 'relaxation',

                        {day.activities.map((activity, activityIndex) => {

                          const IconComponent = activity.icon;

                          const typeConfig = activityTypes[activity.type as keyof typeof activityTypes];

                            const handleGetNFT = () => {      date: '2025-10-16',          location: 'Tuileries Garden',

                          return (

                            <motion.div    toast({

                              key={activity.id}

                              initial={{ opacity: 0, x: -20 }}      title: 'Digital Souvenir Earned! 🎁',      weather: { temp: 72, condition: 'cloudy', description: 'Partly Cloudy' },          price: 0,

                              animate={{ opacity: 1, x: 0 }}

                              transition={{ delay: activityIndex * 0.1 }}      description: 'You\'ve received an exclusive Eiffel Tower NFT badge!',

                              className="flex gap-4 p-4 rounded-lg border hover:shadow-md transition-all duration-200 hover:border-primary/30"

                            >    });      activities: [          duration: '30 minutes',

                              {/* Timeline Icon */}

                              <div className="flex flex-col items-center">  };

                                <div className={`w-10 h-10 rounded-full ${typeConfig?.bg} flex items-center justify-center`}>

                                  <IconComponent className={`w-5 h-5 ${typeConfig?.color}`} />        {          ecoFriendly: true,

                                </div>

                                {activityIndex < day.activities.length - 1 && (  const handleChatHelp = () => {

                                  <div className="w-0.5 h-8 bg-border mt-2"></div>

                                )}    setShowChat(true);          id: '6',          bookable: false,

                              </div>

  };

                              {/* Activity Details */}

                              <div className="flex-1">          time: '10:00 AM',          icon: TreePine,

                                <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-2">

                                  <div className="flex-1">  const toggleChecklistItem = (itemId: number) => {

                                    <div className="flex items-center gap-2 mb-1">

                                      <span className="font-bold text-primary text-lg">    setChecklistItems(items =>          endTime: '1:00 PM',          coordinates: { lat: 48.8634, lng: 2.3275 }

                                        {activity.time}

                                      </span>      items.map(item =>

                                      {activity.endTime && (

                                        <span className="text-muted-foreground">        item.id === itemId ? { ...item, completed: !item.completed } : item          title: 'Eco-friendly Bike Tour',        },

                                          - {activity.endTime}

                                        </span>      )

                                      )}

                                      <Badge variant="outline" className="text-xs">    );          description: 'Electric bike tour along the Seine with sustainable tourism focus',        {

                                        {activity.duration}

                                      </Badge>  };

                                    </div>

                                    <h3 className="font-semibold text-lg mb-1">          type: 'adventure',          id: '5',

                                      {activity.title}

                                    </h3>  const handleEditActivity = (activity: any) => {

                                    <p className="text-muted-foreground text-sm mb-2">

                                      {activity.description}    setEditingActivity(activity);          location: 'Starting at Pont Neuf',          time: '7:00 PM',

                                    </p>

                                    <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">  };

                                      <div className="flex items-center gap-1">

                                        <MapPin className="w-3 h-3" />          price: 55,          endTime: '9:00 PM',

                                        {activity.location}

                                      </div>  const handleUpdateActivity = () => {

                                      {activity.source && (

                                        <div className="flex items-center gap-1">    toast({          duration: '3 hours',          title: 'Dinner at Le Consulat',

                                          <Instagram className="w-3 h-3" />

                                          {activity.source}      title: 'Activity Updated! ✏️',

                                        </div>

                                      )}      description: 'Your changes have been saved.',          ecoFriendly: true,          description: 'Traditional French bistro in Montmartre with sustainable practices',

                                    </div>

                                  </div>    });



                                  <div className="flex flex-col items-end gap-2">    setEditingActivity(null);          bookable: true,          type: 'food',

                                    <div className="flex items-center gap-2">

                                      {activity.price > 0 && (  };

                                        <span className="font-bold text-lg">

                                          ${activity.price}          icon: Activity,          location: '18 Rue Norvins, Montmartre',

                                        </span>

                                      )}  return (

                                      {activity.ecoFriendly && (

                                        <Badge className="bg-green-100 text-green-700 border-green-200 text-xs">    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5">          coordinates: { lat: 48.8566, lng: 2.3422 }          price: 85,

                                          <TreePine className="w-3 h-3 mr-1" />

                                          Eco      {/* Header Navigation */}

                                        </Badge>

                                      )}      <div className="border-b border-border bg-card/80 backdrop-blur-xl sticky top-0 z-50">        },          duration: '2 hours',

                                    </div>

                                            <div className="container mx-auto px-4 md:px-6 py-3 md:py-4">

                                    <div className="flex gap-1">

                                      {activity.bookable && (          <div className="flex items-center justify-between">        {          ecoFriendly: true,

                                        <Button size="sm" className="text-xs px-3">

                                          <CreditCard className="w-3 h-3 mr-1" />            <Button 

                                          Book

                                        </Button>              variant="ghost"           id: '7',          bookable: true,

                                      )}

                                      <Button              onClick={() => navigate('/')}

                                        variant="outline"

                                        size="sm"              className="hover:bg-primary/10 transition-colors"          time: '1:00 PM',          icon: Utensils,

                                        onClick={() => handleEditActivity(activity)}

                                        className="text-xs px-3"            >

                                      >

                                        <Edit className="w-3 h-3" />              <ArrowLeft className="w-4 h-4 mr-2" />          endTime: '3:00 PM',          coordinates: { lat: 48.8867, lng: 2.3399 }

                                      </Button>

                                    </div>              Back to Home

                                  </div>

                                </div>            </Button>          title: 'Notre-Dame Visit',        }

                              </div>

                            </motion.div>            

                          );

                        })}            <div className="flex items-center gap-2">          description: 'Explore the iconic cathedral and surrounding area',      ]

                      </div>

                    </div>              <img 

                  </Card>

                </motion.div>                src="/tripgenie.png"           type: 'culture',    },

              ))}

            </div>                alt="TripGenie"

          </TabsContent>

                className="h-6 md:h-8 w-auto"          location: 'Notre-Dame Cathedral',    {

          {/* Map Tab */}

          <TabsContent value="map">              />

            <Card className="p-6">

              <div className="text-center">              <span className="font-bold text-lg">Your Paris Adventure</span>          price: 0,      day: 2,

                <MapIcon className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />

                <h3 className="text-xl font-semibold mb-2">Interactive Map</h3>            </div>

                <p className="text-muted-foreground mb-4">

                  View all your destinations and activities on an interactive map          duration: '2 hours',      date: '2025-10-16',

                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">            <div className="flex items-center gap-2">

                  {mockItinerary.map(day => 

                    day.activities.map(activity => (              <Button variant="outline" size="sm" onClick={handleSavePlan}>          ecoFriendly: false,      weather: { temp: 72, condition: 'cloudy', description: 'Partly Cloudy' },

                      <div key={activity.id} className="flex items-center gap-3 p-3 border rounded-lg">

                        <div className="w-3 h-3 bg-primary rounded-full"></div>                <Save className="w-4 h-4 mr-1 md:mr-2" />

                        <div>

                          <p className="font-medium">{activity.title}</p>                <span className="hidden sm:inline">Save</span>          bookable: false,      activities: [

                          <p className="text-sm text-muted-foreground">{activity.location}</p>

                        </div>              </Button>

                      </div>

                    ))              <Dialog>          icon: BookOpen,        {

                  )}

                </div>                <DialogTrigger asChild>

              </div>

            </Card>                  <Button variant="outline" size="sm">          coordinates: { lat: 48.8530, lng: 2.3499 }          id: '6',

          </TabsContent>

                    <Share className="w-4 h-4 mr-1 md:mr-2" />

          {/* Weather Tab */}

          <TabsContent value="weather">                    <span className="hidden sm:inline">Share</span>        },          time: '10:00 AM',

            <Card className="p-6">

              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">                  </Button>

                <Thermometer className="w-5 h-5 text-primary" />

                5-Day Weather Forecast                </DialogTrigger>        {          endTime: '1:00 PM',

              </h3>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">                <DialogContent>

                {mockItinerary.map(day => (

                  <div key={day.day} className="text-center p-4 border rounded-lg">                  <DialogHeader>          id: '8',          title: 'Eco-friendly Bike Tour',

                    <p className="font-semibold">Day {day.day}</p>

                    <p className="text-sm text-muted-foreground mb-2">                    <DialogTitle>Share Your Itinerary</DialogTitle>

                      {new Date(day.date).toLocaleDateString('en-US', { weekday: 'short' })}

                    </p>                    <DialogDescription>          time: '7:00 PM',          description: 'Electric bike tour along the Seine with sustainable tourism focus',

                    <div className="flex justify-center mb-2">

                      {getWeatherIcon(day.weather.condition)}                      Share your travel plan with friends or save it for later

                    </div>

                    <p className="font-bold text-lg">{day.weather.temp}°F</p>                    </DialogDescription>          endTime: '10:00 PM',          type: 'adventure',

                    <p className="text-sm text-muted-foreground">{day.weather.description}</p>

                  </div>                  </DialogHeader>

                ))}

              </div>                  <div className="space-y-3">          title: 'Free Evening',          location: 'Starting at Pont Neuf',

              

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">                    <Button 

                <div className="flex items-center gap-2 mb-2">

                  <Umbrella className="w-5 h-5 text-blue-600" />                      onClick={() => handleSharePlan('email')}          description: 'Explore local markets or relax at your hotel',          price: 55,

                  <span className="font-semibold text-blue-800">Weather Tips</span>

                </div>                      className="w-full"

                <ul className="text-sm text-blue-700 space-y-1">

                  <li>• Pack layers for changing temperatures</li>                    >          type: 'relaxation',          duration: '3 hours',

                  <li>• Light rain expected on Day 3 - bring umbrella</li>

                  <li>• Perfect weather for outdoor activities on Days 1, 4, and 5</li>                      <Mail className="w-4 h-4 mr-2" />

                </ul>

              </div>                      Send via Email          location: 'Various',          ecoFriendly: true,

            </Card>

          </TabsContent>                    </Button>



          {/* Checklist Tab */}                    <Button           price: 0,          bookable: true,

          <TabsContent value="checklist">

            <Card className="p-6">                      onClick={() => handleSharePlan('pdf')}

              <div className="flex items-center justify-between mb-6">

                <h3 className="text-xl font-semibold flex items-center gap-2">                      variant="outline"          duration: '3 hours',          icon: Activity,

                  <CheckSquare className="w-5 h-5 text-primary" />

                  Travel Checklist                      className="w-full"

                </h3>

                <div className="text-sm text-muted-foreground">                    >          ecoFriendly: true,          coordinates: { lat: 48.8566, lng: 2.3422 }

                  {checklistItems.filter(item => item.completed).length} of {checklistItems.length} completed

                </div>                      <FileText className="w-4 h-4 mr-2" />

              </div>

                      Download PDF          bookable: false,        },

              <div className="space-y-3">

                {checklistItems.map(item => (                    </Button>

                  <div

                    key={item.id}                  </div>          icon: Heart,        {

                    className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors"

                  >                </DialogContent>

                    <button

                      onClick={() => toggleChecklistItem(item.id)}              </Dialog>          coordinates: { lat: 48.8566, lng: 2.3522 }          id: '7',

                      className="flex-shrink-0"

                    >            </div>

                      {item.completed ? (

                        <CheckSquare className="w-5 h-5 text-green-600" />          </div>        }          time: '1:00 PM',

                      ) : (

                        <Square className="w-5 h-5 text-muted-foreground" />        </div>

                      )}

                    </button>      </div>      ]          endTime: '3:00 PM',

                    <span

                      className={`flex-1 ${

                        item.completed

                          ? 'line-through text-muted-foreground'      <div className="container mx-auto px-4 md:px-6 py-6 md:py-8">    }          title: 'Notre-Dame Visit',

                          : 'text-foreground'

                      }`}        {/* Trip Overview Header */}

                    >

                      {item.task}        <motion.div  ];          description: 'Explore the iconic cathedral and surrounding area',

                    </span>

                    <Badge variant="outline" className="text-xs">          initial={{ opacity: 0, y: 30 }}

                      {item.category}

                    </Badge>          animate={{ opacity: 1, y: 0 }}          type: 'culture',

                  </div>

                ))}          className="mb-8"

              </div>

        >  const mockBookingOptions = [          location: 'Notre-Dame Cathedral',

              <Button className="w-full mt-4" variant="outline">

                <Plus className="w-4 h-4 mr-2" />          <div className="flex flex-col lg:flex-row gap-6 mb-6">

                Add Custom Item

              </Button>            {/* Left Section - Trip Info */}    {          price: 0,

            </Card>

          </TabsContent>            <div className="flex-1">

        </Tabs>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient mb-4">      type: 'flight',          duration: '2 hours',

        {/* Customization Dialog */}

        <Dialog open={showCustomize} onOpenChange={setShowCustomize}>                {mockTrip.destination}

          <DialogContent>

            <DialogHeader>              </h1>      title: 'New York to Paris',          ecoFriendly: false,

              <DialogTitle>Customize Your Trip</DialogTitle>

              <DialogDescription>              

                Adjust settings to personalize your travel experience

              </DialogDescription>              <div className="flex flex-wrap gap-4 text-sm md:text-base text-muted-foreground mb-4">      price: 400,          bookable: false,

            </DialogHeader>

            <div className="space-y-6">                <div className="flex items-center gap-2">

              <div>

                <Label className="text-base font-semibold">Buffer Time Between Activities</Label>                  <Calendar className="w-4 h-4 md:w-5 md:h-5 text-primary" />      description: 'Low-carbon direct flight',          icon: BookOpen,

                <p className="text-sm text-muted-foreground mb-3">

                  Add extra time between activities for a more relaxed pace                  <span>{mockTrip.duration} • Oct 15-20, 2025</span>

                </p>

                <div className="space-y-2">                </div>      ecoFriendly: true,          coordinates: { lat: 48.8530, lng: 2.3499 }

                  <Slider

                    value={[bufferTime]}                <div className="flex items-center gap-2">

                    onValueChange={(value) => setBufferTime(value[0])}

                    max={60}                  <DollarSign className="w-4 h-4 md:w-5 md:h-5 text-accent" />      savings: '15% emissions',        },

                    min={0}

                    step={15}                  <span>Budget: ${mockTrip.budget}</span>

                    className="w-full"

                  />                </div>      available: true        {

                  <div className="flex justify-between text-sm text-muted-foreground">

                    <span>0 min</span>                <div className="flex items-center gap-2">

                    <span className="font-medium">{bufferTime} minutes</span>

                    <span>60 min</span>                  <Footprints className="w-4 h-4 md:w-5 md:h-5 text-green-500" />    },          id: '8',

                  </div>

                </div>                  <span>Saves {mockTrip.carbonSavings}% emissions</span>

              </div>

                              </div>    {          time: '7:00 PM',

              <Button className="w-full">

                <Check className="w-4 h-4 mr-2" />              </div>

                Apply Changes

              </Button>      type: 'hotel',          endTime: '10:00 PM',

            </div>

          </DialogContent>              <div className="flex flex-wrap gap-2 mb-4">

        </Dialog>

                <Badge className="bg-green-100 text-green-700 border-green-200">      title: 'Eco Hotel near Louvre',          title: 'Free Evening',

        {/* Chat Dialog */}

        <Dialog open={showChat} onOpenChange={setShowChat}>                  <TreePine className="w-3 h-3 mr-1" />

          <DialogContent>

            <DialogHeader>                  Eco-Friendly Trip      price: 120,          description: 'Explore local markets or relax at your hotel',

              <DialogTitle>Chat for Help</DialogTitle>

              <DialogDescription>                </Badge>

                Ask for tweaks or get recommendations for your trip

              </DialogDescription>                <Badge variant="outline">      description: 'Sustainable accommodation',          type: 'relaxation',

            </DialogHeader>

            <div className="space-y-4">                  <Activity className="w-3 h-3 mr-1" />

              <div className="border rounded-lg p-4 h-64 overflow-y-auto bg-gray-50">

                <div className="space-y-3">                  {mockTrip.totalActivities} Activities      ecoFriendly: true,          location: 'Various',

                  <div className="bg-white p-3 rounded-lg">

                    <p className="text-sm">Hi! How can I help you with your Paris trip? 🇫🇷</p>                </Badge>

                  </div>

                </div>                <Badge variant="outline">      savings: '30% water usage',          price: 0,

              </div>

              <div className="flex gap-2">                  <Star className="w-3 h-3 mr-1" />

                <Input placeholder="Type your message... (e.g., 'Add a café')" className="flex-1" />

                <Button>Send</Button>                  Personalized      available: true          duration: '3 hours',

              </div>

              <div className="flex flex-wrap gap-2">                </Badge>

                <Button variant="outline" size="sm">Add a café</Button>

                <Button variant="outline" size="sm">Move hike to 9-11 AM</Button>              </div>    },          ecoFriendly: true,

                <Button variant="outline" size="sm">Find vegan restaurants</Button>

              </div>

            </div>

          </DialogContent>              {/* Carbon Impact Card */}    {          bookable: false,

        </Dialog>

              <Card className="p-4 bg-green-50 border-green-200 mb-4">

        {/* Edit Activity Dialog */}

        <Dialog open={!!editingActivity} onOpenChange={() => setEditingActivity(null)}>                <div className="flex items-center justify-between">      type: 'tour',          icon: Heart,

          <DialogContent>

            <DialogHeader>                  <div className="flex items-center gap-2">

              <DialogTitle>Edit Activity</DialogTitle>

              <DialogDescription>                    <Leaf className="w-5 h-5 text-green-600" />      title: 'Paris Museum Pass',          coordinates: { lat: 48.8566, lng: 2.3522 }

                Modify the details of your activity

              </DialogDescription>                    <div>

            </DialogHeader>

            {editingActivity && (                      <p className="font-semibold text-green-800">      price: 85,        }

              <div className="space-y-4">

                <div>                        Saves {mockTrip.carbonSavings}% emissions

                  <Label htmlFor="title">Activity Title</Label>

                  <Input                      </p>      description: 'Skip-the-line access to 60+ museums',      ]

                    id="title"

                    value={editingActivity.title}                      <p className="text-sm text-green-600">

                    onChange={(e) =>

                      setEditingActivity({ ...editingActivity, title: e.target.value })                        vs. traditional travel options      ecoFriendly: false,    }

                    }

                  />                      </p>

                </div>

                <div className="grid grid-cols-2 gap-4">                    </div>      savings: null,  ];

                  <div>

                    <Label htmlFor="startTime">Start Time</Label>                  </div>

                    <Input

                      id="startTime"                  <Button size="sm" variant="outline" className="border-green-300">      available: true

                      type="time"

                      value={editingActivity.time}                    <Wind className="w-4 h-4 mr-1" />

                      onChange={(e) =>

                        setEditingActivity({ ...editingActivity, time: e.target.value })                    Offset    }  const mockBookingOptions = [

                      }

                    />                  </Button>

                  </div>

                  <div>                </div>  ];    {

                    <Label htmlFor="endTime">End Time</Label>

                    <Input              </Card>

                      id="endTime"

                      type="time"            </div>      type: 'flight',

                      value={editingActivity.endTime}

                      onChange={(e) =>

                        setEditingActivity({ ...editingActivity, endTime: e.target.value })

                      }            {/* Right Section - Quick Actions */}  const mockChecklist = [      title: 'New York to Paris',

                    />

                  </div>            <div className="lg:w-80">

                </div>

                <div>              <Card className="p-4 bg-gradient-to-br from-primary/10 to-secondary/10">    { id: 1, task: 'Pack passport', completed: false, category: 'documents' },      price: 400,

                  <Label htmlFor="description">Description</Label>

                  <Textarea                <h3 className="font-semibold mb-4 flex items-center gap-2">

                    id="description"

                    value={editingActivity.description}                  <Sparkles className="w-5 h-5 text-primary" />    { id: 2, task: 'Book airport transfer', completed: true, category: 'transport' },      description: 'Low-carbon direct flight',

                    onChange={(e) =>

                      setEditingActivity({ ...editingActivity, description: e.target.value })                  Quick Actions

                    }

                  />                </h3>    { id: 3, task: 'Pack comfortable walking shoes', completed: false, category: 'clothing' },      ecoFriendly: true,

                </div>

                <div className="flex gap-2">                

                  <Button onClick={handleUpdateActivity} className="flex-1">

                    Save Changes                <div className="space-y-3">    { id: 4, task: 'Download offline maps', completed: false, category: 'apps' },      savings: '15% emissions',

                  </Button>

                  <Button variant="outline" onClick={() => setEditingActivity(null)}>                  {/* Booking Options */}

                    Cancel

                  </Button>                  <div className="space-y-2">    { id: 5, task: 'Notify bank of travel', completed: true, category: 'finance' },      available: true

                </div>

              </div>                    {mockBookingOptions.map((option, index) => (

            )}

          </DialogContent>                      <Button    { id: 6, task: 'Pack portable charger', completed: false, category: 'electronics' },    },

        </Dialog>

      </div>                        key={option.type}

    </div>

  );                        onClick={() => handleBooking(option.type)}  ];    {

};

                        className="w-full justify-between bg-white hover:bg-gray-50 text-black border"

export default TripView;
                        size="sm"      type: 'hotel',

                      >

                        <div className="flex items-center gap-2">  const [checklistItems, setChecklistItems] = useState(mockChecklist);      title: 'Eco Hotel near Louvre',

                          {option.type === 'flight' && <Plane className="w-4 h-4" />}

                          {option.type === 'hotel' && <Hotel className="w-4 h-4" />}      price: 120,

                          {option.type === 'tour' && <Ticket className="w-4 h-4" />}

                          <div className="text-left">  // Activity type configurations      description: 'Sustainable accommodation',

                            <div className="font-medium text-sm">{option.title}</div>

                            <div className="text-xs text-muted-foreground">{option.description}</div>  const activityTypes = {      ecoFriendly: true,

                          </div>

                        </div>    'sightseeing': { icon: Camera, color: 'text-blue-500', bg: 'bg-blue-100' },      savings: '30% water usage',

                        <div className="text-right">

                          <div className="font-bold text-sm">${option.price}</div>    'food': { icon: Utensils, color: 'text-orange-500', bg: 'bg-orange-100' },      available: true

                          {option.ecoFriendly && (

                            <div className="text-xs text-green-600">{option.savings}</div>    'nature': { icon: TreePine, color: 'text-green-500', bg: 'bg-green-100' },    },

                          )}

                        </div>    'culture': { icon: Star, color: 'text-purple-500', bg: 'bg-purple-100' },    {

                      </Button>

                    ))}    'relaxation': { icon: Coffee, color: 'text-amber-500', bg: 'bg-amber-100' },      type: 'tour',

                  </div>

    'adventure': { icon: Navigation, color: 'text-red-500', bg: 'bg-red-100' },      title: 'Paris Museum Pass',

                  <Separator />

  };      price: 85,

                  {/* Digital Souvenir */}

                  <Button      description: 'Skip-the-line access to 60+ museums',

                    onClick={handleGetNFT}

                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"  // Weather icon helper      ecoFriendly: false,

                  >

                    <Gift className="w-4 h-4 mr-2" />  const getWeatherIcon = (condition: string) => {      savings: null,

                    Get Digital Souvenir

                  </Button>    switch (condition) {      available: true



                  {/* Chat for Help */}      case 'sunny': return <Sun className="w-5 h-5 text-yellow-500" />;    }

                  <Button

                    onClick={handleChatHelp}      case 'cloudy': return <Cloud className="w-5 h-5 text-gray-500" />;  ];

                    variant="outline"

                    className="w-full"      case 'rainy': return <CloudRain className="w-5 h-5 text-blue-500" />;

                  >

                    <MessageCircle className="w-4 h-4 mr-2" />      case 'snowy': return <Snowflake className="w-5 h-5 text-blue-200" />;  const mockChecklist = [

                    Chat for Help

                  </Button>      default: return <Sun className="w-5 h-5 text-yellow-500" />;    { id: 1, task: 'Pack passport', completed: false, category: 'documents' },

                </div>

              </Card>    }    { id: 2, task: 'Book airport transfer', completed: true, category: 'transport' },

            </div>

          </div>  };    { id: 3, task: 'Pack comfortable walking shoes', completed: false, category: 'clothing' },

        </motion.div>

    { id: 4, task: 'Download offline maps', completed: false, category: 'apps' },

        {/* Main Content Tabs */}

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">  // Event handlers    { id: 5, task: 'Notify bank of travel', completed: true, category: 'finance' },

          <TabsList className="grid grid-cols-4 max-w-md mx-auto">

            <TabsTrigger value="itinerary" className="text-xs md:text-sm">Itinerary</TabsTrigger>  const handleBooking = (type: string) => {    { id: 6, task: 'Pack portable charger', completed: false, category: 'electronics' },

            <TabsTrigger value="map" className="text-xs md:text-sm">Map</TabsTrigger>

            <TabsTrigger value="weather" className="text-xs md:text-sm">Weather</TabsTrigger>    navigate(`/trip/${id}/booking?type=${type}`);  ];

            <TabsTrigger value="checklist" className="text-xs md:text-sm">Checklist</TabsTrigger>

          </TabsList>  };



          {/* Itinerary Tab */}  const [checklistItems, setChecklistItems] = useState(mockChecklist);

          <TabsContent value="itinerary" className="space-y-6">

            <div className="flex flex-wrap gap-3 mb-6">  const handleSavePlan = () => {

              <Button

                variant="outline"    toast({  // Activity type configurations

                size="sm"

                onClick={() => setShowCustomize(true)}      title: 'Plan Saved! 💾',  const activityTypes = {

              >

                <Sliders className="w-4 h-4 mr-2" />      description: 'Your itinerary has been saved successfully.',    'sightseeing': { icon: Camera, color: 'text-blue-500', bg: 'bg-blue-100' },

                Customize

              </Button>    });    'food': { icon: Utensils, color: 'text-orange-500', bg: 'bg-orange-100' },

              <Button variant="outline" size="sm">

                <Edit className="w-4 h-4 mr-2" />  };    'nature': { icon: TreePine, color: 'text-green-500', bg: 'bg-green-100' },

                Edit Plan

              </Button>    'culture': { icon: Star, color: 'text-purple-500', bg: 'bg-purple-100' },

              <Button variant="outline" size="sm">

                <Plus className="w-4 h-4 mr-2" />  const handleSharePlan = (method: 'email' | 'pdf') => {    'relaxation': { icon: Coffee, color: 'text-amber-500', bg: 'bg-amber-100' },

                Add Activity

              </Button>    if (method === 'email') {    'adventure': { icon: Navigation, color: 'text-red-500', bg: 'bg-red-100' },

            </div>

      toast({  };

            {/* Day-by-Day Itinerary */}

            <div className="space-y-8">        title: 'Email Sent! 📧',

              {mockItinerary.map((day, dayIndex) => (

                <motion.div        description: 'Your itinerary has been sent to your email.',  // Weather icon helper

                  key={day.day}

                  initial={{ opacity: 0, y: 30 }}      });  const getWeatherIcon = (condition: string) => {

                  animate={{ opacity: 1, y: 0 }}

                  transition={{ delay: dayIndex * 0.1 }}    } else {    switch (condition) {

                >

                  <Card className="overflow-hidden">      toast({      case 'sunny': return <Sun className="w-5 h-5 text-yellow-500" />;

                    {/* Day Header */}

                    <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-4 border-b">        title: 'PDF Downloaded! 📄',      case 'cloudy': return <Cloud className="w-5 h-5 text-gray-500" />;

                      <div className="flex items-center justify-between">

                        <div>        description: 'Your itinerary PDF has been downloaded.',      case 'rainy': return <CloudRain className="w-5 h-5 text-blue-500" />;

                          <h2 className="text-xl font-bold">Day {day.day}</h2>

                          <p className="text-muted-foreground">{day.date}</p>      });      case 'snowy': return <Snowflake className="w-5 h-5 text-blue-200" />;

                        </div>

                        <div className="flex items-center gap-4">    }      default: return <Sun className="w-5 h-5 text-yellow-500" />;

                          <div className="flex items-center gap-2">

                            {getWeatherIcon(day.weather.condition)}  };    }

                            <span className="font-medium">{day.weather.temp}°F</span>

                            <span className="text-sm text-muted-foreground">  };

                              {day.weather.description}

                            </span>  const handleGetNFT = () => {

                          </div>

                          <Badge variant="outline">    toast({  // Event handlers

                            {day.activities.length} activities

                          </Badge>      title: 'Digital Souvenir Earned! 🎁',  const handleBooking = (type: string) => {

                        </div>

                      </div>      description: 'You\'ve received an exclusive Eiffel Tower NFT badge!',    navigate(`/trip/${id}/booking?type=${type}`);

                    </div>

    });  };

                    {/* Activities Timeline */}

                    <div className="p-4">  };

                      <div className="space-y-4">

                        {day.activities.map((activity, activityIndex) => {  const handleSavePlan = () => {

                          const IconComponent = activity.icon;

                          const typeConfig = activityTypes[activity.type as keyof typeof activityTypes];  const handleChatHelp = () => {    toast({

                          

                          return (    setShowChat(true);      title: 'Plan Saved! 💾',

                            <motion.div

                              key={activity.id}  };      description: 'Your itinerary has been saved successfully.',

                              initial={{ opacity: 0, x: -20 }}

                              animate={{ opacity: 1, x: 0 }}    });

                              transition={{ delay: activityIndex * 0.1 }}

                              className="flex gap-4 p-4 rounded-lg border hover:shadow-md transition-all duration-200 hover:border-primary/30"  const toggleChecklistItem = (itemId: number) => {  };

                            >

                              {/* Timeline */}    setChecklistItems(items =>

                              <div className="flex flex-col items-center">

                                <div className={`w-10 h-10 rounded-full ${typeConfig?.bg} flex items-center justify-center`}>      items.map(item =>  const handleSharePlan = (method: 'email' | 'pdf') => {

                                  <IconComponent className={`w-5 h-5 ${typeConfig?.color}`} />

                                </div>        item.id === itemId ? { ...item, completed: !item.completed } : item    if (method === 'email') {

                                {activityIndex < day.activities.length - 1 && (

                                  <div className="w-0.5 h-8 bg-border mt-2"></div>      )      toast({

                                )}

                              </div>    );        title: 'Email Sent! 📧',



                              {/* Activity Details */}  };        description: 'Your itinerary has been sent to your email.',

                              <div className="flex-1">

                                <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-2">      });

                                  <div className="flex-1">

                                    <div className="flex items-center gap-2 mb-1">  const handleEditActivity = (activity: any) => {    } else {

                                      <span className="font-bold text-primary">

                                        {activity.time}    setEditingActivity(activity);      toast({

                                      </span>

                                      {activity.endTime && (  };        title: 'PDF Downloaded! 📄',

                                        <span className="text-muted-foreground">

                                          - {activity.endTime}        description: 'Your itinerary PDF has been downloaded.',

                                        </span>

                                      )}  const handleUpdateActivity = () => {      });

                                      <Badge variant="outline" className="text-xs">

                                        {activity.duration}    toast({    }

                                      </Badge>

                                    </div>      title: 'Activity Updated! ✏️',  };

                                    <h3 className="font-semibold text-lg mb-1">

                                      {activity.title}      description: 'Your changes have been saved.',

                                    </h3>

                                    <p className="text-muted-foreground text-sm mb-2">    });  const handleGetNFT = () => {

                                      {activity.description}

                                    </p>    setEditingActivity(null);    toast({

                                    <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">

                                      <div className="flex items-center gap-1">  };      title: 'Digital Souvenir Earned! 🎁',

                                        <MapPin className="w-3 h-3" />

                                        {activity.location}      description: 'You\'ve received an exclusive Eiffel Tower NFT badge!',

                                      </div>

                                      {activity.source && (  return (    });

                                        <div className="flex items-center gap-1">

                                          <Instagram className="w-3 h-3" />    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5">  };

                                          {activity.source}

                                        </div>      {/* Header Navigation */}

                                      )}

                                    </div>      <div className="border-b border-border bg-card/80 backdrop-blur-xl sticky top-0 z-50">  const handleChatHelp = () => {

                                  </div>

        <div className="container mx-auto px-4 md:px-6 py-3 md:py-4">    setShowChat(true);

                                  <div className="flex flex-col items-end gap-2">

                                    <div className="flex items-center gap-2">          <div className="flex items-center justify-between">  };

                                      {activity.price > 0 && (

                                        <span className="font-bold text-lg">            <Button 

                                          ${activity.price}

                                        </span>              variant="ghost"   const toggleChecklistItem = (itemId: number) => {

                                      )}

                                      {activity.ecoFriendly && (              onClick={() => navigate('/')}    setChecklistItems(items =>

                                        <Badge className="bg-green-100 text-green-700 border-green-200 text-xs">

                                          <TreePine className="w-3 h-3 mr-1" />              className="hover:bg-primary/10 transition-colors"      items.map(item =>

                                          Eco

                                        </Badge>            >        item.id === itemId ? { ...item, completed: !item.completed } : item

                                      )}

                                    </div>              <ArrowLeft className="w-4 h-4 mr-2" />      )

                                    

                                    <div className="flex gap-1">              Back to Home    );

                                      {activity.bookable && (

                                        <Button size="sm" className="text-xs px-3">            </Button>  };

                                          <CreditCard className="w-3 h-3 mr-1" />

                                          Book            

                                        </Button>

                                      )}            <div className="flex items-center gap-2">  const handleEditActivity = (activity: any) => {

                                      <Button

                                        variant="outline"              <img     setEditingActivity(activity);

                                        size="sm"

                                        onClick={() => handleEditActivity(activity)}                src="/tripgenie.png"   };

                                        className="text-xs px-3"

                                      >                alt="TripGenie"

                                        <Edit className="w-3 h-3" />

                                      </Button>                className="h-6 md:h-8 w-auto"  const handleUpdateActivity = () => {

                                    </div>

                                  </div>              />    toast({

                                </div>

                              </div>              <span className="font-bold text-lg">Your Paris Adventure</span>      title: 'Activity Updated! ✏️',

                            </motion.div>

                          );            </div>      description: 'Your changes have been saved.',

                        })}

                      </div>    });

                    </div>

                  </Card>            <div className="flex items-center gap-2">    setEditingActivity(null);

                </motion.div>

              ))}              <Button variant="outline" size="sm" onClick={handleSavePlan}>  };

            </div>

          </TabsContent>                <Save className="w-4 h-4 mr-1 md:mr-2" />



          {/* Map Tab */}                <span className="hidden sm:inline">Save</span>  return (

          <TabsContent value="map">

            <Card className="p-6">              </Button>    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5">

              <div className="text-center">

                <MapIcon className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />              <Dialog>      {/* Header Navigation */}

                <h3 className="text-xl font-semibold mb-2">Interactive Map</h3>

                <p className="text-muted-foreground mb-4">                <DialogTrigger asChild>      <div className="border-b border-border bg-card/80 backdrop-blur-xl sticky top-0 z-50">

                  View all your destinations and activities on an interactive map

                </p>                  <Button variant="outline" size="sm">        <div className="container mx-auto px-4 md:px-6 py-3 md:py-4">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">

                  {mockItinerary.map(day =>                     <Share className="w-4 h-4 mr-1 md:mr-2" />          <div className="flex items-center justify-between">

                    day.activities.map(activity => (

                      <div key={activity.id} className="flex items-center gap-3 p-3 border rounded-lg">                    <span className="hidden sm:inline">Share</span>            <Button 

                        <div className="w-3 h-3 bg-primary rounded-full"></div>

                        <div>                  </Button>              variant="ghost" 

                          <p className="font-medium">{activity.title}</p>

                          <p className="text-sm text-muted-foreground">{activity.location}</p>                </DialogTrigger>              onClick={() => navigate('/')}

                        </div>

                      </div>                <DialogContent>              className="hover:bg-primary/10 transition-colors"

                    ))

                  )}                  <DialogHeader>            >

                </div>

              </div>                    <DialogTitle>Share Your Itinerary</DialogTitle>              <ArrowLeft className="w-4 h-4 mr-2" />

            </Card>

          </TabsContent>                    <DialogDescription>              Back to Home



          {/* Weather Tab */}                      Share your travel plan with friends or save it for later            </Button>

          <TabsContent value="weather">

            <Card className="p-6">                    </DialogDescription>            

              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">

                <Thermometer className="w-5 h-5 text-primary" />                  </DialogHeader>            <div className="flex items-center gap-2">

                5-Day Weather Forecast

              </h3>                  <div className="space-y-3">              <img 

              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">

                {mockItinerary.map(day => (                    <Button                 src="/tripgenie.png" 

                  <div key={day.day} className="text-center p-4 border rounded-lg">

                    <p className="font-semibold">Day {day.day}</p>                      onClick={() => handleSharePlan('email')}                alt="TripGenie"

                    <p className="text-sm text-muted-foreground mb-2">

                      {new Date(day.date).toLocaleDateString('en-US', { weekday: 'short' })}                      className="w-full"                className="h-6 md:h-8 w-auto"

                    </p>

                    <div className="flex justify-center mb-2">                    >              />

                      {getWeatherIcon(day.weather.condition)}

                    </div>                      <Mail className="w-4 h-4 mr-2" />              <span className="font-bold text-lg">Your Paris Adventure</span>

                    <p className="font-bold text-lg">{day.weather.temp}°F</p>

                    <p className="text-sm text-muted-foreground">{day.weather.description}</p>                      Send via Email            </div>

                  </div>

                ))}                    </Button>

              </div>

                                  <Button             <div className="flex items-center gap-2">

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">

                <div className="flex items-center gap-2 mb-2">                      onClick={() => handleSharePlan('pdf')}              <Button variant="outline" size="sm" onClick={handleSavePlan}>

                  <Umbrella className="w-5 h-5 text-blue-600" />

                  <span className="font-semibold text-blue-800">Weather Tips</span>                      variant="outline"                <Save className="w-4 h-4 mr-1 md:mr-2" />

                </div>

                <ul className="text-sm text-blue-700 space-y-1">                      className="w-full"                <span className="hidden sm:inline">Save</span>

                  <li>• Pack layers for changing temperatures</li>

                  <li>• Light rain expected on Day 3 - bring umbrella</li>                    >              </Button>

                  <li>• Perfect weather for outdoor activities on Days 1, 4, and 5</li>

                </ul>                      <FileText className="w-4 h-4 mr-2" />              <Dialog>

              </div>

            </Card>                      Download PDF                <DialogTrigger asChild>

          </TabsContent>

                    </Button>                  <Button variant="outline" size="sm">

          {/* Checklist Tab */}

          <TabsContent value="checklist">                  </div>                    <Share className="w-4 h-4 mr-1 md:mr-2" />

            <Card className="p-6">

              <div className="flex items-center justify-between mb-6">                </DialogContent>                    <span className="hidden sm:inline">Share</span>

                <h3 className="text-xl font-semibold flex items-center gap-2">

                  <CheckSquare className="w-5 h-5 text-primary" />              </Dialog>                  </Button>

                  Travel Checklist

                </h3>            </div>                </DialogTrigger>

                <div className="text-sm text-muted-foreground">

                  {checklistItems.filter(item => item.completed).length} of {checklistItems.length} completed          </div>                <DialogContent>

                </div>

              </div>        </div>                  <DialogHeader>



              <div className="space-y-3">      </div>                    <DialogTitle>Share Your Itinerary</DialogTitle>

                {checklistItems.map(item => (

                  <div                    <DialogDescription>

                    key={item.id}

                    className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors"      <div className="container mx-auto px-4 md:px-6 py-6 md:py-8">                      Share your travel plan with friends or save it for later

                  >

                    <button        {/* Trip Overview Header */}                    </DialogDescription>

                      onClick={() => toggleChecklistItem(item.id)}

                      className="flex-shrink-0"        <motion.div                  </DialogHeader>

                    >

                      {item.completed ? (          initial={{ opacity: 0, y: 30 }}                  <div className="space-y-3">

                        <CheckSquare className="w-5 h-5 text-green-600" />

                      ) : (          animate={{ opacity: 1, y: 0 }}                    <Button 

                        <Square className="w-5 h-5 text-muted-foreground" />

                      )}          className="mb-8"                      onClick={() => handleSharePlan('email')}

                    </button>

                    <span        >                      className="w-full"

                      className={`flex-1 ${

                        item.completed          <div className="flex flex-col lg:flex-row gap-6 mb-6">                    >

                          ? 'line-through text-muted-foreground'

                          : 'text-foreground'            {/* Left Section - Trip Info */}                      <Mail className="w-4 h-4 mr-2" />

                      }`}

                    >            <div className="flex-1">                      Send via Email

                      {item.task}

                    </span>              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient mb-4">                    </Button>

                    <Badge variant="outline" className="text-xs">

                      {item.category}                {mockTrip.destination}                    <Button 

                    </Badge>

                  </div>              </h1>                      onClick={() => handleSharePlan('pdf')}

                ))}

              </div>                                    variant="outline"



              <Button className="w-full mt-4" variant="outline">              <div className="flex flex-wrap gap-4 text-sm md:text-base text-muted-foreground mb-4">                      className="w-full"

                <Plus className="w-4 h-4 mr-2" />

                Add Custom Item                <div className="flex items-center gap-2">                    >

              </Button>

            </Card>                  <Calendar className="w-4 h-4 md:w-5 md:h-5 text-primary" />                      <FileText className="w-4 h-4 mr-2" />

          </TabsContent>

        </Tabs>                  <span>{mockTrip.duration} • Oct 15-20, 2025</span>                      Download PDF



        {/* Customization Dialog */}                </div>                    </Button>

        <Dialog open={showCustomize} onOpenChange={setShowCustomize}>

          <DialogContent>                <div className="flex items-center gap-2">                  </div>

            <DialogHeader>

              <DialogTitle>Customize Your Trip</DialogTitle>                  <DollarSign className="w-4 h-4 md:w-5 md:h-5 text-accent" />                </DialogContent>

              <DialogDescription>

                Adjust settings to personalize your travel experience                  <span>Budget: ${mockTrip.budget}</span>              </Dialog>

              </DialogDescription>

            </DialogHeader>                </div>            </div>

            <div className="space-y-6">

              <div>                <div className="flex items-center gap-2">          </div>

                <Label className="text-base font-semibold">Buffer Time Between Activities</Label>

                <p className="text-sm text-muted-foreground mb-3">                  <Footprints className="w-4 h-4 md:w-5 md:h-5 text-green-500" />        </div>

                  Add extra time between activities for a more relaxed pace

                </p>                  <span>Saves {mockTrip.carbonSavings}% emissions</span>      </div>

                <div className="space-y-2">

                  <Slider                </div>

                    value={[bufferTime]}

                    onValueChange={(value) => setBufferTime(value[0])}              </div>      <div className="container mx-auto px-4 md:px-6 py-6 md:py-8">

                    max={60}

                    min={0}        {/* Trip Overview Header */}

                    step={15}

                    className="w-full"              <div className="flex flex-wrap gap-2 mb-4">        <motion.div

                  />

                  <div className="flex justify-between text-sm text-muted-foreground">                <Badge className="bg-green-100 text-green-700 border-green-200">          initial={{ opacity: 0, y: 30 }}

                    <span>0 min</span>

                    <span className="font-medium">{bufferTime} minutes</span>                  <TreePine className="w-3 h-3 mr-1" />          animate={{ opacity: 1, y: 0 }}

                    <span>60 min</span>

                  </div>                  Eco-Friendly Trip          className="mb-8"

                </div>

              </div>                </Badge>        >

              

              <Button className="w-full">                <Badge variant="outline">          <div className="flex flex-col lg:flex-row gap-6 mb-6">

                <Check className="w-4 h-4 mr-2" />

                Apply Changes                  <Activity className="w-3 h-3 mr-1" />            {/* Left Section - Trip Info */}

              </Button>

            </div>                  {mockTrip.totalActivities} Activities            <div className="flex-1">

          </DialogContent>

        </Dialog>                </Badge>              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient mb-4">



        {/* Chat Dialog */}                <Badge variant="outline">                {mockTrip.destination}

        <Dialog open={showChat} onOpenChange={setShowChat}>

          <DialogContent>                  <Star className="w-3 h-3 mr-1" />              </h1>

            <DialogHeader>

              <DialogTitle>Chat for Help</DialogTitle>                  Personalized              

              <DialogDescription>

                Ask for tweaks or get recommendations for your trip                </Badge>              <div className="flex flex-wrap gap-4 text-sm md:text-base text-muted-foreground mb-4">

              </DialogDescription>

            </DialogHeader>              </div>                <div className="flex items-center gap-2">

            <div className="space-y-4">

              <div className="border rounded-lg p-4 h-64 overflow-y-auto bg-gray-50">                  <Calendar className="w-4 h-4 md:w-5 md:h-5 text-primary" />

                <div className="space-y-3">

                  <div className="bg-white p-3 rounded-lg">              {/* Carbon Impact Card */}                  <span>{mockTrip.duration} • Oct 15-20, 2025</span>

                    <p className="text-sm">Hi! How can I help you with your Paris trip? 🇫🇷</p>

                  </div>              <Card className="p-4 bg-green-50 border-green-200 mb-4">                </div>

                </div>

              </div>                <div className="flex items-center justify-between">                <div className="flex items-center gap-2">

              <div className="flex gap-2">

                <Input placeholder="Type your message... (e.g., 'Add a café')" className="flex-1" />                  <div className="flex items-center gap-2">                  <DollarSign className="w-4 h-4 md:w-5 md:h-5 text-accent" />

                <Button>Send</Button>

              </div>                    <Leaf className="w-5 h-5 text-green-600" />                  <span>Budget: ${mockTrip.budget}</span>

              <div className="flex flex-wrap gap-2">

                <Button variant="outline" size="sm">Add a café</Button>                    <div>                </div>

                <Button variant="outline" size="sm">Move hike to 9-11 AM</Button>

                <Button variant="outline" size="sm">Find vegan restaurants</Button>                      <p className="font-semibold text-green-800">                <div className="flex items-center gap-2">

              </div>

            </div>                        Saves {mockTrip.carbonSavings}% emissions                  <Footprints className="w-4 h-4 md:w-5 md:h-5 text-green-500" />

          </DialogContent>

        </Dialog>                      </p>                  <span>Saves {mockTrip.carbonSavings}% emissions</span>



        {/* Edit Activity Dialog */}                      <p className="text-sm text-green-600">                </div>

        <Dialog open={!!editingActivity} onOpenChange={() => setEditingActivity(null)}>

          <DialogContent>                        vs. traditional travel options              </div>

            <DialogHeader>

              <DialogTitle>Edit Activity</DialogTitle>                      </p>

              <DialogDescription>

                Modify the details of your activity                    </div>              <div className="flex flex-wrap gap-2 mb-4">

              </DialogDescription>

            </DialogHeader>                  </div>                <Badge className="bg-green-100 text-green-700 border-green-200">

            {editingActivity && (

              <div className="space-y-4">                  <Button size="sm" variant="outline" className="border-green-300">                  <TreePine className="w-3 h-3 mr-1" />

                <div>

                  <Label htmlFor="title">Activity Title</Label>                    <Wind className="w-4 h-4 mr-1" />                  Eco-Friendly Trip

                  <Input

                    id="title"                    Offset                </Badge>

                    value={editingActivity.title}

                    onChange={(e) =>                  </Button>                <Badge variant="outline">

                      setEditingActivity({ ...editingActivity, title: e.target.value })

                    }                </div>                  <Activity className="w-3 h-3 mr-1" />

                  />

                </div>              </Card>                  {mockTrip.totalActivities} Activities

                <div className="grid grid-cols-2 gap-4">

                  <div>            </div>                </Badge>

                    <Label htmlFor="startTime">Start Time</Label>

                    <Input                <Badge variant="outline">

                      id="startTime"

                      type="time"            {/* Right Section - Quick Actions */}                  <Star className="w-3 h-3 mr-1" />

                      value={editingActivity.time}

                      onChange={(e) =>            <div className="lg:w-80">                  Personalized

                        setEditingActivity({ ...editingActivity, time: e.target.value })

                      }              <Card className="p-4 bg-gradient-to-br from-primary/10 to-secondary/10">                </Badge>

                    />

                  </div>                <h3 className="font-semibold mb-4 flex items-center gap-2">              </div>

                  <div>

                    <Label htmlFor="endTime">End Time</Label>                  <Sparkles className="w-5 h-5 text-primary" />

                    <Input

                      id="endTime"                  Quick Actions              {/* Carbon Impact Card */}

                      type="time"

                      value={editingActivity.endTime}                </h3>              <Card className="p-4 bg-green-50 border-green-200 mb-4">

                      onChange={(e) =>

                        setEditingActivity({ ...editingActivity, endTime: e.target.value })                                <div className="flex items-center justify-between">

                      }

                    />                <div className="space-y-3">                  <div className="flex items-center gap-2">

                  </div>

                </div>                  {/* Booking Options */}                    <Leaf className="w-5 h-5 text-green-600" />

                <div>

                  <Label htmlFor="description">Description</Label>                  <div className="space-y-2">                    <div>

                  <Textarea

                    id="description"                    {mockBookingOptions.map((option, index) => (                      <p className="font-semibold text-green-800">

                    value={editingActivity.description}

                    onChange={(e) =>                      <Button                        Saves {mockTrip.carbonSavings}% emissions

                      setEditingActivity({ ...editingActivity, description: e.target.value })

                    }                        key={option.type}                      </p>

                  />

                </div>                        onClick={() => handleBooking(option.type)}                      <p className="text-sm text-green-600">

                <div className="flex gap-2">

                  <Button onClick={handleUpdateActivity} className="flex-1">                        className="w-full justify-between bg-white hover:bg-gray-50 text-black border"                        vs. traditional travel options

                    Save Changes

                  </Button>                        size="sm"                      </p>

                  <Button variant="outline" onClick={() => setEditingActivity(null)}>

                    Cancel                      >                    </div>

                  </Button>

                </div>                        <div className="flex items-center gap-2">                  </div>

              </div>

            )}                          {option.type === 'flight' && <Plane className="w-4 h-4" />}                  <Button size="sm" variant="outline" className="border-green-300">

          </DialogContent>

        </Dialog>                          {option.type === 'hotel' && <Hotel className="w-4 h-4" />}                    <Wind className="w-4 h-4 mr-1" />

      </div>

    </div>                          {option.type === 'tour' && <Ticket className="w-4 h-4" />}                    Offset

  );

};                          <div className="text-left">                  </Button>



export default TripView;                            <div className="font-medium text-sm">{option.title}</div>                </div>

                            <div className="text-xs text-muted-foreground">{option.description}</div>              </Card>

                          </div>            </div>

                        </div>

                        <div className="text-right">            {/* Right Section - Quick Actions */}

                          <div className="font-bold text-sm">${option.price}</div>            <div className="lg:w-80">

                          {option.ecoFriendly && (              <Card className="p-4 bg-gradient-to-br from-primary/10 to-secondary/10">

                            <div className="text-xs text-green-600">{option.savings}</div>                <h3 className="font-semibold mb-4 flex items-center gap-2">

                          )}                  <Sparkles className="w-5 h-5 text-primary" />

                        </div>                  Quick Actions

                      </Button>                </h3>

                    ))}                

                  </div>                <div className="space-y-3">

                  {/* Booking Options */}

                  <Separator />                  <div className="space-y-2">

                    {mockBookingOptions.map((option, index) => (

                  {/* Digital Souvenir */}                      <Button

                  <Button                        key={option.type}

                    onClick={handleGetNFT}                        onClick={() => handleBooking(option.type)}

                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"                        className="w-full justify-between bg-white hover:bg-gray-50 text-black border"

                  >                        size="sm"

                    <Gift className="w-4 h-4 mr-2" />                      >

                    Get Digital Souvenir                        <div className="flex items-center gap-2">

                  </Button>                          {option.type === 'flight' && <Plane className="w-4 h-4" />}

                          {option.type === 'hotel' && <Hotel className="w-4 h-4" />}

                  {/* Chat for Help */}                          {option.type === 'tour' && <Ticket className="w-4 h-4" />}

                  <Button                          <div className="text-left">

                    onClick={handleChatHelp}                            <div className="font-medium text-sm">{option.title}</div>

                    variant="outline"                            <div className="text-xs text-muted-foreground">{option.description}</div>

                    className="w-full"                          </div>

                  >                        </div>

                    <MessageCircle className="w-4 h-4 mr-2" />                        <div className="text-right">

                    Chat for Help                          <div className="font-bold text-sm">${option.price}</div>

                  </Button>                          {option.ecoFriendly && (

                </div>                            <div className="text-xs text-green-600">{option.savings}</div>

              </Card>                          )}

            </div>                        </div>

          </div>                      </Button>

        </motion.div>                    ))}

                  </div>

        {/* Main Content Tabs */}

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">                  <Separator />

          <TabsList className="grid grid-cols-4 max-w-md mx-auto">

            <TabsTrigger value="itinerary" className="text-xs md:text-sm">Itinerary</TabsTrigger>                  {/* Digital Souvenir */}

            <TabsTrigger value="map" className="text-xs md:text-sm">Map</TabsTrigger>                  <Button

            <TabsTrigger value="weather" className="text-xs md:text-sm">Weather</TabsTrigger>                    onClick={handleGetNFT}

            <TabsTrigger value="checklist" className="text-xs md:text-sm">Checklist</TabsTrigger>                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"

          </TabsList>                  >

                    <Gift className="w-4 h-4 mr-2" />

          {/* Itinerary Tab */}                    Get Digital Souvenir

          <TabsContent value="itinerary" className="space-y-6">                  </Button>

            <div className="flex flex-wrap gap-3 mb-6">

              <Button                  {/* Chat for Help */}

                variant="outline"                  <Button

                size="sm"                    onClick={handleChatHelp}

                onClick={() => setShowCustomize(true)}                    variant="outline"

              >                    className="w-full"

                <Sliders className="w-4 h-4 mr-2" />                  >

                Customize                    <MessageCircle className="w-4 h-4 mr-2" />

              </Button>                    Chat for Help

              <Button variant="outline" size="sm">                  </Button>

                <Edit className="w-4 h-4 mr-2" />                </div>

                Edit Plan              </Card>

              </Button>            </div>

              <Button variant="outline" size="sm">          </div>

                <Plus className="w-4 h-4 mr-2" />        </motion.div>

                Add Activity

              </Button>        {/* Main Content Tabs */}

            </div>        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">

          <TabsList className="grid grid-cols-4 max-w-md mx-auto">

            {/* Day-by-Day Itinerary */}            <TabsTrigger value="itinerary" className="text-xs md:text-sm">Itinerary</TabsTrigger>

            <div className="space-y-8">            <TabsTrigger value="map" className="text-xs md:text-sm">Map</TabsTrigger>

              {mockItinerary.map((day, dayIndex) => (            <TabsTrigger value="weather" className="text-xs md:text-sm">Weather</TabsTrigger>

                <motion.div            <TabsTrigger value="checklist" className="text-xs md:text-sm">Checklist</TabsTrigger>

                  key={day.day}          </TabsList>

                  initial={{ opacity: 0, y: 30 }}

                  animate={{ opacity: 1, y: 0 }}          {/* Itinerary Tab */}

                  transition={{ delay: dayIndex * 0.1 }}          <TabsContent value="itinerary" className="space-y-6">

                >            <div className="flex flex-wrap gap-3 mb-6">

                  <Card className="overflow-hidden">              <Button

                    {/* Day Header */}                variant="outline"

                    <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-4 border-b">                size="sm"

                      <div className="flex items-center justify-between">                onClick={() => setShowCustomize(true)}

                        <div>              >

                          <h2 className="text-xl font-bold">Day {day.day}</h2>                <Sliders className="w-4 h-4 mr-2" />

                          <p className="text-muted-foreground">{day.date}</p>                Customize

                        </div>              </Button>

                        <div className="flex items-center gap-4">              <Button variant="outline" size="sm">

                          <div className="flex items-center gap-2">                <Edit className="w-4 h-4 mr-2" />

                            {getWeatherIcon(day.weather.condition)}                Edit Plan

                            <span className="font-medium">{day.weather.temp}°F</span>              </Button>

                            <span className="text-sm text-muted-foreground">              <Button variant="outline" size="sm">

                              {day.weather.description}                <Plus className="w-4 h-4 mr-2" />

                            </span>                Add Activity

                          </div>              </Button>

                          <Badge variant="outline">            </div>

                            {day.activities.length} activities

                          </Badge>            {/* Day-by-Day Itinerary */}

                        </div>            <div className="space-y-8">

                      </div>              {mockItinerary.map((day, dayIndex) => (

                    </div>                <motion.div

                  key={day.day}

                    {/* Activities Timeline */}                  initial={{ opacity: 0, y: 30 }}

                    <div className="p-4">                  animate={{ opacity: 1, y: 0 }}

                      <div className="space-y-4">                  transition={{ delay: dayIndex * 0.1 }}

                        {day.activities.map((activity, activityIndex) => {                >

                          const IconComponent = activity.icon;                  <Card className="overflow-hidden">

                          const typeConfig = activityTypes[activity.type as keyof typeof activityTypes];                    {/* Day Header */}

                                              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-4 border-b">

                          return (                      <div className="flex items-center justify-between">

                            <motion.div                        <div>

                              key={activity.id}                          <h2 className="text-xl font-bold">Day {day.day}</h2>

                              initial={{ opacity: 0, x: -20 }}                          <p className="text-muted-foreground">{day.date}</p>

                              animate={{ opacity: 1, x: 0 }}                        </div>

                              transition={{ delay: activityIndex * 0.1 }}                        <div className="flex items-center gap-4">

                              className="flex gap-4 p-4 rounded-lg border hover:shadow-md transition-all duration-200 hover:border-primary/30"                          <div className="flex items-center gap-2">

                            >                            {getWeatherIcon(day.weather.condition)}

                              {/* Timeline */}                            <span className="font-medium">{day.weather.temp}°F</span>

                              <div className="flex flex-col items-center">                            <span className="text-sm text-muted-foreground">

                                <div className={`w-10 h-10 rounded-full ${typeConfig?.bg} flex items-center justify-center`}>                              {day.weather.description}

                                  <IconComponent className={`w-5 h-5 ${typeConfig?.color}`} />                            </span>

                                </div>                          </div>

                                {activityIndex < day.activities.length - 1 && (                          <Badge variant="outline">

                                  <div className="w-0.5 h-8 bg-border mt-2"></div>                            {day.activities.length} activities

                                )}                          </Badge>

                              </div>                        </div>

                      </div>

                              {/* Activity Details */}                    </div>

                              <div className="flex-1">

                                <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-2">                    {/* Activities Timeline */}

                                  <div className="flex-1">                    <div className="p-4">

                                    <div className="flex items-center gap-2 mb-1">                      <div className="space-y-4">

                                      <span className="font-bold text-primary">                        {day.activities.map((activity, activityIndex) => {

                                        {activity.time}                          const IconComponent = activity.icon;

                                      </span>                          const typeConfig = activityTypes[activity.type as keyof typeof activityTypes];

                                      {activity.endTime && (                          

                                        <span className="text-muted-foreground">                          return (

                                          - {activity.endTime}                            <motion.div

                                        </span>                              key={activity.id}

                                      )}                              initial={{ opacity: 0, x: -20 }}

                                      <Badge variant="outline" className="text-xs">                              animate={{ opacity: 1, x: 0 }}

                                        {activity.duration}                              transition={{ delay: activityIndex * 0.1 }}

                                      </Badge>                              className="flex gap-4 p-4 rounded-lg border hover:shadow-md transition-all duration-200 hover:border-primary/30"

                                    </div>                            >

                                    <h3 className="font-semibold text-lg mb-1">                              {/* Timeline */}

                                      {activity.title}                              <div className="flex flex-col items-center">

                                    </h3>                                <div className={`w-10 h-10 rounded-full ${typeConfig?.bg} flex items-center justify-center`}>

                                    <p className="text-muted-foreground text-sm mb-2">                                  <IconComponent className={`w-5 h-5 ${typeConfig?.color}`} />

                                      {activity.description}                                </div>

                                    </p>                                {activityIndex < day.activities.length - 1 && (

                                    <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">                                  <div className="w-0.5 h-8 bg-border mt-2"></div>

                                      <div className="flex items-center gap-1">                                )}

                                        <MapPin className="w-3 h-3" />                              </div>

                                        {activity.location}

                                      </div>                              {/* Activity Details */}

                                      {activity.source && (                              <div className="flex-1">

                                        <div className="flex items-center gap-1">                                <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-2">

                                          <Instagram className="w-3 h-3" />                                  <div className="flex-1">

                                          {activity.source}                                    <div className="flex items-center gap-2 mb-1">

                                        </div>                                      <span className="font-bold text-primary">

                                      )}                                        {activity.time}

                                    </div>                                      </span>

                                  </div>                                      {activity.endTime && (

                                        <span className="text-muted-foreground">

                                  <div className="flex flex-col items-end gap-2">                                          - {activity.endTime}

                                    <div className="flex items-center gap-2">                                        </span>

                                      {activity.price > 0 && (                                      )}

                                        <span className="font-bold text-lg">                                      <Badge variant="outline" className="text-xs">

                                          ${activity.price}                                        {activity.duration}

                                        </span>                                      </Badge>

                                      )}                                    </div>

                                      {activity.ecoFriendly && (                                    <h3 className="font-semibold text-lg mb-1">

                                        <Badge className="bg-green-100 text-green-700 border-green-200 text-xs">                                      {activity.title}

                                          <TreePine className="w-3 h-3 mr-1" />                                    </h3>

                                          Eco                                    <p className="text-muted-foreground text-sm mb-2">

                                        </Badge>                                      {activity.description}

                                      )}                                    </p>

                                    </div>                                    <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">

                                                                          <div className="flex items-center gap-1">

                                    <div className="flex gap-1">                                        <MapPin className="w-3 h-3" />

                                      {activity.bookable && (                                        {activity.location}

                                        <Button size="sm" className="text-xs px-3">                                      </div>

                                          <CreditCard className="w-3 h-3 mr-1" />                                      {activity.source && (

                                          Book                                        <div className="flex items-center gap-1">

                                        </Button>                                          <Instagram className="w-3 h-3" />

                                      )}                                          {activity.source}

                                      <Button                                        </div>

                                        variant="outline"                                      )}

                                        size="sm"                                    </div>

                                        onClick={() => handleEditActivity(activity)}                                  </div>

                                        className="text-xs px-3"

                                      >                                  <div className="flex flex-col items-end gap-2">

                                        <Edit className="w-3 h-3" />                                    <div className="flex items-center gap-2">

                                      </Button>                                      {activity.price > 0 && (

                                    </div>                                        <span className="font-bold text-lg">

                                  </div>                                          ${activity.price}

                                </div>                                        </span>

                              </div>                                      )}

                            </motion.div>                                      {activity.ecoFriendly && (

                          );                                        <Badge className="bg-green-100 text-green-700 border-green-200 text-xs">

                        })}                                          <TreePine className="w-3 h-3 mr-1" />

                      </div>                                          Eco

                    </div>                                        </Badge>

                  </Card>                                      )}

                </motion.div>                                    </div>

              ))}                                    

            </div>                                    <div className="flex gap-1">

          </TabsContent>                                      {activity.bookable && (

                                        <Button size="sm" className="text-xs px-3">

          {/* Map Tab */}                                          <CreditCard className="w-3 h-3 mr-1" />

          <TabsContent value="map">                                          Book

            <Card className="p-6">                                        </Button>

              <div className="text-center">                                      )}

                <MapIcon className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />                                      <Button

                <h3 className="text-xl font-semibold mb-2">Interactive Map</h3>                                        variant="outline"

                <p className="text-muted-foreground mb-4">                                        size="sm"

                  View all your destinations and activities on an interactive map                                        onClick={() => handleEditActivity(activity)}

                </p>                                        className="text-xs px-3"

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">                                      >

                  {mockItinerary.map(day =>                                         <Edit className="w-3 h-3" />

                    day.activities.map(activity => (                                      </Button>

                      <div key={activity.id} className="flex items-center gap-3 p-3 border rounded-lg">                                    </div>

                        <div className="w-3 h-3 bg-primary rounded-full"></div>                                  </div>

                        <div>                                </div>

                          <p className="font-medium">{activity.title}</p>                              </div>

                          <p className="text-sm text-muted-foreground">{activity.location}</p>                            </motion.div>

                        </div>                          );

                      </div>                        })}

                    ))                      </div>

                  )}                    </div>

                </div>                  </Card>

              </div>                </motion.div>

            </Card>              ))}

          </TabsContent>            </div>

          </TabsContent>

          {/* Weather Tab */}

          <TabsContent value="weather">          {/* Map Tab */}

            <Card className="p-6">          <TabsContent value="map">

              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">            <Card className="p-6">

                <Thermometer className="w-5 h-5 text-primary" />              <div className="text-center">

                5-Day Weather Forecast                <MapIcon className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />

              </h3>                <h3 className="text-xl font-semibold mb-2">Interactive Map</h3>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">                <p className="text-muted-foreground mb-4">

                {mockItinerary.map(day => (                  View all your destinations and activities on an interactive map

                  <div key={day.day} className="text-center p-4 border rounded-lg">                </p>

                    <p className="font-semibold">Day {day.day}</p>                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">

                    <p className="text-sm text-muted-foreground mb-2">                  {mockItinerary.map(day => 

                      {new Date(day.date).toLocaleDateString('en-US', { weekday: 'short' })}                    day.activities.map(activity => (

                    </p>                      <div key={activity.id} className="flex items-center gap-3 p-3 border rounded-lg">

                    <div className="flex justify-center mb-2">                        <div className="w-3 h-3 bg-primary rounded-full"></div>

                      {getWeatherIcon(day.weather.condition)}                        <div>

                    </div>                          <p className="font-medium">{activity.title}</p>

                    <p className="font-bold text-lg">{day.weather.temp}°F</p>                          <p className="text-sm text-muted-foreground">{activity.location}</p>

                    <p className="text-sm text-muted-foreground">{day.weather.description}</p>                        </div>

                  </div>                      </div>

                ))}                    ))

              </div>                  )}

                              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">              </div>

                <div className="flex items-center gap-2 mb-2">            </Card>

                  <Umbrella className="w-5 h-5 text-blue-600" />          </TabsContent>

                  <span className="font-semibold text-blue-800">Weather Tips</span>

                </div>          {/* Weather Tab */}

                <ul className="text-sm text-blue-700 space-y-1">          <TabsContent value="weather">

                  <li>• Pack layers for changing temperatures</li>            <Card className="p-6">

                  <li>• Light rain expected on Day 3 - bring umbrella</li>              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">

                  <li>• Perfect weather for outdoor activities on Days 1, 4, and 5</li>                <Thermometer className="w-5 h-5 text-primary" />

                </ul>                5-Day Weather Forecast

              </div>              </h3>

            </Card>              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">

          </TabsContent>                {mockItinerary.map(day => (

                  <div key={day.day} className="text-center p-4 border rounded-lg">

          {/* Checklist Tab */}                    <p className="font-semibold">Day {day.day}</p>

          <TabsContent value="checklist">                    <p className="text-sm text-muted-foreground mb-2">

            <Card className="p-6">                      {new Date(day.date).toLocaleDateString('en-US', { weekday: 'short' })}

              <div className="flex items-center justify-between mb-6">                    </p>

                <h3 className="text-xl font-semibold flex items-center gap-2">                    <div className="flex justify-center mb-2">

                  <CheckSquare className="w-5 h-5 text-primary" />                      {getWeatherIcon(day.weather.condition)}

                  Travel Checklist                    </div>

                </h3>                    <p className="font-bold text-lg">{day.weather.temp}°F</p>

                <div className="text-sm text-muted-foreground">                    <p className="text-sm text-muted-foreground">{day.weather.description}</p>

                  {checklistItems.filter(item => item.completed).length} of {checklistItems.length} completed                  </div>

                </div>                ))}

              </div>              </div>

              

              <div className="space-y-3">              <div className="mt-6 p-4 bg-blue-50 rounded-lg">

                {checklistItems.map(item => (                <div className="flex items-center gap-2 mb-2">

                  <div                  <Umbrella className="w-5 h-5 text-blue-600" />

                    key={item.id}                  <span className="font-semibold text-blue-800">Weather Tips</span>

                    className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors"                </div>

                  >                <ul className="text-sm text-blue-700 space-y-1">

                    <button                  <li>• Pack layers for changing temperatures</li>

                      onClick={() => toggleChecklistItem(item.id)}                  <li>• Light rain expected on Day 3 - bring umbrella</li>

                      className="flex-shrink-0"                  <li>• Perfect weather for outdoor activities on Days 1, 4, and 5</li>

                    >                </ul>

                      {item.completed ? (              </div>

                        <CheckSquare className="w-5 h-5 text-green-600" />            </Card>

                      ) : (          </TabsContent>

                        <Square className="w-5 h-5 text-muted-foreground" />

                      )}          {/* Checklist Tab */}

                    </button>          <TabsContent value="checklist">

                    <span            <Card className="p-6">

                      className={`flex-1 ${              <div className="flex items-center justify-between mb-6">

                        item.completed                <h3 className="text-xl font-semibold flex items-center gap-2">

                          ? 'line-through text-muted-foreground'                  <CheckSquare className="w-5 h-5 text-primary" />

                          : 'text-foreground'                  Travel Checklist

                      }`}                </h3>

                    >                <div className="text-sm text-muted-foreground">

                      {item.task}                  {checklistItems.filter(item => item.completed).length} of {checklistItems.length} completed

                    </span>                </div>

                    <Badge variant="outline" className="text-xs">              </div>

                      {item.category}

                    </Badge>              <div className="space-y-3">

                  </div>                {checklistItems.map(item => (

                ))}                  <div

              </div>                    key={item.id}

                    className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors"

              <Button className="w-full mt-4" variant="outline">                  >

                <Plus className="w-4 h-4 mr-2" />                    <button

                Add Custom Item                      onClick={() => toggleChecklistItem(item.id)}

              </Button>                      className="flex-shrink-0"

            </Card>                    >

          </TabsContent>                      {item.completed ? (

        </Tabs>                        <CheckSquare className="w-5 h-5 text-green-600" />

                      ) : (

        {/* Customization Dialog */}                        <Square className="w-5 h-5 text-muted-foreground" />

        <Dialog open={showCustomize} onOpenChange={setShowCustomize}>                      )}

          <DialogContent>                    </button>

            <DialogHeader>                    <span

              <DialogTitle>Customize Your Trip</DialogTitle>                      className={`flex-1 ${

              <DialogDescription>                        item.completed

                Adjust settings to personalize your travel experience                          ? 'line-through text-muted-foreground'

              </DialogDescription>                          : 'text-foreground'

            </DialogHeader>                      }`}

            <div className="space-y-6">                    >

              <div>                      {item.task}

                <Label className="text-base font-semibold">Buffer Time Between Activities</Label>                    </span>

                <p className="text-sm text-muted-foreground mb-3">                    <Badge variant="outline" className="text-xs">

                  Add extra time between activities for a more relaxed pace                      {item.category}

                </p>                    </Badge>

                <div className="space-y-2">                  </div>

                  <Slider                ))}

                    value={[bufferTime]}              </div>

                    onValueChange={(value) => setBufferTime(value[0])}

                    max={60}              <Button className="w-full mt-4" variant="outline">

                    min={0}                <Plus className="w-4 h-4 mr-2" />

                    step={15}                Add Custom Item

                    className="w-full"              </Button>

                  />            </Card>

                  <div className="flex justify-between text-sm text-muted-foreground">          </TabsContent>

                    <span>0 min</span>        </Tabs>

                    <span className="font-medium">{bufferTime} minutes</span>

                    <span>60 min</span>        {/* Customization Dialog */}

                  </div>        <Dialog open={showCustomize} onOpenChange={setShowCustomize}>

                </div>          <DialogContent>

              </div>            <DialogHeader>

                            <DialogTitle>Customize Your Trip</DialogTitle>

              <Button className="w-full">              <DialogDescription>

                <Check className="w-4 h-4 mr-2" />                Adjust settings to personalize your travel experience

                Apply Changes              </DialogDescription>

              </Button>            </DialogHeader>

            </div>            <div className="space-y-6">

          </DialogContent>              <div>

        </Dialog>                <Label className="text-base font-semibold">Buffer Time Between Activities</Label>

                <p className="text-sm text-muted-foreground mb-3">

        {/* Chat Dialog */}                  Add extra time between activities for a more relaxed pace

        <Dialog open={showChat} onOpenChange={setShowChat}>                </p>

          <DialogContent>                <div className="space-y-2">

            <DialogHeader>                  <Slider

              <DialogTitle>Chat for Help</DialogTitle>                    value={[bufferTime]}

              <DialogDescription>                    onValueChange={(value) => setBufferTime(value[0])}

                Ask for tweaks or get recommendations for your trip                    max={60}

              </DialogDescription>                    min={0}

            </DialogHeader>                    step={15}

            <div className="space-y-4">                    className="w-full"

              <div className="border rounded-lg p-4 h-64 overflow-y-auto bg-gray-50">                  />

                <div className="space-y-3">                  <div className="flex justify-between text-sm text-muted-foreground">

                  <div className="bg-white p-3 rounded-lg">                    <span>0 min</span>

                    <p className="text-sm">Hi! How can I help you with your Paris trip? 🇫🇷</p>                    <span className="font-medium">{bufferTime} minutes</span>

                  </div>                    <span>60 min</span>

                </div>                  </div>

              </div>                </div>

              <div className="flex gap-2">              </div>

                <Input placeholder="Type your message... (e.g., 'Add a café')" className="flex-1" />              

                <Button>Send</Button>              <Button className="w-full">

              </div>                <Check className="w-4 h-4 mr-2" />

              <div className="flex flex-wrap gap-2">                Apply Changes

                <Button variant="outline" size="sm">Add a café</Button>              </Button>

                <Button variant="outline" size="sm">Move hike to 9-11 AM</Button>            </div>

                <Button variant="outline" size="sm">Find vegan restaurants</Button>          </DialogContent>

              </div>        </Dialog>

            </div>

          </DialogContent>        {/* Chat Dialog */}

        </Dialog>        <Dialog open={showChat} onOpenChange={setShowChat}>

          <DialogContent>

        {/* Edit Activity Dialog */}            <DialogHeader>

        <Dialog open={!!editingActivity} onOpenChange={() => setEditingActivity(null)}>              <DialogTitle>Chat for Help</DialogTitle>

          <DialogContent>              <DialogDescription>

            <DialogHeader>                Ask for tweaks or get recommendations for your trip

              <DialogTitle>Edit Activity</DialogTitle>              </DialogDescription>

              <DialogDescription>            </DialogHeader>

                Modify the details of your activity            <div className="space-y-4">

              </DialogDescription>              <div className="border rounded-lg p-4 h-64 overflow-y-auto bg-gray-50">

            </DialogHeader>                <div className="space-y-3">

            {editingActivity && (                  <div className="bg-white p-3 rounded-lg">

              <div className="space-y-4">                    <p className="text-sm">Hi! How can I help you with your Paris trip? 🇫🇷</p>

                <div>                  </div>

                  <Label htmlFor="title">Activity Title</Label>                </div>

                  <Input              </div>

                    id="title"              <div className="flex gap-2">

                    value={editingActivity.title}                <Input placeholder="Type your message... (e.g., 'Add a café')" className="flex-1" />

                    onChange={(e) =>                <Button>Send</Button>

                      setEditingActivity({ ...editingActivity, title: e.target.value })              </div>

                    }              <div className="flex flex-wrap gap-2">

                  />                <Button variant="outline" size="sm">Add a café</Button>

                </div>                <Button variant="outline" size="sm">Move hike to 9-11 AM</Button>

                <div className="grid grid-cols-2 gap-4">                <Button variant="outline" size="sm">Find vegan restaurants</Button>

                  <div>              </div>

                    <Label htmlFor="startTime">Start Time</Label>            </div>

                    <Input          </DialogContent>

                      id="startTime"        </Dialog>

                      type="time"

                      value={editingActivity.time}        {/* Edit Activity Dialog */}

                      onChange={(e) =>        <Dialog open={!!editingActivity} onOpenChange={() => setEditingActivity(null)}>

                        setEditingActivity({ ...editingActivity, time: e.target.value })          <DialogContent>

                      }            <DialogHeader>

                    />              <DialogTitle>Edit Activity</DialogTitle>

                  </div>              <DialogDescription>

                  <div>                Modify the details of your activity

                    <Label htmlFor="endTime">End Time</Label>              </DialogDescription>

                    <Input            </DialogHeader>

                      id="endTime"            {editingActivity && (

                      type="time"              <div className="space-y-4">

                      value={editingActivity.endTime}                <div>

                      onChange={(e) =>                  <Label htmlFor="title">Activity Title</Label>

                        setEditingActivity({ ...editingActivity, endTime: e.target.value })                  <Input

                      }                    id="title"

                    />                    value={editingActivity.title}

                  </div>                    onChange={(e) =>

                </div>                      setEditingActivity({ ...editingActivity, title: e.target.value })

                <div>                    }

                  <Label htmlFor="description">Description</Label>                  />

                  <Textarea                </div>

                    id="description"                <div className="grid grid-cols-2 gap-4">

                    value={editingActivity.description}                  <div>

                    onChange={(e) =>                    <Label htmlFor="startTime">Start Time</Label>

                      setEditingActivity({ ...editingActivity, description: e.target.value })                    <Input

                    }                      id="startTime"

                  />                      type="time"

                </div>                      value={editingActivity.time}

                <div className="flex gap-2">                      onChange={(e) =>

                  <Button onClick={handleUpdateActivity} className="flex-1">                        setEditingActivity({ ...editingActivity, time: e.target.value })

                    Save Changes                      }

                  </Button>                    />

                  <Button variant="outline" onClick={() => setEditingActivity(null)}>                  </div>

                    Cancel                  <div>

                  </Button>                    <Label htmlFor="endTime">End Time</Label>

                </div>                    <Input

              </div>                      id="endTime"

            )}                      type="time"

          </DialogContent>                      value={editingActivity.endTime}

        </Dialog>                      onChange={(e) =>

      </div>                        setEditingActivity({ ...editingActivity, endTime: e.target.value })

    </div>                      }

  );                    />

};                  </div>

                </div>

export default TripView;                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={editingActivity.description}
                    onChange={(e) =>
                      setEditingActivity({ ...editingActivity, description: e.target.value })
                    }
                  />
                </div>
                <div className="flex gap-2">
                  <Button onClick={handleUpdateActivity} className="flex-1">
                    Save Changes
                  </Button>
                  <Button variant="outline" onClick={() => setEditingActivity(null)}>
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

export default TripView;
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