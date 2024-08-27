"use client"
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarIcon, MapPinIcon, UsersIcon, TrophyIcon, MenuIcon, TwitterIcon, LinkIcon, CoinsIcon } from 'lucide-react'

interface EventCardProps {
  image: string;
  date: string;
  title: string;
  subtitle: string;
  events: string;
  attendees: string;
}
const EventCard = ({ image, date, title, subtitle, events, attendees }: EventCardProps) => (
  <Card className="overflow-hidden">
    <img src={image} alt={title} className="w-full h-32 object-cover" />
    <CardContent className="p-4">
      <p className="text-sm text-gray-500 mb-2">{date}</p>
      <h3 className="font-bold mb-1">{title}</h3>
      <p className="text-sm text-gray-600 mb-2">{subtitle}</p>
      <div className="flex items-center text-sm text-gray-500">
        <CalendarIcon className="w-4 h-4 mr-1" />
        <span className="mr-4">{events} Events</span>
        <UsersIcon className="w-4 h-4 mr-1" />
        <span>{attendees} Attendees</span>
      </div>
    </CardContent>
  </Card>
)


interface ResultCardProps {
  placement: string;
  event: string;
}
const ResultCard = ({ placement, event }: ResultCardProps) => (
  <Card className="p-4">
    <p className="font-bold">{placement}</p>
    <p className="text-sm text-gray-600">{event}</p>
  </Card>
)

interface LeaderboardCardProps {
  game: string;
  rank: number;
  score: number;
}
const LeaderboardCard = ({ game, rank, score }: LeaderboardCardProps) => (
  <Card className="p-4">
    <h3 className="font-bold mb-2">{game}</h3>
    <p className="text-sm text-gray-600">Rank: {rank}</p>
    <p className="text-sm text-gray-600">Score: {score}</p>
  </Card>
)

export default function Component() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const leaderboards = [
    { game: "Super Smash Bros. Melee", rank: 23, score: 1500 },
    { game: "Street Fighter V", rank: 45, score: 1200 },
    { game: "Tekken 7", rank: 67, score: 1100 },
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

      <div className="w-full h-48 bg-gray-300 relative">
        <img src="https://s2.qwant.com/thumbr/474x517/7/2/7c14c00b7621699d0281cb560207cb84cf5d6f4209243814aaa1979953a350/th.jpg?u=https%3A%2F%2Ftse.mm.bing.net%2Fth%3Fid%3DOIP.pII79B3h1kKa44H9fkUtiQHaIF%26pid%3DApi&q=0&b=1&p=0&a=0" alt="Profile Banner" className="w-full h-full object-cover" />
      </div>

      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="flex items-start justify-between mb-8">
          <div className="flex items-center">
            <div className="w-20 h-20 bg-gray-400 rounded-full mr-4 -mt-10 border-4 border-white"></div>
            <div>
              <h1 className="text-3xl font-bold">Takkar <span className="text-gray-500">59093dae</span></h1>
              <p className="text-gray-600">strive dropout learning melee · he/him</p>
              <p className="text-gray-600 flex items-center">
                <MapPinIcon className="w-4 h-4 mr-1" />
                Brazil
                <CalendarIcon className="w-4 h-4 ml-4 mr-1" />
                November 2022
              </p>
            </div>
          </div>
          <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
            <CoinsIcon className="w-6 h-6 mr-2 text-yellow-500" />
            <span className="font-bold">1,234</span>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Leaderboards</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {leaderboards.map((leaderboard, index) => (
              <LeaderboardCard key={index} {...leaderboard} />
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Social Connections</h2>
          <div className="flex space-x-4">
            <Button variant="outline" className="flex items-center">
              <TwitterIcon className="w-4 h-4 mr-2" />
              Takkar118
            </Button>
            <Button variant="outline" className="flex items-center">
              <LinkIcon className="w-4 h-4 mr-2" />
              takkar #8610
            </Button>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <EventCard
              image="https://s2.qwant.com/thumbr/474x266/7/1/18ca7225875e7c593208f26da4bb1d9f58007f8f8f911cfa592eef4ab45c09/th.jpg?u=https%3A%2F%2Ftse.mm.bing.net%2Fth%3Fid%3DOIP.3QtaeHYs6IDj8OthQxVJ7gHaEK%26pid%3DApi&q=0&b=1&p=0&a=0"
              date="15 JAN - 31 DEC"
              title="Melee BR - by Not"
              subtitle="Competing in ESQ #5"
              events="14"
              attendees="55"
            />
            <EventCard
              image="https://s1.qwant.com/thumbr/474x670/8/5/6201ca30e010ee68a12f03b5d028a9961bcf08101bc8d184064cf8a2decdc8/th.jpg?u=https%3A%2F%2Ftse.mm.bing.net%2Fth%3Fid%3DOIP.reBAeRPhOsXnAKzYD8HliQHaKe%26pid%3DApi&q=0&b=1&p=0&a=0"
              date="9:00PM TODAY"
              title="Muminha's Academy"
              subtitle="Competing in Singles das Muminha"
              events="1"
              attendees="22"
            />
            <EventCard
              image="https://s2.qwant.com/thumbr/474x266/7/1/18ca7225875e7c593208f26da4bb1d9f58007f8f8f911cfa592eef4ab45c09/th.jpg?u=https%3A%2F%2Ftse.mm.bing.net%2Fth%3Fid%3DOIP.3QtaeHYs6IDj8OthQxVJ7gHaEK%26pid%3DApi&q=0&b=1&p=0&a=0"
              date="21 SEP 2092"
              title="Click (2006) Full"
              subtitle="Competing in Click Vermintide 2"
              events="16"
              attendees="970"
            />
          </div>
          <Button variant="link" className="mt-4">View all</Button>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Results</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <ResultCard placement="9th of 10" event="ESQ #5 at Melee BR - by Not" />
            <ResultCard placement="9th of 18" event="slap city singles at #1 torneio de Slap city do..." />
            <ResultCard placement="4th of 9" event="Melee Singles at Smash Fellas #16" />
            <ResultCard placement="2nd of 8" event="Slap City Singles at Smash Fellas #16" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <ResultCard placement="9th of 13" event="Melee Singles at fodase" />
            <ResultCard placement="3rd of 5" event="Melee Singles at Smash Fellas #15" />
          </div>
          <Button variant="link">View all (20)</Button>
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