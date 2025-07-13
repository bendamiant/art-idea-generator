
interface Props {
    children: React.ReactNode
}

function Toolbar({ children }: Props) {

    return (
        <div>
            {children}
        </ div>
    )
}

export default Toolbar