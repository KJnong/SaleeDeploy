import React from 'react'
import '../components/ComponentStyle/Form.css'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { apiUrl } from '../config'

class Form extends React.Component {

    state = {
        image: null
    }

    fileSelected = (e) => {

        this.setState({
            image: e.target.files[0]
        })

    }

    sendSalee = async (e) => {
        e.preventDefault();

        const item = e.target.elements.items.value
        const was = e.target.elements.was.value
        const now = e.target.elements.now.value

        let formData = new FormData();
        formData.append("image", this.state.image, this.state.image.name);
        formData.append("item", item);
        formData.append("was", was);
        formData.append("now", now);


        e.currentTarget.reset();

        const token = localStorage.getItem('auth-token');
        await axios({
            method: 'Post',
            url: apiUrl + '/salee',
            data: formData,
            headers: { Authorization: `Bearer ${token}` }
        })
        this.props.refresh();
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="auth-inner">
                        <form onSubmit={this.sendSalee} >
                            <h3>New Salee</h3>

                            <div class="custom-file">
                                <input type="file" onChange={this.fileSelected} class="custom-file-input" id="customFile" />
                                <label class="custom-file-label" for="customFile">Image</label>
                            </div>

                            <div className="form-group">
                                <label> </label>
                                <input className="form-control" type="text" name="items" placeholder='Item Name' />
                            </div>

                            <div className="form-group">
                                <label> </label>
                                <input className="form-control" type="text" name="was" placeholder='Previous Price' />
                            </div>

                            <div className="form-group">
                                <label> </label>
                                <input className="form-control" type="number" name="now" placeholder='Current Price' />
                            </div>

                            <button type="submit" className="btn btn-primary btn-block">Send Salee</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default Form;