export default function SignUp() {
  return (
    <>
      <div className="grid bg-white rounded-lg p-4 ring-1 gap-y-4 ring-blue-500 justify-items-center">
        <div className="font-bold text-xl ">SIGN IN</div>

        <input
          type="text"
          className="ring-1 rounded-md px-2 py-1 shadow-lg ring-neutral-300"
          placeholder="Enter your Username"
        />
        <input
          type="text"
          className="ring-1 rounded-md px-2 py-1 shadow-lg ring-neutral-300"
          placeholder="Enter your Password"
        />
        <input
          type="text"
          className="ring-1 rounded-md px-2 py-1 shadow-lg ring-neutral-300"
          placeholder="Re-Enter your Password"
        />

        <button className="w-max font-semibold text-white bg-gradient-to-r from-blue-700 to-blue-500 py-3 px-6 rounded-lg hover:from-blue-700 hover:to-blue-500 cursor-pointer hover:-translate-y-0.5 hover:shadow-lg">
          Submit
        </button>
      </div>
    </>
  );
}
