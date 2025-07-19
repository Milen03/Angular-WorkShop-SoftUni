import { Component, inject } from '@angular/core';
import { AuthService } from '../../core/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {
 protected authService = inject(AuthService)

 readonly currentUser = this.authService.currentUser;

  onEdit(): void {
    alert('Edit functionality will be implemented in the next workshop!');
  }

}
