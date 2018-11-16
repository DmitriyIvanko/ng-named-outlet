import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private router: Router,
  ) { }

  public onUserClick(): void {
    this.router.navigate(['/user']);
  }

  public onHomeClick(): void {
    this.router.navigate(['']);
  }
}
