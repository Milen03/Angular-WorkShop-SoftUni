import { Component } from '@angular/core';
import { ThemesService } from '../../../core/services';
import { Theme } from '../../../models';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ThemeItem } from "../theme-item/theme-item";
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-theme-board',
  imports: [ThemeItem,CommonModule],
  templateUrl: './theme-board.html',
  styleUrl: './theme-board.css'
})
export class ThemeBoard  {
readonly themes$: Observable<Theme[]>

constructor(private themeService:ThemesService){
  this.themes$ = this.themeService.getThemes().pipe(
    takeUntilDestroyed()
  )
}
}
