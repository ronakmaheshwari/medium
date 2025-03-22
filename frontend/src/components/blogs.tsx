import {  Flip, toast, ToastContainer } from "react-toastify";

interface CreatePost {
    email: string;
    title: string;
    content: string;
    publishedDate: string;
    onClick: (e: React.MouseEvent<HTMLDivElement>) => void
  }
  
  const Blogs = ({email, title, content, publishedDate, onClick }: CreatePost) => {

    const handleClick = () => {
      toast.success("Saved It! 🦄", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Flip,
      });
    };

    const ArchiveClicker = () => {
      toast.success("Archived It! 🚀", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Flip,
      });
    };

    const Sharer = () => {
      toast.warning("Shared It! 😲", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Flip,
      });
    };

    return (
      <div className="bg-gray-900 text-white p-6 rounded-xl shadow-lg w-full max-w-3xl mx-auto" onClick={onClick}>
        <ToastContainer />
      
        <div className="flex items-center space-x-4 mb-4">
          <div className="rounded-full bg-purple-500 w-10 h-10 flex items-center justify-center text-white font-bold text-lg">
            {email?.[0]?.toUpperCase() || "A"}
          </div>
          <div>
            <p className="font-semibold">{email || "Anonymous"}</p>
            <p className="text-gray-400 text-xs">Published on {publishedDate} at Medium</p>
          </div>
        </div>

  
        <h2 className="text-2xl font-bold mb-2">{title}</h2>

  
        <p className="text-gray-300 text-sm leading-relaxed mb-4">
          {content.slice(0, 150) + "..."}
        </p>

  
        <div className="flex items-center justify-between text-gray-400 text-xs">
          <span>{`${Math.ceil(content.length / 150)} min read`}</span>

          <div className="flex space-x-4">
            <button className="hover:text-purple-400 transition" onMouseEnter={ArchiveClicker}>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M4 4a2 2 0 1 0 0 4h16a2 2 0 1 0 0-4H4Zm0 6h16v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8Zm10.707 5.707a1 1 0 0 0-1.414-1.414l-.293.293V12a1 1 0 1 0-2 0v2.586l-.293-.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l2-2Z" clipRule="evenodd"/>
              </svg>
            </button>

            <button className="hover:text-green-400 transition" onMouseEnter={handleClick}>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z" clipRule="evenodd"/>
              </svg>
            </button>

            <button className="hover:text-blue-400 transition" onMouseEnter={Sharer}>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"/>
              </svg>
            </button>
            </div>
          </div>
  </div>
);
};
  
  export { Blogs };
  