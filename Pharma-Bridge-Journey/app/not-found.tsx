'use client'
import React from 'react';
// import Link from 'next/link';
// import { FaExclamationTriangle } from 'react-icons/fa';
import styles from "@/app/styles/fourofour.module.css";
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const NotFoundPage = ({ message = "Page Not Found", submessage = "This page does not exist" }) => {
  const router = useRouter();
  return (
    <section className={`${styles.pageFour}`}>
      {/* <FaExclamationTriangle className={styles.exclamationTriangle} /> */}
      <Image src='/404Mascot.PNG' height={300} width={300} alt='404-mascot' />
      <h1 className={styles.fourTextOne}>{message}</h1>
      <p className={styles.fourTextTwo}>{submessage}</p>
      <button
        onClick={() => router.back()}
        className={styles.goBack}
      >Back
      </button>
    </section>
  )
}

export default NotFoundPage