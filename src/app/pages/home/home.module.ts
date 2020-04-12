import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [NgZorroAntdModule],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
