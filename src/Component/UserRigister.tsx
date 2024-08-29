// import axios from "axios";
// import { useFormik } from "formik";
// import { Link, useNavigate } from "react-router-dom";
// import { IoPersonCircle } from "react-icons/io5";

// export function UserRigister(){

//   const naviget = useNavigate();

//   const fomik = useFormik({
//     initialValues : {
//       UserId:'',
//       UserName:'',
//       Password:'',
//       Email:'',
//       Mobile:''
//     },
//     onSubmit : (user)=>{
//       axios.post('http://127.0.0.1:3030/rigister-user',user)
//       .then(()=>{
//         alert("Rigister Successful...")
//         naviget("/LoginUser")
//       })
//     }
//   })

//   return(
//     <div className="w-full h-screen overflow-hidden">
//              <nav className=" backdrop-blur-md w-full h-20 flex justify-center items-center">
//           <div>
//           <h1 className="text-xl font-semibold">Rigister User</h1>
//           </div>
//        </nav> 
//         <div className="w-full h-full flex -mt-10 justify-center items-center gap-5">
//             <form onSubmit={fomik.handleSubmit} className="p-5 backdrop-blur-sm bg-white/30 w-[30vw] rounded-lg shadow-md">
//             <h1 className=" font-semibold text-2xl flex gap-1 justify-center"> <IoPersonCircle  className="h-9" />Rigister</h1>
//                 <dl>
//                   <dt className="font-semibold">User Id</dt>
//                   <dd className="mb-2"><input  onChange={fomik.handleChange} type="text" name="UserId" className="w-full p-2 bg-transparent ring-1 ring-zinc-500 outline-none rounded-md "/></dd>
//                   <dt className="font-semibold">User Name</dt>
//                   <dd className="mb-2"><input  onChange={fomik.handleChange} type="text"  name="UserName" className="w-full p-2 bg-transparent ring-1 ring-zinc-500 outline-none rounded-md "/></dd>
//                   <dt className="font-semibold">Password</dt>
//                   <dd className="mb-2"><input  onChange={fomik.handleChange} type="password"  name="Password" className="w-full p-2 bg-transparent ring-1 ring-zinc-500 outline-none rounded-md "/></dd>
//                   <dt className="font-semibold">Email</dt>
//                   <dd className="mb-2"><input onChange={fomik.handleChange}  type="email" name="Email" className="w-full p-2 bg-transparent ring-1 ring-zinc-500 outline-none rounded-md "/></dd>
//                   <dt className="font-semibold">Mobile</dt>
//                   <dd className="mb-2"><input  onChange={fomik.handleChange} type="text"name="Mobile" className="w-full p-2 bg-transparent ring-1 ring-zinc-500 outline-none rounded-md "/></dd>
//                 </dl>
//                   <button className="w-full mb-3 py-1 bg-gradient-to-r from-zinc-600 to-zinc-900 text-white font-semibold rounded-lg mt-2 ">Rigister</button>
//                   <div className="flex justify-between ">
//                   <Link to="/" className=" font-medium text-[15px] cursor-pointer underline text-blue-600">Home</Link>
//                   <p>Already have account? <Link to="/LoginUser" className=" font-medium text-[15px] cursor-pointer underline text-blue-600">Login</Link></p>
//                   </div>
//             </form>
//         </div>
//     </div>
//   )
// }

import axios from "axios";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { IoPersonCircle } from "react-icons/io5";

export function UserRigister() {
  const naviget = useNavigate();

  const fomik = useFormik({
    initialValues: {
      UserId: '',
      UserName: '',
      Password: '',
      Email: '',
      Mobile: ''
    },
    onSubmit: (user) => {
      axios.post('http://127.0.0.1:3030/rigister-user', user)
        .then(() => {
          alert("Rigister Successful...");
          naviget("/LoginUser");
        });
    }
  });

  return (
    <div className="w-full h-screen overflow-hidden flex flex-col">
      <nav className="backdrop-blur-md w-full h-20 flex justify-center items-center bg-white shadow-md">
        <div>
          <h1 className="text-xl font-semibold">Rigister User</h1>
        </div>
      </nav>
      <div className="w-full h-full flex justify-center  p-4 md:p-8">
        <form onSubmit={fomik.handleSubmit} className="p-4 md:p-6 backdrop-blur-sm bg-white/30 w-full max-w-md rounded-lg shadow-md">
          <h1 className="font-semibold text-xl md:text-2xl flex gap-2 items-center justify-center mb-4">
            <IoPersonCircle className="h-7 md:h-9" /> Rigister
          </h1>
          <dl>
            <dt className="font-semibold text-sm md:text-base">User Id</dt>
            <dd className="mb-2">
              <input
                onChange={fomik.handleChange}
                type="text"
                name="UserId"
                className="w-full p-2 bg-transparent ring-1 ring-zinc-500 outline-none rounded-md"
              />
            </dd>
            <dt className="font-semibold text-sm md:text-base">User Name</dt>
            <dd className="mb-2">
              <input
                onChange={fomik.handleChange}
                type="text"
                name="UserName"
                className="w-full p-2 bg-transparent ring-1 ring-zinc-500 outline-none rounded-md"
              />
            </dd>
            <dt className="font-semibold text-sm md:text-base">Password</dt>
            <dd className="mb-2">
              <input
                onChange={fomik.handleChange}
                type="password"
                name="Password"
                className="w-full p-2 bg-transparent ring-1 ring-zinc-500 outline-none rounded-md"
              />
            </dd>
            <dt className="font-semibold text-sm md:text-base">Email</dt>
            <dd className="mb-2">
              <input
                onChange={fomik.handleChange}
                type="email"
                name="Email"
                className="w-full p-2 bg-transparent ring-1 ring-zinc-500 outline-none rounded-md"
              />
            </dd>
            <dt className="font-semibold text-sm md:text-base">Mobile</dt>
            <dd className="mb-2">
              <input
                onChange={fomik.handleChange}
                type="text"
                name="Mobile"
                className="w-full p-2 bg-transparent ring-1 ring-zinc-500 outline-none rounded-md"
              />
            </dd>
          </dl>
          <button
            type="submit"
            className="w-full mb-3 py-1 bg-gradient-to-r from-zinc-600 to-zinc-900 text-white font-semibold rounded-lg mt-2"
          >
            Rigister
          </button>
          <div className="flex flex-col md:flex-row justify-between text-center md:text-left">
            <Link to="/" className="font-medium text-sm md:text-base cursor-pointer underline text-blue-600">Home</Link>
            <p className="mt-2 md:mt-0">Already have an account? <Link to="/LoginUser" className="font-medium text-sm md:text-base cursor-pointer underline text-blue-600">Login</Link></p>
          </div>
        </form>
      </div>
    </div>
  )
}
