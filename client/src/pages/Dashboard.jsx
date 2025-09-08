import React, { useState } from "react";
import Sidebar from "../components/common/Sidebar";
import {
  FileText,
  Hash,
  Link2,
  PlusCircleIcon,
  ShareIcon,
  Twitter,
  VideoIcon,
} from "lucide-react";
import { motion } from "motion/react";
import Card from "../components/common/Card";
// import Editor from "../components/common/Editor";

const variants = {
  normal: { scale: 1 },
  hover: { scale: 1.04 },
};

const menuItems = [
  { name: "Tweets", icon: <Twitter /> },
  { name: "Videos", icon: <VideoIcon /> },
  { name: "Documents", icon: <FileText /> },
  { name: "Links", icon: <Link2 /> },
];

const Dashboard = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex">
      <Sidebar className="fixed top-0 left-0 h-screen" />

      <div className="flex flex-col w-full h-screen ml-[25vw]">
        <nav className="w-full h-30 flex items-center justify-end p-8 gap-4">
          <motion.button
            variants={variants}
            initial="normal"
            whileHover="hover"
            transition={{ duration: 0.2 }}
            className="btn btn-lg gap-4 btn-secondary text-base-100 font-[Neue-Montreal-Bold]"
          >
            <ShareIcon />
            Share Brain
          </motion.button>

          <div className="relative">
            <motion.button
              variants={variants}
              initial="normal"
              whileHover="hover"
              transition={{ duration: 0.2 }}
              onClick={() => setOpen((prev) => !prev)}
              className="
            btn btn-lg gap-4 btn-primary text-base-100 
            font-[Neue-Montreal-Bold] z-1000
            "
            >
              <PlusCircleIcon />
              Add New
            </motion.button>

            {open && (
              <ul className="absolute top-[100%] right-0 w-full h-full flex flex-col">
                {menuItems.map((item, idx) => (
                  <li
                    key={idx}
                    className="
              mt-5 w-40 bg-accent 
              rounded-box shadow-md p-2
              cursor-pointer text-accent-content flex 
              text-md
              "
                  >
                    {item.icon}
                    {item.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </nav>

        <div className="py-10 ml columns-3 hover:shadow-2xl">
          <div className="break-inside-avoid">
            <Card
              type="tweet"
              link="https://x.com/aditiitwt/status/1962764174565535877"
              title="Brave is best👍🏻"
            />
          </div>

          <div className="break-inside-avoid mb-4">
            <Card
              type="youtube"
              link="https://www.youtube.com/watch?v=4YXcwwhh2LA"
              title="New Train Sim Video🚆"
            />
          </div>

          {/* <Editor /> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
