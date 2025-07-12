import { useReducer } from 'react';
import type { CardData, CardAction, ToolbarAction, CategoryKey } from '../types/types';
import Card from './Card';
import Toolbar from './Toolbar';

function cardsReducer(state: CardData[], action: CardAction): CardData[] {
    switch (action.type) {
        case 'new': {
            return [
                ...state,
                {
                    id: crypto.randomUUID(),
                    locked: false,
                    category: null,
                    word: null
                }
            ]
        }
        case 'delete': {
            return state.filter((c) => c.id != action.id);
        }
        case 'toggle_lock': {
            return state.map((c) => c.id == action.id ? {...c, locked: !c.locked} : c);
        }
        case 'set_category': {
            return state.map((c) => c.id == action.id ? {...c, category: action.category} : c);
        }
        case 'generate': {
            // return state.map((c) => c.locked ? c : {...c, word: pickRandomWord(c.category)})
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

function GeneratePage() {
    const [cards, dispatch] = useReducer(cardsReducer, []);

    function handleNewCard() {
        dispatch({ type: "new"});
    }

    function handleDeleteCard(id: string) {
         dispatch({ type: "delete", id});
    }

    function handleToggleLock(id: string) {
         dispatch({ type: "toggle_lock", id});
    }

    function handleGenerate() {
         dispatch({ type: "generate"});
    }

    function handleSetCategory(id: string, category: CategoryKey) {

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