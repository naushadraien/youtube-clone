import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
//ReactPlayer is a component for playing a variety of URLs, including file paths, YouTube, Facebook, Twitch, SoundCloud, Streamable, Vimeo, Wistia, Mixcloud, DailyMotion and Kaltura.
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromApi";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);

  //it checks if the videoDetail is null then return Loading
  if (!videoDetail?.snippet) return "Loading...";

  const {
    snippet: { title, channelId, channelTitle, publishedAt },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  const publishTimeDate = new Date(publishedAt);

  return (
    <Box minHeight="95vh">
      {/* Here direction is dynamic which means on extra small device the direction is column and medium devices and higher the direction is row */}
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            {/* here className='react-player' is used to make the video screen larger and controls is used for showing the control options within the video */}
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#fff" }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography
                  variant={{ sm: "subtitle1", md: "h6" }}
                  color="#fff"
                >
                  {channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "12px", color: "grey", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography sx={{ opacity: 0.7 }}>
                  {`${publishTimeDate.toDateString()}`}
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {/* here parseInt(viewCount).toLocaleString() is used to make the viewcount human redeable by parsing the integer to the locale string */}
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {/* here parseInt(likeCount).toLocaleString() is used to make the likecount human redeable by parsing the integer to the locale string */}
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
