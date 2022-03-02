import {Component} from 'react';
class Menu extends Component{
    constructor(props){
        super(props);
        this.state = 
              {
                items:
                [
                  {
                    id: 1,
                    name:'CaKaBo Pizza',
                    category: 'Pizza',
                    price:'29.99'
                  },
                  {
                    id: 2,
                    name:'Rana Cheesecake',
                    category: 'Appetizer',
                    price:'6.99',
                  },
                  {
                    id: 3,
                    name:'Barkallah Wrap',
                    category: 'Wrap',
                    price:'8.99'
                  },
                  {
                    id: 4,
                    name:'Berry Cake',
                    category: 'Dessert',
                    price:'12.99'
                  }
                ]
              }
    }
     render(){
        const result = this.state.items.map( (item) => {
          return(
             <div key={item.id} className="col-12 col-sm-6 bg-warning border border-dark">
                    <h1 className="text-center mt-2">{item.name}</h1>
                    <p  className="text-center mt-2">{item.category}</p>
                    <p  className="text-center mt-2">{item.price}</p>
                    <p  className="text-center mt-2">{item.description}</p>
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