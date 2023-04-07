import { Injectable } from '@nestjs/common';
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Skill } from './skill.entity';
 
@Injectable()
export class SkillService {
  
  constructor(@InjectRepository(Skill) private skillRepo: Repository<Skill>) {}

  findAll(): Promise<Skill[]> {
    return this.skillRepo.find();
  }

  findOne(id:number): Promise<Skill> {
    return this.skillRepo.findOneBy({ id: id });
  }

  create(newSkill): Promise<InsertResult>{
    return this.skillRepo.insert(newSkill);
   }

  async update(skill: Skill): Promise<UpdateResult> {
      return await this.skillRepo.update(skill.id, skill);
  }

  async delete(id:number): Promise<DeleteResult> {
      return await this.skillRepo.delete(id);
  }

}