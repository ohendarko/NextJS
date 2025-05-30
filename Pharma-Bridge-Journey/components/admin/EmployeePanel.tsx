
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface EmployeePanelProps {
  adminUser: any;
}

const EmployeePanel: React.FC<EmployeePanelProps> = ({ adminUser }) => {
  const mockEmployees = [
    { id: 1, name: 'Dr. Smith', role: 'Mentor', clients: 25, status: 'Active' },
    { id: 2, name: 'Dr. Williams', role: 'Mentor', clients: 18, status: 'Active' },
    { id: 3, name: 'Prof. Davis', role: 'TOEFL Instructor', clients: 32, status: 'Active' },
    { id: 4, name: 'Sarah Admin', role: 'Admin', clients: 0, status: 'Active' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Employee Management</h2>
          <p className="text-gray-600">Manage staff, assignments, and performance</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">+ Add Employee</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {mockEmployees.map((employee) => (
          <Card key={employee.id}>
            <CardHeader>
              <CardTitle className="text-lg">{employee.name}</CardTitle>
              <Badge variant="outline">{employee.role}</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">Assigned Clients: {employee.clients}</p>
              <Badge className={employee.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}>
                {employee.status}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default EmployeePanel;
