import { SetMetadata } from '@nestjs/common';
import { SystemRoles } from 'src/guards/roles/roles.enum';

export const Roles = (...args: SystemRoles[]) => SetMetadata('roles', args);
