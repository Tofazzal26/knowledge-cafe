import Bookmark from "../../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readTime }) => {
  return (
    <div className="md:w-1/3">
      <div className="bg-[#efecfd] rounded-[8px] mb-4 border border-[#6047ec]">
        <h2 className="text-2xl font-bold text-[#6047EC] text-center p-6 ">
          Spent time on read : {readTime} min
        </h2>
      </div>
      <div className="bg-[#f3f3f3] p-6 rounded-[8px]">
        <h2 className="text-2xl font-bold">
          Bookmarked Blogs : {bookmarks.length}
        </h2>
        {bookmarks.map((bookmark) => (
          <Bookmark bookmark={bookmark} key={bookmark.id} />
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;
