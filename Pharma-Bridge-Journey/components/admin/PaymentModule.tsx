
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface PaymentModuleProps {
  adminUser: any;
}

const PaymentModule: React.FC<PaymentModuleProps> = ({ adminUser }) => {
  const mockPayments = [
    { id: 1, client: 'Sarah Johnson', amount: '$1,200', package: 'FPGEE Prep', status: 'Paid', date: '2024-01-15' },
    { id: 2, client: 'Michael Chen', amount: '$2,500', package: 'Full Licensure', status: 'Paid', date: '2024-01-10' },
    { id: 3, client: 'Priya Patel', amount: '$800', package: 'TOEFL Prep', status: 'Pending', date: '2024-01-20' }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Payment Management</h2>
      
      <Card>
        <CardHeader>
          <CardTitle>Recent Payments</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Client</TableHead>
                <TableHead>Package</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockPayments.map((payment) => (
                <TableRow key={payment.id}>
                  <TableCell>{payment.client}</TableCell>
                  <TableCell>{payment.package}</TableCell>
                  <TableCell className="font-medium">{payment.amount}</TableCell>
                  <TableCell>
                    <Badge className={payment.status === 'Paid' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}>
                      {payment.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{payment.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentModule;
