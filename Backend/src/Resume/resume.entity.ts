import { Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne, Column } from 'typeorm';
import { IsNumberString, IsString } from 'class-validator';
import { User } from 'src/User/user.entity';
import { Education } from 'src/Education/edu.entity';
import { Personal } from 'src/Personal/personal.entity';
import { Job } from 'src/Experience/exp.entity';
import { Skill } from 'src/Skill/skill.entity';
import { Language } from 'src/Language/lang.entity';
import { Summary } from 'src/Summary/sum.entity';
import { Interest } from 'src/Interest/interest.entity';
 
@Entity()
export class Resume {
  @PrimaryGeneratedColumn()
  @IsNumberString()
  id: number;

  @Column()
  @IsString()
  name: string;

  @ManyToOne(() => User, (user: User) => user.resume, { onDelete: 'CASCADE' })
  public user: User;

  @OneToMany(() => Education, (edu: Education) => edu.resume, { onDelete: 'CASCADE' })
  public edu: Education[];

  @OneToMany(() => Personal, (personal: Personal) => personal.resume, { onDelete: 'CASCADE' })
  public personal: Personal[];

  @OneToMany(() => Job, (job: Job) => job.resume, { onDelete: 'CASCADE' })
  public job: Job[];

  @OneToMany(() => Skill, (skill: Skill) => skill.resume, { onDelete: 'CASCADE' })
  public skill: Skill[];

  @OneToMany(() => Language, (lang: Language) => lang.resume, { onDelete: 'CASCADE' })
  public lang: Language[];

  @OneToMany(() => Summary, (sum: Summary) => sum.resume, { onDelete: 'CASCADE' })
  public sum: Summary[];

  @OneToMany(() => Interest, (interest: Interest) => interest.resume, { onDelete: 'CASCADE' })
  public interest: Interest[];
}