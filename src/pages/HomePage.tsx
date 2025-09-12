import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Droplets, Zap, MapPin, Trash2, FileText, Search, Users, Phone } from 'lucide-react';

const services = [
  {
    icon: Droplets,
    title: 'Water Supply',
    description: 'Report water shortage, leakage, or quality issues',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Zap,
    title: 'Electricity',
    description: 'Report power cuts, street light issues, or electrical problems',
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50',
  },
  {
    icon: MapPin,
    title: 'Roads & Infrastructure',
    description: 'Report potholes, damaged roads, or traffic issues',
    color: 'text-gray-600',
    bgColor: 'bg-gray-50',
  },
  {
    icon: Trash2,
    title: 'Waste Management',
    description: 'Report garbage collection issues or cleanliness problems',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
  },
];

const quickActions = [
  {
    icon: FileText,
    title: 'Submit Complaint',
    description: 'File a new complaint about municipal services',
    href: '/submit',
    variant: 'government' as const,
  },
  {
    icon: Search,
    title: 'Track Complaint',
    description: 'Check the status of your existing complaint',
    href: '/track',
    variant: 'outline' as const,
  },
  {
    icon: Users,
    title: 'Contact Departments',
    description: 'Find contact information for municipal departments',
    href: '/departments',
    variant: 'outline' as const,
  },
  {
    icon: Phone,
    title: 'Emergency Contact',
    description: 'Get immediate help for urgent issues',
    href: '/contact',
    variant: 'saffron' as const,
  },
];

export default function HomePage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-government-blue to-government-blue-dark text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Municipal Complaint Portal
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              Submit and track complaints related to Water, Electricity, Roads, and Waste Management
            </p>
            <p className="text-lg opacity-80">
              Your voice matters. Help us build a better city together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8">
                <Link to="/submit">Submit Complaint</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-government-blue">
                <Link to="/track">Track Complaint</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-government-blue">
            Municipal Services
          </h2>
          <p className="text-lg text-government-gray max-w-2xl mx-auto">
            Report issues across various municipal services and help us maintain the city infrastructure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-l-government-blue">
              <CardHeader className="text-center">
                <div className={`w-16 h-16 mx-auto rounded-full ${service.bgColor} flex items-center justify-center mb-4`}>
                  <service.icon className={`h-8 w-8 ${service.color}`} />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Quick Actions */}
      <section className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-government-blue">
            Quick Actions
          </h2>
          <p className="text-lg text-government-gray max-w-2xl mx-auto">
            Access commonly used features and get help quickly
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickActions.map((action, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center space-y-4">
                <div className="w-12 h-12 mx-auto bg-government-blue-light rounded-full flex items-center justify-center">
                  <action.icon className="h-6 w-6 text-government-blue" />
                </div>
                <CardTitle className="text-lg">{action.title}</CardTitle>
                <CardDescription>{action.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant={action.variant} className="w-full">
                  <Link to={action.href}>Access</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-government-gray-light">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-government-blue">
              Making a Difference
            </h2>
            <p className="text-lg text-government-gray">
              See how the Municipal Complaint Portal is helping improve our city
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '10,247', label: 'Complaints Submitted' },
              { number: '8,832', label: 'Issues Resolved' },
              { number: '86%', label: 'Resolution Rate' },
              { number: '24hrs', label: 'Average Response Time' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-government-blue mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-government-gray">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-saffron to-accent rounded-2xl p-8 md:p-16 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of citizens helping improve our city through the Municipal Complaint Portal
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8">
              <Link to="/submit">Submit Your First Complaint</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-saffron">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}