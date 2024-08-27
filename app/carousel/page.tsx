import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { SearchIcon } from "lucide-react"
import Link from "next/link"

export default function Component() {
  const games = [
    { title: "Super Smash Bros. Ultimate", image: "/placeholder.svg?height=240&width=160" },
    { title: "Street Fighter 6", image: "/placeholder.svg?height=240&width=160" },
    { title: "TEKKEN 8", image: "/placeholder.svg?height=240&width=160" },
    { title: "Super Smash Bros. Melee", image: "/placeholder.svg?height=240&width=160" },
    { title: "MultiVersus", image: "/placeholder.svg?height=240&width=160" },
    { title: "Guilty Gear: Strive", image: "/placeholder.svg?height=240&width=160" },
  ]

  return (
    <Card className="w-full max-w-4xl">
      <CardContent className="p-6">
        <div className="flex flex-col space-y-4 mb-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Games</h2>
            <Link className="text-blue-600 hover:underline" href="#">
              See All
            </Link>
          </div>
          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input className="pl-10" placeholder="Search games..." />
          </div>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {games.map((game, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6">
                <div className="space-y-2">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full aspect-[2/3] object-cover rounded-lg"
                  />
                  <h3 className="font-medium text-sm text-center line-clamp-2">{game.title}</h3>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </CardContent>
    </Card>
  )
}