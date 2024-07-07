import { HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
      return res.status(HttpStatus.UNAUTHORIZED).json({
        message: 'Bad Request',
      });
    }

    req['user'] = {
      username: 'codeawy',
      roles: ['ADMIN'],
    };

    next();
  }
}
