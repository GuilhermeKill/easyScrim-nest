import { Task } from "../../enterprise/entities/task"


export abstract class TaskRepository{
    abstract findTasksByCoach(createBy: string): Promise<Task | null>
    abstract findTaskByRecipient(recipipent: string): Promise<Task | null>
    abstract completeTask(task: Task): Promise<void>
    abstract create(task: Task): Promise<void>
}