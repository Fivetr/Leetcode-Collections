import React from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useDispatch } from "react-redux";
import { firebase_auth } from "../../firebase/firebase";
import { AppDispatch } from "@/app/redux/store";
import { ChangeAuthMenu } from "@/app/redux/features/auth-slice";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ImSpinner8 } from "react-icons/im";
import { toast } from "react-toastify";

function Login() {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const [Input, setInput] = useState({
    email: "",
    password: "",
  });

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(firebase_auth);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(
        Input.email,
        Input.password
      );
      if (!user) return;
      router.push("/");
    } catch (error: any) {
      alert(error.message);
    }
  };

  useEffect(() => {
    if (error) {
      switch (error.message) {
        case "Firebase: Error (auth/user-not-found).":
          toast.error("User Not Found");
          break;
        case "Firebase: Error (auth/wrong-password).":
          toast.error("Invalid Password");
          break;
        default:
          toast.error("Invalid Email or Password");
      }
    }
  }, [error]);
  console.log(user, "user");

  console.log(Input);
  return (
    <form
      className="space-y-6 px-6 pt-2 short:space-y-2"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-medium"> Sign In</h2>
      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="email@gamil.com"
          className="input"
          required
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="************"
          className="input"
          required
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        className="btn w-full text-center font-medium hover:scale-105"
      >
        {loading ? (
          <div className="flex items-center justify-center gap-3">
            <div className="animate-spin">
              <ImSpinner8 />
            </div>
            Loading...
          </div>
        ) : (
          <h3>Login</h3>
        )}
      </button>
      <div className="md:text-md flex justify-evenly gap-2 pb-5 text-sm">
        <button
          className="btn hover:scale-105"
          onClick={() => dispatch(ChangeAuthMenu("register"))}
        >
          <a href="#">Register</a>
        </button>
        <button
          className="btn hover:scale-105"
          onClick={() => dispatch(ChangeAuthMenu("forgetpassword"))}
        >
          <a href="#">ForgotPassword</a>
        </button>
      </div>
    </form>
  );
}

export default Login;
