import { Injectable } from '@nestjs/common';
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Job } from './exp.entity'; 
 
@Injectable()
export class JobService {
  
  constructor(@InjectRepository(Job) private jobRepo: Repository<Job>) {}

  findAll(): Promise<Job[]> {
    return this.jobRepo.find();
  }

  findOne(id:number): Promise<Job> {
    return this.jobRepo.findOneBy({ id: id });
  }

  create(newJob): Promise<InsertResult>{
    return this.jobRepo.insert(newJob);
   }

  async update(job: Job): Promise<UpdateResult> {
      return await this.jobRepo.update(job.id, job);
  }

  async delete(id:number): Promise<DeleteResult> {
      return await this.jobRepo.delete(id);
  }

}