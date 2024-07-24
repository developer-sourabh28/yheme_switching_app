import { useContext } from "react";
import { ThemeContext } from "./AuthApp";

export const NavBar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    
    return (
        <nav className={`navbar ${theme === "dark" ? "dark-navbar" : ""}`}>
        <button className="theme material-icons" onClick={toggleTheme}>
            dark_mode
            </button>
    </nav>
    );
};