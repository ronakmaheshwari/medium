import { useNavigate } from "react-router-dom";

export const Heading = ({val,onChange ,title}:any) => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between w-full h-14 p-4 bg-gray-900 text-white shadow-md ">
      
      <div className="flex items-center space-x-3">
      <img
          src="https://img.icons8.com/glyph-neue/64/FFFFFF/medium-logo.png"
          alt="Medium Logo"
          className="h-8"
        />
        <span className="text-xl font-semibold tracking-wide" onClick={()=>{navigate('/blogs')}}>Medium</span>
      </div>

      
      <div className="flex-1 max-w-lg">
        <input
          type="text"
          value={val}
          placeholder="Search users..."
          className="w-full px-4 py-2 border rounded-lg bg-gray-800 border-gray-600 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400"
          onChange={onChange}
        />
      </div>

     
      <div className="flex space-x-4 text-gray-400 justify-center items-center">
      <img
          src="https://img.icons8.com/ios-glyphs/30/FFFFFF/bitcoin.png "
          alt="Medium Logo"
          className="h-8"
        />
       <img
          src="https://img.icons8.com/glyph-neue/64/FFFFFF/automatic.png "
          alt="Medium Logo"
          className="h-8"
        />
        <img
          src="https://img.icons8.com/fluency-systems-filled/48/FFFFFF/user-male-circle.png"
          alt="Medium Logo"
          className="h-8"
        />
        <button className="bg-green-600 text-white font-medium rounded-lg w-[100px] h-[40px]" onClick={()=>{navigate('/create')}}>{title}</button>
      </div>
    </div>
  );
};
