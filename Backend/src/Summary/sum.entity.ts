import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { IsNumberString, IsPhoneNumber, IsString } from 'class-validator';
import { Resume } from 'src/Resume/resume.entity';
 
@Entity()
export class Summary {
  @PrimaryGeneratedColumn()
  @IsNumberString()
  id: number;

  @Column()
  @IsString()
  desc: string;

  @ManyToOne(() => Resume, (resume: Resume) => resume.sum, { onDelete: 'CASCADE' })
  public resume: Resume;
}