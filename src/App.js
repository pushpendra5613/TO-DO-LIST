import './App.css';
import List from './Components/List';
import React from 'react'


class App extends React.Component {
  state = {
    items: [],
    text: ""
  }
  handleChange = e => {
    this.setState({
      text: e.target.value
    })
  }

  handleAdd = e => {
    if (this.state.text !== "") {
      const newitems = [...this.state.items, this.state.text];
      this.setState({
        items: newitems,
        text: ""
      })
    }
  }

  handledel = id => {
    const Olditems = [...this.state.items]
    const newitems = Olditems.filter((element, i) => {
      return i !== id
    })
    this.setState({
      items: newitems
    })
  }


  render() {
    return (
      <div className="App">
        <div className="container-fluid my-5">
          <div className="row">
            <div className="col-sm-6 mx-auto p-3 shadow-lg">
              <h2 className="text-center"> To Do List</h2>
              <div className="row">
                <div className="col-9">
                  <input type="text" className="form-control" placeholder="Write Your Plan" value={this.state.text} onChange={this.handleChange} />
                </div>
                <div className="col-2">
                  <button className="btn btn-warning px-4 font-weight-bold" onClick={this.handleAdd}> ADD </button>
                </div>
                <List items={this.state.items} sendData={this.handledel} />
              </div>
            </div>
          </div>
        </div>
      </div >
    )
  }
}

export default App

