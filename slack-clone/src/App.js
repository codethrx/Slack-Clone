//react router
import { Routes, Route } from "react-router-dom";
//styled
import styled from "styled-components";
//Components and pages
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import Login from "./components/Login";
//firebase auth
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./@firebase/firebase";
function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <AppBody>
            <Sidebar />
            <Routes>
              <Route element={<Chat />} path="/" />
            </Routes>
          </AppBody>
        </>
      )}
    </div>
  );
}

export default App;
const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
