import axios from "axios";

const getPlaylist = async (token) => {
  try {
    const { data } = await axios.get(
      "https://api.spotify.com/v1/me/playlists",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          limit: 10,
        },
      }
    );
    console.log(data);
  } catch (err) {
    console.log("Login to spotify");
  }
};

export { getPlaylist };
