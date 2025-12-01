import { useContext } from "react"
import { useLoaderData } from "react-router"
import { ProductContext } from "../../ProductContext"
export default function ProductDetails() {
  const books = useLoaderData()
  const {productId} = useContext(ProductContext)
  const selectedProduct = books.find(p => p.bookId === productId)
  const {bookId,bookName,author,image,review,totalPages,rating,category,tags,publisher,yearOfPublishing} = selectedProduct
  return (
    <div className="grid grid-cols-2  mt-10 mb-10">
     <div className="w-[500px] p-20 bg-gray-300 rounded-xl">
        <img src={image} alt="" />
     </div>
     <div>
        <h2 className="text-4xl font-bold">{bookName}</h2>
        <p className="text-xl font-bold">By: {author}</p>
        <div className="divider"></div>
        <p>{category}</p>
        <div className="divider"></div>
        <div>
          <span className="font-bold">Review :</span>{review}
        </div>
        <div className="flex gap-5 mt-5">
          <span className="font-bold">Tag</span>
          <span className="text-[#23BE0A] font-bold">{tags[0]}</span>
          <span className="text-[#23BE0A] font-bold">{tags[1]}</span>
        </div>
        <div className="divider"></div>
        <div className="flex gap-5">
          <td className="text-xl font-semibold">
            <tr>Number of Pages:</tr>
            <tr>Publisher:</tr>
            <tr>Year of Publishing:</tr>
            <tr>Rating:</tr>
          </td>
          <td className="text-xl font-semibold text-gray-500">
            <tr>{totalPages}</tr>
            <tr>{publisher}</tr>
            <tr>{yearOfPublishing}</tr>
            <tr>{rating}</tr>
          </td>
        </div>
     </div>
    </div>
  )
}
