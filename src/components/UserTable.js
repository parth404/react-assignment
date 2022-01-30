import "./UserTable.css";
import Card from "./UI/Card";
import { Link } from "react-router-dom";

const UserTable = (props) => {
  return (
    <div className="my-container">
      <Card className="table-container">
        <table className="mytable">
          <thead>
            <tr>
              {props.columns.map((col, i) => {
                return <th key={i}>{col}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {props.users.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                  <td>{user.class}</td>
                  <td>{user.fatherName}</td>
                  <td>{user.stream}</td>
                  <td>{user.nickName}</td>
                  <td>{user.city}</td>
                  <td>{user.height}</td>
                  <td>
                    <Link className="edit-button" to={`/user/${user.id}`}>
                      edit
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default UserTable;
