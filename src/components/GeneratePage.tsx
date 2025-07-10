import { useReducer } from 'react';
import type { CardData, CardAction, ToolbarAction } from '../types/types';
import Card from './Card';
import Toolbar from './Toolbar';

function cardsReducer(state: CardData[], action: CardAction): CardData[] {
    switch (action.type) {
        case 'new': {

        }
        case 'delete': {
            
        }
        case 'toggle_lock': {

        }
        case 'generate': {

        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

function GeneratePage() {
    const [cards, dispatch] = useReducer(cardsReducer, []);

    function handleNewCard() {

    }

    function handleDeleteCard() {

    }

    function handleToggleLock() {

    }

    function handleGenerate() {

    }

    return (
        <>
            <div>Generate Page</div>
            <ul>
                {cards.map((card) => <Card id={card.id} 
                                            locked={card.locked} 
                                            category={card.category} 
                                            word={card.word}/>)}
            </ul>
            <Toolbar actions={[]}/>
        </>
    )
}

export default GeneratePage