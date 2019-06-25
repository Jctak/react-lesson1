import React from 'react';

const cardStyle = {
  border:'1px solid lightgray',
  margin: '10px',
  height: '400px',
  width: '270px',
  background: 'linear-gradient(to bottom, #384350, #384350 45%, white 45%)'
}

const imageStyle = {
  marginTop: '85px',
  paddingBottom: '20px',
  border: '4px solid white',
  borderRadius: '10px'
}

const hrStyle = {
  height: '2px',
  backgroundColor:'lightgray',
  margin: '0'
}

const pStyle = {
  textAlign:'left',
  paddingLeft: '30px',
  lineHeight: '8px'
}

const iconStyle = {
  backgroundColor: 'white',
  padding: '10px',
  border:'1px solid lightgray',
  borderRadius:'100px',
  color: 'orange',
  position: 'absolute',
  marginTop: '200px',
  marginLeft: '-90px'
}

const Card = props => {
  const { user } = props;
  console.log("user is", user);
  return (
    <div className='card' style={cardStyle}>
      <img src={user.picture.large} alt={user.name.first} style={imageStyle}/>
      <i class="fas fa-video" style={iconStyle}></i>
      <p>{user.name.first} {user.name.last}</p>
      <p>{user.cell}</p>
      <hr style={hrStyle}/>
      <p style={pStyle}>Ranking</p>
      <p style={pStyle}>Skills</p>
    </div>
  )
}

export default Card;
