import { useState } from 'react';
import type { CategoryKey } from '../types/types';

interface Props {
    onClickSetCategory: (id: string, category: CategoryKey) => void;
}

function CategoryButton({ onClickSetCategory }: Props) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <button onClick={() => setIsOpen(prev => !prev)}>
            foo
        </button>
    )
}

export default CategoryButton