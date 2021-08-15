import styles from "../../styles/Home.module.css";

import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";
import { images } from "../../constants/images";
import { GetServerSidePropsContext } from "next";

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

interface ISingleImageProps {
  id: string;
}

const SingleImage = ({ id }: ISingleImageProps) => {
  return (
      <motion.div className={styles.single} initial="exit" animate="enter" exit="exit">
        <motion.div variants={imageVariants}>
          <Image
              layout={"responsive"}
              width={1185}
              height={1778}
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

// id 파라미터를 SSR 단계에서 가져오도록 함
// 이로써 페이지가 이동되어도 기존 이미지가 사라지지 않음
export function getServerSideProps({ params }: GetServerSidePropsContext) {
  return {
    props: {
      ...params,
    },
  }
}

export default SingleImage;
