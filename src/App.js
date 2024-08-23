import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import {BrowserRouter, Routes, Route} from 'react-router-dom' ;


function App() {
  return (
    <div>
      <BrowserRouter>
            <Routes>
                <Route path="/" element={< Home/>} />
                <Route path="/profile/:username" element={< Profile/>} />
                <Route path="/signup" element={< Signup/>} />
                <Route path="/login" element={< Login/>} />
                <Route path="*" element={<h2>Page not found</h2>} />
            </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
