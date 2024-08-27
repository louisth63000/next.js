"use client"
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
// import { DatePicker } from "@/components/ui/date-picker"
import { Switch } from "@/components/ui/switch"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { TrophyIcon, MenuIcon, BellIcon, CalendarIcon, MapPinIcon, UsersIcon, UploadIcon,  } from 'lucide-react'

export default function Component() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [tournamentType, setTournamentType] = useState('online')

  const currentUser = {
    name: "John Doe",
    avatar: "https://placehold.co/32"
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // Handle form submission here
    console.log('Form submitted')
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
        <h1 className="text-3xl font-bold mb-8">Créer un Tournoi</h1>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Informations du Tournoi</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="tournamentName">Nom du Tournoi</Label>
                <Input id="tournamentName" placeholder="Entrez le nom du tournoi" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="game">Jeu</Label>
                <Select>
                  <SelectTrigger id="game">
                    <SelectValue placeholder="Sélectionnez un jeu" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ssbu">Super Smash Bros. Ultimate</SelectItem>
                    <SelectItem value="lol">League of Legends</SelectItem>
                    <SelectItem value="csgo">Counter-Strike: Global Offensive</SelectItem>
                    <SelectItem value="valorant">Valorant</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="startDate">Date de Début</Label>
                  {/* <DatePicker /> */}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="endDate">Date de Fin</Label>
                  {/* <DatePicker /> */}
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>Type de Tournoi</Label>
                <RadioGroup defaultValue="online" onValueChange={setTournamentType}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="online" id="online" />
                    <Label htmlFor="online">En ligne</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="offline" id="offline" />
                    <Label htmlFor="offline">Hors ligne</Label>
                  </div>
                </RadioGroup>
              </div>
              
              {tournamentType === 'offline' && (
                <div className="space-y-2">
                  <Label htmlFor="location">Lieu</Label>
                  <Input id="location" placeholder="Adresse physique" required />
                </div>
              )}
              
              <div className="space-y-2">
                <Label htmlFor="format">Format du Tournoi</Label>
                <Select>
                  <SelectTrigger id="format">
                    <SelectValue placeholder="Sélectionnez un format" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="single">Simple élimination</SelectItem>
                    <SelectItem value="double">Double élimination</SelectItem>
                    <SelectItem value="roundrobin">Round Robin</SelectItem>
                    <SelectItem value="swiss">Système Suisse</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="teamSize">Taille des Équipes</Label>
                <Select>
                  <SelectTrigger id="teamSize">
                    <SelectValue placeholder="Sélectionnez la taille des équipes" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1v1">1v1</SelectItem>
                    <SelectItem value="2v2">2v2</SelectItem>
                    <SelectItem value="3v3">3v3</SelectItem>
                    <SelectItem value="5v5">5v5</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" placeholder="Décrivez votre tournoi" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="maxParticipants">Nombre Maximum de Participants</Label>
                <Input id="maxParticipants" type="number" placeholder="Ex: 64" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="discordLink">Lien Discord</Label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                  </span>
                  <Input id="discordLink" placeholder="https://discord.gg/votre-serveur" className="rounded-l-none" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="banner">Bannière du Tournoi</Label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <UploadIcon className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="flex text-sm text-gray-600">
                      <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                        <span>Télécharger un fichier</span>
                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                      </label>
                      <p className="pl-1">ou glisser-déposer</p>
                    </div>
                    <p className="text-xs text-gray-500">PNG, JPG, GIF jusqu'à 10MB</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Switch id="isPublic" />
                <Label htmlFor="isPublic">Tournoi Public</Label>
              </div>
              
              <Button type="submit" className="w-full">Créer le Tournoi</Button>
            </form>
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