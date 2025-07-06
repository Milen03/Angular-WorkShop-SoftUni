import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer, Header } from './shared/components';
import { ThemeBoard } from "./features/themes/theme-board/theme-board";
import { PostBoard } from "./features/posts/post-board/post-board";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, ThemeBoard, PostBoard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
