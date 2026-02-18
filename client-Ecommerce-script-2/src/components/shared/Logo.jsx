import { PenTool } from "lucide-react";
import { Link } from "react-router";

export default function Logo({ w }) {
  return (
    <Link to="/" className="flex items-center gap-2 mb-2 group">
      <div className="bg-gradient-to-br from-blue-600 to-slate-800 p-2 rounded-lg shadow-md group-hover:shadow-lg transition-all duration-300">
        <PenTool className="w-6 h-6 text-white" />
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold bg-gradient-to-r from-blue-700 to-slate-800 bg-clip-text text-transparent leading-none">
          Notevia
        </span>
        <span className="text-[10px] font-medium text-slate-500 tracking-widest uppercase leading-none">
          Limited
        </span>
      </div>
    </Link>
  );
}
