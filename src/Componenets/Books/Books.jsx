import { useLoaderData } from "react-router"
import Book from "../Book/Book"


export default function Books() {
  const books = useLoaderData()
  
  return (
    <>
    <h2 className="text-center text-4xl font-bold mb-10">Books</h2>
    <div className="grid  md:grid-cols-3 gap-5 mb-10">
      {books.map(book => <Book key={book.bookId} book={book}></Book>)}
    </div>
    </>
  )
}
