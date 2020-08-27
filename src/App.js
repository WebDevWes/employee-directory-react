import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import API from "./utils/API.js";
import Button from "./components/buttons/button";
import Button2 from "./components/buttons/button2";
import SearchForm from "./components/buttons/SearchForm";

class App extends Component {
  // Setting this.state.employees to the employees json array
  state = {
    employees: [],
    filter: "",
  };

  componentDidMount() {
    API.getEmployees().then((results) => {
      this.setState({
        employees: results.data.results,
      });
    });
  }

  // Function to sort by first name, alphabetical in ascending order
  sortEmployees = (employees) => {
    const employeeSort = [...employees];
    employeeSort.sort(function (a, b) {
      if (a.name.first.toLowerCase() < b.name.first.toLowerCase()) return -1;
      if (a.name.first.toLowerCase() > b.name.first.toLowerCase()) return 1;
      return 0;
    });
    this.setState({ employees: employeeSort });
  };

  handleButtonClick = (event) => {
    event.preventDefault();
    this.sortEmployees(this.state.employees);
  };

  // Function to sort by first name, alphabetical in descending order
  sortReverseEmployees = (employees) => {
    const employeeSort = [...employees];
    employeeSort.sort(function (a, b) {
      if (a.name.first.toLowerCase() > b.name.first.toLowerCase()) return -1;
      if (a.name.first.toLowerCase() < b.name.first.toLowerCase()) return 1;
      return 0;
    });
    this.setState({ employees: employeeSort });
  };

  handleButtonClick2 = (event) => {
    event.preventDefault();
    this.sortReverseEmployees(this.state.employees);
  };

  handleOnChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
  };

  filterEmployees = (event) => {
    event.preventDefault();
    if (!this.state.filter) {
      return;
    } else {
      const employees = employees.filter(
        (employee) =>
          employee.name.first.toLowerCase() === this.state.filter.toLowerCase()
      );
      console.log("employeessssss???", employees);
      this.setState({ employees: employees });
    }
  };

  removeEmployee = (id) => {
    // Filter this.state.employees for employees with an id not equal to the id being removed
    const employees = this.state.employees.filter(
      (employee) => employee.login.uuid !== id
    );
    // Set this.state.employees equal to the new employees array
    this.setState({ employees });
  };

  // Map over this.state.employees and render a FriendCard component for each employee object
  render() {
    return (
      <Wrapper>
        <Button handleButtonClick={this.handleButtonClick} />
        <Button2 handleButtonClick2={this.handleButtonClick2} />
        <Title>Employee Directory</Title>
        <SearchForm
          handleOnChange={this.handleOnChange}
          filter={this.state.filter}
          filterEmployees={this.filterEmployees}
        />
        {this.state.employees.map((employee) => (
          <FriendCard
            removeEmployee={this.removeEmployee}
            id={employee.login.uuid}
            key={employee.login.uuid}
            name={employee.name.first + " " + employee.name.last}
            image={employee.picture.medium}
            email={employee.email}
            location={
              employee.location.street.number +
              " " +
              employee.location.street.name +
              ", " +
              employee.location.city +
              ", " +
              employee.location.state +
              " " +
              employee.location.postcode
            }
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
