import { Component } from '@angular/core';
import {
  ActivatedRoute,
  Router,
} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  public onClick(): void {
    this.router.navigate(['layout'], {
      relativeTo: this.route,
    });
  }
}
