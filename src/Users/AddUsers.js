import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddUsers = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  const { name, username, email, phone, website } = user;
  const InputEvent = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };
  const onSubmit =  async(e) => {
    e.preventDefault();
    console.log(user);
    await axios.post("http://localhost:3001/users", user).then((res)=>{
      navigate("/");
    })
   
  };
  return (
    <div className="container w-75 mx-auto  border shadow my-5 ">
      <h1 className="text-center align-items-center pt-5">Add A User</h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label for="exampleInputEmail1"></label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter your name"
            aria-describedby="emailHelp"
            name="name"
            value={name}
            onChange={InputEvent}
          />
          <label for="exampleInputEmail1"></label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter your UserName"
            aria-describedby="emailHelp"
            name="username"
            value={username}
            onChange={InputEvent}
          />
          <label for="exampleInputEmail1"></label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter your E-mail-address"
            aria-describedby="emailHelp"
            name="email"
            value={email}
            onChange={InputEvent}
          />
          <label for="exampleInputEmail1"></label>
          <input
            type="number"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter your phone number"
            aria-describedby="emailHelp"
            name="phone"
            value={phone}
            onChange={InputEvent}
          />
          <label for="exampleInputEmail1"></label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter  your Website Name"
            aria-describedby="emailHelp"
            name="website"
            value={website}
            onChange={InputEvent}
          />
        </div>
        <div className="d-grid gap-2">
      <button className="btn btn-primary mt-3 mb-5 " type="submit">
          Button
        </button>
      </div>
      </form>
     
    </div>  
  );
};

export default AddUsers;
