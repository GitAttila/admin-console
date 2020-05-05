import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AngularMaterialModule } from './angular-material.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './adminconsole/components/header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './adminconsole/components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminConsoleComponent } from './adminconsole/components/adminconsole/adminconsole.component';
import { AuthService } from './adminconsole/auth/auth.service';
// import { AngularFireModule } from '@angular/fire';
// import { AngularFireAuthModule } from '@angular/fire/auth';
// import { environment } from '../environments/environment';
import { UIService } from './adminconsole/services/ui.service';
import { WebSiteComponent } from './website/components/web-site/web-site.component';
import { SiteHeaderComponent } from './website/components/site-header/site-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    AdminConsoleComponent,
    WebSiteComponent,
    SiteHeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFireAuthModule
  ],
  providers: [
    AuthService,
    UIService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
