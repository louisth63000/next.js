"use client"
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarIcon, MapPinIcon, UsersIcon, TrophyIcon, MenuIcon, HomeIcon, LinkIcon, FilterIcon, TwitterIcon, TwitchIcon } from 'lucide-react'

interface AttendeeRowProps {
  avatar: string;
  name: string;
  events: string[]; // ou tout autre type approprié pour events
}

const AttendeeRow: React.FC<AttendeeRowProps> = ({ avatar, name, events }) => (
  <div className="flex items-start space-x-4 py-4 border-b last:border-b-0">
    <img src={avatar} alt={name} className="w-10 h-10 rounded-full" />
    <div className="flex-grow">
      <h3 className="font-semibold">{name}</h3>
      <div className="text-sm text-gray-600">
        {Array.isArray(events) && events.length > 0 ? (
          events.map((event, index) => (
            <p key={index}>{event}</p>
          ))
        ) : (
          <p>No events registered</p>
        )}
      </div>
    </div>
  </div>
)

export default function Component() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const attendees = [
    {
      avatar: "https://placehold.co/64?text=V",
      name: "TackShootr Caleb Copus",
      events: ["Puyo Puyo Tetris 2 - Time Slot 2 (Jul 27, 12PM PT)"]
    },
    {
      avatar: "https://placehold.co/40?text=V",
      name: "Cir9",
      events: [
        "Tetris Effect: Connected Classic Score Attack - Time Slot 1 (Jul 20, 5am PT)",
        "Tetris Effect: Connected Classic Score Attack - Time Slot 2 (Jul 20, 12pm PT)",
        "Tetris Effect: Connected Zone Battle - Time Slot 2 (Aug 3, 12pm PT)",
        "Tetris Effect: Connected Zone Battle - Time Slot 1 (Aug 3, 5am PT)",
        "Puyo Puyo Tetris 2 - Time Slot 1 (Jul 27, 5AM PT)",
        "Puyo Puyo Tetris 2 - Time Slot 2 (Jul 27, 12PM PT)"
      ]
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

      <div className="relative w-full h-48 bg-gray-300 overflow-hidden">
        <img 
          src="https://s2.qwant.com/thumbr/474x296/7/9/ee14c8d9dc7cf07532458fb54265098f68a3712368c9d6596afb8455d1fb09/th.jpg?u=https%3A%2F%2Ftse.mm.bing.net%2Fth%3Fid%3DOIP.EZ1O1KRS7HAq-mX5fGSVNgHaEo%26pid%3DApi&q=0&b=1&p=0&a=0" 
          alt="Tournament Banner" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl font-bold mb-2">TS</h1>
          <h2 className="text-3xl font-semibold mb-2">Salty Sunday #40</h2>
          <div className="flex items-center space-x-4 text-sm">
            <span className="flex items-center">
              <CalendarIcon className="mr-1 h-4 w-4" />
              Aug 4th - 5th, 2024
            </span>
            <span className="flex items-center">
              <MapPinIcon className="mr-1 h-4 w-4" />
              Online
            </span>
          </div>
          <a href="https://discord.gg/tASjrum2" className="mt-2 text-blue-300 hover:underline flex items-center">
            <LinkIcon className="mr-1 h-4 w-4" />
            https://discord.gg/tASjrum2
          </a>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Tournament Info</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center">
                  <CalendarIcon className="mr-2 h-5 w-5 text-gray-500" />
                  <span>Aug 4th - 5th, 2024</span>
                </div>
                <div className="flex items-center">
                  <MapPinIcon className="mr-2 h-5 w-5 text-gray-500" />
                  <span>Online</span>
                </div>
                <div className="flex items-center">
                  <HomeIcon className="mr-2 h-5 w-5 text-gray-500" />
                  <span>Home</span>
                </div>
                <div className="flex items-center">
                  <UsersIcon className="mr-2 h-5 w-5 text-gray-500" />
                  <span>201 Attendees</span>
                </div>
                <div className="flex items-center">
                  <LinkIcon className="mr-2 h-5 w-5 text-gray-500" />
                  <a href="https://discord.gg/tASjrum2" className="text-blue-500 hover:underline">https://discord.gg/tASjrum2</a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Attendees</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="attendees" className="w-full">
                <TabsList>
                  <TabsTrigger value="attendees">Attendees</TabsTrigger>
                  <TabsTrigger value="teams">Teams</TabsTrigger>
                </TabsList>
                <TabsContent value="attendees" className="mt-4">
                  <div className="flex space-x-4 mb-4">
                    <Input
                      type="text"
                      placeholder="Search"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="flex-grow"
                    />
                    <Button variant="outline">
                      <FilterIcon className="mr-2 h-4 w-4" />
                      Filter
                    </Button>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">Displaying 1 - 25 of 201 attendees</p>
                  <div className="space-y-2">
                    {attendees.map((attendee, index) => (
                      <AttendeeRow key={index} {...attendee} />
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="teams">
                  <p>No teams have been created for this tournament.</p>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
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