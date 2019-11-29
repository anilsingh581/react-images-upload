import React, { Component } from 'react'
import ReactTable from 'react-table'
import ReactTableDefaults from 'react-table'

export default class User extends Component {
    data = [];
    columns = [];

    constructor(props) {
        super(props);

        //ReactTableDefaults used for Display Default number of Rows
        Object.assign(ReactTableDefaults, {
            defaultPageSize: 5,
            minRows: 1
        });

        //Your Grid Data
        this.data = [{
            id: 10001,
            name: 'Anil Singh',
            age: 35,
            friend: {
                name: 'Dilip Singh',
                age: 35,
            }
        }, {
            id: 10002,
            name: 'Sunil Singh',
            age: 25,
            friend: {
                name: 'Sushil',
                age: 26,
            }
        }, {
            id: 10003,
            name: 'Sushil Singh',
            age: 26,
            friend: {
                name: 'Anil',
                age: 35,
            }
        }, {
            id: 10004,
            name: 'Aradhya',
            age: 5,
            friend: {
                name: 'Reena ',
                age: 28,
            }
        }, {
            id: 10005,
            name: 'Reena Singh',
            age: 28,
            friend: {
                name: 'Aradhay',
                age: 5,
            }
        }, {
            id: 10006,
            name: 'UP Singh',
            age: 35,
            friend: {
                name: 'Dilip',
                age: 35,
            }
        }];

        //Your ReactTable Disply columns
        this.columns = [
            {
                Header: 'ID', // Custom header components!
                accessor: 'id',
                Cell: props => <span className='number'>{props.value}</span>
            }, {
                Header: 'Name',
                accessor: 'name',
                Cell: props => <span className='number'>{props.value}</span>,
                filterable: true
            }, {
                Header: 'Age',
                accessor: 'age',
                Cell: props => <span className='number'>{props.value}</span> // Custom cell components!,         
            }, {
                id: 'friendName', // Required because our accessor is not a string
                Header: 'Friend Name',
                accessor: d => d.friend.name // Custom value accessors!           
            }, {
                Header: props => <span>Friend Age</span>, // Custom header components!
                accessor: 'friend.age'
            }]
    }
    render() {
        return (
            <>
                <div><h4>User List -</h4></div>
                <div>
                    <ReactTable 
                    data={this.data} 
                    columns={this.columns} 
                    defaultPageSize={5} 
                    minRows={2} />
                </div>
            </>
        )
    }
}