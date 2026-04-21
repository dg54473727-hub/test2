import { Children } from "react";
import SongInfoPage from "./pages/songPage";

export default function routes() {
  const SongRoutes = {
    path: "songs",
    element: <songs />,
    Children: [
      {
        path: "kuuninaru",
        element: (
          <SongInfoPage
          name = "くうになる"
            img="https://i.ytimg.com/vi/f6TytcA47rI/hq720.jpg"
            link="/songs/kuuninaru"
          />
        ),
      },
    ],
  };
}
//  <SongCard
//             name="くうになる"
//             img="https://i.ytimg.com/vi/f6TytcA47rI/hq720.jpg"
//             link="https://www.youtube.com/watch?v=f6TytcA47rI"
//             eng="Becoming Empty"
//             artist="MIMI"
//             artistimg="https://yt3.googleusercontent.com/ytc/AIdro_l4OX9vLQEk_TYhJhkefP5QVN38gYAsC0RW7tjXR2ayJn0"
//             artistlink="https://www.youtube.com/channel/UCam3IAA-nyfxRL8_wDQ35VA"
//           />
