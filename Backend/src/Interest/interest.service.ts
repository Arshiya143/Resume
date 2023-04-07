import { Injectable } from '@nestjs/common';
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Interest } from './interest.entity'; 
 
@Injectable()
export class IntService {
  
  constructor(@InjectRepository(Interest) private intRepo: Repository<Interest>) {}

  findAll(): Promise<Interest[]> {
    return this.intRepo.find();
  }

  findOne(id:number): Promise<Interest> {
    return this.intRepo.findOneBy({ id: id });
  }

  create(newInterest): Promise<InsertResult>{
    return this.intRepo.insert(newInterest);
   }

  async update(user: Interest): Promise<UpdateResult> {
      return await this.intRepo.update(user.id, user);
  }

  async delete(id:number): Promise<DeleteResult> {
      return await this.intRepo.delete(id);
  }

}