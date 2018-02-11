import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  userName: string = localStorage.getItem('name');
  isActive: boolean = false;
  showMenu: string = '';
  pushRightClass: string = 'push-right';
  constructor(public router: Router) {

    this.router.events.subscribe(val => {
      if (
        val instanceof NavigationEnd &&
        window.innerWidth <= 992 &&
        this.isToggled()
      ) {
        this.toggleSidebar();
      }
    });
  }

  ngOnInit() {
  }

  addExpandClass(element: any) {
    if (element === this.showMenu) {
      this.showMenu = '0';
    } else {
      this.showMenu = element;
    }
  }

  eventCalled() {
    this.isActive = !this.isActive;
  }

  isToggled(): boolean {
    const dom: Element = document.querySelector('.sidebar');
    return dom.classList.contains(this.pushRightClass);
  }

  toggleSidebar() {
    const dom: any = document.querySelector('.sidebar');
    dom.classList.toggle(this.pushRightClass);
  }

  onLoggedout() {
    localStorage.removeItem('isLoggedin');
  }

}
