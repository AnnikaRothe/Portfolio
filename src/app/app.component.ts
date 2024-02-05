import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Portfolio';
  currentUrl: string = '';

  constructor(public translate: TranslateService, private router: Router) {
    router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        if (e.url != '') {
          this.currentUrl = e.url;
        } else {
          this.currentUrl = '';
        }
      }
    });
  }

  ngOnInit(): void {
  
}
}

