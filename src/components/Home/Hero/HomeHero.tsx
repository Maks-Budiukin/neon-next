import React from 'react'
import Image from 'next/image'
import Button from "@/components/Button/Button";
import PageTitle from '@/components/Title/PageTitle';

const HomeHero = () => {
    return (
        <div className='w-full bg-zinc-900'>
            <div className='container mx-auto'>
                <div className='flex'>
                    {/* <div>
                        <h1>Neon Pacman</h1>
                    </div> */}

                    <div className='relative w-full'>
                        <Image src={'/images/3.webp'} width={800} height={500} alt='Hero Image' className='ml-auto' />
                        <div className='absolute inset-0 bg-gradient-to-r from-40% from-zinc-900 to-60% to-transparent z-10 flex items-center'>
                            <div className='ml-36'>
                               
                                <PageTitle variant="yellow" className="mb-6">Neon Pacman</PageTitle>

                                <div className='flex items-center gap-3'>
                                    <Button label="View details" variant="purple" />
                                    <Button label='Contact us' variant='purple' />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default HomeHero