import type { PageKey } from '../types/types';

interface Props {
    currPage: PageKey;
    onChange: (clicked: PageKey) => void;
};

function Navbar({currPage, onChange}: Props) {

    return (
        <div>
            <button onClick={() => onChange('generate')} disabled={currPage == 'generate'}>generate</button>
            <button onClick={() => onChange('saved')} disabled={currPage == 'saved'}>saved</button>
            <button onClick={() => onChange('recents')} disabled={currPage == 'recents'}>recents</button>
        </ div>
    )
}

export default Navbar