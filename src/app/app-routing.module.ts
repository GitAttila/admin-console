import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { IntroComponent } from './components/intro/intro.component';

const routes: Routes = [
  { path: '', component: IntroComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent }
  // { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
