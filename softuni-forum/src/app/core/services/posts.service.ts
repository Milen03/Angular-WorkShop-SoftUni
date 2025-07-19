import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "../../models";
import { Observable } from "rxjs/internal/Observable";

@Injectable({
    providedIn: 'root'
})

export class PostService{
 private getPostsApiUrl = 'http://localhost:3000/api/posts?limit={0}';
    private createPostApiUrl = 'http://localhost:3000/api/posts';

    constructor(private httpClient: HttpClient) {}

    getPosts(limit: number = 5): Observable<Post[]> {
        return this.httpClient.get<Post[]>(this.getPostsApiUrl.replace('{0}', limit.toString()));
    }

    createPost(themeName: string, postText: string): Observable<Post> {
        const body = JSON.stringify({ themeName, postText });
        return this.httpClient.post<Post>(this.createPostApiUrl, body, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}