import { Component, ViewEncapsulation, Input } from '@angular/core';
import { IHeaderConfig } from './headerconfig.model';

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  encapsulation: ViewEncapsulation.None
})
export class SiteHeaderComponent {

  private hConfig: IHeaderConfig;
  public hamburgerCloseX = false;

  @Input()
  get config() {
    return this.hConfig;
  }
  set config(config: IHeaderConfig) {
    this.hConfig = config;
    console.log(config);
  }

  onHamburgerClicked() {
    this.hamburgerCloseX = !this.hamburgerCloseX;
    console.log(this.hamburgerCloseX);
  }

}
