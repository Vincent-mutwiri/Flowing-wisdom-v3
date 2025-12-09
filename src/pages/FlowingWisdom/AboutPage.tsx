import { motion } from 'framer-motion';
import { Heart, Target, Eye, Linkedin, Twitter, Mail } from 'lucide-react';
import { useState } from 'react';

const AboutPage = () => {
    const [flippedCard, setFlippedCard] = useState<string | null>(null);

    const cards = [
        {
            id: 'mission',
            icon: Target,
            title: 'Our Mission',
            front: 'Breaking Barriers',
            back: 'To normalize menstruation through education, advocacy, and access to menstrual products, ensuring no one is held back by their period.',
            color: 'bg-[#ce8fd3]'
        },
        {
            id: 'vision',
            icon: Eye,
            title: 'Our Vision',
            front: 'A World Without Stigma',
            back: 'A world where menstruation is celebrated, not hidden. Where every person has the knowledge, resources, and confidence to manage their period with dignity.',
            color: 'bg-[#4ECDC4]'
        },
        {
            id: 'values',
            icon: Heart,
            title: 'Our Values',
            front: 'Compassion & Empowerment',
            back: 'We lead with empathy, inclusivity, and evidence-based education. We believe in empowering communities through knowledge and support.',
            color: 'bg-[#FF6B6B]'
        }
    ];

    return (
        <div className="min-h-screen bg-[#FFF9F0]">
            {/* Hero Section */}
            <section className="py-20 px-4 bg-gradient-to-br from-[#ce8fd3]/20 to-[#4ECDC4]/20">
                <div className="container mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-bold text-[#2C1A4D] mb-6"
                    >
                        About <span className="text-[#ce8fd3]">Flowing Wisdom</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-[#6B4C7A] max-w-3xl mx-auto"
                    >
                        We're on a mission to transform how the world talks about, thinks about, and experiences menstruation
                    </motion.p>
                </div>
            </section>

            {/* Who We Are */}
            <section className="py-16 px-4">
                <div className="container mx-auto max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl p-8 md:p-12 shadow-lg"
                    >
                        <h2 className="text-3xl font-bold text-[#2C1A4D] mb-6">Who We Are</h2>
                        <div className="space-y-4 text-[#6B4C7A] text-lg leading-relaxed">
                            <p>
                                Flowing Wisdom is a youth-led organization dedicated to breaking the silence around menstruation.
                                Founded on the belief that periods should never be a barrier to education, opportunity, or dignity,
                                we work tirelessly to create a world where menstruation is normalized and celebrated.
                            </p>
                            <p>
                                Through innovative education programs, community engagement, and advocacy, we're reaching thousands
                                of young people with life-changing information and support. Our approach combines science-backed
                                education with culturally sensitive outreach, ensuring that everyone feels seen, heard, and empowered.
                            </p>
                            <p>
                                From interactive workshops in schools to our digital learning platform, from distributing menstrual
                                products to training youth ambassadors, we're building a movement that's changing lives one period at a time.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Mission/Vision Flip Cards */}
            <section className="py-16 px-4 bg-white">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-bold text-center text-[#2C1A4D] mb-12">What Drives Us</h2>
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {cards.map((card, index) => (
                            <motion.div
                                key={card.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="h-80 perspective-1000"
                                onMouseEnter={() => setFlippedCard(card.id)}
                                onMouseLeave={() => setFlippedCard(null)}
                            >
                                <div
                                    className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${flippedCard === card.id ? 'rotate-y-180' : ''
                                        }`}
                                >
                                    {/* Front */}
                                    <div className={`absolute inset-0 ${card.color} rounded-2xl p-8 text-white backface-hidden flex flex-col items-center justify-center text-center`}>
                                        <card.icon className="w-16 h-16 mb-4" />
                                        <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                                        <p className="text-lg opacity-90">{card.front}</p>
                                        <p className="text-sm mt-4 opacity-75">Hover to learn more</p>
                                    </div>
                                    {/* Back */}
                                    <div className={`absolute inset-0 ${card.color} rounded-2xl p-8 text-white backface-hidden rotate-y-180 flex items-center justify-center`}>
                                        <p className="text-lg leading-relaxed">{card.back}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership Spotlight */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-5xl">
                    <h2 className="text-4xl font-bold text-center text-[#2C1A4D] mb-12">Leadership Spotlight</h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl shadow-xl overflow-hidden"
                    >
                        <div className="md:flex">
                            <div className="md:w-1/3 bg-gradient-to-br from-[#ce8fd3] to-[#B794F6] p-8 flex items-center justify-center">
                                <div className="w-48 h-48 rounded-full bg-white/20 flex items-center justify-center">
                                    <div className="w-44 h-44 rounded-full bg-white/40 flex items-center justify-center text-white text-6xl font-bold">
                                        NK
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-2/3 p-8 md:p-12">
                                <h3 className="text-3xl font-bold text-[#2C1A4D] mb-2">Njeri Kamau</h3>
                                <p className="text-[#ce8fd3] font-semibold mb-6">Founder & Executive Director</p>
                                <div className="space-y-4 text-[#6B4C7A] leading-relaxed mb-6">
                                    <p>
                                        Njeri founded Flowing Wisdom after witnessing firsthand how period stigma affected her peers'
                                        education and confidence. With a background in public health and youth advocacy, she's passionate
                                        about creating systemic change through grassroots action.
                                    </p>
                                    <p>
                                        Under her leadership, Flowing Wisdom has grown from a small community initiative to a recognized
                                        voice in menstrual health advocacy, reaching thousands of young people across multiple communities.
                                    </p>
                                    <p>
                                        Njeri believes that when we empower young people with knowledge and resources, we create ripples
                                        of change that transform entire communities.
                                    </p>
                                </div>
                                <div className="flex gap-4">
                                    <a
                                        href="#"
                                        className="w-10 h-10 rounded-full bg-[#ce8fd3] flex items-center justify-center text-white hover:bg-[#B794F6] transition-colors"
                                        aria-label="LinkedIn"
                                    >
                                        <Linkedin className="w-5 h-5" />
                                    </a>
                                    <a
                                        href="#"
                                        className="w-10 h-10 rounded-full bg-[#4ECDC4] flex items-center justify-center text-white hover:bg-[#3DBDB5] transition-colors"
                                        aria-label="Twitter"
                                    >
                                        <Twitter className="w-5 h-5" />
                                    </a>
                                    <a
                                        href="#"
                                        className="w-10 h-10 rounded-full bg-[#FF6B6B] flex items-center justify-center text-white hover:bg-[#FF5252] transition-colors"
                                        aria-label="Email"
                                    >
                                        <Mail className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 px-4 bg-gradient-to-br from-[#ce8fd3] to-[#B794F6] text-white">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">Want to Learn More?</h2>
                    <p className="text-xl mb-8 opacity-90">Explore our impact or get involved in the movement</p>
                    <div className="flex gap-4 justify-center flex-wrap">
                        <a
                            href="/our-impact"
                            className="px-8 py-3 bg-white text-[#ce8fd3] rounded-full font-semibold hover:bg-gray-100 transition-colors"
                        >
                            See Our Impact
                        </a>
                        <a
                            href="/get-involved"
                            className="px-8 py-3 bg-[#4ECDC4] text-white rounded-full font-semibold hover:bg-[#3DBDB5] transition-colors"
                        >
                            Get Involved
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
