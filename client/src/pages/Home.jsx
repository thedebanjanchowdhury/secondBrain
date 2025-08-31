import React from "react";
import {
  FileText,
  Github,
  Link2,
  LinkedinIcon,
  MoveRight,
  Newspaper,
  Twitter,
  User,
} from "lucide-react";
import profilePic from "../assets/image/landing-page/profilePic.jpg";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full h-screen bg-accent flex flex-col items-center gap-[15%]">
        <motion.nav
          initial={{
            opacity: 0,
            y: -100,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            duration: 0.2,
          }}
          transition={{
            duration: 0.5,
            type: "spring",
          }}
          whileHover={{
            scale: 1.05,
            rotate: 0.5,
            y: 10,
          }}
          className="navbar text-primary-content bg-base-100 w-[50%] h-[10%] rounded-xl mt-4 shadow-lg flex justify-around p-4"
        >
          <h1 className="text-3xl animate-pulse">Welcome to your BRAIN!</h1>
          <div className="flex gap-4">
            <button
              onClick={() => navigate("/signup")}
              className="btn btn-ghost btn-accent border-accent"
            >
              SignUp
            </button>
            <button
              onClick={() => navigate("/login")}
              className="btn btn-ghost btn-primary border-primary"
            >
              Login
            </button>
            <button className="btn btn-ghost rounded-full bg-accent-content w-[6vw] hover:bg-accent hover:text-accent-content p-2">
              Your BRAIN
            </button>
          </div>
        </motion.nav>

        <section className="bg-content font-[Neue-Montreal-Bold] flex flex-col items-center w-[70%]">
          <h1 className="text-9xl text-center w-full text-primary">
            Your Digital <br />
            Memory{" "}
            <motion.span
              initial={{
                opacity: 0,
                x: -100,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.4,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.1,
                rotate: 1,
                // fontFamily: "Neue-Montreal-BoldItalic",
                color: "text-secondary",
              }}
              className="inline-block text-black font-[Gambarino-Regular]  font-semibold"
            >
              HUB
            </motion.span>
          </h1>

          <p className="mt-10 text-black text-center opacity-35  !text-3xl ">
            Store tweets, documents, articles <br /> and links. Access them
            anytime
          </p>

          <div className="flex mt-8 gap-8">
            <motion.button
              initial={{
                scale: 0,
                rotate: 8,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                rotate: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.1,
                rotate: 1,
              }}
              className="btn btn-primary flex gap-4 text-2xl btn-xl"
            >
              Get Started{" "}
              <MoveRight
                size={35}
                className="rounded-full bg-accent p-1 text-black"
              />
            </motion.button>

            <motion.button
              initial={{
                scale: 0,
                rotate: 8,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                rotate: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.4,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.1,
                rotate: 1,
              }}
              className="btn btn-base-100 btn-xl flex gap-4"
            >
              Login Here <User />
            </motion.button>
          </div>
        </section>
      </div>

      <div className="w-full h-screen p-16 flex flex-col gap-32 items-center">
        <motion.h1
          initial={{
            opacity: 0,
            y: -100,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            delay: 0.1,
            ease: "easeInOut",
          }}
          className="text-accent text-9xl font-semibold mt-2"
        >
          Features
        </motion.h1>

        <div className="flex gap-8 -mt-12">
          <motion.div
            initial={{
              opacity: 0,
              y: -100,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              ease: "circOut",
            }}
            whileHover={{
              scale: 1.1,
              rotate: 1,
              delay: 0,
            }}
            className="bg-primary shadow-xl rounded-2xl w-96 h-96 text-base-100 flex flex-col items-center justify-center"
          >
            <h1 className="card-title flex gap-4 items-center text-5xl">
              Tweets <Twitter className="mt-2" size={40} />
            </h1>
            <p className="text-2xl mt-8">
              Save and organise <br />
              important threads
            </p>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: -100,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              ease: "circOut",
            }}
            whileHover={{
              scale: 1.1,
              rotate: 1,
              delay: 0,
            }}
            className="bg-primary shadow-xl rounded-2xl w-96 h-96 text-base-100 flex flex-col items-center justify-center"
          >
            <h1 className="card-title flex gap-4 items-center text-5xl">
              Documents <FileText className="mt-2" size={40} />
            </h1>
            <p className="text-2xl mt-8 text-center">
              Manage important <br /> documents in one place
            </p>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: -100,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
              ease: "circOut",
            }}
            whileHover={{
              scale: 1.1,
              rotate: 1,
              delay: 0,
            }}
            className="bg-primary shadow-xl rounded-2xl w-96 h-96 text-base-100 flex flex-col items-center justify-center"
          >
            <h1 className="card-title flex gap-4 items-center text-5xl">
              Articles <Newspaper className="mt-2" size={40} />
            </h1>
            <p className="text-2xl mt-8 text-center">
              Bookmark articles <br /> for later reading
            </p>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: -100,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.1,
              ease: "circOut",
            }}
            whileHover={{
              scale: 1.1,
              rotate: 1,
              delay: 0,
            }}
            className="bg-primary shadow-xl rounded-2xl w-96 h-96 text-base-100 flex flex-col items-center justify-center"
          >
            <h1 className="card-title flex gap-4 items-center text-5xl">
              Links <Link2 className="mt-2" size={40} />
            </h1>
            <p className="text-2xl mt-8 text-center">
              Store and categorise <br /> useful links
            </p>
          </motion.div>
        </div>

        <h1 className="-mt-10 text-6xl opacity-40 font-[Neue-Montreal-BoldItalic]">
          All in one place!
        </h1>
      </div>

      <div className="w-full h-screen bg-accent p-16 flex items-center gap-8 text-3xl">
        <div className="w-full h-full p-8 flex items-center">
          <motion.h1
            initial={{
              opacity: 0,
              x: -100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.5,
              ease: "circOut",
            }}
            className="font-[Neue-Montreal-BoldItalic] w-full text-8xl"
          >
            Benefits of <br /> using BRAIN
            <motion.button
              initial={{
                scale: 0,
                rotate: 8,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                rotate: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.1,
                rotate: 1,
              }}
              className="btn btn-primary flex gap-4 text-2xl btn-xl mt-8"
            >
              Get Started{" "}
              <MoveRight
                size={35}
                className="rounded-full bg-accent p-1 text-black"
              />
            </motion.button>
          </motion.h1>

          <div className="w-[75%] h-[50%] flex flex-col gap-4">
            <motion.div
              initial={{
                opacity: 0,
                y: -100,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                ease: "circOut",
              }}
              className="bg-primary rounded-2xl p-4 font-semibold flex flex-col gap-4"
            >
              <h1 className="text-6xl text-center">Productivity Boost</h1>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                y: -100,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                ease: "circOut",
              }}
              className="bg-secondary rounded-2xl p-4 font-semibold flex flex-col gap-4"
            >
              <h1 className="text-6xl text-center">No more lost resources</h1>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                y: -100,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.9,
                ease: "circOut",
              }}
              className="bg-base-100 rounded-2xl p-4 font-semibold flex flex-col gap-4"
            >
              <h1 className="text-6xl text-center">Accessible Anywhere</h1>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                y: -100,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                ease: "circOut",
              }}
              className="bg-accent-content rounded-2xl p-4 font-semibold flex flex-col gap-4"
            >
              <h1 className="text-6xl text-center">No more stress</h1>
            </motion.div>
          </div>
        </div>
      </div>

      <footer className="footer h-full w-full sm:footer-horizontal bg-neutral text-neutral-content items-center p-8">
        <aside className="grid-flow-col items-center">
          <profilePic />
          <p className="text-xl">
            Created by Debanjan Chowdhury © {new Date().getFullYear()}
          </p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a
            href="https://github.com/debanjanchowdhury/second-brain"
            className="btn btn-ghost btn-sm rounded-full"
          >
            <Github />
          </a>
          <a
            href="https://www.linkedin.com/in/thedebanjanchowdhury/"
            className="btn btn-ghost btn-sm rounded-full"
          >
            <LinkedinIcon />
          </a>
        </nav>
      </footer>


    </div>
  );
};

export default Home;
