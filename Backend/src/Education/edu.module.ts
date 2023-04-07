import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
 
import { EduController } from './edu.controller';
import { Education } from './edu.entity';
import { EduService } from './edu.service';
 
/**This code defines a module called EduModule, which imports the Education entity from TypeOrm, 
 * as well as EduService and EduController. The module is then exported.*/

@Module({
  imports: [TypeOrmModule.forFeature([Education])],
  providers: [EduService],
  controllers: [EduController],
})
export class EduModule {}