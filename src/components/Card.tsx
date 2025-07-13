import CategoryButton from './CategoryButton';
import type { CardData, CategoryKey } from '../types/types';

interface Props {
    cardData: CardData;
    onClickDelete: (id: string) => void;
    onClickLock: (id: string) => void;
    onClickSetCategory: (id: string, category: CategoryKey) => void;
}

function Card({cardData, onClickLock, onClickDelete, onClickSetCategory}: Props) {

    

    return (
        <div>
            <div>id: {cardData.id}</div>
            <div>{cardData.locked ? 'locked' : 'unlocked'}</div>
            <div>category: {cardData.category}</div>
            <div>word: {cardData.word}</div>
            <button onClick={() => onClickLock(cardData.id)}>{cardData.locked ? 'locked' : 'unlocked'}</button>
            <button onClick={() => onClickDelete(cardData.id)}>delete</button>
            <CategoryButton onClickSetCategory={onClickSetCategory} />
        </div>
    )
}

export default Card;