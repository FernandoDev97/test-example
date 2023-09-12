import { fireEvent, render, screen } from "@testing-library/react"
import { Button } from "./Button"

describe('Button Components', () => {
    it('should render with red background if disabled', () => {
        render(<Button onClick={() => {}} disabled={false}> Click me </Button>)

       const button = screen.getByRole('button', {name: "Click me"})
       expect(button).toHaveStyle({ backgroundColor: 'blue' })
    })

    it('should call onClick prop on click', () => {
        //Funçao monitorável pelo Jest
        const onClick = jest.fn()
        render(<Button onClick={onClick} disabled={false}>Click me</Button>)

        const button = screen.getByText(/click me/i)
        fireEvent.click(button)
        expect(onClick).toHaveBeenCalled();
    })
})

export default {}