import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../Components/UsedInputs";
import Layout from "../Layout/Layout";
import { FiLogIn } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { loginValidation } from "../Components/Validation/UserValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import { InlineError } from "../Components/Notfication/Error";
import { useEffect } from "react";
import { API_USER, URL } from "../config/constant";
import { postRequest } from "../utils/commonRequest";
import { setIsError, setIsLoading, setUserInfo } from "../Redux/slices/auth";
import toast from "react-hot-toast";

function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {userInfo, accessToken, isLoading} = useSelector(state => state.auth)
  // validation user

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginValidation),
  });

  const onSubmit = async (data) => {
    dispatch(setIsLoading(true))
    try {
      const res = await postRequest(API_USER.LOGIN, data)
      if(res){
      dispatch(setUserInfo(res))
      }
    } catch (error) {
      dispatch(setIsError(error))
    }finally{
      dispatch(setIsLoading(false))
    }
  };

  // use effect

  useEffect(() => {
    if (userInfo?.isAdmin) {
      navigate(URL.DASHBOARD);
    } else if (accessToken) {
      toast.success(`Wellcome back ${userInfo?.fullName}`);
      setTimeout(()=> {
        navigate(URL.PROFILE);
      },2000) //2s
    }
  }, [userInfo, navigate,accessToken]);
  return (
    <Layout>
      <div className="container mx-auto px-2 my-24 flex-colo">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full 2xl:w-2/5 gap-8 flex-colo p-8 sm:p-14 md:w-3/5 bg-dry  rounded-lg border border-border"
        >
          <img
            src="/images/logo.png"
            alt="logo"
            className="w-full h-12 object-contain"
          />
          <div className="w-full">
            <Input
              label="Email"
              placeholder="netflixo@gmail.com"
              type="email"
              bg={true}
              name="email"
              register={register("email")}
            />
            {errors.email && <InlineError text={errors.email.message} />}
          </div>

          <div className="w-full">
            <Input
              label="Password"
              placeholder="*******"
              type="password"
              bg={true}
              name="password"
              register={register("password")}
            />
            {errors.password && <InlineError text={errors.password.message} />}
          </div>

          <button
            type="submit"
            className="bg-subMain transitions hover:bg-main flex-rows gap-4 text-white p-4 rounded-lg w-full"
          >
              {isLoading? "Loadding ...": 
              <>
                <FiLogIn /> Login
              </>}
          </button>
          <p className="text-center text-border">
            Don't have an account?{" "}
            <Link to="/register" className="text-dryGray font-semibold ml-2">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </Layout>
  );
}

export default Login;
