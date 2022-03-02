import React, {Component} from "react";

export default class Menu extends Component{
  constructor(props)
  {
    super(props);

     this.state = 
     {
         dishes:
         [
          {
            id: 0,
            name:'Uthappizza',
            category: 'mains',
            label:'Hot',
            price:'4.99',
            description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'
          },
          {
            id: 2,
            name:'Vadonut',
            image: 'assets/images/vadonut.png',
            category: 'appetizer',
            label:'New',
            price:'1.99',
            description:'A quintessential ConFusion experience, is it a vada or is it?'
          }
         
        ]
     }
  }
    render(){

      const mymenu = this.state.dishes.map( (dish) =>{
        return(
          <div className="container-sm">
            <div className="row">
                <div key={dish.id} className="col-6">
                      <h1 className="mt-1">{dish.name}</h1>
                      <p className="mt-1">{dish.price}</p>
                      <p className="mt-1">{dish.description}</p>
                </div>
            </div>
          </div>
        )
      });

      return(
         {mymenu} 
      )
    }
} 
