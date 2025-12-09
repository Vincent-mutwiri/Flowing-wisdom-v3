import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, Calendar, Heart, Sparkles, Users, Gamepad2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

const HomePage = () => {
    const [counts, setCounts] = useState({ lives: 0, workshops: 0, ambassadors: 0 });

    useEffect(() => {
        const animateCount = (target: number, key: keyof typeof counts) => {
            let current = 0;
            const increment = target / 50;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                setCounts(prev => ({ ...prev, [key]: Math.floor(current) }));
            }, 30);
        };

        animateCount(5000, 'lives');
        animateCount(150, 'workshops');
        animateCount(200, 'ambassadors');
    }, []);

    const pillars = [
        {
            icon: BookOpen,
            title: 'Educate',
            description: 'Breaking myths with science-backed knowledge',
            color: 'bg-[#ce8fd3]'
        },
        {
            icon: Heart,
            title: 'Equip',
            description: 'Providing essential menstrual products',
            color: 'bg-[#FF6B6B]'
        },
        {
            icon: Sparkles,
            title: 'Empower',
            description: 'Building confidence and breaking stigma',
            color: 'bg-[#4ECDC4]'
        }
    ];

    const teasers = [
        {
            title: 'Learning Hub',
            description: 'Interactive courses, videos, and earn badges',
            icon: BookOpen,
            link: '/learning-hub',
            color: 'from-[#ce8fd3] to-[#B794F6]'
        },
        {
            title: 'Period Tracker',
            description: 'Track your cycle with privacy-first design',
            icon: Calendar,
            link: '/period-tracker',
            color: 'from-[#FF6B6B] to-[#FF8E8E]'
        },
        {
            title: 'Flow Arcade',
            description: 'Learn through games and challenges',
            icon: Gamepad2,
            link: '/flow-arcade',
            color: 'from-[#4ECDC4] to-[#7EDDD6]'
        }
    ];

    return (
        <div className="min-h-screen bg-[#FFF9F0]">
            {/* Hero Section */}
            <section className="relative overflow-hidden py-20 px-4">
                <div className="absolute inset-0 bg-gradient-to-br from-[#ce8fd3]/20 via-[#4ECDC4]/10 to-[#FFE66D]/20" />
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="container mx-auto text-center relative z-10"
                >
                    <h1 className="text-5xl md:text-7xl font-bold text-[#2C1A4D] mb-6">
                        Empowering Lives,
                        <br />
                        <span className="text-[#ce8fd3]">One Period at a Time</span>
                    </h1>
                    <p className="text-xl text-[#6B4C7A] mb-8 max-w-2xl mx-auto">
                        Breaking the silence around menstruation through education, support, and community
                    </p>
                    <div className="flex gap-4 justify-center flex-wrap">
                        <Button asChild size="lg" className="bg-[#ce8fd3] hover:bg-[#B794F6] text-white">
                            <Link to="/learning-hub">Start Learning</Link>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="border-[#ce8fd3] text-[#ce8fd3]">
                            <Link to="/about">Our Story</Link>
                        </Button>
                    </div>
                </motion.div>
            </section>

            {/* Impact Counter */}
            <section className="py-16 px-4 bg-white">
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            <div className="text-5xl font-bold text-[#ce8fd3] mb-2">{counts.lives.toLocaleString()}+</div>
                            <div className="text-[#6B4C7A]">Lives Touched</div>
                        </motion.div>
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <div className="text-5xl font-bold text-[#FF6B6B] mb-2">{counts.workshops}+</div>
                            <div className="text-[#6B4C7A]">Workshops Delivered</div>
                        </motion.div>
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="text-5xl font-bold text-[#4ECDC4] mb-2">{counts.ambassadors}+</div>
                            <div className="text-[#6B4C7A]">Youth Ambassadors</div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 3 Pillars */}
            <section className="py-20 px-4">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-bold text-center text-[#2C1A4D] mb-12">Our Three Pillars</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {pillars.map((pillar, index) => (
                            <motion.div
                                key={pillar.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                            >
                                <div className={`${pillar.color} w-16 h-16 rounded-full flex items-center justify-center mb-4`}>
                                    <pillar.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-[#2C1A4D] mb-3">{pillar.title}</h3>
                                <p className="text-[#6B4C7A]">{pillar.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Teaser Cards */}
            <section className="py-20 px-4 bg-white">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-bold text-center text-[#2C1A4D] mb-12">Explore Our Platform</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {teasers.map((teaser, index) => (
                            <motion.div
                                key={teaser.title}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link to={teaser.link} className="block group">
                                    <div className={`bg-gradient-to-br ${teaser.color} rounded-2xl p-8 text-white hover:scale-105 transition-transform`}>
                                        <teaser.icon className="w-12 h-12 mb-4" />
                                        <h3 className="text-2xl font-bold mb-3">{teaser.title}</h3>
                                        <p className="opacity-90">{teaser.description}</p>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 bg-gradient-to-br from-[#ce8fd3] to-[#B794F6] text-white">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to Join the Movement?</h2>
                    <p className="text-xl mb-8 opacity-90">Together, we can break the stigma and empower every person</p>
                    <Button asChild size="lg" className="bg-white text-[#ce8fd3] hover:bg-gray-100">
                        <Link to="/get-involved">Get Involved</Link>
                    </Button>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
