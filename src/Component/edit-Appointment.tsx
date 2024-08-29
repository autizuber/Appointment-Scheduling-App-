// import { useEffect, useState } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import { AppontmentContract } from "../Contract/AppontmentContract";
// import { useCookies } from "react-cookie";
// import axios from "axios";
// import { useFormik } from "formik";

// export function EditAppointment(){

//   let naviget = useNavigate();

//   const [appointment,setAppointment] = useState<AppontmentContract[]>([{Appointment_Id:0,Title:'',Discription:'',Date:new Date(),UserId:'',}])

//   const [cookie,setCookie,removecookie] = useCookies(['userid']);

//   const param = useParams();

//   useEffect(()=>{
//     axios.get(`http://127.0.0.1:3030/get-appointments/${param.id}`)
//     .then((response)=>{
//       setAppointment(response.data);
//     })
//   },[appointment])

//   const fomik = useFormik({
//     initialValues : {
//       Appointment_Id:appointment[0].Appointment_Id,
//       Title : appointment[0].Title,
//       Discription:appointment[0].Discription,
//       Date:appointment[0].Date,
//       UserId : cookie['userid']
//     },
//     onSubmit : (value)=>{
//         axios.put(`http://127.0.0.1:3030/edit-appointments/${param.id}`,value)
//         .then(()=>{
//           alert("Appointment Edit Successfuly...");
//           naviget('/dashbord')
//         })
//     },
//     enableReinitialize : true
//   })


//   return(
//     <div className="w-full h-screen overflow-hidden">
//          <nav className=" backdrop-blur-md w-full h-20 flex justify-center items-center">
//           <div>
//           <h1 className="text-xl font-semibold">Edit Appointment</h1>
//           </div>
//        </nav> 
//        <div className="w-full h-full flex justify-center items-center gap-5 -mt-10">
//             <form onSubmit={fomik.handleSubmit}  className="p-5 backdrop-blur-sm bg-white/30 w-[30vw] rounded-lg shadow-md">
//                 <h1 className=" font-semibold text-2xl flex gap-1 justify-center mb-3">Edit Appointment</h1>
//                 <dl>
//                   <dt className="font-semibold">Appointment Id</dt>
//                   <dd className="mb-2"><input onChange={fomik.handleChange} value={fomik.values.Appointment_Id}  type="number" name="Appointment_Id" className="w-full p-2 bg-transparent ring-1 ring-zinc-500 outline-none rounded-md "/></dd>
//                   <dt className="font-semibold">Title</dt>
//                   <dd className="mb-2"><input onChange={fomik.handleChange} value={fomik.values.Title}  type="text" name="Title" className="w-full p-2 bg-transparent ring-1 ring-zinc-500 outline-none rounded-md "/></dd>
//                   <dt className="font-semibold">Discription</dt>
//                   <dd className="mb-2"><textarea onChange={fomik.handleChange}  value={fomik.values.Discription} rows={4} cols={10} name="Discription" className="w-full p-2 bg-transparent ring-1 ring-zinc-500 outline-none rounded-md "/></dd>
//                   <dt className="font-semibold">Date</dt>
//                   <dd className="mb-2"><input onChange={fomik.handleChange} value={fomik.values.Date.toString().slice(0,appointment[0].Date.toString().indexOf('T'))} type="date" name="Date" className="w-full p-2 bg-transparent ring-1 ring-zinc-500 outline-none rounded-md "/></dd>
//                 </dl>
//                   <button type="submit" className="w-full mb-3 py-1 bg-gradient-to-r from-zinc-600 to-zinc-900 text-white font-semibold rounded-lg mt-2 ">Save</button>
//                   <div>
//                   <Link to="/dashbord" className=" font-medium text-[15px] cursor-pointer underline text-blue-600">Cancle</Link>
//                   </div>
                  
//             </form>
//         </div>
//     </div>
//   )
// }

import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AppontmentContract } from "../Contract/AppontmentContract";
import { useCookies } from "react-cookie";
import axios from "axios";
import { useFormik } from "formik";

export function EditAppointment() {
  let naviget = useNavigate();

  const [appointment, setAppointment] = useState<AppontmentContract[]>([{ Appointment_Id: 0, Title: '', Discription: '', Date: new Date(), UserId: '' }]);
  const [cookie, setCookie, removecookie] = useCookies(['userid']);
  const param = useParams();

  useEffect(() => {
    axios.get(`http://127.0.0.1:3030/get-appointments/${param.id}`)
      .then((response) => {
        setAppointment(response.data);
      });
  }, [param.id]);

  const fomik = useFormik({
    initialValues: {
      Appointment_Id: appointment[0].Appointment_Id,
      Title: appointment[0].Title,
      Discription: appointment[0].Discription,
      Date: appointment[0].Date,
      UserId: cookie['userid']
    },
    onSubmit: (value) => {
      axios.put(`http://127.0.0.1:3030/edit-appointments/${param.id}`, value)
        .then(() => {
          alert("Appointment Edit Successfuly...");
          naviget('/dashbord');
        });
    },
    enableReinitialize: true
  });

  return (
    <div className="w-full h-screen overflow-hidden flex flex-col">
      <nav className="backdrop-blur-md w-full py-2 h-20 flex justify-center items-center bg-white/30 shadow-md">
        <div>
          <h1 className="text-xl font-semibold">Edit Appointment</h1>
        </div>
      </nav>
      <div className="w-full h-full flex justify-center items-center p-4 md:p-8">
        <form onSubmit={fomik.handleSubmit} className="p-4 md:p-6 backdrop-blur-sm bg-white/30 w-full max-w-md md:max-w-lg lg:max-w-xl rounded-lg shadow-md">
          <h1 className="font-semibold text-xl md:text-2xl flex gap-1 justify-center mb-3">Edit Appointment</h1>
          <dl>
            <dt className="font-semibold text-sm md:text-base">Appointment Id</dt>
            <dd className="mb-2">
              <input
                onChange={fomik.handleChange}
                value={fomik.values.Appointment_Id}
                type="number"
                name="Appointment_Id"
                className="w-full p-2 bg-transparent ring-1 ring-zinc-500 outline-none rounded-md"
              />
            </dd>
            <dt className="font-semibold text-sm md:text-base">Title</dt>
            <dd className="mb-2">
              <input
                onChange={fomik.handleChange}
                value={fomik.values.Title}
                type="text"
                name="Title"
                className="w-full p-2 bg-transparent ring-1 ring-zinc-500 outline-none rounded-md"
              />
            </dd>
            <dt className="font-semibold text-sm md:text-base">Description</dt>
            <dd className="mb-2">
              <textarea
                onChange={fomik.handleChange}
                value={fomik.values.Discription}
                rows={4}
                cols={10}
                name="Discription"
                className="w-full p-2 bg-transparent ring-1 ring-zinc-500 outline-none rounded-md"
              />
            </dd>
            <dt className="font-semibold text-sm md:text-base">Date</dt>
            <dd className="mb-2">
              <input
                onChange={fomik.handleChange}
                value={fomik.values.Date.toString().slice(0, fomik.values.Date.toString().indexOf('T'))}
                type="date"
                name="Date"
                className="w-full p-2 bg-transparent ring-1 ring-zinc-500 outline-none rounded-md"
              />
            </dd>
          </dl>
          <button
            type="submit"
            className="w-full mb-3 py-1 bg-gradient-to-r from-zinc-600 to-zinc-900 text-white font-semibold rounded-lg mt-2"
          >
            Save
          </button>
          <div className="text-center">
            <Link to="/dashbord" className="font-medium text-xs md:text-sm cursor-pointer underline text-blue-600">Cancel</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
