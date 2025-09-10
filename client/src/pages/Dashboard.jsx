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
              onClick={() =>
                document.getElementById("add-new-modal").showModal()
              }
              className="
            btn btn-lg gap-4 btn-primary text-base-100 
            font-[Neue-Montreal-Bold] z-1000
            "
            >
              <PlusCircleIcon />
              Add New
            </motion.button>

            <dialog id="add-new-modal" className="modal">
              <div className="modal-box w-[55%]">
                <h2 className="text-3xl">Add New Content</h2>
                <p className="opacity-50 text-sm">Enter Proper Details</p>
                <div className="divider"></div>

                <form
                  action="submit"
                  className="px-8 font-[Neue-Montreal-Regular] flex flex-col gap-6"
                >
                  <select
                    defaultValue="Type selector"
                    className="select select-accent select-xl w-full"
                  >
                    <option disabled={true}>Select a Type</option>
                    <option>Tweet</option>
                    <option>Youtube</option>
                    <option>Link</option>
                  </select>

                  <label className="floating-label">
                    <input
                      type="text"
                      placeholder="Enter Tag"
                      className="input input-bordered input-xl 
                      input-accent w-full"
                    />
                    <span>Enter Tag</span>
                  </label>

                  <label className="floating-label">
                    <input
                      type="text"
                      placeholder="Enter Title"
                      className="input input-bordered input-xl 
                      input-primary w-full"
                    />
                    <span>Enter Title</span>
                  </label>

                  <label className="floating-label">
                    <input
                      type="text"
                      placeholder="Enter Link"
                      className="input input-bordered input-xl 
                      input-primary w-full"
                    />
                    <span>Enter Link</span>
                  </label>
                </form>

                <div className="divider "></div>
                <form
                  action="dialog"
                  className="modal-backdrop flex justify-between"
                >
                  <div className="btn btn-lg w-[35%] hover:bg-primary hover:text-black text-white bg-accent">
                    Submit
                  </div>
                  <div
                    onClick={() =>
                      document.getElementById("add-new-modal").close()
                    }
                    className="btn btn-sm btn-dash text-white w-[25%] flex "
                  >
                    Close
                  </div>
                </form>
              </div>
            </dialog>
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

          <div className="break-inside-avoid mb-4">
            <Card
              type="link"
              link="https://github.com/emmabostian/design-inspiration?tab=readme-ov-file"
              title="Design Inspiration"
            />
          </div>

          {/* <Editor /> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
