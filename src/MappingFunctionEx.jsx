import React from 'react';

// class MappingFunctionEx extends React.Component {
//   constructor() {
//     super();
//   }

//   render() {
//     const data = [
//       { label: 'Mars'},
//       { label: 'Venus'},
//       { label: 'Jupiter'},
//       { label: 'Earth'},
//       { label: 'Saturn'},
//       { label: 'Neptune'},
//     ];

//     // const htmlList = data.map((item) => {
//     //   const label = item.label;
//     //   return (

//     //   )
//     // })
      
//     return (
//       <div>
//         <ul>
//           {data.map((item) => {
//             const label = item.label;
//             return (
//               <li>{label}</li>
//             )
//           })}
//         </ul>
//       </div>
//     )  
//   }
// }


class MappingFunctionEx extends React.Component {
  constructor() {
    super();
  }

  render() {
    const data = [
      { label: 'Mars'},
      { label: 'Venus'},
      { label: 'Jupiter'},
      { label: 'Earth'},
      { label: 'Saturn'},
      { label: 'Neptune'},
    ];

    const htmlList = data.map((item) => {
      const label = item.label;
      return (
        <li>{label}</li>
      )
    })
      
    return (
      <div>
        <ul>
          {htmlList}
        </ul>
      </div>
    )  
  }
}

export default MappingFunctionEx;
