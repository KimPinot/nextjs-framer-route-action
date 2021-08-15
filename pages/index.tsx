import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link";
import styles from '../styles/Home.module.css'
import { motion } from "framer-motion";
import { images } from "../constants/images";

// transition Template
const transition = {
  duration: 0.5,
  ease: [0.43, 0.13, 0.23, 0.96]
}

// variants for thumbnails
const thumbnailVariants = {
  // default animation value
  initial: {
    scale: 0.9,
    opacity: 0,
  },
  // run this when enter page
  enter: {
    scale: 1,
    opacity: 1,
    transition,
  },
  // run this when exit page
  exit: {
    scale: 0.5,
    opacity: 0,
    transition: {
      ...transition,
      duration: 1.5
    }
  }
}

// thumbnail frame animation
const frameVariants = {
  // make smaller when hover
  hover: {
    scale: 0.95,
  }
}

// thumbnail image animation
const imageVariants = {
  // make bigger when hover
  hover: {
    scale: 1.1,
  },
}

const thumbnailsVariants = {
  exit: {
    transition: {
      // delay each direct children element animation (0.1 * order)sec
      staggerChildren: 0.1,
    },
  },
}

interface IThumbnailProps {
  id: string;
  i: number;
}

const Thumbnail = ({ id, i }: IThumbnailProps) => {
  return (
      <motion.div className={styles.thumbnail} variants={thumbnailVariants}>
        <motion.div
            whileHover="hover"
            className={styles.frame}
            variants={frameVariants}
            transition={transition}
        >
          <Link scroll={false} href={`/image/${i}`} passHref>
            <motion.div variants={imageVariants} transition={transition}>
              <Image
                layout={"responsive"}
                width={1185}
                height={1778}
                src={`https://static1.squarespace.com/static/5b475b2c50a54f54f9b4e1dc/t/${id}.jpg?format=1500w`}
                alt="The Barbican"
              />
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
  );
}

const Home: NextPage = () => {
  return (
    <>
      <h1 className={styles.title}>Barbican</h1>
      <div className={styles.gallery}>
        <motion.div
            className={styles.thumbnails}
            initial="initial"
            animate="enter"
            exit="exit"
            variants={thumbnailsVariants}
        >
          {images.map((id, i) => <Thumbnail key={id} id={id} i={i} />)}
        </motion.div>
      </div>
    </>
  )
}

export default Home
