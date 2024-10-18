import { Scrim } from "../../enterprise/entities/scrim"

export abstract class ScrimRepository{
    abstract findByTeam(teamID: string): Promise<Scrim | null>
    abstract findByEqual(teamIdOne: string, teamIdTwo): Promise<Scrim | null>
    abstract create(scrim: Scrim): Promise<void>
}