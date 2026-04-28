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
          path="/songs/doronobunsai"
          element={
            <SongInfoPage
              img="https://i.ytimg.com/vi_webp/M7FH1dL51oU/maxresdefault.webp"
              name="泥の分際で私の大切を奪うことなんて"
              vocal="ぷす"
              eng="Being low as dirt, taking what's important from me"
              lyric="ツユ"
              aragement="ぷす"
            />
          }
        />
        <Route
          path="/songs/doronobunsai"
          element={
            <SongInfoPage
              img="https://i.ytimg.com/vi_webp/M7FH1dL51oU/maxresdefault.webp"
              name="泥の分際で私の大切を奪うことなんて"
              vocal="ぷす"
              eng="Being low as dirt, taking what's important from me"
              lyric="ツユ"
              aragement="ぷす"
            />
          }
        />
        <Route
          path="/songs/namikare"
          element={
            <SongInfoPage
              img="https://i.ytimg.com/vi/5xfNTyy-Xhk/maxresdefault.jpg"
              name="ナミカレ"
              vocal="ぷす"
              eng="Even Tears Withers"
              lyric="ツユ"
              aragement="ぷす"
            />
          }
        />
        <Route
          path="/songs/shuutennosakiarutosurunaraba"
          element={
            <SongInfoPage
              img="https://i.ytimg.com/vi/TBoBfT-_sfM/maxresdefault.jpg?v=62dfd793"
              name="終点の先在るとするならば"
              vocal="ぷす"
              eng="If There Was An Endpoint"
              lyric="ツユ"
              aragement="ぷす"
            />
          }
        />
        <Route
          path="/songs/doronobunsai"
          element={
            <SongInfoPage
              img="https://i.ytimg.com/vi_webp/M7FH1dL51oU/maxresdefault.webp"
              name="泥の分際で私の大切を奪うことなんて"
              vocal="ぷす"
              eng="Being low as dirt, taking what's important from me"
              lyric="ツユ"
              aragement="ぷす"
            />
          }
        />
        <Route
          path="/songs/kyuukurarin"
          element={
            <SongInfoPage
              img="https://i.ytimg.com/vi/2b1IexhKPz4/maxresdefault.jpg"
              name="きゅうくらりん"
              vocal="可不"
              eng="kyukurarin"
              lyric="いよわ"
              aragement="いよわ"
            />
          }
        />
        <Route
          path="/songs/science"
          element={
            <SongInfoPage
              img="https://i.ytimg.com/vi_webp/m-bvW4pKT68/maxresdefault.webp"
              name="サイエンス"
              vocal="重音テト"
              eng="Science"
              lyric="ツユ"
              aragement="ぷす"
            />
          }
        />
        <Route
          path="/songs/underkids"
          element={
            <SongInfoPage
              img="https://i.ytimg.com/vi/TBoBfT-_sfM/maxresdefault.jpg?v=62dfd793"
              name="アンダーキッズ"
              vocal="ぷす"
              eng="Under Kids"
              lyric="ツユ"
              aragement="ぷす"
            />
          }
        />
        <Route
          path="/songs/umiyurikaiteitan"
          element={
            <SongInfoPage
              img="https://i.ytimg.com/vi/3uyGM64fqzk/maxresdefault.jpg?"
              name="ウミユリ海底譚"
              vocal="初音ミク"
              eng="Deep Sea Lily Tale"
              lyric="N-buna"
              aragement="N-buna"
            />
          }譚
        />
      </Routes>
    </>
  );
}

export default App;
