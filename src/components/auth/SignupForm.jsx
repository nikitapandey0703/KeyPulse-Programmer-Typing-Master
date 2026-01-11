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
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error when user starts typing
    if (error) setError("");
  };

  // Check if all fields are filled
  const isFormValid = () => {
    return (
      formData.username.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.password.trim() !== ""
    );
  };

  const handleSendOtp = async (e) => {
    e.preventDefault();
    setError("");

    if (!isFormValid()) {
      setError("Please fill all fields");
      return;
    }

    setIsLoading(true);

    try {
      const requestBody = {
        email: formData.email,
      };

      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/auth/send_otp/signup`,
        {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": import.meta.env.VITE_API_KEY,
          },
          body: JSON.stringify(requestBody),
        }
      );

      // Check if response is JSON
      const contentType = response.headers.get("content-type");
      let data;

      if (contentType && contentType.includes("application/json")) {
        data = await response.json();
      } else {
        const text = await response.text();
        throw new Error("Server returned non-JSON response");
      }

      if (!response.ok) {
        throw new Error(
          data.message || data.error || `Server error: ${response.status}`
        );
      }

      // call parent → opens OTP dialog
      onOtpSent(formData);
    } catch (err) {
      if (err.name === "TypeError" && err.message.includes("fetch")) {
        setError("Network error: Failed to connect to server. Please check your internet connection.");
      } else {
        setError(
          err.message || "Failed to send OTP. Please try again."
        );
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSendOtp}>
      <div className="space-y-1">
        <Label>Username</Label>
        <Input
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Enter your username e.g., John Doe"
        />
      </div>

      <div className="space-y-1">
        <Label>Email</Label>
        <Input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Enter your email"
          onChange={handleChange}
        />
      </div>

      <div className="space-y-1">
        <Label>Password</Label>
        <Input
          type="password"
          name="password"
          value={formData.password}
          placeholder="Enter your password"
          onChange={handleChange}
        />
      </div>

      {error && (
        <div className="text-sm text-red-600 mt-2">{error}</div>
      )}

      <Button
        type="submit"
        className="w-full mt-4"
        disabled={!isFormValid() || isLoading}
      >
        {isLoading ? "Sending OTP..." : "Send OTP"}
      </Button>
    </form>
  );
}
