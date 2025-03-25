import { Module } from '@nestjs/common';

import { BrandsController } from './cotrollers/brands.controller';
import { ProductsController } from './cotrollers/products.controller';
import { CategoriesController } from './cotrollers/categories.controller';
import { ProductsService } from './services/products.service';
import { CategoriesService } from './services/categories.service';
import { BrandsService } from './services/brands.service';

@Module({
  controllers: [ProductsController, CategoriesController, BrandsController],
  providers: [ProductsService, CategoriesService, BrandsService],
  exports: [ProductsService],
})
export class ProductsModule {}
