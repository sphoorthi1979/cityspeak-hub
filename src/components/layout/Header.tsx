import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Globe, Bell, Accessibility } from 'lucide-react';
import { cn } from '@/lib/utils';
import governmentLogo from '@/assets/government-logo.png';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Submit Complaint', href: '/submit' },
  { name: 'Track Complaint', href: '/track' },
  { name: 'Departments', href: '/departments' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'Admin', href: '/admin' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState('EN');
  const location = useLocation();

  const toggleLanguage = () => {
    setLanguage(language === 'EN' ? 'हिं' : 'EN');
  };

  return (
    <header className="border-b border-border bg-card shadow-sm">
      {/* Emergency Alert Banner */}
      <div className="bg-accent text-accent-foreground px-4 py-2 text-center text-sm font-medium">
        <Bell className="inline h-4 w-4 mr-2" />
        Emergency Alert: Water supply maintenance scheduled for Sunday 8 AM - 12 PM
      </div>

      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Title */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src={governmentLogo} 
              alt="Government Logo" 
              className="h-10 w-10"
            />
            <div className="hidden md:block">
              <h1 className="text-lg font-bold text-government-blue">
                Municipal Complaint Portal
              </h1>
              <p className="text-xs text-government-gray">
                Government of Municipal City
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  location.pathname === item.href
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-government-gray"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="hidden md:flex"
            >
              <Globe className="h-4 w-4 mr-2" />
              {language}
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              title="Accessibility Options"
              className="hidden md:flex"
            >
              <Accessibility className="h-4 w-4" />
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="lg:hidden">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <div className="flex flex-col space-y-4 mt-6">
                  <div className="flex items-center space-x-3 pb-4 border-b">
                    <img 
                      src={governmentLogo} 
                      alt="Government Logo" 
                      className="h-8 w-8"
                    />
                    <div>
                      <h2 className="font-semibold text-government-blue">
                        Municipal Portal
                      </h2>
                    </div>
                  </div>
                  
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "text-sm font-medium p-2 rounded transition-colors",
                        location.pathname === item.href
                          ? "bg-government-blue-light text-government-blue"
                          : "text-government-gray hover:bg-government-gray-light"
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                  
                  <div className="pt-4 border-t space-y-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={toggleLanguage}
                      className="w-full justify-start"
                    >
                      <Globe className="h-4 w-4 mr-2" />
                      Switch to {language === 'EN' ? 'हिंदी' : 'English'}
                    </Button>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full justify-start"
                    >
                      <Accessibility className="h-4 w-4 mr-2" />
                      Accessibility
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}