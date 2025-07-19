import { Component, inject  } from '@angular/core';
import { AuthService, PostService, ThemesService } from '../../../core/services';
import { Post, Theme } from '../../../models';
import { ThemeItem } from "../theme-item/theme-item";
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { PostItem } from "../../posts";

@Component({
  selector: 'app-theme-board',
  imports: [ThemeItem, CommonModule, PostItem],
  templateUrl: './theme-board.html',
  styleUrl: './theme-board.css'
})
export class ThemeBoard  {
private authService = inject(AuthService);
  readonly isLoggedIn = this.authService.isLoggedIn;

  themes$: Observable<Theme[]>;
  posts$: Observable<Post[]>;

  constructor(
    private themeService: ThemesService,
    private postsService: PostService) {
  
    this.themes$ = this.themeService.getThemes();
    this.posts$ = this.postsService.getPosts();
  }
}
