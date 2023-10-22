import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, CreatePost } from "./pages";
import { Layout } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/newpost" element={<CreatePost />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
