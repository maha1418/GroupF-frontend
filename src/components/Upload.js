import React, { Component } from "react";
import { Grid, Cell, Layout, Content, Textfield, Button, Snackbar } from "react-mdl";
import axios from "axios";
const BSON = require("bson");

class Upload extends Component {
  constructor(props) {
    super(props);
    this.curriculum = React.createRef();
    this.name = React.createRef();
    this.University = React.createRef();
    this.Major = React.createRef();
    this.file = React.createRef();
    this.state = { isSnackbarActive: false, msg: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    let self = this;
    const bsonFile = BSON.serialize(this.file.current.files[0]);
    let formFields = {
      name: this.name.current.inputRef.value,
      University: this.University.current.inputRef.value,
      Major: this.Major.current.inputRef.value,
      file: bsonFile
    };

    axios
      .post("http://localhost:5000/api/items/", formFields)
      .then((response) => {
        self.setState({ msg: "Submit Succeed", isSnackbarActive: true });
        console.log(response);
      })
      .catch((error) => {
        self.setState({ msg: "Submit Failed", isSnackbarActive: true });
        console.log(error);
      });
  }
  render() {
    return (
      <div style={{ height: "300px", position: "relative" }}>
        <Layout>
          
              <Content>
                <Textfield
                  ref={this.name}
                  label="الاسم..."
                  style={{ width: "200px" }}
                />
              </Content>

              <Content >
                <Textfield
                  ref={this.University}
                  label="الجامعة..."
                  style={{ width: "200px" }}
                />
              </Content>
              <Content >
                <Textfield
                  ref={this.Major}
                  label="التخصص..."
                  style={{ width: "200px" }}
                />
              </Content>
              <Content >
                <input ref={this.file} type="file" />
              </Content>
              <Content>
                <Button primary onClick={this.handleSubmit}>
                  تســـليـم
                </Button>
              </Content>
            
        </Layout>
        <Snackbar
          active={this.state["isSnackbarActive"]}
          onClick={this.handleClickActionSnackbar}
          action=""
        >
          {this.state["msg"]}
        </Snackbar>
      </div>
    );
  }
}

export default Upload;
