import { Injectable } from '@nestjs/common';
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Summary } from './sum.entity';
 
@Injectable()
export class SumService {
  
  constructor(@InjectRepository(Summary) private sumRepo: Repository<Summary>) {}

  findAll(): Promise<Summary[]> {
    return this.sumRepo.find();
  }

  findOne(id:number): Promise<Summary> {
    return this.sumRepo.findOneBy({ id: id });
  }

  create(newSum):Promise<InsertResult>{
    return this.sumRepo.insert(newSum);
   }

  async update(sum: Summary): Promise<UpdateResult> {
      return await this.sumRepo.update(sum.id, sum);
  }

  async delete(id:number): Promise<DeleteResult> {
      return await this.sumRepo.delete(id);
  }

}