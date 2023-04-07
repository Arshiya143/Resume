import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
 
import { IntController } from './interest.controller';
import { Interest } from './interest.entity';
import { IntService } from './interest.service';
 
@Module({
  imports: [TypeOrmModule.forFeature([Interest])],
  providers: [IntService],
  controllers: [IntController],
})
export class IntModule {}