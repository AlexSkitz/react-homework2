import React, { Component, Fragment } from "react";

class Films extends Component {
    constructor(props) {
        super(props);
        this.films = [];
        this.state = {
            searchFieldValue: '',
            sortedFilms: [],
        }
    }

    componentDidMount() {
        const url = 'http://api.tvmaze.com/shows';
        fetch(url)
            .then((Response) => {
                return Response.json();
            })
            .then((data) => {
                let arr = [];
                let arrayLenght = 20;

                if (data.length < arrayLenght) { arrayLenght = data.length }
                for (let i = 0; i < arrayLenght; i++) {
                    arr.push({
                        name: data[i].name,
                        year: data[i].premiered.slice(0, 4),
                        runtime: data[i].runtime,
                    });
                }
                this.setState({ ...this.state, sortedFilms: [...arr] });
                this.films = [...arr];
            });
    }
    TypeValue = (value) => {
        this.setState({ value: value });
    }
    sortValue = (field) => {
        return (a, b) => a[field] > b[field] ? 1 : -1;
    }

    onSortButton = (field) => {
        let arrFilms = [...this.films];
        arrFilms.sort(this.sortValue(field));
        this.setState({ ...this.state, sortedFilms: [...arrFilms] });
    }

    searchField = (event) => {
        let arr = [];
        arr = this.films.filter(item => item.name.includes(event.target.value));
        this.setState({ ...this.state, sortedFilms: [...arr], searchFieldValue: event.target.value });
    }

    render() {
        return (
            <Fragment>
                <div className="container">
                    <div className="search">
                        <input placeholder="Search..." onChange={event => this.searchField(event)} value={this.state.searchFieldValue}></input>
                    </div>
                    <div className="filters">
                        <button  onClick={() => { this.onSortButton('name') }}>Name</button>
                        <button  onClick={() => { this.onSortButton('year') }}>Year</button>
                        <button  onClick={() => { this.onSortButton('runtime') }}>Runtime</button>
                    </div>
                    <div className="filmList">
                        <ul>
                            {(this.state.sortedFilms.length) && (() => {
                                return (
                                    <li>
                                        <span>Title</span>
                                        <span>Year</span>
                                        <span>Runtime</span>
                                    </li>
                                )
                            })()}
                            {(this.state.sortedFilms.length === 0) ? 'No data' :
                                this.state.sortedFilms.map((elem, index) => {
                                    return (
                                        <li key={index}>
                                            <span>{elem.name}</span>
                                            <span>{elem.year}</span>
                                            <span>{elem.runtime}</span>
                                        </li>
                                    );
                                })}


                        </ul>
                    </div>
                </div>
            </Fragment >
        )
    }
}

export default Films;