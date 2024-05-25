import Input from "@mui/joy/Input"
import port from "../../../backend/index"
import Divider from '@mui/joy/Divider'
import Button from '@mui/joy/Button';
import { useState, useEffect } from "react";
import "../style/Login.css"


function Login() {

  return (
    <>
      <form method="post" id="login-form">
        <label htmlFor="login-email">Email:</label>
        <Input variant="soft" color="primary" id="login-email" name="login-email" type='email' placeholder='John.Doe@email.com' />
        <label htmlFor="login-email">Password:</label>
        <Input variant="soft" color="primary" id="login-password" name="login-password" type='password' placeholder='********' />
        <Button onClick={() => { }}> Log In </Button>

      </form>
    </>
  )

}

async function LoginLogic(){
  let res=await fetch(`http://localhost:${port}/blogs/`)
  

}

function SignUp() {

  return (
    <>
      <form method="post" id="sign-form">
        <label>First Name:</label>
        <Input variant="soft" color="primary" id="login" name="login-fn" type='text' placeholder='John' />
        <label>Last Name:</label>
        <Input variant="soft" color="primary" id="login" name="login-ln" type='text' placeholder='Doe' />
        <label>Phone:</label>
        <Input variant="soft" color="primary" id="login" name="login-fn" type='text' placeholder='99-999-999' />
        <label htmlFor="login-email">Email:</label>
        <Input variant="soft" color="primary" id="login" name="login-email" type='email' placeholder='John.Doe@email.com' />
        <label htmlFor="login-email">Password:</label>
        <Input variant="soft" color="primary" id="login" name="login-password" type='password' placeholder='********' />
        <Button onClick={() => { }}> Log In </Button>

      </form>
    </>
  )

}

function Switcher() {
  let [visible, setVisible] = useState(false)
  return (
    <div>
      <Button onClick={() => { setVisible(!visible) }}>Click Me</Button>
      {visible ? <Login /> : <SignUp />}
    </div>
  )
}

function LoginPage() {

  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "25px" }}>
      <Switcher />





      {/* <div style={{ "width": "40vw" }}>
        <Login />
      </div>
      <Divider orientation="vertical" />
      <div style={{ "width": "40vw" }}>
        <SignUp />
      </div> */}


    </div>
  )

}



export default LoginPage
