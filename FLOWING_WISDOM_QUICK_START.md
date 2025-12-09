# Flowing Wisdom - Quick Start Guide

## 🚀 Running the Application

### 1. Install Dependencies
```bash
npm install
# or
pnpm install
```

### 2. Start Development Server
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### 3. Build for Production
```bash
npm run build
```

## 📍 Page Routes

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Landing page with hero, impact stats, pillars |
| About Us | `/about` | Mission, vision, leadership spotlight |
| Events | `/events` | Calendar with workshops, webinars, campaigns |
| Our Impact | `/our-impact` | 5 pillars with tabs and achievements |
| Learning Hub | `/learning-hub` | Courses, videos, articles, badges |
| Ask Iris | `/ask-iris` | AI chat assistant (existing AI integration) |
| Flow Arcade | `/flow-arcade` | Games, badges, leaderboard |
| Period Tracker | `/period-tracker` | Cycle tracking with privacy |
| Get Involved | `/get-involved` | Donations, volunteer, ambassador |

## 🎨 Color Reference

```css
/* Use these Tailwind classes */
bg-[#ce8fd3]  /* Primary - Lavender Pink */
bg-[#FF6B6B]  /* Secondary - Coral Burst */
bg-[#4ECDC4]  /* Accent 1 - Electric Teal */
bg-[#FFE66D]  /* Accent 2 - Sunny Gold */
text-[#2C1A4D] /* Text - Deep Purple */
bg-[#FFF9F0]  /* Background - Soft Cream */
```

## 🔑 Key Features to Test

### 1. Quick Exit Button
- Located in top navigation
- Click to instantly redirect to Google
- Safety feature for users

### 2. Period Tracker
- Navigate to `/period-tracker`
- Click calendar days to mark period
- View cycle phase and daily tips
- All data stored locally (no account needed)

### 3. Flow Arcade
- Navigate to `/flow-arcade`
- Play Fact or Myth game
- Swipe left for Myth, right for Fact
- Earn points and see confetti animations

### 4. Donation Flow
- Navigate to `/get-involved`
- Toggle between one-time and monthly
- Select amount or enter custom
- See impact message update

### 5. Events Calendar
- Navigate to `/events`
- Toggle between Upcoming and Past
- Filter by event type
- See countdown timers

## 📱 Mobile Testing

The site is fully responsive. Test on:
- Mobile (< 768px)
- Tablet (768px - 1024px)
- Desktop (> 1024px)

## 🎯 Navigation Structure

```
Flowing Wisdom Layout (with Quick Exit)
├── Home
├── About Us
├── Events
├── Our Impact
├── Learning Hub
├── Ask Iris (AI Assistant)
├── Flow Arcade
├── Period Tracker
└── Get Involved
```

## 🔧 Customization

### Adding New Events
Edit `src/pages/FlowingWisdom/EventsPage.tsx`:
```typescript
const events: Event[] = [
  {
    id: 'new-event',
    title: 'Your Event Title',
    type: 'workshop', // or 'webinar', 'campaign'
    date: '2025-02-15',
    time: '2:00 PM - 4:00 PM',
    location: 'Your Location',
    attendees: 50,
    description: 'Event description',
    status: 'upcoming'
  },
  // ... existing events
];
```

### Updating Impact Stats
Edit `src/pages/FlowingWisdom/HomePage.tsx`:
```typescript
animateCount(5000, 'lives');      // Lives Touched
animateCount(150, 'workshops');   // Workshops
animateCount(200, 'ambassadors'); // Ambassadors
```

### Adding New Badges
Edit `src/pages/FlowingWisdom/FlowArcadePage.tsx`:
```typescript
const badges: Badge[] = [
  {
    id: 'new-badge',
    name: 'Badge Name',
    description: 'How to earn it',
    icon: '🎯',
    unlocked: false,
    progress: 0
  },
  // ... existing badges
];
```

## 🐛 Troubleshooting

### Issue: Pages not loading
**Solution**: Check that all imports in `src/App.tsx` are correct

### Issue: Styles not applying
**Solution**: Ensure Tailwind is processing the files. Check `tailwind.config.js`

### Issue: Navigation not working
**Solution**: Verify React Router is properly configured in `src/main.tsx`

### Issue: Quick Exit not working
**Solution**: Check browser console for errors. Ensure `window.location.replace()` is supported

## 📦 Project Structure

```
src/
├── pages/
│   └── FlowingWisdom/
│       ├── HomePage.tsx
│       ├── AboutPage.tsx
│       ├── EventsPage.tsx
│       ├── OurImpactPage.tsx
│       ├── LearningHubPage.tsx
│       ├── FlowArcadePage.tsx
│       ├── PeriodTrackerPage.tsx
│       ├── GetInvolvedPage.tsx
│       └── index.ts
├── components/
│   └── FlowingWisdom/
│       ├── Navigation.tsx
│       └── FlowingWisdomLayout.tsx
├── App.tsx (updated with new routes)
└── index.css (updated with new colors)
```

## 🎓 Learning Resources

### Framer Motion (Animations)
- Used throughout for smooth transitions
- Documentation: https://www.framer.com/motion/

### Tailwind CSS (Styling)
- Custom color palette implemented
- Documentation: https://tailwindcss.com/

### React Router (Navigation)
- All routes configured in App.tsx
- Documentation: https://reactrouter.com/

## ✅ Testing Checklist

- [ ] All 9 pages load correctly
- [ ] Navigation works on desktop and mobile
- [ ] Quick Exit button redirects to Google
- [ ] Period Tracker calendar is interactive
- [ ] Flow Arcade game is playable
- [ ] Donation amounts update impact message
- [ ] Events filter by type
- [ ] Our Impact tabs switch correctly
- [ ] Animations play smoothly
- [ ] Footer links work
- [ ] Mobile menu opens/closes
- [ ] All colors match brand palette

## 🚢 Deployment

### Vercel (Recommended)
```bash
npm run build
# Deploy dist folder to Vercel
```

### Netlify
```bash
npm run build
# Deploy dist folder to Netlify
```

### Custom Server
```bash
npm run build
# Serve dist folder with your web server
```

## 📞 Need Help?

- Check the main README: `FLOWING_WISDOM_README.md`
- Review implementation guide: `FLOWING_WISDOM_IMPLEMENTATION.md`
- Contact: info@flowingwisdom.org

---

**Happy Building! 💜**
