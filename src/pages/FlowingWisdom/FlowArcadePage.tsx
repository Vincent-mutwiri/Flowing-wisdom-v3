import { motion } from 'framer-motion';
import { Trophy, Star, Zap, Award, TrendingUp, Gamepad2 } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface FactCard {
    id: number;
    statement: string;
    isFact: boolean;
    explanation: string;
}

interface Badge {
    id: string;
    name: string;
    description: string;
    icon: string;
    unlocked: boolean;
    progress?: number;
}

const FlowArcadePage = () => {
    const [currentCard, setCurrentCard] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);

    const factCards: FactCard[] = [
        {
            id: 1,
            statement: 'You can get pregnant during your period',
            isFact: true,
            explanation: 'While less likely, it is possible to get pregnant during menstruation, especially with irregular cycles.'
        },
        {
            id: 2,
            statement: 'Swimming during your period is dangerous',
            isFact: false,
            explanation: 'Swimming during your period is completely safe! Use a tampon or menstrual cup for comfort.'
        },
        {
            id: 3,
            statement: 'Period blood is dirty or impure',
            isFact: false,
            explanation: 'Period blood is just blood and tissue from the uterine lining. It\'s a natural, healthy process.'
        },
        {
            id: 4,
            statement: 'The average period lasts 3-7 days',
            isFact: true,
            explanation: 'Most periods last between 3-7 days, though this can vary from person to person.'
        },
        {
            id: 5,
            statement: 'You lose about 2-3 tablespoons of blood during a period',
            isFact: true,
            explanation: 'The average blood loss during menstruation is 30-40ml (2-3 tablespoons), though it may seem like more.'
        }
    ];

    const badges: Badge[] = [
        {
            id: 'myth-buster',
            name: 'Myth Buster',
            description: 'Correctly identify 10 myths',
            icon: '🎯',
            unlocked: true,
            progress: 100
        },
        {
            id: 'fact-finder',
            name: 'Fact Finder',
            description: 'Complete 5 fact-checking games',
            icon: '🔍',
            unlocked: true,
            progress: 100
        },
        {
            id: 'cycle-warrior',
            name: 'Cycle Warrior',
            description: 'Complete all learning modules',
            icon: '⚔️',
            unlocked: false,
            progress: 60
        },
        {
            id: 'knowledge-champion',
            name: 'Knowledge Champion',
            description: 'Score 100% on 3 quizzes',
            icon: '🏆',
            unlocked: false,
            progress: 33
        },
        {
            id: 'streak-master',
            name: 'Streak Master',
            description: 'Maintain a 7-day learning streak',
            icon: '🔥',
            unlocked: false,
            progress: 42
        },
        {
            id: 'community-hero',
            name: 'Community Hero',
            description: 'Share 5 resources with friends',
            icon: '💜',
            unlocked: false,
            progress: 20
        }
    ];

    const leaderboard = [
        { rank: 1, username: 'PeriodPro', points: 2450, avatar: '👑' },
        { rank: 2, username: 'CycleQueen', points: 2180, avatar: '⭐' },
        { rank: 3, username: 'FlowMaster', points: 1950, avatar: '💫' },
        { rank: 4, username: 'MythBuster99', points: 1820, avatar: '🎯' },
        { rank: 5, username: 'WisdomSeeker', points: 1650, avatar: '🌟' },
        { rank: 6, username: 'You', points: 1420, avatar: '🦋', isCurrentUser: true }
    ];

    const handleSwipe = (isFact: boolean) => {
        const card = factCards[currentCard];
        const correct = card.isFact === isFact;

        setIsCorrect(correct);
        setShowResult(true);

        if (correct) {
            setScore(score + 100);
            setShowConfetti(true);
            setTimeout(() => setShowConfetti(false), 1000);
        }

        setTimeout(() => {
            setShowResult(false);
            if (currentCard < factCards.length - 1) {
                setCurrentCard(currentCard + 1);
            } else {
                setCurrentCard(0);
            }
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-[#FFF9F0]">
            {/* Confetti Effect */}
            {showConfetti && (
                <div className="fixed inset-0 pointer-events-none z-50">
                    {[...Array(50)].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ y: -20, x: Math.random() * window.innerWidth, opacity: 1 }}
                            animate={{ y: window.innerHeight, opacity: 0 }}
                            transition={{ duration: 2, delay: Math.random() * 0.5 }}
                            className="absolute text-2xl"
                        >
                            {['🎉', '⭐', '💜', '✨'][Math.floor(Math.random() * 4)]}
                        </motion.div>
                    ))}
                </div>
            )}

            {/* Hero Section */}
            <section className="py-16 px-4 bg-gradient-to-br from-[#ce8fd3]/20 to-[#FFE66D]/20">
                <div className="container mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <Gamepad2 className="w-16 h-16 text-[#ce8fd3] mx-auto mb-4" />
                        <h1 className="text-5xl font-bold text-[#2C1A4D] mb-4">
                            The <span className="text-[#ce8fd3]">Flow Arcade</span>
                        </h1>
                        <p className="text-xl text-[#6B4C7A]">Learn through play, earn badges, and climb the leaderboard!</p>
                    </motion.div>
                </div>
            </section>

            {/* Score Display */}
            <section className="py-6 px-4 bg-white border-b border-[#E8D4EA]">
                <div className="container mx-auto flex justify-center items-center gap-8">
                    <div className="flex items-center gap-2">
                        <Star className="w-6 h-6 text-[#FFE66D]" />
                        <span className="text-2xl font-bold text-[#2C1A4D]">{score}</span>
                        <span className="text-[#6B4C7A]">Points</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Zap className="w-6 h-6 text-[#FF6B6B]" />
                        <span className="text-2xl font-bold text-[#2C1A4D]">5</span>
                        <span className="text-[#6B4C7A]">Day Streak</span>
                    </div>
                </div>
            </section>

            {/* Fact or Myth Game */}
            <section className="py-12 px-4">
                <div className="container mx-auto max-w-2xl">
                    <h2 className="text-3xl font-bold text-center text-[#2C1A4D] mb-8">Fact or Myth?</h2>

                    <motion.div
                        key={currentCard}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="relative"
                    >
                        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 min-h-[400px] flex flex-col justify-between">
                            <div>
                                <div className="text-center mb-8">
                                    <span className="text-[#6B4C7A] font-semibold">Card {currentCard + 1} of {factCards.length}</span>
                                </div>
                                <p className="text-2xl md:text-3xl text-center text-[#2C1A4D] font-semibold mb-8">
                                    {factCards[currentCard].statement}
                                </p>
                            </div>

                            {!showResult ? (
                                <div className="flex gap-4 justify-center">
                                    <Button
                                        onClick={() => handleSwipe(false)}
                                        size="lg"
                                        className="bg-[#FF6B6B] hover:bg-[#FF5252] text-white px-12 py-6 text-xl"
                                    >
                                        ← Myth
                                    </Button>
                                    <Button
                                        onClick={() => handleSwipe(true)}
                                        size="lg"
                                        className="bg-[#4ECDC4] hover:bg-[#3DBDB5] text-white px-12 py-6 text-xl"
                                    >
                                        Fact →
                                    </Button>
                                </div>
                            ) : (
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className={`text-center p-6 rounded-2xl ${isCorrect ? 'bg-[#4ECDC4]/20' : 'bg-[#FF6B6B]/20'
                                        }`}
                                >
                                    <div className="text-4xl mb-2">{isCorrect ? '✓' : '✗'}</div>
                                    <p className="text-xl font-bold text-[#2C1A4D] mb-2">
                                        {isCorrect ? 'Correct! +100 points' : 'Not quite!'}
                                    </p>
                                    <p className="text-[#6B4C7A]">{factCards[currentCard].explanation}</p>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Badges Section */}
            <section className="py-12 px-4 bg-white">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-center text-[#2C1A4D] mb-8">Your Badges</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
                        {badges.map((badge, index) => (
                            <motion.div
                                key={badge.id}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`text-center p-4 rounded-2xl ${badge.unlocked ? 'bg-gradient-to-br from-[#FFE66D] to-[#FFD700]' : 'bg-gray-100'
                                    }`}
                            >
                                <div className={`text-5xl mb-2 ${!badge.unlocked && 'grayscale opacity-50'}`}>
                                    {badge.icon}
                                </div>
                                <h3 className="font-bold text-[#2C1A4D] text-sm mb-1">{badge.name}</h3>
                                <p className="text-xs text-[#6B4C7A] mb-2">{badge.description}</p>
                                {!badge.unlocked && badge.progress && (
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div
                                            className="bg-[#ce8fd3] h-2 rounded-full transition-all"
                                            style={{ width: `${badge.progress}%` }}
                                        />
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leaderboard */}
            <section className="py-12 px-4">
                <div className="container mx-auto max-w-3xl">
                    <h2 className="text-3xl font-bold text-center text-[#2C1A4D] mb-8">
                        <Trophy className="w-8 h-8 inline-block mr-2 text-[#FFE66D]" />
                        Leaderboard
                    </h2>
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                        {leaderboard.map((player, index) => (
                            <motion.div
                                key={player.rank}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className={`flex items-center gap-4 p-4 border-b border-[#E8D4EA] last:border-b-0 ${player.isCurrentUser ? 'bg-[#ce8fd3]/10' : ''
                                    }`}
                            >
                                <div className={`text-2xl font-bold w-12 text-center ${player.rank === 1 ? 'text-[#FFE66D]' :
                                        player.rank === 2 ? 'text-gray-400' :
                                            player.rank === 3 ? 'text-[#CD7F32]' :
                                                'text-[#6B4C7A]'
                                    }`}>
                                    {player.rank}
                                </div>
                                <div className="text-3xl">{player.avatar}</div>
                                <div className="flex-1">
                                    <div className="font-bold text-[#2C1A4D]">{player.username}</div>
                                    <div className="text-sm text-[#6B4C7A]">{player.points.toLocaleString()} points</div>
                                </div>
                                {player.rank <= 3 && (
                                    <Award className={`w-6 h-6 ${player.rank === 1 ? 'text-[#FFE66D]' :
                                            player.rank === 2 ? 'text-gray-400' :
                                                'text-[#CD7F32]'
                                        }`} />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* More Games Coming Soon */}
            <section className="py-12 px-4 bg-gradient-to-br from-[#ce8fd3] to-[#B794F6] text-white">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">More Games Coming Soon!</h2>
                    <p className="text-xl mb-6 opacity-90">Period Jeopardy, Quiz Challenges, and more...</p>
                    <div className="flex gap-4 justify-center flex-wrap">
                        <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
                            <p className="font-semibold">🎲 Period Jeopardy</p>
                        </div>
                        <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
                            <p className="font-semibold">🧩 Puzzle Challenges</p>
                        </div>
                        <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
                            <p className="font-semibold">🎯 Daily Quests</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FlowArcadePage;
