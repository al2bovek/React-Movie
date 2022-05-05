import React from "react";

export default function Year() {

  const getCurrentYear = () => {
    return new Date().getFullYear();  };
  
    

  return (
    <footer>
      <p>{getCurrentYear()}</p>
      <p></p>
      <p></p>
    </footer>
  );
}