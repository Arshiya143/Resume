import { Controller, Get, Post, Body, HttpCode, Param, Patch, Delete, Put } from '@nestjs/common';
import {SkillService} from './skill.service';
import {Skill} from './skill.entity';
 
@Controller('skill')
export class SkillController {
    constructor(private readonly skillService: SkillService){}
 
    @Get('all')
    async getAll():Promise<Skill[]>{
        return await this.skillService.findAll();
    }

    @Get(':id')
    async getOne(@Param('id') id):Promise<Skill>{
        return await this.skillService.findOne(id);
    }

    @Post('add')
    @HttpCode(201)
    createUser(@Body() newUser:any): Promise<any>{
	    return this.skillService.create(newUser);
    }

    @Put(':id')
    async update(@Param('id') id, @Body() skill: Skill): Promise<any> {
        skill.id = Number(id);
        return this.skillService.update(skill);
    } 

    @Delete(':id')
    async delete(@Param('id') id): Promise<any> {
      return this.skillService.delete(id);
    }

}