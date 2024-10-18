import { Entity } from "src/core/entities/entity";
import { UniqueEntityID } from "src/core/entities/unique-entity-id";

export interface TaskProps{
    taskName: string,
    createBy: string,
    recipientBy: string,
    description: string,
}

export class Task extends Entity<TaskProps>{
    
    get taskName(){
        return this.props.taskName
    }

    get createBy(){
        return this.props.createBy
    }

    get recipientBy(){
        return this.props.recipientBy
    }

    get description(){
        return this.description
    }

    static create(props: TaskProps, id?: UniqueEntityID) {
        const task = new Task(props, id)

        return task
    }
}