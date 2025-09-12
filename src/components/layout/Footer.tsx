import { Link } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';
import { Mail, Phone, MapPin, Facebook, Twitter, Youtube } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-government-gray-dark text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Municipal Complaint Portal</h3>
            <p className="text-sm text-gray-300">
              Empowering citizens to report municipal issues and track their resolution 
              for a cleaner, safer, and better city.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-300 hover:text-white cursor-pointer" />
              <Twitter className="h-5 w-5 text-gray-300 hover:text-white cursor-pointer" />
              <Youtube className="h-5 w-5 text-gray-300 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2 text-sm">
              <Link to="/submit" className="block text-gray-300 hover:text-white">
                Submit Complaint
              </Link>
              <Link to="/track" className="block text-gray-300 hover:text-white">
                Track Status
              </Link>
              <Link to="/departments" className="block text-gray-300 hover:text-white">
                Departments
              </Link>
              <Link to="/about" className="block text-gray-300 hover:text-white">
                About Us
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <div className="space-y-2 text-sm">
              <div className="text-gray-300">Water Supply Issues</div>
              <div className="text-gray-300">Electricity Problems</div>
              <div className="text-gray-300">Road Maintenance</div>
              <div className="text-gray-300">Waste Management</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-gray-300">+91 11 2XXX XXXX</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-gray-300">complaints@municipal.gov.in</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span className="text-gray-300">
                  Municipal Corporation Building,<br />
                  City Center, Municipal City - 110001
                </span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-600" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-300">
            © {currentYear} Government of Municipal City. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <Link to="/privacy" className="text-gray-300 hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/accessibility" className="text-gray-300 hover:text-white">
              Accessibility
            </Link>
            <Link to="/terms" className="text-gray-300 hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}