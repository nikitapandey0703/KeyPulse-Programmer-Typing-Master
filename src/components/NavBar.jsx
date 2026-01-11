import  { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { IoMenu, IoClose } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import AuthDialog from "./auth/AuthDialog";
import { Button } from "./ui/button";



const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState("login"); // login | signup
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const navigate = useNavigate();

  // Check authentication status
  useEffect(() => {
    const checkAuth = () => {
      const authDataStr = localStorage.getItem('authData');
      if (authDataStr) {
        try {
          const authData = JSON.parse(authDataStr);
          setIsAuthenticated(!!(authData.email && authData.userData));
        } catch (e) {
          setIsAuthenticated(false);
        }
      } else {
        setIsAuthenticated(false);
      }
    };

    // Check on mount
    checkAuth();

    // Listen for storage changes (when login/logout happens in other tabs)
    window.addEventListener('storage', checkAuth);

    // Custom event listener for same-tab auth changes
    window.addEventListener('authChanged', checkAuth);

    return () => {
      window.removeEventListener('storage', checkAuth);
      window.removeEventListener('authChanged', checkAuth);
    };
  }, []);

  // Check auth state when dialog closes (in case user just logged in)
  useEffect(() => {
    if (!authOpen) {
      const authDataStr = localStorage.getItem('authData');
      if (authDataStr) {
        try {
          const authData = JSON.parse(authDataStr);
          setIsAuthenticated(!!(authData.email && authData.userData));
        } catch (e) {
          setIsAuthenticated(false);
        }
      } else {
        setIsAuthenticated(false);
      }
    }
  }, [authOpen]);

  // Logout function
  const handleLogout = async () => {
    setIsLoggingOut(true);
    
    try {
      // Call logout API
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/auth/logout`,
        {
          method: "POST",
          mode: "cors",
          credentials: 'include',
          headers: {
            "x-api-key": import.meta.env.VITE_API_KEY,
            "Content-Type": "application/json",
          },
        }
      );

      // Clear localStorage regardless of API response
      localStorage.removeItem('authData');
      setIsAuthenticated(false);

      // Dispatch custom event to notify other components
      window.dispatchEvent(new Event('authChanged'));

      // Navigate to home page
      navigate('/');
    } catch (err) {
      // Still clear localStorage even if API call fails
      localStorage.removeItem('authData');
      setIsAuthenticated(false);
      window.dispatchEvent(new Event('authChanged'));
      navigate('/');
    } finally {
      setIsLoggingOut(false);
    }
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Typing Test", path: "/typing-test" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Profile", path: "/profile" },
    { name: "Leaderboard", path: "/leaderboard" },
  ];

  return (
    <nav className=" text-white px-6 md:px-20 py-8 flex justify-between items-center relative">
      {/* Logo */}
      <div>
        <img src="/logo.png" alt="logo" className="w-40" />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 font-bold">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              isActive ? "text-[#068a8d]" : "hover:text-[#068a8d]"
            }
          >
            <li>{item.name}</li>
          </NavLink>
        ))}
      </ul>

      {/* Buttons */}
      <div className="hidden md:flex gap-4">
        {isAuthenticated ? (
          <Button
            className="bg-red-600 hover:bg-red-700 text-white text-md px-8 py-2 rounded-md"
            onClick={handleLogout}
            disabled={isLoggingOut}
          >
            {isLoggingOut ? "Logging out..." : "Logout"}
          </Button>
        ) : (
          <>
            <Button
              className="bg-[#068a8d] text-white text-md px-8 py-2 rounded-md"
              onClick={() => {
                setAuthMode("signup");
                setAuthOpen(true);
              }}
            >
              Sign up
            </Button>

            <Button
              className="bg-transparent border border-white text-md text-white px-8 py-2 rounded-md"
              onClick={() => {
                setAuthMode("login");
                setAuthOpen(true);
              }}
            >
              Sign in
            </Button>
          </>
        )}
      </div>

      {/* Hamburger Icon */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <IoClose size={28} /> : <IoMenu size={28} />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black flex flex-col gap-6 p-6 md:hidden z-50">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive ? "text-[#068a8d] font-bold" : "text-white font-bold"
              }
            >
              {item.name}
            </NavLink>
          ))}

          <div className="flex flex-col gap-4 mt-4">
            {isAuthenticated ? (
              <Button
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md"
                onClick={() => {
                  handleLogout();
                  setIsOpen(false);
                }}
                disabled={isLoggingOut}
              >
                {isLoggingOut ? "Logging out..." : "Logout"}
              </Button>
            ) : (
              <>
                <Button
                  className="bg-transparent border border-white text-white px-4 py-2 rounded-md"
                  onClick={() => {
                    setAuthMode("login");
                    setAuthOpen(true);
                    setIsOpen(false);
                  }}
                >
                  Sign in
                </Button>

                <Button
                  className="bg-[#068a8d] text-white px-4 py-2 rounded-md"
                  onClick={() => {
                    setAuthMode("signup");
                    setAuthOpen(true);
                    setIsOpen(false);
                  }}
                >
                  Sign up
                </Button>
              </>
            )}
          </div>
        </div>
      )}
      <AuthDialog
        open={authOpen}
        onOpenChange={setAuthOpen}
        defaultMode={authMode}
      />
    </nav>
  );
};

export default NavBar;
