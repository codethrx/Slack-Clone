import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
//firestore
import { db } from "../@firebase/firebase";
import { addDoc, collection } from "firebase/firestore";
import { setChannel as channelize } from "../features/appSlice";
function SidebarOptions({ title, Icon, addingOption, id }) {
  const dispatch = useDispatch();
  const addChannel = async () => {
    const channelName = prompt("Add a name for your channel");
    if (channelName) {
      await addDoc(collection(db, "channels"), { channelName });
    }
  };
  const setChannel = () => {
    dispatch(channelize({ value: id }));
  };
  return (
    <StyledContainer onClick={addingOption ? addChannel : setChannel}>
      {Icon && <Icon />}
      {Icon ? (
        <h4>{title}</h4>
      ) : (
        <StyledChannel>
          {" "}
          <span>#</span> {title}
        </StyledChannel>
      )}
    </StyledContainer>
  );
}

export default SidebarOptions;
const StyledContainer = styled.div`
  padding: 13px;
  display: flex;
  font-size: 13px;
  cursor: pointer;

  > h4 {
    margin-left: 20px;
  }
  :hover {
    background: #340e36;
  }
`;
const StyledChannel = styled.h3`
  font-size: 13px;
  padding: 13px;
  font-weight: bold;
`;
