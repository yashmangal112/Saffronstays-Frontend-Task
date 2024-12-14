'use client'

import Image from "next/image"
import ImageSelector from "../../assets/ImageTransition.svg"
import DetailImage from "../../assets/DetailPhoto.svg"
import styles from "../styles/hero.module.css"
import { Inter, Lora } from 'next/font/google';


const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '500', '600'],
});

const lora = Lora({
    subsets: ['latin'],
    weight: ['400', '500', '600'],
});

export const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.title}>
                <h1 className={lora.className}>Sea La Vie</h1>
                <p className={inter.className}>Alibaug, Maharashtra</p>
                <div className={styles.smallLogo}>
                </div>
            </div>
            <Image src={ImageSelector} alt="Menu to check next photo" className={styles.menu}/>
            <Image src={DetailImage} alt="Smaller house picture" className={styles.detail}/>
        </div>
    )
}