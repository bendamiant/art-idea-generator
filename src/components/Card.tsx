import type { CardData } from '../types/types';

function Card({id, locked, category, word}: CardData) {

    return (
        <div>
            <div>id: {id}</div>
            <div>locked: {locked}</div>
            <div>category: {category}</div>
            <div>word: {word}</div>
        </div>
    )
}

export default Card