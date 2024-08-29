// import { Link } from "react-router-dom";

// export function TodoIndex(){
//   return(
//     <div className="w-full h-screen overflow-hidden">
//             <nav className=" backdrop-blur-md w-full h-20 flex justify-center items-center">
//           <div>
//           <h1 className="text-xl font-semibold">ToDo</h1>
//           </div>
//        </nav> 
//         <div className="w-full h-full flex justify-center items-center gap-5">
//             <Link to="/RigisterUser" className="bg-gradient-to-r from-zinc-600 to-zinc-900 text-white  font-semibold px-5 py-2 rounded-lg active:ring-2 ring-zinc-600 border-none outline-none">Rigister</Link>
//             <Link to="/LoginUser" className="bg-gradient-to-r from-zinc-600 to-zinc-900 text-white font-semibold px-5 py-2 rounded-lg active:ring-2 ring-zinc-600 border-none outline-none">Login</Link>
//         </div>
//     </div>
//   )
// }
import { Link } from "react-router-dom";

export function TodoIndex() {
  return (
    <div className="w-full h-screen overflow-hidden flex flex-col">
      <nav className=" bg-gray-800 w-full h-20 flex justify-center items-center">
        <h1 className="text-xl font-semibold text-white">ToDo</h1>
      </nav>

      <div className="flex-grow flex flex-col justify-center items-center p-4 sm:p-6 md:p-8 lg:p-10">
        {/* Large devices (lg and up) */}
        <div className="hidden lg:flex lg:gap-10 lg:items-center">
          <Link 
            to="/RigisterUser" 
            className="bg-gradient-to-r from-zinc-600 to-zinc-900 text-white font-semibold px-5 py-2 rounded-lg transition-transform transform active:scale-95"
          >
            Register
          </Link>
          <Link 
            to="/LoginUser" 
            className="bg-gradient-to-r from-zinc-600 to-zinc-900 text-white font-semibold px-5 py-2 rounded-lg transition-transform transform active:scale-95"
          >
            Login
          </Link>
        </div>

        {/* Small devices */}
        <div className="lg:hidden flex flex-col gap-5">
          <Link 
            to="/RigisterUser" 
            className="bg-gradient-to-r from-zinc-600 to-zinc-900 text-white font-semibold px-5 py-2 rounded-lg transition-transform transform active:scale-95"
          >
            Register
          </Link>
          <Link 
            to="/LoginUser" 
            className="bg-gradient-to-r from-zinc-600 to-zinc-900 text-white font-semibold px-5 py-2 rounded-lg transition-transform transform active:scale-95"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
