import { render } from "@testing-library/react"
import { Tasks } from "./Tasks"
import { rest, setupWorker } from 'msw'

describe('Tasks Components',  () => {
    const worker = setupWorker(
        rest.get('https://jsonplaceholder.typicode.com/todos?_limit=5', async (req, res, ctx) => {
            
        })
    )

    it('should fetch and show tasks on button click', () => {
        render(<Tasks/>)
    })
})

export default {}