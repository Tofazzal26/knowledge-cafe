import { useState } from "react";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Header from "./Components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleBookmarks = (blog) => {
    const newBookmarked = [...bookmarks, blog];
    setBookmarks(newBookmarked);
  };
  return (
    <div>
      <Header />
      <div className="md:flex gap-6 container mx-auto">
        <Blogs handleBookmarks={handleBookmarks} />
        <Bookmarks bookmarks={bookmarks} />
      </div>
    </div>
  );
}

export default App;
