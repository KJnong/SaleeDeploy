import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Search extends Component {
    render() {
        return (
            <div>
                <form class="form-inline md-form mr-auto mb-4">
                    <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                    <button class="btn aqua-gradient btn-rounded btn-sm my-0" type="submit">Search</button>
                </form>
            </div>)
    }
}
