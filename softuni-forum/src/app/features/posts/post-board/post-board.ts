import { Component } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { PostService } from '../../../core/services';
import { Post } from '../../../models';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { PostItem } from '../post-item/post-item';

@Component({
  selector: 'app-post-board',
  standalone: true,
  imports: [PostItem, CommonModule],
  templateUrl: './post-board.html',
  styleUrl: './post-board.css'
})
export class PostBoard {
  readonly posts$: Observable<Post[]>;

  constructor(private postsService: PostService) {
    this.posts$ = this.postsService.getPosts().pipe(
      takeUntilDestroyed()
    );
  }
}
