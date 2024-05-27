import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import Button from '@mui/joy/Button'
import { Link } from "react-router-dom";

export default function UsersList() {
  const [user, setuser] = useState([]);
  const [loading, setLoading] = useState(true);

  async function deleteUser(id) {
    try {
      let aux = await fetch("http://localhost:8000/users/" + id, {
        method: "GET",
      });
      let user = await aux.json();

      if (!user.isAdmin) {
        let res = await fetch("http://localhost:8000/users/" + id, {
          method: "DELETE",
        });
        let data = await res.json();
        toast.success("deleted element ! sahit");
        console.log(data);
        setLoading(true);
      } else {
        toast.warning("cant delete admin");
      }
    } catch (e) {
      toast.error("error while deleting");
      console.log(e);
    }
  }

  useEffect(() => {
    async function fetchUser() {
      let awt = await fetch("http://localhost:8000/users");
      let res = await awt.json();
      console.log(res);
      setuser(res);
    }
    if (loading) {
      fetchUser();
      setLoading(false);
    }
  }, [loading]);

  return (
    <div>
      <ToastContainer />
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>name</th>
            <th>family_name</th>
            <th>email</th>
            <th>password</th>
            <th>reservations</th>
            <th>phone</th>
            <th>isAdmin</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {user?.length == 0
            ? "No user"
            : user?.map((user) => (
                <tr key={user._id}>
                  <td>{user._id}</td>
                  <td>{user.name}</td>
                  <td>{user.family_name}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                  <td>{user.reservations}</td>
                  <td>{user.phone}</td>
                  <td>{user.isAdmin?"true":"false"}</td>
                  <td>
                    <button
                      onClick={() => deleteUser(user._id)}
                      style={{ background: "red" }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
      <Link to="/events"><Button>See Events</Button></Link>
    </div>
  );
}
