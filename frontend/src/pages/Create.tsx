import { useState } from "react";
import { Heading } from "../components/Heading";
import axios from "axios";
import Backend_Url from "../config";
import { useNavigate } from "react-router-dom";
import { Bounce, toast, ToastContainer } from "react-toastify";

export default function CreatePost() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();

    async function handle() {
        if (!title || !content) {
            toast.warning("Title and content cannot be empty!", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "colored",
                transition: Bounce,
            });
            return;
        }

        try {
            const response = await axios.post(
                `${Backend_Url}/api/v1/blog`,
                { title, content },
                {
                    headers: {
                        Authorization: localStorage.getItem("token"),
                    },
                }
            );

            if (response.status === 200) {
                setTitle("");
                setContent("");

                toast.success("Post added successfully!", {
                    position: "top-center",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "colored",
                    transition: Bounce,
                });

                setTimeout(() => {
                    navigate("/blogs");
                }, 2000);
            }
        } catch (e) {
            console.error("Error:", e);
            toast.error("Failed to add post", {
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "colored",
                transition: Bounce,
            });
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white p-1 space-y-2 flex flex-col justify-start items-center ">
            <ToastContainer />
            <Heading title="Blogs" />

            <div className="flex flex-col justify-center items-center w-full max-w-3xl h-full space-y-6 bg-gray-850 p-6 rounded-lg ">
                <div className="w-full">
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter post title..."
                        className="w-full p-4 text-xl bg-gray-700 border border-gray-600 rounded-lg outline-none focus:ring-2 focus:ring-purple-400 text-white placeholder-gray-400"
                    />
                </div>

                <div className="w-full">
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Write your content here..."
                        className="w-full h-40 p-4 text-lg bg-gray-700 border border-gray-600 rounded-lg outline-none focus:ring-2 focus:ring-purple-400 resize-none text-white placeholder-gray-400"
                    />
                </div>

                <button
                    className="px-6 py-3 bg-purple-500 hover:bg-purple-600 transition rounded-lg text-white font-medium shadow-md hover:shadow-lg"
                    onClick={handle}
                >
                    Publish Post
                </button>
            </div>
        </div>
    );
}
