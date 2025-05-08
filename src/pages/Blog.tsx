import React from 'react';
import GradientCanvas from '../components/GradientCanvas';
import Menu from '../components/Menu';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import PreFooter from '../components/PreFooter';
import { blogPosts } from '../lib/blogPosts';

const Blog = () => {
  return (
    <div className="min-h-screen text-black relative overflow-hidden bg-white flex flex-col">
      <GradientCanvas />
      
      <div className="relative z-20 flex-1 flex flex-col">
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

        <main className="flex-1 flex flex-col">
          <div className="container mx-auto px-4 md:px-8 pt-32 xs:pt-36 sm:pt-40 pb-12 md:pb-20 flex-1">
            {/* Hero Section */}
            <div className="max-w-4xl mb-20 md:mb-32">
              <h1 className="text-fluid-6xl xs:text-fluid-7xl font-light tracking-tight leading-[1.1] mb-6">
                Blog &<br />
                Insights
              </h1>
              <p className="text-fluid-lg text-gray-600 max-w-xl tracking-tight leading-snug">
                Aktuelle Einblicke, Trends und Expertise aus der digitalen Welt.
              </p>
            </div>

            {/* Featured Post */}
            <div className="mb-20">
              <Link to={`/blog/${blogPosts[0].id}`} className="block relative group">
                <div className="aspect-[21/9] overflow-hidden rounded-3xl mb-8">
                  <img 
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="max-w-3xl">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-sm text-gray-600">{blogPosts[0].date}</span>
                    <span className="text-sm px-3 py-1 bg-black/10 text-black rounded-full">Featured</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-light mb-4 tracking-tight group-hover:text-[#9333EA] transition-colors">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-gray-600 mb-6 tracking-tight leading-relaxed">
                    {blogPosts[0].excerpt}
                  </p>
                  <span className="bg-transparent border border-black rounded-full px-6 py-2 inline-flex items-center gap-2 group-hover:bg-black group-hover:text-white transition-colors tracking-tight">
                    Weiterlesen <ArrowRight className="w-5 h-5" />
                  </span>
                </div>
              </Link>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              {blogPosts.slice(1).map((post) => (
                <Link key={post.id} to={`/blog/${post.id}`} className="group">
                  <div className="aspect-square overflow-hidden rounded-3xl mb-6">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-sm text-gray-600">{post.date}</span>
                    <span className="text-sm px-3 py-1 bg-black/10 text-black rounded-full">{post.category}</span>
                  </div>
                  <h3 className="text-xl font-light mb-4 tracking-tight group-hover:text-[#9333EA] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-6 tracking-tight leading-relaxed">{post.excerpt}</p>
                  <span className="bg-transparent border border-black rounded-full px-6 py-2 inline-flex items-center gap-2 group-hover:bg-black group-hover:text-white transition-colors tracking-tight">
                    Weiterlesen <ArrowRight className="w-5 h-5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <PreFooter />
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Blog;