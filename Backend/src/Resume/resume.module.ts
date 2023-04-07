import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
 
import { ResumeController } from './resume.controller';
import { Resume } from './resume.entity';
import { ResumeService } from './resume.service';
 
@Module({
  imports: [TypeOrmModule.forFeature([Resume])],
  providers: [ResumeService],
  controllers: [ResumeController],
})
export class ResumeModule {}