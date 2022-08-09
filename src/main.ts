import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Nest API')
    .setDescription('the description of the API')
    .setVersion('1.0')
    .addBearerAuth
    // {
    //   type: 'http',
    //   schema: 'Bearer',
    //   bearerFormat: 'Token',
    // } as SecuritySchemeObject,
    // 'Bearer',
    ()

    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
