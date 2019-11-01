import React,{Component} from 'react';
import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
import {addReminder,deleteReminder,clearReminder} from '../actions';

class App extends Component{
  constructor(props)
  {
    super(props);
    this.state={
      text:'',
      date:'' 
    }
  }
addReminder()
{
  this.props.addReminder(this.state.text,this.state.date);
}

deleteReminder(id){
  console.log("deleting the id",id);
  console.log("delete props",this.props);
  this.props.deleteReminder(id);
}
renderReminder()
{
  const {remainder}  = this.props;
  // console.log("abcd",remainder);
  return(
    <ul>
    {
      remainder.map(reminder=>{
        return(
          <li key={reminder.id}>
          <div>{reminder.text}</div>
          <div>{reminder.date}</div>
          <button className="list-item delete-button" 
          onClick={()=>this.deleteReminder(reminder.id)}>&#x2715;</button>
          </li>
        )
      })
    }
    </ul>
  )
}
render()
{
  console.log("props",this.props);
  return(
    <div>
    <h2>Remainder Pro</h2>
    <div>
    <input type="text" placeholder="Enter the list"
     onChange={event=>
     this.setState({
      text:event.target.value
    })} />
    <input type="text" placeholder="Enter the Date"
     onChange={event=>
     this.setState({
      date:event.target.value
    })} />
    <div>
    <button type="button" className="btn btn-success"
    onClick={()=>this.addReminder()}
    > Add the remainder</button>
    </div>
     {this.renderReminder()}
     <button onClick={()=>this.props.clearReminder()}>Clear reminders</button>
    </div>
    </div>
  );
}
}

// function mapDispatchToProps(dispatch){
//   return bindActionCreators({addReminder},dispatch)//It dispatch to reducer function
// }

function mapStateToProps(state){
   console.log("data passing from reducer to comp");
  return{
    remainder:state
  }
}

export default connect(mapStateToProps,{addReminder,deleteReminder,clearReminder})(App);