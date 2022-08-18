import { NextPage } from "next";
import React from "react";
import { Layout } from "../../features";
import styles from "./index.module.css";

const Note: NextPage = () => {
  return (
    <Layout className={styles.Note}>
      <div>
        Hey recruiter/visitor,
        <br />
        <br />
        I am Sharadindu Paul, a React/ Next/ React Native frontend developer.
        This website was built by me as an assignment, but that&apos;s not it. I
        have put a lot of time and effort making this website stand out.
        <br />
        So, I request you to send me your feedback (Contact details below). Even
        if you didn&apos;t like it, please let me know why. I would love to
        improve.
        <br />
        <br />
        Regards
        <br />
        Sharadindu Paul
        <br />
        <br />
        <br />
        <br />
        Phone/Whatsapp: <a href="tel:8145005641">+91 8145005641</a>
        <br />
        Email:{" "}
        <a href="mailto:sharadindu.paul007@gmail.com">
          sharadindu.paul007@gmail.com
        </a>
        <br />
        Resume:{" "}
        <a
          href="https://celebrated-paprenjak-8be496.netlify.app/sharadindu-paul-resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          MyResume.pdf
        </a>
        <br />
      </div>
    </Layout>
  );
};
export default Note;
