import { useEffect, useState } from "react";

import axios from "axios";
import Backend_Url from "../config";
import { Heading } from "../components/Heading";
import { Blogs } from "../components/blogs";
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useNavigate } from "react-router-dom";

export default function AllBlogs() {
  const navigate = useNavigate();
  interface Blog {
    id: string;
    email: string;
    title: string;
    content: string;
    publishedDate: string;
  }

  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const response = await axios.get(`${Backend_Url}/api/v1/blog/bulk?filter=${filter}`, {
          headers: {
            Authorization: localStorage.getItem("token") || "",
          },
        });

        setBlogs(response.data.post || []); 
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    }

    setTimeout(()=>{fetchBlogs(),3000});
  }, [filter]);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-2 ">
    
      <Heading value={filter} onChange={(e:any) => setFilter(e.target.value)} title="Create" />

     
      <div className="max-w-4xl mx-auto mt-6 space-y-6 " >
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <Blogs
              key={blog.id} 
              email={blog.email ||"Anonymous"}
              title={blog.title}
              content={blog.content}
              publishedDate={blog.publishedDate}
              onClick={()=>{navigate('/blog/'+blog.id)}}
            />
          ))
        ) : (
          <div>
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
          </div>
        )}
      </div>
    </div>
  );
}
