export interface CardType {
    id: number;
    title: string;
    description: string;
    icon: string;
}

export interface CardsGridType {
    cards: CardType[]
}