import { ReactNode } from "react"

export const Button = ({ disabled, children, onClick }: { disabled: boolean; children: ReactNode; onClick: () => void }) => {
    return (
        <button onClick={onClick} disabled={disabled} style={{ background: disabled ? 'red' : 'blue', padding: 10, marginTop: 10 }}>
            {children}
        </button>
    )
}