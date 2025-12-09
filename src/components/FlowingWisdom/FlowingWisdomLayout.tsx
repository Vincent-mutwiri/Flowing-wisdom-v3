import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import { Heart, Mail, Facebook, Twitter, Instagram } from 'lucide-react';

const FlowingWisdomLayout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navigation />

            <main className="flex-1">
                <Outlet />
            </main>

            {/* Footer */}
            <footer className="bg-[#2C1A4D] text-white py-12 px-4">
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-4 gap-8 mb-8">
                        {/* About */}
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-10 h-10 bg-gradient-to-br from-[#ce8fd3] to-[#B794F6] rounded-full flex items-center justify-center">
                                    <span className="text-white font-bold">FW</span>
                                </div>
                                <span className="text-lg font-bold">Flowing Wisdom</span>
                            </div>
                            <p className="text-sm text-gray-300">
                                Empowering lives through menstrual health education and advocacy.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="font-bold mb-4">Quick Links</h3>
                            <ul className="space-y-2 text-sm text-gray-300">
                                <li><a href="/about" className="hover:text-[#ce8fd3] transition-colors">About Us</a></li>
                                <li><a href="/our-impact" className="hover:text-[#ce8fd3] transition-colors">Our Impact</a></li>
                                <li><a href="/events" className="hover:text-[#ce8fd3] transition-colors">Events</a></li>
                                <li><a href="/get-involved" className="hover:text-[#ce8fd3] transition-colors">Get Involved</a></li>
                            </ul>
                        </div>

                        {/* Resources */}
                        <div>
                            <h3 className="font-bold mb-4">Resources</h3>
                            <ul className="space-y-2 text-sm text-gray-300">
                                <li><a href="/learning-hub" className="hover:text-[#ce8fd3] transition-colors">Learning Hub</a></li>
                                <li><a href="/ask-iris" className="hover:text-[#ce8fd3] transition-colors">Ask Iris</a></li>
                                <li><a href="/flow-arcade" className="hover:text-[#ce8fd3] transition-colors">Flow Arcade</a></li>
                                <li><a href="/period-tracker" className="hover:text-[#ce8fd3] transition-colors">Period Tracker</a></li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <h3 className="font-bold mb-4">Connect With Us</h3>
                            <div className="flex gap-3 mb-4">
                                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#ce8fd3] transition-colors">
                                    <Facebook className="w-5 h-5" />
                                </a>
                                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#ce8fd3] transition-colors">
                                    <Twitter className="w-5 h-5" />
                                </a>
                                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#ce8fd3] transition-colors">
                                    <Instagram className="w-5 h-5" />
                                </a>
                            </div>
                            <a href="mailto:info@flowingwisdom.org" className="flex items-center gap-2 text-sm text-gray-300 hover:text-[#ce8fd3] transition-colors">
                                <Mail className="w-4 h-4" />
                                info@flowingwisdom.org
                            </a>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-300">
                        <p>© 2025 Flowing Wisdom. All rights reserved.</p>
                        <div className="flex gap-6">
                            <a href="#" className="hover:text-[#ce8fd3] transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-[#ce8fd3] transition-colors">Terms of Service</a>
                            <a href="#" className="hover:text-[#ce8fd3] transition-colors">Contact</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default FlowingWisdomLayout;
