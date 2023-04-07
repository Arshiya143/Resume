import { IsDate, IsString } from 'class-validator';
import { Resume } from 'src/Resume/resume.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

/**The Education entity is defined as having an id (which is automatically generated), a college name, location, degree,field
 * a start date & end date (which must be a date), and a relationship to the Resume entity. */
@Entity()
export class Education{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsString()
  clg_name: string;

  @Column()
  @IsString()
  location: string;
 
  @Column()
  @IsString()
  degree: string;
 
  @Column()
  @IsString()
  field: string;

  @Column()
  @IsDate()
  sdate: Date;

  @Column()
  @IsDate()
  edate: Date;

  @ManyToOne(() => Resume, (resume: Resume) => resume.edu, { onDelete: 'CASCADE' })
  public resume: Resume;
}