// ToggleButton.jsx
import { useRouter } from "next/router";
import styles from "@/styles/events.module.css";

const ToggleButton = ({ isActive, handleToggle }) => {
  const router = useRouter();

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
          className={`font-extrabold ${styles.offLabel}`}
        >
          Collections
        </label>
        <span className={styles.selected} aria-hidden="true"></span>
      </div>
    </div>
  );
};

export default ToggleButton;
