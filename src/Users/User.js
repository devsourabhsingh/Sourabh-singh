import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const User = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });
  const { name, username, email, phone, website } = user;
  useEffect(() => {
    loadUser();
  }, []);
  const { id } = useParams();
  const loadUser = async () => {
    await axios.get(`http://localhost:3001/users/${id}`).then((res) => {
      setUser(res.data);
    });
  };
  return (
    <div className="container">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">User Id:{id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">name:{name}</li>
        <li className="list-group-item">Username:{username}</li>
        <li className="list-group-item">Email:{email}</li>
        <li className="list-group-item">phone:{phone}</li>
        <li className="list-group-item">Website:{website}</li>
      </ul>
    </div>
  );
};

export default User;
