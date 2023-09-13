import { useEffect, useState } from "react"
import { Button } from "./Button"
import axios from 'axios'

interface TasksProps {
    completed: boolean
    id: number
    title: string
    userId: number
}

export const Tasks = () => {
    const [tasks, setTasks] = useState<TasksProps[]>([])

    async function handleGetTasks () {
        const {data} = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=5`)
        setTasks(data)
    }

    return (
        <>
            <h1>Tasks from API</h1>
            {tasks.map(task => (
                <div style={{display: "flex", padding: 10, flexDirection: "column"}} key={task.id}>
                    <p style={{textTransform: 'uppercase'}}>{task.title}</p>
                </div>
            ))}
            <Button disabled={false} onClick={handleGetTasks} >
                Get tasks from API
            </Button>
        </>
    )
}
