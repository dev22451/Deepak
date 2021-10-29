import React from "react";

class Main extends React.Component {

  state = {

    id: '',
    todo: '',
  };

  handleInput = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value, id: new Date().getTime().toString(),
    })

  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state)
    this.setState({ todo: '' })


  }

  render() {
    const { todo } = this.state;


    return (
      <>
        <div className="valin ">
          <div className="frist1">
            <form onSubmit={this.handleOnSubmit}>
              <h1 className="text1">Todo App</h1><br />
              <div className="input2">

                <input type="text" name="todo" id="todo" value={todo} onChange={this.handleInput} className="form" />
                <button type="submit" className="deepak1" disabled={this.state.todo === ''}><i className="super"></i></button>
              </div>
            </form>
          </div >
        </div >

      </>
    );

  }
}

export default Main;
