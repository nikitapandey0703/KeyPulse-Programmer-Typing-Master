import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SignupForm({ onOtpSent }) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendOtp = (e) => {
    e.preventDefault();

    console.log("Signup data:", formData);

    // call parent → opens OTP dialog
    onOtpSent(formData);
  };

  return (
    <form className="space-y-4" onSubmit={handleSendOtp}>
      <div className="space-y-1">
        <Label>Username</Label>
        <Input
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </div>

      <div className="space-y-1">
        <Label>Email</Label>
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className="space-y-1">
        <Label>Password</Label>
        <Input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>

      <Button type="submit" className="w-full mt-4">
        Send OTP
      </Button>
    </form>
  );
}
