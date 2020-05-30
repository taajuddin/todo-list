import React from 'react';

class AddTodo extends React.Component{
	state={
		title:''
	}
	handleChange=(e)=>{
		this.setState({[e.target.name]:e.target.value})
	}
	handleSubmit=(e)=>{
		e.preventDefault()
		this.props.addTodo(this.state.title)
		this.setState({title:''})
	}

	render(){

		return(
			<form onSubmit={this.handleSubmit} style={{display:"flex"}}>
				<input type="text"
				 name="title" 
				 style={{flex:'10', padding: '5px'}}
				 placeholder="Add Todo ...."
				 value={this.state.title}Change
				 onChange={this.handleChange}
				 />
				 <input type="submit"
				  value="Submit"
				  className="btn"
				  style={{flex:"1"}}
				  />
			</form>
			)
	}
}

export default AddTodo