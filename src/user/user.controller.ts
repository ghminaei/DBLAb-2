import { Body, Controller, Get, Param, Delete, ParseIntPipe, Post, Put } from '@nestjs/common';
import { UserServices } from './user.service';
import CreateUserDto from './dto/create-user.dto';

@Controller('users')
export class UserController {
    constructor(private readonly usersServices: UserServices) { }
    @Post('post')
    postUser(@Body() user: CreateUserDto) {
        return this.usersServices.insert(user);
    }
    @Get()
    getAll() {
        return this.usersServices.getAllUsers();
    }

    @Get('books')
    getBooks(@Body('userID', ParseIntPipe) userID: number) {
        return this.usersServices.getBooksOfUser(userID);
    }

    @Delete(':id')
    async remove(@Param('id') id: number) {
        return this.usersServices.remove(id)
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() updates: CreateUserDto) {
        return this.usersServices.update(id, updates)
    }
}