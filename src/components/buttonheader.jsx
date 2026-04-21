import { Link } from "react-router-dom";

function ButtonHeader(props) {
  return (
    <div className="content-center">
      <Link to={props.link}>
        <div className="bg-indigo-500 shadow-lg shadow-indigo-500/30 content-center text-center rounded-full w-36 text-white text-2xl hover: bg-#a370cf">
          <p>{props.name}</p>
        </div>
      </Link>
    </div>
  );
}
export default ButtonHeader;
