import PropTypes from "prop-types";
const Blog = ({ blog, handleBookmarks, handleReadTime }) => {
  const {
    cover,
    title,
    author,
    author_img,
    posted_date,
    reading_time,
    hashtag,
    mark,
    time,
    id,
  } = blog;
  return (
    <div className="space-y-8 mb-16">
      <img className="w-full h-[500px] rounded-[10px]" src={cover} alt="" />
      <div className="flex justify-between">
        <div className="flex gap-6">
          <img className="w-14" src={author_img} alt="" />
          <div>
            <h2 className="text-2xl font-bold">{author}</h2>
            <p className="text-base font-semibold text-[#11111199]">
              {posted_date}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-xl font-medium text-[#11111199]">{reading_time}</p>
          <button onClick={() => handleBookmarks(blog)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-[#11111199]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
              />
            </svg>
          </button>
        </div>
      </div>
      <h2 className="text-4xl font-bold w-[700px] leading-[60px]">{title}</h2>
      <div className="flex gap-4">
        <p className="text-xl font-medium text-[#11111199]">{hashtag[0]}</p>
        <p className="text-xl font-medium text-[#11111199]">{hashtag[1]}</p>
      </div>
      <button
        onClick={() => handleReadTime(time, id)}
        className="text-xl font-semibold text-[#6047EC] underline"
      >
        {mark}
      </button>
    </div>
  );
};

export default Blog;

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};
