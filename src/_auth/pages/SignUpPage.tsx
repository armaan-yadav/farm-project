import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { brandName, tagLine } from "@/constants/constants";
import { authServices } from "@/services/authServices";
import { AuthError } from "@/services/errors";
import { Label } from "@radix-ui/react-label";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

interface SignUpPageForm {
  email: string;
  password: string;
  name: string;
}

const SignUpPage = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SignUpPageForm>({
    defaultValues: {
      email: "",
      name: "",
      password: "",
    },
  });

  const onSubmit = (data: SignUpPageForm) => {
    console.log(data);
    try {
      authServices.createAccount({
        email: data.email,
        password: data.password,
        name: data.name,
      });
    } catch (error) {
      if (error instanceof AuthError) {
        console.log(error.code);
      }
    }
  };

  return (
    <div className="flex items-center justify-center h-screen lg:bg-primaryColor1">
      <div className="h-screen lg:w-[90vw] lg:h-[90vh] flex max-sm:flex-col lg:justify-between lg:gap-2 rounded-sm lg:bg-white relative">
        <div className="lg:w-[50%] max-sm:h-[65%] overflow-hidden rounded-sm bg-white relative">
          <img
            src="https://cloud.appwrite.io/v1/storage/buckets/674b00470008971c59af/files/674b00810009985b3e33/view?project=674accf60022b098995d&project=674accf60022b098995d&mode=admin"
            alt="image"
            className="h-full w-full object-cover hover:scale-110 transition-all"
          />
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full p-6 space-y-4 lg:w-[47%] lg:px-24 flex flex-col justify-center max-sm:rounded-t-2xl bg-white max-sm:shadow-[0px_-10px_140px_5px_#1cb05e]  z-10 lg:flex-1 max-sm:absolute max-sm:bottom-0 max-sm:mmin-h-[45%]"
        >
          <h2 className="text-3xl font-bold text-brandColor">{brandName}</h2>
          <h2 className="font-semibold text-brandColor">{tagLine}</h2>
          <div>
            <Label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              <span className="text-2xl font-semibold">Sign Up</span>
              <br />
              <span className="text-sm">Create New Account</span>
              <br />
              Name
              <Input
                id="name"
                type="text"
                {...register("name", {
                  required: "name is required",
                })}
                className={`my-3 ${errors.name ? "border-red-500" : ""}`}
              />
              {errors.name && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.name.message}
                </p>
              )}
            </Label>
          </div>

          <div>
            <Label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
              <Input
                id="email"
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                className={`my-3 ${errors.email ? "border-red-500" : ""}`}
              />
            </Label>
            {errors.email && (
              <p className="mt-1 text-xs text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <Label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
              <Input
                id="password"
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters long",
                  },
                  validate: {
                    hasUpperCase: (value) =>
                      /[A-Z]/.test(value) ||
                      "Password must contain at least one uppercase letter",
                    hasLowerCase: (value) =>
                      /[a-z]/.test(value) ||
                      "Password must contain at least one lowercase letter",
                    hasNumber: (value) =>
                      /[0-9]/.test(value) ||
                      "Password must contain at least one number",
                  },
                })}
                className={`m3-3 ${errors.password ? "border-red-500" : ""}`}
              />
            </Label>
            {errors.password && (
              <p className="mt-1 text-xs text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>
          <p className="text-center">
            Already have an account?{" "}
            <Link
              to={"/email-sign-in"}
              className="text-primaryColor1  font-semibold"
            >
              Sign In
            </Link>
          </p>
          <Button type="submit" className="w-full">
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
