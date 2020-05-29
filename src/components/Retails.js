import React from 'react';
import Moment from 'moment'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/ComponentStyle/Form.css'
import { apiUrl } from '../config'

const Retails = (props) => {


    return (
        <div className="container-fluid">
            <div className="row row-cols-1 row-cols-md-3">
                {props.salees.map(sale => ( 
                    <div className="col mb-4">
                        <div className="card">
                            <div style={{ backgroundImage: `url('${apiUrl}/${sale.imagePath.replace('uploads', 'uploads/')}')` }} className="card-image" alt="Card image cap" />
                            <div className="card-body">
                                <h3 className="card-title">{sale.name}</h3>
                                <p><small className="card-text">{sale.item}</small></p>
                                <small className="card-text">Was: R{sale.was}</small>
                                <p><small className="card-text">Now: R{sale.now}</small></p>
                                <small>{Moment(sale.created).fromNow()}</small>
                            </div>
                    <button type="button" class="btn btn-danger">Remove</button>
                    </div>
                </div>))}
                </div>
        </div>
    )
}

export default Retails;