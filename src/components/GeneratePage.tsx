import { useReducer } from 'react';
import type { CategoryKey } from '../types/types';
import Card from './Card';
import Toolbar from './Toolbar';
import cardsReducer from '../state/CardsReducer';

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