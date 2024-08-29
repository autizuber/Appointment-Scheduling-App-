// import axios from "axios";
// import { useFormik } from "formik"
// import { useCookies } from "react-cookie"
// import { Link, useNavigate } from "react-router-dom"

// export function AddAppointment(){

//   const [cookie,setCookie,removecookie] = useCookies(['userid']);
//   let naviget = useNavigate();

//   const fomik = useFormik({
//     initialValues : {
//       Appointment_Id:0,
//       Title : '',
//       Discription:'',
//       Date:'',
//       UserId : cookie['userid']
//     },
//     onSubmit : (appointment)=>{
//         axios.post("http://127.0.0.1:3030/add-appointments",appointment)
//         .then(()=>{
//           alert("Appointment added Success....");
//           naviget("/dashbord");
//         })
//     }
//   })

//   return(
//     <div className="w-full h-screen overflow-hidden">
//          <nav className=" backdrop-blur-md w-full h-20 flex justify-center items-center">
//           <div>
//           <h1 className="text-xl font-semibold">Add Appointment</h1>
//           </div>
//        </nav> 
//        <div className="w-full h-full flex justify-center items-center gap-5 -mt-10">
//             <form onSubmit={fomik.handleSubmit} className="p-5 backdrop-blur-sm bg-white/30 w-[30vw] rounded-lg shadow-md">
//                 <h1 className=" font-semibold text-2xl flex gap-1 justify-center mb-3">Add Appointment</h1>
//                 <dl>
//                   <dt className="font-semibold">Appointment Id</dt>
//                   <dd className="mb-2"><input onChange={fomik.handleChange} type="number" name="Appointment_Id" className="w-full p-2 bg-transparent ring-1 ring-zinc-500 outline-none rounded-md "/></dd>
//                   <dt className="font-semibold">Title</dt>
//                   <dd className="mb-2"><input onChange={fomik.handleChange}  type="text" name="Title" className="w-full p-2 bg-transparent ring-1 ring-zinc-500 outline-none rounded-md "/></dd>
//                   <dt className="font-semibold">Title</dt>
//                   <dd className="mb-2"><textarea onChange={fomik.handleChange} rows={4} cols={10} name="Discription" className="w-full p-2 bg-transparent ring-1 ring-zinc-500 outline-none rounded-md "/></dd>
//                   <dt className="font-semibold">Date</dt>
//                   <dd className="mb-2"><input onChange={fomik.handleChange}  type="date" name="Date" className="w-full p-2 bg-transparent ring-1 ring-zinc-500 outline-none rounded-md "/></dd>
//                 </dl>
//                   <button type="submit" className="w-full mb-3 py-1 bg-gradient-to-r from-zinc-600 to-zinc-900 text-white font-semibold rounded-lg mt-2 ">Add</button>
//                   <div>
//                   <Link to="/dashbord" className=" font-medium text-[15px] cursor-pointer underline text-blue-600">Dashbord</Link>
//                   </div>
//             </form>
//         </div>
//     </div>
//   )
// }

import axios from "axios";
import { useFormik } from "formik";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";

export function AddAppointment() {
  const [cookie, setCookie, removecookie] = useCookies(['userid']);
  let naviget = useNavigate();

  const fomik = useFormik({
    initialValues: {
      Appointment_Id: 0,
      Title: '',
      Discription: '',
      Date: '',
      UserId: cookie['userid']
    },
    onSubmit: (appointment) => {
      axios.post("http://127.0.0.1:3030/add-appointments", appointment)
        .then(() => {
          alert("Appointment added Success....");
          naviget("/dashbord");
        });
    }
  });

  return (
    <div className="w-full h-screen overflow-hidden flex flex-col">
      <nav className="backdrop-blur-md w-full h-20 flex justify-center items-center bg-white/30 shadow-md">
        <div>
          <h1 className="text-xl font-semibold">Add Appointment</h1>
        </div>
      </nav>
      <div className="w-full h-full flex justify-center items-center p-4 md:p-8">
        <form onSubmit={fomik.handleSubmit} className="p-4 md:p-6 backdrop-blur-sm bg-white/30 w-full max-w-md md:max-w-lg lg:max-w-xl rounded-lg shadow-md">
          <h1 className="font-semibold text-xl md:text-2xl flex gap-1 justify-center mb-3">Add Appointment</h1>
          <dl>
            <dt className="font-semibold text-sm md:text-base">Appointment Id</dt>
            <dd className="mb-2">
              <input onChange={fomik.handleChange} type="number" name="Appointment_Id" className="w-full p-2 bg-transparent ring-1 ring-zinc-500 outline-none rounded-md" />
            </dd>
            <dt className="font-semibold text-sm md:text-base">Title</dt>
            <dd className="mb-2">
              <input onChange={fomik.handleChange} type="text" name="Title" className="w-full p-2 bg-transparent ring-1 ring-zinc-500 outline-none rounded-md" />
            </dd>
            <dt className="font-semibold text-sm md:text-base">Description</dt>
            <dd className="mb-2">
              <textarea onChange={fomik.handleChange} rows={4} cols={10} name="Discription" className="w-full p-2 bg-transparent ring-1 ring-zinc-500 outline-none rounded-md" />
            </dd>
            <dt className="font-semibold text-sm md:text-base">Date</dt>
            <dd className="mb-2">
              <input onChange={fomik.handleChange} type="date" name="Date" className="w-full p-2 bg-transparent ring-1 ring-zinc-500 outline-none rounded-md" />
            </dd>
          </dl>
          <button type="submit" className="w-full mb-3 py-1 bg-gradient-to-r from-zinc-600 to-zinc-900 text-white font-semibold rounded-lg mt-2">Add</button>
          <div className="text-center">
            <Link to="/dashbord" className="font-medium text-xs md:text-sm cursor-pointer underline text-blue-600">Dashbord</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
