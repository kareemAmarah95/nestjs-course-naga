import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { Roles } from 'src/decorators/roles/roles.decorator';
import { SystemRoles } from 'src/guards/roles/roles.enum';
import { ForbiddenException } from '../../../errors/forbidden.exception';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const roles: SystemRoles[] = this.reflector.get<SystemRoles[]>(
      'roles',
      context.getHandler(),
    );
    console.log(roles);
    if (!roles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    if (!user) {
      throw new ForbiddenException();
    }
    return roles.every((role) => user.roles.includes(role));
    // return matchRoles(roles, user.roles);
  }
}
