
export const getReadBooks = () => {
  const stored = localStorage.getItem("readBooks");
  return stored ? JSON.parse(stored) : [];
};

export const addToReadBooks = (book) => {
  const storedBooks = getReadBooks();
  const isExist = storedBooks.find((b) => b.bookId === book.bookId);

  if (isExist) {
    return { status: "exist", message: "This book is already added!" };
  }

  storedBooks.push(book);
  localStorage.setItem("readBooks", JSON.stringify(storedBooks));

  return { status: "success", message: "Book added to Read list!" };
};
