import { useState } from 'react';
import type { CardData } from '../types/types';

interface Props {
    cardData: CardData;
    onClickLock: () => void;
    onClickDelete: () => void;
    onClickSetCategory: () => void;
}

function Card({cardData, onClickLock, onClickDelete, onClickSetCategory}: Props) {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div>
            <div>id: {cardData.id}</div>
            <div>locked: {cardData.locked}</div>
            <div>category: {cardData.category}</div>
            <div>word: {cardData.word}</div>
            <button onClick={onClickLock}>lock</button>
            <button onClick={onClickDelete}>delete</button>
            <button onClick={() => setIsOpen(!isOpen)}>dropdown</button>
            {isOpen && <div>dropdown list</div>}
        </div>
    )
}

export default Card