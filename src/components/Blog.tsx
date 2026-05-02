import { useEffect, useState } from "react";

type BlogPost = {
  icon: string;
  cat: string;
  title: string;
  excerpt: string;
  date: string;
  href: string;
};

const BLOGGER_RSS =
  "https://api.allorigins.win/get?url=" +
  encodeURIComponent(
    "https://northfous.blogspot.com/feeds/posts/default?alt=json",
  );

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(BLOGGER_RSS)
      .then((res) => res.json())
      .then((data) => {
        console.log('raw:', data)
        const parsed = JSON.parse(data.contents);
        console.log('parsed:', parsed)
        const entries = parsed.feed.entry || [];
        console.log('entries:', entries)
        const posts: BlogPost[] = entries.slice(0, 6).map((entry: any) => ({
          icon: "fa-pen-nib",
          cat: entry.category?.[0]?.term || "Blog",
          title: entry.title.$t,
          excerpt:
            entry.summary?.$t?.replace(/<[^>]+>/g, "").slice(0, 120) + "..." ||
            entry.content?.$t?.replace(/<[^>]+>/g, "").slice(0, 120) + "..." ||
            "",
          date: new Date(entry.published.$t).toLocaleDateString("id-ID", {
            month: "short",
            year: "numeric",
          }),
          href: entry.link.find((l: any) => l.rel === "alternate")?.href || "#",
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
        <h2 className="section-title reveal">Tulisan Terbaru</h2>
        <p className="section-desc reveal">
          Catatan, pemikiran, dan eksplorasi tentang sains, teknologi, dan
          hal-hal yang sedang saya pelajari.
        </p>

        {loading ? (
          <div className="blog-empty reveal">
            <i className="fa-solid fa-spinner fa-spin"></i>
            <p>Memuat tulisan...</p>
          </div>
        ) : blogPosts.length === 0 ? (
          <div className="blog-empty reveal">
            <i className="fa-solid fa-pen-to-square"></i>
            <p>Belum ada tulisan untuk sekarang.</p>
            <span>Nantikan tulisan pertama saya!</span>
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
                        Baca <i className="fa-solid fa-arrow-right"></i>
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
                  Semua Tulisan{" "}
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
