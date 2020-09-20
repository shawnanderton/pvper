import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderBarComponent } from './header-bar/header-bar.component';
import { HeaderBarBrandComponent } from './header-bar-brand/header-bar-brand.component';

const components = [HeaderBarComponent, HeaderBarBrandComponent];

@NgModule({
  declarations: [components],
  imports: [CommonModule],
  exports: [components],
})
export class CoreModule {}
