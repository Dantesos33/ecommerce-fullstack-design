"use client";

import { useState } from "react";
import Button from "./Button";

const categories = ["All Category", "Electronics", "Clothing", "Books"];

const Searchbar = () => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    alert(query);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-1 items-center mx-4 md:mx-8 lg:mx-16 border-2 border-blue-200 rounded-lg overflow-hidden"
    >
      <input
        type="text"
        name="query"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search"
        aria-label="Search products"
        className="flex-1 px-3 py-2 outline-none"
      />

      <select
        name="category"
        className="border-l-2 border-blue-200 px-3 py-2 outline-none"
      >
        {categories.map((category) => (
          <option key={category}>{category}</option>
        ))}
      </select>

      <Button type="submit">Search</Button>
    </form>
  );
};

export default Searchbar;
