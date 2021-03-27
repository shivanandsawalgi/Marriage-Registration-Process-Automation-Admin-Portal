import React, { Component } from "react";
import axios from 'axios';

import './Login.css';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            uName: "",
            password: "",
            showErrorMessage: false,

        }

    }

    changeValueHandler = (event) => {

        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]: value
        })

    }

    // clickLoginHandler = () => {
    //     if (this.state.uName == "admin" && this.state.password == "admin@1234") {
    //         if (this.state.showErrorMessage == true) {
    //             this.setState({
    //                 showErrorMessage: false,
    //                 password : ""
    //             });
    //         }
    //         this.props.clickLoginHandler();
    //     } else {
    //         this.setState({
    //             showErrorMessage: true
    //         })
    //     }

    // }

    clickLoginHandler = () => {
        let urlForGettingList = "https://dpfl604t9k.execute-api.ap-south-1.amazonaws.com/Release/api/admin/login";
        let loginData = {
            "UserName": this.state.uName,
            "Password": this.state.password
        }
        axios.post(urlForGettingList, loginData)
            .then(responce => {
                if (responce.data.isSuccess == true) {

                    if (this.state.showErrorMessage == true) {
                        this.setState({
                            showErrorMessage: false,
                            password: ""
                        });
                    }
                    this.props.saveUserData(responce.data);
                    this.props.clickLoginHandler();

                }
                else {
                    this.setState({
                        showErrorMessage: true
                    })

                }


            });
    }



    render() {


        return (
            <div className="outerDiv2 col-lg-12 col-md-12 col-sm-12" style={{ height: "100vh" }}>
                <div>

                </div>
                <b className="titleCss">Login</b>
                <div className="loginDiv col-lg-5 col-md-8 col-sm-12">
                    <div className="nameDiv">
                        <label>User Name</label><br></br>
                        <input className="inputText"
                            type="text" name="uName" value={this.state.uName} onChange={this.changeValueHandler} />
                    </div>

                    <div className="nameDiv">
                        <label>Password</label><br></br>
                        <input className="inputText"
                            type="password" name="password" value={this.state.password} onChange={this.changeValueHandler} />

                    </div>
                    {this.state.showErrorMessage && <div className={"redTextCss"}>
                        Please enter correct password..
                    </div>}

                    <div className="nameDiv centerDisplay">
                        <button className="btn btn-primary" onClick={this.clickLoginHandler}>Login</button>
                    </div>
                </div>


            </div>
        )
    }
}

export default Login;