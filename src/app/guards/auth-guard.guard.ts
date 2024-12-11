import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { inject, Inject } from '@angular/core';
// import sess

export const authGuardGuard: CanActivateFn = (route : ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  let session: boolean = true;
  const router:Router = inject(Router);
  const protectedRoutes: string[] = ['/help'];
  // console.log();
  return protectedRoutes.includes(state.url) && session ? router.navigate(['/']) : true 
  // return protectedRoutes.includes(state.url) ? router.navigate(['./help']) : false
};
