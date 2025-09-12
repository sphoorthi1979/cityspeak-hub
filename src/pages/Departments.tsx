import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, Clock, Users, MapPin } from 'lucide-react';

const departments = [
  {
    name: 'Water Supply Department',
    head: 'Dr. Rajesh Kumar',
    phone: '+91 11 2345 6789',
    email: 'water@municipal.gov.in',
    address: 'Block A, Municipal Building',
    hours: 'Mon-Fri: 9 AM - 5 PM',
    services: ['Water Supply', 'Pipeline Maintenance', 'Water Quality'],
    status: 'Available',
  },
  {
    name: 'Electricity Department',
    head: 'Eng. Priya Sharma',
    phone: '+91 11 2345 6790',
    email: 'electricity@municipal.gov.in',
    address: 'Block B, Municipal Building',
    hours: '24/7 Emergency Service',
    services: ['Power Distribution', 'Street Lighting', 'Electrical Safety'],
    status: 'Available',
  },
  {
    name: 'Roads & Infrastructure',
    head: 'Mr. Amit Singh',
    phone: '+91 11 2345 6791',
    email: 'roads@municipal.gov.in',
    address: 'Block C, Municipal Building',
    hours: 'Mon-Sat: 8 AM - 6 PM',
    services: ['Road Maintenance', 'Traffic Management', 'Construction'],
    status: 'Busy',
  },
  {
    name: 'Waste Management',
    head: 'Mrs. Sunita Patel',
    phone: '+91 11 2345 6792',
    email: 'waste@municipal.gov.in',
    address: 'Block D, Municipal Building',
    hours: 'Mon-Sun: 6 AM - 8 PM',
    services: ['Garbage Collection', 'Recycling', 'Sanitation'],
    status: 'Available',
  },
  {
    name: 'Drainage & Sewerage',
    head: 'Dr. Mohammed Ali',
    phone: '+91 11 2345 6793',
    email: 'drainage@municipal.gov.in',
    address: 'Block E, Municipal Building',
    hours: '24/7 Emergency Service',
    services: ['Drain Cleaning', 'Sewage Treatment', 'Flood Control'],
    status: 'Available',
  },
  {
    name: 'Health & Sanitation',
    head: 'Dr. Kavita Mehta',
    phone: '+91 11 2345 6794',
    email: 'health@municipal.gov.in',
    address: 'Block F, Municipal Building',
    hours: 'Mon-Fri: 9 AM - 5 PM',
    services: ['Public Health', 'Disease Control', 'Food Safety'],
    status: 'Available',
  },
];

export default function Departments() {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'available':
        return 'bg-green-100 text-green-800';
      case 'busy':
        return 'bg-orange-100 text-orange-800';
      case 'unavailable':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-government-blue mb-4">
            Municipal Departments
          </h1>
          <p className="text-lg text-government-gray max-w-2xl mx-auto">
            Find contact information and services for all municipal departments. 
            Reach out directly for specific queries or assistance.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center border-l-4 border-l-government-blue">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-government-blue mb-2">
                {departments.length}
              </div>
              <div className="text-government-gray">Total Departments</div>
            </CardContent>
          </Card>
          
          <Card className="text-center border-l-4 border-l-success">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-success mb-2">
                {departments.filter(d => d.status === 'Available').length}
              </div>
              <div className="text-government-gray">Currently Available</div>
            </CardContent>
          </Card>
          
          <Card className="text-center border-l-4 border-l-saffron">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-government-gray">Emergency Services</div>
            </CardContent>
          </Card>
        </div>

        {/* Departments Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {departments.map((dept, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <CardTitle className="text-xl text-government-blue mb-2">
                      {dept.name}
                    </CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      Head: {dept.head}
                    </CardDescription>
                  </div>
                  <Badge className={getStatusColor(dept.status)}>
                    {dept.status}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Contact Information */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-government-blue" />
                    <span className="text-government-gray">{dept.phone}</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-government-blue" />
                    <span className="text-government-gray">{dept.email}</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-government-blue" />
                    <span className="text-government-gray">{dept.address}</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Clock className="h-4 w-4 text-government-blue" />
                    <span className="text-government-gray">{dept.hours}</span>
                  </div>
                </div>

                {/* Services */}
                <div>
                  <h4 className="font-semibold text-government-blue mb-2">Services:</h4>
                  <div className="flex flex-wrap gap-2">
                    {dept.services.map((service, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-4">
                  <Button 
                    variant="government" 
                    size="sm" 
                    className="flex-1"
                    onClick={() => window.location.href = `tel:${dept.phone}`}
                  >
                    Call
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1"
                    onClick={() => window.location.href = `mailto:${dept.email}`}
                  >
                    Email
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Emergency Contact Section */}
        <Card className="mt-12 bg-red-50 border-red-200">
          <CardHeader>
            <CardTitle className="text-xl text-red-800 flex items-center gap-2">
              <Phone className="h-5 w-5" />
              Emergency Contact
            </CardTitle>
            <CardDescription className="text-red-700">
              For urgent issues requiring immediate attention
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-red-800 mb-2">24/7 Emergency Helpline</h4>
                <p className="text-2xl font-bold text-red-800 mb-2">100 / 1077</p>
                <p className="text-red-700 text-sm">
                  For water emergencies, power outages, road accidents, and other urgent municipal issues
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-red-800 mb-2">Emergency Services</h4>
                <ul className="text-red-700 text-sm space-y-1">
                  <li>• Water pipe bursts and flooding</li>
                  <li>• Electrical hazards and power failures</li>
                  <li>• Road blockages and traffic emergencies</li>
                  <li>• Sewage overflows and drainage issues</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-red-100 rounded-lg">
              <p className="text-red-800 font-semibold text-sm">
                Note: For non-emergency complaints, please use the regular complaint submission system 
                to ensure proper tracking and resolution.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}