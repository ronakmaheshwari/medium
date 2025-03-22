import Quote from "../components/Quotes";
import { Auth } from "../components/Signup";

export default function Signin() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen bg-slate-50">
      <div className="flex justify-center items-center lg:col-span-1 bg-slate-50">
        <Auth type="signin" />
      </div>

      <div className="hidden lg:block">
        <Quote />
      </div>
    </div>
  );
}


