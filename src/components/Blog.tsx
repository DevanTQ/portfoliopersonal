import { useEffect, useRef } from "react";

type BlogPost = {
  icon: string;
  cat: string;
  title: string;
  excerpt: string;
  date: string;
  href: string;
};

const Blog = ({ posts }: { posts: BlogPost[] }) => {
  const isCompact = posts.length < 3;
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // IntersectionObserver mandiri khusus untuk komponen Blog (React Island)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" } // Sesuaikan opsi threshold dengan main.js lo jika perlu
    );

    // Grab semua elemen yang mau di-animate di dalam section ini
    const elements = sectionRef.current?.querySelectorAll(".reveal-react");
    elements?.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    // Tambahkan ref ke container utama
    <section id="blog" className="full" ref={sectionRef}>
      <div className="blog-inner">
        {/* Ganti SEMUA class 'reveal' menjadi 'reveal-react' */}
        <div className="section-label reveal-react">Blog & Writing</div>
        <h2 className="section-title reveal-react">Latest Posts</h2>
        <p className="section-desc reveal-react">
          Notes and writeups on science, tech, and whatever I happen to be
          digging into lately.
        </p>

        {posts.length === 0 ? (
          <div className="blog-empty reveal-react">
            <i className="fa-solid fa-pen-to-square"></i>
            <p>Nothing here yet.</p>
            <span>First article coming soon.</span>
          </div>
        ) : (
          <>
            <div className={`blog-grid${isCompact ? " blog-grid-compact" : ""}`} id="blogGrid">
              {posts.map((post) => (
                <div className="blog-card reveal-react" key={post.title}>
                  <div className="blog-thumb">
                    <i className={`fa-solid ${post.icon}`}></i>
                  </div>
                  <div className="blog-body">
                    <div className="blog-cat">{post.cat}</div>
                    <div className="blog-title">{post.title}</div>
                    <div className="blog-excerpt">{post.excerpt}</div>
                    <div className="blog-meta">
                      <span className="blog-date">{post.date}</span>
                      <a href={post.href} className="blog-read" target="_blank" rel="noopener noreferrer">
                        Read <i className="fa-solid fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {posts.length >= 3 && (
              <div style={{ textAlign: "center", marginTop: "3rem" }} className="reveal-react" id="blogMoreBtn">
                <a href="https://northfous.blogspot.com" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                  All Posts <i className="fa-solid fa-arrow-right" style={{ marginLeft: "0.25rem" }}></i>
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