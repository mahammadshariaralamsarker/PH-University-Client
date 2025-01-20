import { Button } from "antd";
import React from "react";
import { useForm } from "react-hook-form";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex ">
        <label htmlFor="id">ID:</label>
        <input type="text" id="id" {...register('id')} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="text" id="password"  {...register('password')} />
      </div>
      <Button htmlType = 'submit'>Login</Button>
    </form>
  );
}
