import {Component} from 'react';
import {Foods} from './foods';

class Menu extends Component{
    constructor(props){
        super(props);
        this.state = 
              {
                items: Foods
              }
    }
     render(){
        const result = this.state.items.map( (item) => {
          return(
             <div key={item.id} className="col-12 col-sm-6 bg-warning border border-dark text-center">
                    <h1  className="mt-2">{item.name}</h1>
                    <h3  className="mt-2">{item.category}</h3>
                    <img className="images img-thumbnail rounded" src={item.image} alt="foodphotos" />
                    <h3   className="mt-2 text-bold text-dark">{item.price}</h3>
             </div>
          )
        });
         
      return(
           <div className="container-sm">
                <div className="row">
                  {result}
                </div>
           </div>
      )
     }
}

export default Menu;