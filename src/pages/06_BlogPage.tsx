import { motion } from 'motion/react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Calendar, User, ArrowRight, TrendingUp } from 'lucide-react';

const featuredPost = {
  title: 'Top Hair Trends for 2025: What You Need to Know',
  excerpt: 'Discover the hottest hair trends that will dominate this year, from bold colors to classic cuts reimagined for the modern era.',
  image: 'https://images.unsplash.com/photo-1660505102581-85cffa4e6550?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGJlYXV0eSUyMHNhbG9ufGVufDF8fHx8MTc2MjA5MjQ4NHww&ixlib=rb-4.1.0&q=80&w=1080',
  author: 'Sarah Ahmed',
  date: 'October 28, 2025',
  category: 'Hair Trends',
  featured: true
};

const blogPosts = [
  {
    id: 1,
    title: 'The Complete Guide to Beard Grooming',
    excerpt: 'Everything you need to know about maintaining a well-groomed beard, from trimming techniques to product recommendations.',
    image: 'https://images.unsplash.com/photo-1603899968034-1a56ca48d172?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFyZCUyMGdyb29taW5nJTIwdHJpbXxlbnwxfHx8fDE3NjIwNjU1NTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    author: 'Ali Khan',
    date: 'October 25, 2025',
    category: 'Men\'s Grooming'
  },
  {
    id: 2,
    title: 'Bridal Beauty Timeline: When to Book Your Services',
    excerpt: 'Plan your pre-wedding beauty regimen with our comprehensive timeline for flawless bridal beauty.',
    image: 'https://images.unsplash.com/photo-1629238135877-dae437cf0fdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkYWwlMjBtYWtldXAlMjBoYWlyfGVufDF8fHx8MTc2MjA5MjQ4NXww&ixlib=rb-4.1.0&q=80&w=1080',
    author: 'Ayesha Malik',
    date: 'October 22, 2025',
    category: 'Bridal'
  },
  {
    id: 3,
    title: '5 Skincare Tips for Glowing Skin',
    excerpt: 'Expert-approved skincare routines and treatments to achieve radiant, healthy-looking skin.',
    image: 'https://images.unsplash.com/photo-1531299204812-e6d44d9a185c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWNpYWwlMjBza2luY2FyZSUyMHRyZWF0bWVudHxlbnwxfHx8fDE3NjIwOTI0ODV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    author: 'Dr. Fatima Hassan',
    date: 'October 20, 2025',
    category: 'Skincare'
  },
  {
    id: 4,
    title: 'Choosing the Right Hair Color for Your Skin Tone',
    excerpt: 'Learn how to select the perfect hair color that complements your natural complexion.',
    image: 'https://images.unsplash.com/photo-1626379501846-0df4067b8bb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwc2Fsb24lMjBjaGFpcnxlbnwxfHx8fDE3NjIwMzMxODZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    author: 'Zara Imran',
    date: 'October 18, 2025',
    category: 'Hair Color'
  },
  {
    id: 5,
    title: 'Men\'s Executive Grooming: Professional Look Tips',
    excerpt: 'Maintain a polished, professional appearance with these executive grooming essentials.',
    image: 'https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25maWRlbnQlMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjIwNzAyNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    author: 'Hamza Siddiqui',
    date: 'October 15, 2025',
    category: 'Men\'s Grooming'
  },
  {
    id: 6,
    title: 'The Benefits of Regular Facials',
    excerpt: 'Why incorporating professional facials into your routine is essential for healthy skin.',
    image: 'https://images.unsplash.com/photo-1662519951774-e8f89ea1200a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjB0cmVhdG1lbnQlMjByb29tfGVufDF8fHx8MTc2MTk4Mjk0MXww&ixlib=rb-4.1.0&q=80&w=1080',
    author: 'Dr. Amina Shah',
    date: 'October 12, 2025',
    category: 'Skincare'
  },
  {
    id: 7,
    title: 'Nail Care 101: Manicure and Pedicure Essentials',
    excerpt: 'Master the basics of nail care and learn what to expect from professional treatments.',
    image: 'https://images.unsplash.com/photo-1634235421135-16ebd88c13c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5pY3VyZSUyMHBlZGljdXJlJTIwbmFpbHN8ZW58MXx8fHwxNzYyMDUyNjE5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    author: 'Nadia Tariq',
    date: 'October 10, 2025',
    category: 'Nail Care'
  },
  {
    id: 8,
    title: 'Wedding Makeup Trends: Timeless vs Modern',
    excerpt: 'Explore the latest bridal makeup trends and find the perfect style for your special day.',
    image: 'https://images.unsplash.com/photo-1608979048467-6194dabc6a3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBibG9nJTIwbWFrZXVwfGVufDF8fHx8MTc2MjA5Mjg4MHww&ixlib=rb-4.1.0&q=80&w=1080',
    author: 'Sana Iqbal',
    date: 'October 8, 2025',
    category: 'Bridal'
  },
  {
    id: 9,
    title: 'Hair Care Routine for Different Hair Types',
    excerpt: 'Customize your hair care regimen based on your unique hair type and texture.',
    image: 'https://images.unsplash.com/photo-1761931403667-a6753db21f32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoYWlyY3V0JTIwc3R5bGluZ3xlbnwxfHx8fDE3NjIwOTI0ODR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    author: 'Mariam Khan',
    date: 'October 5, 2025',
    category: 'Hair Care'
  }
];

