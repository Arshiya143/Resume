import { Controller, Get, Post, Body, HttpCode, Param, Patch, Delete, Put } from '@nestjs/common';
import {LangService} from './lang.service';
import {Language} from './lang.entity';
 
@Controller('language')
export class LangController {
    constructor(private readonly langService: LangService){}
 
    @Get('all')
    async getAll():Promise<Language[]>{
        return await this.langService.findAll();
    }

    @Get(':id')
    async getOne(@Param('id') id):Promise<Language>{
        return await this.langService.findOne(id);
    }

    @Post('add')
    @HttpCode(201)
    createUser(@Body() newLang:any): Promise<any>{
	    return this.langService.create(newLang);
    }

    @Put(':id')
    async update(@Param('id') id, @Body() lang: Language): Promise<any> {
        lang.id = Number(id);
        return this.langService.update(lang);
    } 

    @Delete(':id')
    async delete(@Param('id') id): Promise<any> {
      return this.langService.delete(id);
    }

}