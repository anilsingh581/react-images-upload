import React, { Component } from 'react';

class ImageUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: '',
            imagePreview_Url: ''
        };

        this.handleImageChange = this.handleImageChange.bind(this);
        this.SaveSubmit = this.SaveSubmit.bind(this);
    }

    SaveSubmit(e) {
        e.preventDefault();
        console.log(this.state.imagePreview_Url);
        //TODO - save > this.state.imagePreview_Url in you DB using your API logic.
    }

    handleImageChange(e) {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreview_Url: reader.result
            });
        }
        reader.readAsDataURL(file)
    }

    render() {
        return (
            <div style={{paddingTop:40}}>
                <div>
                    <input type="file" onChange={this.handleImageChange} />
                    <button onClick={this.SaveSubmit}>Save/Upload Image in DB</button>
                </div>
                <div>
                    {/* <h4>Uploaded Image Preview</h4> */}
                    <img src={this.state.imagePreview_Url} />
                </div>                
                
            </div>
        )
    }

}

export default ImageUpload;