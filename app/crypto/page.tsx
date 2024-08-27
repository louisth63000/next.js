"use client"
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrophyIcon, MenuIcon, BellIcon, TrendingUpIcon, DollarSignIcon, PercentIcon, WalletIcon, EuroIcon } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { LucideIcon } from 'lucide-react';

// Simulated crypto data
const cryptoData = [
  { date: '2023-01-01', price: 100 },
  { date: '2023-02-01', price: 120 },
  { date: '2023-03-01', price: 110 },
  { date: '2023-04-01', price: 140 },
  { date: '2023-05-01', price: 130 },
  { date: '2023-06-01', price: 160 },
  { date: '2023-07-01', price: 180 },
]


type CryptoStatsCardProps = {
  title: string;
  value: string | number;
  icon: LucideIcon;
};
const CryptoStatsCard = ({ title, value, icon: Icon }: CryptoStatsCardProps) => (
  <Card>
    <CardContent className="flex items-center p-6">
      <Icon className="h-8 w-8 text-blue-500 mr-4" />
      <div>
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <h3 className="text-2xl font-bold">{value}</h3>
      </div>
    </CardContent>
  </Card>
);

export default function Component() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const currentUser = {
    name: "John Doe",
    avatar: "https://placehold.co/32",
    ggstBalance: 1000, // User's GGST balance
  }

  const ggstPrice = 180 // Current GGST price in USD
  const eurUsdRate = 0.85 // EUR/USD exchange rate

  const userGgstValueUsd = currentUser.ggstBalance * ggstPrice
  const userGgstValueEur = userGgstValueUsd * eurUsdRate

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
        <h1 className="text-3xl font-bold mb-8">GGST Crypto Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <CryptoStatsCard title="Current Price" value={`$${ggstPrice.toFixed(2)}`} icon={DollarSignIcon} />
          <CryptoStatsCard title="24h Change" value="+12.5%" icon={TrendingUpIcon} />
          <CryptoStatsCard title="Market Cap" value="$10M" icon={PercentIcon} />
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Your GGST Holdings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center">
                <WalletIcon className="h-8 w-8 text-blue-500 mr-4" />
                <div>
                  <p className="text-sm font-medium text-gray-500">Your GGST Balance</p>
                  <h3 className="text-2xl font-bold">{currentUser.ggstBalance.toFixed(2)} GGST</h3>
                </div>
              </div>
              <div className="flex items-center">
                <EuroIcon className="h-8 w-8 text-green-500 mr-4" />
                <div>
                  <p className="text-sm font-medium text-gray-500">Value in EUR</p>
                  <h3 className="text-2xl font-bold">€{userGgstValueEur.toFixed(2)}</h3>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">GGST Price Chart</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={cryptoData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="price" stroke="#8884d8" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">About GGST</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              {`GGST (GG Start Token) is the official cryptocurrency of the start.gg platform. 
              It's used for tournament entry fees, prize pools, and various in-platform transactions. 
              As the popularity of esports grows, so does the value and utility of GGST. `}
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