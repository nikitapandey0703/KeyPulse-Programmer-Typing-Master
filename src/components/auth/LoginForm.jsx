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
    // Clear error when user starts typing
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Validate form
    if (!formData.emailOrUsername?.trim() || !formData.password?.trim()) {
      setError("Please fill all fields");
      setLoading(false);
      return;
    }

    try {
      // Create FormData object
      const formDataToSend = new FormData();
      formDataToSend.append("email", formData.emailOrUsername.trim());
      formDataToSend.append("password", formData.password.trim());

      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/auth/signin`,
        {
          method: "POST",
          mode: "cors",
          credentials: 'include',
          headers: {
            "x-api-key": import.meta.env.VITE_API_KEY,
            // Don't set Content-Type header - browser will set it automatically with boundary for FormData
          },
          body: formDataToSend,
        }
      );

      const data = await response.json();

      if (!response.ok) {
        // Handle Pydantic validation errors (validation_error.form_params structure)
        if (data.validation_error?.form_params && Array.isArray(data.validation_error.form_params)) {
          const validationErrors = data.validation_error.form_params
            .map((err) => {
              const field = err.loc && err.loc.length > 0 ? err.loc[err.loc.length - 1] : "field";
              return `${field}: ${err.msg}`;
            })
            .join(", ");
          throw new Error(validationErrors || "Validation error");
        }
        
        // Handle standard error responses
        throw new Error(
          data.message || data.error || data.detail?.message || "Login failed"
        );
      }

      // Store auth data in localStorage
      const authData = {
        token: data.token || data.access_token || null,
        email: formData.emailOrUsername.trim(),
        userData: data,
      };
      localStorage.setItem('authData', JSON.stringify(authData));

      // Call parent handler on success
      onLogin?.(data);
    } catch (err) {
      if (err.name === "TypeError" && err.message.includes("fetch")) {
        setError("Network error: Failed to connect to server. Please check your internet connection.");
      } else {
        setError(err.message || "Failed to login. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      {/* Email / Username */}
      <div className="space-y-1">
        <Label>Email</Label>
        <Input
          type="email"
          name="emailOrUsername"
          value={formData.emailOrUsername}
          onChange={handleChange}
          placeholder="Enter your email"
          required
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
          required
        />
      </div>

      {/* Error */}
      {error && (
        <div className="text-sm text-red-600 mt-2">{error}</div>
      )}

      {/* Submit */}
      <Button
        type="submit"
        className="w-full mt-4"
        disabled={loading || !formData.emailOrUsername?.trim() || !formData.password?.trim()}
      >
        {loading ? "Logging in..." : "Login"}
      </Button>
    </form>
  );
}
