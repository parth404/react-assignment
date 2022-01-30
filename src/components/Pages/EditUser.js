import { useNavigate, useParams } from "react-router-dom";
import Card from "../UI/Card";
import EditForm from "../EditForm";

const EditUser = (props) => {
  let params = useParams();
  let navigate = useNavigate();
  let userDetails = props.response.filter((user) => user.id == params.id);
  const updateUserHandler = (userData) => {
    props.updateUser(userData);
    setTimeout(function () {
      navigate("/");
    }, 3000);
  };
  return (
    <div className="my-container">
      <Card>
        <EditForm responseData={userDetails} onUpdateUser={updateUserHandler} />
      </Card>
    </div>
  );
};

export default EditUser;
