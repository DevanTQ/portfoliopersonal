import { useEffect, useState } from "react";

type BlogPost = {
  icon: string;
  cat: string;
  title: string;
  excerpt: string;
  date: string;
  href: string;
};

const BLOG_ID = "6370908641104516933";
const API_KEY = "AIzaSyA0ZTb9EgQWJ25dxb8g6qM3x8eGQ01LCus";
const BLOGGER_API = `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts?key=${API_KEY}&maxResults=6`;

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(BLOGGER_API)
      .then((res) => res.json())
      .then((data) => {
        const entries = data.items || [];
        const posts: BlogPost[] = entries.map((entry: any) => ({
          icon: "fa-pen-nib",
          cat: entry.labels?.[0] || "Blog",
          title: entry.title,
          excerpt:
            entry.content?.replace(/<[^>]+>/g, "").slice(0, 120) + "..." || "",
          date: new Date(entry.published).toLocaleDateString("en-US", {
            month: "short",
            year: "numeric",
          }),
          href: entry.url || "#",
        }));
        setBlogPosts(posts);
      })
      .catch(() => setBlogPosts([]))
      .finally(() => setLoading(false));
  }, []);

  const isCompact = blogPosts.length < 3;

  return (
    <section id="blog" className="full">
      <div className="blog-inner">
        <div className="section-label reveal">Blog & Writing</div>
        <h2 className="section-title reveal">Latest Posts</h2>
        <p className="section-desc reveal">
          Notes, thoughts, and explorations on science, technology, and
          things I'm currently learning.
        </p>

        {loading ? (
          <div className="blog-empty reveal">
            <i className="fa-solid fa-spinner fa-spin"></i>
            <p>Loading posts...</p>
          </div>
        ) : blogPosts.length === 0 ? (
          <div className="blog-empty reveal">
            <i className="fa-solid fa-pen-to-square"></i>
            <p>No posts yet.</p>
            <span>Stay tuned for my first article!</span>
          </div>
        ) : (
          <>
            <div
              className={`blog-grid${isCompact ? " blog-grid-compact" : ""}`}
              id="blogGrid"
            >
              {blogPosts.map((post) => (
                <div className="blog-card reveal" key={post.title}>
                  <div className="blog-thumb">
                    <i className={`fa-solid ${post.icon}`}></i>
                  </div>
                  <div className="blog-body">
                    <div className="blog-cat">{post.cat}</div>
                    <div className="blog-title">{post.title}</div>
                    <div className="blog-excerpt">{post.excerpt}</div>
                    <div className="blog-meta">
                      <span className="blog-date">{post.date}</span>
                      <a
                        href={post.href}
                        className="blog-read"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Read <i className="fa-solid fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {blogPosts.length >= 3 && (
              <div
                style={{ textAlign: "center", marginTop: "3rem" }}
                className="reveal"
                id="blogMoreBtn"
              >
                <a
                  href="https://northfous.blogspot.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  All Posts{" "}
                  <i
                    className="fa-solid fa-arrow-right"
                    style={{ marginLeft: "0.25rem" }}
                  ></i>
                </a>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default Blog;