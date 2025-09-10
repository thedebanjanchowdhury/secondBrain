import { Share, Trash, Twitter, YoutubeIcon } from "lucide-react";
import { Tweet } from "react-tweet";
import React from "react";

const Card = ({ title, link, type }) => {
  const getYouTubeId = (url) => {
    try {
      const u = new URL(url);
      if (u.hostname.includes("youtu.be")) {
        return u.pathname.slice(1);
      }
      if (u.searchParams.has("v")) {
        return u.searchParams.get("v");
      }
      const parts = u.pathname.split("/");
      const last = parts[parts.length - 1];
      return last || "";
    } catch (_) {
      return "";
    }
  };

  const youTubeId = type === "youtube" ? getYouTubeId(link) : "";

  return (
    <div
      className={`card w-[90%] ${
        type === "youtube" ? "h-100" : "h-[70%]"
      } border-2 border-accent shadow-xl`}
    >
      <div className="card-body">
        <div className="flex items-center justify-between">
          <span className="badge badge-primary badge-md flex items-center font-[Neue-Montreal-Medium]">
            {type === "tweet" && <Twitter />}
            {type === "youtube" && <YoutubeIcon />}
            {type === "" && <div className="hidden bg-transparent"> </div>}
            {type}
          </span>

          <div className="flex items-center gap-4">
            <Trash size={22} className="cursor-pointer text-accent" />
            <a href={link} target="_blank" rel="noreferrer">
              <Share size={22} className="cursor-pointer text-accent" />
            </a>
          </div>
        </div>

        <h1 className="card-title mt-4 text-2xl cursor-pointer">{title}</h1>

        <div className="divider divider-end divider-accent text-xl opacity-50 font-[Neue-Montreal-Regular]">
          {type}
        </div>

        <div className="w-full h-full">
          {type === "youtube" && youTubeId && (
            <div className="w-full h-full aspect-video">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${youTubeId}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          )}
          {type === "tweet" && <Tweet id={link.split("/status/")[1]} />}

          {type === "link" && (
            <div className="w-full h-full">
              <iframe
              className="w-full h-full"
              src={link}
              title="article-link-holder"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
