import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { 
  Calendar, 
  Download, 
  MessageSquare,
  Settings
} from 'lucide-react';
import { toast } from "@/hooks/use-toast";

interface BillingSupportProps {
  userProfile: any;
}

interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  status: "paid" | "pending" | "failed";
}

interface Invoice {
  id: string;
  date: string;
  dueDate: string;
  amount: number;
  paid: boolean;
  items: {
    name: string;
    price: number;
  }[];
}

const BillingSupport: React.FC<BillingSupportProps> = ({ userProfile }) => {
  const [activeTab, setActiveTab] = useState("transactions");
  const [supportMessage, setSupportMessage] = useState("");
  
  // Mock transactions data - in a real app, this would come from your backend
  const transactions: Transaction[] = [
    {
      id: "txn-1",
      date: "May 20, 2025",
      description: "FPGEE Preparation Program - Monthly",
      amount: 199,
      status: "paid"
    },
    {
      id: "txn-2",
      date: "April 20, 2025",
      description: "FPGEE Preparation Program - Monthly",
      amount: 199,
      status: "paid"
    },
    {
      id: "txn-3",
      date: "March 20, 2025",
      description: "Documentation Assistance - One-time",
      amount: 299,
      status: "paid"
    }
  ];
  
  // Mock invoices data - in a real app, this would come from your backend
  const invoices: Invoice[] = [
    {
      id: "inv-1",
      date: "May 20, 2025",
      dueDate: "May 25, 2025",
      amount: 199,
      paid: true,
      items: [
        {
          name: "FPGEE Preparation Program - Monthly",
          price: 199
        }
      ]
    },
    {
      id: "inv-2",
      date: "April 20, 2025",
      dueDate: "April 25, 2025",
      amount: 199,
      paid: true,
      items: [
        {
          name: "FPGEE Preparation Program - Monthly",
          price: 199
        }
      ]
    }
  ];
  
  const handleSendSupportMessage = () => {
    if (!supportMessage.trim()) return;
    
    // In a real app, this would send the message to your backend
    toast({
      title: "Support Message Sent",
      description: "We'll respond to your inquiry as soon as possible.",
    });
    setSupportMessage("");
  };
  
  const handleDownloadInvoice = (invoiceId: string) => {
    // In a real app, this would download the invoice
    toast({
      title: "Invoice Download",
      description: `Invoice ${invoiceId} would be downloaded here.`,
    });
  };
  
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "paid":
        return <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Paid</span>;
      case "pending":
        return <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">Pending</span>;
      case "failed":
        return <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">Failed</span>;
      default:
        return null;
    }
  };

  return (
    <Tabs defaultValue="transactions" value={activeTab} onValueChange={setActiveTab}>
      <TabsList className="mb-6">
        <TabsTrigger value="transactions">Transactions</TabsTrigger>
        <TabsTrigger value="invoices">Invoices</TabsTrigger>
        <TabsTrigger value="payment-methods">Payment Methods</TabsTrigger>
        <TabsTrigger value="support">Support</TabsTrigger>
      </TabsList>
      
      <TabsContent value="transactions">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold">Transaction History</h3>
            <Input placeholder="Search transactions..." className="max-w-xs" />
          </div>
          
          <div className="border rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Description
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {transactions.map(transaction => (
                  <tr key={transaction.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {transaction.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      {transaction.description}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {getStatusBadge(transaction.status)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-medium">
                      ${transaction.amount.toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="flex justify-center">
            <Button variant="outline" className="text-sm">Load More</Button>
          </div>
        </div>
      </TabsContent>
      
      <TabsContent value="invoices">
        <div className="space-y-6">
          <h3 className="font-semibold">Invoices</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {invoices.map(invoice => (
              <div key={invoice.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium">Invoice #{invoice.id}</h4>
                    <p className="text-sm text-gray-500">Issued: {invoice.date}</p>
                    <p className="text-sm text-gray-500">Due: {invoice.dueDate}</p>
                  </div>
                  {invoice.paid ? (
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Paid</span>
                  ) : (
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">Unpaid</span>
                  )}
                </div>
                
                <div className="mt-4">
                  <p className="text-sm font-medium">Items:</p>
                  <ul className="text-sm mt-2">
                    {invoice.items.map((item, index) => (
                      <li key={index} className="flex justify-between">
                        <span>{item.name}</span>
                        <span>${item.price.toFixed(2)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-4 flex justify-between items-center">
                  <p className="font-medium">Total: ${invoice.amount.toFixed(2)}</p>
                  <Button size="sm" variant="outline" onClick={() => handleDownloadInvoice(invoice.id)}>
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </TabsContent>
      
      <TabsContent value="payment-methods">
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold">Payment Methods</h3>
            <Button>
              <Calendar className="h-4 w-4 mr-2" />
              Add Payment Method
            </Button>
          </div>
          
          <div className="border rounded-lg p-6">
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-gray-100 rounded">
                <Calendar className="h-6 w-6 text-gray-700" />
              </div>
              <div>
                <p className="font-medium">Visa ending in 4242</p>
                <p className="text-sm text-gray-500">Expires 12/2026</p>
              </div>
              <div className="ml-auto">
                <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-700">
                  Remove
                </Button>
              </div>
            </div>
          </div>
        </div>
      </TabsContent>
      
      <TabsContent value="support">
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-1">Billing Support</h3>
            <p className="text-sm text-gray-500">Have questions about your billing or need help? Send us a message.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="support-message" className="block text-sm font-medium mb-1">
                  Your Message
                </label>
                <Textarea 
                  id="support-message" 
                  placeholder="Describe your issue or question..."
                  className="resize-none"
                  rows={6}
                  value={supportMessage}
                  onChange={(e) => setSupportMessage(e.target.value)}
                />
              </div>
              
              <Button onClick={handleSendSupportMessage} disabled={!supportMessage.trim()}>
                <MessageSquare className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </div>
            
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-start space-x-3">
                  <Settings className="h-5 w-5 text-pharma-blue mt-0.5" />
                  <div>
                    <h4 className="font-medium">Billing FAQs</h4>
                    <p className="text-sm mt-1">Find answers to common billing questions.</p>
                    <Button variant="link" className="p-0 h-auto text-pharma-blue mt-2">
                      View Billing FAQ
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium">Contact Information</h4>
                <p className="text-sm mt-1">For urgent billing inquiries:</p>
                <p className="text-sm mt-2">
                  <span className="font-medium">Email:</span> billing@pharmabridge.com
                </p>
                <p className="text-sm">
                  <span className="font-medium">Phone:</span> +1 (555) 123-4567
                </p>
                <p className="text-sm">
                  <span className="font-medium">Hours:</span> Monday-Friday, 9am-5pm ET
                </p>
              </div>
            </div>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default BillingSupport;
