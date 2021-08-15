import styles from "../../styles/Home.module.css";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import { motion } from "framer-motion";
import { images } from "../../constants/images";

const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96]
};

const imageVariants = {
  exit: { y: "50%", opacity: 0, transition },
  enter: {
    y: "0%",
    opacity: 1,
    transition
  }
};

const backVariants = {
  exit: { x: 100, opacity: 0, transition },
  enter: { x: 0, opacity: 1, transition: { delay: 1, ...transition } }
};

const SingleImage = () => {
  const route = useRouter();
  const id = String(route.query.id);
  
  return (
      <motion.div className={styles.single} initial="exit" animate="enter" exit="exit">
        <motion.div variants={imageVariants}>
          <Image
              layout={"fill"}
              src={`https://static1.squarespace.com/static/5b475b2c50a54f54f9b4e1dc/t/${
                  images[parseInt(id, 10)]
              }.jpg?format=1500w`}
              alt="The Barbican"
          />
        </motion.div>
        <motion.div className={styles.back} variants={backVariants}>
          <Link href="/">
            <a>
              ← Back
            </a>
          </Link>
        </motion.div>
      </motion.div>
  );
};

export default SingleImage;
