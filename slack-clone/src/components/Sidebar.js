import React from "react";
import styled from "styled-components";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CreateIcon from "@mui/icons-material/Create";
import SidebarOptions from "./SidebarOptions";
import {
  InsertComment,
  Apps,
  Drafts,
  BookmarkBorder,
  ExpandLess,
  PeopleAlt,
  FileCopy,
  Inbox,
  Add,
} from "@mui/icons-material";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, doc } from "firebase/firestore";
import { db } from "../@firebase/firebase";
function Sidebar() {
  const [channels] = useCollection(collection(db, "channels"));
  return (
    <SidebarContainer>
      {/* 
    Sidebar Options 
    Sidebar Chats baby */}
      <SidebarHeader>
        <div className="sidebar-info">
          <h2>React Devs HeadQuarter..</h2>
          <h3>
            <FiberManualRecordIcon />
            Tatheer Mehdi
          </h3>
        </div>
        <StyledIcon />
      </SidebarHeader>
      <SidebarOptions Icon={InsertComment} title={"Threads."} />
      <SidebarOptions Icon={Inbox} title={"Mentions & reactions."} />
      <SidebarOptions Icon={Drafts} title={"Saved Items."} />
      <SidebarOptions Icon={BookmarkBorder} title={"Channel Browser."} />
      <SidebarOptions Icon={PeopleAlt} title={"People and user groups."} />
      <SidebarOptions Icon={Apps} title={"Apps."} />
      <SidebarOptions Icon={FileCopy} title={"File Browser."} />
      <SidebarOptions Icon={ExpandLess} title={"Show Less."} />
      <SidebarOptions Icon={Add} title={"Add channel."} addingOption />
      {/* <SidebarOptions title={"Channel#1."} /> */}

      {channels?.docs.map((doc) => (
        <SidebarOptions
          key={doc.id}
          title={doc.data().channelName}
          id={doc.id}
        />
      ))}
    </SidebarContainer>
  );
}

export default Sidebar;

const SidebarContainer = styled.div`
  background: var(--slack-color);
  flex: 0.3;
  margin-top: 60px;
  color: white;
  overflow-y: scroll;
`;
const SidebarHeader = styled.div`
  display: flex;
  padding: 13px;
  align-items: center;
  justify-content: space-between;
  & h2 {
    font-size: 15px;
    font-weight: bold;
    margin-bottom: 5px;
  }
  & h3 {
    font-size: 13px;
    align-items: center;
    display: flex;
    & .MuiSvgIcon-root {
      color: green;
      font-size: 9px;
      margin-right: 10px;
    }
  }
`;
const StyledIcon = styled(CreateIcon)`
  background: white;
  border-radius: 50%;
  color: #49294b;
  padding: 8px;
  font-size: 17px;
`;
