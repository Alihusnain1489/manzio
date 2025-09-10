// app/blog/page.js
import Link from "next/link";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts",{
    next: {reavalidate: 10 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

// ✅ Define Blog as default export properly
export default async function Blog() {
  const data = await getData();

  return (
    <section className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-teal-600 mb-4">Our Blog</h1>
        <p className="text-gray-600 text-lg">
          Insights, tutorials, and stories from our team at{" "}
          <span className="font-semibold">Manzio</span>.
        </p>
      </div>

      {/* Blog List */}
      <div className="max-w-5xl mx-auto space-y-8">
        {data.slice(0, 10).map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition flex flex-col md:flex-row"
          >
            {/* Image Left (placeholder since API has no images) */}
            <img
              src={`https://picsum.photos/seed/${post.id}/600/400`}
              alt={post.title}
              className="w-full md:w-1/3 h-56 object-cover"
            />

            {/* Text Right */}
            <div className="p-6 flex flex-col justify-between md:w-2/3">
              <div>
                <p className="text-sm text-gray-500 mb-2">
                  {new Date().toLocaleDateString()} • John Doe
                </p>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {post.body.substring(0, 100)}...
                </p>
              </div>
              <Link
                href={`/blog/${post.id}`}
                className="text-teal-600 font-medium hover:underline self-start"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
