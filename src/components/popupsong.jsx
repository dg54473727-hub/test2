// import { useState } from "react";
import PopUp from "./popup";

function PopUpSong(props) {
  // const [artisttrig, setArtisttrig] = useState(false);

  return (
    <>
      <PopUp trigger={props.trigger}>
        <div className="inset-0 absolute text-center text-white flex justify-center items-center">
          <div>
            <h3>{props.name}</h3>
            <p>{props.eng}</p>
            <p>by</p>
            <a href={props.artistlink}>
              <h3 className="transition-all duration-150 delay-50 hover:-translate-y-1 hover:z-50 hover:scale-120">{props.artist}</h3>
            </a>
          </div>
        </div>
      </PopUp>
    </>
  );
}
//第二ポップアップはまだ開発中
export default PopUpSong;
