import { Controller, Get, Post, Body, HttpCode, Param, Patch, Delete, Put } from '@nestjs/common';
import {ResumeService} from './resume.service';
import {Resume} from './resume.entity';
 
@Controller('resume')
export class ResumeController {
    constructor(private readonly resumeService: ResumeService){}
 
    @Get('all')
    async getAll():Promise<Resume[]>{
        return await this.resumeService.findAll();
    }

    @Get(':id')
    async getOne(@Param('id') id):Promise<Resume>{
        return await this.resumeService.findOne(id);
    }

    @Post('add')
    @HttpCode(201)
    createUser(@Body() newResume:any):Promise<any>{
	    return this.resumeService.create(newResume);
    }

    @Put(':id')
    async update(@Param('id') id, @Body() resume: Resume): Promise<any> {
        resume.id = Number(id);
        return this.resumeService.update(resume);
    } 

    @Delete(':id')
    async delete(@Param('id') id): Promise<any> {
      return this.resumeService.delete(id);
    }

}