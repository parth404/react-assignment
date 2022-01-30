import { useState } from "react";
import Modal from "./UI/Modal";

import "./EditForm.css";

const EditForm = (props) => {
  let [userData] = props.responseData;
  const [user, setUSer] = useState(userData);
  const [showModal, setShowModal] = useState(false);
  let keys = Object.keys(user);
  const inputChangeHandler = (event) => {
    setUSer({ ...user, [event.target.name]: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const editedData = {
      ...user,
    };
    props.onUpdateUser(editedData);
    setShowModal(true);
  };

  return (
    <div>
      <form>
        <div className="edit-form">
          {keys.includes("name") && (
            <div className="edit-form__control">
              <label>Name</label>
              <input
                name="name"
                value={user.name}
                onChange={inputChangeHandler}
                type="text"
              />
            </div>
          )}
          {keys.includes("fatherName") && (
            <div className="edit-form__control">
              <label>Father's name</label>
              <input
                name="fatherName"
                value={user.fatherName}
                onChange={inputChangeHandler}
                type="text"
              />
            </div>
          )}
          {keys.includes("nickName") && (
            <div className="edit-form__control">
              <label>Nick name</label>
              <input
                name="nickName"
                value={user.nickName}
                onChange={inputChangeHandler}
                type="text"
              />
            </div>
          )}
          {keys.includes("age") && (
            <div className="edit-form__control">
              <label>Age</label>
              <input
                name="age"
                value={user.age}
                onChange={inputChangeHandler}
                type="number"
                min="0"
                step="1"
              />
            </div>
          )}
          {keys.includes("class") && (
            <div className="edit-form__control">
              <label>Class</label>
              <input
                name="class"
                value={user.class}
                onChange={inputChangeHandler}
                type="number"
                min="1"
                max="12"
                step="1"
              />
            </div>
          )}
          {keys.includes("stream") && (
            <div className="edit-form__control">
              <label>Stream</label>
              <input
                name="stream"
                value={user.stream}
                onChange={inputChangeHandler}
                type="text"
              />
            </div>
          )}
          {keys.includes("city") && (
            <div className="edit-form__control">
              <label>City</label>
              <input
                name="city"
                value={user.city}
                onChange={inputChangeHandler}
                type="text"
              />
            </div>
          )}
          {keys.includes("height") && (
            <div className="edit-form__control">
              <label>Height</label>
              <input
                name="height"
                value={user.height}
                onChange={inputChangeHandler}
                type="text"
              />
            </div>
          )}
        </div>
        <div className="edit-form__actions">
          <button type="submit" onClick={submitHandler}>
            update details
          </button>
        </div>
      </form>
      {showModal && <Modal title="success" message="Loading..." />}
    </div>
  );
};

export default EditForm;
