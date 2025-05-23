
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  productCounts: Record<string, number>;
}

const CategoryFilter = ({ 
  categories, 
  selectedCategory, 
  onCategoryChange, 
  productCounts 
}: CategoryFilterProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-medical-100">
      <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
      <div className="space-y-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "ghost"}
            className={`w-full justify-between text-left ${
              selectedCategory === category 
                ? "bg-medical-500 text-white hover:bg-medical-600" 
                : "hover:bg-medical-50"
            }`}
            onClick={() => onCategoryChange(category)}
          >
            <span>{category}</span>
            <Badge 
              variant="secondary" 
              className={selectedCategory === category ? "bg-white text-medical-700" : ""}
            >
              {productCounts[category] || 0}
            </Badge>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
