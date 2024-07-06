import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { PostsMiddleware } from './posts.middleware';

@Module({
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(PostsMiddleware)
      .exclude({ path: 'posts', method: RequestMethod.POST }, 'posts/(.*)')
      .forRoutes(PostsController);
    // .forRoutes({ path: 'posts', method: RequestMethod.GET });
    // .exclude({ path: '/posts/:id', method: RequestMethod.POST }, 'posts/(.*)')
  }
}
