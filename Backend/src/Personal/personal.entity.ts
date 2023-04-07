import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { Resume } from 'src/Resume/resume.entity';
import { IsEmail, IsNumberString, IsPhoneNumber, IsString } from 'class-validator';
import { Social } from 'src/Social/social.entity';
 
@Entity()
export class Personal {
  @PrimaryGeneratedColumn()
  @IsNumberString()
  id: number;

  @Column()
  @IsString()
  name: string;

  @Column()
  @IsString()
  profession: string;
 
  @Column()
  @IsPhoneNumber()
  phone: string;
 
  @Column()
  @IsEmail()
  email: string;

  @Column()
  @IsString()
  city: string;

  @Column()
  @IsString()
  country: string;

  @Column()
  @IsNumberString()
  pincode: number;

  @ManyToOne(() => Resume, (resume: Resume) => resume.personal, { onDelete: 'CASCADE' })
  public resume: Resume;

  @OneToMany(() => Social, (social: Social) => social.personal, { onDelete: 'CASCADE' })
  public social: Social[];
}