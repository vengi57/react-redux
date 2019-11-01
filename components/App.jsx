import React,{Component} from 'react';
import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
import {addReminder} from '../actions';

class App extends Component{
  constructor(props)
  {
    super(props);
    this.state={
      text:'',
    }
  }
addReminder()
{
  this.props.addReminder(this.state.text);
}
renderReminder()
{
  const reminders  = this.props;
  console.log("abcd",reminders);
 
}
render()
{
  console.log("props",this.props);
  return(
    <div>
    <h2>Remainder Pro</h2>
    <div>
    <input
     type="text"
     placeholder="Enter the list"  
     onChange={event=>
     this.setState({
      text:event.target.value
    })}
    />
    <div>
     {this.renderReminder()}
    <button type="button" className="btn btn-success"
    onClick={()=>this.addReminder()}
    > Add the remainder</button>
    </div>
    </div>
    </div>
  );
}
}

// function mapDispatchToProps(dispatch){
//   return bindActionCreators({addReminder},dispatch)//It dispatch to reducer function
// }

function mapStateToProps(state){
  return{
    remainder:state
  }
}

export default connect(mapStateToProps,{addReminder})(App);