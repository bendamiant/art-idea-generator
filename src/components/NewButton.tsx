
interface Props {
    onClick: () => void;
    disabled: boolean;
}

function NewButton({onClick, disabled }: Props) {

    return (
        <button onClick={onClick} disabled={disabled}>
            new
        </button>
    )
}

export default NewButton