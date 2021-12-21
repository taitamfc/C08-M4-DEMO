import { Component } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'C08-M4-Demo';

  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _Router:Router
  ) { }

  search(value:any) {
    this._Router.navigate([], {
      relativeTo: this._ActivatedRoute,
      queryParams: {
        newOrdNum: '123'
      },
      queryParamsHandling: 'merge',
      // preserve the existing query params in the route
      skipLocationChange: true
      // do not trigger navigation
    });
  }
}
