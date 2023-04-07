import { Injectable } from '@nestjs/common';
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Resume } from './resume.entity';
 
@Injectable()
export class ResumeService {
  
  constructor(@InjectRepository(Resume) private resumeRepo: Repository<Resume>) {}

  findAll(): Promise<Resume[]> {
    return this.resumeRepo.find();
  }

  findOne(id:number): Promise<Resume> {
    return this.resumeRepo.findOneBy({ id: id });
  }

  create(newResume): Promise<InsertResult>{
    return this.resumeRepo.insert(newResume);
   }

  async update(resume: Resume): Promise<UpdateResult> {
      return await this.resumeRepo.update(resume.id, resume);
  }

  async delete(id:number): Promise<DeleteResult> {
      return await this.resumeRepo.delete(id);
  }

}