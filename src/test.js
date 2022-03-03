import React from 'react';

const myArray = 
[
  {id:1, name:"Cenk Berry"},
  {id:2, name:"Rana Berry"},
  {id:3, name:"Ahmet Altan"},
  {id:4, name:"Osman Erbulak"}
];

export const Tester = () => {
  
  const [people, setPeople] = React.useState(myArray);

  const removeItem = (id) =>{
    let newArray = people.filter( (person)=> person.id !== id);
    setPeople(newArray)
  };

  return(
     <>
       {people.map( (person) =>{

         const {id,name} = person;

            return(
                  <div key={id} className="col-6 text-center">
                      <div className="item bg-warning m-2 p-2 rounded">
                      <h4>{id}- {name}</h4>
                      <button className="btn-info p-2" onClick={ ()=> removeItem(id) }>Clear</button>
                      </div>
                  </div>
            )
       })}
            <div className="col-6 text-center">
                  <button className="btn-info p-2" onClick={ ()=> setPeople([]) }>
                  Clear Items!</button>
            </div>
    </>
  )
};