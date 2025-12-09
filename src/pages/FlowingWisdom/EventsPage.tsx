import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Clock, Filter } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

type EventType = 'workshop' | 'webinar' | 'campaign' | 'all';

interface Event {
    id: string;
    title: string;
    type: EventType;
    date: string;
    time: string;
    location: string;
    attendees: number;
    description: string;
    status: 'upcoming' | 'past';
    image?: string;
}

const EventsPage = () => {
    const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');
    const [filterType, setFilterType] = useState<EventType>('all');

    const events: Event[] = [
        {
            id: '1',
            title: 'Period Positivity Workshop',
            type: 'workshop',
            date: '2025-01-15',
            time: '2:00 PM - 4:00 PM',
            location: 'Community Center, Nairobi',
            attendees: 45,
            description: 'Interactive workshop breaking myths and building confidence',
            status: 'upcoming'
        },
        {
            id: '2',
            title: 'Menstrual Health Webinar',
            type: 'webinar',
            date: '2025-01-20',
            time: '6:00 PM - 7:30 PM',
            location: 'Online (Zoom)',
            attendees: 120,
            description: 'Expert-led session on menstrual health and hygiene',
            status: 'upcoming'
        },
        {
            id: '3',
            title: 'Menstrual Hygiene Day Campaign',
            type: 'campaign',
            date: '2025-05-28',
            time: 'All Day',
            location: 'Multiple Locations',
            attendees: 500,
            description: 'Global awareness campaign with local events',
            status: 'upcoming'
        },
        {
            id: '4',
            title: 'School Outreach Program',
            type: 'workshop',
            date: '2024-11-10',
            time: '10:00 AM - 12:00 PM',
            location: 'Riverside High School',
            attendees: 80,
            description: 'Educational session for students and teachers',
            status: 'past'
        },
        {
            id: '5',
            title: 'Period Poverty Awareness',
            type: 'campaign',
            date: '2024-10-15',
            time: 'All Day',
            location: 'City Center',
            attendees: 300,
            description: 'Community campaign raising awareness about period poverty',
            status: 'past'
        }
    ];

    const filteredEvents = events.filter(event => {
        const matchesTab = event.status === activeTab;
        const matchesType = filterType === 'all' || event.type === filterType;
        return matchesTab && matchesType;
    });

    const getTypeColor = (type: EventType) => {
        switch (type) {
            case 'workshop': return 'bg-[#ce8fd3]';
            case 'webinar': return 'bg-[#4ECDC4]';
            case 'campaign': return 'bg-[#FF6B6B]';
            default: return 'bg-gray-500';
        }
    };

    const getDaysUntil = (dateString: string) => {
        const eventDate = new Date(dateString);
        const today = new Date();
        const diffTime = eventDate.getTime() - today.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    };

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
                        Events & <span className="text-[#ce8fd3]">Workshops</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-[#6B4C7A]"
                    >
                        Join us in breaking the stigma through community events
                    </motion.p>
                </div>
            </section>

            {/* Tabs and Filters */}
            <section className="py-8 px-4 bg-white border-b border-[#E8D4EA]">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        {/* Tabs */}
                        <div className="flex gap-2 bg-[#F5E6F7] rounded-full p-1">
                            <button
                                onClick={() => setActiveTab('upcoming')}
                                className={`px-6 py-2 rounded-full font-semibold transition-colors ${activeTab === 'upcoming'
                                        ? 'bg-[#ce8fd3] text-white'
                                        : 'text-[#6B4C7A] hover:text-[#2C1A4D]'
                                    }`}
                            >
                                Upcoming
                            </button>
                            <button
                                onClick={() => setActiveTab('past')}
                                className={`px-6 py-2 rounded-full font-semibold transition-colors ${activeTab === 'past'
                                        ? 'bg-[#ce8fd3] text-white'
                                        : 'text-[#6B4C7A] hover:text-[#2C1A4D]'
                                    }`}
                            >
                                Past Events
                            </button>
                        </div>

                        {/* Filters */}
                        <div className="flex items-center gap-2">
                            <Filter className="w-5 h-5 text-[#6B4C7A]" />
                            <select
                                value={filterType}
                                onChange={(e) => setFilterType(e.target.value as EventType)}
                                className="px-4 py-2 rounded-full border border-[#E8D4EA] bg-white text-[#2C1A4D] focus:outline-none focus:ring-2 focus:ring-[#ce8fd3]"
                            >
                                <option value="all">All Events</option>
                                <option value="workshop">Workshops</option>
                                <option value="webinar">Webinars</option>
                                <option value="campaign">Campaigns</option>
                            </select>
                        </div>
                    </div>
                </div>
            </section>

            {/* Events Grid */}
            <section className="py-12 px-4">
                <div className="container mx-auto">
                    {filteredEvents.length === 0 ? (
                        <div className="text-center py-20">
                            <Calendar className="w-16 h-16 text-[#E8D4EA] mx-auto mb-4" />
                            <p className="text-[#6B4C7A] text-lg">No events found</p>
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredEvents.map((event, index) => {
                                const daysUntil = getDaysUntil(event.date);
                                return (
                                    <motion.div
                                        key={event.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                                    >
                                        {/* Event Type Badge */}
                                        <div className={`${getTypeColor(event.type)} px-4 py-2 text-white text-sm font-semibold uppercase`}>
                                            {event.type}
                                        </div>

                                        <div className="p-6">
                                            <h3 className="text-xl font-bold text-[#2C1A4D] mb-3">{event.title}</h3>
                                            <p className="text-[#6B4C7A] mb-4 line-clamp-2">{event.description}</p>

                                            <div className="space-y-2 mb-4">
                                                <div className="flex items-center gap-2 text-[#6B4C7A]">
                                                    <Calendar className="w-4 h-4" />
                                                    <span className="text-sm">{new Date(event.date).toLocaleDateString('en-US', {
                                                        month: 'long',
                                                        day: 'numeric',
                                                        year: 'numeric'
                                                    })}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-[#6B4C7A]">
                                                    <Clock className="w-4 h-4" />
                                                    <span className="text-sm">{event.time}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-[#6B4C7A]">
                                                    <MapPin className="w-4 h-4" />
                                                    <span className="text-sm">{event.location}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-[#6B4C7A]">
                                                    <Users className="w-4 h-4" />
                                                    <span className="text-sm">{event.attendees} attendees</span>
                                                </div>
                                            </div>

                                            {event.status === 'upcoming' && daysUntil > 0 && (
                                                <div className="mb-4 px-3 py-2 bg-[#FFE66D]/20 rounded-lg">
                                                    <p className="text-sm font-semibold text-[#2C1A4D]">
                                                        {daysUntil === 1 ? 'Tomorrow!' : `In ${daysUntil} days`}
                                                    </p>
                                                </div>
                                            )}

                                            <Button
                                                className={`w-full ${event.status === 'upcoming'
                                                        ? 'bg-[#ce8fd3] hover:bg-[#B794F6]'
                                                        : 'bg-gray-400 hover:bg-gray-500'
                                                    } text-white`}
                                                disabled={event.status === 'past'}
                                            >
                                                {event.status === 'upcoming' ? 'Register Now' : 'View Gallery'}
                                            </Button>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 px-4 bg-gradient-to-br from-[#ce8fd3] to-[#B794F6] text-white">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">Want to Host an Event?</h2>
                    <p className="text-xl mb-8 opacity-90">Partner with us to bring menstrual health education to your community</p>
                    <Button className="bg-white text-[#ce8fd3] hover:bg-gray-100">
                        Contact Us
                    </Button>
                </div>
            </section>
        </div>
    );
};

export default EventsPage;
