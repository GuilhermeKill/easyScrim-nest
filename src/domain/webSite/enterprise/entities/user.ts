import { Entity } from "src/core/entities/entity";
import { UniqueEntityID } from "src/core/entities/unique-entity-id";
import { Role } from '@prisma/client';

export interface UserProps{
    avatar: string,
    name: string,
    email: string,
    description: string,
    riot_id: string,
    riot_nick_name: string,
    password: string,
    lane: string,
    role: Role,
}

export class User extends Entity<UserProps>{
    
    get avatar(){
        return this.props.avatar
    }

    get name(){
        return this.props.name
    }

    get email(){
        return this.props.email
    }

    get password(){
        return this.props.password
    }

    get riot_nick_name(){
        return this.props.riot_nick_name
    }

    get riot_id(){
        return this.props.riot_id
    }

    get lane(){
        return this.props.lane
    }
    
    get description(){
        return this.props.description
    }

    get role(){
        return this.props.role
    }


    static create(props: UserProps, uu_id?: UniqueEntityID) {
        const user = new User(props, uu_id)

        return user
    }
}