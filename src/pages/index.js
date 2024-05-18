import { Inter } from "next/font/google";
import Events from "@/components/events";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [toggleOnEvent, setToggleOnEvents] = useState(true);
  const handleToggleClick = () => {
    setToggleOnEvents((prev) => !prev);
  };
  return (
    <>
      <Events
        toggleOnEvent={toggleOnEvent}
        handleToggleClick={handleToggleClick}
      />
    </>
  );
}
