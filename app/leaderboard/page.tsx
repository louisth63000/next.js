"use client"
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { CalendarIcon, MapPinIcon, UsersIcon, TrophyIcon, MenuIcon, SearchIcon, FilterIcon, ChevronUpIcon, CoinsIcon, BellIcon } from 'lucide-react'

const PlayerRankCard = ({ rank, name, score, avatar, cryptoGain }) => (
  <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow">
    <div className="text-2xl font-bold w-8 text-center">{rank}</div>
    <img src={avatar} alt={name} className="w-12 h-12 rounded-full" />
    <div className="flex-grow">
      <h3 className="font-semibold">{name}</h3>
    </div>
    <div className="text-right">
      <div className="text-xl font-bold">{score}</div>
      <div className="text-sm text-green-600 flex items-center">
        <CoinsIcon className="w-4 h-4 mr-1" />
        {cryptoGain}
      </div>
    </div>
  </div>
)

const PersonalRankCard = ({ rank, name, score, avatar, change, cryptoGain }) => (
  <div className="flex items-center space-x-4 p-6 bg-blue-50 rounded-lg shadow border border-blue-200">
    <div className="text-3xl font-bold w-12 text-center">{rank}</div>
    <img src={avatar} alt={name} className="w-16 h-16 rounded-full" />
    <div className="flex-grow">
      <h3 className="font-semibold text-xl">{name}</h3>
      <p className="text-gray-600">Your Ranking</p>
    </div>
    <div className="text-right">
      <div className="text-2xl font-bold">{score}</div>
      <div className="flex items-center text-green-600">
        <ChevronUpIcon className="w-4 h-4 mr-1" />
        {change}
      </div>
      <div className="text-sm text-green-600 flex items-center justify-end mt-1">
        <CoinsIcon className="w-4 h-4 mr-1" />
        {cryptoGain}
      </div>
    </div>
  </div>
)

export default function Component() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const currentUser = {
    name: "John Doe",
    avatar: "https://placehold.co/32"
  }

  const personalRank = { rank: 42, name: "YourUsername", score: 1200, avatar: "https://placehold.co/64?text=Y", change: "+3", cryptoGain: "+50 GGST" }

  const players = [
    { rank: 1, name: "VolcanicAkuma", score: 1500, avatar: "https://placehold.co/50?text=V", cryptoGain: "+200 GGST" },
    { rank: 2, name: "MFS Legs", score: 1450, avatar: "https://placehold.co/50?text=V", cryptoGain: "+150 GGST" },
    { rank: 3, name: "p. Starshine", score: 1400, avatar: "https://placehold.co/50?text=V", cryptoGain: "+100 GGST" },
    { rank: 4, name: "TacBac", score: 1350, avatar: "https://placehold.co/50?text=V", cryptoGain: "+75 GGST" },
    { rank: 5, name: "Cir9", score: 1300, avatar: "https://placehold.co/50?text=V", cryptoGain: "+50 GGST" },
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

      <div className="relative w-full h-48 bg-gray-300 overflow-hidden">
        <img 
          src="https://s2.qwant.com/thumbr/474x266/d/c/90eef4b36dc015d899998ea5f4a72af64808696ad35cd2347962ce0ff6df42/th.jpg?u=https%3A%2F%2Ftse.mm.bing.net%2Fth%3Fid%3DOIP.LwqvwLZzcGpVfcwHam6aHwHaEK%26pid%3DApi&q=0&b=1&p=0&a=0" 
          alt="Tournament Banner" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl font-bold mb-2">Super Smash Bros. Ultimate</h1>
          <h2 className="text-3xl font-semibold mb-2">Global Rankings</h2>
          <div className="flex items-center space-x-4 text-sm">
            <span className="flex items-center">
              <CalendarIcon className="mr-1 h-4 w-4" />
              Updated: July 1, 2023
            </span>
            <span className="flex items-center">
              <UsersIcon className="mr-1 h-4 w-4" />
              10,000+ Players
            </span>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8 flex-grow">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Player Rankings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
              <div className="relative flex-grow">
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search Players"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline">
                <FilterIcon className="mr-2 h-4 w-4" />
                Filter
              </Button>
            </div>

            <div className="mb-6">
              <PersonalRankCard {...personalRank} />
            </div>

            <div className="space-y-4">
              {players.map((player) => (
                <PlayerRankCard key={player.rank} {...player} />
              ))}
            </div>
            <div className="mt-6 text-center">
              <Button variant="outline">Load More</Button>
            </div>
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