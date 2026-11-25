import React from "react";
import LibraryCards from "./LibraryCards";
import LibraryHeader from "./LibraryHeader";


function LibraryBooks() {
  const books = [
    {
      code: "WEB 001",
      name: "Full stack Development",
      price: 90,
    },
    {
      code: "CS 001",
      name: "Introduction to Computer Science",
      price: 75,
    },
    {
      code: "BIO 001",
      name: "Introduction to Biology",
      price: 60,
    },
  ];
  return (
    <div>
      <LibraryHeader />
      <ul>
        {books.map((book) =>
              <LibraryCards bookInfo={book} />
            )}
      </ul>
      <div>
        <ul>
          <li>
            Total price of three books:{" "}
            {books.reduce((total, book) => total + book.price, 0)}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LibraryBooks;
