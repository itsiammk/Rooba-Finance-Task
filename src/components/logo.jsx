// Logo.jsx
import Image from "next/image";
import styles from "@/styles/events.module.css";

const Logo = () => (
  <div className="pt-6 pb-6 flex">
    <Image
      className="mx-2"
      src="/Astrix Branding.png"
      width={50}
      height={50}
      alt="Picture of the logo"
    />
    <p className={styles.logo}>Astrix.</p>
  </div>
);

export default Logo;
