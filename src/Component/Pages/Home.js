import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [users, setUser] = useState([]);
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const result = await axios
      .get("http://localhost:3001/users")
      .then((res) => {
        setUser(res.data);
      });
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3001/users/${id}`).then(() => {
      loadUser();
    });
  };
  return (
    <>
      <div className="container">
        <div className="py-4">
          <h1>Home Page</h1>
          <table class="table border shadow ">
            <thead class=" table-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">UserName</th>
                <th scope="col">Email</th>
                <th scope="col">Address</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((currElem) => {
                const { id, name, username, email, address } = currElem;

                return (
                  <tr>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{username}</td>
                    <td>{email}</td>
                    <td>{address?.city}</td>
                    <td className="">
                      <Link class="btn btn-primary mx-1 " to={`/users/user/${id}`}>view</Link>
                      <Link
                        class="btn btn-outline-primary mx-1"
                        to={`/users/edit/${id}`}
                      >
                        Edit
                      </Link>
                      <Link
                        class="btn btn-danger mx-2"
                        onClick={() => deleteUser(id)}
                      >
                        Delete
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Home;
