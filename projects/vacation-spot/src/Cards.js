import React from 'react';

const Cards = ({placeName, timeToGo, price}) => {
  let backgroundImage;
  if(timeToGo === "Spring") {
    backgroundImage = "url(https://3.bp.blogspot.com/-p5CZT-2sEYc/WdtZu0cB0GI/AAAAAAAAAt0/FgGBq9sBup0Ngu47E_noFMxj80ug-99RQCLcBGAs/s1600/spring-season.jpg)"
  } else if(timeToGo === "Summer") {
    backgroundImage = "url(https://easyscienceforkids.com/wp-content/uploads/2013/06/summer_season.jpg)"
  } else if(timeToGo === "Winter") {
    backgroundImage = "url(http://uploads.pl-internal.com/MTBhNjlkZWItNTExNi00M2JkLWFhOTMtMmNjM2E1NWQwNDRl/content/2017/02/82befb4f0c658bdd56cba664eb6f548e.jpg)"
  } else {
    backgroundImage = "url(https://images.mentalfloss.com/sites/default/files/styles/mf_image_16x9/public/140069999.jpg?itok=REL7bPYC&resize=1100x1100)"
  }

    let priceSign;
    if(price <= 500) {
      priceSign = '£'
    } else if(price > 500 && price <= 1000) {
      priceSign = '££'
    } else if(price > 1000) {
      priceSign = '£££'
    }

  const style = {
    backgroundImage,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "#cccccc",
    textAlign: "center",
    padding: "20px",
    margin: "10px",
    width: "30%",
    height: "200px",
    borderRadius: "15px",
    boxShadow: "3px 3px 3px #003300"
  }


  return (
    <div style={style}>
        <h1>{placeName}</h1>
        <h2>Visit in {timeToGo}</h2>
        <p>{priceSign}</p>
    </div>
  )
}

export default Cards;