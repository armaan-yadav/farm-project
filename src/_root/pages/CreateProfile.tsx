import { CityList } from "@/components/shared/CityList";
import { StateList } from "@/components/shared/StateList";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User } from "@/types";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const CreateProfile = () => {
  const [stateCode, setStateCode] = useState<string>("");
  const [cityCode, setCityCode] = useState<string>("");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<User>();

  const submitHandler: SubmitHandler<User> = (data) => {};

  return (
    <div className="px-3">
      <div>
        <div className="text-primaryColor1">
          <h2 className="text-3xl font-extrabold">Create Profile</h2>
          <p className="text-sm">Tell Us About Yourself</p>
        </div>

        <form onSubmit={handleSubmit(submitHandler)}>
          <div>
            <Label className="text-[16px] " htmlFor="name">
              Name
            </Label>
            <Input
              className="my-2"
              {...register("name", {
                required: { message: "Name is required", value: true },
              })}
              placeholder="Enter your name"
            />

            {errors.name && (
              <p className="text-errorColor">{errors.name.message}</p>
            )}
          </div>
          <div>
            <Label className="text-[16px] " htmlFor="phone">
              Phone
            </Label>
            <Input
              className="my-2"
              {...register("phone")}
              placeholder="Enter your phone number"
            />
            {errors.phone && (
              <p className="text-errorColor">{errors.phone.message}</p>
            )}
          </div>
          <div>
            <Label className="text-[16px] " htmlFor="email">
              Email
            </Label>
            <Input
              className="my-2"
              {...register("email")}
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-errorColor">{errors.email.message}</p>
            )}
          </div>
          <div>
            <Label className="text-[16px] " htmlFor="age">
              Age
            </Label>
            <Input
              className="my-2"
              {...register("age", {
                required: { message: "age is required", value: true },
              })}
              placeholder="Enter your age"
            />
            {errors.age && (
              <p className="text-errorColor">{errors.age.message}</p>
            )}
          </div>
          <div className="flex flex-col ">
            <Label className="text-[16px] my-2">State</Label>
            <StateList setStateCode={setStateCode} />
            {/* //TODO ADD VALIDATION WHILE FORM SUBMITTING  */}
          </div>
          <div className="flex flex-col ">
            <Label className="text-[16px] my-2">City</Label>
            <CityList setCityCode={setCityCode} stateCode={stateCode} />
            {/* //TODO ADD VALIDATION WHILE FORM SUBMITTING  */}
          </div>
          <div>
            <Label className="text-[16px] " htmlFor="village">
              Village
            </Label>
            <Input
              className="my-2"
              {...register("village")}
              placeholder="Enter your village"
            />
            {errors.village && (
              <p className="text-errorColor">{errors.village.message}</p>
            )}
          </div>
          <div>
            <Label className="text-[16px] ">Pin Code</Label>
            <Input
              className="my-2"
              placeholder="Enter your pincode"
              type="number"
              {...register("pinCode", {
                required: { message: "Pincode is required", value: true },
              })}
            />
            {errors.pinCode && (
              <p className="text-errorColor">{errors.pinCode.message}</p>
            )}
          </div>

          <Button className="w-full">Create Profile</Button>
        </form>
      </div>
    </div>
  );
};

export default CreateProfile;
