import { Component } from '@angular/core';
import { PostService } from '../../../core/services';

@Component({
  selector: 'app-post-board',
  imports: [],
  templateUrl: './post-board.html',
  styleUrl: './post-board.css'
})
export class PostBoard {
constructor(private postsService:PostService ){}
}
