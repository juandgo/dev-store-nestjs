import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist:true,//ignora datos adicionales ingresados por url
    forbidNonWhitelisted: true,//alerta de ingreso de datos adicionales
  }));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
