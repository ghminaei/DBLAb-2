
import BooksService from './books.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import CreateBookDto from 'src/user/dto/create-book.dto';

@Controller('books')
export default class BooksController {
    constructor(private readonly booksService: BooksService) { }
    @Post('post')
    postGenre(@Body() genre: CreateBookDto) {
        return this.booksService.insert(genre);
    }

    @Get()
    getAll() {
        return this.booksService.getAllBooks();
    }

    @Delete(':id')
    async remove(@Param('id') id: number) {
        return this.booksService.remove(id);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() updates: CreateBookDto) {
        return this.booksService.update(id, updates);
    }
}