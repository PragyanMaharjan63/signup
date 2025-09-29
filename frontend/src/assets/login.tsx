import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";
type Inputs = {
  userName: string;
  password: string;
};

export default function Login() {
  const [showPw, setShowpw] = useState(false);
  const { register, handleSubmit, reset } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const req = axios.post(
      "http://localhost:3000/api/auth/login",
      {
        userName: data.userName,
        password: data.password,
      },
      {
        withCredentials: true,
      }
    );
    const res = await req;
    console.log(res.data);

    if (res.data.success) {
      reset();
    }
  };
  return (
    <>
      <div className="grid  justify-items-center items-center h-screen">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col bg-white rounded-lg items-center p-4 ring-1 gap-y-4 ring-blue-500 h-max"
        >
          <div className="font-bold text-xl ">LOG IN</div>

          <input
            type="text"
            className="ring-1 rounded-md px-2 py-1 shadow-lg ring-neutral-300"
            placeholder="Enter your Username"
            {...register("userName", { required: true })}
          />
          <div className="relative">
            <input
              type={showPw ? "text" : "password"}
              className="ring-1 rounded-md px-2 py-1 shadow-lg ring-neutral-300"
              placeholder="Enter your Password"
              {...register("password", { required: true })}
            />
            <div
              className="absolute right-2 top-1"
              onClick={() => setShowpw((prev) => !prev)}
            >
              {showPw ? <Eye /> : <EyeClosed />}
            </div>
          </div>

          <div className="text-sm text-neutral-400 flex">
            <p>Don't have an account?</p>
            <Link to={"/signup"}>
              <p className="underline cursor-pointer hover:text-blue-500">
                Sign in
              </p>
            </Link>
          </div>
          <input
            type="submit"
            value={"submit"}
            className="w-max font-semibold text-white bg-gradient-to-r from-blue-700 to-blue-500 py-3 px-6 rounded-lg hover:from-blue-700 hover:to-blue-500 cursor-pointer hover:-translate-y-0.5 hover:shadow-lg"
          />
        </form>
      </div>
    </>
  );
}
