import Header from "@/components/layout/header";
import { blogPosts } from "@/data/blog-posts";
import { motion } from "framer-motion";
import { useLocation } from "wouter";

export default function Blog() {
  const [, setLocation] = useLocation();
  
  const handlePostClick = (postId: string) => {
    setLocation(`/blog/${postId}`);
  };
  return (
    <div className="min-h-screen bg-bg-primary">
      <Header />
      
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-12">
          <h2 className="text-4xl font-semibold mb-4 text-primary">Design Insights</h2>
          <p className="text-text-secondary text-lg max-w-2xl">
            Thoughts on design, user experience, and the creative process behind 
            meaningful digital products.
          </p>
        </div>
        
        <div className="space-y-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -2 }}
              onClick={() => handlePostClick(post.id)}
            >
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-text-secondary text-sm">{post.category}</span>
                <span className="text-text-secondary text-sm">•</span>
                <span className="text-text-secondary text-sm">{post.readTime}</span>
              </div>
              
              <h3 className="text-2xl font-semibold mb-4 text-primary">
                {post.title}
              </h3>
              
              <p className="text-text-secondary mb-6">
                {post.description}
              </p>
              
              <button className="text-accent font-medium hover:underline">
                Read more →
              </button>
            </motion.article>
          ))}
        </div>
      </main>
      
      <footer className="bg-white border-t border-gray-100 mt-24">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="text-center">
            <p className="text-text-secondary">
              &copy; 2024 Jiwoo Park. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
