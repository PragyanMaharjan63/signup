import axios from "axios";
import type React from "react";
import { useEffect, useState } from "react";

type Props = {
  changeAuth: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function UserProfile({ changeAuth }: Props) {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    const getData = async () => {
      const req = await axios.get("http://localhost:3000/api/auth/me", {
        withCredentials: true,
      });
      const data = await req.data.user;
      setUserName(data.userName);
    };
    getData();
  }, []);
  const logout = async () => {
    try {
      const req = await axios.post(
        "http://localhost:3000/api/auth/logout",
        {},
        { withCredentials: true }
      );

      if (!req.data.success) {
        console.log("navigation failed");
        return;
      }
      changeAuth(false);
      console.log("logged out succesfully");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="grid grid-cols-2 justify-items-center items-center ring-1 p-3 pr-8 bg-blue-300/20 ring-blue-600 rounded-lg">
        <div className="size-15 bg-blue-500 rounded-full flex justify-center items-center font-bold text-white text-3xl shadow-sm">
          {userName ? userName[0].toUpperCase() : "?"}
        </div>
        <div>
          <div>{userName}</div>
          <div
            className="underline text-sm text-neutral-400 cursor-pointer hover:text-blue-500"
            onClick={logout}
          >
            Logout
          </div>
        </div>
      </div>
    </>
  );
}
