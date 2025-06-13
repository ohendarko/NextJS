'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import DashboardNavbar from '@/components/dashboard/DashboardNavbar';
import { useCart } from '@/context/CartContext';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface CartItem {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  features: string[];
  category: string;
}

const Cart: React.FC = () => {
  const { cart, addToCart, removeFromCart, updateQuantity, clearCart } = useCart();
  const router = useRouter();
  // const [cart, setCart] = useState<CartItem[]>([]);

  // Mock user data
  const userProfile = {
    name: "Jane Doe",
    email: "jane.doe@example.com",
    profileImage: null,
    activeServices: []
  };

  // Load cart from localStorage
  // useEffect(() => {
  //   const savedCart = localStorage.getItem('pharmabridge-cart');
  //   if (savedCart) {
  //     setCart(JSON.parse(savedCart));
  //   }
  // }, []);

  // Save cart to localStorage whenever cart changes
  // useEffect(() => {
  //   localStorage.setItem('pharmabridge-cart', JSON.stringify(cart));
  // }, [cart]);

  // const updateQuantity = (serviceId: string, quantity: number) => {
  //   if (quantity <= 0) {
  //     removeFromCart(serviceId);
  //     return;
  //   }
  //   setCart(prevCart =>
  //     prevCart.map(item =>
  //       item.id === serviceId ? { ...item, quantity } : item
  //     )
  //   );
  // };

  // const removeFromCart = (serviceId: string) => {
  //   setCart(prevCart => prevCart.filter(item => item.id !== serviceId));
  // };

  // const clearCart = () => {
  //   setCart([]);
  // };

  // Calculate totals
  const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + tax;
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="pt-20 px-4 md:px-6 lg:px-8 mt-20">
          <div className="flex items-center gap-4 mb-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => router.back()}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
          </div>
          <div className="container mx-auto py-8">
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13v6a2 2 0 002 2h6a2 2 0 002-2v-6" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
                <p className="text-gray-600 mb-6">Add some services to your cart to get started.</p>
                <Link href="/dashboard/shopping">
                  <Button className="bg-pharma-blue hover:bg-pharma-navy">
                    Browse Services
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      
      <div className="pt-20 px-4 md:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => router.back()}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
          </div>
        <div className="container mx-auto py-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-pharma-navy">Shopping Cart</h1>
              <p className="text-gray-600 mt-2">{cartItemCount} {cartItemCount === 1 ? 'item' : 'items'} in your cart</p>
            </div>
            <div className="flex gap-4">
              <Link href="/dashboard/shopping">
                <Button variant="outline">
                  Continue Shopping
                </Button>
              </Link>
              <Button 
                variant="outline" 
                onClick={clearCart}
                className="text-red-600 hover:text-red-700 hover:border-red-300"
              >
                Clear Cart
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cart.map(item => (
                <Card key={item.id}>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      {/* Item Info */}
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-pharma-navy">{item.name}</h3>
                        <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                        <div className="mt-2">
                          <span className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                            {item.category}
                          </span>
                        </div>
                        
                        {/* Features Preview */}
                        <div className="mt-3">
                          <p className="text-xs text-gray-500 font-medium">Key Features:</p>
                          <ul className="text-xs text-gray-600 mt-1">
                            {item.features.slice(0, 2).map((feature, index) => (
                              <li key={index} className="flex items-start">
                                <span className="text-pharma-blue mr-1">•</span>
                                {feature}
                              </li>
                            ))}
                            {item.features.length > 2 && (
                              <li className="text-pharma-blue text-xs font-medium">
                                +{item.features.length - 2} more
                              </li>
                            )}
                          </ul>
                        </div>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center border rounded-lg">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="h-8 w-8 p-0"
                          >
                            -
                          </Button>
                          <span className="px-3 py-1 text-sm font-medium">{item.quantity}</span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="h-8 w-8 p-0"
                          >
                            +
                          </Button>
                        </div>
                      </div>

                      {/* Price and Remove */}
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <p className="text-lg font-bold text-pharma-navy">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                          <p className="text-sm text-gray-500">
                            ${item.price} each
                          </p>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700 hover:bg-red-50"
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Subtotal ({cartItemCount} {cartItemCount === 1 ? 'item' : 'items'})</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tax (8%)</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>

                  <Link href="/dashboard/shopping/checkout/payment" className="block">
                    <Button className="w-full bg-pharma-blue hover:bg-pharma-navy text-lg py-3">
                      Proceed to Payment
                    </Button>
                  </Link>

                  <div className="text-xs text-gray-500 space-y-1">
                    <p>• Secure 256-bit SSL encryption</p>
                    <p>• 30-day money-back guarantee</p>
                    <p>• Instant access to digital services</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
