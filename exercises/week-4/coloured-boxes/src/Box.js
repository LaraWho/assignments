import React from 'react';

const Box = ({backgroundColor, color, title}) => {
  const styles = {
      backgroundColor,
      color,
      width: "200px",
      height: "200px",
      textAlign: "center",
      margin: "10px",
      borderRadius: "10px",
      fontWeight: "bold"
  }
  
  return(
        <div style={styles}>
          <h1>{title}</h1>
          <p>It's {backgroundColor}!</p>
        </div>
  )
}

export default Box;