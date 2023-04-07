import { Injectable } from '@nestjs/common';
import { DeleteResult, FindOptionsWhere, InsertResult, ObjectID, Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Personal } from './personal.entity';
 
@Injectable()
export class PersonalService {
  
  constructor(@InjectRepository(Personal) private perRepo: Repository<Personal>) {}

  findAll(): Promise<Personal[]> {
    return this.perRepo.find();
  }

  findOne(id:number): Promise<Personal> {
    return this.perRepo.findOneBy({ id: id });
  }

  create(newPer):Promise<InsertResult>{
    return this.perRepo.insert(newPer);
   }

  async update(per: Personal): Promise<UpdateResult> {
      return await this.perRepo.update(per.id, per);
  }

  async delete(id:number): Promise<DeleteResult> {
      return await this.perRepo.delete(id);
  }

}