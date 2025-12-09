# Flowing Wisdom - Site Structure

## 🗺️ Navigation Map

```
┌─────────────────────────────────────────────────────────────┐
│  FLOWING WISDOM NAVIGATION (with Quick Exit Button)         │
└─────────────────────────────────────────────────────────────┘
                            │
        ┌───────────────────┴───────────────────┐
        │                                       │
    ┌───▼────┐                          ┌──────▼──────┐
    │  HOME  │                          │  ABOUT US   │
    └───┬────┘                          └──────┬──────┘
        │                                      │
        │  • Hero Section                      │  • Who We Are
        │  • Impact Counter                    │  • Mission/Vision Cards
        │  • 3 Pillars                         │  • Leadership Spotlight
        │  • Teaser Cards                      │
        │                                      │
    ┌───▼────────┐                      ┌─────▼──────┐
    │   EVENTS   │                      │ OUR IMPACT │
    └───┬────────┘                      └─────┬──────┘
        │                                     │
        │  • Calendar View                    │  • 5 Pillars (Tabs)
        │  • Past/Upcoming Tabs               │  • Statistics
        │  • Event Filters                    │  • Achievements
        │  • Registration                     │  • Testimonials
        │                                     │
    ┌───▼─────────────┐              ┌───────▼────────┐
    │  LEARNING HUB   │              │   ASK IRIS     │
    └───┬─────────────┘              └───────┬────────┘
        │                                    │
        │  • Interactive Courses             │  • AI Chat Interface
        │  • Video Library                   │  • Topic Shortcuts
        │  • Articles                        │  • Q&A Flows
        │  • Badges                          │  • Privacy Controls
        │                                    │
    ┌───▼──────────────┐            ┌───────▼─────────┐
    │  FLOW ARCADE     │            │ PERIOD TRACKER  │
    └───┬──────────────┘            └───────┬─────────┘
        │                                   │
        │  • Fact or Myth Game              │  • Visual Calendar
        │  • Badge System                   │  • Cycle Phases
        │  • Leaderboard                    │  • Symptom Logging
        │  • Score Tracking                 │  • Daily Tips
        │                                   │
        └───────────────┬───────────────────┘
                        │
                ┌───────▼──────────┐
                │  GET INVOLVED    │
                └───────┬──────────┘
                        │
                        │  • Donation Section
                        │  • Sponsor a Kit
                        │  • Volunteer Form
                        │  • Ambassador Program
                        │
                        ▼
                   [FOOTER]
```

## 📄 Page Details

### Phase 1: Core Launch (MVP)

#### 🏠 Home (`/`)
- **Hero**: Bold headline with animated background
- **Stats**: Counting animations (5K+ lives, 150+ workshops, 200+ ambassadors)
- **Pillars**: Educate, Equip, Empower with icons
- **Teasers**: Quick links to Learning Hub, Period Tracker, Flow Arcade

#### ℹ️ About Us (`/about`)
- **Intro**: Warm, welcoming copy about the organization
- **Cards**: Interactive flip cards for Mission, Vision, Values
- **Leadership**: Njeri Kamau profile with social links

#### 📅 Events (`/events`)
- **Calendar**: Interactive event calendar
- **Tabs**: Toggle between Upcoming and Past events
- **Filters**: Workshop, Webinar, Campaign
- **Cards**: Event details with countdown timers

#### 💪 Our Impact (`/our-impact`)
- **Tabs**: 5 pillars (Literacy, Solutions, Ambassadors, Policy, Silence)
- **Stats**: Animated counting for each pillar
- **Content**: Achievements, testimonials, galleries per pillar

### Phase 2: Engagement Layer

#### 🎓 Learning Hub (`/learning-hub`)
- **Courses**: Interactive courses with progress bars
- **Videos**: Video library with thumbnails
- **Articles**: Featured articles with read times
- **Badges**: Achievement display

#### 💬 Ask Iris (`/ask-iris`)
- **Chat**: AI-powered chat interface
- **Topics**: Quick access shortcuts
- **Privacy**: Privacy-first design

#### 🎮 Flow Arcade (`/flow-arcade`)
- **Game**: Fact or Myth swipe cards
- **Badges**: Unlockable achievements with progress
- **Leaderboard**: Rankings with avatars
- **Animations**: Confetti on wins

### Phase 3: Deep Engagement

#### 📆 Period Tracker (`/period-tracker`)
- **Calendar**: Visual period tracking
- **Phases**: Cycle phase detection with tips
- **Symptoms**: Emoji-based symptom logging
- **Privacy**: Local storage only, no account required

#### 🤝 Get Involved (`/get-involved`)
- **Donate**: One-time/monthly with impact visualization
- **Kits**: Sponsor menstrual product kits
- **Volunteer**: Application form
- **Ambassador**: Youth leadership program

## 🎨 Color Usage by Page

| Page | Primary Color | Accent Colors |
|------|--------------|---------------|
| Home | Lavender Pink | All colors |
| About | Lavender Pink | Teal, Coral |
| Events | Coral | Teal, Lavender |
| Impact | All colors | Pillar-specific |
| Learning | Lavender Pink | Teal, Gold |
| Ask Iris | Teal | Lavender |
| Arcade | Gold | All colors |
| Tracker | Coral | Lavender, Teal |
| Involved | Lavender Pink | Teal, Coral |

## 🔐 Special Features

### Quick Exit Button
- **Location**: Top navigation bar
- **Function**: Instant redirect to Google
- **Purpose**: Safety for users in unsafe situations

### Privacy Features
- **Period Tracker**: No account required
- **Local Storage**: Data stays on device
- **Anonymous**: Optional anonymous usernames in games

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (hamburger menu)
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px (full navigation)

## 🎯 User Journeys

### New Visitor
1. Land on Home → See impact stats
2. Click "Start Learning" → Learning Hub
3. Browse courses → Sign up

### Returning User
1. Direct to Period Tracker
2. Log symptoms
3. Check Flow Arcade for new games

### Supporter
1. Navigate to Get Involved
2. Choose donation amount
3. See impact message
4. Complete donation

---

**All pages are interconnected with clear navigation and CTAs**
