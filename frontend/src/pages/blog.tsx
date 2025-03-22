import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Backend_Url from "../config";
import { Heading } from "../components/Heading";
import { BlogSkeleton } from "../components/BlogSkeleton";

export default function Blog() {
  const { id } = useParams(); 
  const [blog, setBlog] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchBlog() {
      try {
        const response = await axios.get(`${Backend_Url}/api/v1/blog/${id}`, {
          headers: { Authorization: localStorage.getItem("token") },
        });

       
        const post = Array.isArray(response.data.getAllpost)
          ? response.data.getAllpost[0] 
          : response.data.getAllpost; 

        setBlog(post);
      } catch (err) {
        setError("Failed to load the blog. Please try again.");
      } finally {
        setLoading(false);
      }
    }

    if (id) fetchBlog();
  }, [id]);

  return (
    <div className="bg-gray-900 text-white min-h-screen p-2 space-y-5 flex flex-col items-center ">
      <Heading title="Create"/>
      
      {loading ? (
        <BlogSkeleton />
      ) : error ? (
        <p className="text-red-500 text-lg">{error}</p>
      ) : blog ? (
        <div className="w-full max-w-4xl bg-gray-800 p-6 rounded-lg shadow-md">
          
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-12 h-12 bg-purple-500 text-white flex items-center justify-center rounded-full text-xl font-bold">
              {blog.email ? blog.email[0].toUpperCase() : "A"}
            </div>
            <div>
              <p className="font-semibold text-lg">{blog.email || "Anonymous"}</p>
              <p className="text-gray-400 text-sm">
                Published on {blog.publishedDate ? new Date(blog.publishedDate).toDateString() : "Unknown"}
              </p>
            </div>
          </div>

         
          <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>

          
          <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">{blog.content}</p>

     
          <div className="flex items-center justify-between mt-6 text-gray-400">
            <span className="text-gray-300">
              {`${Math.ceil((blog.content?.length || 200) / 150)} min read`}
            </span>
            <div className="flex space-x-4">

              <button className="hover:text-green-400 transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeWidth="2" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"/>
                </svg>
              </button>

              <button className="hover:text-purple-400 transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M4 4a2 2 0 1 0 0 4h16a2 2 0 1 0 0-4H4Zm0 6h16v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8Zm10.707 5.707a1 1 0 0 0-1.414-1.414l-.293.293V12a1 1 0 1 0-2 0v2.586l-.293-.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l2-2Z" clipRule="evenodd"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-gray-400 text-lg">No blog found.</p>
      )}
    </div>
  );
}
