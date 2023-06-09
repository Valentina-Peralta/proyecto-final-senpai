import "./App.css";
import Home from "./Layouts/Home/Home";
import {
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Login from "./Layouts/Login/Login";
import Register from "./Layouts/Register/Register";
import Init from "./Layouts/Init/Init";
import RootLayout from "./Layouts/RootLayout/RootLayout";
import Cupid from "./Layouts/Cupid/Cupid";
import Contextual from "./Layouts/Contextual/Contextual";
import Playlist from "./Layouts/Playlist/Playlist";
import Profile from "./Layouts/Profile/Profile";
import Searcher from "./Layouts/Searcher/Searcher";
import Config from "./Layouts/Profile/Config";
import Error404 from "./Layouts/Error 404/Error404";
import Register2 from "./Layouts/Register/Register2";
import Contract from "./Layouts/Contract/Contract";
import UserPlaylist from "./Layouts/UserPlaylist/UserPlaylist";
import EmptyUserPlaylist from "./Layouts/UserPlaylist/EmptyUserPlaylist";
import NewPlaylist from "./Layouts/NewPlaylist/NewPlaylist";
import Searcher2 from "./Layouts/Searcher/Searcher2";
import AddSongs from "./Layouts/UserPlaylist/AddSongs";
import Friends from "./Layouts/Friends/Friends";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Init />} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/playlist" element={<Playlist />} />
      <Route path="/cupido" element={<Cupid />} />
      <Route path="/contextual" element={<Contextual />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/friends" element={<Friends />} />
      <Route path="/config" element={<Config />} />
      <Route path="/searcher" element={<Searcher />} />
      <Route path="/searcher2" element={<Searcher2 />} />
      <Route path="/*" element={<Error404 />} />
      <Route path="/register2" element={<Register2 />} />
      <Route path="/contract" element={<Contract />} />
      <Route path="/userplaylist/:id" element={<UserPlaylist />} />
      <Route path="/emptyuserplaylist/:name" element={<EmptyUserPlaylist />} />
      <Route path="/addSongs/:name" element={<AddSongs />} />

      <Route path="/newPlaylist" element={<NewPlaylist />} />

    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
