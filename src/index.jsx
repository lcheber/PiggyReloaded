import React from 'react'
import ReactDOM from "react-dom"
import Table from './Table'
import FormNewEntry from './FormNewEntry.jsx'
import Total from './Total.jsx'


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            entries: [
                { id: 1, name: "Loto ticket", desc: "", price: 20 },
                { id: 2, name: "Beers", desc: "Party night \\o/", price: -15 },
                { id: 3, name: "Phone Bill", desc: "January", price: -29.99 },
            ]
        }
        this.handleDelete = this.handleDelete.bind(this); // indispensable si la fonction n'est pas flechée
        this.handleNewEntry = this.handleNewEntry.bind(this); // indispensable si la fonction n'est pas flechée
    }

    handleDelete(id) {
        const arrayCopy = this.state.entries.filter((row) => row.id !== id);
        this.setState({ entries: arrayCopy });
    }

    handleNewEntry(e) {
        e.preventDefault();
        const newEntry = { id: Date(), name: e.target.name.value, desc: e.target.description.value, price: e.target.price.value } // ((this.state.entries[this.state.entries.length -1].id) + 1) ne fonctionne plus lorsqu'il n'y a plus d'entrée dans la liste
        var rows = this.state.entries;
        rows.push(newEntry)
        this.setState({entries: rows})
        e.target.name.value = ''
        e.target.description.value = ''
        e.target.price.value = null

        // console.log((this.state.entries[this.state.entries.length -1].id) + 1)

    }

    updateTotal = (props) => {
        let sum = 0
        for (let i=0; i < this.state.entries.length; i++) {
            sum += parseFloat(this.state.entries[i].price)
        }
        sum = sum.toFixed(2)
        return sum
    }

    render() {
        return (
            <>
                <Table entries={this.state.entries} handleDelete={this.handleDelete} />
                <Total updateTotal={this.updateTotal}/>
                <FormNewEntry handleNewEntry={this.handleNewEntry} name={this.props.name} description={this.props.description} price={this.props.price} />
            </>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))