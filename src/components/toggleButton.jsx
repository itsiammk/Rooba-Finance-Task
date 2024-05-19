// ToggleButton.jsx
import { useRouter } from "next/router";
import styles from "@/styles/events.module.css";
import { useEffect } from "react";
import introJs from "intro.js";
import "intro.js/minified/introjs.min.css"; 

const ToggleButton = ({ isActive, handleToggle }) => {
  const router = useRouter();

  useEffect(() => {
    const tour = introJs();

    tour.setOptions({
      steps: [
        {
          intro: "Click here for Collections ",
          element: document.querySelector(".collext"),
        },
      ],
    });
    setTimeout(() => {
      tour.start();
    }, 1500);
  }, []);

  return (
    <div className={`mt-36 ${styles.form}`}>
      <div className={styles.radioBlock}>
        <input
          type="radio"
          id="events"
          checked={isActive}
          onChange={handleToggle}
        />
        <label htmlFor="events" className={'font-extrabold'}>Events</label>
        <input
          type="radio"
          id="collections"
          checked={!isActive}
          onChange={handleToggle}
        />
        <label
          onClick={() => router.push("/")}
          htmlFor="collections"
          className={`font-extrabold ${styles.offLabel} collext`}
        >
          Collections
        </label>
        <span className={styles.selected} aria-hidden="true"></span>
      </div>
    </div>
  );
};

export default ToggleButton;
