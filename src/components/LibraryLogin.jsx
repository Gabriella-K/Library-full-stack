import React, { useState } from "react";
import LibraryButton from "./LibraryButton";
import LibraryHeader from "./LibraryHeader";

function LibraryLogin() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

  const [doYouHaveAnAccount, setDoYouHaveAnAccount] = useState(true);
   function navigateBetweenLoginAndCreateAccount() {
     setDoYouHaveAnAccount( prev => !prev);
   }

   const handleLogin = () => {
    alert("You are logged in as " + userName +  " and your Password is: " + password);
  }
  return (
    <>
      {doYouHaveAnAccount ? (
        <div style={{ border: "3px solid blue", marginTop: "190px" }}>
          <label>UserName:</label>
          <input type="text" onChange={(e) => setUserName(e.target.value)} placeholder="Enter Your username" />
          <br />
          <label>Password:</label>
          <input type="password" onChange={(e) => setPassword(e.target.value)} />
          <br />
          <LibraryButton buttonLabel="LOGIN" onClickButton={handleLogin} /> <br />
          <label>New here? </label>{" "}
          <LibraryButton buttonLabel="Create Account"  onClickButton={navigateBetweenLoginAndCreateAccount} />
        </div>
      ) : (
        <div style={{ border: "3px solid indigo", marginTop: "190px" }}>
          <label>Student ID:</label>
          <input type="text" onChange={(e) => setStudentID(e.target.value)} placeholder="Enter Your Student ID" />
          <br />
          <label>Email:</label>
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
          <br />
          <label>Password:</label>
          <input type="password" onChange={(e) => setPassword(e.target.value)} />
          <br />
          <label>Confirm Password:</label>
          <input type="password" onChange={(e) => setConfirmPassword(e.target.value)} />
          <br />
          <LibraryButton buttonLabel="LOGIN" /> <br />
          <label>Already have an account?? </label>{" "}
          <LibraryButton buttonLabel="Sign In"  onClickButton={navigateBetweenLoginAndCreateAccount} />
        </div>
      )}
    </>
  );
}

export default LibraryLogin;
