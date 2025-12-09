import { motion } from 'framer-motion';
import { Heart, Users, Star, DollarSign, Package, TrendingUp, BookOpen } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const GetInvolvedPage = () => {
    const [donationAmount, setDonationAmount] = useState(25);
    const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time');
    const [customAmount, setCustomAmount] = useState('');

    const suggestedAmounts = [5, 10, 25, 50, 100];

    const sponsorKits = [
        {
            amount: 15,
            title: '3-Month Supply',
            description: 'Provides menstrual products for 3 months',
            icon: '📦',
            impact: '1 girl stays in school'
        },
        {
            amount: 30,
            title: '6-Month Supply',
            description: 'Half a year of menstrual products',
            icon: '📦📦',
            impact: '2 girls stay in school'
        },
        {
            amount: 60,
            title: 'Full Year Supply',
            description: 'Complete year of menstrual products',
            icon: '📦📦📦',
            impact: '4 girls stay in school'
        }
    ];

    const impactData = [
        { amount: 5, impact: 'Provides educational materials for 1 student' },
        { amount: 10, impact: 'Funds a workshop session for 5 students' },
        { amount: 25, impact: 'Supplies menstrual products for 5 girls' },
        { amount: 50, impact: 'Trains 1 youth ambassador' },
        { amount: 100, impact: 'Sponsors a full community workshop' }
    ];

    const getImpactMessage = (amount: number) => {
        const impact = impactData.reverse().find(i => amount >= i.amount);
        return impact?.impact || 'Every contribution makes a difference!';
    };

    return (
        <div className="min-h-screen bg-[#FFF9F0]">
            {/* Hero Section */}
            <section className="py-16 px-4 bg-gradient-to-br from-[#ce8fd3]/20 to-[#4ECDC4]/20">
                <div className="container mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <Heart className="w-16 h-16 text-[#ce8fd3] mx-auto mb-4" />
                        <h1 className="text-5xl font-bold text-[#2C1A4D] mb-4">
                            Get <span className="text-[#ce8fd3]">Involved</span>
                        </h1>
                        <p className="text-xl text-[#6B4C7A]">
                            Join us in breaking the stigma and empowering communities
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Our Impact Stats */}
            <section className="py-12 px-4 bg-white">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-center text-[#2C1A4D] mb-12">Our Impact</h2>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
                        <div className="p-4">
                            <div className="bg-[#ce8fd3] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                                <BookOpen className="w-8 h-8 text-white" />
                            </div>
                            <div className="text-3xl font-bold text-[#2C1A4D] mb-1">150+</div>
                            <div className="text-sm text-[#6B4C7A]">Workshops Delivered</div>
                        </div>
                        <div className="p-4">
                            <div className="bg-[#4ECDC4] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                                <Package className="w-8 h-8 text-white" />
                            </div>
                            <div className="text-3xl font-bold text-[#2C1A4D] mb-1">10,000+</div>
                            <div className="text-sm text-[#6B4C7A]">Kits Distributed</div>
                        </div>
                        <div className="p-4">
                            <div className="bg-[#FF6B6B] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                                <Users className="w-8 h-8 text-white" />
                            </div>
                            <div className="text-3xl font-bold text-[#2C1A4D] mb-1">200+</div>
                            <div className="text-sm text-[#6B4C7A]">Active Ambassadors</div>
                        </div>
                        <div className="p-4">
                            <div className="bg-[#FFE66D] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                                <TrendingUp className="w-8 h-8 text-white" />
                            </div>
                            <div className="text-3xl font-bold text-[#2C1A4D] mb-1">5+</div>
                            <div className="text-sm text-[#6B4C7A]">Policy Changes</div>
                        </div>
                        <div className="p-4">
                            <div className="bg-[#B794F6] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                                <Heart className="w-8 h-8 text-white" />
                            </div>
                            <div className="text-3xl font-bold text-[#2C1A4D] mb-1">500+</div>
                            <div className="text-sm text-[#6B4C7A]">Stories Shared</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Ways to Help */}
            <section className="py-12 px-4">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-center text-[#2C1A4D] mb-12">Ways to Make an Impact</h2>
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow"
                        >
                            <div className="w-16 h-16 bg-[#ce8fd3] rounded-full flex items-center justify-center mx-auto mb-4">
                                <DollarSign className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-[#2C1A4D] mb-3">Donate</h3>
                            <p className="text-[#6B4C7A] mb-4">
                                Your financial support helps us reach more communities and provide essential resources
                            </p>
                            <a href="#donate" className="text-[#ce8fd3] font-semibold hover:underline">
                                Donate Now →
                            </a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow"
                        >
                            <div className="w-16 h-16 bg-[#4ECDC4] rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-[#2C1A4D] mb-3">Volunteer</h3>
                            <p className="text-[#6B4C7A] mb-4">
                                Share your time and skills to support our programs and events
                            </p>
                            <a href="#volunteer" className="text-[#4ECDC4] font-semibold hover:underline">
                                Join Us →
                            </a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow"
                        >
                            <div className="w-16 h-16 bg-[#FF6B6B] rounded-full flex items-center justify-center mx-auto mb-4">
                                <Star className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-[#2C1A4D] mb-3">Become an Ambassador</h3>
                            <p className="text-[#6B4C7A] mb-4">
                                Lead the movement in your community as a trained youth ambassador
                            </p>
                            <a href="#ambassador" className="text-[#FF6B6B] font-semibold hover:underline">
                                Apply Now →
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Donation Section */}
            <section id="donate" className="py-16 px-4 bg-white">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="text-4xl font-bold text-center text-[#2C1A4D] mb-4">Make a Donation</h2>
                    <p className="text-center text-[#6B4C7A] mb-12">
                        Every contribution helps us empower more lives
                    </p>

                    <div className="bg-gradient-to-br from-[#ce8fd3]/10 to-[#4ECDC4]/10 rounded-3xl p-8 md:p-12">
                        {/* Donation Type Toggle */}
                        <div className="flex gap-2 bg-white rounded-full p-1 mb-8 max-w-md mx-auto">
                            <button
                                onClick={() => setDonationType('one-time')}
                                className={`flex-1 px-6 py-3 rounded-full font-semibold transition-colors ${donationType === 'one-time'
                                        ? 'bg-[#ce8fd3] text-white'
                                        : 'text-[#6B4C7A] hover:text-[#2C1A4D]'
                                    }`}
                            >
                                One-Time
                            </button>
                            <button
                                onClick={() => setDonationType('monthly')}
                                className={`flex-1 px-6 py-3 rounded-full font-semibold transition-colors ${donationType === 'monthly'
                                        ? 'bg-[#ce8fd3] text-white'
                                        : 'text-[#6B4C7A] hover:text-[#2C1A4D]'
                                    }`}
                            >
                                Monthly
                            </button>
                        </div>

                        {/* Suggested Amounts */}
                        <div className="grid grid-cols-3 md:grid-cols-5 gap-4 mb-6">
                            {suggestedAmounts.map((amount) => (
                                <motion.button
                                    key={amount}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => {
                                        setDonationAmount(amount);
                                        setCustomAmount('');
                                    }}
                                    className={`py-4 rounded-xl font-bold text-lg transition-colors ${donationAmount === amount && !customAmount
                                            ? 'bg-[#ce8fd3] text-white'
                                            : 'bg-white text-[#2C1A4D] hover:bg-[#F5E6F7]'
                                        }`}
                                >
                                    ${amount}
                                </motion.button>
                            ))}
                        </div>

                        {/* Custom Amount */}
                        <div className="mb-6">
                            <label className="block text-[#2C1A4D] font-semibold mb-2">Custom Amount</label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B4C7A] text-xl">$</span>
                                <input
                                    type="number"
                                    value={customAmount}
                                    onChange={(e) => {
                                        setCustomAmount(e.target.value);
                                        setDonationAmount(parseInt(e.target.value) || 0);
                                    }}
                                    placeholder="Enter amount"
                                    className="w-full pl-10 pr-4 py-4 rounded-xl border-2 border-[#E8D4EA] focus:border-[#ce8fd3] focus:outline-none text-xl"
                                />
                            </div>
                        </div>

                        {/* Impact Message */}
                        <div className="bg-[#FFE66D]/30 rounded-xl p-4 mb-6 text-center">
                            <TrendingUp className="w-6 h-6 text-[#2C1A4D] mx-auto mb-2" />
                            <p className="text-[#2C1A4D] font-semibold">
                                {getImpactMessage(donationAmount)}
                            </p>
                        </div>

                        {/* Donate Button */}
                        <Button
                            size="lg"
                            className="w-full bg-[#ce8fd3] hover:bg-[#B794F6] text-white text-xl py-6"
                        >
                            Donate ${customAmount || donationAmount} {donationType === 'monthly' && '/ month'}
                        </Button>

                        <p className="text-center text-sm text-[#6B4C7A] mt-4">
                            Secure payment processing • Tax-deductible
                        </p>
                    </div>
                </div>
            </section>

            {/* Sponsor a Kit */}
            <section className="py-16 px-4">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-4xl font-bold text-center text-[#2C1A4D] mb-4">Sponsor a Menstrual Kit</h2>
                    <p className="text-center text-[#6B4C7A] mb-12">
                        Provide essential supplies that keep girls in school
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        {sponsorKits.map((kit, index) => (
                            <motion.div
                                key={kit.amount}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                            >
                                <div className="text-5xl mb-4 text-center">{kit.icon}</div>
                                <h3 className="text-2xl font-bold text-[#2C1A4D] mb-2 text-center">{kit.title}</h3>
                                <p className="text-[#6B4C7A] mb-4 text-center">{kit.description}</p>
                                <div className="bg-[#4ECDC4]/20 rounded-xl p-4 mb-6 text-center">
                                    <Package className="w-6 h-6 text-[#4ECDC4] mx-auto mb-2" />
                                    <p className="text-[#2C1A4D] font-semibold">{kit.impact}</p>
                                </div>
                                <Button className="w-full bg-[#4ECDC4] hover:bg-[#3DBDB5] text-white">
                                    Sponsor for ${kit.amount}
                                </Button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Volunteer Section */}
            <section id="volunteer" className="py-16 px-4 bg-white">
                <div className="container mx-auto max-w-3xl">
                    <h2 className="text-4xl font-bold text-center text-[#2C1A4D] mb-4">Volunteer With Us</h2>
                    <p className="text-center text-[#6B4C7A] mb-12">
                        Share your time, skills, and passion to make a difference
                    </p>

                    <div className="bg-[#F5E6F7] rounded-2xl p-8">
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-[#2C1A4D] font-semibold mb-2">First Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 rounded-xl border-2 border-[#E8D4EA] focus:border-[#ce8fd3] focus:outline-none"
                                        placeholder="Your first name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[#2C1A4D] font-semibold mb-2">Last Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 rounded-xl border-2 border-[#E8D4EA] focus:border-[#ce8fd3] focus:outline-none"
                                        placeholder="Your last name"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-[#2C1A4D] font-semibold mb-2">Email</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 rounded-xl border-2 border-[#E8D4EA] focus:border-[#ce8fd3] focus:outline-none"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div>
                                <label className="block text-[#2C1A4D] font-semibold mb-2">Areas of Interest</label>
                                <select className="w-full px-4 py-3 rounded-xl border-2 border-[#E8D4EA] focus:border-[#ce8fd3] focus:outline-none">
                                    <option>Select an area</option>
                                    <option>Event Support</option>
                                    <option>Content Creation</option>
                                    <option>Workshop Facilitation</option>
                                    <option>Social Media</option>
                                    <option>Fundraising</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-[#2C1A4D] font-semibold mb-2">Tell us about yourself</label>
                                <textarea
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-xl border-2 border-[#E8D4EA] focus:border-[#ce8fd3] focus:outline-none"
                                    placeholder="Share your skills, experience, and why you want to volunteer..."
                                />
                            </div>

                            <Button className="w-full bg-[#4ECDC4] hover:bg-[#3DBDB5] text-white py-6 text-lg">
                                Submit Application
                            </Button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Ambassador Program */}
            <section id="ambassador" className="py-16 px-4">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="text-4xl font-bold text-center text-[#2C1A4D] mb-4">Youth Ambassador Program</h2>
                    <p className="text-center text-[#6B4C7A] mb-12">
                        Become a leader in menstrual health advocacy
                    </p>

                    <div className="bg-gradient-to-br from-[#FF6B6B] to-[#FF8E8E] rounded-3xl p-8 md:p-12 text-white">
                        <h3 className="text-2xl font-bold mb-6">What You'll Get:</h3>
                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">✓</div>
                                <div>
                                    <h4 className="font-bold mb-1">Leadership Training</h4>
                                    <p className="text-sm opacity-90">Comprehensive training in advocacy and education</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">✓</div>
                                <div>
                                    <h4 className="font-bold mb-1">Mentorship</h4>
                                    <p className="text-sm opacity-90">Guidance from experienced advocates</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">✓</div>
                                <div>
                                    <h4 className="font-bold mb-1">Resources & Support</h4>
                                    <p className="text-sm opacity-90">Educational materials and program support</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">✓</div>
                                <div>
                                    <h4 className="font-bold mb-1">Community Impact</h4>
                                    <p className="text-sm opacity-90">Lead initiatives in your community</p>
                                </div>
                            </div>
                        </div>

                        <Button className="w-full bg-white text-[#FF6B6B] hover:bg-gray-100 py-6 text-lg">
                            Apply to Become an Ambassador
                        </Button>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 px-4 bg-gradient-to-br from-[#ce8fd3] to-[#B794F6] text-white">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">Every Action Counts</h2>
                    <p className="text-xl mb-8 opacity-90">
                        Whether you donate, volunteer, or spread awareness, you're making a difference
                    </p>
                    <div className="flex gap-4 justify-center flex-wrap">
                        <Button className="bg-white text-[#ce8fd3] hover:bg-gray-100">
                            Share Our Mission
                        </Button>
                        <Button className="bg-[#4ECDC4] text-white hover:bg-[#3DBDB5]">
                            Follow Us on Social Media
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GetInvolvedPage;
