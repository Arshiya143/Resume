import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { IsNumberString, IsPhoneNumber, IsString } from 'class-validator';
import { Personal } from 'src/Personal/personal.entity';
 
@Entity()
export class Social {
  @PrimaryGeneratedColumn()
  @IsNumberString()
  id: number;

  @Column()
  @IsString()
  soc_web: string;

  @Column()
  @IsString()
  soc_link: string;

  @ManyToOne(() => Personal, (personal: Personal) => personal.social, { onDelete: 'CASCADE' })
  public personal: Personal;
}