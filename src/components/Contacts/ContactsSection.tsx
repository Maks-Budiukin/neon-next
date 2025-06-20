import React from 'react'
import ContactsForm from '@/components/Contacts/ContactsForm'
import Image from 'next/image'
import PageTitle from '../Title/PageTitle'

const ContactsSection = () => {
    return (
        <div className='py-12 bg-zinc-800 bg-gradient-to-bl from-transparent from-40% to-zinc-900 to-55%'>
            <div className='container px-4 md:px-5 mx-auto'>

            <PageTitle variant='purple' className='mb-12'>Contact Us</PageTitle>

            <div className='flex items-start'>
                <div className='relative w-full h-auto basis-1/2 aspect-[3/4] border-12 border-zinc-900'>
                    <Image src={'/images/3.webp'} alt={''} fill className="object-cover" />
                </div>

                <div className='basis-1/2'>
                    <ContactsForm />
                </div>
                
            </div>
        </div>
        </div>
    )
}

export default ContactsSection