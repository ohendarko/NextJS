
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ResourceLibraryProps {
  adminUser: any;
}

const ResourceLibrary: React.FC<ResourceLibraryProps> = ({ adminUser }) => {
  const mockResources = [
    { id: 1, name: 'FPGEE Study Guide 2024', type: 'PDF', package: 'FPGEE Prep', size: '15.2 MB' },
    { id: 2, name: 'TOEFL Speaking Practice', type: 'Video', package: 'TOEFL Prep', size: '125 MB' },
    { id: 3, name: 'Visa Application Template', type: 'DOC', package: 'Full Licensure', size: '2.1 MB' },
    { id: 4, name: 'Mock Exam Questions', type: 'PDF', package: 'FPGEE Prep', size: '8.5 MB' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Resource Library</h2>
          <p className="text-gray-600">Manage learning materials and documents</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">+ Upload Resource</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockResources.map((resource) => (
          <Card key={resource.id}>
            <CardHeader>
              <CardTitle className="text-lg">{resource.name}</CardTitle>
              <div className="flex space-x-2">
                <Badge variant="outline">{resource.type}</Badge>
                <Badge variant="secondary">{resource.package}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-3">Size: {resource.size}</p>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">Edit</Button>
                <Button variant="outline" size="sm">Download</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ResourceLibrary;
