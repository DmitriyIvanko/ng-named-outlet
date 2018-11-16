import {
  Component,
  OnInit,
} from '@angular/core';
import {
  ActivatedRoute,
  Router,
} from '@angular/router';

@Component({
  selector: 'app-layout-warning',
  templateUrl: './layout-warning.component.html',
  styleUrls: ['./layout-warning.component.css']
})
export class LayoutWarningComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  public onCloseLoyoutWarning(): void {
    this.router.navigate(
      [
        {
          outlets: {
            layoutPopup: null,
          },
        },
      ],
      {
        relativeTo: this.activatedRoute.parent,
      }
    );
  }

}
