
interface Props {
    onClick: () => void;
    disabled: boolean;
}

function GenerateButton({ onClick, disabled }: Props) {

    return (
        <button onClick={onClick} disabled={disabled}>
            gen
        </button>
    )
}

export default GenerateButton