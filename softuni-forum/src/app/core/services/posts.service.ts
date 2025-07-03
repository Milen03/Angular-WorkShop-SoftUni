import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "../../models";
import { Observable } from "rxjs/internal/Observable";

@Injectable({
    providedIn: 'root'
})

export class PostService{
private  apiUrl = 'http://localhost:3000/api/posts?limit={0}';

constructor(private httpClient:HttpClient){

}

getRecentPosts(limit:number = 5):Observable<Post[]>{
        return this.httpClient.get<Post[]>(this.apiUrl.replace('{0}',limit.toString()))
    }
}