import { Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import EditUser from "./components/Pages/EditUser";
import "./App.css";
import { useState } from "react";

const response = [
  { id: 1, name: "A", age: 12, class: 8 },
  { id: 2, name: "B", fatherName: "W", stream: "Science" },
  { id: 3, nickName: "AABB", class: 8, city: "Gurgaon" },
  { id: 4, name: "C", age: 12, height: "170cm" },
  { id: 5, age: 12, class: 8 },
  { id: 6, nickName: "DDAA", class: 8 },
  { id: 7, name: "E", age: 12 },
  { id: 8, nickName: "FFDD", age: 12, class: 8 },
  { id: 9, name: "G", height: "160cm", class: 8 },
  { id: 10, name: "H", stream: "Commerce", age: 17 },
];

function App() {
  const [userData, setUserData] = useState(response);

  const updateUserHandler = (updatedData) => {
    let updatedUsers = userData.map((obj) =>
      updatedData.id === obj.id ? (obj = updatedData) : null || obj
    );
    setUserData(updatedUsers);
  };
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home response={userData} />}></Route>
        <Route
          path="/user/:id"
          element={
            <EditUser updateUser={updateUserHandler} response={userData} />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
