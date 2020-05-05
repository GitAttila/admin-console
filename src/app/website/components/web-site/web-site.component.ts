import { Component, OnInit } from '@angular/core';
import { IHeaderConfig } from '../site-header/headerconfig.model';

@Component({
  selector: 'app-web-site',
  templateUrl: './web-site.component.html'
})
export class WebSiteComponent implements OnInit {

  public headerConfig: IHeaderConfig = {
    logo: {
      src: '',
      alt: 'logo Kristyna Erbenova'
    },
    title: '',
    type: 'site',
    iconbtns: [
      {
        id: 'hamburger',
        icon: 'menu',
        disabled: false
      }
    ]
  };

  public siteNavigation = [
    'gallery', 'publications', 'biography', 'press/media', 'contact'
  ];

  public content = 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.';

  constructor() { }

  ngOnInit() {
  }

}
