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
    // 3. verify the token
    console.log(process.env.JWT_SECRET);
    // const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // if (decoded) {
    //   return res.status(HttpStatus.UNAUTHORIZED).json({
    //     message: 'Valid token provided',
    //   });
    // }

    next();
  }
}
