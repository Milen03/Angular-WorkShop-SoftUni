
import { User } from "./user.model"

export interface Post{
    id:string
    text:string
    userId:User
    themeId:string
    created_at:Date
}