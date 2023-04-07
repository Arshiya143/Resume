import { Controller, Get, Post, Body, HttpCode, Param, Delete, Put } from '@nestjs/common';
import {JobService} from './exp.service';
import {Job} from './exp.entity';
 
@Controller('job')
export class JobController {
    constructor(private readonly jobService: JobService){}
 
    @Get('all')
    async getAll():Promise<Job[]>{
        return await this.jobService.findAll();
    }

    @Get(':id')
    async getOne(@Param('id') id):Promise<Job>{
        return await this.jobService.findOne(id);
    }

    @Post('add')
    @HttpCode(201)
    createUser(@Body() newJob:any): Promise<any>{
	    return this.jobService.create(newJob);
    }

    @Put(':id')
    async update(@Param('id') id, @Body() job: Job): Promise<any> {
        job.id = Number(id);
        return this.jobService.update(job);
    } 

    @Delete(':id')
    async delete(@Param('id') id): Promise<any> {
      return this.jobService.delete(id);
    }

}