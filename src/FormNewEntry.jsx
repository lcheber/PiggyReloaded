import React from 'react'

function FormNewEntry(props){
    return (
        <>
            <h1>Add new expense</h1>
            <form onSubmit={props.handleNewEntry}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" value={props.name} name="name" className="form-control"></input>
                    <label>Description</label>
                    <textarea value={props.description} name="description" className="form-control"></textarea>
                    <label>Price</label>
                    <input type="number" value={props.price} name="price" step="0.01" className="form-control"></input>
                </div>
                    <button type="submit">Add expense</button>
            </form>
        </>
    )
}

export default FormNewEntry;