import { CiStar } from "react-icons/ci";

export default function Book({book}) {
    
    const {bookId,bookName,author,image,review,totalPages,rating,category,tags,publisher,yearOfPublishing} = book
    console.log(image)
  return (
    <div className="p-6 border border-[#131313] rounded-xl mx-auto">
       <div className="w-[326px]  flex justify-center py-10 bg-gray-300 rounded-xl">
          <img className="  h-[166px]" src={image} alt="book-img" />
       </div>
       <div className="flex gap-2 mt-2">
        <span className="bg-gray-300 text-[#23BE0A] font-bold rounded-2xl px-4">{tags[0]}</span>
        <span className="bg-gray-300 text-[#23BE0A] font-bold rounded-2xl px-4">{tags[1]}</span>
       </div>
      <div className="grid gap-2 py-3 border-b border-dashed">
         <h1 className="text-xl font-semibold">{bookName}</h1>
         <p className="font-semibold">By: {author}</p>
      </div>
      <div className="flex justify-between mt-2">
        <span className="font-semibold">{category}</span>
        <span className="flex items-center gap-2 font-semibold">{rating}<CiStar/></span>
      </div>
    </div>
  )
}
