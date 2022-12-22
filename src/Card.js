import React from 'react';

// function Card() {
//   return (
//     <div>
//       <img alt='robot photo' src='' />
//       <h1>{this.name}</h1>
//       <p>{this.email}</p>
//     </div>
//   );
// }

// const Card = (properties) => {
//     return (
//       <div>
//         <img
//           alt='robot image'
//           src={`https://robohash.org/bgset_bg1/${properties.id}?size=200x200`}
//         />
//         <h1>{properties.name}</h1>
//         <p>{properties.email}</p>
//       </div>
//     );
//   };

const Card = ({ name, email, id }) => {
  // const Card = (properties) => {
  //     const { name, email, id } = properties;
  return (
    <>
      <div className='tc dib br4 pa3 ma2 grow bg-light-green bw3 shadow-5'>
        <img
          src={`https://robohash.org/bgset_bg1/${id}?size=250x250`}
          alt='robotImage'
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </>
  );
};

export default Card;
