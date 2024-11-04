import { HttpCode, Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';

@Injectable()
export class BooksService {

  //példa könyvekkel toltsd fel
  books = [
    {
      id: 1,
      title: "Elsokonyv",
      author: "Alkotó",
      isbn: "1111",
      publishYear: 1984,
      reserved: false
    },
    {
      id: 2,
      title: "Masodik",
      author: "MasodikAlkoto",
      isbn: "2222",
      publishYear: 1994,
      reserved: true
    },
    {
      id: 3,
      title: "Harmadik",
      author: "HarmadikAlkoto",
      isbn: "3333",
      publishYear: 2004,
      reserved: false
    }

  ] as Book[]



  create(createBookDto: CreateBookDto) {
    let newbook = {
      id: this.books.length + 1,
      title: createBookDto.title,
      author: createBookDto.author,
      isbn: createBookDto.isbn,
      publishYear: createBookDto.publishYear,
      reserved: false
    } as Book
    console.log(createBookDto);
    this.books.push(newbook)
  }

  findAll() {
    return this.books;
  }

  findOne(id: number) {
   return this.books.find(book => book.id === id);
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    let found = this.books.findIndex(book => book.id === id)
    let newbook = {
      id: id,
      title: updateBookDto.title,
      author: updateBookDto.author,
      isbn: updateBookDto.isbn,
      publishYear: updateBookDto.publishYear,
      reserved: updateBookDto.reserved} as Book
    this.books[found] = newbook;
    return this.findAll();
  }

  remove(id: number) {
    this.books.splice(this.books.findIndex(book => book.id === id), 1);
    return;
    }

}
