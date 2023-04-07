import { Controller, Get, Post, Body, HttpCode, Param, Patch, Delete, Put } from '@nestjs/common';
import {IntService} from './interest.service';
import {Interest} from './interest.entity';
 
@Controller('interest')
export class IntController {
    constructor(private readonly intService: IntService){}
 
    @Get('all')
    async getAll():Promise<Interest[]>{
        return await this.intService.findAll();
    }

    @Get(':id')
    async getOne(@Param('id') id):Promise<Interest>{
        return await this.intService.findOne(id);
    }

    @Post('add')
    @HttpCode(201)
    createUser(@Body() newUser:any): Promise<any>{
	    return this.intService.create(newUser);
    }

    @Put(':id')
    async update(@Param('id') id, @Body() interest: Interest): Promise<any> {
        interest.id = Number(id);
        return this.intService.update(interest);
    } 

    @Delete(':id')
    async delete(@Param('id') id): Promise<any> {
      return this.intService.delete(id);
    }

}