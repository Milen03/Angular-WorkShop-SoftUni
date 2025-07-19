import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  protected authSevice = inject(AuthService)
  private router = inject(Router)

  readonly isLoggedIn = this.authSevice.isLoggedIn;
  readonly currentUser = this.authSevice.currentUser;

  logout(): void {
    this.authSevice.logout()
    this.router.navigate(['/home'])
  }

}
