import { Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(true); // Default to true for dark mode

    useEffect(() => {
        const theme = localStorage.getItem("theme");
        if (theme === "light") {
            // If theme is explicitly set to light in localStorage
            document.documentElement.classList.remove("dark");
            setIsDarkMode(false);
        } else {
            // Default to dark mode if no theme or theme is dark
            document.documentElement.classList.add("dark");
            setIsDarkMode(true);
            // Set theme in localStorage if not already set
            if (!theme) {
                localStorage.setItem("theme", "dark");
            }
        }
    }, []);

    const toggleTheme = (event) => {
        if(!isDarkMode) {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light"); // Store light preference instead of removing
            setIsDarkMode(false);
        }
    }

  return (
      <button onClick={toggleTheme} className={cn("fixed max-sm:hidden top-3 right-5 z-50 p-2 rounded-full transition colors duration-300",
        "focus:outline-hidden"
      )}>
       {isDarkMode ? <Sun className='w-6 h-6 text-yellow-300'/> : <Moon className='w-6 h-6 text-blue-900'/>}
        </button>
  );
}

export default ThemeToggle;