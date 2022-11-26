import React from "react";
import { useState, useEffect } from "react";
import {
  CLIENT_ID,
  REDIRECT_URI,
  AUTH_ENDPOINT,
  RESPONSE_TYPE,
} from "../../constants";
import { getPlaylist } from "../../requests";
import { generateHash } from "../../util";
import "./LoginPage.css";

const LoginPage = () => {
  const [token, setToken] = useState("");
  const [playlistData, setPlaylistData] = useState({});
  useEffect(() => {
    setToken(generateHash());
  }, []);
  useEffect(() => {
    userPlaylist();
  }, [token]);

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  const userPlaylist = () => {
    getPlaylist(token);
  };

  return (
    <div className="login-page">
      {!token ? (
        <>
          <button type="submit" className="login-logout-button">
            <a
              href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
            >
              Login to Spotify
            </a>
          </button>
        </>
      ) : (
        <button className="login-logout-button" onClick={logout}>
          Logout
        </button>
      )}
    </div>
  );
};

export default LoginPage;
