import React from "react";
import cover from "../image/cover page.webp";

function Home() {

  const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "20px",
  },
  image: {
    width: "80%",
    maxWidth: "600px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
  },
};
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to Zee's Store</h1>

      <img 
        src={cover} 
        alt="welcome" 
        style={styles.image}
      />
    </div>
  );
}
export default Home;
