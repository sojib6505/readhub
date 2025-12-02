import { useContext } from "react";
import { useLoaderData } from "react-router";
import { ProductContext } from "../../ProductContext";
import { addToReadBooks } from '../../Utilites/LocalStorage';
export default function ProductDetails() {
  const books = useLoaderData();
  const { productId } = useContext(ProductContext);
  const selectedProduct = books.find(p => p.bookId === productId);
  const { bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = selectedProduct;
  const handleAddToRead = () => {
    const result = addToReadBooks(selectedProduct);
    alert(result.message);
  };
  return (
    <div className="grid grid-cols-2 mt-10 mb-10">
      <div className="w-[500px] p-20 bg-gray-300 rounded-xl">
        <img src={image} alt="" />
      </div>
      <div>
        <h2 className="text-4xl font-bold">{bookName}</h2>
        <p className="text-xl font-bold">By: {author}</p>
        <div className="divider"></div>
        <p>{category}</p>
        <div className="divider"></div>
        <p><span className="font-bold">Review :</span> {review}</p>
        <div className="flex gap-5 mt-5">
          <span className="font-bold">Tag:</span>
          <span className="text-[#23BE0A] font-bold">{tags[0]}</span>
          <span className="text-[#23BE0A] font-bold">{tags[1]}</span>
        </div>
        <div className="divider"></div>
        <div className="flex gap-10">
          <div className="text-xl font-semibold space-y-2">
            <p>Number of Pages:</p>
            <p>Publisher:</p>
            <p>Year of Publishing:</p>
            <p>Rating:</p>
          </div>
          <div className="text-xl font-semibold text-gray-500 space-y-2">
            <p>{totalPages}</p>
            <p>{publisher}</p>
            <p>{yearOfPublishing}</p>
            <p>{rating}</p>
          </div>
        </div>
        <div className="flex gap-2 mt-5">
          <button onClick={handleAddToRead} className="btn border-2">Read</button>
          <button className="btn bg-[#50B1C9] text-white">Wishlist</button>
        </div>
      </div>
    </div>
  );
}
