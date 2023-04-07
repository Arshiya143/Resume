import { Controller, Get, Post, Body, HttpCode, Param, Delete, Put } from '@nestjs/common';
import {SocialService} from './social.service';
import {Social} from './social.entity';
 
@Controller('social')
export class SocialController {
    constructor(private readonly socService: SocialService){}
 
    @Get('all')
    async getAll():Promise<Social[]>{
        return await this.socService.findAll();
    }

    @Get(':id')
    async getOne(@Param('id') id):Promise<Social>{
        return await this.socService.findOne(id);
    }

    @Post('add')
    @HttpCode(201)
    createUser(@Body() newUser:any): Promise<any>{
	    return this.socService.create(newUser);
    }

    @Put(':id')
    async update(@Param('id') id, @Body() soc: Social): Promise<any> {
        soc.id = Number(id);
        return this.socService.update(soc);
    } 

    @Delete(':id')
    async delete(@Param('id') id): Promise<any> {
      return this.socService.delete(id);
    }

}