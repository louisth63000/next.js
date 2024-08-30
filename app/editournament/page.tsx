'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CalendarIcon, MapPinIcon, UsersIcon, TrophyIcon, MenuIcon, HomeIcon, LinkIcon, FilterIcon, EditIcon, CheckIcon, XIcon } from 'lucide-react'

interface Player {
  name: string;
  fullName: string;
}

interface MatchRowProps {
  round: string;
  player1: Player;
  player2: Player;
  score1?: number;
  score2?: number;
  status: string;
  scheduledTime?: string;
  onUpdateScore: (round: string, newScore1: number, newScore2: number) => void;
}
const MatchRow = ({ round, player1, player2, score1, score2, status, scheduledTime, onUpdateScore }: MatchRowProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newScore1, setNewScore1] = useState(score1);
  const [newScore2, setNewScore2] = useState(score2);

  const handleSave = () => {
    if (newScore1 !== undefined && newScore2 !== undefined) {
      onUpdateScore(round, newScore1, newScore2);
    }
    setIsEditing(false);
  };


  const handleCancel = () => {
    setNewScore1(score1)
    setNewScore2(score2)
    setIsEditing(false)
  }

  return (
    <div className="border-b last:border-b-0 py-4">
      <div className="text-sm text-gray-500 mb-2">{round}</div>
      <div className="flex justify-between items-center">
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-200 rounded-full mr-2"></div>
              <div>
                <div className="font-semibold">{player1.name}</div>
                <div className="text-sm text-gray-500">{player1.fullName}</div>
              </div>
            </div>
            {isEditing ? (
              <Input
                type="number"
                value={newScore1}
                onChange={(e) => setNewScore1(parseInt(e.target.value))}
                className="w-16 text-center"
              />
            ) : (
              <div className="font-bold text-lg">{score1 !== undefined ? score1 : '-'}</div>
            )}
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-200 rounded-full mr-2"></div>
              <div>
                <div className="font-semibold">{player2.name}</div>
                <div className="text-sm text-gray-500">{player2.fullName}</div>
              </div>
            </div>
            {isEditing ? (
              <Input
                type="number"
                value={newScore2}
                onChange={(e) => setNewScore2(parseInt(e.target.value))}
                className="w-16 text-center"
              />
            ) : (
              <div className="font-bold text-lg">{score2 !== undefined ? score2 : '-'}</div>
            )}
          </div>
        </div>
        <div className="ml-4 text-sm text-gray-500 flex items-center">
          {status === "Scheduled" ? scheduledTime : status}
          {!isEditing && (
            <Button variant="ghost" size="icon" onClick={() => setIsEditing(true)} aria-label="Edit scores">
              <EditIcon className="h-4 w-4" />
            </Button>
          )}
          {isEditing && (
            <>
              <Button variant="ghost" size="icon" onClick={handleSave} aria-label="Save scores">
                <CheckIcon className="h-4 w-4 text-green-500" />
              </Button>
              <Button variant="ghost" size="icon" onClick={handleCancel} aria-label="Cancel editing">
                <XIcon className="h-4 w-4 text-red-500" />
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Component() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [matches, setMatches] = useState({
    finished: [
      {
        round: "GRAND FINAL - MATCH G",
        player1: { name: "VolcanicAkuma", fullName: "Mike Smith" },
        player2: { name: "MFS Legs", fullName: "Eileen M." },
        score1: 3,
        score2: 1,
        status: "Complete"
      },
      {
        round: "WINNERS FINAL - MATCH F",
        player1: { name: "VolcanicAkuma", fullName: "Mike Smith" },
        player2: { name: "MFS Legs", fullName: "Eileen M." },
        score1: 3,
        score2: 0,
        status: "Complete"
      },
      {
        round: "LOSERS FINAL - MATCH M",
        player1: { name: "MFS Legs", fullName: "Eileen M." },
        player2: { name: "p. Starshine", fullName: "" },
        score1: 3,
        score2: 2,
        status: "Complete"
      },
    ],
    future: [
      {
        round: "QUARTER FINAL - MATCH A",
        player1: { name: "Player1", fullName: "John Doe" },
        player2: { name: "Player2", fullName: "Jane Smith" },
        status: "Scheduled",
        scheduledTime: "Aug 5, 2:00 PM"
      },
      {
        round: "QUARTER FINAL - MATCH B",
        player1: { name: "Player3", fullName: "Bob Johnson" },
        player2: { name: "Player4", fullName: "Alice Brown" },
        status: "Scheduled",
        scheduledTime: "Aug 5, 3:30 PM"
      },
    ]
  })

const handleUpdateScore = (round: string, newScore1: number, newScore2: number) => {
  setMatches(prevMatches => ({
    ...prevMatches,
    finished: prevMatches.finished.map(match =>
      match.round === round ? { ...match, score1: newScore1, score2: newScore2 } : match
    )
  }));
}

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
          src="/placeholder.svg?height=200&width=1200" 
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
              <CardTitle className="text-2xl font-bold">Matches</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-4">
                <Input
                  type="text"
                  placeholder="Search Players"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-grow"
                />
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="All Rounds" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Rounds</SelectItem>
                    <SelectItem value="grand-final">Grand Final</SelectItem>
                    <SelectItem value="winners-final">Winners Final</SelectItem>
                    <SelectItem value="losers-final">Losers Final</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline">
                  <FilterIcon className="mr-2 h-4 w-4" />
                  Filter
                </Button>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Finished Matches</h3>
                <div className="space-y-4">
                  {matches.finished.map((match, index) => (
                    <MatchRow 
                      key={`finished-${index}`} 
                      {...match} 
                      onUpdateScore={handleUpdateScore}
                    />
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Upcoming Matches</h3>
                <div className="space-y-4">
                  {matches.future.map((match, index) => (
                    <MatchRow 
                      key={`future-${index}`} 
                      {...match} 
                      onUpdateScore={handleUpdateScore}
                    />
                  ))}
                </div>
              </div>
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