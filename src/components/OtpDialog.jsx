import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function verifyOtpApi(otp) {
  return fetch("https://verifyotp", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ otp }),
  }).then((res) => res.json());
}

function createUserApi(userData) {
  return fetch("https://createUser", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  }).then((res) => res.json());
}

export default function OtpDialog({ open, onClose }) {
  const [otp, setOtp] = useState("");

  const handleVerify = () => {
    const userData = JSON.parse(localStorage.getItem("signupData"));

    verifyOtpApi(otp)
      .then((res) => {
        if (res.success) {
          return createUserApi(userData);
        } else {
          throw new Error("Invalid OTP");
        }
      })
      .then(() => {
        onClose();
      })
      .catch((err) => {
        // Error verifying OTP - silently fail
      });
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Verify OTP</DialogTitle>
        </DialogHeader>

        <Input
          placeholder="Enter 6-digit OTP"
          value={otp}
          maxLength={6}
          onChange={(e) => setOtp(e.target.value)}
        />

        <DialogFooter className="flex gap-2">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleVerify}>Verify</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
