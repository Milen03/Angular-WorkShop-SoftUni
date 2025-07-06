import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../core/services';
import { Post } from '../../../models';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { CommonModule } from '@angular/common';
import { PostItem } from '../post-item/post-item';

@Component({
  selector: 'app-post-board',
  imports: [PostItem,CommonModule],
  templateUrl: './post-board.html',
  styleUrl: './post-board.css'
})
export class PostBoard implements OnInit {
  posts: Post[] = []
  constructor(private postsService: PostService) { }

  ngOnInit(): void {
    this.postsService.getPosts().pipe(takeUntilDestroyed()).subscribe((posts: Post[]) => {
      this.posts = posts
    })
  }
}
