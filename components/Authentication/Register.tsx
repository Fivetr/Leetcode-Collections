import React from "react";
import { useState, useEffect } from "react";
import { firebase_auth } from "../../firebase/firebase";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/redux/store";
import { open } from "@/app/redux/features/auth-slice";
import { ImSpinner8 } from "react-icons/im";
import { toast } from "react-toastify";

function Register() {
  const dispatch = useDispatch<AppDispatch>();

  const [Register, setRegister] = useState({
    email: "",
    password: "",
    name: "",
  });

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(firebase_auth);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegister((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const newUser = await createUserWithEmailAndPassword(
        Register.email,
        Register.password
      );
      if (!newUser) return;
      dispatch(open());
    } catch (error: any) {
      console.log(error);
      alert(error.message);
    }
  };

  useEffect(() => {
    if (error) {
      toast.error(error.message);
    }
  }, [error]);

  return (
    <form
      className="space-y-6 px-6 pt-2 short:space-y-2"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-medium">Register</h2>
      <div>
        <label htmlFor="text" className="mb-2 block text-sm font-medium">
          Name
        </label>
        <input
          onChange={handleChange}
          type="text"
          id="name"
          name="name"
          placeholder="User Name"
          className="input"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium">
          Email
        </label>
        <input
          onChange={handleChange}
          type="email"
          id="email"
          name="email"
          placeholder="email@gamil.com"
          className="input"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium">
          Password
        </label>
        <input
          onChange={handleChange}
          type="password"
          id="password"
          name="password"
          placeholder="************"
          className="input"
          required
        />
      </div>
      <div className="pb-5">
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
            <h3>Register</h3>
          )}
        </button>
      </div>
    </form>
  );
}

export default Register;
