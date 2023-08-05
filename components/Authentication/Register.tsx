import React from "react";
import { useState, useEffect } from "react";
import { firebase_auth, firestore } from "@/firebase/firebase";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/redux/store";
import { open } from "@/app/redux/features/auth-slice";
import { ImSpinner8 } from "react-icons/im";
import { toast } from "react-toastify";
import { setDoc, doc } from "firebase/firestore";

function Register() {
  const dispatch = useDispatch<AppDispatch>();

  const [Register, setRegister] = useState({
    email: "",
    password: "",
  });

  // firebase create account hook
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(firebase_auth);

  // record user input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegister((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // create a new user in firebase
    try {
      const newUser = await createUserWithEmailAndPassword(
        Register.email,
        Register.password
      );
      if (!newUser) return;
      const userData = {
        email: Register.email,
        uid: newUser.user.uid,
        createdAt: Date.now(),
        updatedAt: Date.now(),
        solvedProblems: [],
      };
      await setDoc(doc(firestore, "users", newUser.user.uid), userData);
      dispatch(open());
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  // display  custom error message
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

      {/* email input */}
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
      {/* password input */}
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
      {/* submit button */}
      <div className="pb-5">
        <button
          type="submit"
          className="btn w-full text-center font-medium hover:scale-105"
        >
          {/* render loading anamiation if is loading */}
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
