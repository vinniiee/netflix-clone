const BASE_URL = "https://youtube.googleapis.com/youtube/v3";

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

type SearchResponse = {
  items: {
    snippet: {
      thumbnails: {
        high: {
          url: string;
        };
      };
    };
  }[];
};

export type VideoThumbnails = {
    url:string;
}

export const searchVideosQuery = async (
  searchQuery: string,
  maxResults: number = 10
) => {
  try {
    const URL = `search?part=snippet&q=trailer+netflix+${searchQuery}&type=video&safeSearch=strict`;
    const response = await fetch(
      `${BASE_URL}/${URL}&maxResults=${maxResults}&key=${YOUTUBE_API_KEY}`
    );
    const data: SearchResponse = await response.json();
    const videos = data.items.map((item) => {
      if (item) {
        return item.snippet.thumbnails.high.url;
      }
      return null;
    });
    return videos;
  } catch (e) {
    console.log(e);
  }
};
