import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
 
import { SumController } from './sum.controller';
import { Summary } from './sum.entity';
import { SumService } from './sum.service';
 
@Module({
  imports: [TypeOrmModule.forFeature([Summary])],
  providers: [SumService],
  controllers: [SumController],
})
export class SumModule {}