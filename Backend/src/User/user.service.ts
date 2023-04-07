import { Injectable } from '@nestjs/common';
import { DeleteResult, FindOptionsWhere, ObjectID, Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
 
 
@Injectable()
export class UserService {
  
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  findAll(): Promise<User[]> {
    return this.userRepo.find();
  }

  findOne(email:string): Promise<User> {
    return this.userRepo.findOneBy({ email: email });
  }

  create(newUser){
    this.userRepo.insert(newUser)
   }

  async update(user: User): Promise<UpdateResult> {
      return await this.userRepo.update(user.id, user);
  }

  async delete(id:number): Promise<DeleteResult> {
      return await this.userRepo.delete(id);
  }

}