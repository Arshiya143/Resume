import { Controller, Get, Post, Body, HttpCode, Param, Patch, Delete, Put } from '@nestjs/common';
import {UserService} from './user.service';
import {User} from './user.entity';
 
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService){}
 
    @Get('all')
    async getAll():Promise<User[]>{
        return await this.userService.findAll();
    }

    @Get(':email/:pass')
    async getOne(@Param('email') email, @Param('pass') pass):Promise<User>{
        const user = await this.userService.findOne(email);
        if(user.password == pass)
        {
            return user;
        }
    }

    @Post('add')
    @HttpCode(201)
    createUser(@Body() newUser:any){
	    this.userService.create(newUser);
    }

    @Put(':id')
    async update(@Param('id') id, @Body() user: User): Promise<any> {
        user.id = Number(id);
        console.log('Update #' + user.id)
        return this.userService.update(user);
    } 

    @Delete(':id')
    async delete(@Param('id') id): Promise<any> {
      return this.userService.delete(id);
    }

}