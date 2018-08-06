import React, {Component} from 'react'
import {compose, graphql, Query } from 'react-apollo';

import uploadFile from './graphql/mutations/fileUpload.graphql'
import getFile from './graphql/queries/getFile.graphql'

import img from './images/Logo_TV_2015.png'


class Index extends Component {

  componentDidMount() {
    //const {uploadFile} = this.props;


    //const file = new Blob(['Foo.'], { type: 'text/plain' });
    //file.name = 'bar.png'


  }


  handleUploadFile(file) {
    const {uploadFile} = this.props;
    const options = {
      variables: {
        file: file
      }
    }

    uploadFile(options)
    .then((data) => {console.log(data)})
    .catch(() => {console.log("error")});


    console.log(file);

  }

  componentWillReceiveProps(next) {
    //console.log(next);
  }

  render() {
    return(
      <div>
        <input type="file"  required onChange={({target: {validity,files: [file]}}) => this.handleUploadFile(file)} />
      </div>
    )
  }
}

const options = {
  options: (data) => ({
    name:"ddd",
    variables: {
      path: "ddd"
    },
    fetchPolicy: 'network-only'
  })
}

export default compose (
  graphql(uploadFile, {name: 'uploadFile'})
  //graphql(getFile, options)
)(Index);
