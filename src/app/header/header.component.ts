import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  activeLink: string = '';
  isMiniMenuOpen: boolean = false;

  @ViewChild('miniMenuRef', { static: false })
  miniMenuRef!: ElementRef;

  constructor(private router: Router) {}

  setActiveLink(link: string) {
    this.activeLink = link;

    // Setzen Sie den activeLink nach 3 Sekunden zurück
    setTimeout(() => {
      this.activeLink = '';
    }, 2000);
  }

  openMiniMenu() {
    if (!this.isMiniMenuOpen) {
      const miniMenu = this.miniMenuRef.nativeElement;
      miniMenu.classList.add('mini-menu-toggle');
      miniMenu.style.display = 'flex';
      this.isMiniMenuOpen = true;
    } else {
      this.closeMiniMenu();
    }
  }

  closeMiniMenu() {
    const miniMenu = this.miniMenuRef.nativeElement;
    miniMenu.classList.remove('mini-menu-toggle');
    miniMenu.style.display = 'none';
    this.isMiniMenuOpen = false;
  }


  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    this.closeMiniMenu();
  }
}
