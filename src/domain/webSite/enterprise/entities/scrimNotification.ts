import { Entity } from "src/core/entities/entity";
import { UniqueEntityID } from "src/core/entities/unique-entity-id";

export interface ScrimNotificationProps{
    title: string,
    description: string,
    date: string,
    senderID: string,
    recipientID: string,
    responseRecipient: boolean,
    isActive: boolean,
}

export class ScrimNotification extends Entity<ScrimNotificationProps>{

    get title(){
        return this.props.title
    }

    get description(){
        return this.props.description
    }

    get senderID(){
        return this.props.senderID
    }

    get recipientID(){
        return this.props.recipientID
    }

    get responseRecipient(){
        return this.props.responseRecipient
    }

    get isActive(){
        return this.props.isActive
    }

    static create(props: ScrimNotificationProps, id?: UniqueEntityID){
        const scrimNotification = new ScrimNotification(props, id) 
        
        return scrimNotification
    }
    
}