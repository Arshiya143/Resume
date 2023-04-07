import { Controller, Get, Post, Body, HttpCode, Param, Patch, Delete, Put } from '@nestjs/common';
import {SumService} from './sum.service';
import {Summary} from './sum.entity';
 
@Controller('summary')
export class SumController {
    constructor(private readonly sumService: SumService){}
 
    @Get('all')
    async getAll():Promise<Summary[]>{
        return await this.sumService.findAll();
    }

    @Get(':id')
    async getOne(@Param('id') id):Promise<Summary>{
        return await this.sumService.findOne(id);
    }

    @Post('add')
    @HttpCode(201)
    createUser(@Body() newUser:any): Promise<any>{
	    return this.sumService.create(newUser);
    }

    @Put(':id')
    async update(@Param('id') id, @Body() sum: Summary): Promise<any> {
        sum.id = Number(id);
        return this.sumService.update(sum);
    } 

    @Delete(':id')
    async delete(@Param('id') id): Promise<any> {
      return this.sumService.delete(id);
    }

}