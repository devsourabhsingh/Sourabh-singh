import axios from "axios";
import React, { useState,useEffect } from "react";
import { useNavigate,useParams } from "react-router-dom";

const EditUsers = () => {
  let navigate = useNavigate();
  const{id}=useParams();
  
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
  useEffect(()=>{
    loadUser();
  },[])
  const onSubmit =  async(e) => {
    e.preventDefault();
    console.log(user);
    await axios.put(`http://localhost:3001/users/${id}`, user).then((res)=>{
      navigate("/");
    })
   
  };
  const loadUser=async()=>{
    const result=await axios.get(`http://localhost:3001/users/${id}`)
   setUser(result.data)
   
  }
  return (
    <div className="container w-75 mx-auto  border shadow my-5 ">
      <h1 className="text-center align-items-center pt-5">Edit A User</h1>
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
      <button className="btn btn-warning mt-3 mb-5 " type="submit">
          Update A User
        </button>
      </div>
      </form>
     
    </div>
  );
};

export default EditUsers;
