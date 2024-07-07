import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RolesGuard } from './guards/auth/roles/roles.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(5001);
}
bootstrap();
