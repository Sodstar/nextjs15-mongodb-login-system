// File: app/page.tsx

import Link from 'next/link';
import { 
  Search, 
  ShoppingCart, 
  User, 
  Heart,
  ChevronRight,
  Shield,
  Download,
  Award
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

// Define types for our data
interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  author: string;
  sales: number;
  rating: number;
}

interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
}

// Mock data for featured products
const featuredProducts: Product[] = [
  {
    id: '1',
    title: 'Premium UI Kit',
    description: 'A comprehensive UI kit with 300+ components for modern web applications',
    price: 49.99,
    category: 'UI Kits',
    image: '/api/placeholder/600/400',
    author: 'DesignLab',
    sales: 1240,
    rating: 4.8
  },
  {
    id: '2',
    title: 'eCommerce Template',
    description: 'Complete Next.js template for online stores with shopping cart functionality',
    price: 79.99,
    category: 'Templates',
    image: '/api/placeholder/600/400',
    author: 'WebCrafters',
    sales: 856,
    rating: 4.9
  },
  {
    id: '3',
    title: 'Icon Pack Pro',
    description: '1000+ vector icons in multiple styles and formats',
    price: 29.99,
    category: 'Icons',
    image: '/api/placeholder/600/400',
    author: 'IconWorks',
    sales: 2150,
    rating: 4.7
  },
  {
    id: '4',
    title: 'Digital Marketing Toolkit',
    description: 'Social media templates, ad designs, and email templates for marketers',
    price: 59.99,
    category: 'Marketing',
    image: '/api/placeholder/600/400',
    author: 'GrowthGurus',
    sales: 785,
    rating: 4.6
  },
  {
    id: '5',
    title: 'Photography Preset Collection',
    description: 'Professional Lightroom presets for portrait and landscape photography',
    price: 39.99,
    category: 'Photography',
    image: '/api/placeholder/600/400',
    author: 'LensLegends',
    sales: 1560,
    rating: 4.8
  },
  {
    id: '6',
    title: 'Font Bundle',
    description: '25 premium fonts for branding, web design, and print projects',
    price: 69.99,
    category: 'Fonts',
    image: '/api/placeholder/600/400',
    author: 'TypeFoundry',
    sales: 920,
    rating: 4.7
  }
];

