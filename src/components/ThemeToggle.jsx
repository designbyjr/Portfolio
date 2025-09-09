import { Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const theme = localStorage.getItem("theme");
        if (theme === "dark") {
            // If theme is dark in localStorage, apply dark mode
            document.documentElement.classList.add("dark");
            setIsDarkMode(true);
        } else {
            // If no theme in localStorage, default to light mode
            document.documentElement.classList.remove("dark");
            setIsDarkMode(false);
        }
    }, []);

    const toggleTheme = (event) => {
        event.preventDefault();
        if(!isDarkMode) {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.removeItem("theme");
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