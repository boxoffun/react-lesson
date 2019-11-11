import React from 'react';


function Button(props) {
    console.log(props)
//   const buttonText = "Learn";
  return (
      <>
        <button>{props.text}</button>
        {props.children}
      </>
  );
}

export default Button;
