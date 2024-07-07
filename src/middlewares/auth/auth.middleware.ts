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
    } else {
      return res.status(HttpStatus.ACCEPTED).json({
        message: 'You have access to this protected resource',
      });
    }
    // 3. valid token

    req['user'] = 'codeawy';

    next();
  }
}
