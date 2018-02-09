import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userName:string = localStorage.getItem('name');
  pushRightClass: string = 'push-right';
  public now: Date = new Date();
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
    setInterval( () => {
      this.now = new Date();
    }, 1000);
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
    localStorage.clear();
  }

}
