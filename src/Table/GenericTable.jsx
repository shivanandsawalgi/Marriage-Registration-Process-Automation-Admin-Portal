import React, { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import genericAjax from "../Common/AjaxFunctions/GenericAjax";
import 'react-bootstrap-table/dist/react-bootstrap-table.min.css';
import './GenericTable.css';
import axios from 'axios';


class GenericTable extends Component {
    constructor() {
        super();

        this.state = {
            pendingList: [],
        }
    }

    componentDidMount = () => {
        let urlForGettingList = this.props.listType == "pending" ? "https://dpfl604t9k.execute-api.ap-south-1.amazonaws.com/Release/api/admin/getallpendingrecords"
            : "https://dpfl604t9k.execute-api.ap-south-1.amazonaws.com/Release/api/admin/getallapprovedrecords";

        let AjxConfig = {
            "method": "GET",
            "url": urlForGettingList
        }

        axios.post(urlForGettingList,this.props.userData)
            .then(responce => {

                console.log(responce.data);

                let temp = [...responce.data]

                this.setState({
                    pendingList: temp
                    // pendingList : responce.data
                })
            });


    }
    showDetails = (row) => {
        this.props.addDataToForm(row)
        this.props.decideToShowDetails(true)
    }

    showCertificate = (row) => {
        this.props.addDataToForm(row)
        // this.props.showCertificate(true)
    }
    linkFormatter = (cell, row, formatExtraData, rowIndex) => {
        return (
            <div>
                {/* <a href="#" onClick={this.showDetails}>Show Details</a> */}
                <button type="button" class="btn btn-link" onClick={this.showDetails.bind(this, row)}>Show Details</button>
            </div>
        )

    }

    certificateLinkFormatter = (cell, row, formatExtraData, rowIndex) => {
        return (
            <div>
                {/* <a href="#" onClick={this.showDetails}>Show Details</a> */}
                <button type="button" class="btn btn-link" onClick={this.showCertificate.bind(this, row)}>Show Certificate</button>
            </div>
        )

    }

    render() {

        return (
            <div className={"bgColor"}>
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <label className={"titleColor"}><b>{this.props.tableTitle}</b></label>
                </div>



                <BootstrapTable className={"tablebg"} search={true} data={this.state.pendingList} bordered={true} striped hover condensed scrollY>
                    {this.props.showDownloadCertificate && <TableHeaderColumn width= '125' dataField='certificateNumber' >Certificate ID</TableHeaderColumn>}
                    <TableHeaderColumn width= '125' dataField='applicationId' isKey>Application ID</TableHeaderColumn>
                    <TableHeaderColumn width= "150" dataField='husbandFirstName' >Applicants Name</TableHeaderColumn>
                    <TableHeaderColumn width= "125" dataField='marriageDate'>Date of Marriage</TableHeaderColumn>
                    <TableHeaderColumn width= "125" dataField='link' dataFormat={this.linkFormatter}>Show Details</TableHeaderColumn>
                    {this.props.showDownloadCertificate && <TableHeaderColumn  width= "125" dataField='cerificate' dataFormat={this.certificateLinkFormatter}>Download Certificate</TableHeaderColumn>}

                </BootstrapTable>
            </div>
        )
    }
}

export default GenericTable;