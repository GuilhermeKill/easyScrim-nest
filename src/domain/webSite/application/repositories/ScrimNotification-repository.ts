import { ScrimNotification } from "../../enterprise/entities/scrimNotification";


export abstract class ScrimNotificationRepository{
    abstract findBySender(senderID: string): Promise<ScrimNotification | null>
    abstract findByRecipe(recipientID: string): Promise<ScrimNotification | null>
    abstract findByRecipeAndSender(senderID: string, recipeID:string): Promise<ScrimNotification | null>
    abstract create(scrim: ScrimNotification): Promise<void>
}