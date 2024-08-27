"use client"
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarIcon, MapPinIcon, UsersIcon, TrophyIcon, MenuIcon, BellIcon, UserIcon, GlobeIcon } from 'lucide-react'

interface TeamMemberCardProps {
  name: string;
  role: string;
  avatar: string;
}
const TeamMemberCard = ({ name, role, avatar }: TeamMemberCardProps) => (
  <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow">
    <img src={avatar} alt={name} className="w-12 h-12 rounded-full" />
    <div>
      <h3 className="font-semibold">{name}</h3>
      <p className="text-sm text-gray-600">{role}</p>
    </div>
  </div>
)

interface CompetitionCardProps {
  name: string;
  date: string;
  result: string;
  game: string;
}
const CompetitionCard = ({ name, date, result, game }: CompetitionCardProps) => (
  <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
    <div>
      <h3 className="font-semibold">{name}</h3>
      <p className="text-sm text-gray-600">{game}</p>
    </div>
    <div className="text-right">
      <p className="text-sm text-gray-600">{date}</p>
      <p className="font-semibold">{result}</p>
    </div>
  </div>
)

export default function Component() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isTeamMember, setIsTeamMember] = useState(false) // This would typically come from your auth state

  const currentUser = {
    name: "John Doe",
    avatar: "https://placehold.co/32"
  }

  const teamMembers = [
    { name: "Alice Johnson", role: "Team Captain", avatar: "https://placehold.co/50" },
    { name: "Bob Smith", role: "Strategist", avatar: "https://placehold.co/50" },
    { name: "Charlie Brown", role: "Support", avatar: "https://placehold.co/50" },
    { name: "Diana Prince", role: "Carry", avatar: "https://placehold.co/50" },
  ]

  const recentCompetitions = [
    { name: "Summer Smash Tournament", date: "July 15, 2023", result: "2nd Place", game: "Super Smash Bros. Ultimate" },
    { name: "Global Gaming League", date: "June 28, 2023", result: "1st Place", game: "League of Legends" },
    { name: "FPS Masters", date: "June 10, 2023", result: "3rd Place", game: "Counter-Strike: Global Offensive" },
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

      <div className="relative w-full h-64 bg-gray-300 overflow-hidden">
        <img 
          src="https://s2.qwant.com/thumbr/474x266/4/f/c00d5efd480734fe2071d42ebd19719db15d710e289a9841598099dce5252f/th.jpg?u=https%3A%2F%2Ftse.mm.bing.net%2Fth%3Fid%3DOIP.GqpoGhYQJPQhWTeL00zuEAHaEK%26pid%3DApi&q=0&b=1&p=0&a=0" 
          alt="Team Banner" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
          <img 
            src="https://s2.qwant.com/thumbr/474x417/5/0/90a63c3369a9a84a5cee695b2aaf49eaf7c10c1cd97fe7859a3f408952870e/th.jpg?u=https%3A%2F%2Ftse.mm.bing.net%2Fth%3Fid%3DOIP.Z9Ck1jnIrBwep8KH3FEDNwHaGh%26pid%3DApi&q=0&b=1&p=0&a=0" 
            alt="Team Logo" 
            className="w-24 h-24 rounded-full border-4 border-white mb-4"
          />
          <h1 className="text-4xl font-bold mb-2">Team Awesome</h1>
          <p className="text-xl mb-4">Dominating the competitive scene since 2020</p>
          <div className="flex items-center space-x-4 text-sm mb-4">
            <span className="flex items-center">
              <UserIcon className="mr-1 h-4 w-4" />
              4 Members
            </span>
            <span className="flex items-center">
              <GlobeIcon className="mr-1 h-4 w-4" />
              North America
            </span>
            <span className="flex items-center">
              <TrophyIcon className="mr-1 h-4 w-4" />
              15 Tournaments Won
            </span>
          </div>
          <div className="flex space-x-4">
            <a 
              href="https://discord.gg/teamawesome" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
            >
              
              Join our Discord
            </a>
            {!isTeamMember && (
              <Button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Apply to Join Team
              </Button>
            )}
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">About Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                 {` Team Awesome is a professional esports team competing in various games. 
                  Founded in 2020, we've quickly risen through the ranks to become one of 
                  the top teams in the region. Our goal is to dominate the competitive scene 
                  and inspire the next generation of gamers. `}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-bold">Recent Competitions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentCompetitions.map((competition, index) => (
                    <CompetitionCard key={index} {...competition} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-bold">Team Members</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {teamMembers.map((member, index) => (
                    <TeamMemberCard key={index} {...member} />
                  ))}
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