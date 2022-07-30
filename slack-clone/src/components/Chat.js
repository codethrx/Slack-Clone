import React, { useRef } from "react";
import styled from "styled-components";
//firebase
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import {
  doc,
  collection,
  addDoc,
  serverTimestamp,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../@firebase/firebase";
//redux
import { useSelector } from "react-redux";
import { auth } from "../@firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function Chat() {
  const [input, setInput] = React.useState("");
  const { channel } = useSelector((state) => state.app);
  const [channelDoc] = useDocument(channel && doc(db, "channels", channel));
  const scroll = useRef(null);
  const [channels] = useCollection(
    channel &&
      query(
        collection(db, "channels", channel, "messages"),
        orderBy("timestamp", "asc")
      )
  );
  const [user] = useAuthState(auth);
  // console.log(user);
  React.useEffect(() => {
    scroll?.current?.scrollIntoView({ behavior: "smooth" });
  }, [channels]);
  console.log(scroll);
  const addMessages = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "channels", channelDoc?.id, "messages"), {
        message: input,
        username: user?.displayName,
        url: user.photoURL,
        timestamp: serverTimestamp(),
      });

      setInput("");
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <ChatContainer>
      {/* {ChatsHeader -- Chat } */}
      <ChannelHeader>
        <h1>{channelDoc?.data().channelName}</h1>
      </ChannelHeader>
      {channels &&
        channels.docs.map((d) => (
          <MessagesContainer key={d.id}>
            <div className="message-user">
              <img src={d.data().url} alt={d.url} />
              <h3>{d.data().username}</h3>
            </div>
            <div>
              {" "}
              <div className="message-data">
                <h4>{d.data().message}</h4>
                {/* <p>{new Date(d?.data()?.timestamp.toDate()).toUTCString()}</p> */}
              </div>
            </div>
          </MessagesContainer>
        ))}
      <form onSubmit={addMessages}>
        <ChatInput
          placeholder="Enter something in the chat..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
      <div ref={scroll}></div>
    </ChatContainer>
  );
}

export default Chat;
const ChatContainer = styled.div`
  margin-top: 60px;
  flex: 0.8;
  overflow-y: scroll;
  padding: 10px 30px;
`;
const ChannelHeader = styled.div`
  > h1 {
    font-size: 20px;
    padding: 1rem;
  }
`;
const ChatInput = styled.input`
  position: fixed;
  bottom: 10%;
  right: 20%;
  width: 30vw;
  border: 1px solid black;
  color: black;
  padding: 10px 20px;
`;
const MessagesContainer = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  > .message-user {
    img {
      width: 100px;
      height: 100px;
      object-fit: contain;
      border-radius: 1rem;
    }
    h3 {
      font-weight: bolr;
      padding: 0.5px 5px;
      font-size: 13px;
    }
  }
  .message-data {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 10px;
    > p {
      font-weight: lighter;
      color: gray;
    }
    > h4 {
      padding: 4px 0;
      font-weight: 400;
    }
  }
`;
