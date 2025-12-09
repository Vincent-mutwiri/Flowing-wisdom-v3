import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import User from '../models/User';
import dotenv from 'dotenv';

dotenv.config();

const seedUsers = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || '');
    console.log('Connected to MongoDB');

    await User.deleteMany({ email: { $in: ['admin@demo.com', 'user@demo.com'] } });

    const hashedPassword = await bcrypt.hash('demo123', 10);

    await User.insertMany([
      { name: 'Admin User', email: 'admin@demo.com', password: hashedPassword, role: 'admin' },
      { name: 'Demo User', email: 'user@demo.com', password: hashedPassword, role: 'user' },
    ]);

    console.log('✅ Demo users seeded!');
    console.log('Admin: admin@demo.com / demo123');
    console.log('User: user@demo.com / demo123');
    process.exit(0);
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
};

seedUsers();
