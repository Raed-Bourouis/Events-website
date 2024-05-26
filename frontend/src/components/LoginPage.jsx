import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Input from "@mui/joy/Input";
import Divider from "@mui/joy/Divider";
import Button from "@mui/joy/Button";
import { useState, useEffect } from "react";
import "../style/Login.css";

async function LoginLogic(mail, pass) {
  let res = await fetch(`http://localhost:8000/users/`, { method: "GET" });
  let data = await res.json();
  console.log(data);
  let userAccess = 0;
  data.forEach((tempuser) => {
    if (tempuser.email == mail && tempuser.password == pass) {
      userAccess = tempuser.isAdmin ? 2 : 1;
    }
  });
  // console.log(userAccess)
  if (!userAccess) {
    toast.error("no such user");
  } else {
    toast.success("Login Success");
    //TODO
  }
}

function Login(clnm) {
  let [mail, setMail] = useState("");
  let [pass, setPass] = useState("");
  clnm= JSON.stringify(clnm).slice(9,15) + " form-container"

  return (
    <>
      <form method="post" id="login-form" className={clnm}>
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
          Log In
        </Button>
      </form>
    </>
  );
}

function SignUp(clnm) {
  let [mail, setMail] = useState("");
  let [pass, setPass] = useState("");
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [phone, setPhone] = useState("");
  clnm= JSON.stringify(clnm).slice(9,15) + " form-container"


  async function SignUpLogic(firstName, lastName, phone, mail, pass) {
    let newUser = {
      name: firstName,
      family_name: lastName,
      phone: phone,
      email: mail,
      password: pass,
    };
    let awt = await fetch("http://localhost:8000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
    let res = await awt.json();
    if (res.message) {
      toast.error(res.message);
    } else {
      toast.success("Created a new user ");
      setFirstName("");
      setLastName("");
      setPhone("");
      setMail("");
      setPass("");
    }
  }

  return (
    <>
      <form method="post" id="sign-form" className={clnm}>
        <label htmlFor="sign-fn">First Name:</label>
        <Input
          variant="soft"
          color="primary"
          id="sign-fn"
          name="sign-fn"
          type="text"
          value={firstName}
          placeholder="John"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <label htmlFor="sign-ln">Last Name:</label>
        <Input
          variant="soft"
          color="primary"
          id="sign-ln"
          name="sign-ln"
          type="text"
          value={lastName}
          placeholder="Doe"
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
        <label htmlFor="sign-phone">Phone:</label>
        <Input
          variant="soft"
          color="primary"
          id="sign-phone"
          name="sign-phone"
          type="text"
          value={phone}
          placeholder="99-999-999"
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
        <label htmlFor="sign-email">Email:</label>
        <Input
          variant="soft"
          color="primary"
          id="sign-email"
          value={mail}
          name="sign-email"
          type="email"
          placeholder="John.Doe@email.com"
          onChange={(e) => {
            setMail(e.target.value);
          }}
        />
        <label htmlFor="sign-password">Password:</label>
        <Input
          variant="soft"
          color="primary"
          value={pass}
          id="sign-password"
          name="sign-password"
          type="password"
          placeholder="********"
          onChange={(e) => {
            setPass(e.target.value);
          }}
        />
        <Button
          onClick={() => {
            SignUpLogic(firstName, lastName, phone, mail, pass);
          }}
        >
          {" "}
          Sign Up{" "}
        </Button>
      </form>
    </>
  );
}

function SwitcherText(){

  return(
    0
  )
}

function Switcher() {
  let [visible, setVisible] = useState(false);
  let isActive = visible ? "active":"hidden" 
  let isHidden = visible ? "hidden":"active" 

  return (
    <div className="switcher">
      <Button style={{height:"2.25rem"}}
        onClick={() => {
          setVisible(!visible);
        }}
      >
        Click Me
      </Button>
      
      <Divider style={{height:"100"}} orientation="vertical" />

      {visible ? <Login clnm={isActive} /> : <SignUp clnm={isHidden} />}
    </div>
  );
}

function LoginPage() {
  return (
    <div className="container">
      <ToastContainer />
      <Switcher />

      {/* <div style={{ "width": "40vw" }}>
        <Login />
      </div>
      
      <div style={{ "width": "40vw" }}>
        <SignUp />
      </div> */}
    </div>
  );
}

export default LoginPage;
