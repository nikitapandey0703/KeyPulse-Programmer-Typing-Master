import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginForm({ onLogin }) {
  const [formData, setFormData] = useState({
    emailOrUsername: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // TEMP frontend logic (backend later)
    console.log("Login attempt:", formData);

    // Fake delay for testing
    setTimeout(() => {
      setLoading(false);
      if (formData.password === "") {
        setError("Password cannot be empty");
      } else {
        onLogin?.(formData); // call parent handler if exists
      }
    }, 1000);
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      {/* Email / Username */}
      <div className="space-y-1">
        <Label>Email or Username</Label>
        <Input
          name="emailOrUsername"
          value={formData.emailOrUsername}
          onChange={handleChange}
          placeholder="Enter your email or username"
        />
      </div>

      {/* Password */}
      <div className="space-y-1">
        <Label>Password</Label>
        <Input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
        />
      </div>

      {/* Error */}
      {error && <p className="text-red-500 text-sm">{error}</p>}

      {/* Submit */}
      <Button type="submit" className="w-full mt-4" disabled={loading}>
        {loading ? "Logging in..." : "Login"}
      </Button>
    </form>
  );
}
