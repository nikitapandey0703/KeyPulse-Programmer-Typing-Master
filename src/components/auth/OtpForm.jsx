import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function OtpForm({ email, signupData, onOtpVerified }) {
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setError("");

    if (!otp || otp.length !== 6) {
      setError("Please enter a valid 6-digit OTP");
      return;
    }

    setIsLoading(true);

    try {
      // Step 1: Verify OTP
      const verifyResponse = await fetch(
        "https://expense-tracker-api-sable.vercel.app/auth/verify_otp",
        {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "3a02e96a68d333b8f2f75d1ef5bb884c65123766",
          },
          body: JSON.stringify({
            email: email,
            otp: otp,
          }),
        }
      );

      const verifyData = await verifyResponse.json();

      if (verifyResponse.status !== 200) {
        throw new Error(
          verifyData.message || verifyData.error || "OTP verification failed"
        );
      }

      console.log("OTP verified successfully:", verifyData);

      // Step 2: If OTP verification is successful (200), call signup API
      if (signupData) {
        const signupResponse = await fetch(
          "https://expense-tracker-api-sable.vercel.app/auth/signup",
          {
            method: "POST",
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
              "x-api-key": "3a02e96a68d333b8f2f75d1ef5bb884c65123766",
            },
            body: JSON.stringify({
              email: signupData.email,
              password: signupData.password,
              username: signupData.username,
            }),
          }
        );

        const signupDataResponse = await signupResponse.json();

        if (!signupResponse.ok) {
          throw new Error(
            signupDataResponse.message ||
              signupDataResponse.error ||
              "Signup failed"
          );
        }

        console.log("Signup successful:", signupDataResponse);
      }

      // Step 3: Close OTP dialog and open login form
      onOtpVerified();
    } catch (err) {
      console.error("Error:", err);
      if (err.name === "TypeError" && err.message.includes("fetch")) {
        setError("Network error: Failed to connect to server. Please check your internet connection.");
      } else {
        setError(err.message || "Failed to verify OTP. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
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
          onChange={(e) => {
            setOtp(e.target.value);
            if (error) setError("");
          }}
          disabled={isLoading}
        />
      </div>

      {error && (
        <div className="text-sm text-red-600 mt-2">{error}</div>
      )}

      <Button
        type="submit"
        className="w-full"
        disabled={isLoading || otp.length !== 6}
      >
        {isLoading ? "Verifying..." : "Verify OTP"}
      </Button>
    </form>
  );
}
