import { fetchVideosQuery } from "@/lib/dummyData";
import Card from "./Card";
import { searchVideosQuery } from "@/lib/videos";

type SectionProps = {
  title: string;
  query: string;
  size: "sm" | "md" | "lg";
};

async function Section(props: SectionProps) {
  const { size, query ,title} = props;
  searchVideosQuery("popular");
  // const data = await fetchVideosQuery(query);
  const data: (string | null)[]| undefined = await searchVideosQuery(query);

  const classes = {
    "sm":"space-x-6",
    "md":"space-x-4",
    "lg":"space-x-6"
  }

  return (
    <section className="p-4 w-full overflow-hidden py-8">
      <h3 className="text-3xl ml-8">{title}</h3>
      <div className={`flex justify-start items-center  px-8 py-6  no-scrollbar overflow-x-scroll ${classes[size]}`}>
        {data?.map((item) => item && <Card key={item} src={item} size={size} />)}
      </div>
    </section>
  );
}

export default Section;
