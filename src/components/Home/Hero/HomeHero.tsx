import React from 'react'
import Button from "@/components/Button/Button";
import PageTitle from '@/components/Title/PageTitle';

const HomeHero = () => {
    return (
        <div className='w-full bg-zinc-900 py-8'>
            <div className='container px-4 md:px-5 mx-auto'>
                <div className='w-full min-h-40 sm:min-h-60 md:min-h-72 lg:min-h-80 xl:min-h-[640px] bg-[url("/images/1.webp")] bg-no-repeat bg-contain xl:bg-cover xl:bg-[left_12rem_top_2rem] bg-bottom sm:bg-right-bottom overflow-hidden'>
                    <div className='sm:min-h-60 md:min-h-72 lg:min-h-80 xl:min-h-[640px] bg-gradient-to-b sm:bg-gradient-to-r xl:bg-gradient-to-br from-45% min-[480px]:from-30% md:from-40% lg:from-50% xl:from-40% from-zinc-900 to-60% to-transparent'>
                        <div className='xl:min-h-[640px] xl:bg-gradient-to-r xl:from-zinc-900 xl:to-transparent xl:from-20% xl:to-40%'>
                            <div className='pt-8 min-[480px]:pt-16 sm:pt-0  xl:mt-0 xl:ml-36 w-full'>

                                <PageTitle variant="yellow" className="mb-6 pt-4 lg:pt-20 sm:text-left">Neon Pacman</PageTitle>

                                <div className='mt-48 sm:mt-0 mb-2 px-2 sm:px-0 flex items-center sm:flex-col sm:items-start lg:flex-row gap-3 w-full sm:w-40 md:w-64 lg:w-96'>
                                    <Button label="View details" variant="yellow" className=' flex-1 w-full' />
                                    <Button label='Contact us' variant='yellow' className=' flex-1 w-[80%] lg:w-full' />
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