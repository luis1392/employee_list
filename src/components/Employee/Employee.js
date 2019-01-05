import React, { Component } from 'react';

class Employee extends Component {
    render() {
        console.log(this.props.personalData);
        
        
        const {name, last_name, email, birthdate, residence} = this.props.personalData
        return (
            <React.Fragment>
                <tr>
                    <td>{name} {last_name}</td>
                    <td>{email}</td>
                    <td>{birthdate}</td>
                    <td>{residence.city}</td>
                    <td>{residence.colony}</td>
                    <td>{residence.address_number}</td>
                    <td>{residence.postal_code}</td>
                </tr>
            </React.Fragment>
        );
    }
}

export default Employee;