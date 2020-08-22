import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import API from "./utils/API.js";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    employees: [{}]
  };

  componentDidMount() {
    API.getEmployees().then(results => {
      this.setState({
        employees: results.data.results,
      })
      console.log(this.state.employees);
    });
  }

  removeEmployee = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const employees = this.state.employees.filter(employee => employee.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ employees });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Employee Directory</Title>
        {this.state.employees.map(employee => (
          <FriendCard
            removeEmployee={this.removeEmployee}
            // id={employee.id}
            // key={employee.id}
            // name={employee.name}
            // image={employee.image}
            // occupation={employee.occupation}
            // location={employee.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
