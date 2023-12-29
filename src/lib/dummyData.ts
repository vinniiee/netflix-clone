import { dummyData } from "./dummyVideos";

export const fetchVideosQuery = async (query: string) => {
  const data = dummyData.items.map(
    (item) => item.snippet.thumbnails.high.url || null
  );
  return data;
};
