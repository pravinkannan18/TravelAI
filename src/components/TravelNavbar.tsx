import { Home } from 'lucide-react'
import { FaPlane } from 'react-icons/fa'
import { MdSmartToy } from 'react-icons/md'
import { TubelightNavbar } from "@/components/ui/tubelight-navbar"

export function TravelNavbar() {
  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'Plan Trip', url: '/plan-trip', icon: FaPlane },
    { name: 'AI Chat', url: '/chat', icon: MdSmartToy },
  ]

  return <TubelightNavbar items={navItems} className="sm:top-4" />
}