import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Pages
import Home from "./Pages/Home/Home";
import Single from "./Pages/Single/Single";
import Write from "./Pages/Write/Write";
import Settings from "./Pages/Settings/Settings";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";

// Components
import Header from "./components/Header/Header";
import TopBar from "./components/TopBar/TopBar";
import SinglePost from "./components/SinglePost/SinglePost";


function App() {

  const user = true;

  return (
    <Router>
      <TopBar />
      <Routes>  {/* 6. versiyon üzerinde Switch yerine Routes kullanılıyor. */}
        <Route path="/" element={<Home />}/>
        <Route path="/posts" element={<Home />}/>
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/write" element={user ? <Write /> : <Login />} />
        <Route path="/settings" element={user ? <Settings /> : <Login />} />
        <Route path="/post/:postId" element={<Single />} />
      </Routes>
    </Router>
  );
}

export default App;
