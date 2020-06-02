import React, { Component } from 'react'
import '../App.css';
import Header from './Header'
import LoadingGIF from './LoadingGif'
import Sales from './Sales'
import axios from 'axios'
import Search from './Search';
import { apiUrl } from '../config'


export default class Home extends Component {

    state =
    { 
      loading :true,
      salees: []
    }

    loadContent = async () => {

        const {data} = await axios.get(apiUrl + '/salee')
    
        this.setState({ salees: data, loading:false });
      }
    
      componentWillMount() {
        this.loadContent();
      }
      render() {

        const load = this.state.loading? <LoadingGIF/>: null
        return (
          <div>
            <Header />
            {load}           
            <Sales salees={this.state.salees} />
          </div>
        );
      }
}
