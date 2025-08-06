/**
 * @param {{ id?: string, onClick?: () => void, children?: React.ReactNode }} props
 * @returns {JSX.Element}
 */
export function Button({ id, onClick, children }) {
    return (
        <button 
            id={id}
            className="btn btn-primary"
            onClick={onClick}
        >
            {children || "Click Me"}
        </button>
    )
}
