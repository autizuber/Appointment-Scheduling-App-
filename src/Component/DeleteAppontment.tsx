// import { useEffect, useState } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import { AppontmentContract } from "../Contract/AppontmentContract";
// import axios from "axios";

// export function DeleteAppointment(){

//   const [appointment,setAppointment] = useState<AppontmentContract[]>([{Appointment_Id:0,Title:'',Discription:'',Date:new Date(),UserId:'',}])

//   let naviget = useNavigate();
//   let param = useParams();

//   useEffect(()=>{
//     axios.get(`http://127.0.0.1:3030/get-appointments/${param.id}`)
//     .then((response)=>{
//         setAppointment(response.data);
//     })
//   },[])

//   function handelDeleteClick(){
//      axios.delete(`http://127.0.0.1:3030/delete-appointment/${param.id}`)
//      .then(()=>{
//         naviget("/dashbord")
//      })
//   } 

//   return(
//     <div className="w-full h-screen overflow-hidden">
//          <nav className=" backdrop-blur-md w-full h-20 flex justify-center items-center">
//           <div>
//           <h1 className="text-xl font-semibold">Delete Appointment</h1>
//           </div>
//        </nav> 
//        <div className="w-full h-full flex justify-center items-center gap-5 -mt-10">
//             <div className="p-5 backdrop-blur-sm bg-white/30 w-[30vw] rounded-lg shadow-md">
//                 <h1 className=" font-semibold text-2xl flex gap-1 justify-center mb-3">Delete Appointment</h1>
//                   <div className="mt-5 px-5">
//                     <dl className="py-5">
//                       <dt className="mb-1 text-[17px] font-semibold">Title</dt>
//                       <dd className="mb-3 text-[17px] font-semibold">{appointment[0].Title}</dd>
//                       <dt className="mb-1 text-[17px] font-semibold">Discripition</dt>
//                       <dd className="mb-2 text-[17px] font-semibold">{appointment[0].Discription}</dd>
//                     </dl>
//                     <div>
//                       <p className="text-sm font-medium mb-5">Are You Shure Fore Deleting</p>
//                       <button onClick={handelDeleteClick} className="bg-gradient-to-r from-red-400 to-red-700 text-white font-semibold rounded-lg active:ring-1 ring-red-600 px-6">Yes</button>
//                       <Link to="/dashbord" className="bg-gradient-to-r from-zinc-600 to-zinc-900 text-white font-semibold rounded-lg active:ring-1 ring-zinc-700 px-6 mx-4">No</Link>
//                     </div>
//                   </div>
//             </div>
//         </div>
//     </div>
//   )
// }

import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AppontmentContract } from "../Contract/AppontmentContract";
import axios from "axios";

export function DeleteAppointment() {
  const [appointment, setAppointment] = useState<AppontmentContract[]>([{
    Appointment_Id: 0,
    Title: '',
    Discription: '',
    Date: new Date(),
    UserId: '',
  }]);

  let naviget = useNavigate();
  let param = useParams();

  useEffect(() => {
    axios.get(`http://127.0.0.1:3030/get-appointments/${param.id}`)
      .then((response) => {
        setAppointment(response.data);
      });
  }, [param.id]);

  function handleDeleteClick() {
    axios.delete(`http://127.0.0.1:3030/delete-appointment/${param.id}`)
      .then(() => {
        naviget("/dashbord");
      });
  }

  return (
    <div className="w-full h-screen overflow-hidden flex flex-col">
      <nav className="backdrop-blur-md w-full h-20 flex justify-center items-center bg-white shadow-md">
        <div>
          <h1 className="text-xl font-semibold">Delete Appointment</h1>
        </div>
      </nav>
      <div className="w-full h-full flex justify-center items-center p-4 md:p-8">
        <div className="p-4 md:p-6 backdrop-blur-sm bg-white/30 w-full max-w-md md:max-w-lg lg:max-w-xl rounded-lg shadow-md">
          <h1 className="font-semibold text-xl md:text-2xl flex gap-1 justify-center mb-4">Delete Appointment</h1>
          <div className="px-4 md:px-6">
            <dl className="py-4">
              <dt className="mb-1 text-sm md:text-base font-semibold">Title</dt>
              <dd className="mb-3 text-sm md:text-base font-semibold">{appointment[0].Title}</dd>
              <dt className="mb-1 text-sm md:text-base font-semibold">Description</dt>
              <dd className="mb-2 text-sm md:text-base font-semibold">{appointment[0].Discription}</dd>
            </dl>
            <div className="flex flex-col gap-4 md:flex-row md:gap-6">
              <p className="text-xs md:text-sm font-medium mb-4 md:mb-0">Are you sure you want to delete?</p>
              <div className="flex flex-col md:flex-row gap-4">
                <button onClick={handleDeleteClick} className="bg-gradient-to-r from-red-400 to-red-700 text-white font-semibold rounded-lg active:ring-1 ring-red-600 px-4 md:px-6 py-2 md:py-3 w-full md:w-auto text-center">Yes</button>
                <Link to="/dashbord" className="bg-gradient-to-r from-zinc-600 to-zinc-900 text-white font-semibold rounded-lg active:ring-1 ring-zinc-700 px-4 md:px-6 py-2 md:py-3 w-full md:w-auto text-center">No</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
