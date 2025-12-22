import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import OtpForm from "./OtpForm";

export default function AuthDialog({ open, onOpenChange, defaultMode }) {
  const [isLogin, setIsLogin] = useState(defaultMode === "login");

  const [signupStep, setSignupStep] = useState("form");
  const [signupData, setSignupData] = useState(null);

  const handleOtpSent = (data) => {
    setSignupData(data);
    setSignupStep("otp");
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(open) => {
        onOpenChange(open);

        // reset when dialog closes
        if (!open) {
          setSignupStep("form");
          setSignupData(null);
          setIsLogin(defaultMode === "login");
        }
      }}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {isLogin
              ? "Login"
              : signupStep === "form"
              ? "Create Account"
              : "Verify OTP"}
          </DialogTitle>
        </DialogHeader>

        {/* 🔹 LOGIN */}
        {isLogin && <LoginForm />}

        {/* 🔹 SIGNUP FORM */}
        {!isLogin && signupStep === "form" && (
          <SignupForm onOtpSent={handleOtpSent} />
        )}

        {/* 🔹 OTP FORM */}
        {!isLogin && signupStep === "otp" && signupData && (
          <OtpForm email={signupData.email} />
        )}

        {/* 🔹 SWITCH LOGIN / SIGNUP */}
        {signupStep === "form" && (
          <p className="text-sm text-center mt-4">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button
              className="ml-1 text-blue-600 underline"
              onClick={() => {
                setIsLogin(!isLogin);
                setSignupStep("form");
              }}
            >
              {isLogin ? "Sign up" : "Login"}
            </button>
          </p>
        )}
      </DialogContent>
    </Dialog>
  );
}
