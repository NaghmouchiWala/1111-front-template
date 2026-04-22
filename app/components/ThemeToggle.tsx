"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const isDark = saved ? saved === "dark" : true;
    setDark(isDark);
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    const theme = next ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  };

  return (
    <button
      onClick={toggle}
      aria-label="Changer de thème"
      style={{
        width: 44,
        height: 24,
        borderRadius: 999,
        border: "none",
        cursor: "pointer",
        padding: 3,
        background: dark
          ? "linear-gradient(90deg,#3BDEB9,#CCFF9B)"
          : "rgba(0,0,0,0.12)",
        display: "flex",
        alignItems: "center",
        justifyContent: dark ? "flex-end" : "flex-start",
        transition: "background 0.3s ease",
        flexShrink: 0,
      }}
    >
      <span style={{
        width: 18,
        height: 18,
        borderRadius: "50%",
        background: dark ? "#0a0f0d" : "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 10,
        transition: "all 0.3s ease",
        boxShadow: "0 1px 4px rgba(0,0,0,0.2)",
      }}>
        {dark ? "🌙" : "☀️"}
      </span>
    </button>
  );
}
