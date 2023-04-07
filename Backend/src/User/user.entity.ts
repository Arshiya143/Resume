 import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { IsEmail, IsNotEmpty, IsNumberString, IsString } from 'class-validator';
import { Resume } from 'src/Resume/resume.entity';
 
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  @IsNumberString()
  id: number;

  @Column()
  @IsString()
  name: string;

  @Column()
  @IsEmail()
  email: string;
 
  @Column()
  @IsNotEmpty()
  password: string;
 
  @OneToMany(() => Resume, (resume: Resume) => resume.user, { onDelete: 'CASCADE' })
  public resume: Resume[];
}