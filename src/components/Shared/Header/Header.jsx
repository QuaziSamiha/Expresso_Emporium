import title from "../../../assets/images/404/Espresso Emporium.png";
import logo from "../../../assets/images/404/logo1 1.png";
const Header = () => {
  return (
    <>
      <section>
        <div className="bg-[#372727] h-14">
          <div className="flex justify-center items-center">
            <div className="flex my-4 lg:my-2">
              <div>
                <img src={logo} alt="" className="h-8 lg:h-10 mr-1" />
              </div>
              <div className="">
                <img src={title} alt="" className="h-8 lg:h-10 ml-1" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
