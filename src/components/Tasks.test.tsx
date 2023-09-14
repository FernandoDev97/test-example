import { fireEvent, render, screen } from "@testing-library/react"
import { Tasks } from "./Tasks"
import { rest } from 'msw'
import { setupServer } from 'msw/node'

describe('Tasks Components', () => {
    const worker = setupServer(
        rest.get('https://jsonplaceholder.typicode.com/todos', async (req, res, ctx) => {
            return res(
                ctx.json([
                    {
                        userId: 1,
                        id: 1,
                        title: "delectus aut autem",
                        completed: false
                    }
                ])
            )
        })
    )
    beforeAll(() => {
        worker.listen()
    })

    beforeEach(() => {
        worker.resetHandlers()
    })

    it('should fetch and show tasks on button click', async () => {
        render(<Tasks />)

        const button = screen.getByText("Get tasks from API")
        fireEvent.click(button)
        // await waitFor(() => screen.getByText())
        await screen.findByText("delectus aut autem")

    })

    it('should show error message on fetch error', async () => {
        worker.use(
            rest.get('https://jsonplaceholder.typicode.com/todos', async (req, res, ctx) => {
                return res(
                    ctx.status(500), ctx.json({message: 'Request failed with status code 500'})
                )
            })
        )

        render(<Tasks/>)
        const button = screen.getByText("Get tasks from API")
        fireEvent.click(button)
        await screen.findByText("Request failed with status code 500")
    })
})

export default {}