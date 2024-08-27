"use client"
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarIcon, MapPinIcon, UsersIcon, TrophyIcon, SearchIcon, MenuIcon } from 'lucide-react'

const TournamentCard = ({ title, game, date, location, attendees, image }) => (
  <Card className="overflow-hidden transition-all hover:shadow-lg">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <CardHeader>
      <CardTitle className="line-clamp-1 text-gray-800">{title}</CardTitle>
      <p className="text-sm text-gray-600">{game}</p>
    </CardHeader>
    <CardContent>
      <div className="flex items-center text-sm text-gray-600 mb-2">
        <CalendarIcon className="mr-2 h-4 w-4" />
        {date}
      </div>
      <div className="flex items-center text-sm text-gray-600 mb-2">
        <MapPinIcon className="mr-2 h-4 w-4" />
        {location}
      </div>
      <div className="flex items-center text-sm text-gray-600">
        <UsersIcon className="mr-2 h-4 w-4" />
        {attendees} Attendees
      </div>
    </CardContent>
    <CardFooter>
      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Register</Button>
    </CardFooter>
  </Card>
)

export default function Component() {
  const [searchQuery, setSearchQuery] = useState('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const tournaments = [
    {
      title: "Evo 2024",
      game: "Street Fighter 6",
      date: "Jul 19th - 21st, 2024",
      location: "Las Vegas, NV",
      attendees: "10259",
      image: "https://s2.qwant.com/thumbr/474x296/7/9/ee14c8d9dc7cf07532458fb54265098f68a3712368c9d6596afb8455d1fb09/th.jpg?u=https%3A%2F%2Ftse.mm.bing.net%2Fth%3Fid%3DOIP.EZ1O1KRS7HAq-mX5fGSVNgHaEo%26pid%3DApi&q=0&b=1&p=0&a=0"
    },
    {
      title: "Tetris® Block Party",
      game: "Tetris Effect: Connected",
      date: "Jul 19th - Aug 4th, 2024",
      location: "Online",
      attendees: "201",
      image: "https://s2.qwant.com/thumbr/474x249/d/3/430a2da30b2d44ae0a9348ef3aba0d52383981bf76ea1f211077c85a716b70/th.jpg?u=https%3A%2F%2Ftse.mm.bing.net%2Fth%3Fid%3DOIP.eDDD2ApCpKr5rILg7TWWBQHaD5%26pid%3DApi&q=0&b=1&p=0&a=0"
    },
    {
      title: "Supernova 2024",
      game: "Super Smash Bros. Ultimate",
      date: "Aug 8th - 11th, 2024",
      location: "Chantilly, VA",
      attendees: "4369",
      image: "https://s1.qwant.com/thumbr/474x350/9/2/c0df776d6171bec4c7bea08efe1bda4034f2ab7d55a624da835c95eee1d3aa/th.jpg?u=https%3A%2F%2Ftse.mm.bing.net%2Fth%3Fid%3DOIP.lgvD-B52_U8cn2D0fWSyVwHaFe%26pid%3DApi&q=0&b=1&p=0&a=0"
    },
  ]

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="bg-gray-800 shadow-md text-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-bold flex items-center">
            <TrophyIcon className="mr-2 h-5 w-5 md:h-6 md:w-6" />
            start.gg
          </h1>
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              <li><Button variant="ghost" className="text-white hover:text-gray-200">Home</Button></li>
              <li><Button variant="ghost" className="text-white hover:text-gray-200">Tournaments</Button></li>
              <li><Button variant="ghost" className="text-white hover:text-gray-200">Games</Button></li>
              <li><Button variant="ghost" className="text-white hover:text-gray-200">About</Button></li>
            </ul>
          </nav>
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
        <section className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Community through competition</h2>
          <p className="text-lg md:text-xl mb-8 text-gray-600">Join tournaments, compete with others, and level up your gaming experience.</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Organize an event
            </Button>
            <Button size="lg" variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
              Find events
            </Button>
          </div>
        </section>

        <div className="mb-8">
          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search tournaments..."
              className="w-full pl-10 pr-4 py-2 rounded-md bg-white border border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <Tabs defaultValue="featured" className="mb-8">
          <TabsList className="mb-4 bg-gray-100">
            <TabsTrigger value="featured" className="data-[state=active]:bg-white data-[state=active]:text-gray-800">Featured</TabsTrigger>
            <TabsTrigger value="online" className="data-[state=active]:bg-white data-[state=active]:text-gray-800">Online</TabsTrigger>
            <TabsTrigger value="games" className="data-[state=active]:bg-white data-[state=active]:text-gray-800">Games</TabsTrigger>
          </TabsList>
          <TabsContent value="featured">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tournaments.map((tournament, index) => (
                <TournamentCard key={index} {...tournament} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="online">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tournaments.filter(t => t.location === "Online").map((tournament, index) => (
                <TournamentCard key={index} {...tournament} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="games">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tournaments.map((tournament, index) => (
                <TournamentCard key={index} {...tournament} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
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