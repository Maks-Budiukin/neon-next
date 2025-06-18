import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ChevronRight from '../Icons/ChevronRight'
import Email from '../Icons/Email'
import Phone from '../Icons/Phone'
import Address from '../Icons/Address'


const PageFooter = () => {
  return (
    <footer className='bg-zinc-900'>
        <div className='container mx-auto grid grid-cols-3 py-4'>
            <div className='col-span-1 text-amber-200'>
                <p className='font-semibold py-2 border-b mb-2'>Contacts</p>
                <ul>
                    <li><Link href={'mailto:email@site.com'} className='flex items-center gap-2 hover:text-amber-400 duration-200'><Email /> corporative@site.com</Link></li>
                    <li><Link href={'tel:+380990010203'} className='flex items-center gap-2 hover:text-amber-400 duration-200'><Phone /> +380990010203</Link></li>
                    <li><Link href={'https://www.google.com/maps/place/CLOSER/@50.463407,30.4872651,15z/data=!4m15!1m8!3m7!1s0x40d4ce7823af2fd5:0xb0e85555254f96f9!2z0JvRg9C60YzRj9C90L7QstC60LAsINCa0LjQtdCyLCAwMjAwMA!3b1!8m2!3d50.465676!4d30.475934!16s%2Fm%2F0cz9n9d!3m5!1s0x40d4ce6de5b089fd:0x8f001484c67a08e!8m2!3d50.4661633!4d30.4998352!16s%2Fg%2F11b6nhv4vc?entry=ttu&g_ep=EgoyMDI1MDYxNi4wIKXMDSoASAFQAw%3D%3D'} className='flex items-center gap-2 italic hover:text-amber-400 duration-200'><Address /> Київ, Нижньоюрківська, 31</Link></li>
                </ul>
            </div>

           <div className='col-span-1 flex justify-center items-center'>
             <Image src={'/logo/logo.webp'} width={96} height={96} alt='Site Logo' />
           </div>

           <div className='col-span-1 text-amber-200 flex justify-end'>
            <div>
                <p className='font-semibold py-2 border-b mb-2'>Navigation</p>

            <ul>
                <li><Link href={'/'} className='flex items-center gap-2 hover:text-amber-400 duration-200'><ChevronRight /> Home</Link></li>
                <li><Link href={'/'} className='flex items-center gap-2 hover:text-amber-400 duration-200'><ChevronRight />About</Link></li>
                <li><Link href={'/'} className='flex items-center gap-2 hover:text-amber-400 duration-200'><ChevronRight />Contacts</Link></li>
            </ul>
            </div>
           </div>
        </div>
    </footer>
  )
}

export default PageFooter