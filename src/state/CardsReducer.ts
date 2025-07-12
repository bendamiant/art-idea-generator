import type { CardData, CardAction } from '../types/types';

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

export default cardsReducer;