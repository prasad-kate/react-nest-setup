import { CorsOptions } from "@nestjs/common/interfaces/external/cors-options.interface";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const corsOptions: CorsOptions = {
    origin: ["http://localhost:5173", "http://localhost:4173"],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  };

  app.enableCors(corsOptions);

  await app.listen(8000);
}
bootstrap();
