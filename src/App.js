import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import API from "./utils/API.js";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    employees: []
  };

  componentDidMount() {
    API.getEmployees().then(results => {
      this.setState({
        employees: results.data.results,
      })
      // console.log(this.state.employees);
      // this.state.employees.map(employee => ( console.log(employee.name.first) ))
    });
  }

  removeEmployee = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const employees = this.state.employees.filter(employee => employee.login.uuid !== id);
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
            id={employee.login.uuid}
            key={employee.login.uuid}
            name= {employee.name.first + " " + employee.name.last}
            image={employee.picture.medium}
            email={employee.email}
            location={employee.location.street.number + " " + employee.location.street.name + ", " + employee.location.city + ", " + employee.location.state + " " + employee.location.postcode}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
