import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>

    <Card name="Beyonce" img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg" 
    alt="avatar_img" tel="+123 456 789" email="b@beyonce.com"/>
    <Card name="Jack Bauer" img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg" 
    alt="avatar_img" tel="+987 654 321" email="jack@nowhere.com"/>
  </div>,
  document.getElementById("root")
);
function Card(props){
  return <div>
     <h2 className="my-style">{props.name}</h2>
    <img
      src={props.img}
      alt={props.alt}
    />
    <p>{props.tel}</p>
    <p>{props.email}</p>

  </div>
}
