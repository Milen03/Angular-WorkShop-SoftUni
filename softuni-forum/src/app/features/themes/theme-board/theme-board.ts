import { Component } from '@angular/core';
import { ThemesService } from '../../../core/services';

@Component({
  selector: 'app-theme-board',
  imports: [],
  templateUrl: './theme-board.html',
  styleUrl: './theme-board.css'
})
export class ThemeBoard {
constructor (private themesService:ThemesService ){}
}
