import { useReducer } from 'react';
import type { CategoryKey } from '../types/types';
import Card from './Card';
import Toolbar from './Toolbar';
import GenerateButton from './GenerateButton';
import NewButton from './NewButton';
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
            <Toolbar>
                <GenerateButton onClick={handleGenerate} disabled={cards.filter((card) => !card.locked ).length === 0} />
                <NewButton onClick={handleNewCard} disabled={cards.length >= 10}/>
            </Toolbar>
        </>
    )
}

export default GeneratePage