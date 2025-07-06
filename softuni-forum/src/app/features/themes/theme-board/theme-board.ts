import { Component, OnInit } from '@angular/core';
import { ThemesService } from '../../../core/services';
import { Theme } from '../../../models';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ThemeItem } from "../theme-item/theme-item";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-theme-board',
  imports: [ThemeItem,CommonModule],
  templateUrl: './theme-board.html',
  styleUrl: './theme-board.css'
})
export class ThemeBoard implements OnInit {
  themes: Theme[] = []
  constructor(private themesService: ThemesService) { }

  ngOnInit(): void {
    this.themesService.getThemes().pipe(takeUntilDestroyed()).subscribe((themes: Theme[]) => {
      this.themes = themes
    })
  }
}
