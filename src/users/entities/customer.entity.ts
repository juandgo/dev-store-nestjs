import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar', length: 50 })
  name: string;
  @Column({ type: 'varchar', length: 50 })
  lastName: string;
  @Column({ type: 'varchar', length: 15 })
  phone: string;
}
