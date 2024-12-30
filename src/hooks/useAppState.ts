import { useState, useEffect } from 'react';
import { useTheme } from './useTheme';
import { useAuth } from './useAuth';

export function useAppState() {
  const { isDarkMode, toggleTheme } = useTheme();
  const { user } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleLogin = () => {
    window.location.href = 'https://app.teknokapsul.com';
  };

  const handleMenuToggle = (value?: boolean) => {
    setIsMenuOpen(prev => value ?? !prev);
  };

  return {
    isDarkMode,
    isMenuOpen,
    isLoading,
    user,
    handleLogin,
    handleMenuToggle,
    handleThemeToggle: toggleTheme
  };
}