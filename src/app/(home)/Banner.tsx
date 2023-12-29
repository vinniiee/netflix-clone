import PlayButton from "../components/PlayButton";

type BannerProps = {
  title: string;
  subtitle: string;
  imageUrl: string;
};

function Banner(props: BannerProps) {
  const { title, subtitle, imageUrl } = props;
  console.log(imageUrl);
  return (
    <div
      className={`flex flex-col justify-center  
     min-w-screen h-[600px]  items-start w-full bg-cover bg-top-right `}
      style={{
        backgroundImage: `linear-gradient(to right , rgba(0,0,0,1) 0%, rgba(0,0,0,.6) 30%, rgba(0,0,0,0) 50%), url(${imageUrl})`,
      }} 
    >
      <div className="flex flex-col justify-center items-start m-16 space-y-4 max-w-lg">
        <h1 className="text-5xl tracking-normal font-medium">{title}</h1>
        <h3 className="text-lg font-thin">{subtitle}</h3>
        <PlayButton classes="px-6 p-3" />
      </div>
    </div>
  );
}

export default Banner;
