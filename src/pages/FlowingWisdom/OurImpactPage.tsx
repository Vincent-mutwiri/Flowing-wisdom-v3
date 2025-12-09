import { motion } from 'framer-motion';
import { BookOpen, Package, Users, Scale, Megaphone } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const OurImpactPage = () => {
    const [stats, setStats] = useState({
        workshops: 0,
        kitsDistributed: 0,
        ambassadors: 0,
        policiesInfluenced: 0,
        storiesShared: 0
    });

    useEffect(() => {
        const animateStats = () => {
            const targets = {
                workshops: 150,
                kitsDistributed: 10000,
                ambassadors: 200,
                policiesInfluenced: 5,
                storiesShared: 500
            };

            Object.keys(targets).forEach((key) => {
                let current = 0;
                const target = targets[key as keyof typeof targets];
                const increment = target / 50;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    setStats(prev => ({ ...prev, [key]: Math.floor(current) }));
                }, 30);
            });
        };

        animateStats();
    }, []);

    const pillars = [
        {
            id: 'literacy',
            title: 'Menstrual Literacy',
            icon: BookOpen,
            color: 'bg-[#ce8fd3]',
            stat: stats.workshops,
            statLabel: 'Workshops Delivered',
            description: 'Comprehensive education programs that break myths and build understanding',
            achievements: [
                'Reached 5,000+ students across 30 schools',
                'Developed culturally-sensitive curriculum',
                'Trained 50+ educators as menstrual health champions',
                'Created multilingual educational materials'
            ],
            testimonial: {
                text: 'This workshop changed everything. I finally understand my body and feel confident talking about periods.',
                author: 'Sarah, 16'
            }
        },
        {
            id: 'solutions',
            title: 'Sustainable Solutions',
            icon: Package,
            color: 'bg-[#4ECDC4]',
            stat: stats.kitsDistributed,
            statLabel: 'Menstrual Kits Distributed',
            description: 'Providing access to quality menstrual products and sustainable alternatives',
            achievements: [
                'Distributed 10,000+ menstrual hygiene kits',
                'Introduced reusable pad programs in 15 communities',
                'Partnered with local manufacturers for sustainable products',
                'Established product distribution networks in rural areas'
            ],
            testimonial: {
                text: 'I no longer miss school because of my period. The reusable pads have been life-changing.',
                author: 'Grace, 15'
            }
        },
        {
            id: 'ambassadors',
            title: 'Youth Ambassadors',
            icon: Users,
            color: 'bg-[#FF6B6B]',
            stat: stats.ambassadors,
            statLabel: 'Active Ambassadors',
            description: 'Empowering young leaders to become champions of menstrual health',
            achievements: [
                '200+ trained youth ambassadors',
                'Peer-to-peer education reaching 3,000+ youth',
                'Ambassador-led initiatives in 20 communities',
                'Monthly leadership development workshops'
            ],
            testimonial: {
                text: 'Being an ambassador gave me a voice. Now I\'m helping other girls feel empowered too.',
                author: 'Amina, 17'
            }
        },
        {
            id: 'policy',
            title: 'Policy Advocacy',
            icon: Scale,
            color: 'bg-[#FFE66D]',
            stat: stats.policiesInfluenced,
            statLabel: 'Policy Changes Influenced',
            description: 'Advocating for systemic change through policy and institutional reform',
            achievements: [
                'Influenced 5 school policies on menstrual health',
                'Advocated for free menstrual products in schools',
                'Participated in national menstrual health forums',
                'Collaborated with government on health education standards'
            ],
            testimonial: {
                text: 'Their advocacy work helped our school implement a menstrual health policy that supports all students.',
                author: 'Principal Johnson'
            }
        },
        {
            id: 'silence',
            title: 'Breaking the Silence',
            icon: Megaphone,
            color: 'bg-[#B794F6]',
            stat: stats.storiesShared,
            statLabel: 'Stories Shared',
            description: 'Creating safe spaces for open conversations about menstruation',
            achievements: [
                '500+ personal stories shared in safe spaces',
                'Monthly community dialogue sessions',
                'Social media campaigns reaching 50,000+ people',
                'Partnered with media outlets for awareness campaigns'
            ],
            testimonial: {
                text: 'Sharing my story helped me heal and inspired others to speak up. We\'re not alone anymore.',
                author: 'Fatima, 19'
            }
        }
    ];

    return (
        <div className="min-h-screen bg-[#FFF9F0]">
            {/* Hero Section */}
            <section className="py-16 px-4 bg-gradient-to-br from-[#ce8fd3]/20 to-[#4ECDC4]/20">
                <div className="container mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl font-bold text-[#2C1A4D] mb-4"
                    >
                        Our <span className="text-[#ce8fd3]">Impact</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-[#6B4C7A] max-w-3xl mx-auto"
                    >
                        Transforming lives through five pillars of change
                    </motion.p>
                </div>
            </section>

            {/* Overall Stats */}
            <section className="py-12 px-4 bg-white">
                <div className="container mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
                        {pillars.map((pillar, index) => (
                            <motion.div
                                key={pillar.id}
                                initial={{ scale: 0.8, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-4"
                            >
                                <div className={`${pillar.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3`}>
                                    <pillar.icon className="w-8 h-8 text-white" />
                                </div>
                                <div className="text-3xl font-bold text-[#2C1A4D] mb-1">
                                    {pillar.stat.toLocaleString()}+
                                </div>
                                <div className="text-sm text-[#6B4C7A]">{pillar.statLabel}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pillars Tabs */}
            <section className="py-12 px-4">
                <div className="container mx-auto max-w-6xl">
                    <Tabs defaultValue="literacy" className="w-full">
                        <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8 bg-white rounded-xl p-2 shadow-lg">
                            {pillars.map((pillar) => (
                                <TabsTrigger
                                    key={pillar.id}
                                    value={pillar.id}
                                    className="data-[state=active]:bg-[#ce8fd3] data-[state=active]:text-white rounded-lg"
                                >
                                    <pillar.icon className="w-4 h-4 mr-2" />
                                    <span className="hidden md:inline">{pillar.title}</span>
                                </TabsTrigger>
                            ))}
                        </TabsList>

                        {pillars.map((pillar) => (
                            <TabsContent key={pillar.id} value={pillar.id}>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="bg-white rounded-2xl shadow-xl overflow-hidden"
                                >
                                    {/* Header */}
                                    <div className={`${pillar.color} p-8 text-white`}>
                                        <div className="flex items-center gap-4 mb-4">
                                            <pillar.icon className="w-12 h-12" />
                                            <div>
                                                <h2 className="text-3xl font-bold">{pillar.title}</h2>
                                                <p className="text-lg opacity-90">{pillar.description}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-8">
                                        {/* Achievements */}
                                        <div className="mb-8">
                                            <h3 className="text-2xl font-bold text-[#2C1A4D] mb-4">Key Achievements</h3>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                {pillar.achievements.map((achievement, index) => (
                                                    <motion.div
                                                        key={index}
                                                        initial={{ opacity: 0, x: -20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: index * 0.1 }}
                                                        className="flex items-start gap-3 p-4 bg-[#FFF9F0] rounded-lg"
                                                    >
                                                        <div className={`${pillar.color} w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                                                            <span className="text-white text-sm font-bold">✓</span>
                                                        </div>
                                                        <p className="text-[#6B4C7A]">{achievement}</p>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Testimonial */}
                                        <div className={`${pillar.color} bg-opacity-10 rounded-xl p-6`}>
                                            <h3 className="text-xl font-bold text-[#2C1A4D] mb-3">Community Voice</h3>
                                            <blockquote className="text-[#6B4C7A] italic mb-2">
                                                "{pillar.testimonial.text}"
                                            </blockquote>
                                            <p className="text-[#2C1A4D] font-semibold">— {pillar.testimonial.author}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </TabsContent>
                        ))}
                    </Tabs>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 px-4 bg-gradient-to-br from-[#ce8fd3] to-[#B794F6] text-white">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">Be Part of Our Impact</h2>
                    <p className="text-xl mb-8 opacity-90">Your support helps us reach more communities</p>
                    <a
                        href="/get-involved"
                        className="inline-block px-8 py-3 bg-white text-[#ce8fd3] rounded-full font-semibold hover:bg-gray-100 transition-colors"
                    >
                        Get Involved
                    </a>
                </div>
            </section>
        </div>
    );
};

export default OurImpactPage;
