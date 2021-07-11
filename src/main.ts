import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import dotEnvExtended from 'dotenv-extended';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import * as helmet from 'helmet';

dotEnvExtended.load(); // load for db migration, not import through main.ts
async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: console, // use built-in console for simple logging
  });
  // security
  app.use(helmet());
  app.useGlobalPipes(
    new ValidationPipe({
      disableErrorMessages: true, // validate all endpoints but disable detailed error message
    }),
  );
  // swagger
  const config = new DocumentBuilder()
    .setTitle('Api Documentation')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/docs', app, document);
  await app.listen(3000);
}

bootstrap();
