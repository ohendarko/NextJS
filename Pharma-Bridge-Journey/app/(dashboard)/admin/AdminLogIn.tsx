'use client'
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from 'next/navigation';
import { toast } from "@/hooks/use-toast";
import { signIn, useSession } from 'next-auth/react';


const AdminLogin = ({ userEmail }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useRouter();
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [checkedAuth, setCheckedAuth] = useState(false);
  const {data: session, status } = useSession();

  //remove these 2 use effects for simpler dev activities
  useEffect(() => {
    const verifyAdmin = async () => {
      // if (status === 'loading') return;

      if (status === 'unauthenticated') {
        navigate.replace('/not-found');
        return;
      }

      try {
        const res = await fetch(`/api/user?email=${userEmail}`);
        const user = await res.json();

        if (user?.admin) {
          setIsAdmin(true);
          setCheckedAuth(true);
        } else {
          navigate.replace('/not-found');
        }
      } catch (err) {
        console.error(err);
        navigate.replace('/not-found');
      } finally {
        setCheckedAuth(true);
      }
    };

    verifyAdmin();
    console.log('useEffect ran')
    
  }, [status]);
  // console.log('isAdmin',isAdmin)

  //end of removal

  const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsLoading(true);

      //check if email from log in form is an admin

      const adminRes = await fetch("/api/admin/check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await adminRes.json();
      // console.log('loginAdmin',data.isAdmin)

      if (!data.isAdmin) {
        toast({
          title: "Access Denied",
          description: "This account does not have admin privileges.",
          variant: "destructive",
        });
        setIsLoading(false);
        return;
      }
      
  
      //then run sign in
      const res = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });
  
      if (res?.error) {
        toast({
          title: 'Login failed',
          description: "Please check your credentials and try again.",
          variant: 'destructive',
        });
      } else {
        if(status === 'unauthenticated') {
          navigate.push("/login");
        }
        toast({
          title: 'Admin Login successful',
          description: 'Welcome back to PharmaBridge Consulting Administration',
          variant: 'success',
        });
        navigate.push("/admin/dashboard");
      }
  
      setIsLoading(false);
    };

  //comment out later
  // const handleLogin = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsLoading(true);


  //   // Mock authentication - replace with real auth
  //   if (email === 'admin@pharmabridge.com' && password === 'admin123') {
  //     localStorage.setItem('adminSession', JSON.stringify({
  //       id: 'admin_001',
  //       name: 'Benjamin Admin',
  //       email: 'admin@pharmabridge.com',
  //       role: 'admin',
  //       permissions: ['all']
  //     }));
      
  //     toast({
  //       title: "Login Successful",
  //       description: "Welcome to the admin dashboard!",
  //     });
      
  //     navigate.push('/admin/dashboard');
  //   } else {
  //     toast({
  //       title: "Login Failed",
  //       description: "Invalid email or password.",
  //       variant: "destructive",
  //     });
  //   }
    
  //   setIsLoading(false);
  // };

  //end of intruction
  if (!checkedAuth) return null;

  return (
    
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      
      <div>
        {(status === "unauthenticated" || !session || status==='loading' || !isAdmin) ? 
        (<div className="flex justify-center items-center h-screen text-4xl">
        
        </div>) : ( 
      
      <div className="max-w-md w-full space-y-8 p-8">
        <div className="text-center">
          <span className="text-4xl">📋</span>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Pharmabridge Admin
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Sign in to access the admin dashboard
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Admin Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@pharmabridge.com"
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  className="mt-1"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700"
                disabled={isLoading}
              >
                {isLoading ? 'Signing in...' : 'Sign In'}
              </Button>
            </form>

            <div className="mt-4 p-3 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">Demo Credentials:</p>
              <p className="text-xs text-gray-500">Email: admin@pharmabridge.com</p>
              <p className="text-xs text-gray-500">Password: admin123</p>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <Button 
            variant="link" 
            onClick={() => navigate.push('/')}
            className="text-blue-600"
          >
            ← Back to Client Site
          </Button>
        </div>
      </div>
        )}</div>
    </div>
  );
};

export default AdminLogin;
