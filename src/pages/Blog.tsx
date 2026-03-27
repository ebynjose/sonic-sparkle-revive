import { motion } from "framer-motion";
import { Calendar, ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const blogPosts = [
  {
    id: "future-of-interactive-displays",
    title: "The Future of Interactive Displays in Modern Workspaces",
    excerpt: "Discover how AI-powered smart boards are revolutionizing the way teams collaborate, present, and brainstorm in 2025 and beyond.",
    date: "March 20, 2025",
    readTime: "5 min read",
    category: "Industry Trends",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=500&fit=crop",
  },
  {
    id: "smart-board-vs-traditional",
    title: "Smart Board vs Traditional Whiteboard: Why Businesses Are Switching",
    excerpt: "A comprehensive comparison of interactive smart boards and traditional whiteboards — covering productivity, cost-efficiency, and long-term ROI.",
    date: "March 12, 2025",
    readTime: "7 min read",
    category: "Product Insights",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=500&fit=crop",
  },
  {
    id: "digital-classrooms-uae",
    title: "How Digital Classrooms Are Transforming Education in the UAE",
    excerpt: "Schools across the UAE are adopting interactive technology to create engaging, immersive learning experiences for students of all ages.",
    date: "February 28, 2025",
    readTime: "6 min read",
    category: "Education",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=500&fit=crop",
  },
  {
    id: "video-conferencing-tips",
    title: "5 Tips to Elevate Your Video Conferencing Setup",
    excerpt: "From camera placement to display quality — practical advice to make your virtual meetings feel as natural as in-person conversations.",
    date: "February 15, 2025",
    readTime: "4 min read",
    category: "Tips & Guides",
    image: "https://images.unsplash.com/photo-1587825140708-dfaf18c4c5ad?w=800&h=500&fit=crop",
  },
  {
    id: "sonichive-partnership-program",
    title: "SonicHive Launches Channel Partner Program Across the Middle East",
    excerpt: "We're expanding our reach with a new partner program designed to bring interactive display solutions to more businesses and institutions.",
    date: "January 30, 2025",
    readTime: "3 min read",
    category: "Company News",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop",
  },
  {
    id: "touchscreen-technology-evolution",
    title: "The Evolution of Touchscreen Technology: From Resistive to AI-Powered",
    excerpt: "A deep dive into how touch technology has evolved over the decades and what the next generation of interactive displays will look like.",
    date: "January 18, 2025",
    readTime: "8 min read",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=500&fit=crop",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 border-b border-border">
        <div className="container mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs tracking-[0.3em] uppercase text-primary font-mono mb-4"
          >
            News & Blog
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-6 max-w-4xl"
          >
            Insights & <span className="gradient-text">Updates</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground max-w-xl text-base leading-relaxed"
          >
            Stay up to date with the latest in interactive display technology, industry trends, and SonicHive company news.
          </motion.p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-8 items-center"
          >
            <div className="rounded-2xl overflow-hidden aspect-[16/10]">
              <img
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="space-y-4">
              <span className="text-xs tracking-[0.2em] uppercase text-primary font-mono">
                {blogPosts[0].category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold leading-tight">
                {blogPosts[0].title}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {blogPosts[0].excerpt}
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {blogPosts[0].date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {blogPosts[0].readTime}
                </span>
              </div>
              <Link
                to={`/blog/${blogPosts[0].id}`}
                className="inline-flex items-center gap-2 text-primary text-sm tracking-[0.1em] uppercase hover:gap-3 transition-all duration-300 mt-2"
              >
                Read Article <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-24">
        <div className="container mx-auto">
          <h3 className="text-xs tracking-[0.3em] uppercase text-primary font-mono mb-10">
            Latest Articles
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group"
              >
                <div className="rounded-xl overflow-hidden aspect-[16/10] mb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <span className="text-[10px] tracking-[0.2em] uppercase text-primary font-mono">
                  {post.category}
                </span>
                <h4 className="font-display font-bold text-base mt-1 mb-2 leading-snug group-hover:text-primary transition-colors duration-300">
                  {post.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
