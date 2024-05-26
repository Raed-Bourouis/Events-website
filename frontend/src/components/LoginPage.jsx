import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Input from "@mui/joy/Input";
import Divider from "@mui/joy/Divider";
import Button from "@mui/joy/Button";
import { useState, useEffect } from "react";
import "../style/Login.css";

async function LoginLogic(mail, pass) {
  let res = await fetch(`http://localhost:8000/users/`, { method: "GET" });
  let data = await res.json();
  console.log(data);
  let userAccess =0
  data.forEach((tempuser) => {
    if (tempuser.email == mail && tempuser.password == pass) {
      userAccess = tempuser.isAdmin ? 2 : 1;
    }
  });
  // console.log(userAccess)
  if(!userAccess){
    toast.error("no such user")
  }
  else{
    //TODO
  }
}

function Login() {
  let [mail, setMail] = useState("");
  let [pass, setPass] = useState("");

  return (
    <>
      <form method="post" id="login-form">
        <label htmlFor="login-email">Email:</label>
        <Input
          variant="soft"
          color="primary"
          id="login-email"
          name="login-email"
          type="email"
          placeholder="John.Doe@email.com"
          onChange={(e) => {
            setMail(e.target.value);
          }}
        />
        <label htmlFor="login-email">Password:</label>
        <Input
          variant="soft"
          color="primary"
          id="login-password"
          name="login-password"
          type="password"
          placeholder="********"
          onChange={(e) => {
            setPass(e.target.value);
          }}
        />
        <Button
          onClick={() => {
            LoginLogic(mail, pass);
          }}
        >
          {" "}
          Log In{" "}
        </Button>
      </form>
    </>
  );
}

function SignUp() {
  return (
    <>
      <form method="post" id="sign-form">
        <label>First Name:</label>
        <Input
          variant="soft"
          color="primary"
          id="login"
          name="login-fn"
          type="text"
          placeholder="John"
        />
        <label>Last Name:</label>
        <Input
          variant="soft"
          color="primary"
          id="login"
          name="login-ln"
          type="text"
          placeholder="Doe"
        />
        <label>Phone:</label>
        <Input
          variant="soft"
          color="primary"
          id="login"
          name="login-fn"
          type="text"
          placeholder="99-999-999"
        />
        <label htmlFor="login-email">Email:</label>
        <Input
          variant="soft"
          color="primary"
          id="login"
          name="login-email"
          type="email"
          placeholder="John.Doe@email.com"
        />
        <label htmlFor="login-email">Password:</label>
        <Input
          variant="soft"
          color="primary"
          id="login"
          name="login-password"
          type="password"
          placeholder="********"
        />
        <Button onClick={() => {}}> Log In </Button>
      </form>
    </>
  );
}

function Switcher() {
  let [visible, setVisible] = useState(false);
  return (
    <div>
      <Button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        Click Me
      </Button>
      {visible ? <Login /> : <SignUp />}
    </div>
  );
}

function LoginPage() {
  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "25px" }}>
      <ToastContainer/>
      <Switcher />

      {/* <div style={{ "width": "40vw" }}>
        <Login />
      </div>
      <Divider orientation="vertical" />
      <div style={{ "width": "40vw" }}>
        <SignUp />
      </div> */}
    </div>
  );
}

export default LoginPage;
