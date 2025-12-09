import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, AlertTriangle, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const { user } = useAuth();

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About Us' },
        { path: '/events', label: 'Events' },
        { path: '/our-impact', label: 'Our Impact' },
        { path: '/learning-hub', label: 'Learning Hub' },
        { path: '/ask-iris', label: 'Ask Iris' },
        { path: '/flow-arcade', label: 'Flow Arcade' },
        { path: '/period-tracker', label: 'Period Tracker' },
        { path: '/get-involved', label: 'Get Involved' }
    ];

    const handleQuickExit = () => {
        // Redirect to Google and clear history
        window.location.replace('https://www.google.com');
    };

    const isActive = (path: string) => {
        return location.pathname === path;
    };

    return (
        <nav className="sticky top-0 z-50 bg-white border-b border-[#E8D4EA] shadow-sm">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#ce8fd3] to-[#B794F6] rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-xl">FW</span>
                        </div>
                        <span className="text-xl font-bold text-[#2C1A4D]">
                            Flowing <span className="text-[#ce8fd3]">Wisdom</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isActive(link.path)
                                    ? 'bg-[#ce8fd3] text-white'
                                    : 'text-[#6B4C7A] hover:bg-[#F5E6F7] hover:text-[#2C1A4D]'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Quick Exit & Mobile Menu */}
                    <div className="flex items-center gap-3">
                        {/* Admin Button - Only show for admin users */}
                        {user?.role === 'admin' && (
                            <Link to="/admin">
                                <Button
                                    size="sm"
                                    variant="outline"
                                    className="hidden md:inline-flex border-[#FFE66D] text-[#2C1A4D] hover:bg-[#FFE66D] hover:text-[#2C1A4D]"
                                >
                                    <Shield className="w-4 h-4 mr-2" />
                                    Admin
                                </Button>
                            </Link>
                        )}

                        {/* Login/Profile Button */}
                        {user ? (
                            <Link to="/dashboard">
                                <Button
                                    size="sm"
                                    variant="outline"
                                    className="hidden md:inline-flex border-[#ce8fd3] text-[#ce8fd3] hover:bg-[#ce8fd3] hover:text-white"
                                >
                                    Dashboard
                                </Button>
                            </Link>
                        ) : (
                            <Link to="/login">
                                <Button
                                    size="sm"
                                    variant="outline"
                                    className="hidden md:inline-flex border-[#ce8fd3] text-[#ce8fd3] hover:bg-[#ce8fd3] hover:text-white"
                                >
                                    Login
                                </Button>
                            </Link>
                        )}

                        <Button
                            onClick={handleQuickExit}
                            size="sm"
                            variant="outline"
                            className="border-[#FF6B6B] text-[#FF6B6B] hover:bg-[#FF6B6B] hover:text-white"
                        >
                            <AlertTriangle className="w-4 h-4 mr-2" />
                            <span className="hidden sm:inline">Quick Exit</span>
                        </Button>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden p-2 rounded-lg hover:bg-[#F5E6F7] transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? (
                                <X className="w-6 h-6 text-[#2C1A4D]" />
                            ) : (
                                <Menu className="w-6 h-6 text-[#2C1A4D]" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden border-t border-[#E8D4EA] bg-white"
                    >
                        <div className="container mx-auto px-4 py-4 space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${isActive(link.path)
                                        ? 'bg-[#ce8fd3] text-white'
                                        : 'text-[#6B4C7A] hover:bg-[#F5E6F7] hover:text-[#2C1A4D]'
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            ))}

                            {/* Admin Link for Mobile - Only for admin users */}
                            {user?.role === 'admin' && (
                                <Link
                                    to="/admin"
                                    onClick={() => setIsOpen(false)}
                                    className="block px-4 py-3 rounded-lg text-sm font-medium transition-colors bg-[#FFE66D] text-[#2C1A4D] text-center"
                                >
                                    <Shield className="w-4 h-4 inline-block mr-2" />
                                    Admin Panel
                                </Link>
                            )}

                            {/* Login/Dashboard Link for Mobile */}
                            {user ? (
                                <Link
                                    to="/dashboard"
                                    onClick={() => setIsOpen(false)}
                                    className="block px-4 py-3 rounded-lg text-sm font-medium transition-colors bg-[#ce8fd3] text-white text-center"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <Link
                                    to="/login"
                                    onClick={() => setIsOpen(false)}
                                    className="block px-4 py-3 rounded-lg text-sm font-medium transition-colors bg-[#ce8fd3] text-white text-center"
                                >
                                    Login / Sign Up
                                </Link>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navigation;
