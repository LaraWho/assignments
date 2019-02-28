import React from 'react';

const NameBadge = (props) => {

  let { firstName, lastName, email, phone, birthPlace, favFood, info } = props.badge
  return(
      <div className="badge">
          <header style={{backgroundColor: props.backgroundColor}}>Badge:</header>
          <p className="name">Name: {firstName} {lastName}</p>
          <p className="birth">Place of Birth: {birthPlace}</p>
          <p className="email">Email: {email}</p>
          <p className="phone">Phone: {phone}</p>
          <p className="food">Favourite Food: {favFood}</p>
          <p className="info">{info}</p>
      </div>
    )
  }
export default NameBadge;