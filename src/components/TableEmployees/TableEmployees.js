import React, { Component } from 'react';

class TableEmployees extends Component {
    render() {
        return (
            <table className="table table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Email</th>
                        <th scope="col">Fecha de Nacimiento</th>
                        <th scope="col">Ciudad</th>
                        <th scope="col">Colonia</th>
                        <th scope="col">Número</th>
                        <th scope="col">Codigo postal</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.children}
                </tbody>
            </table>
        );
    }
}

export default TableEmployees;