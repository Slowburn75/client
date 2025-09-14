import type { FC } from "react";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
}

const posts: BlogPost[] = [
  {
    id: 1,
    title: "Why Great Landing Pages Convert Better",
    excerpt:
      "Learn the psychology behind high-converting landing pages and how you can apply it to your own project.",
    author: "Mohammed Olamide",
    date: "Sep 10, 2025",
  },
  {
    id: 2,
    title: "5 Tailwind Tricks for Clean Layouts",
    excerpt:
      "Tailwind makes building beautiful UIs fast — here are five tips to keep your layout minimal and consistent.",
    author: "Mohammed Olamide",
    date: "Sep 7, 2025",
  },
];

const LandingPage: FC = () => {
  return (
    <main className="bg-white text-gray-800">
      {/* Navbar */}
      <header className="flex justify-between items-center px-6 py-4 shadow">
        <h1 className="text-2xl font-bold text-indigo-600">MyBrand</h1>
        <nav className="space-x-6">
          <a href="#features" className="hover:text-indigo-600">Features</a>
          <a href="#blog" className="hover:text-indigo-600">Blog</a>
          <a href="#contact" className="hover:text-indigo-600">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center px-6 py-16 bg-gray-50">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Build Your Landing Page With Ease
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
          A simple, clean, and responsive layout built with TailwindCSS +
          TypeScript. Perfect for startups, blogs, and portfolios.
        </p>
        <button className="px-6 py-3 bg-indigo-600 text-white rounded-full shadow hover:bg-indigo-700 transition">
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section id="features" className="grid gap-8 md:grid-cols-3 px-6 py-16 max-w-6xl mx-auto">
        <div className="p-6 bg-white shadow rounded-2xl text-center">
          <h3 className="text-xl font-semibold mb-2">Fast</h3>
          <p className="text-gray-600">Optimized for speed and performance with minimal setup.</p>
        </div>
        <div className="p-6 bg-white shadow rounded-2xl text-center">
          <h3 className="text-xl font-semibold mb-2">Responsive</h3>
          <p className="text-gray-600">Looks great on all devices with Tailwind’s utility classes.</p>
        </div>
        <div className="p-6 bg-white shadow rounded-2xl text-center">
          <h3 className="text-xl font-semibold mb-2">Scalable</h3>
          <p className="text-gray-600">Easily add more sections, blog posts, or integrate with a CMS.</p>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Latest Articles</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.id}
              className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition bg-white"
            >
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="text-sm text-gray-500">
                By {post.author} • {post.date}
              </div>
              <a
                href={`/blog/${post.id}`}
                className="text-indigo-600 hover:underline text-sm mt-3 inline-block"
              >
                Read More →
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="px-6 py-8 bg-gray-100 text-center text-gray-600">
        <p>© {new Date().getFullYear()} MyBrand. All rights reserved.</p>
      </footer>
    </main>
  );
};

export default LandingPage;
