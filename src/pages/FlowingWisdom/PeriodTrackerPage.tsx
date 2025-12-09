import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, Heart, Droplet, Smile, Frown, Meh, Activity, Lock } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface DayData {
    date: string;
    isPeriod: boolean;
    flow?: 'light' | 'medium' | 'heavy';
    symptoms: string[];
    mood?: 'happy' | 'neutral' | 'sad';
}

const PeriodTrackerPage = () => {
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const [trackedDays, setTrackedDays] = useState<DayData[]>([
        { date: '2025-01-05', isPeriod: true, flow: 'medium', symptoms: ['cramps'], mood: 'neutral' },
        { date: '2025-01-06', isPeriod: true, flow: 'heavy', symptoms: ['cramps', 'fatigue'], mood: 'sad' },
        { date: '2025-01-07', isPeriod: true, flow: 'medium', symptoms: ['bloating'], mood: 'neutral' },
    ]);

    const symptoms = [
        { id: 'cramps', label: 'Cramps', icon: '💢' },
        { id: 'bloating', label: 'Bloating', icon: '🎈' },
        { id: 'fatigue', label: 'Fatigue', icon: '😴' },
        { id: 'headache', label: 'Headache', icon: '🤕' },
        { id: 'mood-swings', label: 'Mood Swings', icon: '🎭' },
        { id: 'acne', label: 'Acne', icon: '🔴' },
    ];

    const getCurrentCycleDay = () => {
        const lastPeriod = trackedDays.find(d => d.isPeriod);
        if (!lastPeriod) return null;

        const lastDate = new Date(lastPeriod.date);
        const today = new Date();
        const diffTime = today.getTime() - lastDate.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    };

    const getCyclePhase = (day: number | null) => {
        if (!day) return { phase: 'Unknown', color: 'bg-gray-400', tip: 'Start tracking to see insights!' };

        if (day <= 5) return {
            phase: 'Menstrual Phase',
            color: 'bg-[#FF6B6B]',
            tip: 'Rest is important. Stay hydrated and use heat for cramps.'
        };
        if (day <= 14) return {
            phase: 'Follicular Phase',
            color: 'bg-[#4ECDC4]',
            tip: 'Energy levels rising! Great time for new activities.'
        };
        if (day <= 16) return {
            phase: 'Ovulation',
            color: 'bg-[#FFE66D]',
            tip: 'Peak energy and confidence. You might feel more social!'
        };
        return {
            phase: 'Luteal Phase',
            color: 'bg-[#ce8fd3]',
            tip: 'Be gentle with yourself. Focus on self-care and rest.'
        };
    };

    const cycleDay = getCurrentCycleDay();
    const phaseInfo = getCyclePhase(cycleDay);

    // Generate calendar days for current month
    const generateCalendarDays = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth();
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const days = [];

        // Add empty cells for days before month starts
        for (let i = 0; i < firstDay.getDay(); i++) {
            days.push(null);
        }

        // Add all days of the month
        for (let i = 1; i <= lastDay.getDate(); i++) {
            days.push(new Date(year, month, i));
        }

        return days;
    };

    const calendarDays = generateCalendarDays();
    const monthName = new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

    const getDayData = (date: Date | null): DayData | undefined => {
        if (!date) return undefined;
        const dateStr = date.toISOString().split('T')[0];
        return trackedDays.find(d => d.date === dateStr);
    };

    const togglePeriod = (date: Date) => {
        const dateStr = date.toISOString().split('T')[0];
        const existing = trackedDays.find(d => d.date === dateStr);

        if (existing) {
            setTrackedDays(trackedDays.filter(d => d.date !== dateStr));
        } else {
            setTrackedDays([...trackedDays, { date: dateStr, isPeriod: true, symptoms: [], flow: 'medium' }]);
        }
    };

    return (
        <div className="min-h-screen bg-[#FFF9F0]">
            {/* Hero Section */}
            <section className="py-16 px-4 bg-gradient-to-br from-[#ce8fd3]/20 to-[#FF6B6B]/20">
                <div className="container mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <CalendarIcon className="w-16 h-16 text-[#ce8fd3] mx-auto mb-4" />
                        <h1 className="text-5xl font-bold text-[#2C1A4D] mb-4">
                            Period <span className="text-[#ce8fd3]">Tracker</span>
                        </h1>
                        <p className="text-xl text-[#6B4C7A] mb-4">Track your cycle with complete privacy</p>
                        <div className="flex items-center justify-center gap-2 text-[#6B4C7A]">
                            <Lock className="w-4 h-4" />
                            <span className="text-sm">No account required • Your data stays on your device</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Cycle Overview */}
            <section className="py-8 px-4 bg-white border-b border-[#E8D4EA]">
                <div className="container mx-auto max-w-4xl">
                    <div className="grid md:grid-cols-3 gap-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-gradient-to-br from-[#ce8fd3] to-[#B794F6] rounded-2xl p-6 text-white text-center"
                        >
                            <div className="text-4xl font-bold mb-2">{cycleDay || '—'}</div>
                            <div className="text-sm opacity-90">Day of Cycle</div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className={`${phaseInfo.color} rounded-2xl p-6 text-white text-center`}
                        >
                            <div className="text-lg font-bold mb-2">{phaseInfo.phase}</div>
                            <div className="text-sm opacity-90">Current Phase</div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-gradient-to-br from-[#4ECDC4] to-[#7EDDD6] rounded-2xl p-6 text-white text-center"
                        >
                            <div className="text-4xl font-bold mb-2">28</div>
                            <div className="text-sm opacity-90">Average Cycle</div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Daily Tip */}
            <section className="py-6 px-4 bg-[#FFE66D]/20">
                <div className="container mx-auto max-w-4xl">
                    <div className="flex items-start gap-4">
                        <div className="text-3xl">💡</div>
                        <div>
                            <h3 className="font-bold text-[#2C1A4D] mb-1">Today's Tip</h3>
                            <p className="text-[#6B4C7A]">{phaseInfo.tip}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Calendar */}
            <section className="py-12 px-4">
                <div className="container mx-auto max-w-4xl">
                    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-[#2C1A4D] mb-6 text-center">{monthName}</h2>

                        {/* Weekday Headers */}
                        <div className="grid grid-cols-7 gap-2 mb-4">
                            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                                <div key={day} className="text-center text-sm font-semibold text-[#6B4C7A] py-2">
                                    {day}
                                </div>
                            ))}
                        </div>

                        {/* Calendar Days */}
                        <div className="grid grid-cols-7 gap-2">
                            {calendarDays.map((date, index) => {
                                if (!date) {
                                    return <div key={`empty-${index}`} className="aspect-square" />;
                                }

                                const dayData = getDayData(date);
                                const isToday = date.toDateString() === new Date().toDateString();
                                const isPeriod = dayData?.isPeriod;

                                return (
                                    <motion.button
                                        key={date.toISOString()}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => togglePeriod(date)}
                                        className={`aspect-square rounded-xl flex flex-col items-center justify-center text-sm font-semibold transition-colors ${isPeriod
                                                ? 'bg-[#FF6B6B] text-white'
                                                : isToday
                                                    ? 'bg-[#ce8fd3] text-white'
                                                    : 'bg-[#F5E6F7] text-[#2C1A4D] hover:bg-[#E8D4EA]'
                                            }`}
                                    >
                                        <span>{date.getDate()}</span>
                                        {isPeriod && (
                                            <Droplet className="w-3 h-3 mt-1" />
                                        )}
                                    </motion.button>
                                );
                            })}
                        </div>

                        {/* Legend */}
                        <div className="flex gap-6 justify-center mt-6 text-sm">
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 rounded bg-[#FF6B6B]" />
                                <span className="text-[#6B4C7A]">Period Day</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 rounded bg-[#ce8fd3]" />
                                <span className="text-[#6B4C7A]">Today</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Symptom Logging */}
            <section className="py-12 px-4 bg-white">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="text-3xl font-bold text-center text-[#2C1A4D] mb-8">Log Your Symptoms</h2>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                        {symptoms.map((symptom) => (
                            <motion.button
                                key={symptom.id}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-[#F5E6F7] hover:bg-[#ce8fd3] hover:text-white rounded-xl p-4 text-center transition-colors"
                            >
                                <div className="text-3xl mb-2">{symptom.icon}</div>
                                <div className="font-semibold text-sm">{symptom.label}</div>
                            </motion.button>
                        ))}
                    </div>

                    {/* Mood Tracker */}
                    <div className="bg-[#FFF9F0] rounded-2xl p-6">
                        <h3 className="text-xl font-bold text-[#2C1A4D] mb-4 text-center">How are you feeling today?</h3>
                        <div className="flex gap-4 justify-center">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="w-16 h-16 rounded-full bg-[#4ECDC4] flex items-center justify-center text-white hover:bg-[#3DBDB5] transition-colors"
                            >
                                <Smile className="w-8 h-8" />
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="w-16 h-16 rounded-full bg-[#FFE66D] flex items-center justify-center text-white hover:bg-[#FFD700] transition-colors"
                            >
                                <Meh className="w-8 h-8" />
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="w-16 h-16 rounded-full bg-[#FF6B6B] flex items-center justify-center text-white hover:bg-[#FF5252] transition-colors"
                            >
                                <Frown className="w-8 h-8" />
                            </motion.button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Privacy Notice */}
            <section className="py-12 px-4 bg-gradient-to-br from-[#ce8fd3] to-[#B794F6] text-white">
                <div className="container mx-auto max-w-3xl text-center">
                    <Lock className="w-12 h-12 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold mb-4">Your Privacy Matters</h2>
                    <p className="text-lg opacity-90 mb-6">
                        All your tracking data is stored locally on your device. We never collect or share your personal health information.
                        You can use this tracker without creating an account.
                    </p>
                    <Button className="bg-white text-[#ce8fd3] hover:bg-gray-100">
                        Learn More About Privacy
                    </Button>
                </div>
            </section>
        </div>
    );
};

export default PeriodTrackerPage;
