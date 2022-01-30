import { useState } from "react";
import UserTable from "../UserTable";



const Home = (props) => {
  const [userData, setUserData] = useState(props.response);
  let columnData = [
    "name",
    "age",
    "class",
    "father-name",
    "stream",
    "nick-name",
    "city",
    "height",
    "actions",
  ];

  return <UserTable users={userData} columns={columnData} />;
};

export default Home;
