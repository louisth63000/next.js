"use client"
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { 
  TrophyIcon, MenuIcon, BellIcon, UserIcon, SettingsIcon, 
  LogOutIcon, ChevronDownIcon, CheckIcon
} from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const PlanCard = ({ title, price, features, recommended = false }) => (
  <Card className={`flex flex-col ${recommended ? 'border-blue-500 border-2' : ''}`}>
    <CardHeader>
      <CardTitle className="text-2xl">{title}</CardTitle>
      <CardDescription>
        {price === 0 ? (
          <span className="text-3xl font-bold">Gratuit</span>
        ) : (
          <><span className="text-3xl font-bold">${price}</span> / mois</>
        )}
      </CardDescription>
    </CardHeader>
    <CardContent className="flex-grow">
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
            {feature}
          </li>
        ))}
      </ul>
    </CardContent>
    <Button className={`mt-4 ${recommended ? 'bg-blue-500 hover:bg-blue-600' : ''}`}>
      {price === 0 ? 'Commencer gratuitement' : 'Choisir ce plan'}
    </Button>
  </Card>
)

export default function Component() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const currentUser = {
    name: "John Doe",
    avatar: "https://placehold.co/32x32"
  }

  const plans = [
    {
      title: "Free",
      price: 0,
      features: [
        "Participation à 1 tournoi par mois",
        "Accès aux statistiques de base",
        "Support communautaire"
      ]
    },
    {
      title: "Basic",
      price: 9.99,
      features: [
        "Participation à 5 tournois par mois",
        "Accès aux statistiques de base",
        "Support par email"
      ]
    },
    {
      title: "Pro",
      price: 19.99,
      features: [
        "Participation illimitée aux tournois",
        "Statistiques avancées",
        "Support prioritaire",
        "Badge Pro sur le profil"
      ],
      recommended: true
    }
  ]

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

      <main className="container mx-auto px-4 py-8 flex-grow">
        <h1 className="text-3xl font-bold mb-8 text-center">Choisissez votre plan</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PlanCard key={index} {...plan} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-4">{`Vous n'êtes pas sûr ?`}</h2>
          <p className="text-gray-600 mb-4">Comparez les fonctionnalités de chaque plan pour trouver celui qui vous convient le mieux.</p>
          <Button variant="outline">Voir la comparaison détaillée des plans</Button>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <h3 className="font-bold mb-4">start.gg</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Create Tournament</a></li>
              <li><a href="#" className="hover:underline">Submit Ranking</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Discover</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Tournaments</a></li>
              <li><a href="#" className="hover:underline">Results</a></li>
              <li><a href="#" className="hover:underline">Rankings</a></li>
              <li><a href="#" className="hover:underline">Shops</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Social</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Twitter</a></li>
              <li><a href="#" className="hover:underline">Facebook</a></li>
              <li><a href="#" className="hover:underline">YouTube</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Help</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Help Center</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
              <li><a href="#" className="hover:underline">Schedule a Demo</a></li>
              <li><a href="#" className="hover:underline">ggUniversity</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}