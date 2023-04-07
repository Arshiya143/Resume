import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { IsNumberString, IsPhoneNumber, IsString } from 'class-validator';
import { Resume } from 'src/Resume/resume.entity';
 
@Entity()
export class Interest {
  @PrimaryGeneratedColumn()
  @IsNumberString()
  id: number;

  @Column()
  @IsString()
  name: string;

  @ManyToOne(() => Resume, (resume: Resume) => resume.interest, { onDelete: 'CASCADE' })
  public resume: Resume;
}