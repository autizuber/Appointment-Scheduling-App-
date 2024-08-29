// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import './App.css'
// import { TodoIndex } from './Component/TodoIndex'
// import { UserRigister } from './Component/UserRigister'
// import { UserLogin } from './Component/UserLogin'
// import { UserDashbord } from './Component/User-Dashbord'
// import { AddAppointment } from './Component/AddAppointment'
// import { EditAppointment } from './Component/edit-Appointment'
// import { DeleteAppointment } from './Component/DeleteAppontment'

// function App() {
//   return (
//     <div className='w-full h-screen bg-[url("https://images.unsplash.com/photo-1650735310415-392ab5378954?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] bg-cover bg-center'>
//         <BrowserRouter>
//           <Routes>
//             <Route path='/' element={<TodoIndex/>} /> 
//             <Route path='RigisterUser' element={<UserRigister/>} />
//             <Route path='LoginUser' element={<UserLogin/>} />
//             <Route path='/dashbord' element={<UserDashbord/>} />
//             <Route path='/add-appointment' element={<AddAppointment/>} />
//             <Route path='/edit-appointment/:id' element={<EditAppointment/>} />
//             <Route path='/delete-appointment/:id' element={<DeleteAppointment/>} />
//           </Routes>
//         </BrowserRouter>
//     </div>
//   )
// }

// export default App

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { TodoIndex } from './Component/TodoIndex';
import { UserRigister } from './Component/UserRigister';
import { UserLogin } from './Component/UserLogin';
import { UserDashbord } from './Component/User-Dashbord';
import { AddAppointment } from './Component/AddAppointment';
import { EditAppointment } from './Component/edit-Appointment';
import { DeleteAppointment } from './Component/DeleteAppontment';

function App() {
  return (
    <div className="w-full h-screen bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1650735310415-392ab5378954?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TodoIndex />} />
          <Route path="RigisterUser" element={<UserRigister />} />
          <Route path="LoginUser" element={<UserLogin />} />
          <Route path="/dashbord" element={<UserDashbord />} />
          <Route path="/add-appointment" element={<AddAppointment />} />
          <Route path="/edit-appointment/:id" element={<EditAppointment />} />
          <Route path="/delete-appointment/:id" element={<DeleteAppointment />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
