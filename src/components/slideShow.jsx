// SlideShow.jsx
import Image from "next/image";
import styles from "../styles/events.module.css";

const SlideShow = ({ slides, currentIndex, isEvent }) => (
  <div className={styles.slideshow}>
    <div className={`${isEvent && 'mt-7'} ${styles.slideshowSlider}`}>
      {slides.map((slide, index) => (
        <div
          className={styles.slide}
          key={slide.id}
          style={{
            opacity: index === currentIndex ? 1 : 0.8,
            transform: `translate3d(${(index - currentIndex) * 100}%, 0, 0)`,
          }}
        >
          {!isEvent && (
            <p className="text-xl">
              {index === currentIndex || index === currentIndex + 1 ? (
                "Lunar Palace\n(ft.Kanye West)"
              ) : (
                <span className="text-transparent h-10">H</span>
              )}
            </p>
          )}
          <Image
            className={`relative ${styles.mainImage}`}
            src={slide.image}
            width={450}
            height={550}
            alt="Picture"
          />
          {isEvent && index !== currentIndex && (
            <>
            <div className={styles.imgLogo}>
              Event Name
              <div className={styles.imgLocation}>
              <Image src="/location_on.png" width={20} height={10} alt="Location icon" className={styles.icons} />
        <p className={`px-2 mr-6 ${styles.venue} font-bold`}>Location</p>
              </div>
            </div>
            </>
          )}
        </div>
      ))}
    </div>
  </div>
);

export default SlideShow;
