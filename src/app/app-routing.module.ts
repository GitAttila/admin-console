import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './adminconsole/components/login/login.component';
import { AuthGuard } from './adminconsole/auth/auth.guard';
import { AdminConsoleComponent } from './adminconsole/components/adminconsole/adminconsole.component';
import { WebSiteComponent } from './website/components/web-site/web-site.component';

const routes: Routes = [
  { path: '', component: WebSiteComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminConsoleComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
