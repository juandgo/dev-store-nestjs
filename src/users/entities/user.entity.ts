import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar', length: 100, unique: true })
  email: string;
  @Column({ type: 'varchar', length: 100, select: false })
  password: string;
  @Column({ type: 'varchar', length: 20, default: 'user' })
  role: string;
}
