import { useState } from "hono/jsx";

import { isClient, isServer } from "@/utils/window";
import type { Theme } from "@/types";

export default function ThemeToggleSwitch() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (isServer()) return "light";

    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === null) {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      return isDark ? "dark" : "light";
    }
    if (storedTheme === "dark") {
      document.body.classList.add("dark");
      return "dark";
    }
    return "light";
  });

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    
    if (isClient()) {
      localStorage.setItem("theme", newTheme);
      if (newTheme === "dark") {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
    }
  };

  return (
    <label className="theme-toggle">
      <input
        type="checkbox"
        className="theme-toggle-input"
        onInput={toggleTheme}
        checked={theme === "dark"}
      />
      <div className="theme-toggle-track">
        <div className="theme-toggle-thumb">
          {theme === "dark" ? (
            <svg className="moon-icon" viewBox="0 0 24 24" width="16" height="16">
              <path fill="currentColor" d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z" />
            </svg>
          ) : (
            <svg className="sun-icon" viewBox="0 0 24 24" width="16" height="16">
              <path fill="currentColor" d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0-5a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v1a1 1 0 0 0 1 1zm0 19a1 1 0 0 0-1 1v1a1 1 0 0 0 2 0v-1a1 1 0 0 0-1-1zm13-9h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2zM1 12a1 1 0 0 0-1 1v1a1 1 0 0 0 2 0v-1a1 1 0 0 0-1-1zm3.293-7.707a1 1 0 0 0 1.414-1.414l-1-1a1 1 0 0 0-1.414 1.414l1 1zm15.414 0l1-1a1 1 0 0 0-1.414-1.414l-1 1a1 1 0 0 0 1.414 1.414zM4.293 19.707l-1 1a1 1 0 0 0 1.414 1.414l1-1a1 1 0 0 0-1.414-1.414zm15.414 0a1 1 0 0 0-1.414 1.414l1 1a1 1 0 0 0 1.414-1.414l-1-1z" />
            </svg>
          )}
        </div>
      </div>
      <style jsx>{`
        .theme-toggle {
          position: relative;
          display: inline-block;
          cursor: pointer;
        }
        
        .theme-toggle-input {
          position: absolute;
          opacity: 0;
          width: 0;
          height: 0;
        }
        
        .theme-toggle-track {
          position: relative;
          display: block;
          width: 48px;
          height: 24px;
          background-color: #e2e8f0;
          border-radius: 12px;
          transition: background-color 0.3s;
          box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
        }
        
        .theme-toggle-input:checked ~ .theme-toggle-track {
          background-color: #334155;
        }
        
        .theme-toggle-thumb {
          position: absolute;
          top: 2px;
          left: 2px;
          width: 20px;
          height: 20px;
          background-color: #ffffff;
          border-radius: 50%;
          transition: transform 0.3s ease, background-color 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        }
        
        .theme-toggle-input:checked ~ .theme-toggle-track .theme-toggle-thumb {
          transform: translateX(24px);
          background-color: #94a3b8;
        }
        
        .theme-toggle-input:focus ~ .theme-toggle-track {
          box-shadow: 0 0 0 2px rgba(66, 153, 225, 0.5);
        }
        
        .sun-icon, .moon-icon {
          color: #f59e0b;
        }
        
        .moon-icon {
          color: #f8fafc;
        }
      `}</style>
    </label>
  );
}
