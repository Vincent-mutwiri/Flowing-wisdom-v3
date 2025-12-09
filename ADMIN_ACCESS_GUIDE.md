# Admin Access Guide

## How to Access Admin Panel

### For Admin Users

Once you log in with an admin account, you'll see:

#### Desktop Navigation
- **Admin Button**: A gold/yellow button with a shield icon appears in the top navigation
- Located between the main navigation and the Quick Exit button
- Click to access the admin panel at `/admin`

#### Mobile Navigation
- Open the hamburger menu (☰)
- **Admin Panel** button appears at the bottom (gold/yellow background)
- Click to access the admin panel

### Admin Panel Features

The admin panel includes:

1. **Dashboard** (`/admin`)
   - Overview of system statistics
   - Recent activity
   - Quick actions

2. **User Management** (`/admin/users`)
   - View all users
   - Edit user roles
   - Manage permissions

3. **Course Analytics** (`/admin/courses`)
   - Course performance metrics
   - Enrollment statistics
   - Completion rates

4. **AI Usage Dashboard** (`/admin/ai-usage`)
   - AI assistant usage statistics
   - Token consumption
   - Cost tracking

5. **Page Builder** (`/admin/pages`)
   - Create custom pages
   - Edit existing pages
   - Manage content

6. **Course Builder** (`/admin/courses/:id/builder`)
   - Create and edit courses
   - Manage modules and lessons
   - Add interactive content

## User Roles

### Admin Role
- Full access to admin panel
- Can manage users, courses, and content
- Access to analytics and AI usage data

### Regular User
- Access to learning platform
- Can enroll in courses
- Track personal progress
- No admin panel access

## Navigation Behavior

### When Logged Out
- Shows: **Login** button
- Clicking redirects to `/login`

### When Logged In (Regular User)
- Shows: **Dashboard** button
- Clicking redirects to `/dashboard`
- No admin button visible

### When Logged In (Admin User)
- Shows: **Admin** button (gold) + **Dashboard** button
- Admin button redirects to `/admin`
- Dashboard button redirects to `/dashboard`

## Visual Indicators

### Admin Button Styling
```
Desktop: [🛡️ Admin] - Gold border, hover effect
Mobile:  [🛡️ Admin Panel] - Gold background
```

### Color Scheme
- **Admin Button**: Gold (#FFE66D) - Stands out from other navigation
- **Dashboard Button**: Lavender Pink (#ce8fd3) - Matches brand
- **Quick Exit**: Coral Red (#FF6B6B) - Safety feature

## Testing Admin Access

### 1. Create Admin User
```bash
# In your database, set user role to 'admin'
# Or use your user management system
```

### 2. Login
- Navigate to `/login`
- Enter admin credentials
- Submit form

### 3. Verify Admin Access
- Check top navigation for gold "Admin" button
- Click to access admin panel
- Verify all admin routes are accessible

### 4. Test Mobile
- Open hamburger menu
- Verify "Admin Panel" button appears
- Click to access admin features

## Troubleshooting

### Admin Button Not Showing
**Check:**
1. User is logged in
2. User role is set to 'admin' in database
3. AuthContext is properly providing user data
4. Browser console for any errors

### Can't Access Admin Routes
**Check:**
1. AdminRoute component is protecting routes
2. User authentication is valid
3. Token is not expired
4. Admin role is correctly set

### Admin Panel Shows 404
**Check:**
1. Admin routes are properly configured in App.tsx
2. AdminLayout component exists
3. All admin page components are imported

## Security Notes

- Admin routes are protected by AdminRoute component
- Only users with role='admin' can access
- Unauthorized access attempts redirect to home
- Admin actions should be logged for audit trail

## Routes Summary

| Route | Access | Description |
|-------|--------|-------------|
| `/admin` | Admin only | Admin dashboard |
| `/admin/users` | Admin only | User management |
| `/admin/courses` | Admin only | Course analytics |
| `/admin/ai-usage` | Admin only | AI usage stats |
| `/admin/pages` | Admin only | Page builder |
| `/admin/pages/new` | Admin only | Create new page |
| `/admin/pages/:id/edit` | Admin only | Edit page |
| `/admin/courses/:id/builder` | Admin only | Course builder |

---

**Status**: ✅ Admin access implemented
**Security**: ✅ Protected routes
**UI**: ✅ Visual indicators for admin users
