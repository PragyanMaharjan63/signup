import { Link } from "react-router-dom";

export default function SigninBtn() {
  return (
    <>
      <Link to={"/signup"}>
        <div
          className="
          row-start-1 col-start-1
          ring-1 px-6 py-3 rounded-lg font-semibold transition-all duraiton-300 ease-in-out ring-blue-600 cursor-pointer bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-500 text-white hover:-translate-y-0.5 hover:shadow-lg"
        >
          Sign in
        </div>
      </Link>
    </>
  );
}
