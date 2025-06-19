import React from 'react'
import { ImageSectionProps } from './types'
import SectionTitle from '../Title/SectionTitle'



const ImageSection: React.FC<ImageSectionProps> = ({image, title, text}) => {
  return (
    <div className='md:flex even:flex-row-reverse items-center gap-12 my-12 w-full'>
        <div className='rounded-full overflow-hidden border-8 basis-1/2 md:basis-1/3 max-md:max-w-[75%] aspect-square max-md:mx-auto max-md:mb-8'>
            <img src={image} alt={title} className='w-full h-full object-center object-cover' />
        </div>

        <div className='basis-1/2 md:basis-2/3'>
            <SectionTitle variant='purple' size='sm' className='mb-4'>{title}</SectionTitle>
            <p className='text-violet-400'>{text}</p>
        </div>
    </div>
  )
}

export default ImageSection