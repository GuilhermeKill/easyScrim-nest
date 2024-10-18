import { Entity } from "src/core/entities/entity";
import { UniqueEntityID } from "src/core/entities/unique-entity-id";

export interface InviteTeamPropsNotification{
    senderID: string
    title: string,
    description: string,
    role: string,
    teamName: string,
    recipientInvite: string
}

export class InviteTeamNotification extends Entity<InviteTeamPropsNotification>{
    get senderID(){
        return this.props.senderID
    }
    
    get title(){
        return this.props.title
    }

    get description(){
        return this.props.description
    }

    get role(){
        return this.props.role
    }

    get teamName(){
        return this.props.teamName
    }

    get recipientInvite(){
        return this.props.recipientInvite
    }

    

    static create(props: InviteTeamPropsNotification, id?: UniqueEntityID) {
        const inviteTeamNotification = new InviteTeamNotification(props, id)

        return inviteTeamNotification
    }
}