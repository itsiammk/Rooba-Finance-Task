// RightPanel.jsx
import Image from "next/image";
import styles from "@/styles/events.module.css";

const RightPanel = () => (
  <div className={styles.right}>
    <div className="p-5">
      <p className={styles.rightTitle}>
        Explore Your First <br /> Event
      </p>
      <p className={`${styles.rightHeading} mb-6`}>Event Name</p>

      <div className="flex mt-2">
        <Image src="/location_on.png" width={20} height={10} alt="Location icon" className={styles.icons} />
        <p className={`px-2 mr-6 ${styles.venue} font-bold`}>Venue</p>

        <Image src="/alarm.png" width={30} height={10} alt="Alarm icon" className={styles.iconsWatch} />
        <p className={`px-2 ${styles.venue} font-bold`}>04/3/2024 @19:00</p>
      </div>
      <p className="mt-4 text-base font-semibold">
        Lorem ipsum dolor sit, amet <br /> consectetur Enim nobis fugit error <br />
        voluptatem itaque at in <br /> explicabo sapiente exercitationem!
      </p>

      <p className="mt-8 mb-8 text-xl font-extrabold">Artist Lineup</p>
      <div className="flex items-center">
        <Image className="h-25 rounded" src="/image 157.png" width={100} height={10} alt="Artist" />
        <Image className="rounded" src="/image 159.png" width={130} height={110} alt="Artist" />
        <Image className="h-25 rounded" src="/image 158.png" width={100} height={10} alt="Artist" />
      </div>
      <div className="flex">
        <Image className="mt-8 rounded" src="/image 131.png" width={80} height={80} alt="Artist" />
        <button className={`ml-auto pr-16 mt-auto ${styles.joinBtn}`}>
          Join Waitlist
        </button>
      </div>
    </div>
  </div>
);

export default RightPanel;
