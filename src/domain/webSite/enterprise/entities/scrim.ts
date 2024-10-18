import { Entity } from "src/core/entities/entity";
import { UniqueEntityID } from "src/core/entities/unique-entity-id";

export interface ScrimProps{
    date: string,
    teamOne: string,
    teamTwo: string,
    isActive: boolean,
    createBy: boolean
}

export class Scrim extends Entity<ScrimProps>{

    get date(){
        return this.date
    }

    get teamOne(){
        return this.teamOne
    }

    get teamTwo(){
        return this.teamTwo
    }

    get isActive(){
        return this.isActive
    }
    
    
    get createBy(){
        return this.createBy
    }


    static create(props: ScrimProps, id?: UniqueEntityID){
        const scrim = new Scrim(props, id) 
        
        return scrim
    }
    
}