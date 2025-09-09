import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils.js';
import { X, Menu } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle.jsx';

      const navItems = [
        { id: 1, href: '#hero', name: 'Home' },
        { id: 2, href: '#about', name: 'About' },
        { id: 3, href: '#skills', name: 'Skills' },
        { id: 4, href: '#projects', name: 'Projects' },
        { id: 5, href: '#contact', name: 'Contact' },
      ];

    export const Navbar = () => {
      const [isScrolled, setIsScrolled] = useState(false);
      const [isMenuOpen, setIsMenuOpen] = useState(false);

      useEffect(() => {
        const handleScroll = () => {
          setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
        
      }, []);

      const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      }

      return (
        <nav 
        className={cn(
            'fixed w-full z-40 transition-all duration-300',
            isScrolled ? 'py-3 bg-background/80 backdrop-blur-md shadow-xs' : 'py-5',
            )}>
                <div className='container flex justify-between items-center'>
                    <a href="#hero" className='text-xl font-bold text-primary flex item-center'>
                        <span className='relative z-10'>
                            <span className='text-glow text-foreground'> Jamie Codes</span> {""} Portfolio
                        </span>
                    </a>
             
                    {/* Desktop version of nav links*/}
                    <div className='hidden md:flex space-x-8 px-10 py-2'>
                        {navItems.map((item) => (
                                    <a key={item.id} href={item.href}
                                    className='text-foreground/80 relative hover:text-primary transition-colors duration-300'>
                                        {item.name}
                                        </a>
                                ))}
                                
                                
                    </div>
                    {/* mobile version of nav links*/}
                   
                    <button onClick={toggleMenu} className="md:hidden p-2 text-foreground z-50"
                        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                        >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                         
                    </button>

                    <div className={cn(
                        "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                        "transition-all duration-300 md:hidden",
                        isMenuOpen ? 'opacity-100 pointer-events-auto' 
                                    : 'opacity-0 pointer-events-none'
                        )}>
                        <div className='flex flex-col space-y-8 text-xl'>
                            {navItems.map((item) => (
                                    <a key={item.id} href={item.href}
                                    className='text-foreground/80 relative hover:text-primary transition-colors duration-300'
                                    onClick={() => setIsMenuOpen(false)}>
                                        {item.name}
                                        </a>
                                ))}
                                
                        </div>  
                    </div>
                </div>
        </nav>
      )
    }