// RightPanel.jsx
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "../styles/events.module.css";

const RightPanelCollections = ({ responsive }) => (
  <div className={styles.right}>
    <div className="p-4">
      <p className={`${styles.rightTitle} ${styles.rightTitle2} font-lg`}>
        Explore Your First <br /> Collectible
      </p>
      <p className={`mt-4 ${styles.rightHeading} ${styles.rightHeading2}`}>
        Meta <br /> Lives
      </p>

      <div className="flex mt-2">
        <p className={`px-2 mr-4 ${styles.venue} ${styles.venue2}`}>Live in Astrix</p>
      </div>
      <p className={`mt-4 px-2 text-base font-bold`}>
        Lorem ipsum dolor sit same <br />
        fugit error voluptatem itaque at in <br /> explicabo sapiente
        exercter <br /> items error in place
      </p>

      <div className="flex mt-6 mb-8">
        <Image
          className=""
          src="/people.png"
          width={100}
          height={10}
          alt="Picture of the location"
        />
        <p className={`px-2 mr-4 font-bold ${styles.venue}`}>
          22k people interested
        </p>
      </div>
      <div>
        <p className="text-xs font-bold">Collectibles</p>
      </div>
      <div className="mt-2">
        <Carousel
          arrows={false}
          additionalTransfrom={0}
          centerMode={false}
          className=""
          containerClass="container"
          dotListClass=""
          draggable
          partialVisible={true}
          focusOnSelect={false}
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          responsive={responsive}
          rtl={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          <Image
            className=""
            src="/Card Small.png"
            width={130}
            height={10}
            alt="Picture of the location"
          />
          <Image
            className=""
            src="/Card Small.png"
            width={130}
            height={10}
            alt="Picture of the location"
          />
          <Image
            className=""
            src="/Card Small.png"
            width={130}
            height={10}
            alt="Picture of the location"
          />
        </Carousel>
      </div>
      <div className="flex mt-4">
        <button className={`ml-auto pr-16 mt-auto ${styles.joinBtn}`}>
          Join Waitlist
        </button>
      </div>
    </div>
  </div>
);

export default RightPanelCollections;
