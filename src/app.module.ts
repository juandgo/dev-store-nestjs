import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { BrandsController } from './controllers/brands.controller';
// import { CategoriesController } from './products/cotrollers/categories.controller';
// import { ProductsController } from './products/cotrollers/products.controller';
// import { UsersController } from './users/controllers/users.controller';
// import { ProductsService } from './products/services/products.service';
// import { CategoriesService } from './products/services/categories.service';
// import { UsersService } from './users/services/users.service';
// import { BrandsService } from './services/brands.service';
// import { CustomersService } from './services/customers.service';
// import { CustomersController } from './controllers/customers.controller';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [UsersModule, ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }