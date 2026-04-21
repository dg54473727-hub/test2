import ButtonHeader from "./buttonheader";

function header() {
  return (
    <>
      <div className="shadow-inner shadow-gray-500/80 flex bg-[#462a5e]">
        <h1 className="text-2xl p-6 bg-[#462a5e] text-white text-shadow-lg/30 grow">
          My favorite Japanese song
        </h1>
        <div className="gap-3 flex grid-cols-3">
          <ButtonHeader name="Home" link="/"/>
          <ButtonHeader name="Song" link="/song"/>
          <ButtonHeader name="Artist" link="/artist"/>
          <ButtonHeader name="song test" link="/test"/>
        </div>
      </div>
    </>
  );
}
export default header;
