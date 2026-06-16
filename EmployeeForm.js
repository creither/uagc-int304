import React from 'react';
import './EmployeeForm.css';

class EmployeeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            title: '',
            department: ''
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        this.props.addEmployee({
            name: this.state.name,
            email: this.state.email,
            title: this.state.title,
            department: this.state.department
        });

        this.setState({
            name: '',
            email: '',
            title: '',
            department: ''
        });
    };

    render() {
        return (
            <form className="employee-form" onSubmit={this.handleSubmit}>
                <h2>Employee Form</h2>

                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                />

                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                />

                <label>Job Title:</label>
                <input
                    type="text"
                    name="title"
                    value={this.state.title}
                    onChange={this.handleChange}
                />

                <label>Department:</label>
                <input
                    type="text"
                    name="department"
                    value={this.state.department}
                    onChange={this.handleChange}
                />

                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default EmployeeForm;
