"use client"
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrophyIcon, MenuIcon, BellIcon, UsersIcon, GlobeIcon, AwardIcon, RocketIcon } from 'lucide-react'

const TeamMemberCard = ({ name, role, avatar }) => (
  <Card>
    <CardContent className="flex flex-col items-center p-6">
      <img src={avatar} alt={name} className="w-24 h-24 rounded-full mb-4" />
      <h3 className="text-xl font-semibold mb-1">{name}</h3>
      <p className="text-sm text-gray-600">{role}</p>
    </CardContent>
  </Card>
)

export default function Component() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const currentUser = {
    name: "John Doe",
    avatar: "https://placehold.co/32"
  }

  const teamMembers = [
    { name: "Alice Johnson", role: "CEO & Founder", avatar: "https://s2.qwant.com/thumbr/474x417/5/0/90a63c3369a9a84a5cee695b2aaf49eaf7c10c1cd97fe7859a3f408952870e/th.jpg?u=https%3A%2F%2Ftse.mm.bing.net%2Fth%3Fid%3DOIP.Z9Ck1jnIrBwep8KH3FEDNwHaGh%26pid%3DApi&q=0&b=1&p=0&a=0" },
    { name: "Bob Smith", role: "CTO", avatar: "https://s2.qwant.com/thumbr/474x417/5/0/90a63c3369a9a84a5cee695b2aaf49eaf7c10c1cd97fe7859a3f408952870e/th.jpg?u=https%3A%2F%2Ftse.mm.bing.net%2Fth%3Fid%3DOIP.Z9Ck1jnIrBwep8KH3FEDNwHaGh%26pid%3DApi&q=0&b=1&p=0&a=0" },
    { name: "Charlie Brown", role: "Head of Operations", avatar: "https://s2.qwant.com/thumbr/474x417/5/0/90a63c3369a9a84a5cee695b2aaf49eaf7c10c1cd97fe7859a3f408952870e/th.jpg?u=https%3A%2F%2Ftse.mm.bing.net%2Fth%3Fid%3DOIP.Z9Ck1jnIrBwep8KH3FEDNwHaGh%26pid%3DApi&q=0&b=1&p=0&a=0" },
    { name: "Diana Prince", role: "Lead Designer", avatar: "https://s2.qwant.com/thumbr/474x417/5/0/90a63c3369a9a84a5cee695b2aaf49eaf7c10c1cd97fe7859a3f408952870e/th.jpg?u=https%3A%2F%2Ftse.mm.bing.net%2Fth%3Fid%3DOIP.Z9Ck1jnIrBwep8KH3FEDNwHaGh%26pid%3DApi&q=0&b=1&p=0&a=0" },
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
            <div className="flex items-center space-x-2">
              <img src={currentUser.avatar} alt={currentUser.name} className="w-8 h-8 rounded-full" />
              <span className="text-sm font-medium hidden md:inline-block">{currentUser.name}</span>
            </div>
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
        <h1 className="text-4xl font-bold mb-8 text-center">Qui sommes-nous</h1>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Notre Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              {`Chez start.gg, notre mission est de créer la meilleure plateforme pour les tournois d'esports et les communautés de jeux. 
              Nous croyons en la puissance du jeu pour rassembler les gens, favoriser la compétition saine et créer des opportunités pour les joueurs du monde entier.`}
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="flex flex-col items-center p-6">
              <UsersIcon className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Communauté</h3>
              <p className="text-center text-gray-600">Nous construisons une communauté mondiale de joueurs passionnés.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center p-6">
              <AwardIcon className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Compétition</h3>
              <p className="text-center text-gray-600">Nous facilitons des tournois de classe mondiale pour tous les niveaux de jeu.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center p-6">
              <RocketIcon className="h-12 w-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-center text-gray-600">Nous repoussons constamment les limites de la technologie esports.</p>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Notre Équipe</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <TeamMemberCard key={index} {...member} />
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Notre Histoire</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
               {`Fondée en 2015, start.gg a commencé comme une petite startup avec une grande vision : révolutionner l'organisation des tournois d'esports. 
              Au fil des ans, nous avons grandi pour devenir la plateforme de référence pour les organisateurs de tournois et les joueurs du monde entier. `}
            </p>
            <p className="text-gray-600">
              {`Aujourd'hui, nous continuons à innover et à étendre nos services, toujours guidés par notre passion pour les jeux et notre engagement envers notre communauté.`}
            </p>
          </CardContent>
        </Card>
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