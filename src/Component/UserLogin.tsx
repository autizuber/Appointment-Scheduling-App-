// import axios from "axios";
// import { useFormik } from "formik";
// import { useCookies } from "react-cookie"
// import { Link, useNavigate } from "react-router-dom"
// import { IoPersonCircle } from "react-icons/io5";

// export function UserLogin(){  
//   const [cookie,setCookie,removecookie] = useCookies(['userid']);
  
//   let naviget = useNavigate();

//   const fomik = useFormik({
//     initialValues : {
//         UserId:'',
//         Password:''
//     },
//     onSubmit : (user) =>{
//        axios.get("http://127.0.0.1:3030/users")
//        .then((response)=>{

//         var client = response.data.find((item:any)=> item.UserId === user.UserId);

//         if(client){
//           if(client.Password===user.Password){
//             setCookie('userid',user.UserId);
//             naviget('/dashbord');
//           }else{
//             alert("invalid Password");
//           }
//         } else {
//           alert("User Not found")
//         }

//        })
//     }
//   })

//   return(
//     <div className="w-full h-screen overflow-hidden">
//          <nav className=" backdrop-blur-md w-full h-20 flex justify-center items-center">
//           <div>
//           <h1 className="text-xl font-semibold">Login User</h1>
//           </div>
//        </nav> 
//         <div className="w-full h-full flex justify-center items-center gap-5">
//             <form onSubmit={fomik.handleSubmit} className="p-5 backdrop-blur-sm bg-white/30 w-[30vw] rounded-lg shadow-md">
//                 <h1 className=" font-semibold text-2xl flex gap-1 justify-center"> <IoPersonCircle  className="h-9" />Login</h1>
//                 <dl>
//                   <dt className="font-semibold">User Id</dt>
//                   <dd className="mb-2"><input onChange={fomik.handleChange} type="text" name="UserId" className="w-full p-2 bg-transparent ring-1 ring-zinc-500 outline-none rounded-md "/></dd>
//                   <dt className="font-semibold">Password</dt>
//                   <dd className="mb-2"><input onChange={fomik.handleChange} type="password" name="Password" className="w-full p-2 bg-transparent ring-1 ring-zinc-500 outline-none rounded-md "/></dd>
//                 </dl>
//                   <button type="submit" className="w-full mb-3 py-1 bg-gradient-to-r from-zinc-600 to-zinc-900 text-white font-semibold rounded-lg mt-2 ">Login</button>
//                   <div className="flex justify-between ">
//                   <Link to="/" className=" font-medium text-[15px] cursor-pointer underline text-blue-600">Home</Link>
//                   <p>Don't have account? <Link to="/RigisterUser" className=" font-medium text-[15px] cursor-pointer underline text-blue-600">Rigister</Link></p>
//                   </div>
//             </form>
//         </div>
//     </div>
//   )
// }

// UserLogin.tsx
import axios from "axios";
import { useFormik } from "formik";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import { IoPersonCircle } from "react-icons/io5";

export function UserLogin() {
  const [cookie, setCookie] = useCookies(['userid']);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      UserId: '',
      Password: ''
    },
    onSubmit: (user) => {
      axios.get("http://127.0.0.1:3030/users")
        .then((response) => {
          const client = response.data.find((item: any) => item.UserId === user.UserId);

          if (client) {
            if (client.Password === user.Password) {
              setCookie('userid', user.UserId);
              navigate('/dashbord');
            } else {
              alert("Invalid Password");
            }
          } else {
            alert("User Not Found");
          }
        });
    }
  });

  return (
    <div className="w-full h-screen flex flex-col">
      <nav className="backdrop-blur-md w-full h-20 flex justify-center items-center bg-gray-800">
        <h1 className="text-xl font-semibold text-white">Login User</h1>
      </nav>
      <div className="flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <form onSubmit={formik.handleSubmit} className="p-6 backdrop-blur-sm bg-white/30 rounded-lg shadow-md">
            <h1 className="font-semibold text-2xl flex gap-1 justify-center mb-4">
              <IoPersonCircle className="h-9" /> Login
            </h1>
            <div className="space-y-4">
              <div>
                <label htmlFor="UserId" className="block font-semibold">User Id</label>
                <input
                  id="UserId"
                  name="UserId"
                  type="text"
                  onChange={formik.handleChange}
                  className="w-full p-2 bg-transparent ring-1 ring-zinc-500 outline-none rounded-md"
                />
              </div>
              <div>
                <label htmlFor="Password" className="block font-semibold">Password</label>
                <input
                  id="Password"
                  name="Password"
                  type="password"
                  onChange={formik.handleChange}
                  className="w-full p-2 bg-transparent ring-1 ring-zinc-500 outline-none rounded-md"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-2 mt-4 bg-gradient-to-r from-zinc-600 to-zinc-900 text-white font-semibold rounded-lg"
            >
              Login
            </button>
            <div className="mt-4 flex flex-col items-center text-sm">
              <Link to="/" className="font-medium text-blue-600 underline mb-2">Home</Link>
              <p>
                Don't have an account? 
                <Link to="/RigisterUser" className="font-medium text-blue-600 underline"> Register</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

