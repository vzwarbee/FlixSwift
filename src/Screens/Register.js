import React from "react";
import { Link} from "react-router-dom";
import { Input } from "../Components/UsedInputs";
import Layout from "../Layout/Layout";
import { FiLogIn } from "react-icons/fi";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerValidation } from "../Components/Validation/UserValidation";
import { InlineError } from "../Components/Notfication/Error";

function Register() {
  // validation user

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerValidation),
  });

  const onSubmit = (data) => {
    console.log(data);
    // dispatch(useUserInfo(data));
  };

  // use effect

  useEffect(() => {
    // if (isSuccess) {
    //   toast.success(`Wellcome back`);
    //   navigate("/login")
    // }
    // if (isError) {
    //   toast.error(isError);
    //   dispatch({ type: "USER_REGISTER_RESET" });
    // }
  }, []);

  return (
    <Layout>
      <div className="container mx-auto px-2 my-24 flex-colo">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full 2xl:w-2/5 gap-8 flex-colo p-8 sm:p-14 md:w-3/5 bg-dry  rounded-lg border border-border">
          <img
            src="/images/logo.png"
            alt="logo"
            className="w-full h-12 object-contain"
          />
          <div className="w-full">
            <Input
              label="Full name"
              placeholder="Full name"
              type="fullName"
              bg={true}
              name="fullName"
              register={register("fullName")}
            />
            {errors.fullName && <InlineError text={errors.fullName.message} />}
          </div>

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
              <>
                <FiLogIn /> Sign up
              </>
          </button>
          <p className="text-center text-border">
            Already have an account?{" "}
            <Link to="/login" className="text-dryGray font-semibold ml-2">
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </Layout>
  );
}

export default Register;
