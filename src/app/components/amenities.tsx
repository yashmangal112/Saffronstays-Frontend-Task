'use client'

import styles from "../styles/amenities.module.css"
import { Button } from "./button"
import Image from "next/image"
import bed from "../../assets/Bed 2.svg"
import people from "../../assets/Group.svg"
import air from "../../assets/Air-conditioner.svg"
import parking from "../../assets/Parking.svg"
import { Inter, Lora } from 'next/font/google';

const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '500', '600'],
});

const lora = Lora({
    subsets: ['latin'],
    weight: ['600', '500', '400'],
});


export const Amenities = () => {
    return (
        <div className={styles.amenitiesContainer}>
            <h2 className={lora.className}>
                Amenities
            </h2>
            <ol className={`${styles.listContainer} ${inter.className}`}>
                <li className={styles.listItem}>
                    <Image src={bed} alt="Bed icon" />
                    <span>4 Bedrooms</span>
                </li>
                <li className={styles.listItem}>
                <Image src={parking} alt="parking icon" />
                    <span>Free Parking</span>
                </li>
                <li className={styles.listItem}>
                    <Image src={bed} alt="Bed icon" />
                    <span>4 Bedrooms</span>
                </li>
                <li className={styles.listItem}>
                    <Image src={people} alt="two people icon" />
                    <span>12 Guests</span>
                </li>
                <li className={styles.listItem}>
                <Image src={air} alt="air-conditioner icon" />
                    <span>Air conditioning</span>
                </li>
                <li className={styles.listItem}>
                    <Image src={people} alt="two people icon" />
                    <span>12 Guests</span>
                </li>
            </ol>
            <Button text="View all Amenities" disabled={false} bgColor="buttonTransparent"/>
        </div>
    )
}