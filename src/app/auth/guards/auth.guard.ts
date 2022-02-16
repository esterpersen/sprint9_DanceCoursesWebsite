import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../service/authService.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return this.authService.saberSiUsuariHaFetLogIn()?.pipe(
      tap(isAuthenticated => {
        if (!isAuthenticated) {
          this.router.navigate(['/auth/login']);
        }
      })
    )
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.saberSiUsuariHaFetLogIn()?.pipe(
      tap(isAuthenticated => {
        if (!isAuthenticated) {
          this.router.navigate(['/auth/login']);
        }
      })
    )
  }
}
