import { useParams } from "wouter";
import { useLocation } from "wouter";
import Header from "@/components/layout/header";
import { blogPosts } from "@/data/blog-posts";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar } from "lucide-react";

export default function BlogDetail() {
  const params = useParams();
  const [, setLocation] = useLocation();
  const postId = params.id;
  
  const post = blogPosts.find(p => p.id === postId);
  
  if (!post) {
    return (
      <div className="min-h-screen bg-bg-primary">
        <Header />
        <main className="max-w-4xl mx-auto px-6 py-12">
          <div className="text-center">
            <h1 className="text-2xl font-semibold mb-4">Blog post not found</h1>
            <button 
              onClick={() => setLocation("/blog")}
              className="text-accent hover:underline"
            >
              ← Back to Blog
            </button>
          </div>
        </main>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-bg-primary">
      <Header />
      
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Back button */}
        <motion.button
          onClick={() => setLocation("/blog")}
          className="flex items-center space-x-2 text-text-secondary hover:text-accent transition-colors mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ArrowLeft size={20} />
          <span>Back to Blog</span>
        </motion.button>

        {/* Article header */}
        <motion.article
          className="bg-white rounded-2xl p-8 md:p-12 shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Category and meta info */}
          <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-text-secondary">
            <span className="bg-accent/10 text-accent px-3 py-1 rounded-full">
              {post.category}
            </span>
            <div className="flex items-center space-x-2">
              <Calendar size={16} />
              <span>{formatDate(post.publishedDate)}</span>
            </div>
            <span>{post.readTime}</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-semibold mb-6 text-primary leading-tight">
            {post.title}
          </h1>

          {/* Description */}
          <p className="text-lg text-text-secondary mb-8 leading-relaxed">
            {post.description}
          </p>

          {/* Content */}
          {post.content && (
            <div 
              className="prose prose-lg max-w-none text-text-primary"
              dangerouslySetInnerHTML={{ __html: post.content }}
              style={{
                lineHeight: '1.7',
              }}
            />
          )}
        </motion.article>

        {/* Navigation to other posts */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <button
            onClick={() => setLocation("/blog")}
            className="inline-flex items-center space-x-2 bg-accent text-white px-8 py-3 rounded-full hover:bg-accent/90 transition-colors"
          >
            <span>더 많은 글 보기</span>
          </button>
        </motion.div>
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