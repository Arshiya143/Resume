import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
 
import { LangController } from './lang.controller';
import { Language } from './lang.entity';
import { LangService } from './lang.service';
 
@Module({
  imports: [TypeOrmModule.forFeature([Language])],
  providers: [LangService],
  controllers: [LangController],
})
export class LangModule {}