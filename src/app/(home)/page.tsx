import Section from "../components/Section";
import Banner from "./Banner";
export default function Home() {
  return (
    <div className="w-full flex flex-col justify-start items-center ">
      <main className="flex min-h-screen w-full flex-col text-white bg-black items-center justify-between">
        <Banner
          imageUrl={"/static/banner.jpeg"}
          title={"The Sandman"}
          subtitle={"2022  |  Drama  |  Season 1 Trailer "}
        />
        <Section size="md" title={"Popular"} query={"popular"} />
        <Section size="lg" title={"Genres"} query={"genre"} />
        <Section size="sm" title={"Trending"} query={"trending"} />
      </main>
    </div>
  );
}
