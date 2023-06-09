import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
 
import { SkillController } from './skill.controller';
import { Skill } from './skill.entity';
import { SkillService } from './skill.service';
 
@Module({
  imports: [TypeOrmModule.forFeature([Skill])],
  providers: [SkillService],
  controllers: [SkillController],
})
export class SkillModule {}