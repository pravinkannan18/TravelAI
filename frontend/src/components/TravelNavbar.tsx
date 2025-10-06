import { Home, Users, User, MapPin, ShoppingCart, MessageCircle } from 'lucide-react'
import { FaPlane } from 'react-icons/fa'
import { MdSmartToy } from 'react-icons/md'
import { TubelightNavbar } from "@/components/ui/tubelight-navbar"

export function TravelNavbar() {
  const navItems = [
    { name: 'Home', url: '/', icon: Home, description: 'Start Your Journey' },
    { name: 'Plan Trip', url: '/plan-trip', icon: FaPlane, description: 'Create Itinerary' },
    { name: 'My Trips', url: '/profile', icon: MapPin, description: 'View & Manage' },
    { name: 'Book Now', url: '/booking', icon: ShoppingCart, description: 'Secure Booking' },
    { name: 'Local Guides', url: '/local-guides', icon: Users, description: 'Expert Guides' },
    { name: 'AI Assistant', url: '/chat', icon: MessageCircle, description: 'Get Help' },
  ]

  return <TubelightNavbar items={navItems} className="sm:top-4" />
}