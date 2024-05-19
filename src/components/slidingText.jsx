import React from "react";
import Image from "next/image";
import Logo from "./logo";
import styles from './sliding.module.scss';

const LandingPage = () => {
  return (
    <div className="h-screen" style={{backgroundColor: '#ffe1df'}}>
      <div className={styles.container}>
        <Image src={'/image.png'} width={200} height={100} />
      </div>
      <div className={styles.text}>
        <span className={styles.we}>WE</span>
        <Image className={styles.imageFirstLine} src={'/ImageParty.png'} alt="Party" width={100} height={100} />
        <span className={styles.imageFirstLineTwo}> ORGANIZE THE </span>
        <span className={styles.textSecondLine}>
          CONNECTION
          <Image className={styles.imagePartySecond} src={'/Flowers.png'} alt="Flowers" width={100} height={100} />
        </span>
        <Image className={styles.imageThirdLine} src={'/peopleess.png'} alt="People" width={100} height={100} />
        <span className={styles.thirdLine}>
          {" "}
          BETWEEN <Image className={styles.ImageThirdMic} src={'/mic.png'} alt="Mic" width={100} height={100} />
          <span className={styles.music}>MUSIC</span>
        </span>
        <span>
          <span className={styles.artist}>ARTIST</span>
          <Image className={styles.imagePeople} src={'/imageArt.png'} alt="Art" width={100} height={100} />
          <span className={styles.culture}>CULTURE</span>
          <Image className={styles.imageCrowd} src={'/imageCrowd.png'} alt="Crowd" width={100} height={100} />
        </span>
        <Image className={styles.pinkFlower} src={'/pinkflower.png'} alt="Pink Flower" width={100} height={100} />
        <span className={styles.art}>ART </span>
        <Image className={styles.pumpkin} src={'/pumpkin.png'} alt="Pumpkin" width={100} height={100} />
        <span className={styles.collection}>& COLLECTIONS</span>
      </div>
    </div>
  );
};

export default LandingPage;