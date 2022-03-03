import React, {useState} from 'react';

export const Tester = () => {
  
   const [Title,myfunc] = useState("Main Title");

   const Changer = () => {
     if(Title === "Main Title"){
       myfunc("Now, I Changed!")
     }
     else{
      myfunc("Main Title");
     }
   }


   
  return(
    <div className='col-sm-6 bg-warning'>
      <div className="row p-4 text-center">
          <h1>{Title}</h1>
          <button
          className="btn btn-info"
          onClick={Changer}>
          Change the Title
          </button>
     </div>
    </div>
  )
};