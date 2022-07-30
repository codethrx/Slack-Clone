import React from "react";
import styled from "styled-components";
import { Avatar } from "@mui/material";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { auth } from "../@firebase/firebase";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
function Header() {
  const [user] = useAuthState(auth);
  return (
    <HeaderContainer>
      {/* HeaderLeft
    HeaderMid
    HeaderRight */}
      <HeaderLeft>
        <HeaderAvatar
          src={user?.photoURL}
          onClick={async () => {
            await signOut(auth);
          }}
        />
        <AccessTimeFilledIcon />
      </HeaderLeft>
      <HeaderMid>
        <SearchIcon />
        <input placeholder="Search..." />
      </HeaderMid>
      <HeaderRight>
        <HelpOutlineIcon />
      </HeaderRight>
    </HeaderContainer>
  );
}
export default Header;

const HeaderContainer = styled.div`
  background-color: var(--slack-color);
  color: white;
  display: flex;
  padding: 10px 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  align-items: center;
`;
const HeaderLeft = styled.div`
  flex: 0.3;
  margin-left: 20px;
  display: flex;
  align-items: center;
  /* background: green; */
  .MuiSvgIcon-root {
    /* margin-left: auto; */
  }
`;
const HeaderMid = styled.div`
  flex: 0.4;
  display: flex;
  align-items: center;
  background-color: #421f44;
  justify-content: center;
  border: 1px solid gray;
  > input {
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
    outline: 0;
    color: white;
  }
`;
const HeaderRight = styled.div`
  display: flex;
  flex: 0.3;
  justify-content: flex-end;
  padding-right: 20px;
  .MuiSvgIcon--root {
  }
`;
const HeaderAvatar = styled(Avatar)`
  cursor: pointer;
  margin-right: 20rem;

  :hover {
    opacity: 0.8;
  }
`;
