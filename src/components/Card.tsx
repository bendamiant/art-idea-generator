import { useState } from 'react';
import type { CardData, CategoryKey } from '../types/types';

interface Props {
    cardData: CardData;
    onClickDelete: (id: string) => void;
    onClickLock: (id: string) => void;
    onClickSetCategory: (id: string, category: CategoryKey) => void;
}

function Card({cardData, onClickLock, onClickDelete, onClickSetCategory}: Props) {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div>
            <div>id: {cardData.id}</div>
            <div>locked: {cardData.locked}</div>
            <div>category: {cardData.category}</div>
            <div>word: {cardData.word}</div>
            <button onClick={() => onClickLock(cardData.id)}>{cardData.locked ? 'locked' : 'unlocked'}</button>
            <button onClick={() => onClickDelete(cardData.id)}>delete</button>
            <button onClick={() => setIsOpen(!isOpen)}>dropdown</button>
            {isOpen && <div>dropdown list</div>}
        </div>
    )
}

export default Card