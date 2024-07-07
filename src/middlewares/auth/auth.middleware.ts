import { HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
      return res.status(HttpStatus.UNAUTHORIZED).json({
        message: 'Invalid token provided',
      });
    } else {
      return res.status(HttpStatus.ACCEPTED).json({
        message: 'You have access to this protected resource',
      });
    }

    next();
  }
}
