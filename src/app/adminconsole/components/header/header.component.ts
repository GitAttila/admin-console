import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  title = '';
  subtitle = 'site admin console';

  constructor(private authSvc: AuthService) { }

  onExitBtnClicked() {
    // this.authSvc.logout();
  }

  ngOnInit() {
  }

}
