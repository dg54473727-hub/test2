import { useState } from "react";
import PopUpArtist from "./popupartist";

function ArtistCartProgram(props) {
  const [trig, setTrigger] = useState(false);
  return (
    <>
      <div>
        <div
          className="overflow-hidden group rounded-full aspect-square h-48 w-48 transition delay-50 duration-300 ease-in-out hover:-translate-y-3 "
          onMouseEnter={() => setTrigger(true)}
          onMouseLeave={() => setTrigger(false)}
        >
          <img
            className="group-hover:brightness-50"
            src={props.img}
            alt={props.alt}
          />
          <PopUpArtist yt={props.link} x={props.x} trigger={trig}/>
        </div>
        <div className="text-center text-white">
          <h3>{props.name}</h3>
          <p>{props.eng}</p>
        </div>
      </div>
    </>
  );
}
export default ArtistCartProgram;
