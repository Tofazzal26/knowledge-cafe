import { useState } from "react";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Header from "./Components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readTime, setReadTime] = useState(0);

  const handleReadTime = (time, id) => {
    const newReadingTime = readTime + time;
    setReadTime(newReadingTime);
    const removeBookmark = bookmarks.filter((idx) => idx.id !== id);
    setBookmarks(removeBookmark);
  };

  const handleBookmarks = (blog) => {
    const newBookmarked = [...bookmarks, blog];
    setBookmarks(newBookmarked);
  };
  return (
    <div>
      <Header />
      <div className="md:flex gap-6 container mx-auto">
        <Blogs
          handleReadTime={handleReadTime}
          handleBookmarks={handleBookmarks}
        />
        <Bookmarks readTime={readTime} bookmarks={bookmarks} />
      </div>
    </div>
  );
}

export default App;
