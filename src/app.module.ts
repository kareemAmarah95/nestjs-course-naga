import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { ChatModule } from './chat/chat.module';
import { PostsModule } from './posts/posts.module';
import { Module } from '@nestjs/common';
import { DashboardModule } from './dashboard/dashboard.module';

@Module({
  controllers: [],
  providers: [],
  exports: [],
  imports: [UsersModule, ProductsModule, ChatModule, PostsModule, DashboardModule],
})
export class AppModule {}
