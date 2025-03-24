import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HttpModule, HttpService } from '@nestjs/axios';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { firstValueFrom } from 'rxjs';
import { DatabaseModule } from './database/database.module';
import { enviroments } from './enviroments';
import config from './config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV ?? 'default'] || '.env',
      load: [config],
      isGlobal: true,
    }),
    HttpModule, 
    UsersModule, 
    ProductsModule, 
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService,
    {
      provide: 'TASKS',
      useFactory: async (http: HttpService) => {
        const tasks = await firstValueFrom(http
          .get('https:/jsonplaceholder.typicode.com/todos')
        );
        return tasks.data;
      },
      inject: [HttpService],
    }
  ],
})
export class AppModule { }