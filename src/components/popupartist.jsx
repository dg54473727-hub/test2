import PopUp from "./popup";

function PopUpArtist(props) {
  if (props.x != null) {;
    return (
      <>
        <PopUp trigger={props.trigger}>
          <div className="inset-0 absolute text-center text-white flex justify-center items-center gap-x-8">
            <a href={props.yt} target="_blank">
              <img src="./img/icon/yt.png" alt="" className="h-12 w-12" />
            </a>

            <a href={props.x} target="_blank">
              <img src="./img/icon/x.png" alt="" className="h-12 w-12" />
            </a>
          </div>
        </PopUp>
      </>
    );
  } else {
    return (
      <>
        <PopUp trigger={props.trigger}>
          <div className="bottom-0 w-full h-full absolute text-center text-white flex justify-center items-center">
            <a href={props.yt} target="_blank">
              <img src="./img/icon/yt.png" alt="" className="h-12 w-12" />
            </a>
          </div>
        </PopUp>
      </>
    );
  }
}
export default PopUpArtist
