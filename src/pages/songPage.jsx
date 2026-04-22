export default function SongDetail(props) {
  return (
    <>
      <div className="p-10 flex justify-center">
        <div className="w-4/5 bg-[#363636] ">
          <img
            src={props.img}
            alt={props.name}
            className="static aspect-video object-fill w-full p-2 rounded-2xl"
          />
          <div className="m-2 border-white border-1 rounded-4xl text-white p-6 text-xl flex">
            <div className="w-3/4">
              <p>Name</p>
              <p>Vocal</p>
              <p>Lyric</p>
              <p>Aragement</p>
            </div>
            <div>
              <p>{props.name} / {props.eng}</p>
              <p>{props.vocal}</p>
              <p>{props.lyric}</p>
              <p>{props.aragement}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
