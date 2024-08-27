"use client"
import { useState,FormEvent } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { 
  TrophyIcon, MenuIcon, BellIcon, CalendarIcon, MapPinIcon, 
  UsersIcon, UploadIcon, UserIcon, SettingsIcon, 
  LogOutIcon, ChevronDownIcon
} from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Component() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [tournamentType, setTournamentType] = useState('online')

  const currentUser = {
    name: "John Doe",
    avatar: "/placeholder.svg?height=32&width=32"
  }


const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  // Handle form submission here
  console.log('Form submitted');
}

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-gray-800 shadow-md text-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-bold flex items-center">
            <TrophyIcon className="mr-2 h-5 w-5 md:h-6 md:w-6" />
            start.gg
          </h1>
          <nav className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-white hover:text-gray-200">Home</Button>
            <Button variant="ghost" className="text-white hover:text-gray-200">Tournaments</Button>
            <Button variant="ghost" className="text-white hover:text-gray-200">Games</Button>
            <Button variant="ghost" className="text-white hover:text-gray-200">About</Button>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="relative p-2">
              <BellIcon className="h-6 w-6" />
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-2">
                  <img src={currentUser.avatar} alt={currentUser.name} className="w-8 h-8 rounded-full" />
                  <span className="text-sm font-medium hidden md:inline-block">{currentUser.name}</span>
                  <ChevronDownIcon className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end">
                <DropdownMenuLabel>Mon Compte</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <UserIcon className="mr-2 h-4 w-4" />
                  <span>Profil</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <SettingsIcon className="mr-2 h-4 w-4" />
                  <span>Paramètres</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <TrophyIcon className="mr-2 h-4 w-4" />
                  <span>Mes Tournois</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOutIcon className="mr-2 h-4 w-4" />
                  <span>Déconnexion</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <Button variant="ghost" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <MenuIcon className="h-6 w-6" />
          </Button>
        </div>
        {mobileMenuOpen && (
          <nav className="md:hidden">
            <ul className="flex flex-col space-y-2 px-4 py-2">
              <li><Button variant="ghost" className="w-full text-left text-white hover:text-gray-200">Home</Button></li>
              <li><Button variant="ghost" className="w-full text-left text-white hover:text-gray-200">Tournaments</Button></li>
              <li><Button variant="ghost" className="w-full text-left text-white hover:text-gray-200">Games</Button></li>
              <li><Button variant="ghost" className="w-full text-left text-white hover:text-gray-200">About</Button></li>
            </ul>
          </nav>
        )}
      </header>

      {/* Le reste du composant reste inchangé */}

    </div>
  )
}