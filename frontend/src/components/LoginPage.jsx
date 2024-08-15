import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../Services/userService";
import { Snackbar, Alert } from '@mui/material';
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);
  const [snackMessage, setSnackMessage] = useState({message:"", severity:""});

  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    if(email !== "" && password !== ""){
      try {
        const data = {email:email, password: password};
        const result = await login(data);
        localStorage.setItem('token', result.token);
        const message = {message:"Login Successful!", severity:"success"};
        setSnackMessage(message);
        navigate('/home');
  
      } catch (error){
        const message = {message:"Login failed!", severity:"error"};
        setSnackMessage(message);
      }
    }else{
      const message = {message:"Please provide valid email and password!", severity:"error"};
      setSnackMessage(message);
    }
  };

  useEffect(() => {
    if(snackMessage.message !== ""){
      setOpen(true);
    }
  },[snackMessage]);


  return (
    <div className=" container mx-auto p-10">
      <div className="max-w-sm mx-auto bg-white px-10 py-10 rounded-2xl shadow-[0_8px_2px_-4px_#00DDA2,0_10px_20px_0_#334050]">
        <div className="text-center mb-8">
          <h1 className="font-bold text-2xl text-expenseBC">Login</h1>
        </div>
        <form>
          <div className="relative my-5">
            <input
              type="email"
              className="peer m-0 block h-[58px] border-[1px] focus:shadow-md focus:shadow-incomeBC border-solid border-golden w-full rounded bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-expenseBC focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-black [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
              id="floatingInput"
              placeholder="Username"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label
              htmlFor="floatingInput"
              className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-black peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none "
            >
              Email address
            </label>
          </div>

          <div className="relative mt-5 mb-8">
            <input
              type="password"
              className="peer m-0 block h-[58px] border-[1px] focus:shadow-md focus:shadow-incomeBC border-solid border-golden w-full rounded bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-expenseBC focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-black [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
              id="floatingPassword"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <label
              htmlFor="floatingPassword"
              className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-black peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none "
            >
              Password
            </label>
            <p className="text-xs cursor-pointer hover:underline mt-2">
              Forget password
            </p>
          </div>

          <button
            onClick={handleLogin}
            type="button"
            className="my-2 block w-full rounded bg-incomeBC px-6 pb-2 pt-2.5 text-lg font-medium  leading-normal text-white shadow-[0_4px_9px_-4px_#4D6178] transition hover:shadow-[0_8px_9px_-4px_#BDCDCC,0_4px_18px_0_#B5C6C5] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-[gray] active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]transition duration-150 ease-in-out active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
          >
            Sign In
          </button>
          
          <h4 className="text-center my-4 font-semibold">Or</h4>

          <button className="px-4 py-2 my-5 border flex items-center justify-center gap-2  w-full rounded-md text-slate-700  hover:border-expenseBC border-goldenHover hover:text-slate-900  hover:shadow-lg transition duration-150">
            <FcGoogle className=" w-5 h-5" />
            <span>Login with Google</span>
          </button>
          <div className="flex gap-3 ">
            <p className="justify-start text-sm">Still not registered? </p>
            <p className="items-end text-md hover:underline text-incomeBC font-semibold hover:text-expenseBC">
              <Link to="/register">Register</Link>
            </p> 
          </div>
        </form>
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          open={open}
          onClose={handleClose}
          autoHideDuration={1800}
        >
          <Alert
            onClose={handleClose}
            severity={snackMessage.severity}
            variant="filled"
            sx={{ width: '100%' }}
          >{snackMessage.message}
          </Alert>
        </Snackbar>
      </div>
    </div>
  );

};

export default LoginPage;
