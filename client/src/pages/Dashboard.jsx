import React from "react";
import Sidebar from "../components/common/Sidebar";
import { PlusCircleIcon, ShareIcon } from "lucide-react";
import { motion } from "motion/react";

const variants = {
  normal: {
    scale: 1,
  },
  hover: {
    scale: 1.04,
  },
};

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />

      <nav className="w-full h-30 flex items-center justify-end p-8 gap-4">
        <motion.button
          variants={variants}
          initial="normal"
          whileHover="hover"
          transition={{
            duration: 0.2,
          }}
          className="btn btn-xl gap-4 btn-secondary text-base-100 font-[Neue-Montreal-Bold]"
        >
          <ShareIcon />
          Share Brain
        </motion.button>

        <motion.button
          variants={variants}
          initial="normal"
          whileHover="hover"
          transition={{
            duration: 0.2,
          }}
          className="btn btn-xl gap-4 btn-primary text-base-100 font-[Neue-Montreal-Bold]"
        >
          <PlusCircleIcon />
          Add New
        </motion.button>
      </nav>

      
    </div>
  );
};

export default Dashboard;
