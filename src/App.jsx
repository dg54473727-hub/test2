import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import "./index.css";
import Home from "./pages/home";
import ArtistPage from "./pages/artist";
import SongPage from "./pages/song";
import NotFound from "./pages/notfound";
import SongInfoPage from "./pages/songPage";


function App() {
  return (
    <>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/song" element={<SongPage />} />
        <Route path="/artist" element={<ArtistPage />} />
        <Route path="*" element={<NotFound />} />
        <Route
          path="/songs/kuuninaru"
          element={
            <SongInfoPage
              img="https://i.ytimg.com/vi/f6TytcA47rI/hq720.jpg"
              name="くうになる"
              vocal="初音ミク / 可不"
              eng="Becoming Empty"
              lyric="MIMI"
              aragement="MIMI"
            />
          }
        />
        <Route
          path="/songs/helohowareyou"
          element={
            <SongInfoPage
              img="https://i.ytimg.com/vi/-M4sAQYi6r4/hqdefault.jpg"
              name="くうになる"
              vocal="初音ミク"
              eng="Hello/How are you"
              lyric="Nanou"
              aragement="Nanou"
            />
          }
        />
        <Route
          path="/songs/aiturazenindoushoukai"
          element={
            <SongInfoPage
              img="https://i.ytimg.com/vi/ZUwaudw8ht0/hq720.jpg"
              name="あいつら全員同窓会"
              vocal="ACAね"
              eng="Inside Joke"
              lyric="ずっと真夜中でいいのに"
              aragement="100回嘔吐, ZTMY"
            />
          }
        />
        <Route
          path="/songs/aiturazenindoushoukai"
          element={
            <SongInfoPage
              img="https://i.ytimg.com/vi/ZUwaudw8ht0/hq720.jpg"
              name="あいつら全員同窓会"
              vocal="ACAね"
              eng="Inside Joke"
              lyric="ずっと真夜中でいいのに"
              aragement="100回嘔吐, ZTMY"
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
