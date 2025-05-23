
import { Search, Shield, Clock, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface HeroProps {
  onSearch: (query: string) => void;
}

const Hero = ({ onSearch }: HeroProps) => {
  const handleQuickSearch = (term: string) => {
    onSearch(term);
  };

  return (
    <section className="bg-gradient-to-br from-medical-50 to-medical-100 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-medical-700 mb-6 animate-fade-in">
            Your Trusted
            <span className="block text-medical-600">Healthcare Partner</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 animate-fade-in">
            Get genuine medicines, supplements, and healthcare products delivered to your doorstep. 
            Licensed pharmacy with certified medications.
          </p>

          {/* Quick Search Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-8 animate-scale-in">
            {['Vitamins', 'Pain Relief', 'Cold & Flu', 'Supplements'].map((term) => (
              <Button
                key={term}
                variant="outline"
                className="border-medical-300 text-medical-700 hover:bg-medical-500 hover:text-white"
                onClick={() => handleQuickSearch(term)}
              >
                {term}
              </Button>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm animate-fade-in">
              <Shield className="h-12 w-12 text-medical-500 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Licensed Pharmacy</h3>
              <p className="text-gray-600 text-sm">All medications verified and certified</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm animate-fade-in">
              <Clock className="h-12 w-12 text-medical-500 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">24/7 Service</h3>
              <p className="text-gray-600 text-sm">Round-the-clock pharmacy support</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm animate-fade-in">
              <Truck className="h-12 w-12 text-medical-500 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Fast Delivery</h3>
              <p className="text-gray-600 text-sm">Same-day delivery in metro areas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
