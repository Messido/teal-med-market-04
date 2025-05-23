
import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Paracetamol 500mg',
    description: 'Pain relief and fever reducer. Safe and effective for adults and children.',
    price: 12.99,
    originalPrice: 15.99,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400',
    category: 'Pain Relief',
    inStock: true,
    prescription: false,
    manufacturer: 'MediCore',
    rating: 4.5,
    reviewCount: 234
  },
  {
    id: '2',
    name: 'Vitamin D3 1000 IU',
    description: 'Essential vitamin D supplement for bone health and immune support.',
    price: 18.50,
    image: 'https://images.unsplash.com/photo-1550572017-edd951b55104?w=400',
    category: 'Vitamins',
    inStock: true,
    prescription: false,
    manufacturer: 'HealthPlus',
    rating: 4.8,
    reviewCount: 156
  },
  {
    id: '3',
    name: 'Amoxicillin 500mg',
    description: 'Antibiotic for bacterial infections. Prescription required.',
    price: 25.00,
    image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400',
    category: 'Antibiotics',
    inStock: true,
    prescription: true,
    manufacturer: 'PharmaTech',
    rating: 4.3,
    reviewCount: 89
  },
  {
    id: '4',
    name: 'Omega-3 Fish Oil',
    description: 'Heart-healthy omega-3 fatty acids for cardiovascular support.',
    price: 22.95,
    originalPrice: 27.95,
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400',
    category: 'Supplements',
    inStock: true,
    prescription: false,
    manufacturer: 'NutriLife',
    rating: 4.6,
    reviewCount: 312
  },
  {
    id: '5',
    name: 'Cough Syrup',
    description: 'Natural honey-based cough suppressant for dry and productive coughs.',
    price: 14.75,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    category: 'Cold & Flu',
    inStock: false,
    prescription: false,
    manufacturer: 'NatureMed',
    rating: 4.2,
    reviewCount: 67
  },
  {
    id: '6',
    name: 'Blood Pressure Monitor',
    description: 'Digital blood pressure monitor with large display and memory function.',
    price: 89.99,
    originalPrice: 119.99,
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400',
    category: 'Medical Devices',
    inStock: true,
    prescription: false,
    manufacturer: 'HealthTech',
    rating: 4.7,
    reviewCount: 445
  }
];

export const categories = [
  'All',
  'Pain Relief',
  'Vitamins',
  'Antibiotics',
  'Supplements',
  'Cold & Flu',
  'Medical Devices'
];
