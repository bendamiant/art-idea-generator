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

    function handleSetCategory() {

    }

    return (
        <>
            <div>Generate Page</div>
            <ul>
                {cards.map((card) => <Card cardData={card}
                                           onClickLock={handleToggleLock}
                                           onClickDelete={handleDeleteCard}
                                           onClickSetCategory={handleSetCategory}/>)}           
            </ul>
            <Toolbar actions={[{label: 'generate', icon: 'gen', onClick: handleGenerate},
                               {label: 'new', icon: '+', onClick: handleNewCard}]}
            />
        </>
    )
}

export default GeneratePage