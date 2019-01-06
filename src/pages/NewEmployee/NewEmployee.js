import React, { Component } from 'react';

import NewEmployeeForm from "../../components/NewEmployeeForm"

class NewEmployee extends Component {
    render() {
        return (
            <React.Fragment>
                <NewEmployeeForm/>
            </React.Fragment>
        );
    }
}

export default NewEmployee;