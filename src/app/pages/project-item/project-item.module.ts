import { NgModule } from '@angular/core';
import { ProjectItemComponent } from './project-item.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  imports: [NgZorroAntdModule],
  declarations: [ProjectItemComponent],
  exports: [ProjectItemComponent]
})
export class ProjectItemModule { }
