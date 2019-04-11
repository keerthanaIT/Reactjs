<!-- If satatement -->

var user = {
  name: 'Mike',
  Age :10,
  Location:'New Yolk'
}
function getLocation(Location){
  if(Location){
    return <p>Location:{Location}</p>;
  }
}
var templateTwo = (
  <div>
    <h1>{user.name + '!!'}</h1>
    <h1>{user.name.toUpperCase()}</h1>
    <p>Age:{user.Age}</p>
    {getLocation(user.Location)}
  </div>
);


<!-- && condition -->

var user = {
  name: 'Mike',
  Age :26,
  Location:'New Yolk'
 
};



function getLocation(Location){
  if(Location){
    return <p>Location:{Location}</p>;
  }
}


var templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonomys'}</h1>
    {(user.Age && user.Age >= 18) && <p>Age:{user.Age}</p>}
    {getLocation(user.Location)}
  </div>
);



// user concept in src, app.js file

const user = {
  name: 'Mike',
  Age :26,
  Location:'New Yolk'
 
};



function getLocation(Location){
  if(Location){
    return <p>Location:{Location}</p>;
  }
}


const templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonomys'}</h1>
    {(user.Age && user.Age >= 18) && <p>Age:{user.Age}</p>}
    {getLocation(user.Location)}
  </div>
);
