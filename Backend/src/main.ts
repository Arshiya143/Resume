import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

/**The code defines a function called bootstrap, which creates an instance of the NestJS application, 
 * enables cors, and listens for requests on port 3000. */

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
