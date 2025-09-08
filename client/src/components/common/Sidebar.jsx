import React from "react";
import { Brain, File, Hash, Link2, Twitter, VideoIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";

const sidebarItems = [
  { name: "Tweets", icon: <Twitter />, link: "/tweets" },
  { name: "Videos", icon: <VideoIcon />, link: "/videos" },
  { name: "Documents", icon: <File />, link: "/documents" },
  { name: "Links", icon: <Link2 />, link: "/links" },
];

const Sidebar = ({ className = "" }) => {
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className={`w-[20vw] h-screen bg-accent ${className}`}>
      <div
        className="
        bg-primary w-full h-[10%] shadow-lg 
        rounded-br-md rounded-bl-md shadow-primary
        "
      >
        <div className="w-full h-full flex items-center justify-center gap-2">
          <Brain size={45} />
          <h1 className="text-4xl font-[Neue-Montreal-BoldItalic]">
            SECOND BRAIN
          </h1>
        </div>
      </div>

      <div className="w-[80%] mt-15">
        {sidebarItems.map((item, idx) => (
          <ul key={idx}>
            <li>
              <motion.div
                initial={{
                  scale: 1,
                  rotate: 0,
                }}
                whileHover={{
                  scale: 1.1,
                  rotate: -1,
                  ease: "easeIn",
                }}
                transition={{
                  duration: 0.1,
                }}
                onClick={() => handleNavigate(item.link)}
                className="
                flex items-center ml-10
                text-accent-content hover:text-white border-accent-content
                hover:bg-accent-content p-4 gap-2 text-2xl cursor-pointer rounded-2xl
                transition-all duration-200 ease-in-out
                "
              >
                {item.icon}
                {item.name}
              </motion.div>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
