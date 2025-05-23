
import { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

interface HeaderProps {
  cartItemCount: number;
  onCartClick: () => void;
  onSearch: (query: string) => void;
}

const Header = ({ cartItemCount, onCartClick, onSearch }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <header className="bg-white shadow-lg border-b border-medical-100 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-medical-500 p-2 rounded-lg">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-medical-700">MediCare</h1>
              <p className="text-xs text-medical-600">Trusted Healthcare</p>
            </div>
          </div>

          {/* Desktop Search */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search medicines, supplements..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 border-medical-200 focus:border-medical-500"
              />
            </div>
          </form>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-600 hover:text-medical-600">
              <User className="h-5 w-5 mr-2" />
              Account
            </Button>
            <Button 
              variant="ghost" 
              className="relative text-gray-600 hover:text-medical-600"
              onClick={onCartClick}
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              Cart
              {cartItemCount > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-medical-500 text-white">
                  {cartItemCount}
                </Badge>
              )}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <form onSubmit={handleSearch} className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search medicines..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 border-medical-200 focus:border-medical-500"
            />
          </form>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-medical-100 animate-fade-in">
            <div className="flex flex-col space-y-2">
              <Button variant="ghost" className="justify-start text-gray-600 hover:text-medical-600">
                <User className="h-5 w-5 mr-2" />
                Account
              </Button>
              <Button 
                variant="ghost" 
                className="justify-start text-gray-600 hover:text-medical-600"
                onClick={onCartClick}
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Cart ({cartItemCount})
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
