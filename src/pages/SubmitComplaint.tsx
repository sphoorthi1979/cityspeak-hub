import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mic, Upload, MapPin, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function SubmitComplaint() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [complaintId, setComplaintId] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Generate a random complaint ID
    const id = 'MCP' + Math.random().toString(36).substr(2, 9).toUpperCase();
    setComplaintId(id);
    setIsSubmitted(true);
    
    toast({
      title: "Complaint Submitted Successfully",
      description: `Your complaint ID is: ${id}`,
    });
  };

  if (isSubmitted) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <Card className="text-center border-success">
            <CardHeader>
              <div className="w-16 h-16 mx-auto bg-success rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-success">
                Complaint Submitted Successfully!
              </CardTitle>
              <CardDescription className="text-lg">
                Thank you for reporting this issue. We will investigate and respond promptly.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-success/10 p-4 rounded-lg">
                <p className="text-sm text-government-gray mb-2">Your Complaint ID:</p>
                <p className="text-2xl font-mono font-bold text-government-blue">
                  {complaintId}
                </p>
                <p className="text-sm text-government-gray mt-2">
                  Please save this ID to track your complaint status
                </p>
              </div>
              
              <div className="space-y-4">
                <p className="text-government-gray">
                  You will receive updates via SMS and email. Expected response time is within 24-48 hours.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    variant="government" 
                    className="flex-1"
                    onClick={() => window.location.href = `/track?id=${complaintId}`}
                  >
                    Track This Complaint
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex-1"
                    onClick={() => {
                      setIsSubmitted(false);
                      setComplaintId('');
                    }}
                  >
                    Submit Another
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-government-blue mb-4">
            Submit a Complaint
          </h1>
          <p className="text-lg text-government-gray">
            Report municipal issues and help us improve city services
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Complaint Details</CardTitle>
            <CardDescription>
              Please provide accurate information to help us address your concern effectively
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input 
                    id="name" 
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input 
                    id="phone" 
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email" 
                    type="email"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Complaint Category *</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="water">Water Supply</SelectItem>
                      <SelectItem value="electricity">Electricity</SelectItem>
                      <SelectItem value="roads">Roads & Infrastructure</SelectItem>
                      <SelectItem value="waste">Waste Management</SelectItem>
                      <SelectItem value="drainage">Drainage & Sewerage</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Location */}
              <div className="space-y-2">
                <Label htmlFor="location">Location *</Label>
                <div className="flex gap-2">
                  <Input 
                    id="location" 
                    placeholder="Enter complete address or landmark"
                    className="flex-1"
                    required
                  />
                  <Button type="button" variant="outline" size="icon">
                    <MapPin className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-sm text-government-gray">
                  Click the location icon to auto-detect your current location
                </p>
              </div>

              {/* Complaint Description */}
              <div className="space-y-2">
                <Label htmlFor="description">Complaint Description *</Label>
                <Textarea 
                  id="description"
                  placeholder="Describe your issue clearly. Include details like when it started, severity, and any other relevant information..."
                  className="min-h-[120px]"
                  required
                />
                <div className="flex gap-2">
                  <Button type="button" variant="outline" size="sm">
                    <Mic className="h-4 w-4 mr-2" />
                    Voice Input
                  </Button>
                </div>
              </div>

              {/* File Upload */}
              <div className="space-y-2">
                <Label>Evidence (Photos/Audio)</Label>
                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                  <Upload className="h-12 w-12 text-government-gray mx-auto mb-4" />
                  <p className="text-government-gray mb-2">
                    Drop files here or click to upload
                  </p>
                  <p className="text-sm text-government-gray">
                    Supported: JPG, PNG, MP3, MP4 (Max 10MB each)
                  </p>
                  <Button type="button" variant="outline" className="mt-4">
                    Select Files
                  </Button>
                </div>
              </div>

              {/* Priority */}
              <div className="space-y-2">
                <Label htmlFor="priority">Priority Level</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select priority level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low - Can wait for regular processing</SelectItem>
                    <SelectItem value="medium">Medium - Needs attention soon</SelectItem>
                    <SelectItem value="high">High - Urgent issue affecting daily life</SelectItem>
                    <SelectItem value="emergency">Emergency - Immediate danger/risk</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <Button type="submit" variant="government" size="lg" className="w-full">
                  Submit Complaint
                </Button>
                <p className="text-sm text-government-gray text-center mt-4">
                  By submitting this complaint, you agree to our Terms of Service and Privacy Policy
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}