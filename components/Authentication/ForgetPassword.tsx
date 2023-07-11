import React from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { useState, useEffect } from "react";
import { firebase_auth } from "@/firebase/firebase";
import { ImSpinner8 } from "react-icons/im";
import { toast } from "react-toastify";

function ForgetPassword() {
  const [Email, setEmail] = useState("");
  // firebase reset email hook
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(firebase_auth);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // send an email notification if successful
    const success = await sendPasswordResetEmail(Email);
    if (success) {
      toast.success("Email sent", { position: "top-left", autoClose: 2000 });
    }
  };

  // display custom error message
  useEffect(() => {
    if (error) {
      switch (error.message) {
        case "Firebase: Error (auth/user-not-found).":
          toast.error("User Not Found");

          break;
        case "Firebase: Error (auth/invalid-email).":
          toast.error("Invalid Email");

          break;
        default:
          toast.error("Invalid Email");
      }
    }
  }, [error]);

  return (
    <form
      className="space-y-6 px-6 pt-2 short:space-y-2"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-medium">Reset Password</h2>
      <p>Enter your email address below to reset your password</p>
      {/* email input */}
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
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="pb-5">
        {/* submit button */}
        <button
          type="submit"
          className="btn w-full text-center font-medium hover:scale-105"
        >
          {/* render loading anamiation if is loading */}
          {sending ? (
            <div className="flex items-center justify-center gap-3">
              <div className="animate-spin">
                <ImSpinner8 />
              </div>
              Sending...
            </div>
          ) : (
            <h3>Sent</h3>
          )}
        </button>
      </div>
    </form>
  );
}

export default ForgetPassword;
