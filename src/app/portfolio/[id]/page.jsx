import React from "react";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import Image from "next/image";
import { items } from "./data.js";
import { notFound } from "next/navigation";

const getData = (id) => {
  const data = items.works[id];
  console.log(data)
  if (data) {
    return data;
  }

  return notFound();
};

const Category = ({ params }) => {
  console.log(params)
  const data = getData(params.id);
  console.log(data)
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{data.title}</h1>
        <div className={styles.item} key={data.id}>
          <div className={styles.content}>
            <h1 className={styles.title}>{data.title}</h1>
            <p className={styles.desc}>{data.desc}</p>
            <Button text="See More" url="#" />
          </div>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              fill={true}
              src={data.image}
              alt=""
            />
          </div>
        </div>
    </div>
  );
};

export default Category;