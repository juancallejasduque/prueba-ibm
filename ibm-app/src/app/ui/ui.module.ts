import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { MenuComponent } from './layout/menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, MenuComponent],
  imports: [
    CommonModule
  ],
  exports: [LayoutComponent]
})
export class UiModule { }
