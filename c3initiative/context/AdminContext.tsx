'use client'
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, Module, AdminStats } from '@/types/admin';

interface AdminContextType {
  isAuthenticated: boolean;
  users: User[];
  modules: Module[];
  stats: AdminStats;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  addUser: (user: Omit<User, 'id'>) => void;
  updateUser: (id: string, user: Partial<User>) => void;
  deleteUser: (id: string) => void;
  addModule: (module: Omit<Module, 'id'>) => void;
  updateModule: (id: string, module: Partial<Module>) => void;
  deleteModule: (id: string) => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

// Mock data
const mockUsers: User[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    email: 'sarah@example.com',
    joinDate: '2024-01-15',
    progress: 75,
    modulesCompleted: 3,
    totalModules: 4,
    lastActive: '2024-01-20',
    status: 'active'
  },
  {
    id: '2',
    name: 'Michael Chen',
    email: 'michael@example.com',
    joinDate: '2024-01-10',
    progress: 45,
    modulesCompleted: 2,
    totalModules: 4,
    lastActive: '2024-01-19',
    status: 'active'
  },
  {
    id: '3',
    name: 'Emily Davis',
    email: 'emily@example.com',
    joinDate: '2024-01-05',
    progress: 90,
    modulesCompleted: 4,
    totalModules: 4,
    lastActive: '2024-01-18',
    status: 'inactive'
  }
];

const mockModules: Module[] = [
  {
    id: '1',
    module: 'module-1',
    completed: false,
    unlocked: true,
    icon: 'Users',
    title: 'Why Focus on Cervical Cancer',
    description: 'Learn the global, regional, and local impact of cervical cancer and why it matters.',
    order: 1,
    introVideo: 'https://cdn.example.com/module-1-intro.mp4',
    sections: [
      {
        id: 'section-1-1',
        title: 'Reasons to Focus on Cervical Cancer',
        description: 'Why cervical cancer is a global health priority.',
        order: 1,
        learningCards: [
          {
            id: 'card-1',
            title: 'Global Statistics',
            content: 'Every year, around 266,000 women die from cervical cancer worldwide. Most of these deaths can be prevented.',
            infographic: '/images/placeholder.svg'
          },
          {
            id: 'card-2',
            title: 'HPV and Disease Timeline',
            content: 'Almost all cervical cancer is caused by long-lasting infection with HPV. The disease usually develops over 10–20 years.',
            infographic: '/images/placeholder.svg'
          }
        ],
        quizzes: []
      }
    ],
    postTest: [
      {
        id: 'posttest-1',
        question: 'What virus is the main cause of cervical cancer?',
        options: ['HIV', 'HBV', 'HPV', 'EBV'],
        correct: 'HPV'
      }
    ]
  }
];

export function AdminProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [users, setUsers] = useState<User[]>(mockUsers);
  const [modules, setModules] = useState<Module[]>(mockModules);

  const stats: AdminStats = {
    totalUsers: users.length,
    activeUsers: users.filter(u => u.status === 'active').length,
    totalModules: modules.length,
    avgProgress: users.reduce((acc, user) => acc + user.progress, 0) / users.length
  };

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simple mock authentication
    if (email === 'admin@example.com' && password === 'admin123') {
      setIsAuthenticated(true);
      localStorage.setItem('adminAuth', 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('adminAuth');
  };

  const addUser = (user: Omit<User, 'id'>) => {
    const newUser = { ...user, id: Date.now().toString() };
    setUsers(prev => [...prev, newUser]);
  };

  const updateUser = (id: string, updatedUser: Partial<User>) => {
    setUsers(prev => prev.map(user => user.id === id ? { ...user, ...updatedUser } : user));
  };

  const deleteUser = (id: string) => {
    setUsers(prev => prev.filter(user => user.id !== id));
  };

  const addModule = (module: Omit<Module, 'id'>) => {
    const newModule = { ...module, id: Date.now().toString() };
    setModules(prev => [...prev, newModule]);
  };

  const updateModule = (id: string, updatedModule: Partial<Module>) => {
    setModules(prev => prev.map(module => module.id === id ? { ...module, ...updatedModule } : module));
  };

  const deleteModule = (id: string) => {
    setModules(prev => prev.filter(module => module.id !== id));
  };

  useEffect(() => {
    const authStatus = localStorage.getItem('adminAuth');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <AdminContext.Provider value={{
      isAuthenticated,
      users,
      modules,
      stats,
      login,
      logout,
      addUser,
      updateUser,
      deleteUser,
      addModule,
      updateModule,
      deleteModule
    }}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
}
