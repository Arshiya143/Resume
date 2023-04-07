import { Injectable } from '@nestjs/common';
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Language } from './lang.entity';
 
@Injectable()
export class LangService {
  
  constructor(@InjectRepository(Language) private langRepo: Repository<Language>) {}

  findAll(): Promise<Language[]> {
    return this.langRepo.find();
  }

  findOne(id:number): Promise<Language> {
    return this.langRepo.findOneBy({ id: id });
  }

  create(newLang): Promise<InsertResult>{
    return this.langRepo.insert(newLang);
   }

  async update(lang: Language): Promise<UpdateResult> {
      return await this.langRepo.update(lang.id, lang);
  }

  async delete(id:number): Promise<DeleteResult> {
      return await this.langRepo.delete(id);
  }

}