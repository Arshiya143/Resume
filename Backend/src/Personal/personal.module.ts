import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
 
import { PersonalController } from './personal.controller';
import { Personal } from './personal.entity';
import { PersonalService } from './personal.service';
 
@Module({
  imports: [TypeOrmModule.forFeature([Personal])],
  providers: [PersonalService],
  controllers: [PersonalController],
})
export class PersonalModule {}