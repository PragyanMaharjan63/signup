import SignUp from "./assets/Signup";

function App() {
  return (
    <>
      <div className=" grid justify-items-center h-screen items-center">
        <div
          className="
        row-start-1 col-start-1
        ring-1 px-6 py-3 rounded-lg font-semibold transition-all duraiton-300 ease-in-out ring-blue-600 cursor-pointer bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-500 text-white hover:-translate-y-0.5 hover:shadow-lg"
        >
          Sign in
        </div>
        <div className="row-start-1 col-start-1">
          <SignUp />
        </div>
      </div>
    </>
  );
}

export default App;
