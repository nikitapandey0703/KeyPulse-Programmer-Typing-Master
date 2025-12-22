import { useState } from "react";
import { Button } from "@/components/ui/button";
import OtpDialog from "./OtpDialog";

export default function Signup() {
  const [openOtp, setOpenOtp] = useState(false);

  const handleSignup = () => {
    const signupData = {
      name: "Kapil",
      email: "kapil@gmail.com",
      password: "123456",
    };

    localStorage.setItem("signupData", JSON.stringify(signupData));

    fetch("https://sendOtp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: signupData.email }),
    }).then(() => {
      setOpenOtp(true);
    });
  };

  return (
    <>
      <Button onClick={handleSignup}>Signup</Button>
      <OtpDialog open={openOtp} onClose={() => setOpenOtp(false)} />
    </>
  );
}
