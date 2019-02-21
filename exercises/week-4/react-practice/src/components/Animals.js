import React from 'react'; 

const Animals = (props) => {
  let animalArr = props.props
  let mappedAnimals = animalArr.map((cutie, i) => {
    return (
      <div key={i+cutie} className="animal-box">
        <img src={cutie.image} alt={cutie.name}/>
        <h1>{cutie.name}</h1>
        <p>{cutie.info}</p>
        <button>adopt me now!</button>
      </div>
    )
  })
  return (
    <div className="animals-container">
      {mappedAnimals}
    </div>
  )
}

export default Animals;