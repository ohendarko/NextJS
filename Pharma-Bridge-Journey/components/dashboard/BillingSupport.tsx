'use client'
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { 
  Calendar, 
  Download, 
  MessageCircle,
  Settings
} from 'lucide-react';
import { toast } from "@/hooks/use-toast";
import Spinner from '../Spinner';

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
  userEmail: string;
  date: string;
  dueDate: string;
  amount: number;
  paid: boolean;
  status: "draft" | "pending" | "paid" | "overdue" | "cancelled";
  cloudinaryUrl?: string;
  items: {
    name: string;
    price: number;
  }[];
}

const BillingSupport: React.FC<BillingSupportProps> = ({ userProfile }) => {
  const [activeTab, setActiveTab] = useState("transactions");
  const [supportMessage, setSupportMessage] = useState("");
  
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBillingData = async () => {
      try {
        const email = userProfile?.email;
        if (!email) return;

        const [txnRes, invRes] = await Promise.all([
          fetch(`/api/transactions`),
          fetch(`/api/invoices`)
        ]);

        const txnData = await txnRes.json();
        const invData = await invRes.json();

        if (!txnRes.ok) throw new Error(txnData.error || "Failed to fetch transactions");
        if (!invRes.ok) throw new Error(invData.error || "Failed to fetch invoices");

        setTransactions(txnData);
        setInvoices(invData);
      } catch (err) {
        console.error("Billing fetch error:", err);
        toast({
          title: "Error",
          description: "Could not load billing data.",
          variant: "destructive"
        });
      } finally {
        setLoading(false);
      }
    };

    fetchBillingData();
  }, [userProfile]);

  
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
    const invoice = invoices.find((inv) => inv.id === invoiceId);
    if (invoice?.cloudinaryUrl) {
      window.open(invoice.cloudinaryUrl, "_blank");
    } else {
      toast({
        title: "Download Unavailable",
        description: "Invoice file not found.",
        variant: "destructive"
      });
    }
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
    <div className="w-full">
      
      <Tabs defaultValue="transactions" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-10 w-full grid grid-cols-2 lg:grid-cols-4">
          <TabsTrigger value="transactions" className="text-xs sm:text-sm">Transactions</TabsTrigger>
          <TabsTrigger value="invoices" className="text-xs sm:text-sm">Invoices</TabsTrigger>
          <TabsTrigger value="support" className="text-xs sm:text-sm">Support</TabsTrigger>
        </TabsList>
        
        <TabsContent value="transactions">
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <h3 className="font-semibold text-lg">Transaction History</h3>
              <Input placeholder={transactions.length == 0 ?"Nothing to Search" : "Search transactions..."} className="w-full sm:max-w-xs" />
            </div>
            {/* Conditional rendering of content */}
            { loading ? <Spinner loading={loading} /> : transactions.length == 0 ? 
              <div>
                <p className='pt-2 text-sm text-gray-600'>You have not perfromed any transactions</p>
              </div>
              : 
              <div>
              {/* Mobile view - Card layout */}
              <div className="block md:hidden space-y-4">
                {transactions.map(transaction => (
                  <div key={transaction.id} className="border rounded-lg p-4 space-y-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-medium text-sm">{transaction.description}</p>
                        <p className="text-xs text-gray-500">{transaction.date}</p>
                      </div>
                      {getStatusBadge(transaction.status)}
                    </div>
                    <div className="text-right">
                      <span className="text-lg font-semibold">${transaction.amount.toFixed(2)}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Desktop view - Table layout */}
              <div className="hidden md:block border rounded-lg overflow-hidden">
                <div className="overflow-x-auto">
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
                          <td className="px-6 py-4 whitespace-wrap text-sm">
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
              </div>
              
              <div className="flex justify-center">
                <Button variant="outline" className="text-sm">Load More</Button>
              </div>  
            </div>}

          </div>
        </TabsContent>
        
        <TabsContent value="invoices">
          <div className="space-y-6">
            <div className='flex gap-4 justify-between'>
              <h3 className="font-semibold text-lg items-end">Invoices</h3>
              <Input placeholder={transactions.length == 0 ?"Nothing to Search" : "Search invoices..."} className="w-full sm:max-w-xs" />
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {loading ? <Spinner loading={loading} /> : invoices.length == 0 ?
              <div>
                <p className='pt-2 text-sm text-gray-600'>You have no invoices on record</p>
              </div>
               : invoices.map(invoice => (
                <div key={invoice.id} className="border rounded-lg p-4">
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-3">
                    <div className="flex-1">
                      <h4 className="font-medium">Invoice #{invoice.id}</h4>
                      <p className="text-sm text-gray-500">Issued: {invoice.date}</p>
                      <p className="text-sm text-gray-500">Due: {invoice.dueDate}</p>
                    </div>
                    <div className="w-full sm:w-auto">
                      {invoice.paid ? (
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Paid</span>
                      ) : (
                        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">Unpaid</span>
                      )}
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <p className="text-sm font-medium">Items:</p>
                    <ul className="text-sm mt-2 space-y-1">
                      {invoice.items.map((item, index) => (
                        <li key={index} className="flex justify-between">
                          <span className="truncate pr-2">{item.name}</span>
                          <span className="whitespace-nowrap">${item.price.toFixed(2)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                    <p className="font-medium">Total: ${invoice.amount.toFixed(2)}</p>
                    <Button size="sm" variant="outline" onClick={() => handleDownloadInvoice(invoice.id)} className="w-full sm:w-auto">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="support">
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-1 text-lg">Billing Support</h3>
              <p className="text-sm text-gray-500">Have questions about your billing or need help? Send us a message.</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
                
                <Button onClick={handleSendSupportMessage} disabled={!supportMessage.trim()} className="w-full sm:w-auto">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <Settings className="h-5 w-5 text-pharma-blue mt-0.5 flex-shrink-0" />
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
                  <div className="text-sm mt-2 space-y-1">
                    <p>
                      <span className="font-medium">Email:</span> billing@pharmabridge.com
                    </p>
                    <p>
                      <span className="font-medium">Phone:</span> +1 (555) 123-4567
                    </p>
                    <p>
                      <span className="font-medium">Hours:</span> Monday-Friday, 9am-5pm ET
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BillingSupport;
