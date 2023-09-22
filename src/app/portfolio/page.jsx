import React from "react";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import Image from "next/image";
import { items } from "./data.js";
import { notFound } from "next/navigation";
import Link from "next/link";

const getData = (cat) => {
  const data = items;

  if (data) {
    return data;
  }

  return notFound();
};

const Category = async () => {
  const data = getData();
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{data.category}</h1>

      {data.applications.map((item) =>(
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
            <Link className={styles.btn_link} href={`/portfolio/${item.id}`}>See more</Link>
          </div>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              fill={true}
              src={item.image}
              alt=""
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;


// import React from "react";
// import styles from "./page.module.css";
// import Link from "next/link";

// const Portfolio = () => {
//   return (
//     <div className={styles.container}>
//       <h1 className={styles.selectTitle}>Choose a gallery</h1>
//       <div className={styles.items}>
//         <Link href="/portfolio/illustrations" className={styles.item}>
//           <span className={styles.title}>Illustrations</span>
//         </Link>
//         <Link href="/portfolio/websites" className={styles.item}>
//           <span className={styles.title}>Websites</span>
//         </Link>
//         <Link href="/portfolio/applications" className={styles.item}>
//           <span className={styles.title}>Application</span>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Portfolio;