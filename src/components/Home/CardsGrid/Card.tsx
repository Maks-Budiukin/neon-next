import React from 'react'
import { CardType } from './types'
import { icons } from '@/components/Icons/cards';

const Card: React.FC<CardType> = ({icon, title, description}) => {

const IconComponent = icons[icon];

  return (
    <li className='col-span-1 border border-sky-400 rounded-lg p-4 shadow-[0_4px_40px_8px_deepskyblue]'>

            <div className='w-16'>
                {IconComponent && <IconComponent />}
            </div>

            <p className='text-sky-400 font-bold mt-6'>{title}</p>

            <p className='text-sky-200 text-xs mt-4'>{description}</p>
        </li>
  )
}

export default Card