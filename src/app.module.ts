import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { ChatModule } from './chat/chat.module';
import { PostsModule } from './posts/posts.module';
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { DashboardModule } from './dashboard/dashboard.module';
import { AuthMiddleware } from './middlewares/auth/auth.middleware';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [],
  providers: [],
  exports: [],
  imports: [
    ConfigModule.forRoot(),
    UsersModule,
    ProductsModule,
    ChatModule,
    PostsModule,
    DashboardModule,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('dashboard');
  }
}
