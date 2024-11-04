import { CreateBookDto } from "../dto/create-book.dto";

export class Book {
    id:number;
    title:string;
    author:string;
    isbn:string;
    publishYear:number;
    reserved:boolean;

}
