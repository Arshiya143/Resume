import { Controller, Get, Post, Body, HttpCode, Param, Patch, Delete, Put } from '@nestjs/common';
import {PersonalService} from './personal.service';
import {Personal} from './personal.entity';
 
@Controller('personal')
export class PersonalController {
    constructor(private readonly perService: PersonalService){}
 
    @Get('all')
    async getAll():Promise<Personal[]>{
        return await this.perService.findAll();
    }

    @Get(':id')
    async getOne(@Param('id') id):Promise<Personal>{
        return await this.perService.findOne(id);
    }

    @Post('add')
    @HttpCode(201)
    createUser(@Body() newPer:any):Promise<any>{
	    return this.perService.create(newPer);
    }

    @Put(':id')
    async update(@Param('id') id, @Body() per: Personal): Promise<any> {
        per.id = Number(id);
        return this.perService.update(per);
    } 

    @Delete(':id')
    async delete(@Param('id') id): Promise<any> {
      return this.perService.delete(id);
    }

}