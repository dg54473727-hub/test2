import SongCard from "./songcard";

export default function VocaloidTop10() {
  return (
    <>
      <h1 className="text-center text-white p-4 text-xl">My Top 10 Vocaloid</h1>
      <h3 className="text-center text-white text-xs">Outside My Top 10</h3>
      <div className="flex justify-center p-4">
        <div className="grid grid-cols-5 gap-2 p-5 flex bg-[#363636] rounded-xl w-full">
          <SongCard
            name="夜もすがら君想ふ"
            img="https://i.ytimg.com/vi/sFhKP57Nk1U/maxresdefault.jpg"
            link="https://www.youtube.com/watch?v=sFhKP57Nk1U&list"
            artist="西沢さんP"
            eng="yomosugara kimi omou"
          />
          <SongCard
            name="快晴"
            img="https://i.ytimg.com/vi/BwGpXK3W6tE/maxresdefault.jpg"
            link="https://www.youtube.com/watch?v=BwGpXK3W6tE"
            eng="Sunny"
            artist="Orangestar"
            artistlink="https://www.youtube.com/channel/UCgBPuTX7crv_2jKAkH5z7bA"
          />
          <SongCard
            name="King"
            img="https://i.ytimg.com/vi/cm-l2h6GB8Q/hq720.jpg"
            link="https://www.youtube.com/watch?v=ZUwaudw8ht0"
            artist="Kanaria"
            artistlink="https://www.youtube.com/channel/UC10BM9XdLdrvB8japwmRUvA"
          />
          <SongCard
            name="モニタリング (Best Friend Remix)"
            img="https://i.ytimg.com/vi/C-CYwNz3z8w/hq720.jpg"
            eng="Monitoring (Best Friend Remix)"
            artist="Deco*27"
            artistlink="https://www.youtube.com/channel/UCGmO0S4S-AunjRdmxA6TQYg"
          />
          <SongCard
            name="ヴァンパイア"
            img="https://i.ytimg.com/vi/e1xCOsgWG0M/maxresdefault.jpg"
            link="https://www.youtube.com/watch?v=5xfNTyy-Xhk"
            eng="Vampire"
            artist="Deco*27"
            artistlink="https://www.youtube.com/channel/UCGmO0S4S-AunjRdmxA6TQYg"
          />
          <SongCard
            name="ワールドイズマイン"
            img="https://i.ytimg.com/vi/EuJ6UR_pD5s/hqdefault.jpg"
            link="https://www.youtube.com/watch?v=EuJ6UR_pD5"
            eng="World is Mine"
            artist="Ryo"
            artistlink="https://www.youtube.com/channel/UCB2tP2QfRG7hTra0KTOtTBg"
          />
          <SongCard
            name="神のまにまに"
            img="https://i.ytimg.com/vi/b2GJcYBoVyg/maxresdefault.jpg"
            link="https://www.youtube.com/watch?v=b2GJcYBoVyg"
            eng="God's Blessing"
            artist="Rerulili"
            artistlink="https://www.youtube.com/@rerulili"
          />
          <SongCard
            name="想像フォレスト"
            img="https://i.ytimg.com/vi/O9g1OyshIX4/hqdefault.jpg"
            link="https://www.youtube.com/watch?v=O9g1OyshIX4"
            eng="Imagination Forest"
            artist="JIN"
            artistlink="https://www.youtube.com/channel/UCLz6MG2kx_0xeaW0LowYnMQ"
          />
          <SongCard
            name="アスヨゾラ哨戒班"
            img="https://i.ytimg.com/vi/XogSflwXgpw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg"
            link="https://www.youtube.com/watch?v=XogSflwXgpw"
            eng="Future Night Patrol"
            artist="Oregestar"
            artistlink="https://www.youtube.com/channel/UCgBPuTX7crv_2jKAkH5z7b"
          />
          <SongCard
            name="少女レイ"
            eng="Shoujo Rei"
            img="https://i.ytimg.com/vi/JW3N-HvU0MA/hqdefault.jpg"
            link="https://www.youtube.com/watch?v=JW3N-HvU0MA"
            artist="mikitoP"
            artistlink="https://www.youtube.com/channel/UCBR4N5DkgDt3PLTcfJB1iiw"
          />
        </div>
      </div>
    </>
  );
}
