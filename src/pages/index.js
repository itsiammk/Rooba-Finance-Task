import { Inter } from "next/font/google";
import Events from "@/components/events";
import { useState, useEffect } from "react";
import SlideShow from "@/components/slideShow";
import LandingPage from "@/components/slidingText";
import introJs from "intro.js";
import "intro.js/minified/introjs.min.css"; // Import the CSS file

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [toggleOnEvent, setToggleOnEvents] = useState(true);
  const [isClicked, setIsClicked] = useState(false);

  const handleToggleClick = () => {
    setToggleOnEvents((prev) => !prev);
  };

  useEffect(() => {
    // Initialize the introJs tour
    const tour = introJs();

    // Define the tour steps
    tour.setOptions({
      steps: [
        {
          intro: "Click here to switch pages",
          element: document.querySelector(".buttonTop"),
        },
      ],
    });
    setTimeout(() => {
      tour.start();
    }, 1500);
  }, []); // Run the effect only once on mount

  return (
    <>
      {isClicked ? (
        <Events
          toggleOnEvent={toggleOnEvent}
          handleToggleClick={handleToggleClick}
        />
      ) : (
        <LandingPage />
      )}
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "50%",
          zIndex: 100,
          color: "white",
          padding: "0px 10px",
          borderRadius: "30px",
          backgroundColor: "black",
          fontSize: "20px",
        }}
        className="buttonTop"
        onClick={() => setIsClicked((prev) => !prev)}
      >
        <button
          className="buttonLeft"
          style={{ marginRight: "5px", marginBottom: "2px" }}
        >
          {"<"}
        </button>
        <button
          className="buttonRight"
          style={{ marginLeft: "5px", marginBottom: "2px" }}
        >
          {">"}
        </button>
      </div>
    </>
  );
}