import { useReducer } from 'react';
import type { Card, CardAction } from '../types/types';

function cardsReducer(state: Card[], action: CardAction): Card[] {
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

    function handleAddCard() {

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
        </>
    )
}

export default GeneratePage