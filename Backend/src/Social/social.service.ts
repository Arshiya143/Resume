import { Injectable } from '@nestjs/common';
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Social } from './social.entity';
 
@Injectable()
export class SocialService {
  
  constructor(@InjectRepository(Social) private socRepo: Repository<Social>) {}

  findAll(): Promise<Social[]> {
    return this.socRepo.find();
  }

  findOne(id:number): Promise<Social> {
    return this.socRepo.findOneBy({ id: id });
  }

  create(newSocial): Promise<InsertResult>{
    return this.socRepo.insert(newSocial);
   }

  async update(soc: Social): Promise<UpdateResult> {
      return await this.socRepo.update(soc.id, soc);
  }

  async delete(id:number): Promise<DeleteResult> {
      return await this.socRepo.delete(id);
  }

}