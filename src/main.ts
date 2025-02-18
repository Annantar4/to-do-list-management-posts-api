import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE'
  }) 

  const config = new DocumentBuilder()
    .setTitle('To-do List Management Posts API')
    .setDescription('API Documentation')
    .setVersion('1.0')
    .addTag('Posts')
    .build()

    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('api/docs', app, document )

  await app.listen(3000);
}
bootstrap();
