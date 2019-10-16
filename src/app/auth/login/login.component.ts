import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { logging } from 'protractor';
import { UIService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
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
    this.authSvc.login({
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    });
  }

  ngOnInit() {
    this.loginTitle = 'Login';
    this.loginSubtitle = 'Administration of CEZ web site';
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
