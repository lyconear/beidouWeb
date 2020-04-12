import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectItemComponent } from './pages/project-item/project-item.component';
import { HomeComponent } from './pages/home/home.component';
import { UserManagementComponent } from './pages/user-management/user-management.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component:  HomeComponent},
  { path: 'project/:name', component:  ProjectItemComponent},
  { path: 'project', component:  ProjectItemComponent},
  { path: 'user-management', component: UserManagementComponent }
  // { path: 'user-management', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
