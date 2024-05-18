// Events.jsx
import React, { useState, useEffect } from "react";
import styles from "../styles/events.module.css";
import { slides, slidesCollections } from "../constant";
import Logo from "./logo";
import SlideShow from "./slideShow";
import ToggleButton from "./toggleButton";
import RightPanel from "./rightPanel";
import RightPanelCollections from "./rightPanelCollections";

const Events = ({handleToggleClick, toggleOnEvent}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex) => (currentIndex + 1) % slides.length);
    }, 1500);

    return () => clearInterval(intervalId);
  }, [slides.length]);

  useEffect(()=>{
    setCurrentIndex(0)
  }, [toggleOnEvent])

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      partialVisibilityGutter: 40,
      slidesToSlide: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };


  const handleToggle = () => {
    setIsActive(!isActive);
    handleToggleClick()
  };

  return (
    <main className={`main relative min-h-screen max-h-screen pl-5 pb-5 ${styles.event}`}>
      <div className="flex">
        <div className={`flex-column ${styles.left}`}>
          <Logo />
          <div className="flex">
            <div>
              <span className={styles.txtGap}>
                <h1>ASTR</h1>
                <h1>IX</h1>
              </span>
              <p className="mt-16"></p>
              <span className={styles.txtGap}>
                <h1>EVE</h1>
                <h1>NTS</h1>
              </span>
            </div>
            <SlideShow slides={toggleOnEvent ? slides : slidesCollections} currentIndex={currentIndex} isEvent={toggleOnEvent} />
          </div>
          <ToggleButton isActive={isActive} handleToggle={handleToggle} />
        </div>

        <span className={`w-20 h-screen ml-auto ${styles.spn}`}>
          <div className={styles.early}>
            <div className={styles.article}>
              <p className={`font-semibold ${styles.exampleLeft}`}>
                Event : Oasis Bus tour , JLN Stadium , Delhi <span className={styles.symbol}>*</span> Collection Live : Meta Lives , live on astrix
              </p>
            </div>
          </div>
        </span>

        {toggleOnEvent ? <RightPanel /> : <RightPanelCollections responsive={responsive} />}
      </div>
    </main>
  );
};

export default Events;
