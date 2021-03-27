import React, { Component } from 'react';
import BasicDatailsForm from '../MarriageForms/Components/BasicDetailsForm';
import GenericTable from '../Table/GenericTable';
import { Tab, Tabs } from 'react-bootstrap'
import DownloadCertificate from '../Certificate/DownloadCertificate';
import './Dashboard.css';
import Login from '../Login/Login.jsx'
import FormPrintHOC from '../FormPrinting/FormPrintHOC';
import Priest from '../FormPrinting/Priest';

class Dashboard extends Component {

    constructor() {
        super();
        this.state = {
            showDetails: false,
            dataForMarriageForm: {},
            showCertificate: false,
            selectedTab: "pending",
            showLoginScreen : true,
            showFormToPrint : false,
            userData : {}

        }
    }


    decideToShowDetails = (showDetailsFlag) => {

        this.setState({
            showDetails: showDetailsFlag,
            showCertificate: false,
            showFormToPrint : false
        })
    }

    addDataToForm = (dataObj) => {

        this.setState({
            dataForMarriageForm: dataObj
        }, this.showCertificate(true))
    }

    showCertificate = (showFlag) => {
        this.setState({
            showCertificate: showFlag,
            showDetails: false,
            showFormToPrint : false
        })
    }
    selectTabHandle=(key)=>{
        this.setState({
            selectedTab :key
        })

    }

    clickLoginHandler=()=>{
        this.setState({
            showLoginScreen : false

        })

    }

    closeCertificate = ()=>{
        this.setState({
            showCertificate: false,
            showDetails: false,
            showFormToPrint : false
        })

    }

    saveUserData = (userData)=>{
        this.setState({
            userData : userData
        })

    }

    render() {


        let { showDetails, dataForMarriageForm, showCertificate,showLoginScreen, showFormToPrint } = this.state;
        // console.log(showDetails);
        return (
            <div className={"outerDiv1"}>
                {/* <div>
                    hiii
                </div> */}

                <div>
                    {
                        <div className={"headerDiv"}> Welcome to the Admin Portal</div>
                    }
                </div>
                <div>
                    { showLoginScreen &&
                        <Login saveUserData={this.saveUserData} clickLoginHandler={this.clickLoginHandler}></Login>
                    }
                </div>
                <div>
                    {
                      !showLoginScreen &&  !showCertificate && !showDetails && <div>
                            <Tabs defaultActiveKey={this.state.selectedTab} activeKey ={this.state.selectedTab} unmountOnExit={true}
                             id="uncontrolled-tab-example" onSelect={this.selectTabHandle}>


                                <Tab eventKey="pending" title="Pending Request">
                                    <GenericTable decideToShowDetails={this.decideToShowDetails}
                                        addDataToForm={this.addDataToForm}
                                        listType={this.state.selectedTab}
                                        tableTitle ={"Pending Requests"} 
                                        userData={this.state.userData}>

                                    </GenericTable></Tab>

                                <Tab eventKey="Approved" title="Approved Request">
                                    <GenericTable decideToShowDetails={this.decideToShowDetails}
                                        addDataToForm={this.addDataToForm}
                                        showDownloadCertificate="true"
                                        showCertificate={this.showCertificate}
                                        listType={this.state.selectedTab}
                                        tableTitle ={"Approved Requests"}
                                        userData={this.state.userData}>

                                    </GenericTable></Tab> </Tabs></div>
                    }
                </div>
                <div>
                    {
                          showDetails && <BasicDatailsForm dataForMarriageForm={dataForMarriageForm}
                            decideToShowDetails={this.decideToShowDetails} >

                        </BasicDatailsForm>
                    }
                </div>
                <div>{
                    showCertificate && <DownloadCertificate dataForMarriageForm={dataForMarriageForm}
                    closeCertificate = {this.closeCertificate}
                    ></DownloadCertificate>
                }
                </div>
                { showFormToPrint && <div>
                    <FormPrintHOC></FormPrintHOC>
                </div>}

                <FormPrintHOC></FormPrintHOC>
               
            </div>
        )

    }
}

export default Dashboard;