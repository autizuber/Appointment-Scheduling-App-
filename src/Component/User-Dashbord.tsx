// import { useCookies } from "react-cookie"
// import { Link, useNavigate } from "react-router-dom";
// import { BsCalendar2DateFill } from "react-icons/bs";
// import { useEffect, useState } from "react";
// import { AppontmentContract } from "../Contract/AppontmentContract";
// import axios from "axios";

// export function UserDashbord(){
//   const [cookie,setCookie,removecookie] = useCookies(['userid']);
//   let naviget = useNavigate();
//   const [appointment,setAppointment] = useState<AppontmentContract[]>();

//   useEffect(()=>{
//       axios.get(`http://127.0.0.1:3030/appointments/${cookie['userid']}`)
//       .then((response)=>{
//         setAppointment(response.data);
//       })
//   },[])

//   function handelSignout(){
//       removecookie('userid');
//       naviget("/LoginUser")
//   }

//   return(
//     <div>
//       <nav className=" backdrop-blur-md w-full h-20 flex justify-around items-center">
//           <div>
//           <h1 className="text-xl font-semibold"> {cookie['userid']}  Dashbord</h1>
//           </div>
//           <div>
//               <button onClick={handelSignout} className=" w-fit px-9 py-1 outline-none active:ring-2 ring-zinc-500 rounded-lg bg-gradient-to-r from-zinc-600 to-zinc-900 text-white ">Sign Out</button>
//           </div>
//       </nav>  
//       <section className="w-full h-[87vh] backdrop-blur-sm bg-white/30">
//            <div className="flex gap-10 px-20">
//            <div className="w-[20vw] h-full pt-10">
//               <Link to="/add-appointment" className="flex justify-center gap-1 w-full py-2 outline-none active:ring-2 ring-zinc-500 rounded-lg bg-gradient-to-r from-zinc-600 to-zinc-900 text-white"><BsCalendar2DateFill className="h-6" />Add Appointment</Link>
//             </div>
//             <div className="w-[80vw] h-full pt-10">
//               <div className="flex flex-wrap gap-3 w-full h-full">
//                     {
//                       appointment?.map(item =>
//                         <div className="w-[30vw] min-h-[10vw] bg-zinc-300 rounded-lg ring-2 px-10 py-5">
//                               <h2 className="text-xl font-semibold capitalize mb-2">{item.Title}</h2>
//                               <p className="font-medium capitalize mb-1">{item.Discription}</p>
//                               <div className="font-medium"> {item.Date.toString()}</div>
//                               <div className="mt-3">
//                                 <Link to={`/delete-appointment/${item.Appointment_Id}`} className=" px-7 py-1 bg-gradient-to-r from-red-400 to-red-700 text-white font-semibold rounded-lg active:ring-1 ring-red-600">Delet</Link>
//                                 <Link to={`/edit-appointment/${item.Appointment_Id}`} className=" mx-3 py-1 px-7 bg-gradient-to-r from-zinc-600 to-zinc-900 text-white font-semibold rounded-lg active:ring-1 ring-zinc-700">Edit</Link>
//                               </div>
//                         </div>
//                       )
//                     }
//               </div>
//             </div>
//            </div>
//       </section>
//     </div>
//   )
// }
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import { BsCalendar2DateFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { AppontmentContract } from "../Contract/AppontmentContract";
import axios from "axios";

export function UserDashbord() {
  const [cookie, setCookie, removecookie] = useCookies(['userid']);
  let naviget = useNavigate();
  const [appointment, setAppointment] = useState<AppontmentContract[]>();

  useEffect(() => {
    axios.get(`http://127.0.0.1:3030/appointments/${cookie['userid']}`)
      .then((response) => {
        setAppointment(response.data);
      });
  }, [cookie]);

  function handelSignout() {
    removecookie('userid');
    naviget("/LoginUser");
  }

  return (
    <div className="w-full h-screen flex flex-col">
      <nav className="bg-gray-800 w-full h-16 md:h-20 flex justify-between items-center px-4 md:px-8">
        <div>
          <h1 className="text-lg md:text-xl font-semibold text-white">{cookie['userid']} Dashboard</h1>
        </div>
        <div>
          <button onClick={handelSignout} className="px-4 md:px-9 py-1 outline-none active:ring-2 ring-zinc-500 rounded-lg bg-gradient-to-r from-zinc-600 to-zinc-900 text-white text-sm md:text-base">
            Sign Out
          </button>
        </div>
      </nav>
      <section className="w-full h-full flex-1 bg-white/30 backdrop-blur-sm">
        <div className="flex flex-col md:flex-row gap-4 md:gap-10 p-4 md:p-8">
          <div className="w-full md:w-[20vw] h-auto md:h-full pt-4 md:pt-10">
            <Link to="/add-appointment" className="flex items-center justify-center gap-2 w-full py-2 outline-none active:ring-2 ring-zinc-500 rounded-lg bg-gradient-to-r from-zinc-600 to-zinc-900 text-white text-sm md:text-base">
              <BsCalendar2DateFill className="h-5 md:h-6" />
              Add Appointment
            </Link>
          </div>
          <div className="w-full md:w-[80vw] h-auto md:h-full pt-4 md:pt-10">
            <div className="flex flex-wrap gap-4 md:gap-3">
              {
                appointment?.map(item => (
                  <div key={item.Appointment_Id} className="w-full md:w-[30vw] min-h-[10vw] bg-zinc-300 rounded-lg ring-2 px-4 md:px-10 py-4 md:py-5">
                    <h2 className="text-lg md:text-xl font-semibold capitalize mb-2">{item.Title}</h2>
                    <p className="font-medium capitalize mb-1">{item.Discription}</p>
                    <div className="font-medium">{new Date(item.Date).toLocaleDateString()}</div>
                    <div className="mt-2 md:mt-3 flex flex-wrap gap-2">
                      <Link to={`/delete-appointment/${item.Appointment_Id}`} className="px-4 py-1 bg-gradient-to-r from-red-400 to-red-700 text-white font-semibold rounded-lg active:ring-1 ring-red-600 text-xs md:text-sm">
                        Delete
                      </Link>
                      <Link to={`/edit-appointment/${item.Appointment_Id}`} className="px-4 py-1 bg-gradient-to-r from-zinc-600 to-zinc-900 text-white font-semibold rounded-lg active:ring-1 ring-zinc-700 text-xs md:text-sm">
                        Edit
                      </Link>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
