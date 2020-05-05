import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { UIService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit, OnDestroy {
  public loginForm: FormGroup;
  public loginTitle: string;
  public loginSubtitle: string;
  private loadingSubs: Subscription;
  public isLoading = false;
  public hidePass = true;

  constructor(
    private authSvc: AuthService,
    private uiSvc: UIService) {}

  getErrMsg() {
    if (this.loginForm.get('email').errors) {
      if (this.loginForm.get('email').errors.required) {
        return 'Please enter your email.';
      } else if (this.loginForm.get('email').errors.email) {
        return 'Please enter valid email.';
      }
    }
  }

  onSubmit() {
    // this.authSvc.login({
    //   email: this.loginForm.value.email,
    //   password: this.loginForm.value.password
    // });
  }

  ngOnInit() {
    this.loginTitle = 'Login to admin console';
    this.loginSubtitle = 'Administration of Kristýna Erbenová web site';
    this.loginForm = new FormGroup({
      email: new FormControl('', {
        validators: [Validators.required, Validators.email]
      }),
      password: new FormControl('', {
        validators: [Validators.required]
      })
    });
    this.loadingSubs = this.uiSvc.loadingState.subscribe(
      (isLoading) => {
        this.isLoading = isLoading;
      }
    );
  }

  ngOnDestroy() {
    this.loadingSubs.unsubscribe();
  }

}