// Mock data for categories
const categories: Category[] = [
  { id: '1', name: 'UI Kits', icon: '🎨', count: 124 },
  { id: '2', name: 'Templates', icon: '📄', count: 98 },
  { id: '3', name: 'Icons', icon: '✨', count: 315 },
  { id: '4', name: 'Fonts', icon: '🔤', count: 87 },
  { id: '5', name: 'Graphics', icon: '🖼️', count: 256 },
  { id: '6', name: 'Photos', icon: '📸', count: 512 },
  { id: '7', name: 'Audio', icon: '🎵', count: 78 },
  { id: '8', name: '3D Assets', icon: '🧊', count: 64 }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <span className="bg-blue-600 text-white p-1 rounded-md">DM</span>
              <span className="text-xl font-bold">DigitalMarket</span>
            </Link>
            
            {/* Search */}
            <div className="hidden md:flex items-center flex-1 max-w-md mx-6">
              <div className="relative w-full">
                <Input 
                  type="text" 
                  placeholder="Search for digital goods..." 
                  className="pl-10 pr-4 py-2 w-full" 
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            </div>
            
            {/* Navigation Links */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/categories" className="text-gray-600 hover:text-blue-600 font-medium">
                Categories
              </Link>
              <Link href="/bestsellers" className="text-gray-600 hover:text-blue-600 font-medium">
                Bestsellers
              </Link>
              <Link href="/sellers" className="text-gray-600 hover:text-blue-600 font-medium">
                Become a Seller
              </Link>
              
              {/* User Actions */}
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon" className="relative">
                  <Heart className="h-5 w-5 text-gray-600" />
                  <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    0
                  </span>
                </Button>
                
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingCart className="h-5 w-5 text-gray-600" />
                  <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    0
                  </span>
                </Button>
                
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5 text-gray-600" />
                </Button>
              </div>
              
              <Separator orientation="vertical" className="h-6" />
              
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">Log in</Button>
                <Button size="sm">Sign up</Button>
              </div>
            </nav>
            
            {/* Mobile menu button - would be expanded in a full implementation */}
            <Button variant="ghost" size="icon" className="md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Premium Digital Assets for Creators</h1>
                <p className="text-xl mb-8 text-blue-100">Find the perfect digital assets to elevate your next project. High-quality templates, graphics, UI kits, and more.</p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                    Browse Marketplace
                  </Button>
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-blue-700">
                    Sell Your Products
                  </Button>
                </div>
              </div>
              <div className="hidden md:block">
                <img src="/api/placeholder/600/400" alt="Digital marketplace illustration" className="rounded-lg shadow-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold">Browse Categories</h2>
              <Link href="/categories" className="text-blue-600 hover:text-blue-700 flex items-center">
                View all categories
                <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {categories.map((category) => (
                <Link 
                  key={category.id} 
                  href={`/category/${category.id}`}
                  className="flex flex-col items-center p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <div className="text-2xl mb-2">{category.icon}</div>
                  <div className="font-medium text-center">{category.name}</div>
                  <div className="text-sm text-gray-500">{category.count} items</div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        
        {/* Featured Products Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold">Featured Products</h2>
              <Link href="/products" className="text-blue-600 hover:text-blue-700 flex items-center">
                View all products
                <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProducts.map((product) => (
                <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <Link href={`/product/${product.id}`}>
                    <div className="aspect-video relative">
                      <img 
                        src={product.image} 
                        alt={product.title} 
                        className="object-cover w-full h-full"
                      />
                      <Badge className="absolute top-2 right-2">{product.category}</Badge>
                    </div>
                  </Link>
                  
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">
                        <Link href={`/product/${product.id}`} className="hover:text-blue-600 transition-colors">
                          {product.title}
                        </Link>
                      </CardTitle>
                      <div className="text-lg font-bold text-blue-600">${product.price}</div>
                    </div>
                    <div className="text-sm text-gray-500">by {product.author}</div>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-gray-600 line-clamp-2">{product.description}</p>
                  </CardContent>
                  
                  <CardFooter className="flex justify-between border-t pt-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Download className="h-4 w-4 mr-1" />
                      {product.sales} sales
                    </div>
                    <div className="flex items-center">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg 
                            key={i} 
                            className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-sm ml-1">{product.rating}</span>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Why Choose Us Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Why Choose DigitalMarket</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-100 p-4 mb-4 rounded-full">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Secure Transactions</h3>
                <p className="text-gray-600">All payments are processed securely. We never store your credit card information.</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-100 p-4 mb-4 rounded-full">
                  <Download className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Instant Downloads</h3>
                <p className="text-gray-600">Get immediate access to your digital purchases. No waiting, no hassle.</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-100 p-4 mb-4 rounded-full">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Quality Guaranteed</h3>
                <p className="text-gray-600">All digital goods are reviewed for quality before being listed on our marketplace.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Newsletter Section */}
        <section className="bg-blue-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated</h2>
              <p className="text-gray-600 mb-6">Subscribe to our newsletter for the latest digital goods, exclusive offers, and creator tips.</p>
              
              <div className="flex flex-col sm:flex-row gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1"
                />
                <Button className="whitespace-nowrap">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white text-lg font-bold mb-4">DigitalMarket</h3>
              <p className="mb-4">The marketplace for premium digital goods. Discover, buy, and sell high-quality digital assets.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85 0 3.204-.012 3.584-.069 4.85-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="hover:text-white">Home</Link></li>
                <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                <li><Link href="/categories" className="hover:text-white">Categories</Link></li>
                <li><Link href="/bestsellers" className="hover:text-white">Bestsellers</Link></li>
                <li><Link href="/sellers" className="hover:text-white">Become a Seller</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white text-lg font-bold mb-4">Customer Service</h3>
              <ul className="space-y-2">
                <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
                <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
                <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
                <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                <li><Link href="/refund" className="hover:text-white">Refund Policy</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white text-lg font-bold mb-4">Contact Information</h3>
              <ul className="space-y-2">
                <li>support@digitalmarket.com</li>
                <li>+1 (555) 123-4567</li>
                <li>123 Digital Avenue, Suite 101</li>
                <li>San Francisco, CA 94103</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} DigitalMarket. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}