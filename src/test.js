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
             <div key={item.id} className="col-12 col-sm-6 bg-warning border border-dark text-center my-2">
                    <h2  className="mt-2">{item.name}</h2>
                    <h4  className="mt-2">{item.category}</h4>
                    <img className="img img-fluid images img-thumbnail rounded" src={item.image} alt="foodphotos" />
                    <h4   className="mt-2">{item.price}</h4>
             </div>
          )
        });
      return(
           <div className="container-xl">
                <div className="row">
                  {result}
                </div>
           </div>
      )
     }
}

export default Menu;