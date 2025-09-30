import { useEffect, useState } from "react";
import SigninBtn from "./signin";
import UserProfile from "./userprofile";
import axios from "axios";

export default function Home() {
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const req = await axios.get("http://localhost:3000/api/auth/me", {
          withCredentials: true,
        });
        if (req.data.success) {
          console.log(req.data.user._id);
          setIsAuth(true);
        }
      } catch (err) {
        console.error(err);
      }
    };
    checkAuth();
  }, []);
  return (
    <>
      <div className=" grid justify-items-center h-screen items-center">
        {isAuth ? <UserProfile changeAuth={setIsAuth} /> : <SigninBtn />}
      </div>
    </>
  );
}
