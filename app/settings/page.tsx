"use client"
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  TrophyIcon, MenuIcon, BellIcon, UserIcon, SettingsIcon, 
  LogOutIcon, ChevronDownIcon, LockIcon, BellRingIcon, GlobeIcon,
  MapPinIcon, TwitterIcon, FacebookIcon, InstagramIcon, CoinsIcon, CreditCardIcon
} from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Component() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const currentUser = {
    name: "John Doe",
    avatar: "https://s1.qwant.com/thumbr/474x266/a/2/4f02c52bee528cb25b397d6d2590b38e5db9d1aae72ca2538dfaf5e945cc45/th.jpg?u=https%3A%2F%2Ftse.mm.bing.net%2Fth%3Fid%3DOIP.FS-QQ1c9H_T0IRqxTly7kAHaEK%26pid%3DApi&q=0&b=1&p=0&a=0",
    email: "john.doe@example.com",
    location: "Paris, France",
    twitter: "@johndoe",
    facebook: "johndoe",
    instagram: "@johndoe",
    cryptoBalance: 1000,
    subscription: "Pro"
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
        <h1 className="text-3xl font-bold mb-8">Paramètres du Compte</h1>
        
        <Tabs defaultValue="profile" className="space-y-4">
          <TabsList>
            <TabsTrigger value="profile">Profil</TabsTrigger>
            <TabsTrigger value="security">Sécurité</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="privacy">Confidentialité</TabsTrigger>
            <TabsTrigger value="crypto">Crypto</TabsTrigger>
            <TabsTrigger value="subscription">Abonnement</TabsTrigger>
          </TabsList>
          
          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>Informations du Profil</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nom</Label>
                  <Input id="name" defaultValue={currentUser.name} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue={currentUser.email} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Localisation</Label>
                  <div className="flex">
                    <MapPinIcon className="w-5 h-5 text-gray-500 mr-2 mt-2" />
                    <Input id="location" defaultValue={currentUser.location} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bio">Biographie</Label>
                  <Input id="bio" />
                </div>
                <div className="space-y-2">
                  <Label>Réseaux Sociaux</Label>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <TwitterIcon className="w-5 h-5 text-blue-400 mr-2" />
                      <Input id="twitter" placeholder="Nom d'utilisateur Twitter" defaultValue={currentUser.twitter} />
                    </div>
                    <div className="flex items-center">
                      <FacebookIcon className="w-5 h-5 text-blue-600 mr-2" />
                      <Input id="facebook" placeholder="Nom d'utilisateur Facebook" defaultValue={currentUser.facebook} />
                    </div>
                    <div className="flex items-center">
                      <InstagramIcon className="w-5 h-5 text-pink-500 mr-2" />
                      <Input id="instagram" placeholder="Nom d'utilisateur Instagram" defaultValue={currentUser.instagram} />
                    </div>
                  </div>
                </div>
                <Button>Sauvegarder les Changements</Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="security">
            <Card>
              <CardHeader>
                <CardTitle>Sécurité</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="current-password">Mot de passe actuel</Label>
                  <Input id="current-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new-password">Nouveau mot de passe</Label>
                  <Input id="new-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirmer le nouveau mot de passe</Label>
                  <Input id="confirm-password" type="password" />
                </div>
                <Button>Changer le Mot de Passe</Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle>Préférences de Notifications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="email-notifications">Notifications par email</Label>
                  <Switch id="email-notifications" />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="push-notifications">Notifications push</Label>
                  <Switch id="push-notifications" />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="tournament-reminders">Rappels de tournois</Label>
                  <Switch id="tournament-reminders" />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="privacy">
            <Card>
              <CardHeader>
                <CardTitle>Paramètres de Confidentialité</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="profile-visibility">Visibilité du profil</Label>
                  <Switch id="profile-visibility" />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="show-email">{`Afficher l'email publiquement`}</Label>
                  <Switch id="show-email" />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="allow-messages">Autoriser les messages des non-amis</Label>
                  <Switch id="allow-messages" />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="crypto">
            <Card>
              <CardHeader>
                <CardTitle>Gestion de la Crypto-monnaie</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label>Solde GGST</Label>
                  <div className="flex items-center">
                    <CoinsIcon className="w-5 h-5 text-yellow-500 mr-2" />
                    <span className="text-xl font-bold">{currentUser.cryptoBalance} GGST</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="deposit-amount">Montant à déposer</Label>
                  <div className="flex">
                    <Input id="deposit-amount" type="number" placeholder="0" />
                    <Button className="ml-2">Déposer</Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="withdraw-amount">Montant à retirer</Label>
                  <div className="flex">
                    <Input id="withdraw-amount" type="number" placeholder="0" />
                    <Button className="ml-2">Retirer</Button>
                  </div>
                </div>
                <div>
                  <Button variant="outline">{`Voir l'historique des transactions`}</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="subscription">
            <Card>
              <CardHeader>
                <CardTitle>{`Gestion de l'Abonnement`}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label>Abonnement Actuel</Label>
                  <span className="text-xl font-bold">{currentUser.subscription}</span>
                </div>
                <div className="space-y-2">
                  <Label>{`Changer d'Abonnement`}</Label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Button variant="outline">Basic</Button>
                    <Button variant="outline">Pro</Button>
                    <Button variant="outline">Premium</Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="payment-method">Méthode de Paiement</Label>
                  <div className="flex items-center">
                    <CreditCardIcon className="w-5 h-5 text-gray-500 mr-2" />
                    <Input id="payment-method" placeholder="**** **** **** 1234" />
                  </div>
                </div>
                <div>
                  <Button variant="outline">{`Voir l'historique de facturation`}</Button>
                </div>
              </CardContent>
            </Card>
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