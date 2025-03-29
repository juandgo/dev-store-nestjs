import { User } from './user.entity';
import { Product } from '../../products/entities/product.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
  JoinTable,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Order {
  @CreateDateColumn({ type: 'timestamp' })
  date: Date;
  // @ManyToOne(() => User, { eager: true })
  user: User;
  // @ManyToMany(() => Product, { eager: true })
  // @JoinTable()
  products: Product[];
}
