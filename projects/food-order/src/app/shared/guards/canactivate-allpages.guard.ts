import { CanActivateFn } from '@angular/router';

export const canactivateAllpagesGuard: CanActivateFn = (route, state) => {
  return true;
};
