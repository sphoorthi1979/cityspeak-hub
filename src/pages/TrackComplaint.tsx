import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Search, Clock, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react';

// Mock complaint data
const mockComplaint = {
  id: 'MCP12345ABCD',
  category: 'Water Supply',
  description: 'No water supply in our area since yesterday morning. Multiple houses affected.',
  location: 'Sector 15, Block A, Street 23',
  submittedDate: '2024-01-10',
  status: 'In Progress',
  assignedDepartment: 'Water Supply Department',
  priority: 'High',
  timeline: [
    {
      status: 'Submitted',
      date: '2024-01-10 09:30 AM',
      description: 'Complaint submitted by citizen',
      completed: true
    },
    {
      status: 'Acknowledged',
      date: '2024-01-10 10:15 AM',
      description: 'Complaint acknowledged and assigned case number',
      completed: true
    },
    {
      status: 'In Progress',
      date: '2024-01-10 02:30 PM',
      description: 'Forwarded to Water Supply Department for investigation',
      completed: true
    },
    {
      status: 'Field Inspection',
      date: '2024-01-11 11:00 AM',
      description: 'Technical team dispatched for field inspection',
      completed: false
    },
    {
      status: 'Resolution',
      date: 'Pending',
      description: 'Issue resolution and completion confirmation',
      completed: false
    }
  ]
};

export default function TrackComplaint() {
  const [complaintId, setComplaintId] = useState('');
  const [searchResult, setSearchResult] = useState<typeof mockComplaint | null>(null);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
    
    // Simulate API call
    setTimeout(() => {
      if (complaintId.trim()) {
        setSearchResult(mockComplaint);
      } else {
        setSearchResult(null);
      }
      setIsSearching(false);
    }, 1000);
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'submitted':
        return 'bg-blue-100 text-blue-800';
      case 'acknowledged':
        return 'bg-yellow-100 text-yellow-800';
      case 'in progress':
        return 'bg-orange-100 text-orange-800';
      case 'resolved':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority.toLowerCase()) {
      case 'low':
        return 'bg-green-100 text-green-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'high':
        return 'bg-orange-100 text-orange-800';
      case 'emergency':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-government-blue mb-4">
            Track Your Complaint
          </h1>
          <p className="text-lg text-government-gray">
            Enter your complaint ID to check the current status and progress
          </p>
        </div>

        {/* Search Form */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Search Complaint</CardTitle>
            <CardDescription>
              Enter the complaint ID you received when submitting your complaint
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSearch} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="complaintId">Complaint ID</Label>
                <div className="flex gap-2">
                  <Input
                    id="complaintId"
                    placeholder="e.g., MCP12345ABCD"
                    value={complaintId}
                    onChange={(e) => setComplaintId(e.target.value)}
                    className="flex-1"
                  />
                  <Button 
                    type="submit" 
                    variant="government"
                    disabled={isSearching}
                  >
                    {isSearching ? (
                      <>
                        <Clock className="h-4 w-4 mr-2 animate-spin" />
                        Searching...
                      </>
                    ) : (
                      <>
                        <Search className="h-4 w-4 mr-2" />
                        Search
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Search Results */}
        {searchResult && (
          <div className="space-y-6">
            {/* Complaint Overview */}
            <Card>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl">
                      Complaint #{searchResult.id}
                    </CardTitle>
                    <CardDescription className="text-base">
                      Submitted on {new Date(searchResult.submittedDate).toLocaleDateString()}
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Badge className={getStatusColor(searchResult.status)}>
                      {searchResult.status}
                    </Badge>
                    <Badge className={getPriorityColor(searchResult.priority)}>
                      {searchResult.priority} Priority
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-government-blue mb-2">Category</h4>
                    <p className="text-government-gray">{searchResult.category}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-government-blue mb-2">Assigned Department</h4>
                    <p className="text-government-gray">{searchResult.assignedDepartment}</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-government-blue mb-2">Location</h4>
                  <p className="text-government-gray">{searchResult.location}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-government-blue mb-2">Description</h4>
                  <p className="text-government-gray">{searchResult.description}</p>
                </div>
              </CardContent>
            </Card>

            {/* Timeline */}
            <Card>
              <CardHeader>
                <CardTitle>Progress Timeline</CardTitle>
                <CardDescription>
                  Track the progress of your complaint from submission to resolution
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {searchResult.timeline.map((step, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0">
                        {step.completed ? (
                          <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center">
                            <CheckCircle className="h-5 w-5 text-white" />
                          </div>
                        ) : (
                          <div className="w-8 h-8 bg-government-gray-light rounded-full flex items-center justify-center">
                            <Clock className="h-5 w-5 text-government-gray" />
                          </div>
                        )}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className={`font-semibold ${
                            step.completed ? 'text-success' : 'text-government-gray'
                          }`}>
                            {step.status}
                          </h4>
                          {step.date !== 'Pending' && (
                            <span className="text-sm text-government-gray">
                              {step.date}
                            </span>
                          )}
                        </div>
                        <p className="text-government-gray text-sm">
                          {step.description}
                        </p>
                      </div>
                      
                      {index < searchResult.timeline.length - 1 && step.completed && (
                        <div className="flex-shrink-0 ml-4">
                          <ArrowRight className="h-5 w-5 text-government-gray" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
                <CardDescription>
                  Contact us if you have questions about your complaint
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="government" className="flex-1">
                    Contact Department
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Update Complaint
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Download Report
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Help Section */}
        {!searchResult && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-government-blue" />
                Can't find your complaint?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-government-blue mb-2">Check your ID</h4>
                  <p className="text-sm text-government-gray">
                    Make sure you're entering the correct complaint ID. It should be in the format: MCP followed by letters and numbers.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-government-blue mb-2">Contact Support</h4>
                  <p className="text-sm text-government-gray">
                    If you're still having trouble, call our helpline at +91 11 2XXX XXXX or email support@municipal.gov.in
                  </p>
                </div>
              </div>
              
              <Separator />
              
              <div className="text-center">
                <p className="text-government-gray mb-4">
                  Don't have a complaint ID? Submit a new complaint to get started.
                </p>
                <Button variant="government" asChild>
                  <a href="/submit">Submit New Complaint</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}