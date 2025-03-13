import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // ✅ Import FormsModule

@Component({
  standalone: true,
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  imports: [CommonModule, RouterModule, FormsModule] // ✅ Add FormsModule
})
export class SignupComponent {
  username = '';
  password = '';

  constructor(private router: Router) {}

  register() {
    alert('Signup successful! Please login.');
    this.router.navigate(['/login']);
  }
}
