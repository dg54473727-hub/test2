import CardProgram from "./cartprogram";

function Top10() {
  return (
    <>
      <h1 className="text-center text-white p-4 text-xl">My Top 10</h1>
      <div className="flex justify-center p-4">
        <div className="grid grid-cols-5 gap-2 p-5 flex bg-[#363636] rounded-xl">
          <CardProgram
            name="ハロ/ハワユ"
            img="https://i.ytimg.com/vi/-M4sAQYi6r4/hqdefault.jpg?sqp=-oaymwE2COADEI4CSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gSAAuADigIMCAAQARhFIGUoXzAP&rs=AOn4CLBvLGLU3yNf9naeoblGIoXWXP3owQ"
            artist="Nanou"
            eng="Hello/How are you"
          />
          <CardProgram
            name="くうになる"
            img="https://i.ytimg.com/vi/f6TytcA47rI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCdT4kTEzUtBZLmTn39SPq_CyDLdQ"
            link="https://www.youtube.com/watch?v=f6TytcA47rI"
            eng="Becoming Empty"
            artist="MIMI"
            artistimg="https://yt3.googleusercontent.com/ytc/AIdro_l4OX9vLQEk_TYhJhkefP5QVN38gYAsC0RW7tjXR2ayJn0"
          />
          <CardProgram
            name="あいつら全員同窓会"
            img="https://i.ytimg.com/vi/ZUwaudw8ht0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLADog3_QjQGyPjylgm2Lz8CdPMTkw"
            link="/songs/aiturazenindoushouka"
            eng="Inside Joke"
            artist="Zutomayo/ずっと真夜中でいいのに"
          />
          <CardProgram
            name="泥の分際で私の大切を奪おうでなんて"
            img="https://i.ytimg.com/vi_webp/M7FH1dL51oU/maxresdefault.webp"
            link="/songs/kuuninaru"
            eng="Being low as dirt, taking what's important from me"
            artist="Tuyu/ツユ"
          />
          <CardProgram
            name="ナミカレ"
            img="https://i.ytimg.com/vi/5xfNTyy-Xhk/maxresdefault.jpg"
            link="https://www.youtube.com/watch?v=5xfNTyy-Xhk"
            eng="Even tears withered"
            artist="Tuyu/ツユ"
          />
          <CardProgram
            name="終点の先在るとするならば"
            img="https://i.ytimg.com/vi_webp/vcw5THyM7Jo/maxresdefault.webp?v=6163ff70"
            link="https://www.youtube.com/watch?v=vcw5THyM7Jo"
            eng=" If There Was An Endpoint"
            artist="Tuyu/ツユ"
          />
          <CardProgram
            name="アンダーキッズ"
            img="https://i.ytimg.com/vi/TBoBfT-_sfM/maxresdefault.jpg?v=62dfd793"
            link="https://www.youtube.com/watch?v=TBoBfT-_sfM"
            eng="Under Kids"
            artist="Tuyu/ツユ/Tuyu"
          />
          <CardProgram
            name="きゅうくらりん"
            img="https://i.ytimg.com/vi/2b1IexhKPz4/maxresdefault.jpg"
            link="https://www.youtube.com/watch?v=2b1IexhKPz4&list=RD2b1IexhKPz4"
            eng="Kyukurarin"
            artist="Iyowa/いよわ"
          />
          <CardProgram
            name="サイエンス"
            img="https://i.ytimg.com/vi_webp/m-bvW4pKT68/maxresdefault.webp"
            link="https://www.youtube.com/watch?v=m-bvW4pKT68&list=RDm-bvW4pKT68"
            eng="Science"
            artist="MIMI"
          />
          <CardProgram
            name="ウミユリ海底譚"
            img="https://i.ytimg.com/vi/3uyGM64fqzk/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGBMgXih_MA8=&rs=AOn4CLBsIuycChMO3Moa9hHnzmvECF9KvA"
            link="https://www.youtube.com/watch?v=7JANm3jOb2k&list=RD7JANm3jOb2k"
            artist="n-buna/ヨロシカ"
          />
        </div>
      </div>
    </>
  );
}
export default Top10;
