"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
interface InputProps {
  placeholder: string;
  type?: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}
async function postData(email: string, password: string) {
  try {
    const { data } = await axios.post(
      "http://localhost:3000/api/user",
      {
        email: email,
        password: password,
      },

      {
        headers: {
          Authorization: "Bearer tokeeeennnn",
        },
      },
    );
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
const InputWithLabel = ({
  placeholder,
  type = "text",
  value,
  setValue,
}: InputProps) => {
  return (
    <input
      className="px-3 py-2 rounded-md border border-gray-300 w-full focus:border-blue-400"
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
const Signin = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const router = useRouter();
  return (
    <div className="flex items-center  justify-center w-screen h-screen  ">
      <div className="border border-gray-300 shadow-sm w-1/3  rounded-lg px-4 py-2 flex items-center flex-col justify-center gap-10">
        <h1 className="text-xl font-md font-bold">Sign in page</h1>
        <InputWithLabel
          placeholder="email"
          type="text"
          value={email}
          setValue={setEmail}
        />
        <InputWithLabel
          placeholder="*****"
          type="password"
          value={pass}
          setValue={setPass}
        />

        <button
          onClick={() => {
            postData(email, pass);
            router.push("/");
          }}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md"
        >
          Sing In
        </button>
      </div>
    </div>
  );
};

export { Signin };
