import { useState } from "react";
import PopUpSong from "./popupsong";
import { Link } from "react-router-dom";


function CardProgram(props) {
  const [trig, setTrigger] = useState(false)
  return (
    <Link to={props.Link}>
    <div
      className="group transition-all: delay-150 duration-300 ease-in-out hover:translate-y-[20] hover:shadow-xl hover:z-50"
      onMouseEnter={() => setTrigger(true)}
      onMouseLeave={() => setTrigger(false)}
    >
        <img
          src={props.img}
          alt={props.alt}
          className="object-cover rounded-md relative transition-opacity group-hover:opacity-50 group-hover:brightness-50 duration-150 delay-50 group-hover:blur-xs"
        />
      <PopUpSong trigger ={trig} name={props.name} artist={props.artist} eng={props.eng} artistimg={props.artistimg}/>
    </div>
    </Link>
  );
}
export default CardProgram;
// "transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:shadow-sm/30"
// bg-blue-500 w-32 h-32 opacity-50 transition-opacity duration-500 hover:opacity-100
