import { motion } from 'framer-motion';
import { BookOpen, Video, Award, Play, Clock, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const LearningHubPage = () => {
    const courses = [
        {
            id: 1,
            title: 'Understanding Your Cycle',
            description: 'Learn about the menstrual cycle, hormones, and what\'s normal',
            duration: '45 min',
            modules: 5,
            level: 'Beginner',
            color: 'from-[#ce8fd3] to-[#B794F6]',
            progress: 60
        },
        {
            id: 2,
            title: 'Menstrual Health & Hygiene',
            description: 'Best practices for staying healthy and comfortable',
            duration: '30 min',
            modules: 4,
            level: 'Beginner',
            color: 'from-[#4ECDC4] to-[#7EDDD6]',
            progress: 100
        },
        {
            id: 3,
            title: 'Breaking the Stigma',
            description: 'Understanding and challenging period taboos',
            duration: '40 min',
            modules: 4,
            level: 'Intermediate',
            color: 'from-[#FF6B6B] to-[#FF8E8E]',
            progress: 25
        }
    ];

    const videos = [
        {
            id: 1,
            title: 'What Happens During Your Period?',
            duration: '5:30',
            thumbnail: '🎬',
            views: '2.5K'
        },
        {
            id: 2,
            title: 'Choosing the Right Products',
            duration: '7:15',
            thumbnail: '🎬',
            views: '1.8K'
        },
        {
            id: 3,
            title: 'Managing Period Pain',
            duration: '6:45',
            thumbnail: '🎬',
            views: '3.2K'
        }
    ];

    const articles = [
        {
            id: 1,
            title: '10 Myths About Periods Debunked',
            readTime: '5 min read',
            category: 'Education'
        },
        {
            id: 2,
            title: 'Sustainable Period Products Guide',
            readTime: '8 min read',
            category: 'Products'
        },
        {
            id: 3,
            title: 'Talking to Your Parents About Periods',
            readTime: '6 min read',
            category: 'Communication'
        }
    ];

    const badges = [
        { name: 'First Steps', icon: '🌱', earned: true },
        { name: 'Knowledge Seeker', icon: '📚', earned: true },
        { name: 'Myth Buster', icon: '🎯', earned: true },
        { name: 'Cycle Expert', icon: '⭐', earned: false },
        { name: 'Health Champion', icon: '🏆', earned: false }
    ];

    return (
        <div className="min-h-screen bg-[#FFF9F0]">
            {/* Hero Section */}
            <section className="py-16 px-4 bg-gradient-to-br from-[#ce8fd3]/20 to-[#4ECDC4]/20">
                <div className="container mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <BookOpen className="w-16 h-16 text-[#ce8fd3] mx-auto mb-4" />
                        <h1 className="text-5xl font-bold text-[#2C1A4D] mb-4">
                            Learning <span className="text-[#ce8fd3]">Hub</span>
                        </h1>
                        <p className="text-xl text-[#6B4C7A]">
                            Interactive courses, videos, and resources to empower your journey
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Progress Overview */}
            <section className="py-8 px-4 bg-white border-b border-[#E8D4EA]">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid md:grid-cols-4 gap-6 text-center">
                        <div>
                            <div className="text-3xl font-bold text-[#ce8fd3] mb-1">3</div>
                            <div className="text-[#6B4C7A] text-sm">Courses Started</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-[#4ECDC4] mb-1">12</div>
                            <div className="text-[#6B4C7A] text-sm">Videos Watched</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-[#FF6B6B] mb-1">8</div>
                            <div className="text-[#6B4C7A] text-sm">Articles Read</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-[#FFE66D] mb-1">5</div>
                            <div className="text-[#6B4C7A] text-sm">Badges Earned</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Interactive Courses */}
            <section className="py-12 px-4">
                <div className="container mx-auto">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-3xl font-bold text-[#2C1A4D]">Interactive Courses</h2>
                        <Link to="/courses" className="text-[#ce8fd3] font-semibold hover:underline">
                            View All →
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {courses.map((course, index) => (
                            <motion.div
                                key={course.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                            >
                                <div className={`h-32 bg-gradient-to-br ${course.color} flex items-center justify-center`}>
                                    <BookOpen className="w-12 h-12 text-white" />
                                </div>

                                <div className="p-6">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="px-3 py-1 bg-[#F5E6F7] text-[#ce8fd3] text-xs font-semibold rounded-full">
                                            {course.level}
                                        </span>
                                        <span className="text-[#6B4C7A] text-sm flex items-center gap-1">
                                            <Clock className="w-4 h-4" />
                                            {course.duration}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-[#2C1A4D] mb-2">{course.title}</h3>
                                    <p className="text-[#6B4C7A] mb-4 line-clamp-2">{course.description}</p>

                                    <div className="mb-4">
                                        <div className="flex justify-between text-sm text-[#6B4C7A] mb-2">
                                            <span>Progress</span>
                                            <span>{course.progress}%</span>
                                        </div>
                                        <div className="w-full bg-[#F5E6F7] rounded-full h-2">
                                            <div
                                                className="bg-[#ce8fd3] h-2 rounded-full transition-all"
                                                style={{ width: `${course.progress}%` }}
                                            />
                                        </div>
                                    </div>

                                    <Button className="w-full bg-[#ce8fd3] hover:bg-[#B794F6] text-white">
                                        {course.progress > 0 ? 'Continue Learning' : 'Start Course'}
                                    </Button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Video Library */}
            <section className="py-12 px-4 bg-white">
                <div className="container mx-auto">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-3xl font-bold text-[#2C1A4D]">Video Library</h2>
                        <button className="text-[#ce8fd3] font-semibold hover:underline">
                            View All →
                        </button>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {videos.map((video, index) => (
                            <motion.div
                                key={video.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-[#FFF9F0] rounded-2xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
                            >
                                <div className="relative h-48 bg-gradient-to-br from-[#4ECDC4] to-[#7EDDD6] flex items-center justify-center">
                                    <div className="text-6xl">{video.thumbnail}</div>
                                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                                            <Play className="w-8 h-8 text-[#4ECDC4] ml-1" />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                                        {video.duration}
                                    </div>
                                </div>

                                <div className="p-4">
                                    <h3 className="font-bold text-[#2C1A4D] mb-2">{video.title}</h3>
                                    <div className="flex items-center gap-2 text-sm text-[#6B4C7A]">
                                        <Video className="w-4 h-4" />
                                        <span>{video.views} views</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Articles */}
            <section className="py-12 px-4">
                <div className="container mx-auto">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-3xl font-bold text-[#2C1A4D]">Featured Articles</h2>
                        <button className="text-[#ce8fd3] font-semibold hover:underline">
                            View All →
                        </button>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {articles.map((article, index) => (
                            <motion.div
                                key={article.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                            >
                                <div className="inline-block px-3 py-1 bg-[#FFE66D]/30 text-[#2C1A4D] text-xs font-semibold rounded-full mb-3">
                                    {article.category}
                                </div>
                                <h3 className="text-xl font-bold text-[#2C1A4D] mb-3">{article.title}</h3>
                                <div className="flex items-center gap-2 text-[#6B4C7A] text-sm">
                                    <Clock className="w-4 h-4" />
                                    <span>{article.readTime}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Badges */}
            <section className="py-12 px-4 bg-gradient-to-br from-[#FFE66D]/20 to-[#ce8fd3]/20">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl font-bold text-[#2C1A4D] mb-4">Your Achievements</h2>
                    <p className="text-[#6B4C7A] mb-8">Earn badges as you learn and grow</p>

                    <div className="flex gap-6 justify-center flex-wrap">
                        {badges.map((badge, index) => (
                            <motion.div
                                key={badge.name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`w-24 h-24 rounded-full flex flex-col items-center justify-center ${badge.earned
                                        ? 'bg-gradient-to-br from-[#FFE66D] to-[#FFD700]'
                                        : 'bg-gray-200 grayscale opacity-50'
                                    }`}
                            >
                                <div className="text-3xl mb-1">{badge.icon}</div>
                                <div className="text-xs font-semibold text-[#2C1A4D]">{badge.name}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 px-4 bg-gradient-to-br from-[#ce8fd3] to-[#B794F6] text-white">
                <div className="container mx-auto text-center">
                    <Award className="w-12 h-12 mx-auto mb-4" />
                    <h2 className="text-3xl font-bold mb-4">Ready to Learn More?</h2>
                    <p className="text-xl mb-8 opacity-90">
                        Explore all our courses and become a menstrual health champion
                    </p>
                    <Button asChild className="bg-white text-[#ce8fd3] hover:bg-gray-100">
                        <Link to="/courses">Browse All Courses</Link>
                    </Button>
                </div>
            </section>
        </div>
    );
};

export default LearningHubPage;
