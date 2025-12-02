import { useEffect, useState } from "react"
import {getReadBooks} from '../../Utilites/LocalStorage'
import { CiLocationOn } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { MdOutlineContactPage } from "react-icons/md";

export default function ReadBook() {
    const [books ,setBooks] = useState([])
    useEffect(()=>{
        const readBook = getReadBooks()
        setBooks(readBook)
    },[])
   console.log(books)
  return (
   <div>
      {books.map(book=> (
        <div className="flex gap-10 mb-5" key={book.bookId}>
           <div className="w-1/6 p-5 bg-gray-300">
              <img src={book.image} alt="" />
           </div>
           <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-bold">{book.bookName}</h2>
                <p className="text-xl font-bold">By :{book.author}</p>
                <p className="flex gap-5 font-bold">Tag <span className="text-[#23BE0A] bg-gray-200 px-5 rounded-xl">{book.tags[0]}</span>  <span className="text-[#23BE0A] bg-gray-200 px-5 rounded-xl">{book.tags[1]}</span> <span className="flex items-center gap-2 text-gray-500"> <CiLocationOn/>Year Of Publishing: {book.yearOfPublishing}</span> </p>
               <div className="flex gap-5 items-center">
                 <p className="text-gray-500 font-semibold flex gap-2 items-center"> <CgProfile/> Publisher : {book.publisher}</p>
                 <p className="font-bold text-gray-500 flex gap-2 items-center"><MdOutlineContactPage/>  Page  {book.totalPages}</p>
               </div>
               <div className="divider"></div>
               <div className="flex items-center gap-5">
                   <p className="font-semibold text-[#328EFF] bg-gray-300 p-2 rounded-xl">Category: {book.category}</p>
                   <p className="font-semibold text-[#FFAC33] bg-gray-300 p-2 rounded-xl">Category: {book.rating}</p>
                   <button className="bg-[#23BE0A] text-white p-2 rounded-xl cursor-pointer">View Details</button>
               </div>
           </div>
        </div>
      ))}
   </div>
  )
}
