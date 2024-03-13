import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <div className="md:flex container mx-auto">
        <Blogs />
        <Bookmarks />
      </div>
    </div>
  );
}

export default App;
