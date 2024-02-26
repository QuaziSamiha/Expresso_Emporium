import title from "../../../assets/images/404/Espresso Emporium.png";
import logo from "../../../assets/images/404/logo1 1.png";
const Header = () => {
  return (
    <>
      <section>
        <div className="bg-[#372727] h-16 w-full">
          <div>
            <div>
              <img src={logo} alt="" />
            </div>
            <div className="border border-red-500 w-80 h-32">
              <img src={title} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
