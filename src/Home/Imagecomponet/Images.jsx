import React, { useState } from "react";

const Images = () => {
  const [isPaused, setIsPaused] = useState(false);

  const styles = {
    container: {
      width: "100%",
      overflow: "hidden",
      backgroundColor: "#f3f4f6",
      padding: "2rem 0",
    },
    slider: {
      position: "relative",
      display: "flex",
      overflow: "hidden",
    },
    track: {
      display: "flex",
      animation: isPaused ? "none" : "scroll 5s linear infinite",
    },
    imageWrapper: {
      display: "flex",
      gap: "1rem",
    },
    image: {
      height: "250px",
      width: "250px",
      objectFit: "cover",
      borderRadius: "0.5rem",
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.3s ease",
    },
  };

  return (
    <div style={styles.container}>
      <div
        style={styles.slider}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div style={styles.track}>
          <div style={styles.imageWrapper}>
            <img
              src="https://babulkeyer.org/wp-content/uploads/2025/03/16-1.jpg"
              alt="charity"
              style={styles.image}
            />
            <img
              src="https://babulkeyer.org/wp-content/uploads/2025/03/15-1.jpg"
              alt="charity"
              style={styles.image}
            />
            <img
              src="https://babulkeyer.org/wp-content/uploads/2025/03/13-1.jpg"
              alt="charity"
              style={styles.image}
            />
            <img
              src="https://babulkeyer.org/wp-content/uploads/2025/03/12-1.jpg"
              alt="charity"
              style={styles.image}
            />
            <img
              src="https://babulkeyer.org/wp-content/uploads/2025/03/11-1.jpg"
              alt="charity"
              style={styles.image}
            />
            <img
              src="https://babulkeyer.org/wp-content/uploads/2025/03/20.jpg"
              alt="charity"
              style={styles.image}
            />
            <img
              src="https://babulkeyer.org/wp-content/uploads/2025/03/19-1.jpg"
              alt="charity"
              style={styles.image}
            />
            <img
              src="https://babulkeyer.org/wp-content/uploads/2025/03/18-1.jpg"
              alt="charity"
              style={styles.image}
            />
            <img
              src="https://babulkeyer.org/wp-content/uploads/2025/03/17-1.jpg"
              alt="charity"
              style={styles.image}
            />
            {/* Duplicate images for seamless loop */}
            <img
              src="https://babulkeyer.org/wp-content/uploads/2025/03/16-1.jpg"
              alt="charity"
              style={styles.image}
            />
            <img
              src="https://babulkeyer.org/wp-content/uploads/2025/03/15-1.jpg"
              alt="charity"
              style={styles.image}
            />
            <img
              src="https://babulkeyer.org/wp-content/uploads/2025/03/13-1.jpg"
              alt="charity"
              style={styles.image}
            />
            <img
              src="https://babulkeyer.org/wp-content/uploads/2025/03/12-1.jpg"
              alt="charity"
              style={styles.image}
            />
            <img
              src="https://babulkeyer.org/wp-content/uploads/2025/03/11-1.jpg"
              alt="charity"
              style={styles.image}
            />
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          
          img:hover {
            transform: scale(1.05);
          }
        `}
      </style>
    </div>
  );
};

export default Images;
