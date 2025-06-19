import SectionTitle from '@/components/Title/SectionTitle'
import React from 'react'
import CardsGrid from '@/components/Home/CardsGrid/CardsGrid'

const CardsGridSection = () => {

    const cards = [
  {
    id: 1,
    title: "Neon Maze Runner",
    description: "Navigate the electric labyrinth under glowing neon lights. Ghosts shimmer like holograms as they chase. Collect energy pellets to stay ahead of the danger.",
    icon: "CardFlash"
  },
  {
    id: 2,
    title: "Pixel Ghost Hunter",
    description: "You’re not running anymore—you’re hunting. Track digital ghosts through pulsating pixel tunnels. Every capture powers up your neon aura.",
    icon: "CardGhost"
  },
  {
    id: 3,
    title: "Power Pellet Rush",
    description: "Time slows down when the pellet hits. With blinding speed, blaze through the circuit grid. Every chomp echoes like thunder in the neon dark.",
    icon: "CardBolt"
  },
  {
    id: 4,
    title: "Glitch Zone",
    description: "Enter the corrupted layer of the neon maze. Walls flicker, and nothing is as it seems. Can you decode the path before the ghosts find you?",
    icon: "CardBug"
  },
  {
    id: 5,
    title: "Retro Reboot",
    description: "Pac-Man’s world just got an upgrade. Retro sprites meet synthwave backdrops. It's a love letter to the '80s, glowing with futuristic flair.",
    icon: "CardHeart"
  },
  {
    id: 6,
    title: "Digital Night Chase",
    description: "The neon city sleeps, but the chase never ends. Dash through high-voltage alleys and silent arcades. Only the quickest survive till dawn.",
    icon: "CardAchievement"
  }
];

  return (
    <div className='bg-zinc-800 bg-gradient-to-r from-transparent from-50% to-zinc-900 to-70% py-12'>
       <div className='container px-4 md:px-5 mx-auto'>
         <SectionTitle className='text-center mb-12' variant='blue'>Random Cards</SectionTitle>
         <CardsGrid cards={cards} />
       </div>
    </div>
  )
}

export default CardsGridSection