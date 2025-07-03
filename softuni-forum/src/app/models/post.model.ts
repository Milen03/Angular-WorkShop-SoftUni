import { Data } from "@angular/router"

export interface Post{
    id:string
    text:string
    userId:string
    username:string
    themeId:string
    createdAt:Data
}