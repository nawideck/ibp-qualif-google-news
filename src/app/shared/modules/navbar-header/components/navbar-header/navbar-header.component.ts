import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar-header',
  templateUrl: './navbar-header.component.html',
  styleUrls: ['./navbar-header.component.scss']
})
export class NavbarHeaderComponent {
  public isCollapsed: boolean;

  /**
   * Creates an instance of NavbarHeaderComponent.
   */
  constructor() {
    this.isCollapsed = true;
  }
}
