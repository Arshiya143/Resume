import { Injectable } from '@nestjs/common';
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Education } from './edu.entity';
 
// The class is decorated with the @Injectable() decorator, which allows it to be used in other parts of the application through dependency injection.

@Injectable()
export class EduService {
  /* The constructor takes in an InjectRepository decorator from TypeORM which injects an instance of the Education repository into the constructor, 
  enabling the use of TypeORM query methods to perform CRUD operations on a database.*/
                                        
  constructor(@InjectRepository(Education) private eduRepo: Repository<Education>) {}

  // The class has a method 'findAll' which returns all Education items in the database.
  
  findAll(): Promise<Education[]> {
    return this.eduRepo.find();
  }

  // The class has a method 'findOne' which returns a specific Education item based on its' unique id.

  findOne(id:number): Promise<Education> {
    return this.eduRepo.findOneBy({ id: id });
  }

  /* The class has a method 'create' which takes in a new Education item as a parameter and inserts it 
  into the database. It also returns an instance of InsertResult Class.*/ 

  create(newEdu): Promise<InsertResult>{
    return this.eduRepo.insert(newEdu);
   }

   /**The class has a method 'update' which takes in an Education item as a parameter and updates that item in 
    * the database based on its unique id. It also returns an instance of UpdateResult Class. */
  
   async update(edu: Education): Promise<UpdateResult> {
      return await this.eduRepo.update(edu.id, edu);
  }

  /**The class has a method 'delete' which takes an id in the parameter and deletes a specific Education item from 
   * the database based on its unique id. It also returns an instance of DeleteResult Class. */
  
  async delete(id:number): Promise<DeleteResult> {
      return await this.eduRepo.delete(id);
  }


}