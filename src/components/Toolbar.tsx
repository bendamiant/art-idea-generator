import type { ToolbarAction } from '../types/types';

interface Props {
    actions: ToolbarAction[]
}

function Toolbar({ actions }: Props) {

    return (
        <div>
            {actions.map((action) => <button onClick={action.onClick}>{action.icon} {action.label}</button>)}
        </ div>
    )
}

export default Toolbar