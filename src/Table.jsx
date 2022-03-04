import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';

function Table(props) {
    /* Insert your code here /**/

    return (
        <table className="table table-bordered table-striped">
            <thead className="thead-dark">
                    <tr>
                        <th >Name</th>
                        <th >Description</th>
                        <th >Price</th>
                        <th ></th>
                    </tr>
            </thead>
            <tbody >
                {props.entries.map((row, index) => <tr key={row.id} id={row.id}><td>{row.name}</td><td>{row.desc}</td><td>{row.price}</td><td><button id={index} onClick={() => props.handleDelete(row.id)}>x</button></td></tr>)}
                
        </tbody>
        </table>
    )
}

export default Table;