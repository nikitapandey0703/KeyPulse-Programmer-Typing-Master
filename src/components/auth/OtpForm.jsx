import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function OtpForm({ email, onOtpVerified }) {
  const [otp, setOtp] = useState("");

  const handleVerifyOtp = (e) => {
    e.preventDefault();

    console.log("OTP:", otp, "Email:", email);

    // later → verify OTP via backend
    onOtpVerified(); // 👈 tell parent to open login
  };

  return (
    <form className="space-y-4" onSubmit={handleVerifyOtp}>
      <p className="text-sm text-muted-foreground">
        We sent a 6-digit OTP to <b>{email}</b>
      </p>

      <div className="space-y-1">
        <Label>OTP</Label>
        <Input
          maxLength={6}
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
      </div>

      <Button type="submit" className="w-full">
        Verify OTP
      </Button>
    </form>
  );
}
