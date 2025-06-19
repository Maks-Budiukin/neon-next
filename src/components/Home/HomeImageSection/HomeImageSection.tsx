import ImageSection from '@/components/ImageSection/ImageSection'
import SectionTitle from '@/components/Title/SectionTitle';
import React from 'react'

const HomeImageSection = () => {

    const imageSectionData = [
        {
            id: 1,
            title: "Neon Circuit Escape",
            text: "In the heart of the neon maze, danger pulses with every turn. Bright trails mark where others have run before you. The ghosts are fast, but your instincts are faster. Glowing walls flicker as the system reboots mid-chase. You collect pellets not just for power, but for survival. Every corner could lead to safety or a trap. The deeper you go, the more unstable the maze becomes. You hear digital echoes—something is learning your movements. But you're not here to run. You're here to beat the system.",
            image: "/images/6.webp"
        },
        {
            id: 2,
            title: "Pixel Phantom Hunt",
            text: "The pellets are more than points—they’re the only light in the dark. You race through tunnels powered by raw energy. Every pellet collected brings you closer to full power. Ghosts swarm like electric bees, synced in perfect formation. But you're unpredictable. Your movements short-circuit their patterns. You chain combos, lighting up the board in blinding color. There's no time to think—just react. A wrong move ends everything. But tonight, you're flawless. The maze bends to your will. The hunt begins at midnight when the grid resets. You are the only one awake, the only one moving. Ghosts no longer flee; they fight. But you're armed with more than speed—you've unlocked the code beneath the maze. Each ghost defeated restores part of your fading reality. The neon shadows twist around corners with deceptive grace. You can't trust what you see, but you can trust your reflexes. Memories come back with every glowing step. You’re not a player anymore. You’re the glitch in the system.",
            image: "/images/7.webp"
        },
        {
            id: 4,
            title: "Glitch Realm Runner",
            text: "In the neon city, the Nightcode governs all behavior. But you’re an anomaly—unauthorized, unchecked, unstoppable. The system sees you as a virus, and it's sending ghosts to delete you. You’ve entered a part of the maze not meant to exist. Walls flicker in and out like broken memories. Ghosts here don't follow rules—they rewrite them. Your path corrupts behind you, leaving no way back. You must run forward, deeper into the distortion. Voices whisper code fragments in the static. Your map is useless, but your instincts are sharp. You dodge through anomalies like a phantom. If you reach the core, you reset everything. But if you fall, you become part of the glitch forever.",
            image: "/images/10.webp"
        },
        {
            id: 5,
            title: "Cyber Pellet Rush",
            text: "You move like light through fiber, fast and unpredictable. With each node you reach, you unravel more of the truth. This isn’t just a game—it’s surveillance, it’s control. Your mission: break the Nightcode. You're not just escaping; you're liberating. And every step you take is a crack in the digital prison. Freedom glows just ahead. The pellets are more than points—they’re the only light in the dark. You race through tunnels powered by raw energy. Every pellet collected brings you closer to full power. Ghosts swarm like electric bees, synced in perfect formation. But you're unpredictable. Your movements short-circuit their patterns. You chain combos, lighting up the board in blinding color. There's no time to think—just react. A wrong move ends everything. But tonight, you're flawless. The maze bends to your will.",
            image: "/images/8.webp"
        },
    ];

    const imageSectionList = imageSectionData.map(section =>
        <ImageSection key={section.id} {...section} />
    );

    return (
        <div className='bg-zinc-800 bg-gradient-to-l from-transparent from-50% to-zinc-900 to-70% py-12 mt-8'>
            <div className='container mx-auto px-4 md:px-5'>
                <SectionTitle variant='purple' className='text-center'>Image Sections</SectionTitle>
                <div className='w-full'>{imageSectionList}</div>
            </div>
        </div>
    )
}

export default HomeImageSection