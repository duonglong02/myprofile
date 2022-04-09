import React from "react";
import './App.css';
import UserProfile from './views/Profile/UserProfile.jsx'

function App() {
  return (
    <UserProfile />
  );
}

export default App;

// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import UserProfile from './views/Profile/UserProfile';
// import { ROOT_PATH } from "./Constraint";

// function App() {

//   return (
//     <>
//       <Routes>
//         <Route path={ROOT_PATH} element={<UserProfile />} />
//       </Routes>
//     </>
//   );
// }

// export default App;

