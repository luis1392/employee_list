import React, { Component } from 'react';

import {employees} from "../../utils/db-employees"

import Title from "../Title";
import Employee from "../Employee";
import TableEmployees from "../TableEmployees"

class ListEmployees extends Component {
    state = {
        loading: true,
        error: null,
        employees: null ,
    }

    componentDidMount = () => {
        this.setState({
            loading: false,
            employees: employees
        });
    };
    renderElementEmployeesList = employees => {
        console.log(employees)
        const employee = employees.map(element => {
          return <Employee key={element.id} personalData={element} />;
        });
        return employee;
    };
    
    render() {
        const { employees, loading, error } = this.state;
        return (
            <React.Fragment>
                {loading && <p>Cargando...</p>}
                {!employees && "Sin resultados"}
                {!loading &&
                employees && (
                    <React.Fragment> 
                        <Title text="Lista de empleados"/> 
                        <TableEmployees>
                            {this.renderElementEmployeesList(employees)}    
                        </TableEmployees>
                    </React.Fragment>
                )}

                {error && <p>{error.message}</p>}
            </React.Fragment>
        );
    }
}

export default ListEmployees;