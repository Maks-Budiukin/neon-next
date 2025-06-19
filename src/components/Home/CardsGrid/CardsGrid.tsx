import React from 'react'
import { CardsGridType } from './types';
import Card from './Card';

const CardsGrid: React.FC<CardsGridType> = ({ cards }) => {

    const listItems = cards.map(card =>
        <Card key={card.id} {...card} />
    );
    return (
        <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            {listItems}
        </ul>
    )
}

export default CardsGrid