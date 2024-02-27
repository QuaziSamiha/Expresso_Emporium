import { Link, useRouteError } from "react-router-dom";
import errorImg from "../../assets/images/404/404.gif";
const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <div id="error-page">
        <div className="">
          <div className="flex flex-col justify-center items-center">
            <div className="mt-8">
              <Link to="/">
                <button className="">Back to home</button>
              </Link>
            </div>
            <img src={errorImg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
