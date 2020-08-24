import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import './Classifier.css'

class Classifier extends Component {
    state = { 
        files: []
     }
    onDrop = (files) => {
        this.setState({files})
    }
    render() { 
        const files = this.state.files.map(file => (
            <li key={file.name}>
              {file.name} - {file.size} bytes
            </li>
          ));
        return ( 
        <Dropzone onDrop={this.onDrop}>
            {({getRootProps, getInputProps}) => (
              <section className="container">
                <div {...getRootProps({className: 'dropzone back'})}>
                  <input {...getInputProps()} />
                  <p>Drag 'n' drop some files here, or click to select files</p>
                </div>
                <aside>
                  <h4>Files</h4>
                  <ul>{files}</ul>
                </aside>
              </section>
            )}
        </Dropzone> );
    }
}
 
export default Classifier;