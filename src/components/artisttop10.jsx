import ArtistCartProgram from "./artistcartprogram";
// import MikuShit from "./mikushit";

function ArtistTop10() {


  return (
    <>
      <h1 className="text-center text-white p-4 text-xl">
        My Top 10 Artist/Singer
      </h1>
      <h3
        className="text-center text-white text-xs"
        // onClick={() => <MikuShit mikucount={props.mikucount++}/>}//開発中
      >
        (Outside Vocaloid)
      </h3>
      
      <div className="flex justify-center p-4">
        <div className="grid grid-cols-5 gap-x-32 gap-y-3 p-5 flex bg-[#363636] rounded-xl h-max-xl">
          <ArtistCartProgram
            img="https://yt3.googleusercontent.com/WxwAUNuEUtkY_WT52xwfWw_dP9cHmZbuVer2QeOxKuvQdiBiFFY7hmFhgy-i6XYn-CCRYuB6"
            alt="TUYU"
            link="https://www.youtube.com/@TUYU_official"
            name="ツユ"
            eng="TUYU"
            x="https://x.com/TUYU_official"
          />
          <ArtistCartProgram
            img="https://yt3.googleusercontent.com/ytc/AIdro_l4OX9vLQEk_TYhJhkefP5QVN38gYAsC0RW7tjXR2ayJn0"
            alt="MIMI"
            link="https://www.youtube.com/channel/UCam3IAA-nyfxRL8_wDQ35VA"
            name="MIMI"
            eng=""
            x="https://x.com/mimi_3mi"
          />
          <ArtistCartProgram
            img="https://yt3.googleusercontent.com/ytc/AIdro_kLDBK5ksSvk5-XJ6S8e0kWfjy7mVl3jyUkgDeMQ7rlCpU"
            alt="Suichan"
            link="https://www.youtube.com/@HoshimachiSuisei"
            name="星街すいせい"
            eng="Hoshimachi Suisei"
            x="https://x.com/suisei_hosimati"
          />
          <ArtistCartProgram
            img="https://yt3.googleusercontent.com/ytc/AIdro_nZbBsMFr7laGRuFSiml8_I3em4w1qNqqLA1JJi0B1yUtc"
            alt="Mary"
            link="https://www.youtube.com/@maryusagi"
            name="めあり"
            eng="Mary"
            x="https://x.com/memememememe28"
          />
          <ArtistCartProgram
            img="https://yt3.googleusercontent.com/551vPcZVNuJW4qqL3xGxuuCE9ZAWEIDimwiPaMkTaf89-bgonrdj4B_UwyfngkBq4mXsUYaa1g"
            alt="dazbee"
            link="https://www.youtube.com/@Dazbeeee"
            name="Dazbee"
            eng=""
            x="https://x.com/nicodaZzz"
          />
          <ArtistCartProgram
            img="https://yt3.googleusercontent.com/ytc/AIdro_kVKEa-EG-3DL3jnIwzZ13S4zo8G57by8Gq-nJLBOcuqg"
            alt="Yorushika"
            link="https://www.youtube.com/@nbuna"
            name="ヨルシカ/n-buna"
            eng="Yorushika"
            x="https://x.com/nbuna_staff"
          />
          <ArtistCartProgram
            img="https://yt3.googleusercontent.com/ytc/AIdro_kCM5A4TC5NoWlTRfc9CwhATeaUBFzeBTYcLI9PO0a5ZVU"
            alt="Deco"
            link="https://www.youtube.com/@DECO27"
            name="DECO*27"
            eng=""
            x="https://x.com/deco27"
          />
          <ArtistCartProgram
            img="https://yt3.googleusercontent.com/-qrfuE75FYl9BZjCXWS0yEMjveq1itxLA307oGldEPhFQkll_E5ml0A5wTDKdA8MaashgLWL7g"
            alt="koresawa"
            link="https://www.youtube.com/channel/UCY47aDuWPpH18NJlidLg04A"
            name="コレサワ"
            eng="Koresawa"
            x="https://x.com/koresawa_519"
          />
          <ArtistCartProgram
            img="https://yt3.googleusercontent.com/Suq5DSD3X5GDDZ9FuDHwyWmbuRMUir19hXq3N6y7udFOOo6Hnq9Bgj8kkNQ5jmSsIPjibhDI"
            alt="Kano"
            link="https://www.youtube.com/@Kano_"
            name="鹿乃"
            eng="Kano"
            x="https://x.com/kano_2525"
          />
          <ArtistCartProgram
            img="https://yt3.googleusercontent.com/ytc/AIdro_k65c3FqRpwfe066estQZsGjy_sBu1Y0sV_6_C23VXUlho"
            alt="Zutomayo"
            link="https://www.youtube.com/channel/UCv6P5nsS9rP4tDtFlqLU_QQ"
            name="ずっと真夜中でいいのに"
            eng="Zutomayo"
            x="https://x.com/zutomayo"
          />
        </div>
      </div>
      console.log(mikucount)
    </>
  );
}
export default ArtistTop10;
