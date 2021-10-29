import React from 'react';
// import logo from './logo.svg';
import './App.css';
import ListItems from './ListItems'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items:[],
      currentItem:{

        
        onEdit:false,
        
      
        text:'',
        key:'',
        isChecked: false
        
      }
    }
    this.addItem = this.addItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }
  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    if(newItem.text !==""){
      const items = [...this.state.items, newItem];
    this.setState({
      items: items,
      currentItem:{
        text:'',
        key:''
        
      }
    })
   }
  }
  

  handleInput(e){
  this.setState({
      currentItem:{
       text: e.target.value,
         key: Date.now(),
        isChecked: false
      }
     })
   }
 

  deleteItem(key){
    const filteredItems= this.state.items.filter(item =>
      item.key!==key);
    this.setState({
      items: filteredItems
    })

  }
  setUpdate(text,key){
    const items = this.state.items;
    items.map(item=>{      
      if(item.key===key){
        item.text= text;
      }
    })
    this.setState({
      items: items
    })
    
   
  }


  
  handleCheckboxChange = (e) => {

  this.setState({ isChecked: e.target.checked });
}
  toggleChange = () => {

    this.setState({ isChecked: !this.state.isChecked });
   
}
onCheck = (index) => {
    if(this.state.currentItem.isChecked === true) {
      this.setState({
        currentItem:{
          isChecked: false  


      }
    })
  
  } else {
    this.setState({
      currentItem:{
        isChecked: true
      }
    })
  }
}
onEdit = () => {
  this.setState({ onEdit: true})

}





 render(){
  return (
    <div className="App">
      <header>
        <form id="to-do-form" onSubmit={this.addItem}>
        <br />
          <br />
          <input style={{color:'black',marginTop: "50px"}} type="text" placeholder="Enter task upfah" value= {this.state.currentItem.text} onChange={this.handleInput} />
          <button type="submit">Add</button>
        </form>
        <p>{this.state.items.text}</p>
        
          <ListItems 
          items={this.state.items} 
          deleteItem={this.deleteItem} 
          setUpdate={this.setUpdate} 
          onCheck={this.onCheck} 
          isChecked={this.state.currentItem.isChecked}
          />
        
      </header>
    </div>
  );
 }
}


export default App;