const categories = ['All', 'Hair Trends', 'Men\'s Grooming', 'Bridal', 'Skincare', 'Hair Color', 'Nail Care', 'Hair Care'];

export function BlogPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-black to-[#1a1a1a] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(212, 175, 55, 0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 
              className="mb-4"
              style={{ 
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)'
              }}
            >
              Beauty & Style Blog
            </h1>
            <p className="text-white/80 text-xl max-w-2xl mx-auto">
              Expert tips, trends, and insights from our professional team
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden border-0 shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div 
                  className="h-64 lg:h-auto bg-cover bg-center"
                  style={{ backgroundImage: `url('${featuredPost.image}')` }}
                ></div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    <div 
                      className="px-3 py-1 rounded-full text-xs"
                      style={{ backgroundColor: '#D4AF37', color: '#1a1a1a' }}
                    >
                      Featured
                    </div>
                    <span className="text-sm text-gray-500">{featuredPost.category}</span>
                  </div>
                  <h2 
                    className="mb-4"
                    style={{ 
                      fontFamily: 'Playfair Display, serif',
                      fontSize: 'clamp(1.5rem, 3vw, 2rem)'
                    }}
                  >
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {featuredPost.date}
                    </div>
                  </div>
                  <Button 
                    className="w-fit rounded-full group"
                    style={{ 
                      background: 'linear-gradient(135deg, #D4AF37 0%, #F4E5C3 100%)',
                      color: '#1a1a1a'
                    }}
                  >
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-gray-50 border-y">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-4 overflow-x-auto">
            <TrendingUp className="w-5 h-5 flex-shrink-0" style={{ color: '#D4AF37' }} />
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full text-sm whitespace-nowrap bg-white hover:bg-gray-100 transition-colors border"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 
              className="mb-4"
              style={{ 
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(2rem, 4vw, 3rem)'
              }}
            >
              Latest Articles
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all h-full group cursor-pointer">
                  <div className="relative h-48 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url('${post.image}')` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span 
                        className="px-3 py-1 rounded-full text-xs"
                        style={{ backgroundColor: '#D4AF37', color: '#1a1a1a' }}
                      >
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="mb-3 line-clamp-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </div>
                    </div>
                    <Button 
                      variant="ghost"
                      className="p-0 h-auto group/btn"
                      style={{ color: '#D4AF37' }}
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button 
              variant="outline"
              size="lg"
              className="rounded-full px-8"
            >
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-black text-white">
        <div className="container  mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto flex justify-center items-center flex-col text-center"
          >
            <h2 
              className="mb-4"
              style={{ 
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(2rem, 4vw, 3rem)'
              }}
            >
              Subscribe to Our Newsletter
            </h2>
            <p className="text-white/70 mb-8">
              Get the latest beauty tips, trends, and exclusive offers delivered to your inbox
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/50"
              />
              <Button 
                className="rounded-full py-6 px-8"
                style={{ 
                  background: 'linear-gradient(135deg, #D4AF37 0%, #F4E5C3 100%)',
                  color: '#1a1a1a'
                }}
              >
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
