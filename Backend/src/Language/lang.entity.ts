import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { IsNumberString, IsPhoneNumber, IsString } from 'class-validator';
import { Resume } from 'src/Resume/resume.entity';
 
@Entity()
export class Language {
  @PrimaryGeneratedColumn()
  @IsNumberString()
  id: number;

  @Column()
  @IsString()
  name: string;

  @Column()
  @IsString()
  level: string;

  @ManyToOne(() => Resume, (resume: Resume) => resume.lang, { onDelete: 'CASCADE' })
  public resume: Resume;
}