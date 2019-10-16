import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthProfile } from './auth.model';
import { AngularFireAuth } from '@angular/fire/auth';
import { UIService } from '../services/ui.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class AuthService {
  private isAuth = false;

  constructor(
    private afAuth: AngularFireAuth,
    private uiSvc: UIService,
    private router: Router,
    private snackbar: MatSnackBar) {}

  initAuthListener() {
    this.afAuth.authState.subscribe(
      (user) => {
        if (user) {
          this.isAuth = true;
          this.router.navigate(['']);
        } else {
          this.isAuth = false;
          this.router.navigate(['/login']);
        }
      }
    );
  }

  login(authprofile: AuthProfile) {
    this.uiSvc.loadingState.next(true);
    this.afAuth.auth.signInWithEmailAndPassword(
      authprofile.email,
      authprofile.password
    ).then(
      (res) => {
        this.uiSvc.loadingState.next(false);
      }
    ).catch(
      (error) => {
        this.uiSvc.loadingState.next(false);
        this.snackbar.open(error.message, 'DISMISS', {
          duration: 10000
        });
      }
    );
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  isAuthenticated() {
    return this.isAuth;
  }

}
