import React from "react";
import styled from "styled-components";
import { auth, provider } from "../@firebase/firebase";
import { signInWithPopup } from "firebase/auth";
function Login() {
  const loginUser = async () => {
    try {
      const user = await signInWithPopup(auth, provider);
      console.log(user);
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <StyledLogin>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/2048px-Slack_icon_2019.svg.png"
        alt="slack-logo"
      />
      <button onClick={loginUser}>Login..</button>
    </StyledLogin>
  );
}
const StyledLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  flex-direction: column;
  > img {
    width: 20%;
    object-fit: cover;
    margin-bottom: 20px;
  }
  > button {
    background: #00ba7b;
    color: white;
    cursor: pointer;
    outline: none;
    border: none;
    font-size: 15px;
    padding: 0.5rem 1rem;
    :hover {
      opacity: 0.8;
    }
  }
`;
export default Login;
