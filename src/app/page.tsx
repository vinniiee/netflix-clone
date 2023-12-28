import Banner from "./components/Banner";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Navbar classes="absolute top-0"/>
      <main className="flex min-h-screen w-full flex-col text-white bg-black items-center justify-between">
        <Banner
          imageUrl={"/static/banner.jpg"}
          title={"Glass Onion: A Knives Out Mystery"}
          subtitle={
            "Glass Onion: A Knives Out Mystery | Official Trailer | Netflix"
          }
        />
      </main>
    </div>
  );
}
