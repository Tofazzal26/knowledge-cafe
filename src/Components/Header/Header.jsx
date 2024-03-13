import profile from "../../images/profile.png";

const Header = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between my-6 border-b-2 pb-6">
        <h2 className="text-4xl font-bold ">Knowledge-Cafe</h2>
        <img src={profile} alt="" />
      </div>
    </div>
  );
};

export default Header;
