import { ActivatedRoute, CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { inject } from '@angular/core';

export const AuthenticationGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthenticationService);
  const router = inject(Router);
  if (auth.getUser.isLogged) {
    return true;
  } else {
    router.navigate(['/auth/login']);
    return false;
  }
};
