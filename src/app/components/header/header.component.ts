import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  title = 'Krystína Erbenová';
  subtitle = 'site admin console';

  constructor(private authSvc: AuthService) { }

  onExitBtnClicked() {
    this.authSvc.logout();
  }

  ngOnInit() {
  }

}
