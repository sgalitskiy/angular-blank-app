import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';

const routes:Routes = [
  {path: 'login', component: LoginComponent},
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'admin', loadChildren:'./admin/admin.module#AdminModule'},
  {path: 'user', component: UserComponent}
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  declarations: [],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
