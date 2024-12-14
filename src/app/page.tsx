'use client'

import styles from "./page.module.css";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Reviews } from "./components/reviews";
import { AboutIconsList } from "./components/aboutIconsList";
import { About } from "./components/about";
import { Amenities } from "./components/amenities";
import { Meals } from "./components/meals";
import { List } from "./components/list";
import { Location } from "./components/location";
import { Footer } from "./components/footer";
import { HouseDetailsCard } from "./components/houseDetailsCard";
import { PhotoCard } from "./components/photoCard";
import { Form } from "./components/form";
import { ResponsiveForm } from "./components/responsiveForm";


export default function Home() {
  return (
    <div className={`${styles.page}`}>
      <Header />
      <Form />
      <Hero />
      <main className={styles.main}>
        <Reviews />
        <AboutIconsList />
        <About />
        <Amenities />
        <Meals /> 
        <List text="Real Moments">
          <PhotoCard />
          <PhotoCard />
          <PhotoCard />
        </List>
        <Location />
        <List text="Rooms and Beds">
          <HouseDetailsCard />
          <HouseDetailsCard />
          <HouseDetailsCard />
        </List>
      </main>
      <Footer />
      <ResponsiveForm />
    </div>
  );
}
