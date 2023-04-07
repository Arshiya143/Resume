import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { IsNumberString, IsString } from 'class-validator';
import { Resume } from 'src/Resume/resume.entity';
 
@Entity()
export class Skill {
  @PrimaryGeneratedColumn()
  @IsNumberString()
  id: number;

  @Column()
  @IsString()
  name: string;

  @Column()
  @IsString()
  level: string;

  @ManyToOne(() => Resume, (resume: Resume) => resume.skill, { onDelete: 'CASCADE' })
  public resume: Resume;
}