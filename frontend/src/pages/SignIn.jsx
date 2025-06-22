import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";

export const SignIn = () => {
  return (
   <div className="bg-slate-500 h-screen flex justify-center">
      <div className="flex flex-col justify-center ">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label={"Signin"}/>
          <SubHeading label={"Enter your credential to access your account"}></SubHeading>
          <InputBox label={"Email"} placeholder={"koe@gmail.com"}></InputBox>
          <InputBox label={"Password"} ></InputBox>
          <Button label={"Sign In"}></Button>
          <BottomWarning label={"Create new account"} buttonText={"Sign up"} to={"/signup"} />
        </div>
      </div>
    </div>
  );
};
