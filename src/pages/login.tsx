import React from "react";
import { useForm } from "react-hook-form";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form>
      

      <div className="flex ">
        <label htmlFor="id">ID:</label>
        <input type="text" id="id" />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="text" id="password" />
      </div>
    </form>
  );
}
