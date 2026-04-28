import { useState } from "react";
import PopUpSong from "./popupsong";
import { Link } from "react-router-dom";

export default function SongCard(props) {
  const [trig, setTrigger] = useState(false);
  return (
    <Link to={props.link}>
      <div
        className="group relative transition-all: delay-150 duration-300 ease-in-out hover:-translate-y-3 hover:shadow-xl"
        onMouseEnter={() => setTrigger(true)}
        onMouseLeave={() => setTrigger(false)}
      >
        <img
          src={props.img}
          alt={props.alt}
          className="static aspect-video object-cover inset-0 w-full rounded-md transition-opacity group-hover:opacity-50 group-hover:brightness-50 duration-150 delay-50 group-hover:blur-xs"
        />
        <PopUpSong
          trigger={trig}
          name={props.name}
          artist={props.artist}
          eng={props.eng}
          artistimg={props.artistimg}
          artistlink={props.artistlink}
        />
      </div>
    </Link>
  );
}
