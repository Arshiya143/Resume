import { Controller, Get, Post, Body, HttpCode, Param, Put, Delete } from '@nestjs/common';
import {EduService} from './edu.service';
import {Education} from './edu.entity';

// The @Controller decorator declares that this class will handle requests with the base URL path of '/edu'.

@Controller('edu')
export class EduController {
    constructor(private readonly eduService: EduService){}
 
    // The @Get('all') method handles GET requests to retrieve all Education objects. 

    @Get('all')
    async getAll():Promise<Education[]>{
        
        // The @Get('all') method handles GET requests to retrieve all Education objects. 

        return await this.eduService.findAll();
    }

    // The @Get(':id') method handles GET requests to retrieve a single Education object with a specified ID. 

    @Get(':id')
    async getOne(@Param('id') id):Promise<Education>{

        // It extracts the id parameter from the request URL using the @Param decorator and calls the findOne() method from the eduService.
                                                                           
        return await this.eduService.findOne(id);
    }

    // The @Post('add') method handles POST requests to create new Education objects.

    @Post('add')
    @HttpCode(201)
    createUser(@Body() newEdu:any): Promise<any>{

        // It extracts the object properties from the request body using the @Body decorator and calls the create() method from the eduService.

	    return this.eduService.create(newEdu);
    }

    // The @Put(':id') method handles PUT requests to update an existing Education object with a specified ID.

    @Put(':id')
    async update(@Param('id') id, @Body() edu: Education): Promise<any> {
        
        // It extracts the id parameter from the request URL using the @Param decorator and the updated Education object from the request body using the @Body decorator.
        edu.id = Number(id);
        
        // It sets the object's id field to the extracted id, and then calls the update() method from the eduService.
        return this.eduService.update(edu);
    } 

    // The @Delete(':id') method handles DELETE requests to remove an existing Education object with a specified ID.

    @Delete(':id')
    async delete(@Param('id') id): Promise<any> {

        //  It extracts the id parameter from the request URL using the @Param decorator and calls the delete() method from the eduService.

      return this.eduService.delete(id);
    }
}