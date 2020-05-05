import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { AuthService } from './adminconsole/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  constructor(private authSvc: AuthService) {}

  ngOnInit() {
    this.authSvc.initAuthListener();
  }

}
