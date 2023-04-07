import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { Resume } from 'src/Resume/resume.entity';
import { IsDate, IsEmail, IsNumberString, IsPhoneNumber, IsString } from 'class-validator';
import { Social } from 'src/Social/social.entity';
 
@Entity()
export class Job {
  @PrimaryGeneratedColumn()
  @IsNumberString()
  id: number;

  @Column()
  @IsString()
  job_title: string;

  @Column()
  @IsString()
  company: string;
 
  @Column()
  @IsDate()
  sdate: Date;

  @Column()
  @IsDate()
  edate: Date;

  @Column()
  @IsString()
  desc: string;

  @ManyToOne(() => Resume, (resume: Resume) => resume.job, { onDelete: 'CASCADE' })
  public resume: Resume;
}