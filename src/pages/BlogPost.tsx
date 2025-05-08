import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import GradientCanvas from '../components/GradientCanvas';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import PreFooter from '../components/PreFooter';
import { getBlogPost } from '../lib/blogPosts';

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = getBlogPost(id || '');

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Post nicht gefunden</h1>
          <Link 
            to="/blog" 
            className="text-[#9333EA] hover:underline inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" /> Zurück zum Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-black relative overflow-hidden bg-[#f5f5f5]">
      <GradientCanvas />
      
      <div className="relative z-20">
        {/* Logo */}
        <div className="fixed top-safe-top left-safe-left z-50 p-4 xs:p-6 sm:p-8">
          <Link 
            to="/" 
            className="text-fluid-xl font-montreal font-bold tracking-tight hover:opacity-70 transition-opacity touch-target"
          >
            mizmu
          </Link>
        </div>

        <Menu />

        <main className="container mx-auto px-4 md:px-8 py-12 md:py-20">
          {/* Back to Blog */}
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-[#9333EA] hover:underline mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Zurück zum Blog
          </Link>

          {/* Hero Image */}
          <div className="aspect-[21/9] overflow-hidden rounded-3xl mb-8">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Post Header */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-sm text-gray-600">{post.date}</span>
              <span className="text-sm px-3 py-1 bg-black/10 text-black rounded-full">
                {post.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-light tracking-tight leading-tight mb-8">
              {post.title}
            </h1>
            <div>
              <p className="font-medium">{post.author.name}</p>
              <p className="text-sm text-gray-600">Author</p>
            </div>
          </div>

          {/* Post Content */}
          <div className="max-w-3xl mx-auto prose prose-lg">
            <div className="whitespace-pre-wrap">{post.content}</div>
          </div>
        </main>

        <PreFooter />
        <Footer />
      </div>
    </div>
  );
};

export default BlogPost;