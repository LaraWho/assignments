import React from 'react';
import './styles.css';
import Cards from './Cards';

let vacationSpots = [
  {
    place: "Marlborough Sounds",
    price: 600,
    timeToGo: "Summer"
  },
  {
    place: "Florence",
    price: 1200,
    timeToGo: "Winter"
  },
  {
    place: "Pai, Thailand",
    price: 400,
    timeToGo: "Fall"
  },
  {
    place: "Meridian, Idaho",
    price: 40,
    timeToGo: "Spring"
  },{
    place: "Cancun",
    price: 900,
    timeToGo: "Winter"
  },{
    place: "China",
    price: 1200,
    timeToGo: "Fall"
  },{
    place: "Russia",
    price: 1100,
    timeToGo: "Summer"
  },{
    place: "Lebanon",
    price: 400,
    timeToGo: "Spring"
  }
]

const App = () => {

  const style = {
    padding: "10px",
    paddingBottom: "40px",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Quicksand', sans-serif",
    color: "#003300"
  }

  const header = {
    textAlign: "center", 
    marginTop: "40px", 
    marginBottom: "0",
    fontFamily: "'Quicksand', sans-serif",
    color: "#fff",
    fontSize: "42px"
  }

  let mappedSpots = vacationSpots.map((place, i) => {
    return (
    <Cards key={i+place.place} placeName={place.place} price={place.price} timeToGo={place.timeToGo}/>
    )
  })

    return (
      <div>
          <h1 style={header}>Vacation Spots</h1>
          <div style={style}>
            {mappedSpots}
          </div>
      </div>

    );
  }

export default App;
