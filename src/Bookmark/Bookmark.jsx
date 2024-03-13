const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;
  return (
    <div className="bg-[#ffffff] p-4 my-4 rounded-[8px]">
      <h2 className="text-lg font-semibold">{title}</h2>
    </div>
  );
};

export default Bookmark;
