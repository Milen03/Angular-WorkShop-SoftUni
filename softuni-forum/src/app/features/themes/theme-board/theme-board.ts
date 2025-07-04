import { Component, OnInit } from '@angular/core';
import { ThemesService } from '../../../core/services';
import { Theme } from '../../../models';

@Component({
  selector: 'app-theme-board',
  imports: [],
  templateUrl: './theme-board.html',
  styleUrl: './theme-board.css'
})
export class ThemeBoard implements OnInit {
  themems: Theme[] = []
constructor (private themesService:ThemesService ){}

ngOnInit(): void {
  
}
}
