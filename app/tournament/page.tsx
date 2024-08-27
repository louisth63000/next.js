"use client"
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarIcon, MapPinIcon, UsersIcon, TrophyIcon, MenuIcon, HomeIcon, LinkIcon } from 'lucide-react'

const AttendeeCard = ({ initial, name, username }: { initial: string; name: string; username: string }) => (
  <div className="flex items-center space-x-2 p-2 bg-gray-100 rounded-md">
    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
      {initial}
    </div>
    <div>
      <p className="font-semibold">{name}</p>
      <p className="text-sm text-gray-600">{username}</p>
    </div>
  </div>
)

interface AdminCardProps {
  initial: string;
  name: string;
  role: string;
}
const AdminCard = ({ initial, name, role }: AdminCardProps) => (
  <div className="flex items-center space-x-2 p-2">
    <div className="w-8 h-8 bg-gray-300 text-gray-700 rounded-full flex items-center justify-center font-bold">
      {initial}
    </div>
    <div>
      <p className="font-semibold">{name}</p>
      <p className="text-sm text-gray-600">{role}</p>
    </div>
  </div>
)

export default function Component() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
          src="https://s2.qwant.com/thumbr/474x266/4/f/c00d5efd480734fe2071d42ebd19719db15d710e289a9841598099dce5252f/th.jpg?u=https%3A%2F%2Ftse.mm.bing.net%2Fth%3Fid%3DOIP.GqpoGhYQJPQhWTeL00zuEAHaEK%26pid%3DApi&q=0&b=1&p=0&a=0" 
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
                  <span>16 Attendees</span>
                </div>
                <div className="flex items-center">
                  <LinkIcon className="mr-2 h-5 w-5 text-gray-500" />
                  <a href="https://discord.gg/tASjrum2" className="text-blue-500 hover:underline">https://discord.gg/tASjrum2</a>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="md:col-span-2 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Welcome to Salty Sunday</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Welcome to Salty Sunday, a new EU only weekly! Check ins will close at 3:45pm BST, with the tournament starting 4pm BST.</p>
                <p>LAN is not required, however you are allowed to call a lag test if you see fit | Latency Mod is allowed | Steve is legal</p>
                <p>These tournaments will be put down for a PR, where the top 15 will be invited to a separate bracket with a prize pool in the future: <a href="https://braacket.com/league/SaltySunday/ranking" className="text-blue-500 hover:underline">https://braacket.com/league/SaltySunday/ranking</a></p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Events</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold">August 4th 2024</h3>
                    <p className="text-lg">Salty Singles</p>
                    <p className="text-sm text-gray-600">Singles - Super Smash Bros. Ultimate</p>
                  </div>
                  <Button>View Event</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Attendees</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  <AttendeeCard initial="N" name="nijusan" username="nijusan" />
                  <AttendeeCard initial="C" name="CS Jester" username="CSJester" />
                  <AttendeeCard initial="P" name="Paco" username="Paco" />
                  <AttendeeCard initial="B" name="BIG:MARN" username="BIGMARN" />
                  <AttendeeCard initial="R" name="Raiden's Yasu" username="RaidenYasu" />
                  <AttendeeCard initial="L" name="Lonsus" username="Lonsus" />
                </div>
                <Button className="mt-4 w-full">View All 16 Attendees</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Info</CardTitle>
              </CardHeader>
              <CardContent className="flex space-x-4">
                <Button variant="outline">
                  <LinkIcon className="mr-2 h-4 w-4" />
                  Discord
                </Button>
                <Button variant="outline">
                  <LinkIcon className="mr-2 h-4 w-4" />
                  Discord
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Admins</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <AdminCard initial="T" name="Evan Sheridan" role="TheEvanger" />
                  <AdminCard initial="A" name="AOC RebelGalaxy" role="AOC RebelGalaxy" />
                  <AdminCard initial="Y" name="YEF / BBG Glacey" role="YEF / BBG Glacey" />
                  <AdminCard initial="W" name="WAMP Knight Numbers" role="WAMP Knight Numbers" />
                </div>
              </CardContent>
            </Card>
          </div>
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