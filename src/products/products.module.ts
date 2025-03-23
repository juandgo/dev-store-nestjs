import { Module } from '@nestjs/common';

import { ProductsController } from './cotrollers/products.controller';
import { CategoriesController } from './cotrollers/categories.controller';
import { ProductsService } from './services/products.service';
import { CategoriesService } from './services/categories.service';

@Module({
    controllers: [ProductsController, CategoriesController],
    providers:[ProductsService, CategoriesService]
})
export class ProductsModule { }
