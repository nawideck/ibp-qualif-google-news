import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarHeaderComponent } from './components/navbar-header/navbar-header.component';
import { RouterModule } from '@angular/router';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [NavbarHeaderComponent],
  imports: [CommonModule, RouterModule, NgbCollapseModule],
  exports: [NavbarHeaderComponent]
})
export class NavbarHeaderModule {}
