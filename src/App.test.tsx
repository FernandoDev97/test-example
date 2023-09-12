
import { render, screen, fireEvent } from "@testing-library/react"
import App from "./App"

function sum(x: number, y: number) {
    return x + y
}

describe('App Component', () => {
    // Exemplo de um teste unutário com Jest
    it('should sum correctly', () => {
        //Exemplo de expectativa com um MATCHARES
        expect(sum(4, 4)).toBe(8)
    })
    // Exemplo de um teste unutário com Jest e Testing Library
    it('should render App with hello message', () => {
        render(<App />)
        //Exemplo de expectativa com um QUERIES
        screen.getByText('Hello world!')
    })

    it('should change message button click', () => {
        render(<App />)
        screen.getByText("Let's learn more about testing in React")
        const button = screen.getByRole('button')
        fireEvent.click(button)
        screen.getByText(/new message!/i)
    })
})

export default {}